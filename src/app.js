const CENTER = [55.753855, 37.615931];
const RADIUS = 0.01
const R_MIN = 0, R_MAX = 10
const DEFAULT_DURATION = 30
const MAX_DURATION = 99;

let coords;

function fix(x, prec) {
    return parseFloat(x.toFixed(prec));
}

function mean(v1, v2) {
    return fix((v1 + v2) / 2, 1)
}

function getCircleCoords(angle, distance, center) {
    let lon = center[0] + RADIUS * Math.cos(-angle * Math.PI / 180) * distance;
    let lat = center[1] + RADIUS * Math.sin(-angle * Math.PI / 180) * 1.8 * distance;
    return [fix(lon, 6), fix(lat, 6)];
}

function getDuration(fromCoords, toCoords, routingMode = 'masstransit') {
    return new Promise(function (resolve, reject) {
        var route = new ymaps.multiRouter.MultiRoute({
            referencePoints: [fromCoords, toCoords],
            params: {
                routingMode: routingMode
            }
        });

        route.events.once('update', function () {
            var activeRoute = route.getActiveRoute();
            if (!activeRoute || !activeRoute.properties || !activeRoute.properties.get('duration')) {
                resolve(null);
                return;
            }
            let duration = activeRoute.properties.get('duration').value;
            resolve(duration);
        });
    });
}

function checkDuration(duration, gap = 60) {
    let durationMinutes = parseInt($('#duration').val())
    if (durationMinutes > MAX_DURATION) {
        durationMinutes = MAX_DURATION;
    }
    let maxDuration = durationMinutes * 60;
    let delta = maxDuration - duration
    let absDelta = Math.abs(delta)

    if (absDelta > gap) {
        return -delta / absDelta;
    }

    return 0;
}

async function getAppropriatePoint(center, angle, R, Rmin, Rmax, map) {
    let coords = getCircleCoords(angle, R, center)
    let placemark = new ymaps.Placemark(coords)

    map.geoObjects.add(placemark)

    let duration = await getDuration(center, coords)
    let compareResult = checkDuration(duration)

    map.geoObjects.remove(placemark);

    if (compareResult === 0) {
        return {coords, R}
    }

    if (compareResult < 0) {
        Rmin = R
    } else {
        Rmax = R
    }

    let Rtmp = mean(Rmin, Rmax)

    if (R === Rtmp) {
        return {coords, R};
    }

    return await getAppropriatePoint(center, angle, Rtmp, Rmin, Rmax, map)
}

async function drawArea(point, myMap) {
    let R = mean(R_MIN, R_MAX)
    let coords
    let polyline = new ymaps.Polyline([], {}, {
        strokeColor: "#00000088",
        strokeWidth: 3
    })

    myMap.geoObjects.add(polyline)
    for (let i = 0; i < 36; i++) {
        polyline.geometry.insert(polyline.geometry.getLength(), point)
    }
    for (let angle = 0, i = 0; angle <= 360; angle += 10, i++) {
        setTimeout(async function () {
            ({coords, R} = await getAppropriatePoint(point, angle, R, R_MIN, R_MAX, myMap));
            polyline.geometry.set(i, coords)
        }, 0)
    }
}

function init() {
    let myMap = new ymaps.Map('map', {
        center: CENTER,
        zoom: 11
    });

    let CustomControlClass = function (options) {
        CustomControlClass.superclass.constructor.call(this, options);
        this._$content = null;
        this._geocoderDeferred = null;
    };

    ymaps.util.augment(CustomControlClass, ymaps.collection.Item, {
        onAddToMap: function (map) {
            CustomControlClass.superclass.onAddToMap.call(this, map);
            this.getParent().getChildElement(this).then(this._onGetChildElement, this);
        },

        _onGetChildElement: function (parentDomContainer) {
            let html = '<div class="duration">' +
                         '<label for="duration">Время в пути (мин):</label>' +
                         '<input type="number" value="' + DEFAULT_DURATION + '" id="duration">' +
                         '<button class="doit">Нарисовать</button>' +
                         '<div class="hint">Сначала нажмите на карту, чтобы поставить точку</div>' +
                       '</div>';
            this._$content = $(html).appendTo(parentDomContainer);
            $('#duration').jStepper({
                minValue: 1,
                maxValue: MAX_DURATION,
                defaultValue: 30
            })
            $('.doit').on('click', function() {
                drawArea(coords, myMap);
            });
        },
    });
    var customControl = new CustomControlClass();
    myMap.controls.add(customControl, {
        float: 'none',
        position: {
            top: 10,
            left: 10
        }
    });

    let placemark;

    myMap.events.add('click', function (e) {
        coords = e.get('coords');
        if (placemark) {
            myMap.geoObjects.remove(placemark)
        }
        placemark = new ymaps.Placemark(coords, {}, {
            preset: 'islands#redCircleDotIcon'
        })
        myMap.geoObjects.add(placemark)
        $('.hint').hide()
    });
}

window.ymaps.ready(init)
