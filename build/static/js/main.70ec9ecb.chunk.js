(this.webpackJsonpbuynsell=this.webpackJsonpbuynsell||[]).push([[0],{48:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(15),a=n.n(c),s=n(6),i=n(12),o=(n(48),n(4)),l=n(2),u=n.n(l),d=n(3),j=n(7),b=n.n(j),p="http://localhost:3004/",f="https://buynsellimages.s3.eu-north-1.amazonaws.com/",h={info:function(){},error:function(){}},m="api/login/",O=(p="/")+m,g={auth:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(m,"Authenticating user:",t),e.next=4,b.a.post(O,t);case 4:return n=e.sent,h.info(m,"User authenticated",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(m,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},x=g,v="api/users/",N=p+v,w={getAll:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(v,"Fetching users"),e.next=4,b.a.get(N);case 4:return t=e.sent,h.info(v,"Users fetched",t),e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(v,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(v,"Creating user",t),e.next=4,b.a.post(N,t);case 4:return n=e.sent,h.info(v,"User created",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(v,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),getById:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(v,"Fetching user",t),e.next=4,b.a.get(N+t);case 4:return n=e.sent,h.info(v,"User fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(v,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(v,"Deleting user",t),e.next=4,b.a.delete(N+t);case 4:return n=e.sent,h.info(v,"User deleted",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(v,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(v,"Updating user",t,n),e.next=4,b.a.put("".concat(N).concat(t),n);case 4:return r=e.sent,h.info(v,"User updated",r),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(v,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},y=w,k=function(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(r){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:"RESET_NOTIFICATION"}),c=setTimeout((function(){r({type:"RESET_NOTIFICATION"})}),1e3*t),r({type:"DISPLAY_INFO",data:{message:e,timeout:c}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(r){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:"RESET_NOTIFICATION"}),c=setTimeout((function(){r({type:"RESET_NOTIFICATION"})}),1e3*t),r({type:"DISPLAY_ERROR",data:{message:e,timeout:c}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_INFO":return{type:"info",message:t.data.message,timeout:t.data.timeout};case"DISPLAY_ERROR":return{type:"error",message:t.data.message,timeout:t.data.timeout};case"RESET_NOTIFICATION":return e&&clearTimeout(e.timeout),null;default:return e}},L=function(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(r){var c,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={username:e,password:t},n.prev=1,n.next=4,x.auth(c);case 4:a=n.sent,window.localStorage.setItem("id",a.user.id),window.localStorage.setItem("token",a.token),r({type:"INIT_SESSION",data:a}),r(k("Successfully logged in!",5)),n.next=14;break;case 11:throw n.prev=11,n.t0=n.catch(1),n.t0;case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_SESSION":return t.data;case"END_SESSION":return null;default:return e}},E=n(13),T="api/listings/",U=p+T,A={getAll:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(T,"Fetching listings"),e.next=4,b.a.get(U);case 4:return t=e.sent,h.info(T,"Listings fetched",t),e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(T,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(T,"Creating listing",t),e.next=4,b.a.post(U,t,{headers:{Authorization:"Bearer "+n,"content-type":"multipart/form-data"}});case 4:return r=e.sent,h.info(T,"DetailedListing created",r),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(T,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),getById:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(T,"Fetching listing",t),e.next=4,b.a.get(U+t);case 4:return n=e.sent,h.info(T,"DetailedListing fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(T,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(T,"Deleting listing",t),e.next=4,b.a.delete(U+t,{headers:{Authorization:"Bearer "+n}});case 4:return r=e.sent,h.info(T,"DetailedListing deleted",r),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(T,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),search:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(T,"Fetching listings"),e.next=4,b.a.get(p+"api/search/"+t);case 4:return n=e.sent,h.info(T,"Listings fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(T,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),nearbyLocation:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(T,"Fetching listings"),e.next=4,b.a.get(p+"api/location/"+t);case 4:return n=e.sent,h.info(T,"Listings fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(T,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),nearbyCoords:function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(T,"Fetching listings"),e.next=4,b.a.get(p+"api/location/"+n+"/"+t);case 4:return r=e.sent,h.info(T,"Listings fetched",r),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(T,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(u.a.mark((function e(t,n,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(T,"Updating listing",t,n),e.next=4,b.a.put("".concat(U).concat(t),n,{headers:{Authorization:"Bearer "+r}});case 4:return c=e.sent,h.info(T,"DetailedListing updated",c),e.abrupt("return",c.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(T,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r){return e.apply(this,arguments)}}()},D=A,P={loading:!1,results:[]},R=function(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(r){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,r({type:"SET_SEARCH_LOADING"}),0!=e){n.next=14;break}if(!t){n.next=9;break}return n.next=6,D.search(t);case 6:c=n.sent,n.next=12;break;case 9:return n.next=11,D.getAll();case 11:c=n.sent;case 12:n.next=27;break;case 14:if(1!=e){n.next=20;break}return n.next=17,D.nearbyLocation(t);case 17:c=n.sent,n.next=27;break;case 20:if(2!=e){n.next=26;break}return n.next=23,D.nearbyCoords(t.longitude,t.latitude);case 23:c=n.sent,n.next=27;break;case 26:c=[];case 27:r({type:"SET_SEARCH_RESULTS",data:c}),n.next=34;break;case 30:n.prev=30,n.t0=n.catch(0),r({type:"SET_SEARCH_RESULTS",data:[]}),h.error("Search failed",n.t0);case 34:case"end":return n.stop()}}),n,null,[[0,30]])})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_RESULTS":return{loading:!1,results:t.data};case"SET_SEARCH_LOADING":return Object(E.a)(Object(E.a)({},e),{},{loading:!0});default:return e}},F=n(5),B=n.p+"static/media/loading2.add16cbb.gif",M=n(0),H=function(e){var t=e.children,n=e.loading,r=e.data;return Object(M.jsx)(M.Fragment,{children:n?Object(M.jsx)("div",{className:"loading-image-wrapper",children:Object(M.jsx)("img",{className:"loading-image",alt:"",src:B})}):r?t:null})};var q=function(e){var t=e.deleteListing;return Object(M.jsx)("button",{className:"btn btn-danger",id:"delete-listing-button",onClick:t,children:"Delete"})};function z(e){return e.length<=500?e:e.substring(0,497).concat("...")}var $=function(e){var t=e.listing,n=e.onClick,r=e.onHover,c=e.onDeleteListing;return t?Object(M.jsxs)("tr",{onClick:function(){return n(t)},className:"single-listing",onMouseEnter:function(){return r?r(t):null},children:[Object(M.jsx)("td",{children:Object(M.jsx)("img",{alt:"thumbnail",src:f+t.imageUrl,height:100,width:100})}),Object(M.jsx)("td",{children:Object(M.jsx)("div",{children:z(t.title)})}),Object(M.jsx)("td",{children:Object(M.jsx)("div",{children:t.price})}),Object(M.jsx)("td",{className:"listing-desc",children:Object(M.jsx)("div",{children:Object(M.jsx)("p",{children:z(t.desc)})})}),Object(M.jsx)("td",{className:"listing-desc",children:Object(M.jsx)("div",{children:t.location})}),Object(M.jsx)("td",{children:c?Object(M.jsx)(q,{deleteListing:function(e){return c(e,t)}}):null})]}):null};var Z=function(e){var t=e.listings,n=e.onClick,r=e.onHover,c=e.onDeleteListing;return t&&0!==t.length?Object(M.jsx)("table",{className:"table table-striped",children:Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{}),Object(M.jsx)("td",{children:Object(M.jsx)("b",{children:"Title"})}),Object(M.jsx)("td",{children:Object(M.jsx)("b",{children:"Price"})}),Object(M.jsx)("td",{className:"listing-desc",children:Object(M.jsx)("b",{children:"Description"})}),Object(M.jsx)("td",{className:"listing-desc",children:Object(M.jsx)("b",{children:"Location"})}),Object(M.jsx)("td",{})]}),t.map((function(e){return Object(M.jsx)($,{listing:e,onClick:n,onHover:r,onDeleteListing:c},e.id)}))]})}):Object(M.jsx)("div",{className:"no-result-wrapper",children:"No results!"})},Y=n(76),G=n(77),K=n(78),J=n(74),W=n(75);var V=function(e){var t=e.listing,n=e.onClick;return t&&t.coords?Object(M.jsx)("div",{className:"marker-wrapper"+t.id,children:Object(M.jsx)(J.a,{position:[t.coords.latitude,t.coords.longitude],eventHandlers:{click:function(){n&&n(t)}},children:Object(M.jsxs)(W.a,{className:"map-marker",eventHandlers:{click:function(){n&&n(t)}},interactive:!0,opacity:100,children:[Object(M.jsx)("img",{id:"img-set",alt:"No img",src:f+t.imageUrl,height:50,width:50}),Object(M.jsxs)("div",{children:[Object(M.jsx)("b",{children:t.title}),Object(M.jsx)("br",{}),t.location,Object(M.jsx)("br",{}),t.price," SEK"]})]})})}):null};var X=function(e){var t=e.center,n=e.listings,c=e.recommended,a=e.highlighted,s=e.height,i=e.onMarkerClick,o=t?[t.latitude,t.longitude]:[59.32462279908758,18.071380368487894];Object(r.useEffect)((function(){if(a){var e=document.getElementsByClassName("leaflet-marker-icon");if(e){var t=e[function(e){for(var t=0;t<n.length;t++)if(e.id===n[t].id)return t}(a)];t&&t.dispatchEvent(new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}))}}return function(){var e=document.getElementById("leaflet-map");e&&e.click()}}),[a,n]);var l=function(e){var t=e.coords,n=Object(Y.a)();return n.setView(t,n.getZoom()),null},u=function(e){if(e)return e[0]?e.map((function(e){return Object(M.jsx)(V,{listing:e,onClick:i},e.id)})):Object(M.jsx)(V,{listing:e,onClick:i})};return Object(M.jsxs)(G.a,{className:"map",id:"leaflet-map",style:{height:s},center:o,zoom:10,scrollWheelZoom:!1,children:[Object(M.jsx)(K.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(M.jsx)(l,{coords:o}),u(n),u(c)]})};var Q=function(){var e=Object(s.c)((function(e){return e.search})),t=e.results,n=e.loading,c=Object(r.useState)(null),a=Object(F.a)(c,2),i=a[0],l=a[1],u=Object(o.g)(),d=function(e){u("/listing/"+e.id)};return Object(r.useEffect)((function(){l(t[0]?t[0]:null)}),[t]),Object(M.jsxs)("div",{className:"search-result-wrapper",children:[Object(M.jsx)("div",{className:"search-map-wrapper",children:Object(M.jsx)(X,{listings:t,center:i?i.coords:null,highlighted:i,height:250,onMarkerClick:d})}),Object(M.jsx)("div",{className:"search-listing-wrapper",children:Object(M.jsx)(H,{loading:n,data:t,children:Object(M.jsx)(Z,{listings:t,onClick:d,onHover:function(e){l(e)}})})})]})};var ee=function(e){var t=e.user,n=e.onClick;return t?Object(M.jsx)("div",{className:n?"single-user user-clickable":"single-user",onClick:n?function(){return n(t)}:null,children:Object(M.jsx)("table",{className:n?"single-user-table table table-striped user-table-clickable":"single-user-table table table-striped",children:Object(M.jsxs)("tbody",{children:[Object(M.jsx)("tr",{className:"user-table-header",children:Object(M.jsx)("th",{colSpan:2,children:t.username})}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Name:"}),Object(M.jsxs)("td",{children:[t.name," "]})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Email:"}),Object(M.jsxs)("td",{children:[t.email," "]})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Phone Number:"}),Object(M.jsxs)("td",{children:[t.phone," "]})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Address:"}),Object(M.jsx)("td",{children:t.address})]})]})})}):null};n(69);var te=function(e){var t=e.listing,n=e.onClick;if(!t)return null;if(!t.coords)return null;if(!t.coords.geoData)return Object(M.jsx)("div",{className:"single-location",children:Object(M.jsx)("b",{children:t.location})});var r=t.coords.geoData;return Object(M.jsxs)("div",{className:n?"single-location location-clickable":"single-location",onClick:n?function(){return n(r)}:null,children:[Object(M.jsx)("b",{children:r.name}),Object(M.jsx)("br",{}),"Country: ",r.country,Object(M.jsx)("br",{}),"Continent: ",r.continent]})},ne=n.p+"static/media/image-placeholder.48926a32.jpg";var re=function(e){var t=e.listing;if(!t)return null;if(!t.product||0===Object.keys(t.product).length)return Object(M.jsx)("div",{className:"single-product",children:Object(M.jsx)("b",{children:"No products found"})});var n=t.product;return Object(M.jsx)("a",{href:n.sourceURLs[0],target:"_blank",rel:"noreferrer",children:Object(M.jsxs)("div",{className:"single-product product-clickable",children:[Object(M.jsxs)("div",{className:"single-product-top",children:[Object(M.jsx)("img",{className:"single-product-img",alt:"No img",src:n.imageURLs?n.imageURLs[0]:ne,height:50,width:50}),Object(M.jsx)("div",{children:Object(M.jsx)("b",{children:n.name.substring(0,40).concat(n.name.length>40?"...":"")})})]}),Object(M.jsx)("div",{className:"single-product-info",children:n.prices?"Price: "+(7*n.prices[0].amountMax).toString().substring(0,10)+" SEK":"No price info"})]})})},ce=function(e){var t=e.listing,n=e.onCancel,r=e.onRecommended,c=e.onUser,a=e.onLocation;return t?Object(M.jsx)("div",{children:Object(M.jsxs)("div",{className:"detailed-listing",children:[Object(M.jsx)("div",{children:Object(M.jsx)("button",{className:"btn btn-danger",onClick:n,children:"Cancel"})}),Object(M.jsxs)("div",{id:"detail-top-padding",children:[Object(M.jsx)("div",{children:Object(M.jsx)("h3",{children:t.title})}),Object(M.jsxs)("div",{className:"detailed-top",children:[Object(M.jsxs)("div",{className:"detailed-top-left",children:["General information:",Object(M.jsxs)("div",{className:"detailed-listing-info",children:[Object(M.jsx)("div",{children:Object(M.jsxs)("b",{children:["Price: ",t.price," SEK "]})}),Object(M.jsx)("br",{}),Object(M.jsx)("b",{children:"Description:"}),Object(M.jsx)("p",{children:t.desc})]}),"Seller:",Object(M.jsx)(ee,{user:t.user,onClick:c})]}),Object(M.jsxs)("div",{className:"detailed-top-right-wrapper",children:[Object(M.jsx)("div",{className:"detailed-top-middle",children:Object(M.jsx)("img",{className:"detailed-listing-image",alt:"No img",src:f+t.imageUrl,height:400,width:400})}),Object(M.jsxs)("div",{className:"detailed-top-right",children:["Location:",Object(M.jsx)(te,{listing:t,onClick:a}),"Similar product:",Object(M.jsx)(re,{listing:t,onClick:a})]})]})]})]}),Object(M.jsxs)("div",{className:"recommendations",children:[Object(M.jsx)("div",{children:Object(M.jsx)("h3",{children:"Recommended listings"})}),Object(M.jsx)("div",{id:"rec-listing",children:Object(M.jsx)(Z,{listings:t.recs,onClick:r})})]})]})}):null};var ae=function(){var e=Object(r.useState)(!1),t=Object(F.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({}),i=Object(F.a)(a,2),l=i[0],j=i[1],b=Object(o.g)(),p=Object(o.h)().id,f=Object(s.b)(),h=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=14;break}return c(!0),e.prev=2,e.next=5,D.getById(t);case 5:r=e.sent,j(r),c(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),b("/404"),c(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){h(p)}),[p]),Object(M.jsx)("div",{className:"debug",children:Object(M.jsx)(H,{loading:n,data:l,children:Object(M.jsx)(ce,{listing:l,onCancel:function(){b("/")},onRecommended:function(e){b("/listing/"+e.id)},onUser:function(e){b("/user/"+e.id)},onLocation:function(e){f(R(2,e)),b("/")}})})})},se=(n(70),function(e){var t=e.message;return Object(M.jsx)("div",{className:"error-message",id:"error-message",children:Object(M.jsx)("h6",{children:t})})});var ie=function(e){var t=e.errorMessage,n=e.onSignUp,r=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)("div",{className:"container",id:"signup",children:Object(M.jsx)("div",{className:"row",children:Object(M.jsxs)("div",{className:"col-md-4",children:[Object(M.jsx)("h3",{children:"User credentials"}),Object(M.jsx)("div",{className:"signUpForm",children:Object(M.jsxs)("form",{id:"signUpForm",children:[Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"username-input",className:"form-control",type:"text",name:"username",placeholder:"Username",required:!0})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"password-input",className:"form-control",type:"text",name:"password",placeholder:"Password",required:!0})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"email-input",className:"form-control",type:"text",name:"email",placeholder:"Email",required:!0})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"phone number-input",className:"form-control",type:"text",name:"phone",placeholder:"Phone"})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"name-input",className:"form-control",type:"text",name:"name",placeholder:"Name"})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"address-input",className:"form-control",type:"text",name:"address",placeholder:"Address"})}),Object(M.jsx)("button",{className:"btn btn-primary form-control",id:"login-button",type:"submit",onClick:function(e){r(e)},children:"Submit"})]})}),Object(M.jsx)("div",{className:"error-messages",children:Object(M.jsx)(se,{message:t})})]})})})};function oe(e){return/^\d+$/.test(e)}var le=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},ue=function(e){return/^.{8,}$/.test(e)},de=function(e){return/^.{4,}$/.test(e)},je=function(e){var t=e.username,n=e.password,r=e.email,c=e.phone,a=e.name,s=e.address,i=null;return t?de(t)?n?ue(n)?r?le(r)?c?oe(c)?a?/^[a-zA-Z ]+$/.test(a)?s?[!1,i]:[!0,i="Address must be specified"]:[!0,i="Name can only contain letters"]:[!0,i="Name must be specified"]:[!0,i="Phone number must be specified only in numbers"]:[!0,i="Phone number must be specified"]:[!0,i="Incorrect email format"]:[!0,i="Email must be specified"]:[!0,i="Password must be altest 8 characters"]:[!0,i="Password must be specified"]:[!0,i="Username must be altest 4 characters"]:[!0,i="Username must be specified"]},be="api/users",pe=p+be,fe={signup:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.info(be,"Authenticating user:",t),e.next=4,b.a.post(pe,t);case 4:return n=e.sent,h.info(be,"User authenticated",t),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),h.error(be,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},he=fe;var me=function(){var e=Object(r.useState)(""),t=Object(F.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(F.a)(a,2),l=i[0],j=i[1],b=Object(s.b)(),p=Object(o.g)(),f=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r,a,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={username:t.target.form[0].value,password:t.target.form[1].value,email:t.target.form[2].value,phone:t.target.form[3].value,name:t.target.form[4].value,address:t.target.form[5].value},r=je(n),a=Object(F.a)(r,2),s=a[0],i=a[1],!s){e.next=7;break}return c(i),e.abrupt("return",!1);case 7:c("");case 8:if(l){e.next=25;break}return e.prev=9,j(!0),e.next=13,he.signup(n);case 13:return e.next=15,b(L(n.username,n.password));case 15:b(k("Successfully signed up!",5)),p("/"),j(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(9),b(S("Error signing up!",5)),j(!1),c(e.t0.response.data.error);case 25:case"end":return e.stop()}}),e,null,[[9,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)(H,{loading:l,data:!0,children:Object(M.jsx)(ie,{errorMessage:n,onSignUp:f})})};n(71);var Oe=function(e){var t=e.createListing,n=e.error,r=e.uploadMessage,c=e.setUploadMessage;return Object(M.jsx)("div",{className:"container",id:"create-listing",children:Object(M.jsx)("div",{className:"row",children:Object(M.jsxs)("div",{className:"col-md-4",children:[Object(M.jsx)("h3",{children:"Listing details"}),Object(M.jsx)("div",{children:Object(M.jsxs)("form",{id:"createListingForm",className:"create-listing-form",method:"post",encType:"multipart/form-data",children:[Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"listing-title",name:"title",placeholder:"Title",className:"form-control",required:!0})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"listing-price",name:"price",placeholder:"Price",className:"form-control",required:!0})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"listing-location",name:"location",placeholder:"Location",className:"form-control",required:!0})}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("input",{id:"image",name:"image",type:"file",className:"form-control",onChange:function(e){c(e.target.files[0].name)},required:!0,hidden:!0}),Object(M.jsx)("label",{className:"btn btn-primary form-control",htmlFor:"image",children:"Upload image"}),Object(M.jsx)("span",{id:"file-chosen",children:r})]}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("textarea",{className:"text_area",rows:"6",cols:"33",id:"listing-description",name:"description",placeholder:"Description"})}),Object(M.jsx)("div",{children:Object(M.jsx)("button",{className:"btn btn-primary form-control",id:"create-lising-button",onClick:function(e){return function(e){e.preventDefault(),t(e)}(e)},children:"Create listing!"})})]})}),Object(M.jsx)("div",{className:"error-messages",children:Object(M.jsx)(se,{message:n})})]})})})};var ge=function(e){return/[\/.](gif|jpg|jpeg|tiff|png)$/.test(e)},xe=function(e){return/^[a-zA-Z\xc4\xe4\xc5\xe5\xd6\xf6 ]+$/.test(e)},ve=function(e){var t=e.title,n=e.price,r=e.location,c=e.image,a=e.desc,s=null;return t?n?oe(n)?r?xe(r)?c?ge(c.name)?a?[!1,s]:[!0,s="Description must be specified"]:[!0,s="Image must of file type gif, jpg, jpeg, tiff or png."]:[!0,s="Please upload image"]:[!0,s="Location can only contain letters"]:[!0,s="Location must be specified"]:[!0,s="Price can only contain numbers"]:[!0,s="Price must be specified"]:[!0,s="Title must be specified"]};var Ne=function(){var e=Object(r.useState)(!1),t=Object(F.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(F.a)(a,2),l=i[0],j=i[1],b=Object(r.useState)("No image uploaded"),p=Object(F.a)(b,2),f=p[0],h=p[1],m=Object(s.c)((function(e){return e.session})),O=Object(s.b)(),g=Object(o.g)(),x=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,a,s,i,o,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={title:t.target.form[0].value,price:t.target.form[1].value,location:t.target.form[2].value,image:t.target.form[3].files[0],desc:t.target.form[4].value},a=ve(r),s=Object(F.a)(a,2),i=s[0],o=s[1],!i){e.next=7;break}return j(o),e.abrupt("return");case 7:j("");case 8:if((l=new FormData).append("title",r.title),l.append("desc",r.desc),l.append("price",r.price),l.append("image",r.image),l.append("imageUrl",r.image.name),l.append("location",r.location),n){e.next=30;break}return e.prev=16,c(!0),e.next=20,D.create(l,m.token);case 20:d=e.sent,c(!1),O(k("Listing successfully posted!",5)),g("/listing/"+d.id),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(16),O(S("Error creating listing",5)),c(!1);case 30:case"end":return e.stop()}}),e,null,[[16,26]])})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)(H,{loading:n,data:!0,children:Object(M.jsx)("div",{children:m?Object(M.jsx)(Oe,{createListing:x,error:l,uploadMessage:f,setUploadMessage:h}):Object(M.jsx)("p",{children:"Log in to create listing"})})})},we=function(e){var t=e.user,n=e.onCancel,r=e.onListingClick,c=e.onDeleteListing;return t?Object(M.jsxs)("div",{className:"user-profile",children:[Object(M.jsx)("button",{className:"btn btn-danger",id:"user-cancel-button",onClick:n,children:"Cancel"}),Object(M.jsxs)("div",{className:"user-profile-inner",children:[Object(M.jsxs)("div",{className:"user-listing-wrapper",children:[Object(M.jsx)("h3",{children:t.username+"'s items for sale"}),Object(M.jsx)(Z,{listings:t.listings,onClick:r,onDeleteListing:c})]}),Object(M.jsx)("div",{className:"user-info-wrapper",children:Object(M.jsx)(ee,{user:t})})]})]}):null};var ye=function(){var e=Object(s.c)((function(e){return e.session})),t=Object(r.useState)(!1),n=Object(F.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)({}),l=Object(F.a)(i,2),j=l[0],b=l[1],p=Object(o.g)(),f=Object(o.h)().id,h=Object(s.b)(),m=function(){var t=Object(d.a)(u.a.mark((function t(n,r){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.stopPropagation(),c){t.next=19;break}if(!window.confirm("Are you sure you wish to delete this item?")){t.next=19;break}return t.prev=3,a(!0),t.next=7,D.remove(r.id,e.token);case 7:return t.next=9,y.getById(f);case 9:s=t.sent,b(s),a(!1),h(k("Successfully deleted listing",5)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(3),a(!1),h(S("Error deleting listing",5));case 19:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=14;break}return a(!0),e.prev=2,e.next=5,y.getById(t);case 5:n=e.sent,b(n),a(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),p("/404"),a(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();e(f)}),[f]),Object(M.jsx)("div",{className:"debug",children:Object(M.jsx)(H,{loading:c,data:j,children:Object(M.jsx)(we,{user:j,onCancel:function(){p("/")},onListingClick:function(e){p("/listing/"+e.id)},onDeleteListing:e&&e.user.id===f?m:null})})})};var ke=function(e){var t=e.onProfile;return Object(M.jsx)("button",{className:"btn btn-primary",id:"profile-button",onClick:t,children:"Profile"})};var Se=function(e){var t=e.onCreateListing;return Object(M.jsx)("button",{className:"btn btn-primary",id:"create-listing-button",onClick:function(){return t()},children:"Create Listing"})};var Ce=function(e){var t=e.onLogout;return Object(M.jsx)("button",{className:"btn btn-danger",id:"log-out-button",onClick:t,children:"Log Out"})};var Le=function(e){var t=e.onLogin;return Object(M.jsx)("button",{className:"btn btn-primary",id:"login-nav-button",onClick:t,children:"Login"})},Ie=function(e){var t=e.children,n=e.session,r=e.onProfile,c=e.onCreateListing,a=e.onLogout,s=e.onLogin,i=e.onLogo;return Object(M.jsxs)("div",{className:"header",children:[Object(M.jsx)("div",{className:"header-item header-logo-item",children:Object(M.jsx)("div",{className:"header-logo",onClick:i,children:Object(M.jsx)("p",{children:"BuyNSell"})})}),Object(M.jsx)("div",{className:"header-item header-form",children:t}),Object(M.jsx)("div",{className:"header-item",children:n?Object(M.jsxs)("div",{className:"header-buttons",children:[Object(M.jsx)(ke,{onProfile:r}),Object(M.jsx)(Se,{onCreateListing:c}),Object(M.jsx)(Ce,{onLogout:a})]}):Object(M.jsx)("div",{className:"header-buttons",children:Object(M.jsx)(Le,{onLogin:s})})})]})};var Ee=function(e){var t=e.type,n=e.onSearch,r=e.onType;return Object(M.jsxs)("div",{className:"search-field input-group rounded",children:[Object(M.jsx)("input",{className:"form-control rounded",onChange:function(e){n(e.target.value)},placeholder:["\ud83d\udd0d Search for products, by name or description...","\ud83d\udd0d Search for products, by location..."][t]}),Object(M.jsxs)("select",{className:"search-type-select",onChange:function(e){return r(e.target.value)},children:[Object(M.jsx)("option",{value:0,children:"Products"}),Object(M.jsx)("option",{value:1,children:"Location"})]})]})};var Te=function(){var e=Object(r.useState)(0),t=Object(F.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(F.a)(a,2),l=i[0],u=i[1],d=Object(s.c)((function(e){return e.search})).loading,j=Object(s.b)(),b=Object(o.g)();return Object(M.jsx)(Ee,{onSearch:function(e){b("/"),d||(0==n?j(""!==e?R(n,e):R(n)):1==n&&!l&&e.length>3&&(u(!0),j(R(n,e)),setTimeout((function(){return u(!1)}),1e3)))},onType:function(e){c(e)},type:n})};var Ue=function(){var e=Object(s.c)((function(e){return e.session})),t=Object(o.g)(),n=Object(s.b)(),r=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t("/");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("id"),window.localStorage.removeItem("token"),t(k("Successfully logged out!",5)),t({type:"END_SESSION"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t("/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)(Ie,{session:e,onLogout:c,onProfile:function(){t("/user/"+e.user.id)},onCreateListing:function(){t("/create-listing")},onLogin:function(){t("/login")},onLogo:r,children:Object(M.jsx)(Te,{})})};var Ae=function(e){var t=e.cancel;return Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{id:"errorPages-header",children:" 404 "}),Object(M.jsxs)("div",{id:"errorPages-padding",children:[" ",Object(M.jsx)("p",{children:" The page you requested does not exist. "})," "]}),Object(M.jsx)("div",{id:"errorPages-padding",children:Object(M.jsx)("button",{className:"btn btn-danger",onClick:t,children:"Return Home "})})]})},De=function(e){var t=e.onClick;return Object(M.jsx)("button",{className:"close-notification-button",onClick:function(){return t()},children:"X"})},Pe=function(e){var t=e.notification,n=e.onClose;return t?Object(M.jsx)("div",{className:"notification-wrapper",children:Object(M.jsxs)("div",{className:t.type,children:[Object(M.jsx)(De,{onClick:n}),Object(M.jsx)("div",{className:"notification-info",children:t.message})]})}):null};var Re=function(){var e=Object(s.c)((function(e){return e.notification})),t=Object(s.b)(),n=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"RESET_NOTIFICATION"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)(Pe,{onClose:n,notification:e})};n(72);var _e=function(e){var t=e.onLogin,n=e.onSignUp,r=e.error;return Object(M.jsx)("div",{className:"container",id:"login",children:Object(M.jsx)("div",{className:"row",children:Object(M.jsxs)("div",{className:"col-md-4",children:[Object(M.jsx)("h3",{children:"User credentials"}),Object(M.jsx)("div",{className:"logInForm",children:Object(M.jsxs)("form",{className:"lform",id:"logInForm",children:[Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"username-input",className:"form-control",type:"text",name:"username",placeholder:"Username",required:!0})}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{id:"password-input",className:"form-control",type:"password",name:"password",placeholder:"Password",required:!0})}),Object(M.jsxs)("div",{children:[Object(M.jsx)("button",{className:"btn btn-primary form-control",id:"login-button",type:"submit",onClick:function(e){!function(e){e.preventDefault(),t(e)}(e)},children:"Log In"}),Object(M.jsx)("button",{className:"btn btn-primary form-control",id:"signup-button",type:"submit",onClick:n,children:"Sign up"})]})]})}),Object(M.jsx)("div",{className:"error-messages",children:Object(M.jsx)(se,{message:r})})]})})})};var Fe=function(e){var t=e.username,n=e.password,r=null;return t?n?[!1,r]:[!0,r="Password must be specified"]:[!0,r="Username must be specified"]};var Be=function(){var e=Object(r.useState)(""),t=Object(F.a)(e,2),n=t[0],c=t[1],a=Object(o.g)(),i=Object(s.b)(),l=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r,s,o,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.form[0].value,r=t.target.form[1].value,s=Fe({username:n,password:r}),o=Object(F.a)(s,2),l=o[0],d=o[1],!l){e.next=8;break}return c(d),e.abrupt("return");case 8:c("");case 9:return e.prev=9,e.next=12,i(L(n,r));case 12:a("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),c("Username or password incorrect");case 18:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)("div",{children:Object(M.jsx)(_e,{onLogin:l,onSignUp:function(){a("/signup")},error:n})})};var Me=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.session})),n=Object(o.g)();return Object(r.useEffect)((function(){e(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.localStorage.getItem("id"),r=window.localStorage.getItem("token"),!n||!r){e.next=14;break}return e.prev=3,e.next=6,y.getById(n);case 6:c=e.sent,t({type:"INIT_SESSION",data:{user:c,token:r}}),h.info("Successfully continued previous session"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),h.error("Failed to continue session from localstorage:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()),e(R(0))}),[e]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Re,{}),Object(M.jsxs)("div",{className:"app",children:[Object(M.jsx)(Ue,{session:t}),Object(M.jsx)("div",{className:"main",children:Object(M.jsxs)(o.d,{children:[Object(M.jsx)(o.b,{exact:!0,path:"/",element:Object(M.jsx)(Q,{})}),Object(M.jsx)(o.b,{exact:!0,path:"/login",element:t?Object(M.jsx)(o.a,{to:"/"}):Object(M.jsx)(Be,{})}),Object(M.jsx)(o.b,{exact:!0,path:"/search",element:Object(M.jsx)(Q,{})}),Object(M.jsx)(o.b,{exact:!0,path:"/create-listing",element:t?Object(M.jsx)(Ne,{}):Object(M.jsx)(o.a,{to:"/"})}),Object(M.jsx)(o.b,{exact:!0,path:"/listing/:id",element:Object(M.jsx)(ae,{})}),Object(M.jsx)(o.b,{exact:!0,path:"/signup",element:t?Object(M.jsx)(o.a,{to:"/"}):Object(M.jsx)(me,{})}),Object(M.jsx)(o.b,{exact:!0,path:"/user/:id",element:Object(M.jsx)(ye,{})}),Object(M.jsx)(o.b,{path:"*",element:Object(M.jsx)(Ae,{cancel:function(){return n("/")}})})]})})]})]})},He=n(18),qe=n(34),ze=n(35),$e=Object(He.combineReducers)({session:I,search:_,notification:C}),Ze=Object(He.createStore)($e,Object(qe.composeWithDevTools)(Object(He.applyMiddleware)(ze.a)));a.a.render(Object(M.jsx)(s.a,{store:Ze,children:Object(M.jsx)(i.a,{children:Object(M.jsx)(Me,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.70ec9ecb.chunk.js.map