(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),o=a(186),l=a(187),c=a(188),m=a(157),s=(a(181),a(158)),u=function(e){return r.a.createElement("div",{className:"project_container"},r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement("img",{src:e.imageSrcPath,alt:"Smiley face",style:{maxWidth:"100%"}})),r.a.createElement(c.a,null,r.a.createElement("h4",null,e.title,r.a.createElement("br",null),r.a.createElement("small",null,e.date)),r.a.createElement("p",null,e.description),r.a.createElement(l.a,null,r.a.createElement(s.a,{text:"Source Code",URL:e.sourceURL}),r.a.createElement(s.a,{text:"Hosted App",URL:e.hostedURL})))))},d=(a(159),a(182)),p=a.n(d),f=a(183),g=a.n(f),h=a(184),b=a.n(h),E="Cool React app",w="2019-03-28",y="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",v="https://github.com",q="http://www.google.com",x="Project 2 title",R="2019-03-03",S="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",j="https://github.com/",k="https://www.google.com",L="Project 3 title",U="2019-02-12",P="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",A="https://github.com/",J="https://www.google.com";t.default=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(m.a,{title:"Projects Portfolio",body:"I think the best way of learning is by building Stuff."}),r.a.createElement("hr",null),r.a.createElement(o.a,{style:{marginTop:"2.5rem"}},r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement(u,{imageSrcPath:p.a,title:E,date:w,description:y,sourceURL:v,hostedURL:q}))),r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement(u,{imageSrcPath:g.a,title:x,date:R,description:S,sourceURL:j,hostedURL:k}))),r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement(u,{imageSrcPath:b.a,title:L,date:U,description:P,sourceURL:A,hostedURL:J}))))))}},149:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=(a(33),a(149),i.a.createContext({})),m=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var s=a(153),u=a(161),d=a.n(u),p=a(154),f=a.n(p);function g(e){var t=e.description,a=e.lang,n=e.meta,r=e.keywords,o=e.title,l=s.data.site,c=t||l.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:image",content:f.a},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}g.defaultProps={lang:"en",meta:[],keywords:[],description:"Add your meta information here!."},g.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var h=g,b=(a(162),a(155)),E=a.n(b),w=function(){return i.a.createElement("div",{className:"top_border",style:{marginBottom:"0px",width:"100%"}},i.a.createElement("img",{style:{width:"100%",borderRadius:"unset"},src:E.a,alt:"banner"}))},y=a(185),v=a(186),q=a(187),x=a(188),R=(a(163),a(156),{marginTop:"3rem",marginBottom:"0",backgroundColor:"#708090",color:"#fff",paddingBottom:"0",width:"100%"}),S=function(){return i.a.createElement(y.a,{fluid:!0,style:R},i.a.createElement(v.a,{style:{maxWidth:"960px"}},i.a.createElement(q.a,null,i.a.createElement(x.a,null,i.a.createElement("h3",null,"Jane Schwab"),i.a.createElement("p",{style:{color:"midnightblue",fontSize:"1.3rem"}},i.a.createElement("a",{href:"mailto:jane.a.schwab@gmail.com"},i.a.createElement("span",{style:{color:"midnightblue"}},"jane.a.schwab@gmail.com"))),i.a.createElement("p",{style:{fontSize:"1.3rem"}},"If something caught your eye, feel free to reach out via",i.a.createElement("a",{href:"https://www.linkedin.com/in/jane-schwab-b7019538/",target:"_blank",rel:"noopener noreferrer"}," LinkedIn "),"or",i.a.createElement("a",{href:"mailto:jane.a.schwab@gmail.com",target:"_blank",rel:"noopener noreferrer"}," email"),". I'm a quick learner and love hearing about new opportunities."))),i.a.createElement(q.a,{className:"text-center",style:{marginTop:"3rem"}},i.a.createElement(x.a,null,"Jane Schwab © ",(new Date).getFullYear(),", Built with 🌮",i.a.createElement("a",{href:"https://www.gatsbyjs.org"}," ",i.a.createElement("span",{className:"midnightblue"},"& Gatsby"))))))},j=function(e){var t=e.children;return i.a.createElement(m,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{title:"Jane Schwab",keywords:["gatsby","application","react","software developer","portfolio Site","material-UI","react-bootstrap","boostrap","API calling","Axios","Fetch","Javascript","Frontend Developer","Jane Schwab"]}),i.a.createElement(w,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px",paddingTop:0}},i.a.createElement("main",null,t)),i.a.createElement(S,null))},data:n})};j.propTypes={children:l.a.node.isRequired};t.a=j},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Jane Schwab - Software Developer with a Mechanical Engineering educaiton"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Jane Schwab - Software Developer with a Mechanical Engineering educaiton",description:"Add you meta Description here!",author:"@real_carlw"}}}}},154:function(e,t,a){e.exports=a.p+"static/ogImage-679e0191a3ebe99064c44b0e3107500d.jpg"},155:function(e,t,a){e.exports=a.p+"static/banner-4a8f5791a990eebc200b6b939f62781c.png"},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(185),o=(a(168),{backgroundColor:"#fff"});t.a=function(e){return r.a.createElement(i.a,{fluid:!0,className:"myjumbo",style:o},r.a.createElement("div",{className:"myjumbo_content"},r.a.createElement("h1",null,e.title),r.a.createElement("span",null,r.a.createElement("p",null,e.body)),r.a.createElement("span",null,r.a.createElement("p",null,e.body2))))}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(188);a(169);t.a=function(e){return r.a.createElement(i.a,{sm:6},r.a.createElement("a",{href:e.URL,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"button_styles text-center"},e.text)))}},182:function(e,t,a){e.exports=a.p+"static/cabin-56ec4ee72a91e8f3d954db6cccbf8ab2.png"},183:function(e,t,a){e.exports=a.p+"static/cake-a29c0b43958bf3638364e15ff646fffa.png"},184:function(e,t,a){e.exports=a.p+"static/game-107d31e81b23d07ad38c7cc4d1f7ea27.png"}}]);
//# sourceMappingURL=component---src-pages-projects-js-7b3be2d0530b52f2b87b.js.map