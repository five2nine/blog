(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return S});n(48),n(156),n(157),n(170),n(171),n(82),n(176);var r=n(7),o=n.n(r),a=n(0),i=n.n(a),c=n(147),s=n(4),u=n.n(s),l=n(158),f=n.n(l),d=n(202),m=n(148),p=n(177),h=n(151),y=n(166),g=n.n(y),b=(n(208),n(155)),v=n(149),w=n.n(v),E=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.querySelectorAll(".blog-post-content a"),t=Array.isArray(e),n=0;for(e=t?e:e[Symbol.iterator]();;){var r;if(t){if(n>=e.length)break;r=e[n++]}else{if((n=e.next()).done)break;r=n.value}r.target="_blank"}},n.render=function(){var e=this.props,t=e.data,n=e.location,r=e.pageContext,o=t.markdownRemark,a=o.id,s=o.frontmatter,u=o.html,l=o.excerpt,y=t.site.siteMetadata.title,v=s.title,E=s.tags,S=r.previous,k=r.next;s.keywords||(s.keywords=[]);var O=s.tags.concat(s.keywords).toString(),_=w.a.disqusShortname,C={identifier:a,title:y},j=E.map(function(e,t){return i.a.createElement(c.Link,{to:"/tags/"+g.a.kebabCase(e),key:"tag-"+t},"#",e)});return i.a.createElement(b.a,{location:n},i.a.createElement(f.a,{title:""+v,meta:[{name:"keywords",content:O},{name:"og:title",content:v},{name:"og:description",content:l}]}),i.a.createElement("div",{className:"blog-post-container"},i.a.createElement("div",{className:"blog-post"},i.a.createElement("div",{className:"post-header"},i.a.createElement("h1",{className:"title"},""+v),i.a.createElement("div",{className:"date"},i.a.createElement(m.a,{icon:p.a,fixedWidth:!0}),s.date),i.a.createElement("div",{className:"tags"},j)),i.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:u}})),i.a.createElement("div",{className:"blog-post-nav"},S&&i.a.createElement("div",{className:"prev"},i.a.createElement("div",{className:"nav-wrap"},i.a.createElement("div",{className:"angle"},i.a.createElement(m.a,{icon:h.a,fixedWidth:!0})),i.a.createElement(c.Link,{to:S.fields.slug,rel:"prev"},i.a.createElement("div",null,i.a.createElement("p",null,"Previous Post"),i.a.createElement("span",null,S.frontmatter.title))))),k&&i.a.createElement("div",{className:"next"},i.a.createElement("div",{className:"nav-wrap"},i.a.createElement(c.Link,{to:k.fields.slug,rel:"next"},i.a.createElement("div",null,i.a.createElement("p",null,"Next Post"),i.a.createElement("span",null,k.frontmatter.title))),i.a.createElement("div",{className:"angle"},i.a.createElement(m.a,{icon:h.b,fixedWidth:!0})))))),w.a.disqusShortname?i.a.createElement("div",{className:"comments"},i.a.createElement(d.DiscussionEmbed,{shortname:_,config:C})):null)},t}(i.a.Component);E.propTypes={data:u.a.object.isRequired,location:u.a.object.isRequired,pageContext:u.a.object.isRequired},t.default=E;var S="1815311691"},146:function(e,t,n){var r;e.exports=(r=n(150))&&r.default||r},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(145),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(146),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var f=n(34);n.d(t,"parsePath",function(){return f.a});var d=o.a.createContext({}),m=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,n){var r={title:"100000",author:"Won Sunggyu",description:"BLOG",siteUrl:"https://five2nine.github.io",titleLogo:function(){return n(154)},titleLogoShow:!0,bio:"Mechanical Engineering",bioShow:!0,googleAnalyticsTrackingId:"UA-103592668-x",disqusShortname:"five2nine-github-io"};e.exports=r},150:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(50),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},152:function(e){e.exports={data:{site:{siteMetadata:{title:"100000"}}}}},153:function(e,t,n){},154:function(e,t,n){e.exports=n.p+"static/profile-cc1fedf3e6d8c8b3fd669fc422bbd485.png"},155:function(e,t,n){"use strict";n(33);var r=n(152),o=n(0),a=n.n(o),i=n(4),c=n.n(i),s=n(158),u=n.n(s),l=n(147),f=n(148),d=n(151),m=(n(153),n(7)),p=n.n(m),h=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){return a.a.createElement("footer",{id:"footer"},a.a.createElement("div",{className:"copyright"},a.a.createElement("span",null,"© ",a.a.createElement("a",{href:"mailto:fabre@pusan.ac.kr"},"Won Sunggyu")," 2018. All rights reserved")),a.a.createElement("div",{className:"submenu"}))},t}(o.Component),y=n(149),g=n.n(y),b=(n(163),n(27),n(164),n(48),n(156),n(157),n(165)),v=new(n.n(b).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Noto Sans KR"]}),w=[{name:"Nanum Gothic",bold:[400,700]},{name:"Noto Sans KR"}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),E=(v.rhythm,v.scale,function(e){var t=e.children,n=(e.data,e.location);return a.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){var r;r=n?n.href:g.a.siteUrl;var o=function(e,t){var n={};return n=e?{display:"inline-block"}:{display:"none"},t||(n=Object.assign({},n,{width:"1.5rem",height:"1.5rem",marginRight:"0.1rem"})),n}(g.a.titleLogoShow,g.a.bioShow),i=g.a.bioShow?{}:{display:"none"};return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:g.a.description},{name:"og:type",content:"website"},{name:"og:title",content:g.a.title},{name:"og:description",content:g.a.description},{name:"og:image",content:g.a.titleLogo()},{name:"og:url",content:r}]},a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+w,rel:"stylesheet"}),a.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+g.a.googleAnalyticsTrackingId}),a.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '"+g.a.googleAnalyticsTrackingId+"');\n              ")),a.a.createElement("div",{id:"wrap"},a.a.createElement("header",{id:"header"},a.a.createElement("div",{className:"title"},a.a.createElement("div",{className:"title-wrap"},a.a.createElement(l.Link,{to:"/"},a.a.createElement("div",{className:"logo-img",style:o},a.a.createElement("img",{src:g.a.titleLogo(),alt:"logo"})),a.a.createElement("div",null,a.a.createElement("h1",null,g.a.title),a.a.createElement("p",{className:"bio",style:i},g.a.bio))))),a.a.createElement("div",{className:"menu"},a.a.createElement("div",{className:"home"},a.a.createElement(l.Link,{to:"/"},a.a.createElement(f.a,{icon:d.c,fixedWidth:!0,transform:"down-1"}),a.a.createElement("span",null,"Home"))),a.a.createElement("div",{className:"tags"},a.a.createElement(l.Link,{to:"/tags"},a.a.createElement(f.a,{icon:d.f,fixedWidth:!0,transform:"down-1"}),a.a.createElement("span",null,"Tags"))),a.a.createElement("div",{className:"search"},a.a.createElement(l.Link,{to:"/search"},a.a.createElement(f.a,{icon:d.d,fixedWidth:!0,transform:"down-1"}),a.a.createElement("span",null,"Search"))))),a.a.createElement("article",{id:"article"},t)),a.a.createElement(h,null))},data:r})});E.propTypes={children:c.a.node.isRequired,location:c.a.object.isRequired};t.a=E},159:function(e,t,n){var r=n(5),o=n(19),a=n(37),i=n(160),c=n(25).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=a?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:i.f(e)})}},160:function(e,t,n){t.f=n(3)},161:function(e,t,n){var r=n(81),o=n(52).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},170:function(e,t,n){n(159)("asyncIterator")},171:function(e,t,n){"use strict";var r=n(5),o=n(26),a=n(16),i=n(6),c=n(18),s=n(172).KEY,u=n(17),l=n(51),f=n(39),d=n(36),m=n(3),p=n(160),h=n(159),y=n(173),g=n(78),b=n(10),v=n(11),w=n(35),E=n(76),S=n(49),k=n(53),O=n(174),_=n(175),C=n(25),j=n(38),N=_.f,q=C.f,P=O.f,I=r.Symbol,x=r.JSON,D=x&&x.stringify,T=m("_hidden"),M=m("toPrimitive"),L={}.propertyIsEnumerable,U=l("symbol-registry"),R=l("symbols"),W=l("op-symbols"),Q=Object.prototype,F="function"==typeof I,A=r.QObject,G=!A||!A.prototype||!A.prototype.findChild,B=a&&u(function(){return 7!=k(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=N(Q,t);r&&delete Q[t],q(e,t,n),r&&e!==Q&&q(Q,t,r)}:q,J=function(e){var t=R[e]=k(I.prototype);return t._k=e,t},K=F&&"symbol"==typeof I.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof I},H=function(e,t,n){return e===Q&&H(W,t,n),b(e),t=E(t,!0),b(n),o(R,t)?(n.enumerable?(o(e,T)&&e[T][t]&&(e[T][t]=!1),n=k(n,{enumerable:S(0,!1)})):(o(e,T)||q(e,T,S(1,{})),e[T][t]=!0),B(e,t,n)):q(e,t,n)},z=function(e,t){b(e);for(var n,r=y(t=w(t)),o=0,a=r.length;a>o;)H(e,n=r[o++],t[n]);return e},Y=function(e){var t=L.call(this,e=E(e,!0));return!(this===Q&&o(R,e)&&!o(W,e))&&(!(t||!o(this,e)||!o(R,e)||o(this,T)&&this[T][e])||t)},V=function(e,t){if(e=w(e),t=E(t,!0),e!==Q||!o(R,t)||o(W,t)){var n=N(e,t);return!n||!o(R,t)||o(e,T)&&e[T][t]||(n.enumerable=!0),n}},X=function(e){for(var t,n=P(w(e)),r=[],a=0;n.length>a;)o(R,t=n[a++])||t==T||t==s||r.push(t);return r},Z=function(e){for(var t,n=e===Q,r=P(n?W:w(e)),a=[],i=0;r.length>i;)!o(R,t=r[i++])||n&&!o(Q,t)||a.push(R[t]);return a};F||(c((I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===Q&&t.call(W,n),o(this,T)&&o(this[T],e)&&(this[T][e]=!1),B(this,e,S(1,n))};return a&&G&&B(Q,e,{configurable:!0,set:t}),J(e)}).prototype,"toString",function(){return this._k}),_.f=V,C.f=H,n(161).f=O.f=X,n(75).f=Y,n(77).f=Z,a&&!n(37)&&c(Q,"propertyIsEnumerable",Y,!0),p.f=function(e){return J(m(e))}),i(i.G+i.W+i.F*!F,{Symbol:I});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)m($[ee++]);for(var te=j(m.store),ne=0;te.length>ne;)h(te[ne++]);i(i.S+i.F*!F,"Symbol",{for:function(e){return o(U,e+="")?U[e]:U[e]=I(e)},keyFor:function(e){if(!K(e))throw TypeError(e+" is not a symbol!");for(var t in U)if(U[t]===e)return t},useSetter:function(){G=!0},useSimple:function(){G=!1}}),i(i.S+i.F*!F,"Object",{create:function(e,t){return void 0===t?k(e):z(k(e),t)},defineProperty:H,defineProperties:z,getOwnPropertyDescriptor:V,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),x&&i(i.S+i.F*(!F||u(function(){var e=I();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(v(t)||void 0!==e)&&!K(e))return g(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!K(t))return t}),r[1]=t,D.apply(x,r)}}),I.prototype[M]||n(12)(I.prototype,M,I.prototype.valueOf),f(I,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},172:function(e,t,n){var r=n(36)("meta"),o=n(11),a=n(26),i=n(25).f,c=0,s=Object.isExtensible||function(){return!0},u=!n(17)(function(){return s(Object.preventExtensions({}))}),l=function(e){i(e,r,{value:{i:"O"+ ++c,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,r)){if(!s(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!a(e,r)){if(!s(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return u&&f.NEED&&s(e)&&!a(e,r)&&l(e),e}}},173:function(e,t,n){var r=n(38),o=n(77),a=n(75);e.exports=function(e){var t=r(e),n=o.f;if(n)for(var i,c=n(e),s=a.f,u=0;c.length>u;)s.call(e,i=c[u++])&&t.push(i);return t}},174:function(e,t,n){var r=n(35),o=n(161).f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==a.call(e)?function(e){try{return o(e)}catch(e){return i.slice()}}(e):o(r(e))}},175:function(e,t,n){var r=n(75),o=n(49),a=n(35),i=n(76),c=n(26),s=n(80),u=Object.getOwnPropertyDescriptor;t.f=n(16)?u:function(e,t){if(e=a(e),t=i(t,!0),s)try{return u(e,t)}catch(e){}if(c(e,t))return o(!r.f.call(e,t),e[t])}},176:function(e,t,n){var r=n(6);r(r.S,"Array",{isArray:n(78)})},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,a=arguments,i=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,a)},t),i&&e.apply(o,a)}}},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(203),o=n(204),a=n(205);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(187);var s=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(187);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},208:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-js-5b1bd43635c1b9ddbe85.js.map