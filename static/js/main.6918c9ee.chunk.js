(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a(202)},109:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(52),o=a.n(c),i=(a(109),a(7)),s=a(8),l=a(10),u=a(9),p=a(11),h=a(20),m=a(13),d=a(24),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-4"},r.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Portal"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(h.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/staff"},"Staff")))))}}]),t}(n.Component),v=a(3),b=a.n(v),E=a(18),k=Object(d.withAuth)(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:null},a.checkAuthentication=Object(E.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.auth.isAuthenticated();case 2:(t=e.sent)!==a.state.authenticated&&a.setState({authenticated:t});case 4:case"end":return e.stop()}},e)})),a.login=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.auth.login("/");case 1:case"end":return e.stop()}},e)})),a.logout=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.auth.logout("/");case 1:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(null===this.state.authenticated)return null;var e=this.state.authenticated?r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"You have entered the staff portal, ",r.a.createElement(h.b,{to:"/staff"},"Click Here")),r.a.createElement("button",{className:"btn btn-light btn-lg",onClick:this.logout},"Logout")):r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"If you are a staff, get your credentials from your supervisor "),r.a.createElement("button",{className:"btn btn-dark btn-lg",onClick:this.login},"Login"));return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Portal"),e)}}]),t}(n.Component)),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,people:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://reqres.in/api/login",e.next=3,fetch("https://reqres.in/api/login");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({people:a.data,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading||!this.state.people?r.a.createElement("div",null,"loading..."):r.a.createElement("div",null,r.a.createElement("ul",null,this.state.people.map(function(e,t){return r.a.createElement("li",{key:e.name+e.year},"Name: ",e.name," Year: ",e.year," | Color:"," ",e.color," | Pantone value: ",e.pantone_value)})),r.a.createElement("div",null)))}}]),t}(n.Component),j=a(103),O=a.n(j),w=(a(200),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=o.a.findDOMNode(this);this.widget=new O.a({baseUrl:this.props.baseUrl}),this.widget.renderEl({el:e},this.props.onSuccess,this.props.onError)}},{key:"componentWillUnmount",value:function(){this.widget.remove()}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component)),y=Object(d.withAuth)(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSuccess=function(e){if("SUCCESS"===e.status)return a.props.auth.redirect({sessionToken:e.session.token})},a.onError=function(e){console.log("error logging in",e)},a.state={authenticated:null},a.checkAuthentication(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"checkAuthentication",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.auth.isAuthenticated();case 2:(t=e.sent)!==this.state.authenticated&&this.setState({authenticated:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.checkAuthentication()}},{key:"render",value:function(){return null===this.state.authenticated?null:this.state.authenticated?r.a.createElement(m.Redirect,{to:{pathname:"/"}}):r.a.createElement(w,{baseUrl:this.props.baseUrl,onSuccess:this.onSuccess,onError:this.onError})}}]),t}(n.Component));a(201);function N(e){e.history.push("/login")}var x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(d.Security,{issuer:"https://dev-387172.okta.com/oauth2/default",client_id:"0oawwzni2ivAyDAWJ356",redirect_uri:window.location.origin+"/implicit/callback",onAuthRequired:N},r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("div",{className:"container"},r.a.createElement(m.Route,{path:"/",exact:!0,component:k}),r.a.createElement(d.SecureRoute,{path:"/staff",exact:!0,component:g}),r.a.createElement(m.Route,{path:"/login",render:function(){return r.a.createElement(y,{baseUrl:"https://dev-387172.okta.com/"})}}),r.a.createElement(m.Route,{path:"/implicit/callback",component:d.ImplicitCallback})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[104,1,2]]]);
//# sourceMappingURL=main.6918c9ee.chunk.js.map