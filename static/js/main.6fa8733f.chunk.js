(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,r){},110:function(e,t,r){e.exports=r.p+"static/media/photo400.a53acead.jpg"},120:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(88),i=r.n(o),c=r(60),l=(r(104),r(106),r(23)),u=r(11),s=r(10),m=r(125),f=r(109),h=r(131),p=r(126),d=a.a.createContext(),v={},g=function(e){Object(n.useEffect)(function(){var t=v[e];t&&setTimeout(function(){window.scrollTo(0,t)},50);var r=function(){v[e]=window.scrollY};return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}},[e])},y=function(){var e=a.a.useContext(d),t=e.posts,r=e.removePost,n=a.a.useState(!1),o=Object(s.a)(n,2),i=o[0],c=o[1];return a.a.useEffect(function(){"alex.s.86@mail.ru"===window.localStorage.getItem("email")?c(!0):c(!1)},[]),g("Home"),a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{xs:1,md:2,className:"g-4"},t.map(function(e,t){return a.a.createElement(f.a,{key:e.id},a.a.createElement(h.a,null,a.a.createElement(l.b,{to:"/post/".concat(e.id)},a.a.createElement(h.a.Img,{variant:"top",src:e.imageUrl})),a.a.createElement(h.a.Body,null,a.a.createElement(h.a.Title,{className:"cardtitle"},e.title),a.a.createElement(h.a.Text,null,e.text.substr(0,150),"..."),a.a.createElement(l.b,{to:"/post/".concat(e.id)},a.a.createElement(p.a,{variant:"primary"},"\u0427\u0438\u0442\u0430\u0442\u044c")),i&&a.a.createElement(p.a,{style:{marginLeft:"0.3rem"},onClick:function(){return r(e.id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))})))},E=r(127),b=r(129),w=r(1);var x=function(){var e=a.a.useState(!1),t=Object(s.a)(e,2),r=t[0],n=t[1],o=Object(w.n)().pathname;return a.a.useEffect(function(){window.localStorage.getItem("token")?n(!0):n(!1)},[o]),a.a.createElement("div",{style:{padding:"0 1.5rem"}},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header"},a.a.createElement(E.a.Brand,null,a.a.createElement(l.b,{to:"/"},a.a.createElement("h2",null,"React Blog"))),a.a.createElement(b.a,{variant:"pills"},a.a.createElement(b.a.Link,{active:"/"===o,to:"/",as:l.b},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),a.a.createElement(b.a.Link,{active:"/about"===o,to:"/about",as:l.b},"\u041e\u0431\u043e \u043c\u043d\u0435"),r?a.a.createElement(b.a.Link,{active:"/profile"===o,to:"/profile",as:l.b},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"):a.a.createElement(b.a.Link,{active:"/login"===o,to:"/login",as:l.b},"\u0412\u043e\u0439\u0442\u0438"),r?a.a.createElement(b.a.Link,{active:"/newpost"===o,to:"/newpost",as:l.b},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"):a.a.createElement(b.a.Link,{disabled:!0,active:"/newpost"===o,to:"/newpost",as:l.b},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))))},O=r(110),j=r.n(O);var L=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"full-post"},a.a.createElement("h2",null,"\u0421\u0442\u0430\u043d\u0438\u0446\u0430 \u043e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435 \u0431\u043b\u043e\u0433\u0430"),a.a.createElement("div",{style:{marginBottom:"1rem"}},a.a.createElement("img",{src:j.a,alt:"About"})),a.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet voluptate quos minus odio quam, vitae assumenda ullam. Molestias, harum iure quisquam natus nihil vitae aut tenetur mollitia doloremque maiores!")))};var k=function(){return a.a.createElement("div",{className:"notfound"},a.a.createElement("h1",{className:"notfoundheader"},"\u274c404 Not Found\u274c"))},N=function(){var e=a.a.useContext(d).posts,t=(Object(w.p)(),Object(w.r)().id),r=e.find(function(e){return e.id===t});return r?a.a.createElement("div",{className:"full-post"},a.a.createElement("h2",{className:"postheader"},r.title),a.a.createElement("div",{style:{marginBottom:"1rem"}},a.a.createElement("img",{src:r.imageUrl,alt:r.title})),a.a.createElement("p",{className:"paragraph"},r.text),a.a.createElement(l.b,{to:"/"},a.a.createElement(p.a,null,"\u041d\u0430\u0437\u0430\u0434"))):a.a.createElement("h4",null,"\u0421\u0442\u0430\u0442\u044c\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \ud83d\ude14")};var S=function(){return a.a.createElement("footer",{className:"container mt-auto"},a.a.createElement(E.a,{bg:"light",expand:"lg",style:{margin:"20px 0 0 0",padding:"0 1.5rem",height:"75px"}},a.a.createElement("div",{className:"container"},a.a.createElement(E.a.Brand,{href:"#home",style:{fontSize:"1.2rem"}},a.a.createElement(l.b,{to:"/"},"REACT BLOG 2023")),a.a.createElement(E.a,null,a.a.createElement(E.a.Text,null,"by Alexey Sedov")))),a.a.createElement("div",{style:{textAlign:"center",padding:"3px",backgroundColor:"rgba(0, 0, 0, 0.02)"}},"\xa9 ",(new Date).getFullYear()," All right reserved:"," ",a.a.createElement("a",{href:"/"},"LEXXS")))};var _=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(w.b,null))},I=r(2),P=r(5),G=r(130),T=r(49),B=r(78),C=r(32),F=Object(B.a)({apiKey:"AIzaSyBn6E63kzPKuoc7Y4-X85sUHeTro3DgUK0",authDomain:"auth-blog-d3c91.firebaseapp.com",projectId:"auth-blog-d3c91",storageBucket:"auth-blog-d3c91.appspot.com",messagingSenderId:"265655234665",appId:"1:265655234665:web:4b8e432341f54a2babf2f8"}),q=Object(T.a)(F);Object(C.e)(F);function U(){U=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==t&&r.call(g,o)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}var A=function(){var e=Object(w.p)(),t=Object(n.useState)({email:"",password:""}),r=Object(s.a)(t,2),o=r[0],i=r[1],c=function(e){i(Object(u.a)({},o,Object(P.a)({},e.target.name,e.target.value)))},l=function(){var t=Object(I.a)(U().mark(function t(r){return U().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),Object(T.c)(q,o.email,o.password).then(function(t){e("/profile"),window.localStorage.setItem("token",t.user.accessToken),window.localStorage.setItem("email",t.user.email)}).catch(function(e){console.log(e),alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),f=Object(n.useState)(null),h=Object(s.a)(f,2),d=(h[0],h[1]);return Object(n.useEffect)(function(){var t=Object(T.b)(q,function(t){t?(d(t),e("/profile")):d(null)});return function(){t()}},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"full-login"},a.a.createElement(G.a,{onSubmit:l,style:{maxWidth:"350px",margin:"0 auto"},className:"container"},a.a.createElement(m.a,null,a.a.createElement(G.a.Group,{className:"mb-3",controlId:"formBasicEmail"},a.a.createElement(G.a.Label,null,"Email"),a.a.createElement(G.a.Control,{onChange:c,name:"email",type:"email",value:o.email,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"}))),a.a.createElement(m.a,null,a.a.createElement(G.a.Group,{className:"mb-3",controlId:"formBasicPassword"},a.a.createElement(G.a.Label,null,"Password"),a.a.createElement(G.a.Control,{onChange:c,name:"password",type:"password",value:o.password,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}))),a.a.createElement(p.a,{variant:"primary",type:"submit"},"\u0412\u043e\u0439\u0442\u0438"))))},D=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),r=t[0],o=t[1],i=Object(w.p)();Object(n.useEffect)(function(){var e=Object(T.b)(q,function(e){e?o(e):(o(null),i("/login"))});return function(){e()}},[]);var c=null;if(null!==r)return c=r,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",{className:"full-post"},a.a.createElement("h2",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b!"),a.a.createElement("div",{style:{marginBottom:"1rem"}}),a.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet voluptate quos minus odio quam, vitae assumenda ullam. Molestias, harum iure quisquam natus nihil vitae aut tenetur mollitia doloremque maiores!"),a.a.createElement("p",null,"\u0420\u0430\u0434\u044b \u0442\u0435\u0431\u044f \u0432\u0438\u0434\u0435\u0442\u044c ".concat(c.email.split("@")[0])),a.a.createElement(p.a,{onClick:function(){Object(T.d)(q).then(function(){console.log("\u0432\u044b \u0432\u044b\u0448\u043b\u0438"),window.localStorage.removeItem("token"),window.localStorage.removeItem("email")}).catch(function(e){return console.log(e)})}},"\u0412\u044b\u0439\u0442\u0438"))))},Y=function(){return window.localStorage.getItem("token")?a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",{className:"full-post"},a.a.createElement("h2",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435!"),a.a.createElement("div",{style:{marginBottom:"1rem"}}),a.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet voluptate quos minus odio quam, vitae assumenda ullam. Molestias, harum iure quisquam natus nihil vitae aut tenetur mollitia doloremque maiores!"),a.a.createElement(p.a,null,"\u0412\u044b\u0439\u0442\u0438")))):a.a.createElement(w.a,{to:"/"})},M=r(128),K=Object(B.a)({apiKey:"AIzaSyBn6E63kzPKuoc7Y4-X85sUHeTro3DgUK0",authDomain:"auth-blog-d3c91.firebaseapp.com",projectId:"auth-blog-d3c91",storageBucket:"auth-blog-d3c91.appspot.com",messagingSenderId:"265655234665",appId:"1:265655234665:web:4b8e432341f54a2babf2f8"}),z=Object(C.e)(K);function H(){H=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==t&&r.call(g,o)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}var Q=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),r=(t[0],t[1]),o=Object(n.useState)({title:"",text:"",imageUrl:""}),i=Object(s.a)(o,2),l=i[0],f=i[1],h="9tk8OKr9wnZvXVyodmmfQwvy1O6UzHrIaGKAfnu72Cw";function d(){return v.apply(this,arguments)}function v(){return(v=Object(I.a)(H().mark(function e(){return H().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("https://api.unsplash.com/photos/random/?client_id=".concat(h)).then(function(e){var t=e.data.urls.raw+"&fit=crop&w=460&h=250";return r(!0),console.log(t),f({title:"",text:"",imageUrl:t})});case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(0),console.log(e.t0),r(!0),e.abrupt("return",f({title:"",text:"",imageUrl:"https://images.unsplash.com/photo-1635604392842-69afcee9e0ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460"}));case 10:case"end":return e.stop()}},e,null,[[0,5]])}))).apply(this,arguments)}var g=Object(c.useQuery)("response",d),y=(g.data,g.isLoading);if(g.isError,y)return console.log("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445...");var E=Object(C.b)(z,"posts");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"full-login"},a.a.createElement(G.a,{onSubmit:function(e){e.preventDefault(),l.title&&l.text?(Object(C.a)(E,l),f({title:"",text:"",imageUrl:""}),d()):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")},style:{maxWidth:"350px",margin:"0 auto"},className:"container"},a.a.createElement(m.a,null,a.a.createElement(G.a.Group,{className:"mb-3",controlId:"formBasicEmail"},a.a.createElement(G.a.Label,null,"Post title"),a.a.createElement(G.a.Control,{name:"title",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:l.title,onChange:function(e){return f(Object(u.a)({},l,{title:e.target.value}))}}))),a.a.createElement(m.a,null,a.a.createElement(G.a.Group,{className:"mb-3",controlId:"formBasicPassword"},a.a.createElement(G.a.Label,null,"Post text"),a.a.createElement(G.a.Control,{as:"textarea",rows:7,name:"text",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",value:l.text,onChange:function(e){return f(Object(u.a)({},l,{text:e.target.value}))}}))),a.a.createElement(p.a,{variant:"primary",type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e"))))};var X=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)({title:"",text:"",imageUrl:""}),c=Object(s.a)(i,2),l=(c[0],c[1],Object(n.useState)([])),m=Object(s.a)(l,2),f=(m[0],m[1],Object(C.b)(z,"posts")),h=Object(C.h)(f,Object(C.g)("title","asc"));Object(n.useEffect)(function(){Object(C.f)(h,function(e){o(e.docs.map(function(e){return Object(u.a)({id:e.id,viewing:!1},e.data())}))})},[]);var p=Object(n.useState)(!1),v=Object(s.a)(p,2),g=v[0],E=v[1];return Object(n.useEffect)(function(){window.addEventListener("scroll",function(){window.pageYOffset>250?E(!0):E(!1)})},[]),a.a.createElement(d.Provider,{value:{posts:r,removePost:function(e){Object(C.c)(Object(C.d)(z,"posts",e))}}},a.a.createElement("div",{className:"d-flex flex-column min-vh-100"},a.a.createElement(x,null),a.a.createElement("div",{className:"container"},a.a.createElement(w.e,null,a.a.createElement(w.c,{path:"/",element:a.a.createElement(_,null)},a.a.createElement(w.c,{path:"/",element:a.a.createElement(y,null)}),a.a.createElement(w.c,{path:"/profile",element:a.a.createElement(D,null)}),a.a.createElement(w.c,{path:"/profiletest",element:a.a.createElement(Y,null)}),a.a.createElement(w.c,{path:"/login",element:a.a.createElement(A,null)}),a.a.createElement(w.c,{path:"/newpost",element:a.a.createElement(Q,null)}),a.a.createElement(w.c,{path:"/about",element:a.a.createElement(L,null)}),a.a.createElement(w.c,{path:"/post/:id",element:a.a.createElement(N,null)}),a.a.createElement(w.c,{path:"/not-found",element:a.a.createElement(k,null)}),a.a.createElement(w.c,{path:"*",element:a.a.createElement(w.a,{to:"/not-found"})})))),a.a.createElement(S,null),g&&a.a.createElement("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"upclick"},"\u25b2")))},V=new c.QueryClient;i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.QueryClientProvider,{client:V},a.a.createElement(l.a,null,a.a.createElement(X,null)))))},97:function(e,t,r){e.exports=r(120)}},[[97,2,1]]]);
//# sourceMappingURL=main.6fa8733f.chunk.js.map