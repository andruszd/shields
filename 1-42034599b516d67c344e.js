(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{186:function(e,t,n){"use strict";n.d(t,"j",function(){return l}),n.d(t,"d",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"e",function(){return m}),n.d(t,"f",function(){return d}),n.d(t,"a",function(){return f}),n.d(t,"h",function(){return g}),n.d(t,"g",function(){return h}),n.d(t,"c",function(){return b}),n.d(t,"i",function(){return v});n(27),n(23),n(16),n(47),n(18),n(203);var a=n(0),r=n.n(a),i=n(185);function o(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return o=function(){return e},e}var l=Object.freeze({autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}),c=" ",s=Object(i.a)(o()),u=i.c.div.withConfig({displayName:"common__BaseFont",componentId:"v13icv-0"})(["font-family:Lekton,sans-serif;color:#534;"]),m=i.c.h2.withConfig({displayName:"common__H2",componentId:"v13icv-1"})(["font-style:italic;margin-top:12mm;font-variant:small-caps;::before{content:'☙ ';}::after{content:' ❧';}"]),d=i.c.h3.withConfig({displayName:"common__H3",componentId:"v13icv-2"})(["font-style:italic;"]),p=i.c.span.withConfig({displayName:"common__BadgeWrapper",componentId:"v13icv-3"})(["padding:2px;height:",";vertical-align:middle;display:",";",";"],function(e){return e.height},function(e){return e.display},function(e){return e.clickable&&Object(i.b)(["cursor:pointer;"])});function f(e){var t=e.src,n=e.alt,a=void 0===n?"":n,i=e.display,o=void 0===i?"inline":i,l=e.height,s=void 0===l?"20px":l,u=e.clickable,m=void 0!==u&&u,d=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["src","alt","display","height","clickable"]);return r.a.createElement(p,{clickable:m,display:o,height:s},t?r.a.createElement("img",Object.assign({alt:a,src:t},d)):c)}var g=i.c.input.withConfig({displayName:"common__StyledInput",componentId:"v13icv-4"})(["height:15px;border:solid #b9a;border-width:0 0 1px 0;padding:0;text-align:center;color:#534;:focus{outline:0;}"]),h=Object(i.c)(g).withConfig({displayName:"common__InlineInput",componentId:"v13icv-5"})(["width:70px;margin-left:5px;margin-right:5px;"]),b=Object(i.c)(g).withConfig({displayName:"common__BlockInput",componentId:"v13icv-6"})(["width:40%;background-color:transparent;"]),v=i.c.hr.withConfig({displayName:"common__VerticalSpace",componentId:"v13icv-7"})(["border:0;display:block;height:3mm;"])},187:function(e,t,n){"use strict";n(92),n(7),n(18);var a=n(262).URL,r=n(226),i=n(206);function o(e){var t=e.baseUrl,n=void 0===t?"":t,a=e.path,i=e.queryParams,o=e.style,l=e.format,c=void 0===l?"svg":l,s=e.longCache,u=void 0!==s&&s,m=c.length?"."+c:"",d=r.stringify(Object.assign({cacheSeconds:u?"2592000":void 0,style:o},i));return""+n+a+m+(d?"?"+d:"")}function l(e){return encodeURIComponent(e.replace(/-/g,"--").replace(/_/g,"__"))}e.exports={badgeUrlFromPath:o,badgeUrlFromPattern:function(e){var t=e.baseUrl,n=void 0===t?"":t,a=e.pattern,r=e.namedParams,l=e.queryParams,c=e.style,s=e.format,u=void 0===s?"svg":s,m=e.longCache,d=void 0!==m&&m;return o({baseUrl:n,path:i.compile(a,{strict:!0,sensitive:!0})(r),queryParams:l,style:c,format:u,longCache:d})},encodeField:l,staticBadgeUrl:function(e){var t=e.baseUrl,n=void 0===t?"":t,a=e.label,i=e.message,o=e.color,c=void 0===o?"lightgray":o,s=e.style,u=e.namedLogo,m=e.format,d=void 0===m?"svg":m,p=[a,i,c].map(l).join("-"),f=r.stringify({style:s,logo:u});return n+"/badge/"+p+"."+d+(f?"?"+f:"")},queryStringStaticBadgeUrl:function(e){var t=e.baseUrl,n=void 0===t?"":t,a=e.label,i=e.message,o=e.color,l=e.labelColor,c=e.style,s=e.namedLogo,u=e.logoColor,m=e.logoWidth,d=e.logoPosition,p=e.format;return n+"/static/v1."+(void 0===p?"svg":p)+"?"+r.stringify({label:a,message:i,color:o,labelColor:l,style:c,logo:s,logoColor:u,logoWidth:m,logoPosition:d})},dynamicBadgeUrl:function(e){var t=e.baseUrl,n=e.datatype,a=e.label,i=e.dataUrl,o=e.query,l=e.prefix,c=e.suffix,s=e.color,u=e.style,m=e.format,d=void 0===m?"svg":m,p={label:a,url:i,query:o,style:u};return s&&(p.color=s),l&&(p.prefix=l),c&&(p.suffix=c),t+"/badge/dynamic/"+n+"."+d+"?"+r.stringify(p)},rasterRedirectUrl:function(e,t){var n=e.rasterUrl,r=new a(t,"https://bogus.test"),i=r.pathname,o=r.search,l=new a(i,n);return l.search=o,l}}},207:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var a=n(0),r=n.n(a),i=n(275),o=n.n(i),l=n(185),c=l.c.span.withConfig({displayName:"snippet__CodeContainer",componentId:"sc-1wzkqq5-0"})(["position:relative;vertical-align:middle;display:inline-block;",";"],function(e){return e.truncate&&Object(l.b)(["max-width:40%;overflow:hidden;text-overflow:ellipsis;"])}),s=l.c.code.withConfig({displayName:"snippet__StyledCode",componentId:"sc-1wzkqq5-1"})(["line-height:1.2em;padding:0.1em 0.3em;border-radius:4px;background:#eef;font-family:Lekton;font-size:",";white-space:nowrap;"],function(e){return e.fontSize});function u(e){var t=e.snippet,n=e.truncate,a=void 0!==n&&n,i=e.fontSize;return r.a.createElement(c,{truncate:a},r.a.createElement(o.a,null,r.a.createElement(s,{fontSize:i},t)))}},215:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={}.GATSBY_BASE_URL||""},216:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),i=n(246),o=n(251),l=n.n(o),c="We serve fast and scalable informational images as badges\nfor GitHub, Travis CI, Jenkins, WordPress and many more services. Use them to\ntrack the state of your projects, or for promotional purposes.";function s(){return r.a.createElement(i.Helmet,null,r.a.createElement("title",null,"Shields.io: Quality metadata badges for open source projects"),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{content:"width=device-width,initial-scale=1",name:"viewport"}),r.a.createElement("meta",{content:c,name:"description"}),r.a.createElement("link",{href:l.a,rel:"icon",type:"image/png"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Lekton",rel:"stylesheet"}))}},219:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(44),r=n(0),i=n.n(r),o=n(185),l=n(186),c=function(e){return i.a.createElement("svg",e,i.a.createElement("rect",{rx:"8",x:"140",width:"55",height:"58"}),i.a.createElement("g",{stroke:"#000",strokeWidth:"8"},i.a.createElement("path",{d:"M135.5 54a8 8 0 0 0 8.5 -8.5"}),i.a.createElement("rect",{x:"4",y:"4",rx:"8",width:"190",height:"50",fill:"none"})),i.a.createElement("path",{d:"m23.906 33.641c.953-.083 1.906-.167 2.859-.25.108 2.099 1.511 4.139 3.578 4.722 2.438.895 5.357.799 7.559-.658 1.49-1.129 1.861-3.674.324-4.925-1.557-1.322-3.685-1.504-5.576-2.057-2.343-.565-4.912-1.133-6.611-2.979-1.805-2.088-1.627-5.485.292-7.443 2.041-2.113 5.222-2.55 8.02-2.274 2.46.244 5.058 1.343 6.252 3.635.426.908 1.095 2.241.656 3.108-.888.173-1.81.148-2.715.245-.077-2.084-1.727-4.073-3.863-4.234-1.902-.317-4.02-.252-5.691.802-1.398.989-1.849 3.363-.381 4.494 1.281 1.01 2.962 1.199 4.482 1.642 2.66.627 5.602 1.118 7.596 3.158 2 2.188 1.893 5.84-.088 8.01-2.01 2.32-5.304 2.972-8.237 2.713-2.585-.147-5.319-1.024-6.916-3.184-.987-1.288-1.517-2.905-1.542-4.523"}),i.a.createElement("path",{d:"m45.953 41c0-7.635 0-15.271 0-22.906.938 0 1.875 0 2.813 0 0 2.74 0 5.479 0 8.219 1.391-1.721 3.69-2.523 5.86-2.236 1.975.154 4.03 1.371 4.513 3.402.504 1.973.278 4.02.33 6.04 0 2.495 0 4.989 0 7.484-.938 0-1.875 0-2.813 0-.009-3.675.018-7.351-.014-11.03-.026-1.342-.627-2.835-2-3.282-2.187-.802-5.077.393-5.609 2.773-.417 1.764-.216 3.586-.264 5.381 0 2.051 0 4.102 0 6.153-.938 0-1.875 0-2.813 0"}),i.a.createElement("path",{d:"m63.781 21.328v-3.234h2.813v3.234zm0 19.672v-16.594h2.813v16.594z"}),i.a.createElement("path",{d:"m82.25 35.656c.969.12 1.938.24 2.906.359-.702 3.464-4.348 5.767-7.781 5.386-3.235-.066-6.43-2.328-7.06-5.598-.843-3.307-.404-7.285 2.101-9.784 3.082-3 8.699-2.618 11.235.892 1.374 1.85 1.676 4.267 1.578 6.51-4.125 0-8.25 0-12.375 0-.142 2.889 2.267 6 5.346 5.658 1.881-.162 3.613-1.566 4.045-3.423m-9.234-4.547c3.089 0 6.177 0 9.266 0 .129-2.774-2.616-5.422-5.419-4.713-2.174.427-3.912 2.474-3.846 4.713"}),i.a.createElement("path",{d:"m88.64 41v-22.906h2.813v22.906z"}),i.a.createElement("path",{d:"m106.59 41c0-.698 0-1.396 0-2.094-1.412 2.442-4.776 3.067-7.233 1.949-2.378-1.02-3.971-3.403-4.345-5.924-.507-2.761-.123-5.768 1.389-8.167 1.863-2.705 5.968-3.642 8.711-1.741.422.228 1.028 1.144 1.294 1.018-.006-2.649-.0001-5.298-.003-7.948.932 0 1.865 0 2.797 0 0 7.635 0 15.271 0 22.906-.87 0-1.74 0-2.61 0m-8.89-8.281c-.075 2.246.637 4.861 2.79 5.952 2 1.023 4.682-.047 5.488-2.134.897-1.996.746-4.278.388-6.382-.425-1.95-2.046-3.804-4.158-3.805-1.903-.065-3.633 1.363-4.099 3.181-.327 1.028-.394 2.116-.408 3.188"}),i.a.createElement("path",{d:"m112.52 36.05c.927-.146 1.854-.292 2.781-.438.126 1.69 1.513 3.244 3.239 3.365 1.398.212 3.01.12 4.12-.851.807-.749 1.1-2.243.159-3.01-.908-.723-2.115-.812-3.182-1.172-1.797-.485-3.713-.848-5.243-1.97-1.83-1.551-1.868-4.679-.099-6.293 1.577-1.507 3.918-1.784 6-1.594 1.685.176 3.54.749 4.535 2.217.464.715.708 1.549.844 2.384-.917.125-1.833.25-2.75.375-.121-1.569-1.653-2.762-3.19-2.695-1.246-.082-2.702.012-3.608.982-.624.724-.543 1.971.314 2.481.998.706 2.269.757 3.389 1.173 1.754.512 3.647.848 5.141 1.965 1.686 1.476 1.728 4.244.396 5.966-1.298 1.788-3.597 2.417-5.709 2.448-1.466-.007-2.984-.214-4.299-.893-1.599-.909-2.585-2.655-2.84-4.444"}),i.a.createElement("g",{fill:"#fff"},i.a.createElement("path",{d:"m151.11 41v-22.906h3.03v22.906z"}),i.a.createElement("path",{d:"m158.55 29.844c-.277-4.765 2.335-9.977 7.05-11.551 4.902-1.757 11.226.197 13.477 5.098 2.266 4.706 1.89 10.92-1.767 14.833-4.554 4.948-13.81 3.976-17.08-1.954-1.111-1.946-1.679-4.188-1.68-6.426m3.125.047c-.377 4.273 2.892 8.844 7.375 8.951 3.791.221 7.557-2.653 7.997-6.497.794-3.731.139-8.292-3.107-10.696-3.788-2.814-10.05-1.104-11.591 3.444-.54 1.539-.642 3.181-.675 4.798"})))};c.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"198",height:"58"};var s=o.c.p.withConfig({displayName:"header__Highlights",componentId:"sc-1l0ubx-0"})(["font-style:italic;"]);function u(){return i.a.createElement("section",null,i.a.createElement(a.Link,{to:"/"},i.a.createElement(c,null)),i.a.createElement(l.i,null),i.a.createElement(s,null,"Pixel-perfect   Retina-ready   Fast   Consistent   Hackable   No tracking"))}},229:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return l});n(28),n(228),n(124),n(35);var a=n(206),r=n.n(a),i=/^[A-za-z0-9-]+$/;function o(e){var t=e.split("|");return t.some(function(e){return!e.match(i)})?void 0:t}function l(e){return r.a.parse(e).map(function(e){if("string"==typeof e)return e;var t=e.delimiter,n=e.optional,a=e.repeat,r=e.name,i=e.pattern;if("number"==typeof r)return t+"("+i+")";var o="";return n&&!a?o="?":!n&&a?o="+":n&&a&&(o="*"),t+":"+r+o}).join("")}},233:function(e){e.exports={b:["bitcoin","dependabot","discord","gitlab","npm","paypal","serverfault","stackexchange","superuser","telegram","travis"],a:["plastic","flat","flat-square","for-the-badge","social"]}},239:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),i=n(185),o=n(187),l=n(186),c=i.c.a.withConfig({displayName:"footer__SpacedA",componentId:"sc-10wqpng-0"})(["margin-left:10px;margin-right:10px;"]);function s(e){var t=e.baseUrl;return r.a.createElement("section",null,r.a.createElement(l.e,{id:"like-this"},"Like This?"),r.a.createElement("p",null,r.a.createElement("object",{alt:"Follow @shields_io",data:Object(o.badgeUrlFromPath)({baseUrl:t,path:"/twitter/follow/shields_io",queryParams:{label:"Follow"},style:"social"})})," ",r.a.createElement("object",{alt:"Donate to us!",data:Object(o.badgeUrlFromPath)({baseUrl:t,path:"/opencollective/backers/shields",queryParams:{link:"https://opencollective.com/shields"},style:"social"})})," ",r.a.createElement("object",{alt:"Donate to us!",data:Object(o.badgeUrlFromPath)({baseUrl:t,path:"/opencollective/sponsors/shields",queryParams:{link:"https://opencollective.com/shields"},style:"social"})})," ",r.a.createElement("object",{alt:"Fork on GitHub",data:Object(o.badgeUrlFromPath)({baseUrl:t,path:"/github/forks/badges/shields",queryParams:{label:"Fork"},style:"social"})})," ",r.a.createElement("object",{alt:"chat on Discord",data:Object(o.badgeUrlFromPath)({baseUrl:t,path:"/discord/308323056592486420",queryParams:{label:"Chat",link:"https://discord.gg/HjJCwm5"},style:"social"})})),r.a.createElement("p",null,"Have an idea for an awesome new badge?",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/badges/shields/issues/new?labels=service-badge&template=3_Badge_request.md"},"Tell us about it")," ","and we might bring it to you!"),r.a.createElement("p",null,r.a.createElement(c,{href:"https://status.shields.io/"},"Status"),r.a.createElement(c,{href:"https://metrics.shields.io"},"Metrics"),r.a.createElement(c,{href:"https://github.com/badges/shields"},"GitHub")))}},240:function(e,t,n){"use strict";n(37),n(16);var a=n(205),r=n.n(a),i=(n(193),n(189),n(0)),o=n.n(i),l=n(283),c=n.n(l),s=n(187);n(202),n(27),n(23),n(47),n(129),n(130),n(7);function u(e,t,n){return void 0===n&&(n=""),e}function m(e,t,n){var a="<img"+(n?' alt="'+n+'"':"")+' src="'+e+'">';return t?'<a href="'+t+'">'+a+"</a>":a}function d(e,t,n){var a="!["+(n||"")+"]("+e+")";return t?"["+a+"]("+t+")":a}function p(e,t,n){var a=".. image:: "+e;return n&&(a+="   :alt: "+n),t&&(a+="   :target: "+t),a}function f(e){return null==e?"None":'"'+e.replace(/"/g,'\\"')+'"'}function g(e,t,n){return"image:"+e+function(e,t){(e.some(function(e){return e&&e.includes(",")})||Object.keys(t).length>0)&&(e=e.map(function(e){return f(e)}),t=function(e,t){var n={};for(var a in e)n[a]=t(e[a]);return n}(t,function(e){return f(e)}));var n=e.concat(Object.entries(t).map(function(e){return e[0]+"="+e[1]}));return n.length?"["+n.join(",")+"]":"[]"}(n?[n]:[],t?{link:t}:{})}function h(e){var t=e.badgeUrl,n=e.link,a=e.title;return(0,{markdown:d,rst:p,asciidoc:g,link:u,html:m}[e.markupFormat])(t,n,a)}var b=n(62),v=n.n(b),y=v.a.arrayOf(v.a.string.isRequired).isRequired,E=v.a.objectOf(v.a.string).isRequired,C=v.a.exact({title:v.a.string.isRequired,example:v.a.exact({pattern:v.a.string.isRequired,namedParams:E,queryParams:E}).isRequired,preview:v.a.exact({label:v.a.string,message:v.a.string.isRequired,color:v.a.string.isRequired,style:v.a.string,namedLogo:v.a.string}).isRequired,keywords:y,documentation:v.a.exact({__html:v.a.string.isRequired})}),w=(v.a.exact({category:v.a.string.isRequired,name:v.a.string.isRequired,isDeprecated:v.a.bool.isRequired,route:v.a.oneOfType([v.a.exact({pattern:v.a.string.isRequired,queryParams:y}),v.a.exact({format:v.a.string.isRequired,queryParams:y})]),examples:v.a.arrayOf(C).isRequired}).isRequired,n(186)),x=(n(18),n(28),n(185)),k=n(206),_=n.n(k),O=n(232),P=n.n(O),j=n(229),q=x.c.div.withConfig({displayName:"builder-common__BuilderOuterContainer",componentId:"ddcz0g-0"})(["margin-top:10px;margin-bottom:10px;"]),S=x.c.div.withConfig({displayName:"builder-common__BuilderInnerContainer",componentId:"ddcz0g-1"})(["display:inline-block;padding:1px 14px 10px;border-radius:4px;background:#eef;"]);function I(e){var t=e.children;return o.a.createElement(q,null,o.a.createElement(S,null,t))}var A="\n  font-family: system-ui;\n  font-size: 11px;\n",U=x.c.label.withConfig({displayName:"builder-common__BuilderLabel",componentId:"ddcz0g-2"})([""," text-transform:lowercase;"],A),N=x.c.span.withConfig({displayName:"builder-common__BuilderCaption",componentId:"ddcz0g-3"})([""," color:#999;"],A),B=x.c.span.withConfig({displayName:"path-builder__PathBuilderColumn",componentId:"sc-55c99y-0"})(["height:78px;float:left;display:flex;flex-direction:column;margin:0;",";"],function(e){return e.withHorizPadding&&Object(x.b)(["padding:0 8px;"])}),R=x.c.div.withConfig({displayName:"path-builder__PathLiteral",componentId:"sc-55c99y-1"})(["margin-top:39px;",";"],function(e){return e.isFirstToken&&Object(x.b)(["margin-left:3px;"])}),z=x.c.span.withConfig({displayName:"path-builder__NamedParamLabelContainer",componentId:"sc-55c99y-2"})(["display:flex;flex-direction:column;height:37px;width:100%;justify-content:center;"]),L="\n  width: 100%;\n  text-align: center;\n",Q=Object(x.c)(w.h).withConfig({displayName:"path-builder__NamedParamInput",componentId:"sc-55c99y-3"})([""," margin-top:2px;margin-bottom:10px;"],L),F=x.c.select.withConfig({displayName:"path-builder__NamedParamSelect",componentId:"sc-55c99y-4"})([""," margin-bottom:9px;font-size:10px;"],L),M=Object(x.c)(N).withConfig({displayName:"path-builder__NamedParamCaption",componentId:"sc-55c99y-5"})(["width:100%;text-align:center;"]);function H(e){var t=e.pattern,n=e.exampleParams,a=e.onChange,r=e.isPrefilled,l=Object(i.useState)(function(){return _.a.parse(t)})[0],c=Object(i.useState)(function(){return r?n:l.filter(function(e){return"string"!=typeof e}).reduce(function(e,t){return e[t.name]="",e},{})}),s=c[0],u=c[1];function m(e){var t,n=e.target,a=n.name,r=n.value;u(Object.assign({},s,((t={})[a]=r,t)))}function d(e,t){return o.a.createElement(B,{key:t+"-"+e},o.a.createElement(R,{isFirstToken:0===t},e))}function p(e,t,a){var i=e.delimiter,l=e.name,c=e.optional,u=n[l]||"(not set)";return o.a.createElement(o.a.Fragment,{key:e.name},d(i,t),o.a.createElement(B,{withHorizPadding:!0},o.a.createElement(z,null,o.a.createElement(U,{htmlFor:l},P()(l)),c?o.a.createElement(U,null,"(optional)"):null),function(e){var t=e.name,n=e.pattern,a=Object(j.a)(n),i=s[t];return a?o.a.createElement(F,{name:t,onChange:m,value:i},o.a.createElement("option",{disabled:r,key:"empty",value:""}," "),a.map(function(e){return o.a.createElement("option",{disabled:r,key:e,value:e},e)})):o.a.createElement(Q,Object.assign({disabled:r,name:t,onChange:m,type:"text",value:i},w.j))}(e),!r&&o.a.createElement(M,null,0===a?"e.g. "+u:u)))}Object(i.useEffect)(function(){if(a){var e=function(e){var t=e.tokens,n=e.namedParams,a=!0;return{path:t.map(function(e){if("string"==typeof e)return e;var t=e.delimiter,r=e.name,i=e.optional,o=n[r];return o?""+t+o:i?"":(a=!1,t+":"+r)}).join(""),isComplete:a}}({tokens:l,namedParams:s}),t=e.path,n=e.isComplete;a({path:t,isComplete:n})}},[l,s,a]);var f=0;return o.a.createElement(I,null,l.map(function(e,t){return"string"==typeof e?d(e,t):p(e,t,f++)}))}n(91);var D=n(226),G=n(233);var W=Object(x.c)(U).withConfig({displayName:"query-string-builder__QueryParamLabel",componentId:"dh0rqv-0"})(["margin:5px;"]),J=Object(x.c)(w.h).withConfig({displayName:"query-string-builder__QueryParamInput",componentId:"dh0rqv-1"})(["margin:5px 10px;"]),T=Object(x.c)(N).withConfig({displayName:"query-string-builder__QueryParamCaption",componentId:"dh0rqv-2"})(["margin:5px;"]),V=[{name:"style",shieldsDefaultValue:"flat"},{name:"label",label:"override label"},{name:"color",label:"override color"},{name:"logo",label:"named logo"},{name:"logoColor",label:"override logo color"}];function K(e){return V.find(function(t){return t.name===e})}var Y=function(e){var t,n;function a(t){var n;(n=e.call(this,t)||this).handleServiceQueryParamChange=function(e){var t,a=e.target,r=a.name,i="checkbox"===a.type?e.target.checked:e.target.value,o=n.state,l=o.queryParams,c=o.badgeOptions,s=Object.assign({},l,((t={})[r]=i,t));n.setState({queryParams:s}),n.noteQueryStringChanged({queryParams:s,badgeOptions:c})},n.handleBadgeOptionChange=function(e){var t,a=e.target,r=a.name,i=a.value,o=n.state,l=o.badgeOptions,c=o.queryParams,s=Object.assign({},l,((t={})[r]=i,t));n.setState({badgeOptions:s}),n.noteQueryStringChanged({queryParams:c,badgeOptions:s})};var a=t.exampleParams,r=t.initialStyle,i={};Object.entries(a).forEach(function(e){var t=e[0],n="string"==typeof e[1];i[t]=!n||""});var o={};return V.forEach(function(e){var t=e.name;o[t]="style"===t?r:""}),n.state={queryParams:i,badgeOptions:o},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.getQueryString=function(e){var t=e.queryParams,n=e.badgeOptions,a={},r=!0;return Object.entries(t).forEach(function(e){var t=e[0],n=e[1];"string"==typeof n?n?a[t]=n:r=!1:n&&(a[t]=null)}),Object.entries(n).forEach(function(e){var t=e[0],n=e[1],r=K(t).shieldsDefaultValue;n&&n!==r&&(a[t]=n)}),{queryString:Object(D.stringify)(a),isComplete:r}};var r=a.prototype;return r.noteQueryStringChanged=function(e){var t=e.queryParams,n=e.badgeOptions,a=this.props.onChange;if(a){var r=this.constructor.getQueryString({queryParams:t,badgeOptions:n});a({queryString:r.queryString,isComplete:r.isComplete})}},r.componentDidMount=function(){var e=this.state,t=e.queryParams,n=e.badgeOptions;this.noteQueryStringChanged({queryParams:t,badgeOptions:n})},r.renderServiceQueryParam=function(e){var t=e.name,n=e.value,a=e.isStringParam,r=e.stringParamCount,i=this.props.exampleParams[t];return o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(W,{htmlFor:t},P()(t).toLowerCase())),o.a.createElement("td",null,a&&o.a.createElement(T,null,0===r?"e.g. "+i:i)),o.a.createElement("td",null,a?o.a.createElement(J,Object.assign({checked:n,name:t,onChange:this.handleServiceQueryParamChange,type:"text"},w.j)):o.a.createElement("input",{checked:n,name:t,onChange:this.handleServiceQueryParamChange,type:"checkbox"})))},r.renderBadgeOptionInput=function(e,t){return"style"===e?o.a.createElement("select",{name:"style",onChange:this.handleBadgeOptionChange,value:t},G.a.map(function(e){return o.a.createElement("option",{key:e,value:e},e)})):o.a.createElement(J,Object.assign({checked:t,name:e,onChange:this.handleBadgeOptionChange,type:"text"},w.j))},r.renderBadgeOption=function(e,t){var n=K(e),a=n.label,r=void 0===a?P()(e):a,i=n.shieldsDefaultValue;return o.a.createElement("tr",{key:e},o.a.createElement("td",null,o.a.createElement(W,{htmlFor:e},r)),o.a.createElement("td",null,!i&&o.a.createElement(T,null,"optional")),o.a.createElement("td",null,this.renderBadgeOptionInput(e,t)))},r.render=function(){var e=this,t=this.state,n=t.queryParams,a=t.badgeOptions,r=Boolean(Object.keys(n).length),i=0;return o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(I,null,o.a.createElement("table",null,o.a.createElement("tbody",null,Object.entries(n).map(function(t){var n=t[0],a=t[1],r="string"==typeof a;return e.renderServiceQueryParam({name:n,value:a,isStringParam:r,stringParamCount:r?i++:void 0})})))),o.a.createElement(I,null,o.a.createElement("table",null,o.a.createElement("tbody",null,Object.entries(a).map(function(t){var n=t[0],a=t[1];return e.renderBadgeOption(n,a)})))))},a}(o.a.Component);Y.defaultProps={initialStyle:"flat"};var Z=n(209),X=n(297);function $(e,t,n,a,r,i,o){try{var l=e[i](o),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(a,r)}function ee(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){$(i,a,r,o,l,"next",e)}function l(e){$(i,a,r,o,l,"throw",e)}o(void 0)})}}var te=function(e){return o.a.createElement(Z.z.Control,Object.assign({},e,{innerProps:{onMouseDown:e.selectProps.onControlMouseDown}}))},ne=Object(x.c)(X.a).withConfig({displayName:"request-markup-button__MarkupFormatSelect",componentId:"gjwzgu-0"})(["width:200px;margin-left:auto;margin-right:auto;font-family:'Lato',sans-serif;font-size:12px;.markup-format__control{background-image:linear-gradient(-180deg,#00aeff 0%,#0076ff 100%);border:1px solid rgba(238,239,241,0.8);border-width:0;box-shadow:unset;cursor:copy;}.markup-format__control--is-disabled{background:rgba(0,118,255,0.3);cursor:none;}.markup-format__placeholder{color:#eeeff1;}.markup-format__indicator{color:rgba(238,239,241,0.81);cursor:pointer;}.markup-format__indicator:hover{color:#eeeff1;}.markup-format__control--is-focused .markup-format__indicator,.markup-format__control--is-focused .markup-format__indicator:hover{color:#ffffff;}.markup-format__option{text-align:left;cursor:copy;}"]),ae=[{value:"markdown",label:"Copy Markdown"},{value:"rst",label:"Copy reStructuredText"},{value:"asciidoc",label:"Copy AsciiDoc"},{value:"html",label:"Copy HTML"}];function re(e){var t=e.onMarkupRequested,n=e.isDisabled,a=Object(i.useRef)();function l(){return(l=ee(r.a.mark(function e(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,t("link");case 3:a.current.blur();case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function c(){return(c=ee(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.value,!t){e.next=4;break}return e.next=4,t(a);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}return o.a.createElement(ne,{blurInputOnSelect:!0,classNamePrefix:"markup-format",closeMenuOnScroll:!0,components:{Control:te},isDisabled:n,isSearchable:!1,menuPlacement:"auto",onChange:function(e){return c.apply(this,arguments)},onControlMouseDown:function(e){return l.apply(this,arguments)},options:ae,placeholder:"Copy Badge URL",ref:a,value:""})}var ie=n(296),oe=x.c.span.withConfig({displayName:"copied-content-indicator__ContentAnchor",componentId:"sc-1dqcwul-0"})(["position:relative;display:inline-block;"]),le=x.c.span.withConfig({displayName:"copied-content-indicator__ContentContainer",componentId:"sc-1dqcwul-1"})(["width:100vw;position:absolute;left:50%;transform:translateX(-50%);will-change:opacity,top;pointer-events:none;"]),ce=Object(ie.a)(le)({hidden:{opacity:0,transition:{duration:100}},effectStart:{top:"-10px",opacity:1,transition:{duration:0}},effectEnd:{top:"-75px",opacity:.5}});function se(e,t){var n=e.copiedContent,a=e.children,r=Object(i.useState)("hidden"),l=r[0],c=r[1];return Object(i.useImperativeHandle)(t,function(){return{trigger:function(){c("effectStart")}}}),o.a.createElement(oe,null,o.a.createElement(ce,{onPoseComplete:function(){c("effectStart"===l?"effectEnd":"hidden")},pose:l},n),a)}var ue=se=Object(i.forwardRef)(se);function me(e,t,n,a,r,i,o){try{var l=e[i](o),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(a,r)}function de(e){var t,n=e.baseUrl,a=e.title,l=e.pattern,u=e.exampleNamedParams,m=e.exampleQueryParams,d=e.initialStyle,p=e.isPrefilled,f=e.link,g=void 0===f?"":f,b=Object(i.useRef)(),v=Object(i.useState)(""),y=v[0],E=v[1],C=Object(i.useState)(),x=C[0],k=C[1],_=Object(i.useState)(),O=_[0],P=_[1],j=Object(i.useState)(),q=j[0],S=j[1],I=Object(i.useState)(),A=I[0],U=I[1];function N(){var e,t=x?"?"+x:"";return""+(n||(e=window.location).protocol+"//"+e.hostname)+y+".svg"+t}function B(e){return R.apply(this,arguments)}function R(){var e;return e=r.a.mark(function e(t){var n,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=N(),i=h({badgeUrl:n,link:g,title:a,markupFormat:t}),e.prev=2,e.next=5,c()(i);case 5:e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(2),U("Copy failed"),S(i),e.abrupt("return");case 12:S(i),b.current.trigger();case 14:case"end":return e.stop()}},e,null,[[2,7]])}),(R=function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){me(i,a,r,o,l,"next",e)}function l(e){me(i,a,r,o,l,"throw",e)}o(void 0)})}).apply(this,arguments)}return o.a.createElement("form",{action:""},o.a.createElement(H,{exampleParams:u,isPrefilled:p,onChange:function(e){var t=e.path,n=e.isComplete;E(t),P(n)},pattern:l}),o.a.createElement(Y,{exampleParams:m,initialStyle:d,onChange:function(e){var t=e.queryString;e.isComplete,k(t)}}),o.a.createElement("div",null,o.a.createElement("div",null,(t=O?N():Object(s.staticBadgeUrl)({baseUrl:n,label:"preview",message:"some parameters missing"}),o.a.createElement("p",null,o.a.createElement(w.a,{display:"block",src:t}))),o.a.createElement(ue,{copiedContent:"Copied",ref:b},o.a.createElement(re,{isDisabled:!O,onMarkupRequested:B})),A&&o.a.createElement("div",null,o.a.createElement("p",null,A),o.a.createElement("p",null,"Markup: ",q)))))}n.d(t,"a",function(){return de})},251:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABE0lEQVR4AWJkAIKkpCQ7TU3NySIiIlosQMCABejbMWAFf//8YXj77vWn27duZWVGz1nKGBYWZiQkJHSIkZGRmwEPCMxiwAt+/fz3/86VL8EAbuiiAKEoiMLwGcHdCQMBiUAlurDErmJ75tmKP8A3oiJyuF6vAxglws+0C5pv81GJaJdzhlWMMJssaaXM3C0CpmSDLAQtgH3BiCIVB2NRMKWEIoXQMBiLgjHGP9nQ+6ZPLgqGgs9xriDovX8A6Jjgw8ZyIigzn5xz+yZ+6O/tsz7Hy8tb/PLlywPAHMOFT/G3LwRc95fxPyerQCojuKwLDLQAGjoJWIzpAw1mw6bB0guHSYyMDBysnO/5hUTTGvM3rQEAI8qCnLiY3O4AAAAASUVORK5CYII="}}]);
//# sourceMappingURL=1-42034599b516d67c344e.js.map