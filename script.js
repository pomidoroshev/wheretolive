const MAX_DURATION = 40 * 60;
const CENTER = [55.753855, 37.615931];
const RADIUS = 0.01
const R_MIN = 0, R_MAX = 10

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
    return new Promise(function(resolve, reject) {
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
            duration = activeRoute.properties.get('duration').value;
            resolve(duration);
        });
    });
}

function checkDuration(duration, gap = 60) {
    let delta = MAX_DURATION - duration
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

async function init() {
    let myMap = new ymaps.Map('map', {
        center: CENTER,
        zoom: 11
    });
    myMap.geoObjects.add(new ymaps.Placemark(CENTER, {}, {
        preset: 'islands#redCircleDotIcon'
    }));

    let R = mean(R_MIN, R_MAX), coords
    let polyline = new ymaps.Polyline([], {}, {
        strokeColor: "#00000088",
        strokeWidth: 3
    })

    myMap.geoObjects.add(polyline)
    for (let i = 0; i < 36; i++) {
        polyline.geometry.insert(polyline.geometry.getLength(), CENTER)
    }
    for (let angle = 0, i = 0; angle <= 360; angle += 10, i++) {
        setTimeout(async function() {
            ({coords, R} = await getAppropriatePoint(CENTER, angle, R, R_MIN, R_MAX, myMap));
            polyline.geometry.set(i, coords)
        }, 0)
    }
}

ymaps.ready(init);
