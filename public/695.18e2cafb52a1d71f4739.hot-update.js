self.webpackHotUpdatehello_world(695,{3932:(e,r,o)=>{e.exports='<!DOCTYPE html><html><head><title>About</title><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="Keywords" content="отель, бронь, номер, тег, гостиница"><meta name="description" content="Сайт по бронированию номеров"><title>Toxin - бронирование номеров</title><link rel="icon" href="'+o(4329)+'"><link rel="stylesheet" href="'+o(1948)+'"><link rel="stylesheet" href="'+o(2534)+'"><script src="'+o(Object(function(){var e=new Error("Cannot find module 'C:/www/WpPug/src/assets/js/libs.js?isScript'");throw e.code="MODULE_NOT_FOUND",e}()))+'"><\/script></head><body><h1>About</h1><p>The demo example "Hello World".</p><p><a href="index.html">to Home</a></p></body></html>'}},(function(e){e.h=()=>"6eae4645562c8d9f1a61",(()=>{e.b=document.baseURI||self.location.href;var r,o,n,t,d,c=e.hmrS_jsonp=e.hmrS_jsonp||{695:0},i={};function a(o,n){return r=n,new Promise(((r,n)=>{i[o]=r;var t=e.p+e.hu(o),d=new Error;e.l(t,(e=>{if(i[o]){i[o]=void 0;var r=e&&("load"===e.type?"missing":e.type),t=e&&e.target&&e.target.src;d.message="Loading hot update chunk "+o+" failed.\n("+r+": "+t+")",d.name="ChunkLoadError",d.type=r,d.request=t,n(d)}}))}))}function l(r){function i(r){for(var o=[r],n={},t=o.map((function(e){return{chain:[e],id:e}}));t.length>0;){var d=t.pop(),c=d.id,i=d.chain,l=e.c[c];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var p=0;p<l.parents.length;p++){var s=l.parents[p],h=e.c[s];if(h){if(h.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([s]),moduleId:c,parentId:s};-1===o.indexOf(s)&&(h.hot._acceptedDependencies[c]?(n[s]||(n[s]=[]),a(n[s],[c])):(delete n[s],o.push(s),t.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:r,outdatedModules:o,outdatedDependencies:n}}function a(e,r){for(var o=0;o<r.length;o++){var n=r[o];-1===e.indexOf(n)&&e.push(n)}}e.f&&delete e.f.jsonpHmr,o=void 0;var l={},p=[],s={},h=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in n)if(e.o(n,f)){var u,m=n[f],v=!1,y=!1,g=!1,E="";switch((u=m?i(f):{type:"disposed",moduleId:f}).chain&&(E="\nUpdate propagation: "+u.chain.join(" -> ")),u.type){case"self-declined":r.onDeclined&&r.onDeclined(u),r.ignoreDeclined||(v=new Error("Aborted because of self decline: "+u.moduleId+E));break;case"declined":r.onDeclined&&r.onDeclined(u),r.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+u.moduleId+" in "+u.parentId+E));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(u),r.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+E));break;case"accepted":r.onAccepted&&r.onAccepted(u),y=!0;break;case"disposed":r.onDisposed&&r.onDisposed(u),g=!0;break;default:throw new Error("Unexception type "+u.type)}if(v)return{error:v};if(y)for(f in s[f]=m,a(p,u.outdatedModules),u.outdatedDependencies)e.o(u.outdatedDependencies,f)&&(l[f]||(l[f]=[]),a(l[f],u.outdatedDependencies[f]));g&&(a(p,[u.moduleId]),s[f]=h)}n=void 0;for(var w,I=[],b=0;b<p.length;b++){var D=p[b],_=e.c[D];_&&(_.hot._selfAccepted||_.hot._main)&&s[D]!==h&&!_.hot._selfInvalidated&&I.push({module:D,require:_.hot._requireSelf,errorHandler:_.hot._selfAccepted})}return{dispose:function(){var r;t.forEach((function(e){delete c[e]})),t=void 0;for(var o,n=p.slice();n.length>0;){var d=n.pop(),i=e.c[d];if(i){var a={},s=i.hot._disposeHandlers;for(b=0;b<s.length;b++)s[b].call(null,a);for(e.hmrD[d]=a,i.hot.active=!1,delete e.c[d],delete l[d],b=0;b<i.children.length;b++){var h=e.c[i.children[b]];h&&(r=h.parents.indexOf(d))>=0&&h.parents.splice(r,1)}}}for(var f in l)if(e.o(l,f)&&(i=e.c[f]))for(w=l[f],b=0;b<w.length;b++)o=w[b],(r=i.children.indexOf(o))>=0&&i.children.splice(r,1)},apply:function(o){for(var n in s)e.o(s,n)&&(e.m[n]=s[n]);for(var t=0;t<d.length;t++)d[t](e);for(var c in l)if(e.o(l,c)){var i=e.c[c];if(i){w=l[c];for(var a=[],h=[],f=[],u=0;u<w.length;u++){var m=w[u],v=i.hot._acceptedDependencies[m],y=i.hot._acceptedErrorHandlers[m];if(v){if(-1!==a.indexOf(v))continue;a.push(v),h.push(y),f.push(m)}}for(var g=0;g<a.length;g++)try{a[g].call(null,w)}catch(e){if("function"==typeof h[g])try{h[g](e,{moduleId:c,dependencyId:f[g]})}catch(n){r.onErrored&&r.onErrored({type:"accept-error-handler-errored",moduleId:c,dependencyId:f[g],error:n,originalError:e}),r.ignoreErrored||(o(n),o(e))}else r.onErrored&&r.onErrored({type:"accept-errored",moduleId:c,dependencyId:f[g],error:e}),r.ignoreErrored||o(e)}}}for(var E=0;E<I.length;E++){var b=I[E],D=b.module;try{b.require(D)}catch(n){if("function"==typeof b.errorHandler)try{b.errorHandler(n,{moduleId:D,module:e.c[D]})}catch(e){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:D,error:e,originalError:n}),r.ignoreErrored||(o(e),o(n))}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:D,error:n}),r.ignoreErrored||o(n)}}return p}}}self.webpackHotUpdatehello_world=(o,t,c)=>{for(var a in t)e.o(t,a)&&(n[a]=t[a],r&&r.push(a));c&&d.push(c),i[o]&&(i[o](),i[o]=void 0)},e.hmrI.jsonp=function(r,o){n||(n={},d=[],t=[],o.push(l)),e.o(n,r)||(n[r]=e.m[r])},e.hmrC.jsonp=function(r,i,p,s,h,f){h.push(l),o={},t=i,n=p.reduce((function(e,r){return e[r]=!1,e}),{}),d=[],r.forEach((function(r){e.o(c,r)&&void 0!==c[r]?(s.push(a(r,f)),o[r]=!0):o[r]=!1})),e.f&&(e.f.jsonpHmr=function(r,n){o&&e.o(o,r)&&!o[r]&&(n.push(a(r)),o[r]=!0)})},e.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(e.p+e.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})()}));