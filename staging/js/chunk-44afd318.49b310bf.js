(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44afd318"],{3016:function(t,e,n){},"7f7e":function(t,e,n){"use strict";var r=n("3016"),o=n.n(r);o.a},"8d6f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("raiden-dialog",{staticClass:"error-dialog",attrs:{visible:t.showDialog},on:{close:t.dismiss}},[n("v-card-text",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("error-message",{attrs:{error:t.error}})],1)],1)],1)},o=[],c=n("4a7b"),i=n("b99a"),a=n("66bc"),u=n("8e27");function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}function b(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function y(t){var e=m();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var j=function(t){b(n,t);var e=y(n);function n(){return f(this,n),e.apply(this,arguments)}return p(n,[{key:"dismiss",value:function(){}},{key:"showDialog",get:function(){return null!==this.error}}]),n}(i["e"]);Object(c["a"])([Object(i["d"])({required:!0})],j.prototype,"error",void 0),Object(c["a"])([Object(i["b"])()],j.prototype,"dismiss",null),j=Object(c["a"])([Object(i["a"])({components:{RaidenDialog:a["a"],ErrorMessage:u["a"]}})],j);var g=j,w=g,_=(n("bf6c1"),n("8e3c")),k=n("7e96"),S=n.n(k),P=n("1cbe"),x=n("2bff"),R=Object(_["a"])(w,r,o,!1,null,"5c507294",null);e["a"]=R.exports;S()(R,{VCardText:P["b"],VRow:x["a"]})},"9d0e":function(t,e,n){},"9db2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("lazy-route",[n("open-channel")],1)},o=[],c=n("4a7b"),i=n("b99a"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{staticClass:"open-channel",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.openChannel()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("amount-input",{attrs:{token:t.token,max:t.token.balance,limit:""},model:{value:t.deposit,callback:function(e){t.deposit=e},expression:"deposit"}})],1)],1),n("divider"),n("token-information",{attrs:{token:t.token}}),n("divider"),n("v-row",{staticClass:"open-channel__hub",attrs:{align:"center",justify:"center","no-gutters":""}},[n("v-col",{staticClass:"open-channel__hub__label text-left",attrs:{cols:"2"}},[t._v(" "+t._s(t.$t("open-channel.hub"))+" ")]),n("v-col",{staticClass:"open-channel__hub__address text-left",attrs:{cols:"8"}},[n("address-display",{attrs:{address:t.partner}})],1)],1),n("action-button",{attrs:{enabled:t.valid,text:t.$t("open-channel.open-button")}}),n("open-channel-dialog",{attrs:{visible:t.loading,steps:t.steps,current:t.current,done:t.done,"done-step":t.doneStep},on:{cancel:function(e){return t.dismiss()}}}),n("error-dialog",{attrs:{error:t.error},on:{dismiss:function(e){t.error=null}}})],1)},u=[],s=n("f633"),f=n.n(s),l=n("dbe0"),p=n("87a2"),b=n("a3d5"),d=n("f30a"),y=n("fc09"),h=n("152b"),v=n("8d6f"),m=n("01f0"),O=n("8716"),j=n("9302"),g=n("750b"),w=n("7aa1"),_=n("fb6b"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("raiden-dialog",{staticClass:"open-channel-dialog",attrs:{visible:t.visible,"hide-close":""},on:{close:t.cancel}},[r("v-card-title",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[t.done?r("span",[t._v(" "+t._s(t.doneStep.title)+" ")]):t.steps.length>t.current?r("span",[t._v(" "+t._s(t.steps[t.current].title)+" ")]):t._e()])],1)],1),r("v-card-actions",[t.done?r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-img",{staticClass:"open-channel-dialog__done",attrs:{src:n("2e1f")}})],1)],1):r("v-row",[r("spinner")],1)],1),r("v-card-text",[r("v-row",{attrs:{align:"center",justify:"center"}},[t.done?r("span",[t._v(" "+t._s(t.doneStep.description)+" ")]):t.steps.length>t.current?r("span",[t._v(" "+t._s(t.steps[t.current].description)+" ")]):t._e()])],1)],1)},S=[],P=n("66bc"),x=n("0527");function R(t){return R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e,n){return e&&T(t.prototype,e),n&&T(t,n),t}function E(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$(t,e)}function $(t,e){return $=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},$(t,e)}function V(t){var e=I();return function(){var n,r=z(t);if(e){var o=z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return q(this,n)}}function q(t,e){return!e||"object"!==R(e)&&"function"!==typeof e?A(t):e}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var H=function(t){E(n,t);var e=V(n);function n(){return C(this,n),e.apply(this,arguments)}return D(n,[{key:"cancel",value:function(){}}]),n}(i["e"]);Object(c["a"])([Object(i["d"])({required:!0})],H.prototype,"visible",void 0),Object(c["a"])([Object(i["d"])({required:!0})],H.prototype,"steps",void 0),Object(c["a"])([Object(i["d"])({required:!1,default:0})],H.prototype,"current",void 0),Object(c["a"])([Object(i["d"])({required:!1})],H.prototype,"done",void 0),Object(c["a"])([Object(i["d"])({required:!0})],H.prototype,"doneStep",void 0),Object(c["a"])([Object(i["b"])()],H.prototype,"cancel",null),H=Object(c["a"])([Object(i["a"])({components:{RaidenDialog:P["a"],Spinner:x["a"]}})],H);var J=H,L=J,B=n("8e3c"),F=n("7e96"),M=n.n(F),Z=n("1cbe"),G=n("1c43"),K=n("6fd4"),N=n("2bff"),Q=Object(B["a"])(L,k,S,!1,null,null,null),U=Q.exports;function W(t){return W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(Object(n),!0).forEach((function(e){tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function et(t,e,n,r,o,c,i){try{var a=t[c](i),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function nt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function i(t){et(c,r,o,i,a,"next",t)}function a(t){et(c,r,o,i,a,"throw",t)}i(void 0)}))}}function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ot(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ct(t,e,n){return e&&ot(t.prototype,e),n&&ot(t,n),t}function it(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&at(t,e)}function at(t,e){return at=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},at(t,e)}function ut(t){var e=lt();return function(){var n,r=pt(t);if(e){var o=pt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return st(this,n)}}function st(t,e){return!e||"object"!==W(e)&&"function"!==typeof e?ft(t):e}function ft(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function pt(t){return pt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},pt(t)}M()(Q,{VCardActions:Z["a"],VCardText:Z["b"],VCardTitle:Z["c"],VCol:G["a"],VImg:K["a"],VRow:N["a"]});var bt=function(t){it(n,t);var e=ut(n);function n(){var t;return rt(this,n),t=e.apply(this,arguments),t.partner="",t.deposit="0.00",t.valid=!1,t.loading=!1,t.error=null,t.steps=[],t.doneStep=Object(p["c"])(),t.current=0,t.done=!1,t}return ct(n,[{key:"dismiss",value:function(){this.loading=!1}},{key:"beforeRouteLeave",value:function(t,e,n){this.loading?window.confirm(this.$t("open-channel.confirmation"))?n():n(!1):n()}},{key:"openChannel",value:function(){var t=nt(f.a.mark((function t(){var e,n,r,o,c=this;return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.token,n=e.address,r=e.decimals,o=b["a"].parse(this.deposit,r),o.eq(d["Zero"])?this.steps=[this.$t("open-channel.steps.open")]:this.steps=[this.$t("open-channel.steps.open"),this.$t("open-channel.steps.transfer"),this.$t("open-channel.steps.deposit")],this.loading=!0,t.prev=4,t.next=7,this.$raiden.openChannel(n,this.partner,o,(function(t){return c.current=t.current-1}));case 7:this.done=!0,setTimeout((function(){c.loading=!1,c.navigateToSelectTransferTarget(n)}),2e3),t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](4),this.error=t.t0,this.done=!1,this.loading=!1;case 16:case"end":return t.stop()}}),t,this,[[4,11]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){var t=nt(f.a.mark((function t(){var e,n,r;return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.deposit=Object(_["b"])(this.$route.query.deposit),this.doneStep=this.$t("open-channel.steps.done"),e=this.$route.params,n=e.token,r=e.partner,y["a"].checkAddressChecksum(n)){t.next=6;break}return this.navigateToHome(),t.abrupt("return");case 6:return t.next=8,this.$raiden.fetchTokenData([n]);case 8:return"number"!==typeof this.token.decimals&&this.navigateToHome(),t.next=11,this.$raiden.monitorToken(n);case 11:if(0===this.token.decimals&&this.deposit.indexOf(".")>-1&&(this.deposit=this.deposit.split(".")[0]),y["a"].checkAddressChecksum(r)){t.next=17;break}return this.navigateToTokenSelect(),t.abrupt("return");case 17:this.partner=r;case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"token",get:function(){var t=this.$route.params.token;return this.getToken(t)||{address:t}}}]),n}(Object(i["c"])(h["a"]));bt=Object(c["a"])([Object(i["a"])({components:{TokenInformation:O["a"],Divider:m["a"],ErrorDialog:v["a"],ActionButton:g["a"],AmountInput:l["a"],AddressDisplay:j["a"],OpenChannelDialog:U},computed:Y({},Object(w["d"])({getToken:"token"}))})],bt);var dt=bt,yt=dt,ht=(n("7f7e"),n("58bc")),vt=Object(B["a"])(yt,a,u,!1,null,"70a7a2b8",null),mt=vt.exports;M()(vt,{VCol:G["a"],VForm:ht["a"],VRow:N["a"]});var Ot=n("f931");function jt(t){return jt="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jt(t)}function gt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wt(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_t(t,e)}function _t(t,e){return _t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_t(t,e)}function kt(t){var e=xt();return function(){var n,r=Rt(t);if(e){var o=Rt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return St(this,n)}}function St(t,e){return!e||"object"!==jt(e)&&"function"!==typeof e?Pt(t):e}function Pt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Rt(t){return Rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Rt(t)}var Ct=function(t){wt(n,t);var e=kt(n);function n(){return gt(this,n),e.apply(this,arguments)}return n}(i["e"]);Ct=Object(c["a"])([Object(i["a"])({components:{LazyRoute:Ot["a"],OpenChannel:mt}})],Ct);var Tt=Ct,Dt=Tt,Et=Object(B["a"])(Dt,r,o,!1,null,"4ef64532",null);e["default"]=Et.exports},bf6c1:function(t,e,n){"use strict";var r=n("9d0e"),o=n.n(r);o.a},fb6b:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n("fc09");function o(t){var e="";return t&&"string"===typeof t&&/^\d*[.]?\d*$/.test(t)&&(e=t),e}function c(t){var e="";return t&&"string"===typeof t&&r["a"].isAddress(t)&&r["a"].checkAddressChecksum(t)&&(e=t),e}}}]);