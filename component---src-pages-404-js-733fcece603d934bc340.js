(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(151);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{style:{marginTop:"15rem",marginBottom:"15rem"}},"Page not Found!")))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(33),c=a.n(i);a.d(t,"a",function(){return c.a});a(150);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},151:function(e,t,a){"use strict";var n=a(152),r=a(0),l=a.n(r),o=a(4),i=a.n(o),c=a(149),s=a(154),m=a(162),u=a.n(m),d=a(155),p=a.n(d);function g(e){var t=e.description,a=e.lang,n=e.meta,r=e.keywords,o=e.title,i=s.data.site,c=t||i.siteMetadata.description;return l.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:image",content:p.a},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}g.defaultProps={lang:"en",meta:[],keywords:[],description:"Add your meta information here!."},g.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired};var f=g,E=(a(163),function(){return l.a.createElement("div",{className:"top_border",style:{marginBottom:"0px",width:"100%"}},l.a.createElement("img",{src:"../images/banner.png",alt:"banner"}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px",paddingTop:0}},l.a.createElement("ul",{className:"nav_styles"},l.a.createElement("li",{className:"float_left"},l.a.createElement("i",{className:"fas fa-frog"})),l.a.createElement("li",{className:"float_right"},l.a.createElement("a",{href:"https://www.github.com/",target:"_blank",rel:"noopener noreferrer",className:"menu_link"},"GitHub")),l.a.createElement("li",{className:"float_right"},l.a.createElement(c.a,{to:"/projects",className:"menu_link"},"Projects")),l.a.createElement("li",{className:"float_right"},l.a.createElement(c.a,{to:"/about",className:"menu_link"},"About")),l.a.createElement("li",{className:"float_right"},l.a.createElement(c.a,{to:"/",className:"menu_link"},"Home")))))}),h=a(190),y=a(191),b=a(192),w=a(193),v=(a(164),a(156),{marginTop:"3rem",marginBottom:"0",backgroundColor:"#708090",color:"#fff",paddingBottom:"0",width:"100%"}),x=function(){return l.a.createElement(h.a,{fluid:!0,style:v},l.a.createElement(y.a,{style:{maxWidth:"960px"}},l.a.createElement(b.a,null,l.a.createElement(w.a,null,l.a.createElement("h3",null,"Jane Schwab"),l.a.createElement("p",{style:{color:"midnightblue",fontSize:"1.3rem"}},l.a.createElement("a",{href:"mailto:jane.a.schwab@gmail.com"},l.a.createElement("span",{style:{color:"midnightblue"}},"jane.a.schwab@gmail.com"))),l.a.createElement("br",null))),l.a.createElement(b.a,null,l.a.createElement(w.a,{xs:2,style:{fontSize:"1.3rem"}},l.a.createElement(c.a,{to:"/"},l.a.createElement("span",{className:"link_styles"},"Home"))),l.a.createElement(w.a,{xs:2,style:{fontSize:"1.3rem"}},l.a.createElement(c.a,{to:"/about"},l.a.createElement("span",{className:"link_styles"},"About")))),l.a.createElement(b.a,{className:"text-center",style:{marginTop:"3rem"}},l.a.createElement(w.a,null,"Jane Schwab © ",(new Date).getFullYear(),", Built with 🌮",l.a.createElement("a",{href:"https://www.gatsbyjs.org"}," ",l.a.createElement("span",{className:"midnightblue"},"& Gatsby"))))))},N=function(e){var t=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{title:"John Doe Software Developer",keywords:["gatsby","application","react","software developer","portfolio Site","material-UI","react-bootstrap","boostrap","API calling","Axios","Fetch","Javascript","Frontend Developer"]}),l.a.createElement(E,null),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px",paddingTop:0}},l.a.createElement("main",null,t)),l.a.createElement(x,null))},data:n})};N.propTypes={children:i.a.node.isRequired};t.a=N},152:function(e){e.exports={data:{site:{siteMetadata:{title:"John Doe - Software Developer"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e){e.exports={data:{site:{siteMetadata:{title:"John Doe - Software Developer",description:"Add you meta Description here!",author:"@real_carlw"}}}}},155:function(e,t,a){e.exports=a.p+"static/ogImage-679e0191a3ebe99064c44b0e3107500d.jpg"}}]);
//# sourceMappingURL=component---src-pages-404-js-733fcece603d934bc340.js.map