(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e1fe2"],{"7d98":function(t,e,a){"use strict";a.r(e);var i=a("a18c"),s=a("fa7d"),n={name:"sidebar",data:function(){return{navList:[],currentNav:"",menu:[]}},props:["collapse"],methods:{getNav:function(t,e){var a=this,i=1<arguments.length&&void 0!==e?e:[],s={};return t.forEach(function(t){var e=!0;t.meta&&t.meta.permission&&(e=a.menu.some(function(e){return e.href===t.path})),e&&(s={title:t.meta.title,to:t.path,icon:t.meta.icon},t.children&&(s.children=a.getNav(t.children)),i.push(s))}),i},click:function(t){t.to&&!t.children&&this.$router.push({path:t.to}),this.$emit("update:collapse",!1)},collapseClick:function(){this.$emit("update:collapse",!this.collapse)}},mounted:function(){this.menu=Object(s.b)("_menu",1)||[],this.navList=this.getNav(i.a),this.currentNav="后台首页"}},l=a("2877"),c={name:"layout",data:function(){return{userName:Object(s.b)("loginName",1),keepAlive:[],collapse:!1}},watch:{$route:function(){this._tabsView()},keepAlive:function(){Object(s.f)("keepAlive",this.keepAlive)}},created:function(){this._tabsView()},computed:{include:function(){var t=[];return this.keepAlive.forEach(function(e){t.push(e.name)}),t}},components:{Sidebar:Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"side-logo"},[t._v("logo")]),a("div",{staticClass:"side-content"},[a("ak-menu",{attrs:{data:t.navList,type:"v",value:t.currentNav},on:{click:t.click}})],1),a("div",{staticClass:"control-btn",on:{click:t.collapseClick}},[a("i",{staticClass:"fa",class:{"fa-angle-double-left":!t.collapse,"fa-angle-double-right":t.collapse}}),t.collapse?t._e():a("span",[t._v("收起侧边栏")])])])},[],!1,null,null,null).exports,TabsView:Object(l.a)({name:"tabsView",data:function(){return{translateX:0}},props:["data"],mounted:function(){this.$nextTick(function(){})},computed:{offsetLeft:function(){return this.$el.querySelector(".last").offsetLeft+this.$el.querySelector(".last").offsetWidth},transform:function(){return{transform:"translateX(-".concat(this.translateX,"px)")}}},methods:{_slide:function(t){var e=this;this.$nextTick(function(){var a=e.$el.offsetWidth-90,i=e.offsetLeft-a,s=0;a<e.offsetLeft&&("n"===t?i<(s=a+e.translateX)&&(s=i):(s=e.translateX-a)<0&&(s=0)),e.translateX=s})},_del:function(t){this.$emit("click",t)}}},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs-view"},[a("a",{staticClass:"prev fa fa-angle-double-left",attrs:{href:"javascript:;"},on:{click:function(e){return t._slide("p")}}}),a("a",{staticClass:"next fa fa-angle-double-right",attrs:{href:"javascript:;"},on:{click:function(e){return t._slide("n")}}}),a("a",{staticClass:"close fa fa-times",attrs:{href:"javascript:;",title:"关闭全部标签页"},on:{click:t._del}}),a("ul",{style:t.transform},t._l(t.data,function(e,i){return a("li",{key:e.name,class:{last:i+1===t.data.length,active:e.active,home:0===i}},[a("router-link",{attrs:{to:e.path}},[t._v(t._s(e.meta.title||e.name))]),0!==i?a("i",{staticClass:"del fa fa-times",on:{click:function(e){return t._del(i)}}}):t._e()],1)}),0)])},[],!1,null,null,null).exports},methods:{_tabsViewClick:function(t){0<t?(this.keepAlive[t].active&&this.$router.push({path:this.keepAlive[t-1].path}),this.keepAlive.splice(t,1)):(this.$router.push({path:this.keepAlive[0].path}),this.keepAlive=[])},_tabsView:function(){this.keepAlive=Object(s.b)("keepAlive")||[];var t=this.$route.path,e=this.$route.name,a=this.$route.meta;this.$route.meta&&!1!==this.$route.meta.keepAlive&&-1===this.include.indexOf(e)&&this.keepAlive.push({path:t,name:e,meta:a,active:!0}),this.keepAlive.forEach(function(e){e.active=t===e.path}),Object(s.f)("keepAlive",this.keepAlive)}}},o=Object(l.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",class:{collapse:t.collapse}},[a("Sidebar",{attrs:{collapse:t.collapse},on:{"update:collapse":function(e){t.collapse=e}}}),a("div",{staticClass:"main-layout"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-bar clearfix"},[a("div",{staticClass:"left"},[t._v("这里显示其它一些信息")]),a("div",{staticClass:"right"},[a("router-link",{attrs:{to:"/signOut"}},[t._v(t._s(t.userName)+",退出"),a("i",{staticClass:"fa fa-sign-out"})])],1)]),a("TabsView",{attrs:{data:t.keepAlive},on:{click:t._tabsViewClick}})],1),a("div",{staticClass:"main-view"},[a("keep-alive",{attrs:{include:t.include}},[a("router-view")],1)],1)]),a("div",{staticClass:"footer"})],1)},[],!1,null,null,null);e.default=o.exports}}]);