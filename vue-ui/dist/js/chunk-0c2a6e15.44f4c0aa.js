(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c2a6e15"],{"0193":function(e,t,a){"use strict";a("d70c")},"57da":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("el-container",{staticClass:"home-container"},[t("el-header",[t("div",[t("img",{staticStyle:{width:"60px"},attrs:{src:a("9b19"),alt:""}}),t("span",[e._v("WebGISTest系统")])]),t("el-button",{attrs:{type:"info"},on:{click:e.logout}},[e._v("退出")])],1),t("el-container",[t("el-aside",{attrs:{width:e.isCollapse?"64px":"200px"}},[t("div",{staticClass:"toggle-button",on:{click:e.toggleCollapse}},[e._v("|||")]),t("el-menu",{attrs:{"background-color":"#333744","text-color":"#fff","active-text-color":"#409eff","unique-opened":!0,collapse:e.isCollapse,"collapse-transition":!1,router:!0,"default-active":e.activePath}},e._l(e.menulist,(function(a){return t("el-submenu",{key:a.id,attrs:{index:a.id+""}},[t("template",{slot:"title"},[t("i",{class:e.iconObj[a.id]?e.iconObj[a.id]:"el-icon-location"}),t("span",[e._v(e._s(a.authName))])]),e._l(a.children,(function(a){return t("el-menu-item",{key:a.id,attrs:{index:"/"+a.path},on:{click:function(t){return e.saveNavState("/"+a.path)}}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),t("span",[e._v(e._s(a.authName))])])],2)}))],2)})),1)],1),t("el-main",[t("router-view")],1)],1)],1)},n=[],h=a("c7eb"),l=a("1da1"),c=(a("14d9"),{data:function(){return{menulist:[{id:100,authName:"OpenLayers",path:null,children:[{id:101,authName:"图层切换",path:"LayerSwitch",children:[]},{id:102,authName:"图层多选控件",path:"LayerCheckBox",children:[]},{id:103,authName:"获取经纬度",path:"ClikLatLon",children:[]},{id:104,authName:"Target和View",path:"TargetView",children:[]},{id:105,authName:"地图联动",path:"LayerLink",children:[]},{id:106,authName:"地图弹窗",path:"ShowPopup",children:[]},{id:107,authName:"加载后端图层",path:"PostPoint",children:[]},{id:108,authName:"加载GeoJSON",path:"ShowGeoJSON",children:[]},{id:109,authName:"加载WKT",path:"ShowWKT",children:[]},{id:110,authName:"图层高亮",path:"ClickHighlight",children:[]},{id:111,authName:"在线编辑",path:"LayerEdit",children:[]},{id:112,authName:"结合Echarts",path:"LayerEcharts",children:[]},{id:113,authName:"GIS系统模板",path:"WebGISUI",children:[]},{id:114,authName:"综合例子",path:"ShowCollege",children:[]}]},{id:200,authName:"Geoserver",children:[{id:201,authName:"加载WMS",path:"WMS",children:[]},{id:202,authName:"加载WMTS",path:"WMTS",children:[]},{id:203,authName:"加载矢量瓦片",path:"VectorTiles",children:[]},{id:204,authName:"加载WFS",path:"WFS",children:[]},{id:205,authName:"WFS添加数据",path:"AddWFS",children:[]},{id:206,authName:"WFS修改数据",path:"UpdateWFS",children:[]},{id:207,authName:"WFS删除数据",path:"DeleteWFS",children:[]},{id:208,authName:"WFS综合操作",path:"AllWFS",children:[]},{id:209,authName:"WFS查询数据",path:"QueryWFS",children:[]},{id:210,authName:"WFS综合查询",path:"AllQueryWFS",children:[]}]},{id:300,authName:"空间分析",path:null,children:[{id:301,authName:"空间关系",path:"SpaceRelation",children:[]},{id:302,authName:"叠加分析",path:"InterAnalysis",children:[]},{id:303,authName:"合并分析",path:"UnionAnalysis",children:[]},{id:304,authName:"差异分析",path:"DiffAnalysis",children:[]},{id:305,authName:"Sym差异分析",path:"SymDiffAnalysis",children:[]},{id:306,authName:"缓冲区分析",path:"BuffAnalysis",children:[]},{id:307,authName:"网络分析",path:"NetAnalysis",children:[]}]},{id:400,authName:"GDAL",path:null,children:[{id:401,authName:"读取GDB",path:"ReadGdb",children:[]}]}],iconObj:{125:"el-icon-menu",103:"el-icon-location",101:"el-icon-eleme",102:"el-icon-delete",145:"el-icon-setting"},isCollapse:!1,activePath:""}},created:function(){this.getMenuList(),this.activePath=window.sessionStorage.getItem("activePath")},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},getMenuList:function(){return Object(l["a"])(Object(h["a"])().mark((function e(){return Object(h["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},toggleCollapse:function(){this.isCollapse=!this.isCollapse},saveNavState:function(e){window.sessionStorage.setItem("activePath",e),this.activePath=e}}}),d=c,r=(a("0193"),a("2877")),o=Object(r["a"])(d,i,n,!1,null,"5ffe06a4",null);t["default"]=o.exports},d70c:function(e,t,a){}}]);
//# sourceMappingURL=chunk-0c2a6e15.44f4c0aa.js.map