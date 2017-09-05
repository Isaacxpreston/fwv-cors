webpackJsonp([1],{123:function(t,e,s){function n(t){s(351)}var a=s(8)(s(147),s(389),n,"data-v-d3d22798",null);t.exports=a.exports},124:function(t,e,s){function n(t){s(349)}var a=s(8)(s(148),s(383),n,"data-v-5fae97e0",null);t.exports=a.exports},125:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(89),i=n(a),r=s(390),o=n(r),l=s(158),u=n(l);i.default.use(o.default),e.default=new o.default({routes:[{path:"/auth_sandbox",component:u.default.auth_sandbox},{path:"/sandbox",component:u.default.sandbox},{path:"/style_guide",component:u.default.style_guide.main,children:[{path:"fonts",component:u.default.style_guide.fonts},{path:"atoms",component:u.default.style_guide.atoms},{path:"molecules",component:u.default.style_guide.molecules},{path:"",component:u.default.style_guide.fonts},{path:"*",component:u.default.style_guide.fonts}]},{path:"*",component:u.default.sandbox}]})},126:function(t,e){},127:function(t,e,s){var n=s(8)(s(146),s(381),null,null,null);t.exports=n.exports},146:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},147:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["type"]}},148:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(362),a=s.n(n);e.default={components:{"crosshair-svg":a.a}}},149:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["type"]}},150:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(363),a=s.n(n);e.default={components:{"hatch-bg":a.a}}},151:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(123),a=s.n(n);e.default={props:["type","customclass"],components:{arrow:a.a}}},152:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(159),a=s.n(n),i=s(160),r=s.n(i),o=s(161),l=(s.n(o),s(128)),u=s.n(l);e.default={data:function(){return{name:"",email:"",school:"",password:"",login_email:"",login_password:"",login_status:"",status:"press enter or 'submit' to save to db",default_status:"press enter or 'submit' to save to db",page_content:{},authorized:!1,timeouts:[]}},methods:{check_for_enter:function(t){return 13===t.keyCode},reset_fields:function(t){t&&(this.name="",this.email="",this.school="",this.password=""),this.status=this.default_status},enter_save_update:function(t){this.check_for_enter(t)&&this.save_update()},save_update:function(){var t=this;if(!(this.name&&this.email&&this.school&&this.password)){this.status="please fill out all fields";for(var e=0;e<this.timeouts.length;e++)clearTimeout(this.timeouts[e]);return this.timeouts.push(setTimeout(function(){t.reset_fields()},2e3)),!1}if(this.email&&!r()(this.email)){this.status="please provide a valid email address";for(var e=0;e<this.timeouts.length;e++)clearTimeout(this.timeouts[e]);return this.timeouts.push(setTimeout(function(){t.reset_fields()},2e3)),!1}this.status="submitting",u.a.post(a.a.server.register,{name:this.name,email:this.email,school:this.school,password:this.password}).then(function(e){t.status=e.data;for(var s=0;s<t.timeouts.length;s++)clearTimeout(t.timeouts[s]);t.timeouts.push(setTimeout(function(){t.reset_fields(!0)},4e3))}).catch(function(e){t.status="error";for(var s=0;s<t.timeouts.length;s++)clearTimeout(t.timeouts[s]);t.timeouts.push(setTimeout(function(){t.reset_fields()},2e3))})},enter_login:function(t){this.check_for_enter(t)&&this.login()},login:function(){var t=this;u.a.post(a.a.server.login,{email:this.login_email,password:this.login_password}).then(function(e){e.data.authorized?(t.page_content=e.data.user,t.authorized=e.data.authorized):t.login_status="incorrect email or password"})},logout:function(){var t=this;u.a.get(a.a.server.logout).then(function(e){t.authorized=e.data.authorized,t.login_email="",t.login_password=""}).catch(function(t){console.log(t)})},get_auth:function(){var t=this;u.a.get(a.a.server.authenticate).then(function(e){t.page_content=e.data.user,t.authorized=e.data.authorized}).catch(function(t){console.log(t)})},next_page:function(){this.page_content.current_page=this.page_content.current_page+1,u.a.post(a.a.server.update,{current_page:this.page_content.current_page}).catch(function(t){console.log(t)})},prev_page:function(){this.page_content.current_page=this.page_content.current_page-1,u.a.post(a.a.server.update,{current_page:this.page_content.current_page}).catch(function(t){console.log(t)})}},mounted:function(){console.log("getting auth from page reload"),this.get_auth()}}},153:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(124),a=s.n(n);e.default={data:function(){return{svg_background:{}}},components:{crosshair:a.a}}},154:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(356),a=s.n(n),i=s(124),r=s.n(i),o=s(355),l=s.n(o),u=s(123),c=s.n(u),d=s(358),v=s.n(d),p=s(359),h=s.n(p),_=s(360),f=s.n(_),g=s(361),m=s.n(g),x=s(364),w=s.n(x);e.default={components:{"span-background":a.a,crosshair:r.a,radio:l.a,arrow:c.a,"access-to-services":v.a,celebrate:h.a,collaborate:f.a,correct:m.a,incorrect:w.a}}},155:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lorem_ipsum:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia tempor ante, eget pellentesque risus pharetra vel. Proin sit amet maximus erat, vestibulum fermentum nunc. Donec viverra pulvinar orci ac vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum commodo nec magna at vestibulum."}}}},156:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(357),a=s.n(n);e.default={components:{"nav-button":a.a}}},157:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=s(89),i=n(a),r=s(127),o=n(r),l=s(125),u=n(l);s(126),i.default.config.productionTip=!1,new i.default({el:"#app",router:u.default,template:"<App/>",components:{App:o.default}})},158:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(365),i=n(a),r=s(366),o=n(r),l=s(369),u=n(l),c=s(368),d=n(c),v=s(367),p=n(v),h=s(370),_=n(h);e.default={auth_sandbox:i.default,sandbox:o.default,style_guide:{main:u.default,fonts:d.default,atoms:p.default,molecules:_.default}}},159:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="https://futures-without-violence.herokuapp.com",a={server:{register:n+"/auth/register",login:n+"/auth/login",logout:n+"/auth/logout",authenticate:n+"/auth/authenticate",update:n+"/auth/update"}};e.default=a},160:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}},343:function(t,e){},344:function(t,e){},345:function(t,e){},346:function(t,e){},347:function(t,e){},348:function(t,e){},349:function(t,e){},350:function(t,e){},351:function(t,e){},355:function(t,e,s){function n(t){s(350)}var a=s(8)(s(149),s(388),n,"data-v-cd2d79b4",null);t.exports=a.exports},356:function(t,e,s){function n(t){s(348)}var a=s(8)(s(150),s(380),n,"data-v-559a30ae",null);t.exports=a.exports},357:function(t,e,s){function n(t){s(345),s(344)}var a=s(8)(s(151),s(377),n,"data-v-39c46a68",null);t.exports=a.exports},358:function(t,e,s){var n=s(8)(null,s(382),null,null,null);t.exports=n.exports},359:function(t,e,s){var n=s(8)(null,s(375),null,null,null);t.exports=n.exports},360:function(t,e,s){var n=s(8)(null,s(385),null,null,null);t.exports=n.exports},361:function(t,e,s){var n=s(8)(null,s(376),null,null,null);t.exports=n.exports},362:function(t,e,s){var n=s(8)(null,s(374),null,null,null);t.exports=n.exports},363:function(t,e,s){var n=s(8)(null,s(387),null,null,null);t.exports=n.exports},364:function(t,e,s){var n=s(8)(null,s(372),null,null,null);t.exports=n.exports},365:function(t,e,s){function n(t){s(346)}var a=s(8)(s(152),s(378),n,"data-v-44c9bd12",null);t.exports=a.exports},366:function(t,e,s){function n(t){s(347)}var a=s(8)(s(153),s(379),n,"data-v-504f0e60",null);t.exports=a.exports},367:function(t,e,s){function n(t){s(343)}var a=s(8)(s(154),s(373),n,"data-v-1932faac",null);t.exports=a.exports},368:function(t,e,s){var n=s(8)(s(155),s(386),null,null,null);t.exports=n.exports},369:function(t,e,s){var n=s(8)(null,s(384),null,null,null);t.exports=n.exports},370:function(t,e,s){var n=s(8)(s(156),s(371),null,null,null);t.exports=n.exports},371:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("molecules")]),t._v(" "),s("nav-button",{attrs:{type:"next"}},[t._v("next")]),t._v(" "),s("nav-button",{attrs:{type:"back"}},[t._v("back")]),t._v(" "),s("nav-button",{attrs:{type:"share"}},[t._v("share")]),t._v(" "),s("nav-button",{attrs:{type:"next",customclass:"call-to-action"}},[t._v("begin")])],1)},staticRenderFns:[]}},372:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{width:"70px",height:"70px",viewBox:"0 0 70 70",version:"1.1"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{staticClass:"fill red"},[s("polygon",{attrs:{points:"10 16.6442673 21.6215729 5 34.993837 18.4271679 48.4139472 5.03389696 60 16.6278485 46.5938062 30.0462773 59.9749504 43.3725488 48.4551665 54.9484925 35.015043 41.631887 21.6264768 55 10.0299535 43.4147875 23.3871083 30.0302557"}}),t._v(" "),s("rect",{attrs:{id:"Line",x:"0",y:"67",width:"70",height:"3"}})])])])},staticRenderFns:[]}},373:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Atoms")]),t._v(" "),s("h2",[t._v("Hatch Background")]),t._v(" "),s("div",{staticClass:"row debug"},[s("div",{staticClass:"span-6-md offset-5-md relative"},[t._m(0),t._v(" "),s("span-background")],1)]),t._v(" "),s("h2",[t._v("Gradient Background")]),t._v(" "),t._m(1),t._v(" "),s("h2",[t._v("Crosshair Background")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"span-6-md offset-5-md relative"},[t._m(2),t._v(" "),s("crosshair")],1)]),t._v(" "),s("h2",[t._v("Combined Hatch/Crosshair")]),t._v(" "),s("div",{staticClass:"row debug"},[s("div",{staticClass:"span-6-md offset-5-md relative"},[t._m(3),t._v(" "),s("crosshair"),t._v(" "),s("span-background")],1)]),t._v(" "),s("h2",[t._v("Icons")]),t._v(" "),s("access-to-services"),t._v(" "),s("celebrate"),t._v(" "),s("collaborate"),t._v(" "),s("correct"),t._v(" "),s("incorrect"),t._v(" "),s("h2",[t._v("Radio Buttons")]),t._v(" "),s("radio"),t._v(" "),s("radio",{attrs:{type:"incorrect"}}),t._v(" "),s("radio",{attrs:{type:"correct"}}),t._v(" "),s("h2",[t._v("Arrows")]),t._v(" "),s("arrow",{attrs:{type:"next"}}),t._v(" "),s("arrow",{attrs:{type:"prev"}}),t._v(" "),s("arrow",{attrs:{type:"plus"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ratio-4-3 ind-2"},[s("h1",[t._v("Content")]),t._v(" "),s("p",[t._v("Lorem Ipsum")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"span-6-md offset-5-md bg-gradient ratio-4-3"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ratio-4-3 debug"},[s("h1",[t._v("Content")]),t._v(" "),s("p",[t._v("Lorem Ipsum")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ratio-4-3 ind-2"},[s("h1",[t._v("Content")]),t._v(" "),s("p",[t._v("Lorem Ipsum")])])}]}},374:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{width:"36px",height:"36px",viewBox:"0 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("g",{attrs:{id:"Symbols",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{id:"Plus-Accent",fill:"#7FD4FE"}},[s("polygon",{attrs:{id:"Rectangle-4",points:"17.4857143 0 18.5142857 0 18.5142857 17.4857143 36 17.4857143 36 18.5142857 18.5142857 18.5142857 18.5142857 36 17.4857143 36 17.4857143 18.5142857 0 18.5142857 0 17.4857143 17.4857143 17.4857143"}})])])])},staticRenderFns:[]}},375:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{width:"70px",height:"70px",viewBox:"0 0 70 70",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("g",{attrs:{id:"Symbols",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{id:"ICON:-Celebrate",fill:"#050C14"}},[s("path",{attrs:{d:"M43.2790698,39.4412331 C43.5312292,38.2350308 43.7327796,37.3739597 43.8837209,36.8580198 C40.617757,36.3330863 37.7682351,34.4224427 35.804946,31.7837846 C39.0932617,28.2905273 41.3909912,24.9151611 42.0333252,21.2908936 C42.6756592,17.666626 42.4430846,11.664917 41.0167911,8.84170619 C42.4430846,8.30235848 44.0951795,8 46,8 C55.9432345,8 59,16.2389029 59,23.4186047 C59,29.8723938 54.2825949,35.8324226 48.1162791,36.8493729 C48.2813181,37.3738822 48.4828685,38.2378356 48.7209302,39.4412331 L46.9078625,39.4412331 L46.9078625,60 L45.0926542,60 L45.0926542,39.4412331 L43.2790698,39.4412331 Z M22.8604651,36.2783459 C23.1514183,34.886574 23.3839764,33.8930304 23.5581395,33.2977151 C16.4160928,32.1497847 11,25.2587449 11,17.7906977 C11,9.50642643 14.5270372,0 26,0 C37.4729628,0 41,9.50642643 41,17.7906977 C41,25.2373775 35.5568403,32.1143337 28.4418605,33.287738 C28.6322902,33.892941 28.8648483,34.8898103 29.1395349,36.2783459 L27.0475336,36.2783459 L27.0475336,60 L24.9530625,60 L24.9530625,36.2783459 L22.8604651,36.2783459 Z M23,3 C18.0032349,6.01678467 15.2982178,11.1021118 14,16 C12.9963379,10.0070801 18.504529,3 23,3 Z"}}),t._v(" "),s("rect",{attrs:{id:"Line",x:"0",y:"67",width:"70",height:"3"}})])])])},staticRenderFns:[]}},376:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{width:"70px",height:"70px",viewBox:"0 0 70 70"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{staticClass:"fill green"},[s("polygon",{attrs:{points:"5 29.7421167 16.4672451 17.6162426 29.2382412 31.1896762 53.9432575 5 65 16.7345845 28.8929948 55"}}),t._v(" "),s("rect",{attrs:{id:"Line",x:"0",y:"67",width:"70",height:"3"}})])])])},staticRenderFns:[]}},377:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button-container auto",class:t.customclass},["next"===t.type||"share"===t.type?s("div",{staticClass:"button-label-next"},[s("div",{staticClass:"utility upcase"},[t._t("default")],2)]):"back"===t.type?s("div",{staticClass:"button-label-back"},[s("div",{staticClass:"utility upcase"},[t._t("default")],2)]):t._e(),t._v(" "),"next"===t.type||"share"===t.type?s("div",{staticClass:"button-arrow-next"},[s("arrow",{attrs:{type:t.type}})],1):"back"===t.type?s("div",{staticClass:"button-arrow-back"},[s("arrow",{attrs:{type:t.type}})],1):t._e(),t._v(" "),"next"===t.type?s("div",{staticClass:"button-background-next"},[s("svg",{staticClass:"button-background-svg",attrs:{viewBox:"0 0 221 48"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",[s("path",{staticClass:"button-background-path",attrs:{"stroke-width":"1",d:"M0.5,0.5 L0.5,29.3873894 L19.3036863,47.5 L220.5,47.5 L220.5,0.5 L0.5,0.5 Z"}})])])])]):s("div",{staticClass:"button-background-back"},[s("svg",{staticClass:"button-background-svg",attrs:{viewBox:"0 0 220 48"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{id:"Button",transform:"translate(110.000000, 24.000000) scale(-1, 1) translate(-110.000000, -24.000000) "}},[s("path",{staticClass:"button-background-path",attrs:{"stroke-width":"1",d:"M0.5,0.5 L0.5,29.3873894 L19.3036863,47.5 L219.5,47.5 L219.5,0.5 L0.5,0.5 Z"}})])])])])])},staticRenderFns:[]}},378:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Sessions/Auth Sandbox")]),t._v(" "),s("div",{on:{keydown:t.enter_save_update}},[s("h3",[t._v("Register new user or update information")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.school,expression:"school"}],attrs:{placeholder:"school"},domProps:{value:t.school},on:{input:function(e){e.target.composing||(t.school=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("br"),t._v(" "),s("button",{on:{click:t.save_update}},[t._v("submit")]),t._v(" "),s("p",[t._v(t._s(t.status))])]),t._v(" "),t.authorized?t._e():s("div",{on:{keydown:t.enter_login}},[s("h3",[t._v("Log in to view pages")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login_email,expression:"login_email"}],attrs:{placeholder:"email"},domProps:{value:t.login_email},on:{input:function(e){e.target.composing||(t.login_email=e.target.value)}}}),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login_password,expression:"login_password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.login_password},on:{input:function(e){e.target.composing||(t.login_password=e.target.value)}}}),s("br"),t._v(" "),s("button",{on:{click:t.login}},[t._v("log in")]),s("br"),t._v(" "),s("p",[t._v(t._s(t.login_status))])]),t._v(" "),t.authorized?s("div",{staticClass:"page-content"},[s("h2",[t._v("Logged in as "+t._s(t.page_content.name))]),t._v(" "),s("p",[t._v("Current Page: "+t._s(t.page_content.current_page))]),t._v(" "),s("button",{on:{click:t.prev_page}},[t._v("Go to previous page")]),t._v(" "),s("button",{on:{click:t.next_page}},[t._v("Go to next page")]),t._v(" "),s("br"),t._v(" "),s("button",{on:{click:t.logout}},[t._v("Logout")])]):t._e()])},staticRenderFns:[]}},379:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("component sandbox")]),t._v(" "),s("h2",[t._v("card with rollover")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Card with 3D flip effect and rollover")]),t._v(" "),s("p",[t._v("(click to rotate)")]),t._v(" "),s("div",{staticClass:"row debug"},[s("div",{staticClass:"span-4-md offset-1-md ratio-3-4 overflow-visible"},[s("div",{staticClass:"flip-container"},[s("input",{staticClass:"flip-indicator",attrs:{type:"checkbox"}}),t._v(" "),s("div",{staticClass:"flipper"},[s("div",{staticClass:"front ind-2"},[s("div",{staticClass:"front-inner"},[s("div",{staticClass:"svg-icon-background debug",style:t.svg_background}),t._v(" "),s("div",{staticClass:"subheader upcase"},[t._v("Title")])])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"crosshair-container"},[s("crosshair")],1)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row debug"},[s("div",{staticClass:"span-4-md offset-1-md ratio-3-4 overflow-visible"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"back"},[s("div",{staticClass:"back-inner"},[s("div",{staticClass:"subheader upcase"},[t._v("Title")]),t._v(" "),s("p",[t._v("\n                Ut gravida vel tortor eu maximus. Nunc facilisis et mi at laoreet. Quisque et luctus leo. Maecenas porta, nibh ac tristique aliquet, tellus leo vulputate risus, ut tempor nibh quam eu orci. Donec placerat condimentum nisi eget tincidunt. Nunc scelerisque ex eu lorem feugiat convallis. Curabitur eget nisl elit. Nullam sed imperdiet urna, non accumsan ligula. \n              ")]),t._v(" "),s("p",[t._v("\n                In faucibus tellus nec dignissim tempor. Sed quis enim ut nunc pharetra convallis ac a magna. Sed velit mauris, malesuada vitae diam non, dictum tempus urna. Proin ac odio suscipit, malesuada sapien in, commodo sem. Quisque hendrerit libero pellentesque ex eleifend, eget eleifend elit viverra. Donec eget luctus turpis.\n              ")])])])}]}},380:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hatch-container"},[s("div",{staticClass:"svg-background-left"},[s("hatch-bg")],1),t._v(" "),s("div",{staticClass:"svg-background-right"},[s("hatch-bg")],1)])},staticRenderFns:[]}},381:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},382:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{width:"70px",height:"70px",viewBox:"0 0 70 70",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("g",{attrs:{id:"Symbols",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{id:"ICON:-Access-to-Services",fill:"#050C14"}},[s("path",{attrs:{d:"M9.45945946,9.67741935 L15.1327102,9.68904164 L15.1327102,11.6129032 L11.3513514,11.6129032 L11.3513514,15.483871 L9.45945946,15.483871 L9.45945946,9.67741935 Z M58.6486486,9.67741935 L58.6486486,15.4719396 L56.7567568,15.4797954 L56.7567568,11.620759 L52.972973,11.6129032 L52.972973,9.67741935 L58.6486486,9.67741935 Z M18.9189189,9.67741935 L20.8108108,9.67741935 L20.8108108,11.6129032 L18.9189189,11.6129032 L18.9189189,9.67741935 Z M9.45945946,19.3548387 L11.3513514,19.3548387 L11.3513514,25.1612903 L9.45945946,25.1612903 L9.45945946,19.3548387 Z M9.45945946,29.0322581 L11.3513514,29.0322581 L11.3513514,34.8387097 L9.45945946,34.8387097 L9.45945946,29.0322581 Z M58.6486486,29.0322581 L58.6486486,34.8387097 L56.7567568,34.8387097 L56.7567568,29.0322581 L58.6486486,29.0322581 Z M56.7567568,19.3548387 L58.6486486,19.3548387 L58.6486486,25.1612903 L56.7567568,25.1612903 L56.7567568,19.3548387 Z M37.8378378,58.0645161 L43.5135135,58.0645161 L43.5135135,60 L37.8378378,60 L37.8378378,58.0645161 Z M28.3783784,58.0645161 L34.0540541,58.0645161 L34.0540541,60 L28.3783784,60 L28.3783784,58.0645161 Z M18.9189189,58.0645161 L24.5945946,58.0645161 L24.5945946,60 L18.9189189,60 L18.9189189,58.0645161 Z M47.2972973,9.67741935 L49.1891892,9.67741935 L49.1891892,11.6129032 L47.2972973,11.6129032 L47.2972973,9.67741935 Z M52.972973,44.9032258 L52.972973,40.2580645 L58.6486486,36.7741935 L64.3243243,40.2580645 L64.3243243,44.9032258 L70,44.9032258 L70,60 L60.932538,60 L60.9319046,51.8876953 L56.3786159,51.8876953 L56.3786159,60 L47.2972973,60 L47.2972973,44.9032258 L52.972973,44.9032258 Z M58.6494627,46.0645161 C59.9032984,46.0645161 60.919733,45.0246614 60.919733,43.7419355 C60.919733,42.4592096 59.9032984,41.4193548 58.6494627,41.4193548 C57.3956271,41.4193548 56.3791924,42.4592096 56.3791924,43.7419355 C56.3791924,45.0246614 57.3956271,46.0645161 58.6494627,46.0645161 Z M34.0540541,0 L45.4054054,8.51612903 L45.4054054,23.2258065 L36.3243243,23.2258065 L36.3243243,15.483871 L31.7837838,15.483871 L31.7837838,23.2258065 L22.7027027,23.2258065 L22.7027027,8.51612903 L34.0540541,0 Z M5.67567568,38.7096774 L15.1351351,38.7096774 L15.1351351,44.516129 L20.8108108,44.516129 L20.8108108,54.1935484 L15.1351351,54.1935484 L15.1351351,60 L5.67567568,60 L5.67567568,54.1935484 L0,54.1935484 L0,44.516129 L5.67567568,44.516129 L5.67567568,38.7096774 Z"}}),t._v(" "),s("rect",{attrs:{id:"Line",x:"0",y:"67",width:"70",height:"3"}})])])])},staticRenderFns:[]}},383:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"crosshair-container"},[s("crosshair-svg"),t._v(" "),s("crosshair-svg"),t._v(" "),s("crosshair-svg"),t._v(" "),s("crosshair-svg")],1)},staticRenderFns:[]}},384:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v(" Style Guide ")]),t._v(" "),s("router-view")],1)},staticRenderFns:[]}},385:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{width:"70px",height:"70px",viewBox:"0 0 70 70",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("g",{attrs:{id:"Symbols",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{id:"ICON:-Collaborate",fill:"#050C14"}},[s("path",{attrs:{d:"M17.0199332,28.199233 C16.2633815,27.977708 15.5295126,27.719377 14.8214286,27.4265937 C13.8616507,28.301409 9.4330052,30 7.67857143,30 C8.49458967,29.1428571 10.3571429,27.4285714 10.3571429,24.8571429 C7.01928342,22.2262444 5,18.5579678 5,14.5714286 C5,6.52385079 13.3946609,0 23.75,0 C34.1053391,0 42.5,6.52386153 42.5,14.5714286 C42.5,15.8068382 42.3439929,16.9556905 42.0557038,18.0209557 C28.7954102,17.5239258 19.8779297,23.2629395 17.0199332,28.199233 Z M40,58.8571429 C29.4188291,58.8571429 15,53.1428571 15,39.4285714 C15,28.698482 26.1928813,20 40,20 C53.8071187,20 65,28.6984677 65,39.4285714 C65,44.7439571 62.3076221,49.6349926 57.8571429,53.1428571 C57.8571429,56.5714286 60.3405471,58.8571429 61.4285714,60 C59.0893264,60 53.1844657,57.7352121 51.9047619,56.5687916 C48.3502543,58.0385331 44.3084254,58.8571429 40,58.8571429 Z M40,42 C41.1045695,42 42,41.1045695 42,40 C42,38.8954305 41.1045695,38 40,38 C38.8954305,38 38,38.8954305 38,40 C38,41.1045695 38.8954305,42 40,42 Z M49,42 C50.1045695,42 51,41.1045695 51,40 C51,38.8954305 50.1045695,38 49,38 C47.8954305,38 47,38.8954305 47,40 C47,41.1045695 47.8954305,42 49,42 Z M31,42 C32.1045695,42 33,41.1045695 33,40 C33,38.8954305 32.1045695,38 31,38 C29.8954305,38 29,38.8954305 29,40 C29,41.1045695 29.8954305,42 31,42 Z"}}),t._v(" "),s("rect",{attrs:{id:"Line",x:"0",y:"67",width:"70",height:"3"}})])])])},staticRenderFns:[]}},386:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Fonts")]),t._v(" "),s("h1",{staticClass:"title"},[t._v("Title")]),t._v(" "),s("h1",[t._v("Header 1")]),t._v(" "),s("h2",[t._v("Header 2")]),t._v(" "),s("p",{staticClass:"subheader"},[t._v("Subheader")]),t._v(" "),s("p",{staticClass:"large"},[t._v("Paragraph Large")]),t._v(" "),s("p",{staticClass:"large"},[t._v(t._s(t.lorem_ipsum))]),t._v(" "),s("p",[t._v("Paragraph")]),t._v(" "),s("p",[t._v(t._s(t.lorem_ipsum))])])},staticRenderFns:[]}},387:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{viewBox:"0 0 628 598",preserveAspectRatio:"none"}},[s("g",{attrs:{fill:"#7FD4FE"}},[s("rect",{attrs:{id:"Rectangle-2",opacity:"0.5",x:"0",y:"0",width:"1.03857567",height:"596.16559"}}),t._v(" "),s("rect",{attrs:{id:"Top",x:"0",y:"0",width:"49.851632",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"128.927445",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"61.2933754",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"26.5076236",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"95.1104101",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"163.801262",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"232.492114",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"301.182965",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"368.817035",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"197.618297",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"266.309148",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"335",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"403.690852",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"437.507886",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"472.381703",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"506.198738",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"541.072555",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Rectangle-2",x:"1.03857567",y:"574.88959",width:"18.694362",height:"1.05678233"}}),t._v(" "),s("rect",{attrs:{id:"Bottom",x:"0",y:"594.968454",width:"49.851632",height:"1.05678233"}})])])},staticRenderFns:[]}},388:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"radio-button-container"},[s("input",{staticClass:"radio-button-checkbox",attrs:{type:"checkbox"}}),t._v(" "),s("div",{staticClass:"radio-button",class:t.type},[s("div",{staticClass:"radio-button-indicator",class:t.type})])])},staticRenderFns:[]}},389:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"arrow-container auto"},[s("div",{staticClass:"bracket-left"},[s("svg",{attrs:{width:"36px",height:"24px",viewBox:"0 0 36 24"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{staticClass:"fill-group"},[s("polygon",{attrs:{points:"0 24 6 24 6 22 2.08571429 22 2.08571429 2 6 2 6 0 0 0"}})])])])]),t._v(" "),s("div",{staticClass:"bracket-right"},[s("svg",{attrs:{width:"36px",height:"24px",viewBox:"0 0 36 24"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{staticClass:"fill-group"},[s("polygon",{attrs:{points:"30 24 36 24 36 0 30 0 30 2 34 2 34 22 30 22"}})])])])]),t._v(" "),s("div",{staticClass:"arrow"},["next"===t.type?s("svg",{attrs:{width:"36px",height:"24px",viewBox:"0 0 36 24"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{staticClass:"fill-group"},[s("polygon",{attrs:{points:"13 18 23 13 23 11 13 6 13 8 21 12.0218182 13 16"}})])])]):"share"===t.type?s("svg",{attrs:{width:"36px",height:"24px",viewBox:"0 0 36 24"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{staticClass:"fill-group share-icon"},[s("path",{attrs:{d:"M16.9990234,18 L19,18 L19,13 L24,13 L24,11 L19,11 L19,6 L16.9990234,6 L16.9990234,11 L12,11 L12,13 L16.9990234,13 L16.9990234,18 Z"}})])])]):s("svg",{attrs:{width:"36px",height:"24px",viewBox:"0 0 36 24"}},[s("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{staticClass:"fill-group"},[s("path",{attrs:{d:"M23,18 L13,13 L13,11 L23,6 L23,8 L15,12.0218182 L23,16 L23,18 Z"}})])])])])])},staticRenderFns:[]}}},[157]);
//# sourceMappingURL=app.2b3a71c30e5aa03336ec.js.map