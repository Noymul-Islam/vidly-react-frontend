(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e){e.exports={}},31:function(e,t,a){},43:function(e,t,a){e.exports=a(95)},48:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),c=(a(48),a(3)),l=a(4),i=a(6),u=a(5),m=a(7),p=(a(31),a(13)),d=a(29),h=a(2),v=a.n(h),f=a(12),b=a(17),g=a.n(b),y=a(19);var E={init:function(){},log:function(e){console.error(e)}};g.a.defaults.baseURL="https://cryptic-retreat-13926.herokuapp.com/api",g.a.interceptors.response.use(null,function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log("Logging ther error",e),E.log(e),Object(y.toast)("An unexpected error occured")),Promise.reject(e)});var k={get:g.a.get,post:g.a.post,put:g.a.put,delete:g.a.delete,setJwt:function(e){g.a.defaults.headers.common["x-auth-token"]=e}},j=(a(27),"/movies");function O(e){return"".concat(j,"/").concat(e)}function w(e){return k.get(O(e))}function S(e){if(e._id){var t=Object(p.a)({},e);return delete t._id,k.put(O(e._id),t)}return k.post(j,e)}var C=a(15),N=a.n(C),x=function(e){var t=e.itemCount,a=e.pageSize,n=e.onPageChange,o=e.currentPage,s=Math.ceil(t/a);if(1===s)return null;var c=N.a.range(1,s+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map(function(e){return r.a.createElement("li",{key:e,className:o===e?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){n(e)}},e))})))};var I=function(e){var t=e.items,a=e.textProperty,n=e.valueProperty,o=e.onItemSelect,s=e.selectedItem;return r.a.createElement("ul",{className:"list-group"},t.map(function(e){return r.a.createElement("li",{key:e[n],onClick:function(){o(e)},style:{cursor:"pointer"},className:e===s?"list-group-item active":"list-group-item"},e[a])}))};function P(){return k.get("/genres")}var R=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{className:t,style:{cursor:"pointer"},onClick:e.onClick,"area-hidden":"true"})},_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).raiseSort=function(e){var t=Object(p.a)({},a.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="asc"),a.props.onSort(t)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderSortIcon",value:function(e){var t=this.props.sortColumn;return e.path!==t.path?null:"asc"===t.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})}},{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",{key:1},this.props.columns.map(function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){e.raiseSort(t.path)}},t.label,e.renderSortIcon(t))})))}}]),t}(n.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderCell",value:function(e,t){return t.content?t.content(e):N.a.get(e,t.path)}},{key:"createKey",value:function(e,t){return e._id+(t.path||t.key)}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map(function(t){return r.a.createElement("tr",{key:t._id},n.map(function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))}))}))}}]),t}(n.Component),D=function(e){var t=e.columns,a=e.sortColumn,n=e.data,o=e.onSort;return r.a.createElement("table",{className:"table"},r.a.createElement(_,{columns:t,sortColumn:a,onSort:o}),r.a.createElement(M,{data:n,columns:t}))},A=a(87),G=a(42),L=a.n(G),T="/auth",q="token";function U(){return(U=Object(f.a)(v.a.mark(function e(t,a){var n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(T,{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem(q,r);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function F(){return localStorage.getItem(q)}k.setJwt(F());var J={login:function(e,t){return U.apply(this,arguments)},logout:function(){localStorage.removeItem(q)},getCurrentUser:function(){try{var e=localStorage.getItem(q);return L()(e)}catch(t){return null}},loginWithJwt:function(e){localStorage.setItem(q,e)},getJwt:F},z=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(A.a,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(R,{liked:t.liked,onClick:function(){e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){e.props.onDelete(t)}},"Delete")}};var a=J.getCurrentUser();return a&&a.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.sortColumn,n=e.onSort;return r.a.createElement(D,{data:t,columns:this.columns,onSort:n,sortColumn:a})}}]),t}(n.Component),Q=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"... Search",value:t,onChange:function(e){return a(e.currentTarget.value)}})},W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(){var e=Object(f.a)(v.a.mark(function e(t){var n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.movies,r=n.filter(function(e){return e._id!==t._id}),a.setState({movies:r}),e.prev=3,e.next=6,o=t._id,k.delete(O(o));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.respone&&404===e.t0.response.status&&(y.toast.error("This movie has already been deleted"),a.setState({movies:n}));case 11:case"end":return e.stop()}var o},e,this,[[3,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handlePageChange=function(e){a.setState({currentPage:e})},a.handleLike=function(e){var t=Object(d.a)(a.state.movies),n=t.indexOf(e);t[n]=Object(p.a)({},e),t[n].liked=!t[n].liked,a.setState({movies:t})},a.handleGenreSelect=function(e){console.log(e),a.setState({selectedGenre:e,searchQuery:"",currentPage:1})},a.handleSort=function(e){a.setState({sortColumn:e})},a.getPagedData=function(){var e=a.state,t=e.pageSize,n=e.currentPage,r=e.sortColumn,o=e.movies,s=(e.selectedItem,e.searchQuery),c=e.selectedGenre,l=o;s?l=o.filter(function(e){return e.title.toLowerCase().startsWith(s.toLowerCase())}):c&&c._id&&(l=o.filter(function(e){return e.genre._id===c._id}));var i=function(e,t,a){var n=(t-1)*a;return N()(e).slice(n).take(a).value()}(N.a.orderBy(l,[r.path],[r.order]),n,t);return{totalCount:l.length,data:i}},a.handleSearch=function(e){a.setState({searchQuery:e,selectedGenre:null,currentPage:1})},a.state={movies:[],currentPage:1,pageSize:4,genres:[],selectedGenre:null,searchQuery:"",sortColumn:{path:"title",order:"asc"}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t,a,n,r,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return t=e.sent,a=t.data,n=[{_id:"",name:"All Genres"}].concat(Object(d.a)(a)),e.next=7,k.get(j);case 7:r=e.sent,o=r.data,this.setState({movies:o,genres:n});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies.length,t=this.props.user,a=this.state,n=a.pageSize,o=a.currentPage,s=a.sortColumn,c=a.searchQuery;if(0===e)return r.a.createElement("p",null,"There is no movie in the database");var l=this.getPagedData(),i=l.totalCount,u=l.data;return r.a.createElement("main",null,r.a.createElement("div",{className:"row m-4"},r.a.createElement("div",{className:"col-3"},r.a.createElement(I,{items:this.state.genres,textProperty:"name",valueProperty:"_id",onItemSelect:this.handleGenreSelect,selectedItem:this.state.selectedItem})),r.a.createElement("div",{className:"col"},t&&r.a.createElement(A.a,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20}},"New Movie"),r.a.createElement("p",null,"Showing ",i," movies from database"),r.a.createElement(Q,{value:c,onChange:this.handleSearch}),r.a.createElement(z,{movies:u,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort,sortColumn:s}),r.a.createElement(x,{itemCount:i,pageSize:n,onPageChange:this.handlePageChange,currentPage:o}))))}}]),t}(n.Component),B=a(100),V=a(96),K=a(99),H=function(e){return r.a.createElement("h1",null,"Hello Customers")},$=function(e){return r.a.createElement("h1",null,"Rentals")},X=function(e){return r.a.createElement("h1",null,"Not Found")},Y=a(97),Z=function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(A.a,{className:"navbar-brand",to:"#"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(Y.a,{className:"nav-item nav-link",to:"/movies"},"Movies ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(Y.a,{className:"nav-item nav-link",to:"/customers"},"Customers"),r.a.createElement(Y.a,{className:"nav-item nav-link",to:"/rentals"},"Rentals"),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{className:"nav-item nav-link",to:"/login"},"Login"),r.a.createElement(Y.a,{className:"nav-item nav-link",to:"/register"},"Register")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{className:"nav-item nav-link",to:"/profile"},t.name),r.a.createElement(Y.a,{className:"nav-item nav-link",to:"/logout"},"Logout")))))},ee=a(9),te=a.n(ee),ae=a(21),ne=a(20),re=function(e){var t=e.name,a=e.label,n=e.error,o=Object(ne.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},o,{autoFocus:!0,id:t,name:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},oe=function(e){var t=e.name,a=e.label,n=e.options,o=e.error,s=Object(ne.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},s,{className:"form-control"}),r.a.createElement("option",{value:"Select movie"}),n.map(function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)})),o&&r.a.createElement("div",{className:"alert alert-danger"},o))},se=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:{},errors:{}},a.validate=function(){var e=te.a.validate(a.state.data,a.schema,{abortEarly:!1}).error;if(!e)return null;var t={},n=!0,r=!1,o=void 0;try{for(var s,c=e.details[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var l=s.value;t[l.path[0]]=l.message}}catch(i){r=!0,o=i}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return t},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();a.setState({errors:t||{}}),t||a.doSubmit()},a.validateProperty=function(e){var t=e.name,n=e.value,r=Object(ae.a)({},t,n),o=Object(ae.a)({},t,a.schema[t]),s=te.a.validate(r,o).error;return s?s.details[0].message:null},a.handleChange=function(e){var t=e.currentTarget,n=Object(p.a)({},a.state.errors),r=a.validateProperty(t);r?n[t.name]=r:delete n[t.name];var o=Object(p.a)({},a.state.data);o[t.name]=t.value,a.setState({data:o,errors:n})},a.renderbutton=function(e){return r.a.createElement("button",{disabled:a.validate(),className:"btn btn-primary"},e)},a.renderInput=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",o=a.state,s=o.data,c=o.errors;return r.a.createElement(re,{name:e,type:n,value:s[e],label:t,onChange:a.handleChange,error:c[e]})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderSelect",value:function(e,t,a){var n=this.state,o=n.data,s=n.errors;return r.a.createElement(oe,{name:e,value:o[e],label:t,options:a,onChange:this.handleChange,error:s[e]})}}]),t}(n.Component),ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},a.schema={_id:te.a.string(),title:te.a.string().required().label("Title"),genreId:te.a.string().required().label("Genre"),numberInStock:te.a.string().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:te.a.string().required().min(0).max(10).label("Daily Rental Rate")},a.doSubmit=Object(f.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(a.state.data);case 2:a.props.history.push("/movies");case 3:case"end":return e.stop()}},e,this)})),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"populateGenres",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,a=t.data,this.setState({genres:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"populateMovies",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t,a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,w(t);case 6:a=e.sent,n=a.data,this.setState({data:this.mapToViewModel(n)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovies();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number In Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderbutton("Save")))}}]),t}(se),le=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).username=r.a.createRef(),a.state={data:{username:"",password:""},errors:{}},a.schema={username:te.a.string().required().label("Uername"),password:te.a.string().required().label("Password")},a.doSubmit=Object(f.a)(v.a.mark(function e(){var t,n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state.data,e.next=4,J.login(t.username,t.password);case 4:n=a.props.location.state,window.location=n?n.from.pathname:"/movies",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((r=Object(p.a)({},a.state.errors)).username=e.t0.response.data,a.setState({errors:r}));case 11:case"end":return e.stop()}},e,this,[[0,8]])})),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return J.getCurrentUser()?r.a.createElement(K.a,{to:"/movies"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login complete"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderbutton("Login")))}}]),t}(se),ie=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){J.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),t}(n.Component),ue=function(e){e.path;var t=e.component,a=e.render,n=Object(ne.a)(e,["path","component","render"]);return r.a.createElement(V.a,Object.assign({},n,{render:function(e){return J.getCurrentUser()?t?r.a.createElement(t,e):a(e):r.a.createElement(K.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},me="/users";var pe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:"",name:""},errors:{}},a.schema={username:te.a.string().required().email().label("Username"),password:te.a.string().required().min(5).label("Password"),name:te.a.string().required().label("Name")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"doSubmit",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=this.state.data,k.post(me,{email:n.username,password:n.password,name:n.name});case 3:t=e.sent,J.loginWithJwt(t.headers["x-auth-token"]),window.location="/movies",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((a=Object(p.a)({},this.state.errors)).username=e.t0.response.data,this.setState({errors:a}));case 11:case"end":return e.stop()}var n},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Registration Information"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("name","Name"),",",this.renderInput("username","UserName"),this.renderInput("password","Password"),",",this.renderbutton("Register")))}}]),t}(se),de=(a(89),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=J.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this;this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.ToastContainer,null),r.a.createElement(Z,{user:this.state.user}),r.a.createElement("main",{className:"container"},r.a.createElement(B.a,null,r.a.createElement(V.a,{path:"/register",component:pe}),r.a.createElement(V.a,{path:"/login",component:le}),r.a.createElement(V.a,{path:"/logout",component:ie}),r.a.createElement(ue,{path:"/movies/:id",component:ce}),r.a.createElement(V.a,{path:"/movies",render:function(t){return r.a.createElement(W,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(V.a,{path:"/customers",component:H}),r.a.createElement(V.a,{path:"/rentals",component:$}),r.a.createElement(V.a,{path:"/not-found",component:X}),r.a.createElement(K.a,{from:"/",exact:!0,to:"/login"}),r.a.createElement(K.a,{to:"/not-found"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91),a(93);var he=a(98);s.a.render(r.a.createElement(he.a,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.74090b1e.chunk.js.map