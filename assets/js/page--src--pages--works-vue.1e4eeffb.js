(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,e,a){},182:function(t,e,a){var l=a(12),o=Date.prototype,s=o.toString,n=o.getTime;new Date(NaN)+""!="Invalid Date"&&l(o,"toString",(function(){var t=n.call(this);return t==t?s.call(this):"Invalid Date"}))},185:function(t,e,a){"use strict";var l=a(181);a.n(l).a},186:function(t,e){},191:function(t,e,a){"use strict";a(182);var l={methods:{formatDate:function(t){var e=new Date(t);return e.getDate()+" "+["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][e.getMonth()]+" "+e.getFullYear()}}},o=(a(185),a(18)),s=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"work-roll",attrs:{id:"myWorks"}},[a("h2",{staticClass:"work-roll__heading"},[t._v("Recent works")]),a("p",{staticClass:"work-roll__description"},[t._v("\n    Here are some projects that I have worked on recently.\n  ")]),a("div",{staticClass:"work-roll__list"},t._l(t.$page.works.edges,(function(e){return a("article",{key:e.node.id,staticClass:"work-roll__item",attrs:{"data-aos":"fade-up"}},[a("div",{staticClass:"work-roll__item-details"},[a("h2",{staticClass:"work-roll__item-title"},[t._v("\n          "+t._s(e.node.title)+"\n        ")]),a("small",{staticClass:"work-roll__item-project"},[t._v(t._s(e.node.projectName))]),a("small",{staticClass:"work-roll__item-summary"},[t._v(t._s(e.node.summary))]),a("g-link",{staticClass:"work-roll__item-link",attrs:{to:e.node.path}},[t._v("\n          Read Full Case Study\n        ")])],1),a("div",{staticClass:"work-roll__item-image"},[a("g-link",{attrs:{to:e.node.path}},[a("g-image",{attrs:{src:e.node.thumbImage,alt:e.node.title,"data-aos":"fade-up","data-aos-delay":"300"}})],1)],1)])})),0)])}),[],!1,null,null,null);e.a=s.exports},200:function(t,e,a){"use strict";var l=a(186),o=a.n(l);e.default=o.a},224:function(t,e,a){"use strict";a.r(e);var l={metaInfo:{title:"Hello, world!",name:"works"},components:{workRoll:a(191).a}},o=a(18),s=a(200),n=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("workRoll")],1)}),[],!1,null,null,null);"function"==typeof s.default&&Object(s.default)(n);e.default=n.exports}}]);