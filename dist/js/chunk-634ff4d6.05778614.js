(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-634ff4d6"],{"189d":function(t,i,n){},"671f":function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{ref:"movie_body",staticClass:"movie_body"},[t.isLoading?n("Loading"):n("BScroller",{attrs:{handleToScroll:t.handleToScroll,handleToTouchEnd:t.handleToTouchEnd}},[n("ul",[n("li",{staticClass:"pullDown"},[t._v(t._s(t.pullDownmsg))]),t._l(t.movieList,function(i,s){return n("li",{key:s},[n("div",{staticClass:"pic_show"},[n("img",{attrs:{src:t._f("setWH")(i.img,"128.180")},on:{tap:function(n){return t.handleToDetail(i.id)}}})]),n("div",{staticClass:"info_list"},[n("h2",{on:{tap:function(n){return t.handleToDetail(i.id)}}},[t._v("\n            "+t._s(i.nm)+"\n            "),n("span",[t._v(t._s(i.version))])]),n("p",[t._v("\n            观众评\n            "),n("span",{staticClass:"grade"},[t._v(t._s(i.sc))])]),n("p",[t._v("主演: "+t._s(i.star))]),n("p",[t._v(t._s(i.showInfo))])]),n("div",{staticClass:"btn_mall"},[t._v("购票")])])})],2)])],1)},o=[],a={name:"NowPlaying",data:function(){return{movieList:[],pullDownmsg:"",isLoading:!0,preCityId:-1}},activated:function(){var t=this,i=this.$store.state.city.id;this.preCityId!==i&&(this.isLoading=!0,this.axios.get("/api/movieOnInfoList?cityId="+i).then(function(n){var s=n.data.msg;"ok"==s&&(t.preCityId=i,t.isLoading=!1,t.movieList=n.data.data.movieList)}))},methods:{handleToDetail:function(t){console.log(t),this.$router.push("/movie/detail/"+t)},handleToScroll:function(t){t.y>30&&(this.pullDownmsg="正在更新中")},handleToTouchEnd:function(t){var i=this;t.y>30&&this.axios.get("/api/movieOnInfoList?cityId=10").then(function(t){var n=t.data.msg;"ok"==n&&(i.pullDownmsg="更新成功",setTimeout(function(){i.movieList=t.data.data.movieList,i.pullDownmsg=""},1e3))})}}},e=a,l=(n("950d"),n("2877")),d=Object(l["a"])(e,s,o,!1,null,"37c379b3",null);i["default"]=d.exports},"950d":function(t,i,n){"use strict";var s=n("189d"),o=n.n(s);o.a}}]);
//# sourceMappingURL=chunk-634ff4d6.05778614.js.map