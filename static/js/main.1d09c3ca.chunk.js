(this.webpackJsonpmonie_app=this.webpackJsonpmonie_app||[]).push([[0],{19:function(e,t,n){e.exports={movie:"Movie_movie__3GudN",movie__img:"Movie_movie__img__CehkF",movie__title:"Movie_movie__title__3oIXh",movie__year:"Movie_movie__year__2WLsT",movie__genres:"Movie_movie__genres__3HICd"}},20:function(e,t,n){e.exports={container:"Home_container__T1yqu",loader:"Home_loader__3NS1o",movies:"Home_movies__1ZYFP"}},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(22),r=n.n(i),s=n(12),a=n(2),o=n(3),j=n.n(o),m=n(6),v=n(5),u=n(19),d=n.n(u),l=n(4);var _=function(e){var t=e.id,n=e.coverImg,c=e.title,i=e.summary;return Object(l.jsxs)("div",{className:d.a.movie,children:[Object(l.jsx)("img",{src:n,alt:c,className:d.a.movie__img}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:d.a.movie__title,children:Object(l.jsx)(s.b,{to:"/movie/".concat(t),children:c})}),Object(l.jsx)("p",{children:i.length>235?"".concat(i.slice(0,235),"..."):i})]})]})},b=n(20),O=n.n(b);var x=function(){var e=Object(c.useState)(!0),t=Object(v.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(v.a)(r,2),a=s[0],o=s[1],u=function(){var e=Object(m.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n.data.movies),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(l.jsx)("div",{className:O.a.container,children:n?Object(l.jsx)("div",{className:O.a.loader,children:Object(l.jsx)("span",{children:"Loading..."})}):Object(l.jsx)("div",{className:O.a.movies,children:a.map((function(e){return Object(l.jsx)(_,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary},e.id)}))})})};var h=function(e){e.id;var t=e.coverImg,n=e.title,c=e.summary,i=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:t,alt:n}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("ul",{children:i.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})]})};var p=function(){var e=Object(a.o)().id,t=Object(c.useState)(!0),n=Object(v.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)([]),o=Object(v.a)(s,2),u=o[0],d=o[1],_=function(){var t=Object(m.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n.data.movie),d(n.data.movie),r(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){_()}),[]),Object(l.jsx)("div",{children:i?Object(l.jsx)("span",{children:"Loading..."}):Object(l.jsx)("div",{children:Object(l.jsx)(h,{id:u.id,coverImg:u.large_cover_image,title:u.title,summary:u.description_full,genres:u.genres})})})};var f=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"".concat("/cloneMovieApp","/"),element:Object(l.jsx)(x,{})}),Object(l.jsx)(a.a,{path:"/movie/:id",element:Object(l.jsx)(p,{})})]})})};n(29);r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.1d09c3ca.chunk.js.map