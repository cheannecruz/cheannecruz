(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{212:function(t,e,a){var n=a(14),s=Date.prototype,i=s.toString,r=s.getTime;new Date(NaN)+""!="Invalid Date"&&n(s,"toString",(function(){var t=r.call(this);return t==t?i.call(this):"Invalid Date"}))},216:function(t,e,a){},217:function(t,e){},225:function(t,e,a){"use strict";var n=a(216);a.n(n).a},226:function(t,e,a){"use strict";var n=a(217),s=a.n(n);e.default=s.a},253:function(t,e,a){"use strict";a.r(e);a(75),a(212);var n={data:function(){return{firstLetter:""}},methods:{formatDate:function(t){var e=new Date(t);return e.getDate()+" "+["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][e.getMonth()]+" "+e.getFullYear()},noFirstLetter:function(t,e){if(!0===e){var a=t.substring(4);return t.slice(0,3)+"<span>"+t.slice(3,4)+"</span>"+a}return t}}},s=(a(225),a(13)),i=a(226),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("section",{staticClass:"work-page__main-banner"},[a("g-image",{staticClass:"work-page__main-banner-img",attrs:{src:t.$page.post.mainBannerImage,alt:t.$page.post.title,fit:"contain",immediate:"true"}})],1),a("section",{staticClass:"work-page__section"},[a("div",{staticClass:"work-page__main-content"},[a("h1",{staticClass:"work-page__heading"},[t._v(t._s(t.$page.post.title))]),a("small",{staticClass:"work-page__name"},[t._v(t._s(t.$page.post.projectName))]),a("p",{staticClass:"work-page__role"},t._l(t.$page.post.roles,(function(e){return a("span",{staticClass:"work-page__role-item"},[t._v("\n          "+t._s(e)+"\n        ")])})),0),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"work-page__content",domProps:{innerHTML:t._s(t.noFirstLetter(t.$page.post.content,t.$page.post.editStart))}})])])])}),[],!1,null,null,null);"function"==typeof i.default&&Object(i.default)(r);e.default=r.exports}}]);