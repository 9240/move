(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fa04e0e"],{"0690":function(t,e,n){"use strict";var a=n("44e1"),i=n.n(a);i.a},"0861":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("Header",{attrs:{title:"喵喵电影"}}),n("div",{attrs:{id:"content"}},[n("div",{staticClass:"movie_menu"},[n("router-link",{staticClass:"city_name",attrs:{tag:"div",to:"/movie/city"}},[n("span",[t._v(t._s(t.$store.state.city.nm))]),n("i",{staticClass:"iconfont icon-lower-triangle"})]),n("div",{staticClass:"hot_swtich"},[n("router-link",{staticClass:"hot_item",attrs:{tag:"div",to:"/movie/nowPlaying"}},[t._v("正在热映")]),n("router-link",{staticClass:"hot_item",attrs:{tag:"div",to:"/movie/comingSoon"}},[t._v("即将上映")])],1),n("router-link",{staticClass:"search_entry",attrs:{tag:"div",to:"/movie/search"}},[n("i",{staticClass:"iconfont icon-sousuo"})])],1),n("keep-alive",[n("router-view")],1)],1),n("TabBar"),n("transition",[n("router-view",{attrs:{name:"detail"}})],1)],1)},i=[],o=n("981c"),c=n("4bdd"),s=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"messagebox"},[n("h2",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.content))]),n("div",[n("div",{on:{touchstart:t.handleCancel}},[t._v(t._s(t.cancel))]),n("div",{on:{touchstart:t.handleOk}},[t._v(t._s(t.ok))])])])},r=[],d={name:"MessageBox"},u=d,v=(n("adbd"),n("2877")),f=Object(v["a"])(u,l,r,!1,null,"3b0cd4fc",null),m=f.exports,h=function(){var t={title:"",content:"",cancel:"",ok:"",handleCancel:null,handleOk:null};return function(e){for(var n in e)t[n]=e[n];var a=s["a"].extend(m),i=new a({el:document.createElement("div"),data:{title:t.title,content:t.content,cancel:t.cancel,ok:t.ok},methods:{handleCancel:function(){t.handleCancel&&t.handleCancel.call(this),document.body.removeChild(i.$el)},handleOk:function(){t.handleOk&&t.handleOk.call(this),document.body.removeChild(i.$el)}}});document.body.appendChild(i.$el)}}(),_={name:"Movie",components:{Header:o["a"],TabBar:c["a"]},mounted:function(){var t=this;setTimeout(function(){t.axios.get("/api/getLocation").then(function(e){console.log(e);var n=e.data.msg;if("ok"===n){var a=e.data.data.nm,i=e.data.data.id;if(t.$store.state.city.id==i)return;h({title:"定位",content:a,cancel:"取消",ok:"切换定位",handleCancel:function(){},handleOk:function(){localStorage.setItem("nowNm",a),localStorage.setItem("nowId",i),location.reload()}})}})},3e3)}},k=_,p=(n("0690"),Object(v["a"])(k,a,i,!1,null,"09759fc6",null));e["default"]=p.exports},"44e1":function(t,e,n){},"4bdd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"footer"}},[n("ul",[n("router-link",{attrs:{tag:"li",to:"/movie"}},[n("i",{staticClass:"iconfont icon-dianying"}),n("p",[t._v("电影")])]),n("router-link",{attrs:{tag:"li",to:"/cinema"}},[n("i",{staticClass:"iconfont icon-yingyuan"}),n("p",[t._v("影院")])]),n("router-link",{attrs:{tag:"li",to:"/mine"}},[n("i",{staticClass:"iconfont icon-wode"}),n("p",[t._v("我的")])])],1)])},i=[],o={name:"Footer"},c=o,s=(n("6acc"),n("2877")),l=Object(s["a"])(c,a,i,!1,null,"08ffd666",null);e["a"]=l.exports},"4e41":function(t,e,n){},"5c29":function(t,e,n){"use strict";var a=n("e910"),i=n.n(a);i.a},"6acc":function(t,e,n){"use strict";var a=n("4e41"),i=n.n(a);i.a},"981c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"header"}},[t._t("default"),n("h1",[t._v(t._s(t.title))])],2)},i=[],o={name:"Header",props:{title:{type:String,default:"喵喵电影"}}},c=o,s=(n("5c29"),n("2877")),l=Object(s["a"])(c,a,i,!1,null,"6acc9b45",null);e["a"]=l.exports},adbd:function(t,e,n){"use strict";var a=n("f0e3"),i=n.n(a);i.a},e910:function(t,e,n){},f0e3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5fa04e0e.9fb679c9.js.map