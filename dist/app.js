(function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}return b})()({1:[function(a,b){function c(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}b.exports=function(a){return function(){var b=this,d=arguments;return new Promise(function(e,f){function g(a){c(i,e,f,g,h,"next",a)}function h(a){c(i,e,f,g,h,"throw",a)}var i=a.apply(b,d);g(void 0)})}}},{}],2:[function(a,b){b.exports=function(a){return a&&a.__esModule?a:{default:a}}},{}],3:[function(a,b){b.exports=a("regenerator-runtime")},{"regenerator-runtime":4}],4:[function(a,b){var c=function(){return this||"object"==typeof self&&self}()||Function("return this")(),d=c.regeneratorRuntime&&0<=Object.getOwnPropertyNames(c).indexOf("regeneratorRuntime"),e=d&&c.regeneratorRuntime;if(c.regeneratorRuntime=void 0,b.exports=a("./runtime"),d)c.regeneratorRuntime=e;else try{delete c.regeneratorRuntime}catch(a){c.regeneratorRuntime=void 0}},{"./runtime":5}],5:[function(a,b){!function(a){"use strict";function c(a,b,c,d){var f=b&&b.prototype instanceof e?b:e,g=Object.create(f.prototype),h=new n(d||[]);return g._invoke=j(a,c,h),g}function d(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function e(){}function f(){}function g(){}function h(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function i(a){function b(c,e,f,g){var h=d(a[c],a,e);if("throw"===h.type)g(h.arg);else{var i=h.arg,j=i.value;return j&&"object"==typeof j&&r.call(j,"__await")?Promise.resolve(j.__await).then(function(a){b("next",a,f,g)},function(a){b("throw",a,f,g)}):Promise.resolve(j).then(function(a){i.value=a,f(i)},function(a){return b("throw",a,f,g)})}}function c(a,c){function d(){return new Promise(function(d,e){b(a,c,d,e)})}return e=e?e.then(d,d):d()}var e;this._invoke=c}function j(a,b,c){var e="suspendedStart";return function(f,g){if(e==="executing")throw new Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;return p()}for(c.method=f,c.arg=g;;){var h=c.delegate;if(h){var i=k(h,c);if(i){if(i===y)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===e)throw e="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);e="executing";var j=d(a,b,c);if("normal"===j.type){if(e=c.done?"completed":"suspendedYield",j.arg===y)continue;return{value:j.arg,done:c.done}}"throw"===j.type&&(e="completed",c.method="throw",c.arg=j.arg)}}}function k(a,b){var c=a.iterator[b.method];if(void 0===c){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=void 0,k(a,b),"throw"===b.method))return y;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var e=d(c,a.iterator,b.arg);if("throw"===e.type)return b.method="throw",b.arg=e.arg,b.delegate=null,y;var f=e.arg;if(!f)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,y;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0);else return f;return b.delegate=null,y}function l(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function m(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function n(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(l,this),this.reset(!0)}function o(a){if(a){var b=a[t];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(r.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=void 0,b.done=!0,b};return d.next=d}}return{next:p}}function p(){return{value:void 0,done:!0}}var q=Object.prototype,r=q.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},t=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",v=s.toStringTag||"@@toStringTag",w="object"==typeof b,x=a.regeneratorRuntime;if(x)return void(w&&(b.exports=x));x=a.regeneratorRuntime=w?b.exports:{},x.wrap=c;var y={},z={};z[t]=function(){return this};var A=Object.getPrototypeOf,B=A&&A(A(o([])));B&&B!==q&&r.call(B,t)&&(z=B);var C=g.prototype=e.prototype=Object.create(z);f.prototype=C.constructor=g,g.constructor=f,g[v]=f.displayName="GeneratorFunction",x.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===f||"GeneratorFunction"===(b.displayName||b.name))},x.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,g):(a.__proto__=g,!(v in a)&&(a[v]="GeneratorFunction")),a.prototype=Object.create(C),a},x.awrap=function(a){return{__await:a}},h(i.prototype),i.prototype[u]=function(){return this},x.AsyncIterator=i,x.async=function(a,b,d,e){var f=new i(c(a,b,d,e));return x.isGeneratorFunction(b)?f:f.next().then(function(a){return a.done?a.value:f.next()})},h(C),C[v]="Generator",C[t]=function(){return this},C.toString=function(){return"[object Generator]"},x.keys=function(a){var b=[];for(var c in a)b.push(c);return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}return c.done=!0,c}},x.values=o,n.prototype={constructor:n,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(m),!a)for(var b in this)"t"===b.charAt(0)&&r.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if("throw"===b.type)throw b.arg;return this.rval},dispatchException:function(a){function b(b,d){return f.type="throw",f.arg=a,c.next=b,d&&(c.method="next",c.arg=void 0),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if("root"===e.tryLoc)return b("end");if(e.tryLoc<=this.prev){var g=r.call(e,"catchLoc"),h=r.call(e,"finallyLoc");if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error("try statement without catch or finally");else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&r.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var e=c;break}e&&("break"===a||"continue"===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method="next",this.next=e.finallyLoc,y):this.complete(f)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),y},finish:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),m(b),y},catch:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var e=d.arg;m(b)}return e}throw new Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:o(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),y}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},{}],6:[function(a){"use strict";function b(a,b){return parseFloat(a.toFixed(b))}function c(a,c){return b((a+c)/2,1)}function d(a,c,d){var e=Math.PI,f=d[0]+p*Math.cos(-a*e/180)*c,g=d[1]+1.8*(p*Math.sin(-a*e/180))*c;return[b(f,6),b(g,6)]}function e(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"masstransit";return new Promise(function(d){var e=new ymaps.multiRouter.MultiRoute({referencePoints:[a,b],params:{routingMode:c}});e.events.once("update",function(){var a=e.getActiveRoute();if(!a||!a.properties||!a.properties.get("duration"))return void d(null);var b=a.properties.get("duration").value;d(b)})})}function f(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:60,c=60*parseInt($("#duration").val()),d=c-a,e=Math.abs(d);return e>b?-d/e:0}function g(){return h.apply(this,arguments)}function h(){return h=(0,n.default)(m.default.mark(function a(b,h,i,j,k,l){var n,o,p,q,r;return m.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=d(h,i,b),o=new ymaps.Placemark(n),l.geoObjects.add(o),a.next=5,e(b,n);case 5:if(p=a.sent,q=f(p),l.geoObjects.remove(o),0!==q){a.next=10;break}return a.abrupt("return",{coords:n,R:i});case 10:if(0>q?j=i:k=i,r=c(j,k),i!==r){a.next=14;break}return a.abrupt("return",{coords:n,R:i});case 14:return a.next=16,g(b,h,r,j,k,l);case 16:return a.abrupt("return",a.sent);case 17:case"end":return a.stop();}},a,this)})),h.apply(this,arguments)}function i(){return j.apply(this,arguments)}function j(){return j=(0,n.default)(m.default.mark(function a(b,d){var e,f,h,j,k,l,o;return m.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:for(e=c(0,10),h=new ymaps.Polyline([],{},{strokeColor:"#00000088",strokeWidth:3}),d.geoObjects.add(h),j=0;36>j;j++)h.geometry.insert(h.geometry.getLength(),b);for(k=function(a,c){setTimeout((0,n.default)(m.default.mark(function i(){var j;return m.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,g(b,a,e,0,10,d);case 2:j=i.sent,f=j.coords,e=j.R,h.geometry.set(c,f);case 6:case"end":return i.stop();}},i,this)})),0)},l=0,o=0;360>=l;l+=10,o++)k(l,o);case 6:case"end":return a.stop();}},a,this)})),j.apply(this,arguments)}var k,l=a("@babel/runtime/helpers/interopRequireDefault"),m=l(a("@babel/runtime/regenerator")),n=l(a("@babel/runtime/helpers/asyncToGenerator")),o=[55.753855,37.615931],p=.01;window.ymaps.ready(function(){var a=new ymaps.Map("map",{center:o,zoom:11}),b=function a(b){a.superclass.constructor.call(this,b),this._$content=null,this._geocoderDeferred=null};ymaps.util.augment(b,ymaps.collection.Item,{onAddToMap:function(a){b.superclass.onAddToMap.call(this,a),this.getParent().getChildElement(this).then(this._onGetChildElement,this)},_onGetChildElement:function(b){this._$content=$("<div class=\"duration\"><label for=\"duration\">\u0412\u0440\u0435\u043C\u044F \u0432 \u043F\u0443\u0442\u0438 (\u043C\u0438\u043D):</label><input type=\"number\" value=\"30\" id=\"duration\"><button class=\"doit\">\u041D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C</button><div class=\"hint\">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0443</div></div>").appendTo(b),$(".doit").on("click",function(){i(k,a)})}});var c=new b;a.controls.add(c,{float:"none",position:{top:10,left:10}});var d;a.events.add("click",function(b){k=b.get("coords"),d&&a.geoObjects.remove(d),d=new ymaps.Placemark(k,{},{preset:"islands#redCircleDotIcon"}),a.geoObjects.add(d),$(".hint").hide()})})},{"@babel/runtime/helpers/asyncToGenerator":1,"@babel/runtime/helpers/interopRequireDefault":2,"@babel/runtime/regenerator":3}]},{},[6]);