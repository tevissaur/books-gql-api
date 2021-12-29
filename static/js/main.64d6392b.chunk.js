(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,a,t){e.exports=t(118)},108:function(e,a,t){},118:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(41),m=t.n(u),d=(t(107),t(108),t(60)),b=t(13),p=t(119),g=t(138),v=t(134),k=t(48),E=t(20),f=t.n(E),h=t(35),w=t(11),O=t(128),j=t(129),S=t(137),y=t(94),I=t(130),x=t(131),C=t(142),_=t(49),B=t(136),$=Object(B.a)(n||(n=Object(_.a)(["\n    mutation CreateUser($username: String!, $email: String!, $password: String!) {\n        createUser(username: $username, email: $email, password: $password) {\n        token\n        user {\n            _id\n            username\n            email\n            password\n            }\n        }\n    }\n\n"]))),F=Object(B.a)(r||(r=Object(_.a)(["\n    mutation Login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n        token\n        user {\n            _id\n            username\n            email\n            password\n        }\n        }   \n    }\n"]))),T=Object(B.a)(o||(o=Object(_.a)(["\n    mutation SaveBook($_id: ID!, $book: BookInput!) {\n        saveBook(_id: $_id, book: $book) {\n            username\n            savedBooks {\n                title\n            }\n        }   \n    }\n"]))),L=Object(B.a)(l||(l=Object(_.a)(["\n    mutation DeleteBook($_id: ID!, $bookId: String!) {\n        deleteBook(_id: $_id, bookId: $bookId) {\n            savedBooks {\n                title\n            }\n        }\n    }\n"]))),q=t(123),N=t(22),D=t(23),P=t(84),G=t.n(P),U=new(function(){function e(){Object(N.a)(this,e)}return Object(D.a)(e,[{key:"getProfile",value:function(){return G()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return G()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),V=function(e){e.length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")},Y=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},J=function(){var e=Object(i.useState)([]),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(w.a)(r,2),l=o[0],c=o[1],u=Object(q.a)(T),m=Object(w.a)(u,1)[0],d=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),b=Object(w.a)(d,2),p=b[0],g=b[1];Object(i.useEffect)((function(){return function(){return V(p)}}));var v=function(){var e=Object(h.a)(f.a.mark((function e(a){var t,r,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=Object(h.a)(f.a.mark((function e(a){var n,r,o,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a),n=t.find((function(e){return e.bookId===a})),console.log(n),r=U.getProfile(),o=r.data._id,console.log(o),U.loggedIn()?U.getToken():null){e.next=8;break}return e.abrupt("return",!1);case 8:return e.prev=8,e.next=11,m({variables:{_id:o,book:n}});case 11:l=e.sent,console.log(l,"gql query"),g([].concat(Object(k.a)(p),[n.bookId])),V(p),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(j.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(S.a,{onSubmit:v},s.a.createElement(S.a.Row,null,s.a.createElement(y.a,{xs:12,md:8},s.a.createElement(S.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(y.a,{xs:12,md:4},s.a.createElement(I.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(j.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(x.a,null,t.map((function(e){return s.a.createElement(C.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(C.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(C.a.Body,null,s.a.createElement(C.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(C.a.Text,null,e.description),U.loggedIn()&&s.a.createElement(I.a,{disabled:null===p||void 0===p?void 0:p.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return E(e.bookId)}},(null===p||void 0===p?void 0:p.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},K=Object(B.a)(c||(c=Object(_.a)(["\n    query GetMe($_id: ID!) {\n        me(_id: $_id) {\n            username\n            savedBooks {\n                title\n                description\n                image\n                bookId\n                authors\n            }\n        }\n    }\n"]))),A=t(132),M=function(){var e=U.getProfile().data._id,a=Object(A.a)(K,{variables:{_id:e}}),t=a.loading,n=a.data;(0,a.refetch)();var r=Object(q.a)(L),o=Object(w.a)(r,1)[0],l=(null===n||void 0===n?void 0:n.me)||{},c=function(){var a=Object(h.a)(f.a.mark((function a(t){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(U.loggedIn()?U.getToken():null){a.next=3;break}return a.abrupt("return",!1);case 3:return a.prev=3,a.next=6,o({variables:{_id:e,bookId:t}});case 6:a.sent,Y(t),window.location.assign("/saved"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),console.error(a.t0);case 14:case"end":return a.stop()}}),a,null,[[3,11]])})));return function(e){return a.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(j.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(j.a,null,t?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,l.savedBooks.length?"Viewing ".concat(l.savedBooks.length," saved ").concat(1===l.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(x.a,null,l.savedBooks.map((function(e){return s.a.createElement(C.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(C.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(C.a.Body,null,s.a.createElement(C.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(C.a.Text,null,e.description),s.a.createElement(I.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)}},"Delete this Book!")))}))))))},z=t(140),H=t(139),R=t(135),W=t(141),Q=t(55),X=t(58),Z=t(133),ee=function(){var e=Object(q.a)($),a=Object(w.a)(e,1)[0],t=Object(i.useState)({username:"",email:"",password:""}),n=Object(w.a)(t,2),r=n[0],o=n[1],l=Object(i.useState)(!1),c=Object(w.a)(l,1)[0],u=Object(i.useState)(!1),m=Object(w.a)(u,2),d=m[0],b=m[1],p=function(e){var a=e.target,t=a.name,n=a.value;o(Object(X.a)(Object(X.a)({},r),{},Object(Q.a)({},t,n)))},g=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,a({variables:r});case 6:n=e.sent,l=n.data.createUser.token,U.login(l),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),b(!0);case 15:o({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(S.a,{noValidate:!0,validated:c,onSubmit:g},s.a.createElement(Z.a,{dismissible:!0,onClose:function(){return b(!1)},show:d,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(S.a.Group,null,s.a.createElement(S.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(S.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:p,value:r.username,required:!0}),s.a.createElement(S.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(S.a.Group,null,s.a.createElement(S.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(S.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:p,value:r.email,required:!0}),s.a.createElement(S.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(S.a.Group,null,s.a.createElement(S.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(S.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:r.password,required:!0}),s.a.createElement(S.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(I.a,{disabled:!(r.username&&r.email&&r.password),type:"submit",variant:"success"},"Submit")))},ae=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(w.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(w.a)(l,2),u=c[0],m=c[1],d=Object(q.a)(F),b=Object(w.a)(d,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(X.a)(Object(X.a)({},t),{},Object(Q.a)({},r,o)))},g=function(){var e=Object(h.a)(f.a.mark((function e(a){var r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:t});case 6:r=e.sent,o=r.data.login.token,U.login(o),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(S.a,{noValidate:!0,validated:o,onSubmit:g},s.a.createElement(Z.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(S.a.Group,null,s.a.createElement(S.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(S.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(S.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(S.a.Group,null,s.a.createElement(S.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(S.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(S.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(I.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},te=function(){var e=Object(i.useState)(!1),a=Object(w.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(z.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(j.a,{fluid:!0},s.a.createElement(z.a.Brand,{as:d.b,to:"/"},"Google Books Search"),s.a.createElement(z.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(z.a.Collapse,{id:"navbar"},s.a.createElement(H.a,{className:"ml-auto"},s.a.createElement(H.a.Link,{as:d.b,to:"/"},"Search For Books"),U.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(H.a.Link,{as:d.b,to:"/saved"},"See Your Books"),s.a.createElement(H.a.Link,{onClick:U.logout},"Logout")):s.a.createElement(H.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(R.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(W.a.Container,{defaultActiveKey:"login"},s.a.createElement(R.a.Header,{closeButton:!0},s.a.createElement(R.a.Title,{id:"signup-modal"},s.a.createElement(H.a,{variant:"pills"},s.a.createElement(H.a.Item,null,s.a.createElement(H.a.Link,{eventKey:"login"},"Login")),s.a.createElement(H.a.Item,null,s.a.createElement(H.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(R.a.Body,null,s.a.createElement(W.a.Content,null,s.a.createElement(W.a.Pane,{eventKey:"login"},s.a.createElement(ae,{handleModalClose:function(){return n(!1)}})),s.a.createElement(W.a.Pane,{eventKey:"signup"},s.a.createElement(ee,{handleModalClose:function(){return n(!1)}})))))))},ne=new p.a({uri:"/graphql",cache:new g.a});var re=function(){return s.a.createElement(v.a,{client:ne},s.a.createElement(d.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(te,null),s.a.createElement(b.c,null,s.a.createElement(b.a,{exact:!0,path:"/",component:J}),s.a.createElement(b.a,{exact:!0,path:"/saved",component:M}),s.a.createElement(b.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(re,null)),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.64d6392b.chunk.js.map