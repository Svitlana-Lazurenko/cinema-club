"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{672:function(e,n,t){t.d(n,{O:function(){return p}});var i,r,o,c=t(689),a=t(87),u=t(168),d=t(686),s=d.Z.div(i||(i=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),h=d.Z.div(r||(r=(0,u.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),l=d.Z.h3(o||(o=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),f=t(184),p=function(e){var n=e.movies,t=(0,c.TH)();return(0,f.jsx)(s,{children:n.map((function(e){return(0,f.jsx)(h,{children:(0,f.jsx)(a.rU,{to:"".concat(e.id),state:{from:t},children:(0,f.jsx)(l,{children:e.title})})},e.id)}))})}},544:function(e,n,t){t.r(n);var i=t(433),r=t(439),o=t(791),c=t(672),a=t(502),u=t(184),d="idle",s="pending",h="resolved",l="rejected";n.default=function(){var e=(0,o.useState)(d),n=(0,r.Z)(e,2),t=n[0],f=n[1],p=(0,o.useState)([]),v=(0,r.Z)(p,2),g=v[0],m=v[1],j=(0,o.useState)(null),x=(0,r.Z)(j,2),b=x[0],k=x[1];return(0,o.useEffect)((function(){f(s),a.Z.fetchTrendingMovies().then((function(e){if(0===e.results.length)return Promise.reject(new Error("Movies not found"));m((0,i.Z)(e.results)),f(h)})).catch((function(e){k(e),f(l)}))}),[]),"idle"===t?null:"pending"===t?(0,u.jsxs)("main",{children:[(0,u.jsx)("div",{children:"Loading..."}),";"]}):"rejected"===t?(0,u.jsx)("main",{children:(0,u.jsx)("div",{children:b.message})}):"resolved"===t?(0,u.jsx)("main",{children:(0,u.jsx)(c.O,{movies:g})}):void 0}},502:function(e,n){var t="df4f25ddce476816dc7867d9ac4bd1ea";var i={fetchTrendingMovies:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?include_adult=false&language=en-US&page=1&api_key=".concat(t)).then((function(e){return e.json()}))},fetchMoviesBySearch:function(e){return fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(e,"&api_key=").concat(t)).then((function(e){return e.json()}))},fetchMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US&api_key=").concat(t)).then((function(e){return e.json()}))},fetchMovieCast:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US&api_key=").concat(t)).then((function(e){return e.json()}))},fetchMovieReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1&api_key=").concat(t)).then((function(e){return e.json()}))}};n.Z=i}}]);
//# sourceMappingURL=544.48ecf060.chunk.js.map