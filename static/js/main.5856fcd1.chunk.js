(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(30)},24:function(e,n,t){},25:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var s=t(0),a=t.n(s),i=t(16),o=t.n(i),r=(t(24),t(2)),c=t(3),u=t(7),l=t(4),E=t(6),h=(t(25),t(1)),d={DECREMENT_SECONDS:"DECREMENT_SECONDS",DECREMENT_MINUTES:"DECREMENT_MINUTES",SESSION_BREAK_SWITCH:"SESSION_BREAK_SWITCH",DECREMENT_SESSION:"DECREMENT_SESSION",INCREMENT_SESSION:"INCREMENT_SESSION",DECREMENT_BREAK:"DECREMENT_BREAK",INCREMENT_BREAK:"INCREMENT_BREAK",PLAY_PAUSE:"PLAY_PAUSE",RESET:"RESET"},m=function(){return{type:d.DECREMENT_SECONDS}},p=function(){return{type:d.DECREMENT_MINUTES}},f=function(){return{type:d.SESSION_BREAK_SWITCH}},S=function(){return{type:d.DECREMENT_SESSION}},L=function(){return{type:d.INCREMENT_SESSION}},b=function(){return{type:d.DECREMENT_BREAK}},g=function(){return{type:d.INCREMENT_BREAK}},N=function(){return{type:d.PLAY_PAUSE}},k=function(){return{type:d.RESET}},C=d,O=t(5),R=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).handleClock=t.handleClock.bind(Object(h.a)(Object(h.a)(t))),t.handleReset=t.handleReset.bind(Object(h.a)(Object(h.a)(t))),t}return Object(E.a)(n,e),Object(c.a)(n,[{key:"handleReset",value:function(){this.props.resetAll();var e=document.getElementById("beep");e.pause(),e.currentTime=0}},{key:"playBeep",value:function(){var e=document.getElementById("beep");e.volume=.03,e.play()}},{key:"handleClock",value:function(){this.props.paused||(0===this.props.secondsLeft&&0===this.props.minutesLeft?(this.playBeep(),this.props.sessionBreakSwitch()):0===this.props.secondsLeft?this.props.decrementMinutes():this.props.decrementSeconds())}},{key:"componentDidMount",value:function(){this.intervalID=setInterval(this.handleClock,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"showDigits",value:function(e){return e<10?"0"+e:e}},{key:"showSessionBreak",value:function(){return this.props.inSession?"Session":"Break"}},{key:"showPlayPaused",value:function(){return this.props.paused?a.a.createElement("i",{className:"fa fa-play fa-3x"}):a.a.createElement("i",{className:"fa fa-pause fa-3x"})}},{key:"render",value:function(){return a.a.createElement("div",{id:"timer-container",className:"container"},a.a.createElement("h2",{id:"timer-label"},this.showSessionBreak()),a.a.createElement("div",{id:"time-left"},this.showDigits(this.props.minutesLeft),":",this.showDigits(this.props.secondsLeft)),a.a.createElement("div",{id:"button-container"},a.a.createElement("button",{id:"start_stop",onClick:this.props.playPause},this.showPlayPaused()),a.a.createElement("button",{id:"reset",onClick:this.handleReset},a.a.createElement("i",{className:"fa fa-sync fa-3x"}))),a.a.createElement("audio",{src:"https://github.com/jonnycomes/Pomodoro-Clock/blob/master/audio/pager.mp3",id:"beep"},"Your browser does not support audio."))}}]),n}(s.Component),y=Object(O.b)(function(e){return{minutesLeft:e.minutesLeft,secondsLeft:e.secondsLeft,inSession:e.inSession,paused:e.paused}},function(e){return{decrementSeconds:function(){return e(m())},decrementMinutes:function(){return e(p())},sessionBreakSwitch:function(){return e(f())},resetAll:function(){return e(k())},playPause:function(){return e(N())}}})(R),T=function(e){function n(){return Object(r.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{id:"session-container",className:"container"},a.a.createElement("h2",{id:"session-label"},"Session Length"),a.a.createElement("div",{id:"session-length",className:"length"},this.props.sessionLength),a.a.createElement("button",{id:"session-decrement",onClick:this.props.decrementSession},a.a.createElement("i",{className:"fa fa-minus fa-2x"})),a.a.createElement("button",{id:"session-increment",onClick:this.props.incrementSession},a.a.createElement("i",{className:"fa fa-plus fa-2x"})))}}]),n}(s.Component),_=Object(O.b)(function(e){return{sessionLength:e.sessionLength}},function(e){return{decrementSession:function(){return e(S())},incrementSession:function(){return e(L())}}})(T),I=function(e){function n(){return Object(r.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{id:"break-container",className:"container"},a.a.createElement("h2",{id:"break-label"},"Break Length"),a.a.createElement("div",{id:"break-length",className:"length"},this.props.breakLength),a.a.createElement("button",{id:"break-decrement",onClick:this.props.decrementBreak},a.a.createElement("i",{className:"fa fa-minus fa-2x"})),a.a.createElement("button",{id:"break-increment",onClick:this.props.incrementBreak},a.a.createElement("i",{className:"fa fa-plus fa-2x"})))}}]),n}(s.Component),v=Object(O.b)(function(e){return{breakLength:e.breakLength}},function(e){return{decrementBreak:function(){return e(b())},incrementBreak:function(){return e(g())}}})(I),M=t(10),j=t(18),B=t.n(j),D={sessionLength:25,breakLength:5,minutesLeft:25,secondsLeft:0,inSession:!0,paused:!0},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C.DECREMENT_SECONDS:return console.log(n),{sessionLength:e.sessionLength,breakLength:e.breakLength,minutesLeft:e.minutesLeft,secondsLeft:e.secondsLeft-1,inSession:e.inSession,paused:e.paused};case C.DECREMENT_MINUTES:return console.log(n),{sessionLength:e.sessionLength,breakLength:e.breakLength,minutesLeft:e.minutesLeft-1,secondsLeft:59,inSession:e.inSession,paused:e.paused};case C.SESSION_BREAK_SWITCH:return console.log(n),{sessionLength:e.sessionLength,breakLength:e.breakLength,minutesLeft:e.inSession?e.breakLength:e.sessionLength,secondsLeft:0,inSession:!e.inSession,paused:e.paused};case C.DECREMENT_SESSION:return console.log(n),{sessionLength:Math.max(e.sessionLength-1,1),breakLength:e.breakLength,minutesLeft:Math.max(e.sessionLength-1,1),secondsLeft:0,inSession:!0,paused:!0};case C.INCREMENT_SESSION:return console.log(n),{sessionLength:Math.min(e.sessionLength+1,60),breakLength:e.breakLength,minutesLeft:Math.min(e.sessionLength+1,60),secondsLeft:0,inSession:!0,paused:!0};case C.DECREMENT_BREAK:return console.log(n),{sessionLength:e.sessionLength,breakLength:Math.max(e.breakLength-1,1),minutesLeft:e.sessionLength,secondsLeft:0,inSession:!0,paused:!0};case C.INCREMENT_BREAK:return console.log(n),{sessionLength:e.sessionLength,breakLength:Math.min(e.breakLength+1,60),minutesLeft:e.sessionLength,secondsLeft:0,inSession:!0,paused:!0};case C.PLAY_PAUSE:return console.log(n),{sessionLength:e.sessionLength,breakLength:e.breakLength,minutesLeft:e.minutesLeft,secondsLeft:e.secondsLeft,inSession:e.inSession,paused:!e.paused};case C.RESET:return console.log(n),D;default:return e}};var A,P=(A=window.REDUX_INITIAL_DATA,Object(M.c)(w,A,Object(M.a)(B.a))),K=function(e){function n(){return Object(r.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(O.a,{store:P},a.a.createElement("div",{id:"pomodoro"},a.a.createElement("h1",{id:"pomodoro-heading"},"Pomodoro Clock"),a.a.createElement(_,null),a.a.createElement(v,null),a.a.createElement(y,null)))}}]),n}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.5856fcd1.chunk.js.map