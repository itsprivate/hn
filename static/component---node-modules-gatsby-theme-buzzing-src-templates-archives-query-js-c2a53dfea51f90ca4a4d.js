(self.webpackChunkexample=self.webpackChunkexample||[]).push([[887],{6479:function(e,t,n){var r=n(7316);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},4070:function(e){"use strict";function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",a=0,o=-1,i=0,l=0;l<=e.length;++l){if(l<e.length)n=e.charCodeAt(l);else{if(47===n)break;n=47}if(47===n){if(o===l-1||1===i);else if(o!==l-1&&2===i){if(r.length<2||2!==a||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var u=r.lastIndexOf("/");if(u!==r.length-1){-1===u?(r="",a=0):a=(r=r.slice(0,u)).length-1-r.lastIndexOf("/"),o=l,i=0;continue}}else if(2===r.length||1===r.length){r="",a=0,o=l,i=0;continue}t&&(r.length>0?r+="/..":r="..",a=2)}else r.length>0?r+="/"+e.slice(o+1,l):r=e.slice(o+1,l),a=l-o-1;o=l,i=0}else 46===n&&-1!==i?++i:i=-1}return r}var r={resolve:function(){for(var e,r="",a=!1,o=arguments.length-1;o>=-1&&!a;o--){var i;o>=0?i=arguments[o]:(void 0===e&&(e=process.cwd()),i=e),t(i),0!==i.length&&(r=i+"/"+r,a=47===i.charCodeAt(0))}return r=n(r,!a),a?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&a&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var a=arguments[n];t(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var o=e.length,i=o-a,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var u=n.length-l,s=i<u?i:u,c=-1,f=0;f<=s;++f){if(f===s){if(u>s){if(47===n.charCodeAt(l+f))return n.slice(l+f+1);if(0===f)return n.slice(l+f)}else i>s&&(47===e.charCodeAt(a+f)?c=f:0===f&&(c=0));break}var p=e.charCodeAt(a+f);if(p!==n.charCodeAt(l+f))break;47===p&&(c=f)}var d="";for(f=a+c+1;f<=o;++f)f!==o&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(l+c):(l+=c,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,a=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(n=e.charCodeAt(i))){if(!o){a=i;break}}else o=!1;return-1===a?r?"/":".":r&&1===a?"//":e.slice(0,a)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,a=0,o=-1,i=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var l=n.length-1,u=-1;for(r=e.length-1;r>=0;--r){var s=e.charCodeAt(r);if(47===s){if(!i){a=r+1;break}}else-1===u&&(i=!1,u=r+1),l>=0&&(s===n.charCodeAt(l)?-1==--l&&(o=r):(l=-1,o=u))}return a===o?o=u:-1===o&&(o=e.length),e.slice(a,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!i){a=r+1;break}}else-1===o&&(i=!1,o=r+1);return-1===o?"":e.slice(a,o)},extname:function(e){t(e);for(var n=-1,r=0,a=-1,o=!0,i=0,l=e.length-1;l>=0;--l){var u=e.charCodeAt(l);if(47!==u)-1===a&&(o=!1,a=l+1),46===u?-1===n?n=l:1!==i&&(i=1):-1!==n&&(i=-1);else if(!o){r=l+1;break}}return-1===n||-1===a||0===i||1===i&&n===a-1&&n===r+1?"":e.slice(n,a)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,a=e.charCodeAt(0),o=47===a;o?(n.root="/",r=1):r=0;for(var i=-1,l=0,u=-1,s=!0,c=e.length-1,f=0;c>=r;--c)if(47!==(a=e.charCodeAt(c)))-1===u&&(s=!1,u=c+1),46===a?-1===i?i=c:1!==f&&(f=1):-1!==i&&(f=-1);else if(!s){l=c+1;break}return-1===i||-1===u||0===f||1===f&&i===u-1&&i===l+1?-1!==u&&(n.base=n.name=0===l&&o?e.slice(1,u):e.slice(l,u)):(0===l&&o?(n.name=e.slice(1,i),n.base=e.slice(1,u)):(n.name=e.slice(l,i),n.base=e.slice(l,u)),n.ext=e.slice(i,u)),l>0?n.dir=e.slice(0,l-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r},3048:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7294),i=(r=o)&&r.__esModule?r:{default:r};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),t}(i.default.Component);t.default=s},7388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(n(7294)),o=i(n(5697));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return a.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),t}(a.default.Component);t.default=s,s.propTypes={className:o.default.string,style:o.default.object,client:o.default.string.isRequired,slot:o.default.string.isRequired,layout:o.default.string,layoutKey:o.default.string,format:o.default.string,responsive:o.default.string},s.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},3911:function(e,t,n){"use strict";var r=o(n(7388)),a=o(n(3048));function o(e){return e&&e.__esModule?e:{default:e}}var i={Google:r.default,Baidu:a.default};t.Z=i},8594:function(e,t,n){var r,a,o;o=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var a=e[r];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(r>0&&(a=a.replace(/^[\/]+/,"")),a=r<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var o=t.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=o():void 0===(a="function"==typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=a)},8262:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},1537:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.r(t),n.d(t,{default:function(){return _e}});var a=n(7294),o=n(2877),i=n(9983),l=n(7825),u=n(977),s=n(5444),c=(n(6752),n(2122)),f=n(3346),p=n(6410),d=n(3431),h=["to","language"],g=function(e){var t=e.to,n=e.language,a=r(e,h),o=(0,p.q)(),i=o.defaultLang,l=o.prefixDefault,u=o.locale,g=n||u;return(0,d.tZ)(s.Link,(0,c.Z)({},a,{to:(0,f.localizedPath)({defaultLang:i,prefixDefault:l,locale:g,path:t})}))};n(9499);var m=n(7260);function v(e,t,n){return function(e,t){return e===t}(t,e)||n.split("/")[1]===t?n:"/"+t+n}var y=function(e){e.children;var t=e.basePath,n=e.pageContext.locale,r=e.siteMetadata;return(0,u.tZ)(o.Ge.h3,{sx:{mb:2,mt:2,mr:[3,4]}},(0,u.tZ)(i.rU,{sx:{color:"text"},as:g,to:(0,s.withPrefix)(t)},(0,m.t)("title",r.localize,r.title,n)))},b=function(e){var t=e.pageContext.locale,n=e.siteMetadata,r=(0,m.t)("menuLinks",n.localize,n.menuLinks,t);return r?(0,u.tZ)(i.kC,{as:"nav"},r.map((function(e){var t={},n=!1,r=e.url;return e.external&&(t.target="_blank",t.rel="noopener noreferrer",n=!0),!1!==e.prefetch||e.external||(n=!0),(0,u.tZ)(i.OL,(0,c.Z)({as:n?i.OL:g,to:n?void 0:r,href:n?r:void 0,key:r},t),e.name)}))):null},x=n(4070),Z=n.n(x),w=function(e){var t=e.pageContext,n=(0,p.q)(),r=n.locale,a=n.config,o=n.defaultLang;return(0,u.tZ)(i.kC,null,(0,u.tZ)(i.Ph,{sx:{minWidth:"6.5rem"},value:r,onChange:function(e){var n=e.target.value,r=(0,s.withPrefix)((0,x.join)((n===o?"":"/"+n)+t.originalPath));(0,s.navigate)(r)}},a.map((function(e){return(0,u.tZ)("option",{key:e.code,value:e.code},e.localName)}))))},O=function(e){var t=e.title,n=e.pageType;return(0,u.tZ)("header",{sx:{px:[3,4],mb:4,maxWidth:"5xl",mx:"auto"}},(0,u.tZ)(o.Ge.div,{sx:{pt:3,pb:"detail"===n?2:3,borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:"muted"}},(0,u.tZ)(o.Ge.div,{sx:{display:"flex",alignItems:"baseline",flexWrap:"wrap",justifyContent:"space-between"}},(0,u.tZ)(i.kC,{sx:{alignItems:"baseline",flexWrap:"wrap",flexGrow:1}},(0,u.tZ)(y,e,t),(0,u.tZ)(b,e)),(0,u.tZ)(w,e))))},j=n(5414),k=["children"],P=function(e){var t=e.children,n=r(e,k),a=n.siteMetadata.webfontURL;return(0,d.tZ)(o.Ge.root,null,(0,d.tZ)(j.Z,null,(0,d.tZ)("link",{rel:"stylesheet",href:a})),(0,d.tZ)(O,n),(0,d.tZ)(i.xu,{css:(0,l.iv)({maxWidth:["full","5xl"],mx:"auto",px:[3,4],pb:4})},t))},A=function(){return(0,d.tZ)("footer",{css:(0,l.iv)({mt:4,pt:3,textAlign:"center"})},"© ",(new Date).getFullYear(),(0,d.tZ)(i.rU,{sx:{ml:4,mr:2},"data-test":"main-site-link",href:"https://www.buzzing.cc"},"Buzzing.cc"),(0,d.tZ)(i.rU,{sx:{mx:2,color:"textMuted"},"data-test":"privacy-link",href:"https://www.buzzing.cc/privacy"},"Privacy"),(0,d.tZ)(i.rU,{sx:{mx:2,color:"textMuted"},"data-test":"terms-link",href:"https://www.buzzing.cc/terms"},"Terms of Service")," ")},E=n(6479),C=n.n(E),S=n(8),_=n.n(S),z=n(9713),T=n.n(z),U=n(8262),M=n.n(U),N=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function I(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(M()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(N),o=null;null!==(o=a.exec(e));)if(o[0].trim())if(o[1]){var i=o[1].trim(),l=[i,""];i.indexOf("=")>-1&&(l=i.split("=")),t.attrs[l[0]]=l[1],a.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return t}var G=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,L=/^\s*$/,D=Object.create(null);function R(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(R,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var W={parse:function(e,t){t||(t={}),t.components||(t.components=D);var n,r=[],a=[],o=-1,i=!1;if(0!==e.indexOf("<")){var l=e.indexOf("<");r.push({type:"text",content:-1===l?e:e.substring(0,l)})}return e.replace(G,(function(l,u){if(i){if(l!=="</"+n.name+">")return;i=!1}var s,c="/"!==l.charAt(1),f=l.startsWith("\x3c!--"),p=u+l.length,d=e.charAt(p);if(f){var h=I(l);return o<0?(r.push(h),r):((s=a[o]).children.push(h),r)}if(c&&(o++,"tag"===(n=I(l)).type&&t.components[n.name]&&(n.type="component",i=!0),n.voidElement||i||!d||"<"===d||n.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===o&&r.push(n),(s=a[o-1])&&s.children.push(n),a[o]=n),(!c||n.voidElement)&&(o>-1&&(n.voidElement||n.name===l.slice(2,-1))&&(o--,n=-1===o?r:a[o]),!i&&"<"!==d&&d)){s=-1===o?r:a[o].children;var g=e.indexOf("<",p),m=e.slice(p,-1===g?void 0:g);L.test(m)&&(m=" "),(g>-1&&o+s.length>=0||" "!==m)&&s.push({type:"text",content:m})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+R("",t)}),"")}},B=n(1322);function $(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var K={};function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&K[t[0]]||("string"==typeof t[0]&&(K[t[0]]=new Date),$.apply(void 0,t))}var V=["format"],Y=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){T()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function Q(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function X(e){return Array.isArray(e)?e:[e]}function ee(e,t){if(!e)return"";var n="",r=X(e),o=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"==typeof e)n+="".concat(e);else if(a.isValidElement(e)){var i=Object.keys(e.props).length,l=o.indexOf(e.type)>-1,u=e.props.children;if(!u&&l&&0===i)n+="<".concat(e.type,"/>");else if(u||l&&0===i)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(l&&1===i&&"string"==typeof u)n+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var s=ee(u,t);n+="<".concat(r,">").concat(s,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)$("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===_()(e)){var c=e.format,f=C()(e,V),p=Object.keys(f);if(1===p.length){var d=c?"".concat(p[0],", ").concat(c):p[0];n+="{{".concat(d,"}}")}else $("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else $("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function te(e,t,n,r,o){if(""===t)return[];var i=r.transKeepBasicHtmlNodesFor||[],l=t&&new RegExp(i.join("|")).test(t);if(!e&&!l)return[t];var u={};!function e(t){X(t).forEach((function(t){"string"!=typeof t&&(J(t)?e(Q(t)):"object"!==_()(t)||a.isValidElement(t)||Object.assign(u,t))}))}(e);var s=n.services.interpolator.interpolate(t,F(F({},u),o),n.language),c=W.parse("<0>".concat(s,"</0>"));function f(e,t,n){var r=Q(e),o=d(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return a.isValidElement(e)}))}(r)&&0===o.length?r:o}function p(e,t,n,r,o){e.dummy&&(e.children=t),n.push(a.cloneElement(e,F(F({},e.props),{},{key:r}),o?void 0:t))}function d(t,n,o){var u=X(t);return X(n).reduce((function(t,n,s){var c,h,g,m=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var v=u[parseInt(n.name,10)];!v&&1===o.length&&o[0][n.name]&&(v=o[0][n.name]),v||(v={});var y=0!==Object.keys(n.attrs).length?(c={props:n.attrs},(g=F({},h=v)).props=Object.assign(c.props,h.props),g):v,b=a.isValidElement(y),x=b&&J(n,!0)&&!n.voidElement,Z=l&&"object"===_()(y)&&y.dummy&&!b,w="object"===_()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"==typeof y)t.push(y);else if(J(y)||x){p(y,f(y,n,o),t,s)}else if(Z){var O=d(u,n.children,o);t.push(a.cloneElement(y,F(F({},y.props),{},{key:s}),O))}else if(Number.isNaN(parseFloat(n.name))){if(w)p(y,f(y,n,o),t,s,n.voidElement);else if(r.transSupportBasicHtmlNodes&&i.indexOf(n.name)>-1)if(n.voidElement)t.push(a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var j=d(u,n.children,o);t.push(a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},j))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var k=d(u,n.children,o);t.push("<".concat(n.name,">").concat(k,"</").concat(n.name,">"))}}else if("object"!==_()(y)||b)1===n.children.length&&m?t.push(a.cloneElement(y,F(F({},y.props),{},{key:s}),m)):t.push(a.cloneElement(y,F(F({},y.props),{},{key:s})));else{var P=n.children[0]?m:null;P&&t.push(P)}}else if("text"===n.type){var A=r.transWrapTextNodes;A?t.push(a.createElement(A,{key:"".concat(n.name,"-").concat(s)},n.content)):t.push(n.content)}return t}),[])}return Q(d([{dummy:!0,children:e}],c,X(e||[]))[0])}function ne(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,i=e.tOptions,l=void 0===i?{}:i,u=e.values,s=e.defaults,c=e.components,f=e.ns,p=e.i18n,d=e.t,h=C()(e,Y),g=(0,a.useContext)(B.OO)||{},m=g.i18n,v=g.defaultNS,y=p||m||(0,B.nI)();if(!y)return H("You will need to pass in an i18next instance by using i18nextReactModule"),t;var b=d||y.t.bind(y)||function(e){return e},x=F(F({},(0,B.JP)()),y.options&&y.options.react),Z=f||b.ns||v||y.options&&y.options.defaultNS;Z="string"==typeof Z?[Z]:Z||["translation"];var w=s||ee(t,x)||x.transEmptyNodeValue||o,O=x.hashTransKey,j=o||(O?O(w):w),k=u?l.interpolation:{interpolation:F(F({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},P=F(F(F(F({},l),{},{count:n},u),k),{},{defaultValue:w,ns:Z}),A=te(c||t,j?b(j,P):w,y,x,P),E=void 0!==r?r:x.defaultTransParent;return E?a.createElement(E,h,A):A}var re=function(e){var t=e.pageContext,n=t.pageType,r=t.tag,a=t.basePath,l=t.currentPage,c=t.date,f=t.title,p=l;if("tag"===n)return(0,u.tZ)(o.Ge.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},(0,u.tZ)(i.rU,{sx:{color:"text"},as:g,to:(0,s.withPrefix)(a)},(0,u.tZ)(ne,null,"All posts")),(0,u.tZ)("span",{sx:{color:"textMuted"}}," / "),(0,u.tZ)("span",{sx:{color:"textMuted"}},(0,u.tZ)(ne,{ns:"translation-tag"},r)),l>1&&(0,u.tZ)("span",{sx:{color:"textMuted"}}," / "),l>1&&(0,u.tZ)("span",{sx:{color:"textMuted"}},(0,u.tZ)(ne,{page:l},"page ",{page:p})));var d="Latest",h=a;"issues"===n||"issue"===n?(d="Weekly Selection",h=Z().join(a,"issues")):"archives"!==n&&"archive"!==n||(d="Archive",h=Z().join(a,"archive"));var m=p;return(0,u.tZ)(o.Ge.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},l>1?(0,u.tZ)(i.rU,{sx:{color:"text"},as:g,to:(0,s.withPrefix)(h)},(0,u.tZ)(ne,null,d)):(0,u.tZ)(ne,null,d),(l>1||"issue"===n||"archive"===n)&&(0,u.tZ)("span",{sx:{color:"textMuted"}}," / "),(l>1||"issue"===n||"archive"===n)&&(0,u.tZ)("span",{sx:{color:"textMuted"}},"issue"===n?(0,u.tZ)(ne,{page:l},"Issue ",{issueNumber:m}):"archive"===n?(0,u.tZ)("span",null,f):(0,u.tZ)(ne,{page:l},"page ",{page:p})),"issue"===n?(0,u.tZ)("span",{sx:{color:"textMuted"}}," · "+c):null)};function ae(){return(0,d.tZ)(a.Fragment,null,(0,d.tZ)(ne,null,"See what's buzzing on"," ",(0,d.tZ)(i.rU,{href:"https://news.ycombinator.com/",target:"_blank",rel:"noopener noreferrer",sx:(0,l.iv)({lineHeight:2})},"Hacker News")," ","in your native language on"," ",(0,d.tZ)(i.rU,{as:g,to:"/"},"hn.buzzing.cc")))}var oe=function(e){var t=e.basePath,n=e.siteMetadata;return t=t||"/",(0,u.tZ)(i.kC,{"data-test":"bio",sx:{mb:4,alignItems:"center"}},(0,u.tZ)(i.rU,{sx:{minWidth:"56px",pr:2,pt:1},as:s.Link,to:(0,s.withPrefix)(t)},n.iconUrl?(0,u.tZ)(i.Ee,{src:n.iconUrl,alt:"logo",sx:{mb:0,borderRadius:"full",width:"48px",height:"48px"}}):(0,u.tZ)("div",{sx:{mb:0,width:"48px",minWidth:"48px",borderRadius:"full"},role:"presentation"})),(0,u.tZ)(o.Ge.div,null,(0,u.tZ)(ae,null)))},ie=n(1804),le=n.n(ie);function ue(e){var t=e.children,n=e.to,r=e.count;return(0,u.tZ)(i.rU,{sx:{bg:"gray.1",mr:3,mb:2,color:"textMuted",px:2,py:1,":hover":{bg:"gray.2"}},as:g,to:n},(0,u.tZ)(ne,{ns:"translation-tag"},t),r&&"("+r+")")}function se(){return(0,u.tZ)(o.Ge.h4,null,(0,u.tZ)(ne,null,"Tags"))}var ce=function(e){var t=e.basePath,n=e.group;return(0,u.tZ)(i.xu,{"data-test":"tags-container"},(0,u.tZ)(se,null),(0,u.tZ)(i.kC,{sx:{mb:3,flexWrap:"wrap"}},n.map((function(e,n){var r=e.fieldValue,a=e.totalCount;return(0,u.tZ)(ue,{key:"tag-list-"+n,count:a,to:(0,s.withPrefix)((0,x.join)(t,"/tags/"+le()(r)))},r)}))))};function fe(){return(0,u.tZ)(o.Ge.h4,null,(0,u.tZ)(ne,null,"Links"))}var pe=function(e){var t=e.links;return(0,u.tZ)(i.xu,{"data-test":"links-container"},(0,u.tZ)(fe,null),(0,u.tZ)(o.Ge.ul,null,t?t.map((function(e,t){var n={};return e.external&&(n.target="_blank",n.rel="noopener noreferrer"),(0,u.tZ)("li",{key:"links-"+t},(0,u.tZ)(i.rU,(0,c.Z)({},n,{href:e.url}),e.name))})):null))},de=["href","language"],he=function(e){var t=e.href,n=e.language,a=r(e,de),o=(0,p.q)(),l=o.defaultLang,u=o.locale,s=n||u;return(0,d.tZ)(i.rU,(0,c.Z)({},a,{href:v(l,s,t)}))},ge=function(e){var t=e.pageContext,n=(t.locale,t.basePath,(0,s.useStaticQuery)("3025052997").site.siteMetadata.subscriptions);return(0,u.tZ)(i.xu,{"data-test":"subscription-container"},(0,u.tZ)(o.Ge.h4,{"data-test":"subscription-title"},(0,u.tZ)(ne,null,"Subscription")),(0,u.tZ)(o.Ge.p,{sx:{color:"textMuted",fontSize:1}},(0,u.tZ)(ne,null,"Subscribe to us in the following ways:")),(0,u.tZ)(o.Ge.ul,null,n?n.map((function(e,t){var n={};return e.external?(n.target="_blank",n.rel="noopener noreferrer",(0,u.tZ)("li",{key:"links-"+t},(0,u.tZ)(i.rU,(0,c.Z)({},n,{href:e.url}),e.name))):(0,u.tZ)("li",{key:"links-"+t},(0,u.tZ)(i.rU,(0,c.Z)({as:he},n,{href:e.url}),e.name))})):null))},me=function(){return(0,u.tZ)(i.xu,{"data-test":"subscription-container"},(0,u.tZ)(o.Ge.h4,{"data-test":"subscription-title"},(0,u.tZ)(ne,null,"Who is behind this?")),(0,u.tZ)(o.Ge.ul,null,(0,u.tZ)("li",null,(0,u.tZ)(i.rU,{href:"https://twitter.com/theowenyoung"},"Owen Young"))))},ve=n(3911),ye=function(){return(0,u.tZ)(i.xu,{"data-test":"ad-container"},(0,u.tZ)(ve.Z.Google,{client:"ca-pub-5211209136530011",slot:"9469977903",style:{display:"block"},format:"auto",responsive:"true"}))},be=function(){return(0,u.tZ)(i.xu,{"data-test":"subscription-container"},(0,u.tZ)(o.Ge.h4,{"data-test":"subscription-title"},(0,u.tZ)(ne,null,"Archive")),(0,u.tZ)(o.Ge.ul,null,(0,u.tZ)("li",null,(0,u.tZ)(i.rU,{href:"/archive/"},"Archive"))))},xe=function(e){var t=e.data,n=e.pageContext,r=e.siteMetadata,a=n.basePath,i=t.tagsGroup.group,l=r.social;return(0,u.tZ)(o.Ge.div,{"data-test":"aside",as:"aside",sx:{height:[null,null,"full"]}},(0,u.tZ)(o.Ge.div,{sx:{top:[null,null,4],position:[null,null,"sticky"],overflowY:[null,null,"auto"],height:[null,null,"calc(100vh - 32px)"],overscrollBehavior:[null,null,"contain"],px:[null,null,4]}},(0,u.tZ)(oe,{siteMetadata:r,basePath:a}),(0,u.tZ)(ge,{pageContext:n}),(0,u.tZ)(be,{pageContext:n}),(0,u.tZ)(ce,{basePath:a,group:i}),(0,u.tZ)(pe,{siteMetadata:r,links:l}),(0,u.tZ)(me,{pageContext:n}),(0,u.tZ)(ye,null)))},Ze=n(6156),we=n(8594),Oe=n.n(we);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){(0,Ze.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(e){var t=e.description,n=e.lang,r=e.meta,a=e.title,o=e.authorImage,i=e.imageSource,l=e.imageAlt,u=e.location,c=e.pageType,f=e.item,h=e.siteMetadata,g=(0,p.q)().locale,v=(0,m.t)("description",h.localize,h.description,g),y=t||v,b=h.telegram,x=(0,m.t)("author",h.localize,h.author,g),Z=h.siteUrl,w=(0,m.t)("keywords",h.localize,h.keywords,g),O=o||h.iconUrl,k=function(e){return e.match("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")?e:Oe()(Z,(0,s.withPrefix)(e))},P=i?k(i):h.defaultSocialImageUrl,A=l||y,E=(0,m.t)("title",h.localize,h.title,g),C=a+" - "+E,S={"@type":"Person",name:x},_={"@type":"ImageObject",url:O?k(O):null,"@id":Oe()(Z,(0,s.withPrefix)("#logo")),caption:E+" Logo"},z=[{"@context":"http://schema.org","@type":"WebSite","@id":Oe()(Z,(0,s.withPrefix)("#website")),url:(0,s.withPrefix)(Z),name:E,image:_}];if("detail"===c){var T=Oe()(Z,u.pathname),U=new Date(f.date);z.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":T,name:a,image:P}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:T,name:a,headline:a,image:{"@type":"ImageObject",url:P},author:S,publisher:ke(ke({},S),{},{"@type":"Organization",logo:_}),datePublished:U,description:y})}return(0,d.tZ)(j.Z,{htmlAttributes:{lang:n||g},title:C,meta:[{name:"description",content:y},{name:"keywords",content:w.join(",")},{property:"og:title",content:a},{property:"og:description",content:y},{property:"og:type",content:"website"},{name:"twitter:creator",content:x},{name:"twitter:title",content:a},{name:"twitter:description",content:y}].concat(P?[{name:"og:image",content:P},{name:"og:image:alt",content:A},{name:"twitter:image",content:P},{name:"twitter:image:alt",content:A},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(b?[{name:"telegram:channel",content:b}]:[]).concat(r)},(0,d.tZ)("script",{type:"application/ld+json"},JSON.stringify(z)))}Pe.defaultProps={meta:[]};var Ae=Pe,Ee=n(7031),Ce=function(e){var t=e.pageContext,n=e.siteMetadata,r=e.image,a=t.pageType,o=t.tag,i=t.currentPage,l=t.date,u=i,s=(0,m.t)("description",n.localize,n.description,t.locale),c="",f=(0,m.t)("title",n.localize,n.title,t.locale);if("tag"===a){var p=Ee.Z.t("translation-tag__::::__"+o);s=p,c=Ee.Z.t("See all posts about {{tag}} at {{siteTitle}}",{tag:p,siteTitle:f})}else if("issues"===a)s=Ee.Z.t("Weekly Selection"),c=Ee.Z.t("{{siteTitle}} selects the most popular content for you each week",{siteTitle:f});else if("issue"===a){var h=" · "+l;s=Ee.Z.t("Weekly Selection")+"-"+Ee.Z.t("Issue {{issueNumber}}","Issue "+u,{issueNumber:u})+h+" - "+f,c=Ee.Z.t("Click to view Issue {{issueNumber}} of {{siteTitle}}",{siteTitle:f,issueNumber:u})}return(0,d.tZ)(Ae,{title:s,description:c,imageSource:"home"===a?null:r,siteMetadata:n})},Se=function(e){var t=e.items,n=e.basePath,r={};t.forEach((function(e){r[e.year]||(r[e.year]=[]),r[e.year].push(e)}));var a=Object.keys(r).sort((function(e,t){return t-e}));return(0,u.tZ)("div",null,a.map((function(e){var t=r[e];return(0,u.tZ)("div",{sx:{pb:3},key:e},(0,u.tZ)(o.Ge.h4,null,e),t.map((function(e,t){return(0,u.tZ)(o.Ge.li,{sx:{fontSize:2},key:"archive-"+t},(0,u.tZ)(i.rU,{as:g,to:(0,s.withPrefix)(Z().join(n,"archive/"+e.year+"/"+e.month))},e.year,"-",e.month))})))})))},_e=function(e){var t=e.location,n=e.data,r=e.pageContext,a=r.basePath,o=r.pageType,l=r.items,s=n.site.siteMetadata,c=s.title,f=s.menuLinks;return(0,u.tZ)(P,{basePath:a,location:t,menuLinks:f,title:c,pageType:o,pageContext:r,siteMetadata:s},(0,u.tZ)(Ce,{pageContext:r,siteMetadata:s}),(0,u.tZ)(re,{pageContext:r}),(0,u.tZ)(i.rj,{gap:[null,null,3,4],columns:[1,1,"2fr 1fr"]},(0,u.tZ)("main",{sx:{minWidth:0}},(0,u.tZ)(Se,{items:l,basePath:a})),(0,u.tZ)(xe,{location:t,data:n,pageContext:r,siteMetadata:s})),(0,u.tZ)(A,null))}},7260:function(e,t){var n=function(e,t,n,r){void 0===r&&(r="zh");var a=n;if(t&&Array.isArray(t))for(var o=0;o<t.length;o++){var i=t[o];if(r===i.locale&&i[e])return a=i[e]}return a};t.t=n},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},2663:function(e){e.exports=function(e,t,n,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++a]);++a<o;)n=t(n,e[a],a,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),a=n(9607),o=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?a(e):o(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),a=n(9932),o=n(4332),i=n(3448),l=r?r.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(i(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),a=n(3816),o=n(8748),i=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(a(t).replace(i,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(u){}var a=i.call(e);return r&&(t?e[l]=n:delete e[l]),a}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+a+"]",i="\\d+",l="[\\u2700-\\u27bf]",u="["+n+"]",s="[^\\ud800-\\udfff"+a+i+t+n+r+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",d="(?:"+u+"|"+s+")",h="(?:"+p+"|"+s+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",m="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,f].join("|")+")"+y+v+")*"),x="(?:"+[l,c,f].join("|")+")"+b,Z=RegExp([p+"?"+u+"+"+g+"(?="+[o,p,"$"].join("|")+")",h+"+"+m+"(?="+[o,p+d,"$"].join("|")+")",p+"?"+d+"+"+g,p+"+"+m,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,x].join("|"),"g");e.exports=function(e){return e.match(Z)||[]}},3816:function(e,t,n){var r=n(9389),a=n(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(o,r).replace(i,"")}},4332:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),a=n(7005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),a=n(3157),o=n(9833),i=n(2757);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?a(e)?i(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-buzzing-src-templates-archives-query-js-c2a53dfea51f90ca4a4d.js.map