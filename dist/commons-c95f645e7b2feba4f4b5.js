(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2W6z":function(e,t,n){"use strict";n("pIFo");var r=function(){};e.exports=r},"7j6X":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV");var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}n("pIFo");var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!l.test(e))}(a)?n+=c(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"7vrA":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),l=n.n(c),s=n("vUet"),u=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.fluid,c=e.as,u=void 0===c?"div":c,f=e.className,d=Object(a.a)(e,["bsPrefix","fluid","as","className"]),p=Object(s.a)(n,"container"),v="string"==typeof i?"-"+i:"-fluid";return l.a.createElement(u,Object(r.a)({ref:t},d,{className:o()(f,i?""+p+v:p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("f98A"),a=n("q1tI"),i=n.n(a),o=n("7vrA"),c=(n("0mN4"),n("wx14")),l=n("zLVn"),s=n("TSYQ"),u=n.n(s),f=n("JCAc"),d=n("YdCC"),p=n("vUet"),v=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(l.a)(e,["bsPrefix","className","as"]);n=Object(p.a)(n,"navbar-brand");var s=a||(o.href?"a":"span");return i.a.createElement(s,Object(c.a)({},o,{ref:t,className:u()(r,n)}))}));v.displayName="NavbarBrand";var m=v,b=n("7j6X"),h=(n("V+eJ"),n("GEtZ"));function x(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(h.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function E(e,t,n,r){var a,i,o;null==n&&(a=e,i=Object(b.a)(a,"transitionDuration")||"",o=-1===i.indexOf("ms")?1e3:1,n=parseFloat(i)*o||0);var c=x(e,n,r),l=Object(h.a)(e,"transitionend",t);return function(){c(),l()}}var C=n("dI71"),g=n("i8i4"),y=n.n(g),O=!1,j=i.a.createContext(null),w=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(C.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[y.a.findDOMNode(this),r],i=a[0],o=a[1],c=this.getTimeouts(),l=r?c.appear:c.enter;!e&&!n||O?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:y.a.findDOMNode(this);t&&!O?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:y.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(l.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(j.Provider,{value:null},"function"==typeof n?n(e,r):i.a.cloneElement(i.a.Children.only(n),r))},t}(i.a.Component);function N(){}w.contextType=j,w.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:N,onEntering:N,onEntered:N,onExit:N,onExiting:N,onExited:N},w.UNMOUNTED="unmounted",w.EXITED="exited",w.ENTERING="entering",w.ENTERED="entered",w.EXITING="exiting";var k,L=w,S=n("Qg85");var P={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function V(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=P[e];return n+parseInt(Object(b.a)(t,r[0]),10)+parseInt(Object(b.a)(t,r[1]),10)}var T=((k={}).exited="collapse",k.exiting="collapsing",k.entering="collapsing",k.entered="collapse show",k),I={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:V},M=i.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,o=e.onEntered,s=e.onExit,f=e.onExiting,d=e.className,p=e.children,v=e.dimension,m=void 0===v?"height":v,b=e.getDimensionValue,h=void 0===b?V:b,x=Object(l.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),C="function"==typeof m?m():m,g=Object(a.useMemo)((function(){return Object(S.a)((function(e){e.style[C]="0"}),n)}),[C,n]),y=Object(a.useMemo)((function(){return Object(S.a)((function(e){var t="scroll"+C[0].toUpperCase()+C.slice(1);e.style[C]=e[t]+"px"}),r)}),[C,r]),O=Object(a.useMemo)((function(){return Object(S.a)((function(e){e.style[C]=null}),o)}),[C,o]),j=Object(a.useMemo)((function(){return Object(S.a)((function(e){e.style[C]=h(C,e)+"px",e.offsetHeight}),s)}),[s,h,C]),w=Object(a.useMemo)((function(){return Object(S.a)((function(e){e.style[C]=null}),f)}),[C,f]);return i.a.createElement(L,Object(c.a)({ref:t,addEndListener:E},x,{"aria-expanded":x.role?x.in:null,onEnter:g,onEntering:y,onEntered:O,onExit:j,onExiting:w}),(function(e,t){return i.a.cloneElement(p,Object(c.a)({},t,{className:u()(d,p.props.className,T[e],"width"===C&&"width")}))}))}));M.defaultProps=I;var R=M,A=i.a.createContext(null);A.displayName="NavbarContext";var K=A,D=i.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(l.a)(e,["children","bsPrefix"]);return r=Object(p.a)(r,"navbar-collapse"),i.a.createElement(K.Consumer,null,(function(e){return i.a.createElement(R,Object(c.a)({in:!(!e||!e.expanded)},a),i.a.createElement("div",{ref:t,className:r},n))}))}));D.displayName="NavbarCollapse";var H=D,q=n("ZCiN"),Z=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,s=e.label,f=e.as,d=void 0===f?"button":f,v=e.onClick,m=Object(l.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(p.a)(n,"navbar-toggler");var b=Object(a.useContext)(K)||{},h=b.onToggle,x=b.expanded,E=Object(q.a)((function(e){v&&v(e),h&&h()}));return"button"===d&&(m.type="button"),i.a.createElement(d,Object(c.a)({},m,{ref:t,onClick:E,"aria-label":s,className:u()(r,n,!x&&"collapsed")}),o||i.a.createElement("span",{className:n+"-icon"}))}));Z.displayName="NavbarToggle",Z.defaultProps={label:"Toggle navigation"};var _=Z,B=i.a.createContext(null),U=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},G=B,J=Object(d.a)("navbar-text",{Component:"span"}),F=i.a.forwardRef((function(e,t){var n=Object(f.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,o=n.expand,s=n.variant,d=n.bg,v=n.fixed,m=n.sticky,b=n.className,h=n.children,x=n.as,E=void 0===x?"nav":x,C=n.expanded,g=n.onToggle,y=n.onSelect,O=n.collapseOnSelect,j=Object(l.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),w=Object(p.a)(r,"navbar"),N=Object(a.useCallback)((function(){y&&y.apply(void 0,arguments),O&&C&&g&&g(!1)}),[y,O,C,g]);void 0===j.role&&"nav"!==E&&(j.role="navigation");var k=w+"-expand";"string"==typeof o&&(k=k+"-"+o);var L=Object(a.useMemo)((function(){return{onToggle:function(){return g&&g(!C)},bsPrefix:w,expanded:!!C}}),[w,C,g]);return i.a.createElement(K.Provider,{value:L},i.a.createElement(G.Provider,{value:N},i.a.createElement(E,Object(c.a)({ref:t},j,{className:u()(b,w,o&&k,s&&w+"-"+s,d&&"bg-"+d,m&&"sticky-"+m,v&&"fixed-"+v)}),h)))}));F.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},F.displayName="Navbar",F.Brand=m,F.Toggle=_,F.Collapse=H,F.Text=J;var z=F,Y=(n("bHtr"),n("K9S6"),i.a.createContext(null));Y.displayName="CardContext";var W=Y,Q=n("Zeqi"),X=n("YGJp"),$=n("lcWJ"),ee=i.a.createContext(null);ee.displayName="NavContext";var te=ee,ne=i.a.createContext(null),re=function(){},ae=i.a.forwardRef((function(e,t){var n,r,o=e.as,s=void 0===o?"ul":o,u=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(l.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(X.a)(),b=Object(a.useRef)(!1),h=Object(a.useContext)(G),x=Object(a.useContext)(ne);x&&(d=d||"tablist",f=x.activeKey,n=x.getControlledId,r=x.getControllerId);var E=Object(a.useRef)(null),C=function(e){var t=E.current;if(!t)return null;var n=Object(Q.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var a=n.indexOf(r);if(-1===a)return null;var i=a+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},g=function(e,t){null!=e&&(u&&u(e,t),h&&h(e,t))};Object(a.useEffect)((function(){if(E.current&&b.current){var e=E.current.querySelector("[data-rb-event-key].active");e&&e.focus()}b.current=!1}));var y=Object($.a)(t,E);return i.a.createElement(G.Provider,{value:g},i.a.createElement(te.Provider,{value:{role:d,activeKey:U(f),getControlledId:n||re,getControllerId:r||re}},i.a.createElement(s,Object(c.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}t&&(e.preventDefault(),g(t.dataset.rbEventKey,e),b.current=!0,m())},ref:y,role:d}))))})),ie=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.as,s=void 0===o?"div":o,f=Object(l.a)(e,["bsPrefix","className","children","as"]);return n=Object(p.a)(n,"nav-item"),i.a.createElement(s,Object(c.a)({},f,{ref:t,className:u()(r,n)}),a)}));ie.displayName="NavItem";var oe=ie,ce=n("dbZe"),le=(n("2W6z"),i.a.forwardRef((function(e,t){var n=e.active,r=e.className,o=e.eventKey,s=e.onSelect,f=e.onClick,d=e.as,p=Object(l.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=U(o,p.href),m=Object(a.useContext)(G),b=Object(a.useContext)(te),h=n;if(b){p.role||"tablist"!==b.role||(p.role="tab");var x=b.getControllerId(v),E=b.getControlledId(v);p["data-rb-event-key"]=v,p.id=x||p.id,p["aria-controls"]=E||p["aria-controls"],h=null==n&&null!=v?b.activeKey===v:n}"tab"===p.role&&(p.tabIndex=h?p.tabIndex:-1,p["aria-selected"]=h);var C=Object(q.a)((function(e){f&&f(e),null!=v&&(s&&s(v,e),m&&m(v,e))}));return i.a.createElement(d,Object(c.a)({},p,{ref:t,onClick:C,className:u()(r,h&&"active")}))})));le.defaultProps={disabled:!1};var se=le,ue={disabled:!1,as:ce.a},fe=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,o=e.href,s=e.eventKey,f=e.onSelect,d=e.as,v=Object(l.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.a)(n,"nav-link"),i.a.createElement(se,Object(c.a)({},v,{href:o,ref:t,eventKey:s,as:d,disabled:r,onSelect:f,className:u()(a,n,r&&"disabled")}))}));fe.displayName="NavLink",fe.defaultProps=ue;var de=fe,pe=i.a.forwardRef((function(e,t){var n,r,o,s=Object(f.a)(e,{activeKey:"onSelect"}),d=s.as,v=void 0===d?"div":d,m=s.bsPrefix,b=s.variant,h=s.fill,x=s.justify,E=s.navbar,C=s.className,g=s.children,y=s.activeKey,O=Object(l.a)(s,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),j=Object(p.a)(m,"nav"),w=!1,N=Object(a.useContext)(K),k=Object(a.useContext)(W);return N?(r=N.bsPrefix,w=null==E||E):k&&(o=k.cardHeaderBsPrefix),i.a.createElement(ae,Object(c.a)({as:v,ref:t,activeKey:y,className:u()(C,(n={},n[j]=!w,n[r+"-nav"]=w,n[o+"-"+b]=!!o,n[j+"-"+b]=!!b,n[j+"-fill"]=h,n[j+"-justified"]=x,n))},O),g)}));pe.displayName="Nav",pe.defaultProps={justify:!1,fill:!1},pe.Item=oe,pe.Link=de;var ve=pe,me=n("Wbzz"),be=function(){return i.a.createElement(o.a,{fluid:!0,className:"header px-0"},i.a.createElement(z,{fixed:"top",collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark"},i.a.createElement(z.Brand,{as:me.Link,to:"/"},i.a.createElement("svg",{width:"100",height:"40",viewBox:"0 0 100 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("rect",{width:"100",height:"40"}),i.a.createElement("g",{"clip-path":"url(#clip0)"},i.a.createElement("path",{d:"M19.2441 32.1714L5.29883 25.6943V23.1479L19.2441 16.688V20.123L9.69092 24.105L8.23828 24.4126V24.5151L9.69092 24.8398L19.2441 28.7363V32.1714ZM29.9937 34.3589C28.6151 34.3589 27.3618 34.0854 26.2339 33.5386C25.1174 32.9917 24.2173 32.1657 23.5337 31.0605C22.8615 29.9554 22.4912 28.5711 22.4229 26.9077L22.457 26.8052H25.687C25.7326 28.48 26.1143 29.7104 26.832 30.4966C27.5612 31.2827 28.598 31.6758 29.9424 31.6758C31.3551 31.6758 32.3919 31.2371 33.0527 30.3599C33.7135 29.4712 34.0439 28.3319 34.0439 26.9419V11.7661L30.7285 11.3218V9.11719H40.1963V11.2876L37.4106 11.7661V26.9419C37.4106 29.175 36.7783 30.9694 35.5137 32.3252C34.2604 33.681 32.4204 34.3589 29.9937 34.3589ZM51.749 34.3589C50.2337 34.3589 48.7754 34.1367 47.374 33.6924C45.9727 33.248 44.634 32.5645 43.3579 31.6416V26.3267H45.9727L46.5366 30.2402C47.2772 30.696 48.0804 31.0492 48.9463 31.2998C49.8122 31.5505 50.7464 31.6758 51.749 31.6758C53.4466 31.6758 54.7625 31.2998 55.6968 30.5479C56.631 29.7845 57.0981 28.7876 57.0981 27.5571C57.0981 26.4178 56.6766 25.4722 55.8335 24.7202C54.9904 23.9683 53.4865 23.3473 51.3218 22.8574C48.7469 22.265 46.7816 21.3649 45.4258 20.1572C44.07 18.9382 43.3921 17.4058 43.3921 15.5601C43.3921 14.2612 43.7339 13.0991 44.4175 12.0737C45.1125 11.0483 46.0752 10.2394 47.3057 9.64697C48.5361 9.05452 49.9717 8.7583 51.6123 8.7583C53.3555 8.7583 54.8936 9.02604 56.2266 9.56152C57.571 10.0856 58.6761 10.7236 59.542 11.4756V16.4487H56.9272L56.3633 12.894C55.8506 12.4839 55.2126 12.1421 54.4492 11.8687C53.6859 11.5952 52.7402 11.4585 51.6123 11.4585C50.1654 11.4585 48.9919 11.8288 48.0918 12.5693C47.2031 13.3099 46.7588 14.2897 46.7588 15.5088C46.7588 16.5798 47.186 17.457 48.0405 18.1406C48.895 18.8128 50.3761 19.411 52.4839 19.9351C55.1043 20.5845 57.0868 21.5472 58.4312 22.8232C59.7869 24.0879 60.4648 25.6545 60.4648 27.5229C60.4648 28.856 60.106 30.0409 59.3882 31.0776C58.6704 32.103 57.6564 32.9062 56.3462 33.4873C55.0474 34.0684 53.515 34.3589 51.749 34.3589ZM62.0029 36.1362L72.3936 9.11719H75.2305L64.8569 36.1362H62.0029ZM78.2212 32.5132V29.1636L88.4409 25.0962L89.8765 24.8057V24.7031L88.4409 24.3613L78.2212 20.3623V17.0298L92.833 23.4897V26.0361L78.2212 32.5132Z",fill:"white"})),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("rect",{width:"100",height:"40",fill:"white"}))))),i.a.createElement(z.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(z.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},i.a.createElement(ve,{className:"pr-3 mr-4 nav-links"},i.a.createElement(ve.Link,{className:"ml-2",as:me.Link,to:"/about",title:"About"},"About"),i.a.createElement(ve.Link,{className:"ml-2",as:me.Link,to:"/projects",title:"Projects"},"Projects"),i.a.createElement(ve.Link,{className:"ml-2",as:me.Link,to:"/blog",title:"Blog"},"Blog"),i.a.createElement(ve.Link,{className:"ml-2",as:me.Link,to:"/contact",title:"Contact"},"Contact"),i.a.createElement(ve.Link,{title:"GitHub",href:"https://github.com/schwabthedeck",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z",fill:"currentColor"}))),i.a.createElement(ve.Link,{title:"Buy Me A Coffee",href:"https://www.buymeacoffee.com/schwabthedeck",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M6 2.5C5.44772 2.5 5 2.94772 5 3.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V3.5C7 2.94772 6.55228 2.5 6 2.5Z",fill:"currentColor"}),i.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13 21.5C15.973 21.5 18.441 19.3377 18.917 16.5H19C21.2091 16.5 23 14.7091 23 12.5C23 10.2909 21.2091 8.5 19 8.5V7.5H1V15.5C1 18.8137 3.68629 21.5 7 21.5H13ZM3 9.5V15.5C3 17.7091 4.79086 19.5 7 19.5H13C15.2091 19.5 17 17.7091 17 15.5V9.5H3ZM21 12.5C21 13.6046 20.1046 14.5 19 14.5V10.5C20.1046 10.5 21 11.3954 21 12.5Z",fill:"currentColor"}),i.a.createElement("path",{d:"M9 3.5C9 2.94772 9.44771 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5V3.5Z",fill:"currentColor"}),i.a.createElement("path",{d:"M14 2.5C13.4477 2.5 13 2.94772 13 3.5V5.5C13 6.05228 13.4477 6.5 14 6.5C14.5523 6.5 15 6.05228 15 5.5V3.5C15 2.94772 14.5523 2.5 14 2.5Z",fill:"currentColor"})))))))},he=function(){return i.a.createElement(o.a,{fluid:!0,className:"footer px-0"},i.a.createElement(z,{bg:"dark",variant:"dark"},i.a.createElement(z.Brand,{className:"nav-links"},"© 2020, Built with"," ",i.a.createElement("a",{title:"Gatsby",href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")),i.a.createElement(z.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},i.a.createElement(ve,{className:"pr-3 mr-4 nav-links"},i.a.createElement(ve.Link,{as:me.Link,to:"/",title:"Home"},"Home"),i.a.createElement(ve.Link,{as:me.Link,to:"/blog",title:"Latest Posts"},"Latest Posts"),i.a.createElement(ve.Link,{title:"GitHub repository",href:"https://github.com/schwabthedeck",target:"_blank",rel:"noopener noreferrer"},"GitHub"),i.a.createElement(ve.Link,{title:"Buy Me A Coffee",href:"https://www.buymeacoffee.com/schwabthedeck",target:"_blank",rel:"noopener noreferrer"},"Buy Me A Coffee")))))};n("q4sD"),n("8ypT"),n("dJPS"),t.a=function(e){var t=e.children,n=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(be,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"63px auto 0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",minHeight:"90vh"}},i.a.createElement("main",{className:"pt-3 pb-3"},t)),i.a.createElement(he,null))}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,i=!1;try{var o={get passive(){return a=!0},get once(){return i=a=!0}};r.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(s){}var c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!i){var o=r.once,c=r.capture,l=n;!i&&o&&(l=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=l),e.addEventListener(t,l,a?r:c)}e.addEventListener(t,n,r)};var l=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){l(e,t,n,r)}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("xfY5"),n("rE2o"),n("ioFf");var r=n("wx14"),a=n("zLVn"),i=n("q1tI");n("Tze0"),n("8+KV"),n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t){return Object.keys(t).reduce((function(n,l){var s,u=n,f=u[o(l)],d=u[l],p=Object(a.a)(u,[o(l),l].map(c)),v=t[l],m=function(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],c=a[1],l=void 0!==e,s=r.current;return r.current=l,!l&&s&&o!==t&&c(t),[l?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,f,e[v]),b=m[0],h=m[1];return Object(r.a)({},p,((s={})[l]=b,s[v]=h,s))}),e)}n("hHhE"),n("f3/d"),n("dI71"),n("94VI")},K9S6:function(e,t,n){"use strict";n("8+KV"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,i.default)(r)};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,c=function(e,t,n,r){var a=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Qg85:function(e,t,n){"use strict";n("0l/t"),n("DNiP");t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=(n("pIFo"),/-(.)/g);var l=n("q1tI"),s=n.n(l),u=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,i=n.displayName,c=void 0===i?f(e):i,l=n.Component,d=n.defaultProps,p=s.a.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,f=t.as,d=void 0===f?l||"div":f,p=Object(a.a)(t,["className","bsPrefix","as"]),v=Object(u.a)(c,e);return s.a.createElement(d,Object(r.a)({ref:n,className:o()(i,v)},p))}));return p.defaultProps=d,p.displayName=c,p}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("2Spj");var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dJPS:function(e,t,n){},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},dbZe:function(e,t,n){"use strict";n("Tze0");var r=n("wx14"),a=n("zLVn"),i=n("q1tI"),o=n.n(i),c=n("Qg85");function l(e){return!e||"#"===e.trim()}var s=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,s=e.disabled,u=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(s||l(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return l(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),s&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.a.createElement(i,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));s.displayName="SafeAnchor",t.a=s},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Jane Schwab\'s Portfolio Site"}}}}')},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},pvIh:function(e,t,n){"use strict";n("2Spj"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var c=a||"<<anonymous>>",l=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),f=6;f<s;f++)u[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},q4sD:function(e,t,n){},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("f3/d"),n("wx14");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=commons-c95f645e7b2feba4f4b5.js.map