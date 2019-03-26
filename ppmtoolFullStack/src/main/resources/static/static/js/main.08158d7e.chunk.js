(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(69)},41:function(e,t,a){},42:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),i=(a(41),a(3)),s=a(4),l=a(6),m=a(5),d=a(7),p=(a(42),a(71)),u=a(11),h=a(13),f=a.n(h),v=a(16),j=a(17),E=a.n(j),b=function(e,t){return function(){var a=Object(v.a)(f.a.mark(function a(n){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("/api/project",e);case 3:a.sent,t.push("/dashboard"),n({type:"GET_ERRORS",payload:{}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),n({type:"GET_ERRORS",payload:a.t0.response.data});case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.project;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card card-body bg-light mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),r.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},r.a.createElement("h3",null,e.projectName),r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("a",{href:"#"},r.a.createElement("li",{className:"list-group-item board"},r.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),r.a.createElement(p.a,{to:"/updateProject/".concat(e.projectIdentifier)},r.a.createElement("li",{className:"list-group-item update"},r.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),r.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},r.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project")))))))}}]),t}(n.Component),N=Object(u.b)(null,{deleteProject:function(e){return function(){var t=Object(v.a)(f.a.mark(function t(a){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.delete("/api/project/".concat(e));case 2:a({type:"DELETE_PROJECT",payload:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(g),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return r.a.createElement("div",{className:"projects"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"display-4 text-center"},"Projects"),r.a.createElement("br",null),r.a.createElement(O,null),r.a.createElement("br",null),r.a.createElement("hr",null),e.map(function(e){return r.a.createElement(N,{key:e.id,project:e})})))))}}]),t}(n.Component),k=Object(u.b)(function(e){return{project:e.project}},{getProjects:function(){return function(){var e=Object(v.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/project/all");case 2:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(y),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"Dashboard.html"},"Personal Project Management Tool"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/dashboard"},"Dashboard"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link ",href:"register.html"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"login.html"},"Login"))))))}}]),t}(n.Component),C=(a(67),a(73)),_=a(72),P=a(15),S=a(8),x=a(14),I=a.n(x),D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(S.a)(Object(S.a)(e))),e.onSubmit=e.onSubmit.bind(Object(S.a)(Object(S.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&r.a.createElement("div",{className:"invalid-feedback"},e.projectName)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&r.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:I()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&r.a.createElement("div",{className:"invalid-feedback"},e.description)),r.a.createElement("h6",null,"Start Date"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),r.a.createElement("h6",null,"Estimated End Date"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}]),t}(n.Component),T=Object(u.b)(function(e){return{errors:e.errors}},{createProject:b})(D),R=a(10),J=a(34),U={},G=a(19),L={projects:[],project:{}},W=Object(R.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(G.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(G.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(G.a)({},e,{projects:e.projects.filter(function(e){return e.projectIdentifier!==t.payload})});default:return e}}}),A={},X=[J.a],B=window.navigator.userAgent.includes("Chrome")?Object(R.e)(W,A,Object(R.d)(R.a.apply(void 0,X),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())):Object(R.e)(W,A,Object(R.d)(R.a.apply(void 0,X))),M=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(S.a)(Object(S.a)(e))),e.onSubmit=e.onSubmit.bind(Object(S.a)(Object(S.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,n=t.projectName,r=t.projectIdentifier,c=t.description,o=t.start_date,i=t.end_date;this.setState({id:a,projectName:n,projectIdentifier:r,description:c,start_date:o,end_date:i})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&r.a.createElement("div",{className:"invalid-feedback"},e.projectName)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:I()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",onChange:this.onChange,value:this.state.description}),e.description&&r.a.createElement("div",{className:"invalid-feedback"},e.description)),r.a.createElement("h6",null,"Start Date"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),r.a.createElement("h6",null,"Estimated End Date"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(n.Component),q=Object(u.b)(function(e){return{project:e.project.project,errors:e.errors}},{getProject:function(e,t){return function(){var a=Object(v.a)(f.a.mark(function a(n){var r;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.get("/api/project/".concat(e));case 3:r=a.sent,n({type:"GET_PROJECT",payload:r.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}},a,null,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},createProject:b})(M),V=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{store:B},r.a.createElement(C.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(_.a,{exact:!0,path:"/dashboard",component:k}),r.a.createElement(_.a,{exact:!0,path:"/addProject",component:T}),r.a.createElement(_.a,{exact:!0,path:"/updateProject/:id",component:q}))))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(V,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");F?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Q(e)})}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.08158d7e.chunk.js.map