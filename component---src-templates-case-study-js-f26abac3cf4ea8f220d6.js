(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8iLm":function(e,t,n){"use strict";var r=n("xwgP"),i=n.n(r),a=n("hqqk");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=new Map,s=new Map,c=0;function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(s.has(n)||(c+=1,s.set(n,c.toString())),s.get(n)):"0":e[t]);var n})).toString()}function m(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=d(e),n=l.get(t);if(!n){var r,i=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,a=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=i.get(t.target))||n.forEach((function(e){e(a,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:i},l.set(t,n)}return n}(n),i=r.id,a=r.observer,o=r.elements,s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),l.delete(i))}}function u(e){return"function"!=typeof e.children}var p=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,a=e.delay;this._unobserveCb=m(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:a})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,a=i.children,l=i.as,s=i.tag,c=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(l||s||"div",o({ref:this.handleNode},c),a)},i}(r.Component);p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var f=a.d.div.withConfig({displayName:"IFrame__IframeWrapper",componentId:"s21diu-0"})(["position:relative;overflow:hidden;padding-top:56.25%;background-color:",";border-radius:10px;"," iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}.loader{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}"],(function(e){return e.theme.accentColor}),(function(e){return e.livedemo&&Object(a.c)(["@media ","{min-height:400px;}"],(function(e){return e.theme.media.tablet}))})),h=a.d.div.withConfig({displayName:"IFrame__LoaderWrapper",componentId:"s21diu-1"})(["svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:10%;}.paths{> *{animation-name:pathAni;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:ease-in-out;animation-fill-mode:alternate;transform-origin:50% 50%;transform:scale(0.8);}path:nth-child(1){animation-delay:0.2s;}path:nth-child(2){animation-delay:0.3s;}path:nth-child(3){animation-delay:0.4s;}}@keyframes pathAni{0%{transform:scale(0.8);}50%{transform:scale(1);}100%{transform:scale(0.8);}}"]),g=function(){var e="mask-"+Math.random(),t="paint-"+Math.random();return i.a.createElement(h,null,i.a.createElement("svg",{width:"247",height:"210",viewBox:"0 0 247 210",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("mask",{id:e,"mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"265",height:"210"},i.a.createElement("rect",{width:"265",height:"210",fill:"url(#"+t+")"})),i.a.createElement("g",{className:"paths",mask:"url(#"+e+")"},i.a.createElement("path",{opacity:"0.7",d:"M3.03412 220.341C-13.3618 248.782 -3.61438 285.16 24.8056 301.593V301.593L149.776 84.8118C166.172 56.3704 156.424 19.9924 128.004 3.55939V3.55939L3.03412 220.341Z",fill:"url(#"+t+")"}),i.a.createElement("path",{opacity:"0.7",d:"M43.8915 277.869C27.4956 306.31 37.243 342.688 65.663 359.121V359.121L190.633 142.34C207.029 113.899 197.282 77.5205 168.862 61.0875V61.0875L43.8915 277.869Z",fill:"url(#"+t+")"}),i.a.createElement("path",{opacity:"0.7",d:"M84.749 334.041C68.3531 362.483 78.1005 398.861 106.52 415.294V415.294L231.491 198.512C247.886 170.071 238.139 133.693 209.719 117.26V117.26L84.749 334.041Z",fill:"url(#"+t+")"})),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"203.966",y2:"257.386",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#6A98F0"}),i.a.createElement("stop",{offset:"1",stopColor:"#4961DC"})))))},y=function(e){var t=e.src,n=e.livedemo,a=Object(r.useState)(!0),o=a[0],l=a[1],s=function(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,a=t.trackVisibility,o=t.rootMargin,l=t.root,s=t.triggerOnce,c=t.skip,d=t.initialInView,u=Object(r.useRef)(),p=Object(r.useState)({inView:!!d}),f=p[0],h=p[1],g=Object(r.useCallback)((function(e){void 0!==u.current&&(u.current(),u.current=void 0),c||e&&(u.current=m(e,(function(e,t){h({inView:e,entry:t}),t.isIntersecting&&s&&u.current&&(u.current(),u.current=void 0)}),{root:l,rootMargin:o,threshold:n,trackVisibility:a,delay:i}))}),[Array.isArray(n)?n.toString():n,l,o,s,c,a,i]);Object(r.useEffect)((function(){u.current||!f.entry||s||c||h({inView:!!d})}));var y=[g,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({threshold:0,triggerOnce:!0}),c=s[0],d=s[1];return i.a.createElement(f,{livedemo:n,className:"iframe-wrapper",ref:c},i.a.createElement("iframe",{title:t,style:{opacity:o?"0":"1"},src:d?t:void 0,onLoad:function(){l(!1)},frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope",allowFullScreen:!0}),o&&i.a.createElement(g,null))};y.defaultProps={livedemo:!1};t.a=y},"9CTP":function(e,t,n){"use strict";var r=n("xwgP"),i=n.n(r),a=n("mIyP"),o=function(e){var t=e.label,n=e.className,r=e.href,o=e.icon;return i.a.createElement("a",{target:"__blank","aria-label":t,title:t,className:n,href:r},i.a.createElement(a.a,{"aria-hidden":"true",icon:o}))};o.defaultProps={label:"Icon Link"},t.a=o},KrdF:function(e,t,n){"use strict";var r=n("hqqk").d.div.withConfig({displayName:"Flex",componentId:"sc-13ecec2-0"})(["display:flex;justify-content:",";align-items:",";flex-wrap:",";"],(function(e){return e.justify}),(function(e){return e.align}),(function(e){return e.nowrap?"no-wrap":"wrap"}));t.a=r},Nr1y:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("hqqk"),i=n("9CTP"),a=Object(r.c)(["background:",";color:#f8f8f8;border:none;cursor:pointer;transition:0.2s;&:disabled{cursor:not-allowed;opacity:0.6;}&:hover{color:#f8f8f8;background:",";transform:scale(1.05);transition:0.2s;}"],(function(e){return e.theme.gradient}),(function(e){return e.theme.gradient2})),o=r.d.button.withConfig({displayName:"Button",componentId:"sc-1tldla3-0"})(["",";width:",";height:",";font-size:12px;margin:0px 0;padding:12px 12px;border-radius:",";"],a,(function(e){return e.width?e.width:"auto"}),(function(e){return e.height?e.width:"auto"}),(function(e){return e.round?"50%":"5px"})),l=Object(r.d)(i.a).withConfig({displayName:"Button__IconButton",componentId:"sc-1tldla3-1"})(["",";display:inline-block;font-size:18px;text-align:center;line-height:0;padding:10px;margin:0px 0;border-radius:50%;transition:0.2s;&:hover{transform:scale(1.05);transition:0.2s;}"],a);t.b=o},how0:function(e,t,n){"use strict";var r=n("xwgP"),i=n.n(r),a=n("hqqk").d.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"sc-67flf7-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],(function(e){return e.theme.spacing.sectionBottom}),(function(e){return e.theme.media.fablet}));t.a=function(e){var t=e.content,n=e.aside;return i.a.createElement(a,null,i.a.createElement("section",{className:"layout__content"},t&&t),i.a.createElement("section",{className:"layout__aside"},i.a.createElement("aside",{className:"sticky__aside"},n&&n)))}},kqOb:function(e,t,n){"use strict";n.r(t);var r=n("xwgP"),i=n.n(r),a=n("yBb5"),o=n("vrFN"),l=n("KrdF"),s=n("8iLm"),c=n("Nr1y"),d=n("oU4B"),m=n("v7sR"),u=n("how0"),p=n("hqqk"),f=p.d.h4.withConfig({displayName:"case-studystyle__InfoTitle",componentId:"sc-5uq7ws-0"})(["color:",";display:flex;width:100%;justify-content:center;align-items:center;text-align:center;font-weight:600;font-size:16px;margin:15px 0;::after{content:'';border-top:1px solid;margin:0 20px 0 10px;flex:1 0 20px;}"],(function(e){return e.theme.primaryColor})),h=p.d.section.withConfig({displayName:"case-studystyle__CaseStudyWrapper",componentId:"sc-5uq7ws-1"})(["margin-top:100px;margin-bottom:100px;li{margin:5px 0;}.case__title{margin-bottom:50px;h1{margin:0;line-height:70px;}.case__links{margin:0;}}.case__info{margin-bottom:70px;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;@media ","{grid-template-columns:0.6fr 1fr;}@media ","{grid-template-columns:1fr;}}.case__iframe-container{width:100%;margin:10px 0;}h1{font-size:1.8rem;margin-bottom:50px;}h2,h3,h4,h5,h6{margin:20px 0;color:",";}"],(function(e){return e.theme.media.fablet}),(function(e){return e.theme.media.tablet}),(function(e){return e.theme.primaryColor}));t.default=function(e){var t=e.data,n="https://www.virkano.com"+t.markdownRemark.fields.slug,r=t.markdownRemark.frontmatter,p=r.info.links&&i.a.createElement("div",null,i.a.createElement(f,null,"Links & Resources"),i.a.createElement("ul",null,r.info.links.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:e[1]},e[0]))}))));return i.a.createElement(a.a,null,i.a.createElement(o.a,{slug:t.markdownRemark.fields.slug,title:r.title}),i.a.createElement(h,null,i.a.createElement(l.a,{className:"case__title",justify:"space-between",align:"center"},i.a.createElement("h1",null,r.title),i.a.createElement(d.c,{className:"case__links"},i.a.createElement(c.b,{target:"__blank",as:"a",href:r.demo},"Live Demo"),i.a.createElement(c.a,{label:"github",icon:["fab","github"],href:r.src}))),i.a.createElement("section",{className:"case__info"},i.a.createElement("div",null,i.a.createElement("aside",null,i.a.createElement(f,null,"Idea"),i.a.createElement("p",null,r.info.idea)),i.a.createElement("aside",null,i.a.createElement(f,null,"Core Technologies"),i.a.createElement("ul",null,r.info.tech.map((function(e,t){return i.a.createElement("li",{key:t},e)})))),p),i.a.createElement("div",{className:"case__iframe-container"},i.a.createElement(s.a,{src:r.iframe}))),i.a.createElement(u.a,{content:i.a.createElement("article",{className:"markdown-content",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),aside:i.a.createElement("div",null,i.a.createElement("h4",null,"Share on"),i.a.createElement(m.a,{baseSlugUrl:n,title:r.title}))})))}},oU4B:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return c}));var r=n("hqqk"),i=r.d.section.withConfig({displayName:"ProjectTemplatestyle__ProjectWrapper",componentId:"kf3mxw-0"})(["margin:80px 0;"]),a=r.d.div.withConfig({displayName:"ProjectTemplatestyle__ProjectContent",componentId:"kf3mxw-1"})(["display:grid;grid-template-columns:1fr 170px 1fr;grid-template-rows:1fr;align-items:center;"]),o=r.d.div.withConfig({displayName:"ProjectTemplatestyle__ProjectDetail",componentId:"kf3mxw-2"})(["padding:50px;background-color:",";box-shadow:",";border-radius:10px;min-height:350px;grid-column:1 / 3;grid-row:1;h2{margin-bottom:25px;}.project__detail-container{width:75%;p{line-height:170%;min-height:250px;}}@media ","{min-height:unset;grid-column:1 / 4;grid-row:unset;padding:30px 30px;.project__detail-container{width:100%;p{min-height:unset;}}}"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.shadowSmall}),(function(e){return e.theme.media.fablet})),l=r.d.div.withConfig({displayName:"ProjectTemplatestyle__ProjectLinks",componentId:"kf3mxw-3"})(["display:flex;align-items:center;margin:20px 0;margin-bottom:0;a{margin-right:10px;}"]),s=r.d.div.withConfig({displayName:"ProjectTemplatestyle__ProjectPreview",componentId:"kf3mxw-4"})(["grid-column:2 / 4;grid-row:1;position:relative;right:-20px;@media ","{right:0;grid-column:1 / 4;margin-bottom:20px;}iframe{border-radius:10px;}"],(function(e){return e.theme.media.fablet})),c=r.d.div.withConfig({displayName:"ProjectTemplatestyle__Tags",componentId:"kf3mxw-5"})(["@media ","{display:none;}margin:10px;color:",";display:flex;font-size:24px;svg,i{margin-right:25px;}"],(function(e){return e.theme.media.fablet}),(function(e){return e.theme.primaryColor}))},v7sR:function(e,t,n){"use strict";var r=n("xwgP"),i=n.n(r),a=n("mIyP");t.a=function(e){var t=e.baseSlugUrl,n="https://facebook.com/sharer/sharer.php?u="+t,r='http://twitter.com/share?text="'+e.title+'" - &url='+t;return i.a.createElement("div",{className:"blog__social-share"},i.a.createElement("a",{"aria-label":"share on facebook",rel:"noopener norefferer",target:"__blank",href:n},i.a.createElement(a.a,{style:{fontSize:24},icon:["fab","facebook"]})),i.a.createElement("a",{"aria-label":"share on twitter",rel:"noopener norefferer",target:"__blank",href:r},i.a.createElement(a.a,{style:{fontSize:24},icon:["fab","twitter"]})))}}}]);
//# sourceMappingURL=component---src-templates-case-study-js-f26abac3cf4ea8f220d6.js.map