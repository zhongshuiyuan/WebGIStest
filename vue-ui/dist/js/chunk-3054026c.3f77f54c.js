(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3054026c"],{"0c47":function(t,e,r){var n=r("da84"),o=r("d44e");o(n.JSON,"JSON",!0)},"131a":function(t,e,r){var n=r("23e7"),o=r("d2bb");n({target:"Object",stat:!0},{setPrototypeOf:o})},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},"1f68":function(t,e,r){"use strict";var n=r("83ab"),o=r("edd0"),a=r("861d"),i=r("7b0b"),c=r("1d80"),u=Object.getPrototypeOf,s=Object.setPrototypeOf,f=Object.prototype,l="__proto__";if(n&&u&&s&&!(l in f))try{o(f,l,{configurable:!0,get:function(){return u(i(this))},set:function(t){var e=c(this);(a(t)||null===t)&&a(e)&&s(e,t)}})}catch(h){}},"23dc":function(t,e,r){var n=r("d44e");n(Math,"Math",!0)},3410:function(t,e,r){var n=r("23e7"),o=r("d039"),a=r("7b0b"),i=r("e163"),c=r("e177"),u=o((function(){i(1)}));n({target:"Object",stat:!0,forced:u,sham:!c},{getPrototypeOf:function(t){return i(a(t))}})},8252:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("GDAL")]),e("el-breadcrumb-item",[t._v("读取gdb")])],1),e("el-card",[e("div",{attrs:{id:"map"}}),e("el-table",{staticClass:"tb",staticStyle:{width:"800px"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"name",label:"行政区划名称"}}),e("el-table-column",{attrs:{prop:"ha",label:"治理河岸长度（km）"}}),e("el-table-column",{attrs:{prop:"zlgc",label:"治理工程量（km）"}})],1)],1)],1)},o=[],a=r("c7eb"),i=r("1da1"),c=(r("d81d"),r("d3b7"),r("159b"),r("b0c0"),r("43df")),u=r("332e"),s=r("e671"),f=r("02df"),l=r("169c"),h=r("3e31"),d=r("3493"),p=r("3110"),v=r("92cf"),y={data:function(){return{tableData:[],map:null}},created:function(){},mounted:function(){this.initMap()},methods:{initMap:function(){var t=this;return Object(i["a"])(Object(a["a"])().mark((function e(){var r,n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTableData();case 2:return e.next=4,t.getLayers();case 4:r=e.sent,console.log(r.length),n=new c["a"]({layers:[Object(v["d"])("vec_w"),Object(v["d"])("cva_w")],view:new u["a"]({projection:"EPSG:3857",center:[12894645.034200002,3470216.539300002],zoom:11}),target:"map"}),t.map=n,r.forEach((function(e){t.addFeature(e)}));case 9:case"end":return e.stop()}}),e)})))()},getTableData:function(){var t=this;return Object(i["a"])(Object(a["a"])().mark((function e(){var r,n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.getCalculate();case 2:r=e.sent,n=r.data,200===n.status&&(t.tableData=n.data);case 5:case"end":return e.stop()}}),e)})))()},getLayers:function(){var t=this;return Object(i["a"])(Object(a["a"])().mark((function e(){var r,n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.getGdbLayers();case 2:if(r=e.sent,n=r.data,200!==n.status){e.next=6;break}return e.abrupt("return",n.data.reverse());case 6:case"end":return e.stop()}}),e)})))()},addFeature:function(t){var e,r={type:"FeatureCollection",features:t.features.map((function(t){return JSON.parse(t.geometry)}))},n=(new l["a"]).readFeatures(r);switch(t.name){case"治理工程":e=new h["a"]({stroke:new d["a"]({width:1,color:"#ff0000"})});break;case"行政区划":e=new h["a"]({stroke:new d["a"]({width:1,color:"#565454"}),fill:new p["a"]({color:"#e1e1e1"})});break;case"河岸":e=new h["a"]({stroke:new d["a"]({width:1,color:"#0070ff"})});break}var o=new f["a"]({features:n}),a=new s["a"]({source:o,style:e,renderMode:"vector"});this.map.addLayer(a)}}},b=y,g=(r("ec44"),r("2877")),m=Object(g["a"])(b,n,o,!1,null,null,null);e["default"]=m.exports},8489:function(t,e,r){},"944a":function(t,e,r){var n=r("d066"),o=r("e065"),a=r("d44e");o("toStringTag"),a(n("Symbol"),"Symbol")},b636:function(t,e,r){var n=r("e065");n("asyncIterator")},c7eb:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("14d9"),r("159b"),r("b0c0"),r("131a"),r("1f68"),r("fb6a");var n=r("53ca");function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(G){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new k(n||[]);return a(i,"_invoke",{value:L(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=l;var d={};function p(){}function v(){}function y(){}var b={};f(b,c,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==e&&r.call(m,c)&&(b=m);var w=y.prototype=p.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(a,i,c,u){var s=h(t[a],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==Object(n["a"])(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:v,configurable:!0}),v.displayName=f(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(x.prototype),f(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(w),f(w,s,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}},ec44:function(t,e,r){"use strict";r("8489")},edd0:function(t,e,r){var n=r("13d2"),o=r("9bf2");t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),o.f(t,e,r)}}}]);
//# sourceMappingURL=chunk-3054026c.3f77f54c.js.map