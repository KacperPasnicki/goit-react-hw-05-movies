"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{776:function(e,t,n){n.d(t,{Bt:function(){return p},DD:function(){return i},d5:function(){return l},on:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(44),s="32592fc1c467ab313147df8555d6672d",o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},884:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(885),a=n(731),u=n(184),c=function(e){var t=e.setSearchValue;return(0,u.jsx)("header",{className:"Searchbar",children:(0,u.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[(0,u.jsx)("label",{children:(0,u.jsx)("input",{className:"SearchForm-input",name:"inputValue",type:"text",placeholder:"Search movies and TV shows"})}),(0,u.jsx)("label",{children:(0,u.jsx)("button",{className:"SearchForm-button",type:"submit",children:"\u21d2"})})]})})},s=n(982),o=n(791),i=n(776),l=n(689),p=function(e){var t=e.movies,n=(0,l.TH)();if(t)return(0,u.jsx)("ul",{className:"MovieGallery",children:t.map((function(e){return(0,u.jsx)("li",{className:"MovieItem",id:e.id,children:(0,u.jsx)(a.OL,{to:"".concat(e.id),state:{from:n},className:"Links",children:e.title})},e.id)}))})},f=function(){var e,t=(0,a.lr)(),n=(0,r.Z)(t,2),l=n[0],f=n[1],h=function(e){var t=(0,o.useState)(),n=(0,r.Z)(t,2),a=n[0],u=n[1];return(0,o.useEffect)((function(){""!==e&&(0,i.on)(e).then((function(e){u((0,s.Z)(e.results))}))}),[e]),{movies:a}}(null!==(e=l.get("query"))&&void 0!==e?e:""),m=h.movies;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{setSearchValue:function(e){e.preventDefault();var t=e.currentTarget,n=e.target.elements.inputValue.value.toLowerCase();f({query:t.elements.inputValue.value.toLowerCase()}),console.log(n),t.reset()}}),(0,u.jsx)(p,{movies:m})]})}}}]);
//# sourceMappingURL=884.7a5abff4.chunk.js.map