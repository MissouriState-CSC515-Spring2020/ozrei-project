!function(){"use strict";var e=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];var t=function(t){var n=[];for(var o in t)t.hasOwnProperty(o)&&n.push(o);var r=e.concat(n).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")};var n=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],o=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],h={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){h[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}})),{formatters:h,formattingTokensRegExp:t(h)}};o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},n();var o;document.querySelector("#time-now").textContent="Hello World"}();
//# sourceMappingURL=bundle.js.map
