(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{381:function(e,t,a){"use strict";a.r(t);var n=a(398),r=a.n(n),i=a(399),o=a(0),l=a.n(o),s=a(394),c=a.n(s),u=a(24);t.default=Object(u.withStyles)({grid:{height:"calc( 100vh - 85px)"}})(function(e){var t=e.classes;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{title:"Error"}),l.a.createElement(r.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:t.grid},l.a.createElement(r.a,{item:!0,xs:12,align:"center"},l.a.createElement(c.a,{align:"center",variant:"h1",gutterBottom:!0},"Download failed :/"),l.a.createElement(c.a,{align:"center",variant:"body1",gutterBottom:!0},"Unfortunately the given url couldn't be downloaded because the url is not working or is blocked. Try entering a different url."))))})},394:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(427))},395:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(2),o=a.n(i),l=a(89),s=a.n(l);a.d(t,"a",function(){return s.a});a(396);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},396:function(e,t,a){var n;e.exports=(n=a(401))&&n.default||n},397:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=function(e){0;return e.charAt(0).toUpperCase()+e.slice(1)},t.contains=i,t.findIndex=o,t.find=function(e,t){var a=o(e,t);return a>-1?e[a]:void 0},t.createChainedFunction=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce(function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}},function(){})};var r=n(a(61));n(a(16));function i(e,t){return Object.keys(t).every(function(a){return e.hasOwnProperty(a)&&e[a]===t[a]})}function o(e,t){for(var a=(0,r.default)(t),n=0;n<e.length;n+=1){if("function"===a&&!0==!!t(e[n],n,e))return n;if("object"===a&&i(e[n],t))return n;if(-1!==["string","number","boolean"].indexOf(a))return e.indexOf(t)}return-1}},398:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(441))},399:function(e,t,a){"use strict";a(22);var n=a(400),r=a(395),i=a(209),o=a.n(i),l=a(2),s=a.n(l),c=a(0),u=a.n(c),d=a(402),p=a.n(d),f=function(e){var t=e.data,a=e.children,n=e.title,r=e.description,i=e.frontPage,l=e.landinPage;return n?i||l||(n=n+" | "+t.site.siteMetadata.title):n=t.site.siteMetadata.title,r=r||t.site.siteMetadata.description,u.a.createElement(u.a.Fragment,null,u.a.createElement(o.a,null,u.a.createElement("html",{lang:t.site.siteMetadata.lang}),u.a.createElement("title",null,n),u.a.createElement("meta",{name:"description",content:r}),u.a.createElement("meta",{name:"robots",content:"noodp"}),u.a.createElement("meta",{property:"og:locale",content:t.site.siteMetadata.locale}),u.a.createElement("meta",{property:"og:type",content:"article"}),u.a.createElement("meta",{property:"og:title",content:n}),u.a.createElement("meta",{property:"og:description",content:r}),u.a.createElement("meta",{property:"og:url",content:t.site.siteMetadata.siteUrl+"/"}),u.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.siteName}),u.a.createElement("meta",{property:"og:image",content:t.site.siteMetadata.siteUrl+"/"+p.a}),u.a.createElement("meta",{name:"twitter:card",content:"summary"}),u.a.createElement("meta",{name:"twitter:description",content:r}),u.a.createElement("meta",{name:"twitter:title",content:n}),u.a.createElement("meta",{name:"twitter:site",content:t.site.siteMetadata.siteName}),u.a.createElement("meta",{name:"twitter:image",content:p.a}),i&&u.a.createElement("link",{rel:"canonical",href:t.site.siteMetadata.siteUrl+"/"}),a))};t.a=function(e){return u.a.createElement(r.b,{query:"302559433",render:function(t){return u.a.createElement(f,Object.assign({data:t},e))},data:n})},f.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({title:s.a.string.isRequired,description:s.a.string.isRequired,siteName:s.a.string.isRequired,siteUrl:s.a.string.isRequired,locale:s.a.string.isRequired,lang:s.a.string.isRequired}).isRequired}).isRequired}).isRequired}},400:function(e){e.exports={data:{site:{siteMetadata:{title:"Website Downloader",description:"Simple cloud-based Website Downloader with nothing to install or configure - Download the complete source code of any website (including all assets).",siteName:"Website Downloader | Download any website",siteUrl:"https://websitedownloader.io",locale:"en_US",lang:"en"}}}}},401:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),l=a(125),s=a(7),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},402:function(e,t,a){e.exports=a.p+"static/website-downloader-share-image-62910ae81448338be98a742f602f5c2b.jpg"},427:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(10)),i=n(a(21)),o=n(a(20)),l=n(a(0)),s=(n(a(2)),n(a(208))),c=(a(32),n(a(124))),u=a(397),d=function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},inline:{display:"inline"}}};t.styles=d;var p={display4:"h1",display3:"h2",display2:"h3",display1:"h4",headline:"h5",title:"h6",subheading:"subtitle1"};var f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3"};function g(e){var t,a=e.align,n=e.classes,c=e.className,d=e.color,g=e.component,m=e.gutterBottom,y=e.headlineMapping,h=e.inline,x=(e.internalDeprecatedVariant,e.noWrap),b=e.paragraph,v=e.theme,w=e.variant,E=(0,o.default)(e,["align","classes","className","color","component","gutterBottom","headlineMapping","inline","internalDeprecatedVariant","noWrap","paragraph","theme","variant"]),j=function(e,t){var a=e.typography,n=t;return n||(n=a.useNextVariants?"body2":"body1"),a.useNextVariants&&(n=p[n]||n),n}(v,w),M=(0,s.default)(n.root,(t={},(0,i.default)(t,n[j],"inherit"!==j),(0,i.default)(t,n["color".concat((0,u.capitalize)(d))],"default"!==d),(0,i.default)(t,n.noWrap,x),(0,i.default)(t,n.gutterBottom,m),(0,i.default)(t,n.paragraph,b),(0,i.default)(t,n["align".concat((0,u.capitalize)(a))],"inherit"!==a),(0,i.default)(t,n.inline,h),t),c),P=g||(b?"p":y[j]||f[j])||"span";return l.default.createElement(P,(0,r.default)({className:M},E))}g.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:f,inline:!1,noWrap:!1,paragraph:!1};var m=(0,c.default)(d,{name:"MuiTypography",withTheme:!0})(g);t.default=m},441:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(21)),i=n(a(20)),o=n(a(10)),l=n(a(0)),s=(n(a(2)),n(a(208))),c=(a(32),n(a(124))),u=a(131),d=(n(a(442)),[0,8,16,24,32,40]),p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return d.forEach(function(e,n){0!==n&&(a["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),a}(0,"xs"),u.keys.reduce(function(t,a){return function(e,t,a){var n={};p.forEach(function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?(0,o.default)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t},{}))};function g(e){var t,a=e.alignContent,n=e.alignItems,c=e.classes,u=e.className,d=e.component,p=e.container,f=e.direction,m=e.item,y=e.justify,h=e.lg,x=e.md,b=e.sm,v=e.spacing,w=e.wrap,E=e.xl,j=e.xs,M=e.zeroMinWidth,P=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),S=(0,s.default)((t={},(0,r.default)(t,c.container,p),(0,r.default)(t,c.item,m),(0,r.default)(t,c.zeroMinWidth,M),(0,r.default)(t,c["spacing-xs-".concat(String(v))],p&&0!==v),(0,r.default)(t,c["direction-xs-".concat(String(f))],f!==g.defaultProps.direction),(0,r.default)(t,c["wrap-xs-".concat(String(w))],w!==g.defaultProps.wrap),(0,r.default)(t,c["align-items-xs-".concat(String(n))],n!==g.defaultProps.alignItems),(0,r.default)(t,c["align-content-xs-".concat(String(a))],a!==g.defaultProps.alignContent),(0,r.default)(t,c["justify-xs-".concat(String(y))],y!==g.defaultProps.justify),(0,r.default)(t,c["grid-xs-".concat(String(j))],!1!==j),(0,r.default)(t,c["grid-sm-".concat(String(b))],!1!==b),(0,r.default)(t,c["grid-md-".concat(String(x))],!1!==x),(0,r.default)(t,c["grid-lg-".concat(String(h))],!1!==h),(0,r.default)(t,c["grid-xl-".concat(String(E))],!1!==E),t),u);return l.default.createElement(d,(0,o.default)({className:S},P))}t.styles=f,g.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var m=(0,c.default)(f,{name:"MuiGrid"})(g);t.default=m},442:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return function(){return null}};t.default=n}}]);