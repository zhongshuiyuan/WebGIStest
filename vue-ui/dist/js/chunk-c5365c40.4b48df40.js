(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5365c40"],{"1bc8":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("GeoServer")]),t("el-breadcrumb-item",[e._v("WFS")]),t("el-breadcrumb-item",[e._v("WFS删除数据")])],1),t("el-card",[t("div",{attrs:{id:"map"}})])],1)},n=[],o=r("c7eb"),i=r("1da1"),s=(r("a15b"),r("43df")),c=r("332e"),l=r("e671"),u=r("02df"),d=r("169c"),w=r("14c4"),f=r("7269"),p=r("3e31"),m=r("29ae"),v=r("3110"),b=r("715e"),g=r("92cf"),h={data:function(){return{geoserverData:{wsName:"webgistest",uri:"http://www.openplans.org/webgistest",wfsURL:"http://119.91.20.243:28081/geoserver/wfs?",layer:"port"}}},created:function(){},mounted:function(){this.initMap()},methods:{initMap:function(){var e=this,t=new u["a"]({format:new d["a"],url:function(t){return e.geoserverData.wfsURL+"service=WFS&version=1.1.0&request=GetFeature&typeName="+e.geoserverData.wsName+":"+e.geoserverData.layer+"&outputFormat=application/json&srsname=EPSG:3857&bbox="+t.join(",")+",EPSG:3857"},strategy:b["a"].bbox}),r=new l["a"]({title:"add Layer",source:t,style:function(e){return new p["a"]({geometry:e.getGeometry(),image:new m["a"]({radius:5,fill:new v["a"]({color:"blue"})})})}}),a=[Object(g["d"])("vec_w"),Object(g["d"])("cva_w"),r],n=new s["a"]({target:"map",layers:a,view:new c["a"]({projection:"EPSG:3857",center:[12690421.9504332,3632749.14338443],zoom:4})}),o=new f["a"]({layers:[r],style:new p["a"]({image:new m["a"]({radius:8,fill:new v["a"]({color:"red"})})})});o.on("select",(function(t){var a=t.selected;if(a.length>0){var n=a[0];e.deleteFeature(n),r.getSource().changed()}})),n.addInteraction(o),n.on("pointermove",(function(e){n.hasFeatureAtPixel(e.pixel)?n.getTargetElement().style.cursor="pointer":n.getTargetElement().style.cursor="default"}))},deleteFeature:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function r(){var a,n,i,s,c,l,u;return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.clone(),a.setId(e.getId()),n=new w["a"],i=n.writeTransaction(null,null,[a],{featureNS:t.geoserverData.uri,featurePrefix:t.geoserverData.wsName,featureType:t.geoserverData.layer,srsName:"EPSG:3857"}),s=new XMLSerializer,c=s.serializeToString(i),r.next=8,t.$http.post(t.geoserverData.wfsURL,c,{headers:{"Content-Type":"application/xml"}});case 8:l=r.sent,u=l.data,-1!=u.indexOf("Exception")?(console.log(u),alert("删除失败！"+u)):(alert("删除成功！"),window.location.reload());case 11:case"end":return r.stop()}}),r)})))()}}},y=h,j=r("2877"),S=Object(j["a"])(y,a,n,!1,null,"1d1b7488",null);t["default"]=S.exports},a15b:function(e,t,r){"use strict";var a=r("23e7"),n=r("e330"),o=r("44ad"),i=r("fc6a"),s=r("a640"),c=n([].join),l=o!=Object,u=s("join",",");a({target:"Array",proto:!0,forced:l||!u},{join:function(e){return c(i(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=chunk-c5365c40.4b48df40.js.map