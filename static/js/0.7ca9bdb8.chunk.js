webpackJsonp([0],{28:function(t,e,r){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var a=e[o](i),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}return n("next")})}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=r(29),a=r.n(i),s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=function(){function t(){o(this,t),this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.samples={},this.isLoading=!0,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=.5,this.compressor=this.audioContext.createDynamicsCompressor(),this.compressor.threshold.value=-24,this.compressor.knee.value=30,this.compressor.ratio.value=12,this.compressor.attack.value=.003,this.compressor.release.value=.25,this.stereoPanner=this.audioContext.createStereoPanner(),this.stereoPanner.pan.value=0,this.gainNode.connect(this.compressor),this.compressor.connect(this.stereoPanner),this.stereoPanner.connect(this.audioContext.destination),this.loadSamples()}return s(t,[{key:"loadSamples",value:function(){function t(){return e.apply(this,arguments)}var e=n(a.a.mark(function t(){var e,r,n,o,i,s,u,c,h,l,f;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=["C4","E4","G4","C5"],r="https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/",t.prev=2,n=!0,o=!1,i=void 0,t.prev=6,s=e[Symbol.iterator]();case 8:if(n=(u=s.next()).done){t.next=23;break}return c=u.value,t.next=12,fetch(""+r+c+".mp3");case 12:return h=t.sent,t.next=15,h.arrayBuffer();case 15:return l=t.sent,t.next=18,this.audioContext.decodeAudioData(l);case 18:f=t.sent,this.samples[c]=f;case 20:n=!0,t.next=8;break;case 23:t.next=29;break;case 25:t.prev=25,t.t0=t.catch(6),o=!0,i=t.t0;case 29:t.prev=29,t.prev=30,!n&&s.return&&s.return();case 32:if(t.prev=32,!o){t.next=35;break}throw i;case 35:return t.finish(32);case 36:return t.finish(29);case 37:this.isLoading=!1,console.log("Guitar samples loaded successfully"),t.next=45;break;case 41:t.prev=41,t.t1=t.catch(2),console.warn("Failed to load guitar samples, falling back to synthesized sound",t.t1),this.isLoading=!1;case 45:case"end":return t.stop()}},t,this,[[2,41],[6,25,29,37],[30,,32,36]])}));return t}()},{key:"playSample",value:function(t,e,r){var n=this.findClosestSample(t);if(!n||!this.samples[n])return void console.warn("Sample not found for note:",t);var o=this.audioContext.createBufferSource(),i=this.audioContext.createGain();o.buffer=this.samples[n];var a=this.noteToFrequency(t),s=this.noteToFrequency(n);o.playbackRate.value=a/s,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(1,e+.01),i.gain.exponentialRampToValueAtTime(.3,e+.3),i.gain.exponentialRampToValueAtTime(.001,e+r),o.connect(i),i.connect(this.gainNode),o.start(e),o.stop(e+r)}},{key:"findClosestSample",value:function(t){var e=Object.keys(this.samples);if(0===e.length)return null;var r=this.noteToFrequency(t),n=e[0],o=Math.abs(this.noteToFrequency(n)-r),i=!0,a=!1,s=void 0;try{for(var u,c=e[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var h=u.value,l=Math.abs(this.noteToFrequency(h)-r);l<o&&(o=l,n=h)}}catch(t){a=!0,s=t}finally{try{!i&&c.return&&c.return()}finally{if(a)throw s}}return n}},{key:"noteToFrequency",value:function(t){var e=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],r=parseInt(t.match(/\d+/)[0],10),n=e.indexOf(t.replace(/\d+/,""));return-1===n?null:440*Math.pow(2,(n-9)/12+(r-4))}},{key:"playChord",value:function(){function t(t){return e.apply(this,arguments)}var e=n(a.a.mark(function t(e){var r,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.audioContext){t.next=3;break}return console.error("AudioContext not initialized"),t.abrupt("return");case 3:if(!this.isLoading){t.next=7;break}return console.log("Waiting for samples to load..."),t.next=7,new Promise(function(t){!function e(){n.isLoading?setTimeout(e,100):t()}()});case 7:if("suspended"!==this.audioContext.state){t.next=10;break}return t.next=10,this.audioContext.resume();case 10:r=this.audioContext.currentTime,e.forEach(function(t,e){var i=r+.02*e;n.playSample(t,i,o)}),this.stereoPanner.pan.value=.4*Math.random()-.2;case 13:case"end":return t.stop()}},t,this)}));return t}()}]),t}();e.default=u},29:function(t,e,r){t.exports=r(30)},30:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(31),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},31:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),s=new p(n||[]);return a._invoke=c(t,r,s),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,i,a){var s=n(t[r],t,o);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&g.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},a)}a(s.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function c(t,e,r){var o=C;return function(i,a){if(o===P)throw new Error("Generator is already running");if(o===O){if("throw"===i)throw a;return v()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var u=h(s,r);if(u){if(u===S)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===C)throw o=O,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=P;var c=n(t,e,r);if("normal"===c.type){if(o=r.done?O:T,c.arg===S)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=O,r.method="throw",r.arg=c.arg)}}}function h(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,h(t,e),"throw"===e.method))return S;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,S;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,S):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,S)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function d(t){if(t){var e=t[x];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:y,done:!0}}var y,m=Object.prototype,g=m.hasOwnProperty,w="function"===typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",L=w.toStringTag||"@@toStringTag",k="object"===typeof t,E=e.regeneratorRuntime;if(E)return void(k&&(t.exports=E));E=e.regeneratorRuntime=k?t.exports:{},E.wrap=r;var C="suspendedStart",T="suspendedYield",P="executing",O="completed",S={},_={};_[x]=function(){return this};var j=Object.getPrototypeOf,F=j&&j(j(d([])));F&&F!==m&&g.call(F,x)&&(_=F);var G=a.prototype=o.prototype=Object.create(_);i.prototype=G.constructor=a,a.constructor=i,a[L]=i.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,L in t||(t[L]="GeneratorFunction")),t.prototype=Object.create(G),t},E.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[b]=function(){return this},E.AsyncIterator=u,E.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(G),G[L]="Generator",G[x]=function(){return this},G.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},E.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),s=g.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),S},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),f(r),S}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;f(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),S}}}(function(){return this}()||Function("return this")())}});
//# sourceMappingURL=0.7ca9bdb8.chunk.js.map