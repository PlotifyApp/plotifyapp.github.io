(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/plotifyIcon.8968b6e4.png"},function(e,t,a){e.exports=a.p+"static/media/plotifyLogo.6ec3b478.png"},function(e,t,a){e.exports=a(32)},,,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),l=(a(23),a(5)),s=a(6),c=a(9),u=a(7),m=a(10),d=a(1),f=a(4),g=["user-top-read"],h=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e},{});window.location.hash="";var v=h,p=(a(12),a(2)),y=function(){var e=Object(n.useState)({winWidth:window.innerWidth,winHeight:window.innerHeight}),t=Object(p.a)(e,2),a=t[0],r=t[1],i=function(){r({winWidth:window.innerWidth,winHeight:window.innerHeight})};return Object(n.useEffect)(function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}},[a]),a.winWidth},E=a(8);var w=a(14);function b(e,t,a,n){return[e/100*(a-n),t/100*(a-n)]}a(28),a(29);function S(e){var t=e.genres;return r.a.createElement("div",{className:"parent"},t.map(function(e){return r.a.createElement("p",{key:e,className:"genreComponent"}," ",e," ")}))}function O(e){var t=e.x,a=e.y,i=e.imageSize,o=e.axisLength,l=e.popularity,s=e.valence,c=e.songInfo,u=e.smallFormat,m=e.isMobile,d=e.setHovered,f=function(e,t,a,n){var r={};for(var i in e)if(i in t){var o=b(e[i],t[i],a,n)[0],l=b(e[i],t[i],a,n)[0]+n,s=b(e[i],t[i],a,n)[1],c=b(e[i],t[i],a,n)[1]+n;r[i]=[o,l,s,c]}return r}(l,s,o,i),g=null;for(var h in f){var v=f[h][0],y=f[h][1],E=f[h][2],w=f[h][3];t>=v&&t<=y&&a>=E&&a<=w&&(g=h)}var O=Object(n.useState)(0),k=Object(p.a)(O,2),N=k[0],x=k[1],P=document.getElementById("test");return null!==P&&N!==P.clientHeight&&x(P.clientHeight),r.a.createElement("div",{style:{height:N+20}},function(){if(null!=g&&g in c){var e=c[g].track;m||d(e);for(var t=c[g].artists,a="",n=0;n<t.length;n++)0===n?a+=t[n].name:a=a+", "+t[n].name;var i=c[g].genres,o="songInfo";return u&&(o="smallSongInfo"),m&&(o="mobile"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:o},r.a.createElement("div",{style:{display:"flex",overflow:"hidden"}},m?r.a.createElement("img",{src:c[g].src,alt:"album cover",className:"songCover"}):null,r.a.createElement("div",null,r.a.createElement("p",{className:"name"},r.a.createElement("strong",null," ",e," ")),r.a.createElement("p",{className:"artist"},a),r.a.createElement(S,{genres:i})))))}if(m){var l=[],s=[],f=1;for(var h in c)f<6?l.push(c[h].track):s.push(c[h].track),f++;return l.length<=0||s.length<=0?r.a.createElement("div",null,r.a.createElement("h2",{className:"loading"}," Loading Your Songs... "),r.a.createElement("p",{className:"loadingTime"},"If this process takes > 2 minutes, please refresh or try again later. ")):r.a.createElement("div",{id:"test",className:"topzz"},r.a.createElement("h2",{className:"top10"}," Your Top 10 "),r.a.createElement("p",{className:"learnMore"},"Tap on a song for more info"),r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"left"},l.map(function(e){return r.a.createElement("p",{key:e}," ",e," ")})),r.a.createElement("div",{className:"right"},s.map(function(e){return r.a.createElement("p",{key:e}," ",e," ")}))))}return d(""),null}())}a(30);function k(e){var t=e.songInfo,a=e.hoveredSong,n=[];for(var i in t)a===t[i].track?n.push(r.a.createElement("li",{key:i,style:{color:"#1DB954",marginLeft:-12.5}},r.a.createElement("span",{style:{marginLeft:-6.5}}," ",t[i].track," "))):n.push(r.a.createElement("li",{key:i,style:{color:"white",listStyleType:"none"}}," ",t[i].track," "));return r.a.createElement("div",{className:"margins"},r.a.createElement("div",{className:"top"},r.a.createElement("h2",{className:"header"}," ",n.length<=0?"Loading...":"Your Top 10"),r.a.createElement("p",{className:"moreInfo"}," ",n.length<=0?"If this process takes > 2 minutes, please refresh or try again later.":"Hover over a song for more info"),r.a.createElement("div",{className:"songs"},n.map(function(e){return r.a.createElement("div",null," ",e," ")}))))}var N=r.a.memo(function(e){var t,a=e.draw,i=e.height,o=e.width,l=e.imageSize,s=e.popularity,c=e.valence,u=e.songInfo,m=e.smallFormat,d=y(),f=function(){var e=Object(n.useState)({x:0,y:0}),t=Object(p.a)(e,2),a=t[0],r=t[1];return E.isMobile?Object(n.useEffect)(function(){var e=function(e){e.stopPropagation(),r({x:e.touches[0].clientX,y:e.touches[0].clientY})};return window.addEventListener("touchstart",e),function(){window.removeEventListener("touchstart",e)}},[]):Object(n.useEffect)(function(){var e=function(e){return r({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}},[]),a}(),g=r.a.useRef(),h=Object(n.useRef)(0),v=Object(n.useRef)(0);r.a.useEffect(function(){var e=g.current.getBoundingClientRect(),t=g.current.getContext("2d");g.current.width=o*devicePixelRatio,g.current.height=i*devicePixelRatio,t.scale(devicePixelRatio,devicePixelRatio),g.current.style.width=o+"px",g.current.style.height=i+"px",t.beginPath();var n=t.createLinearGradient(0,0,0,i);n.addColorStop(0,"darkturquoise"),n.addColorStop(1,"greenyellow"),t.strokeStyle=n,t.lineWidth=1.5,t.moveTo(o/2,0),t.lineTo(o/2,o),t.stroke(),t.beginPath(),(n=t.createLinearGradient(0,0,o,0)).addColorStop(0,"yellow"),n.addColorStop(1,"magenta"),t.strokeStyle=n,t.moveTo(0,o/2),t.lineTo(o,o/2),t.stroke(),t.beginPath(),t.fillStyle="yellow",t.arc(5,o/2,5,0*Math.PI,2*Math.PI),t.fill(),t.beginPath(),t.fillStyle="magenta",t.arc(o-5,o/2,5,0*Math.PI,2*Math.PI),t.fill(),t.beginPath(),t.fillStyle="darkturquoise",t.arc(o/2,5,5,0*Math.PI,2*Math.PI),t.fill(),t.beginPath(),t.fillStyle="greenyellow",t.arc(o/2,o-5,5,0*Math.PI,2*Math.PI),t.fill(),a(t),h.current=e.x,v.current=e.y}),t=f.x-h.current>=o/2&&m?-100:0;var b=Object(n.useState)(""),S=Object(p.a)(b,2),N=S[0],x=S[1];return E.isMobile||d<900?r.a.createElement("div",null,r.a.createElement("canvas",{className:"canvas",ref:g,height:i,width:o}),r.a.createElement(O,{x:f.x-h.current,y:f.y-v.current,imageSize:l,axisLength:o,popularity:s,valence:c,songInfo:u,smallFormat:m,isMobile:!0})):r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("canvas",{className:"canvas",ref:g,height:i,width:o}),r.a.createElement(w.a,{className:"test",visible:!0,offsetX:t,offsetY:0},r.a.createElement(O,{x:f.x-h.current,y:f.y-v.current,imageSize:l,axisLength:o,popularity:s,valence:c,songInfo:u,smallFormat:m,isMobile:!1,setHovered:x})),r.a.createElement(k,{songInfo:u,hoveredSong:N}))},function(){return!1});function x(e){var t=e.height,a=e.width,n=e.smallFormat,i=r.a.useRef();return r.a.useEffect(function(){var e=i.current.getContext("2d");i.current.width=a*devicePixelRatio,i.current.height=t*devicePixelRatio,e.scale(devicePixelRatio,devicePixelRatio),i.current.style.width=a+"px",i.current.style.height=t+"px";var r=88,o=113,l=5,s="14px",c=12,u=125;n&&(s="12px",l=4,r=75,o=95,c=11,u=104),e.beginPath();var m=e.createLinearGradient(r,35,o-10,35);m.addColorStop(0,"darkturquoise"),m.addColorStop(1,"greenyellow"),e.strokeStyle=m,e.lineWidth=1.5,e.moveTo(r,35),e.lineTo(o,35),e.stroke(),e.beginPath(),(m=e.createLinearGradient(r,15,o,15)).addColorStop(0,"yellow"),m.addColorStop(1,"magenta"),e.strokeStyle=m,e.moveTo(r,15),e.lineTo(o,15),e.stroke(),e.beginPath(),e.fillStyle="yellow",e.arc(r-l,15,l,0*Math.PI,2*Math.PI),e.fill(),e.beginPath(),e.fillStyle="magenta",e.arc(o-l,15,l,0*Math.PI,2*Math.PI),e.fill(),e.beginPath(),e.fillStyle="darkturquoise",e.arc(r-l,35,l,0*Math.PI,2*Math.PI),e.fill(),e.beginPath(),e.fillStyle="greenyellow",e.arc(o-l,35,l,0*Math.PI,2*Math.PI),e.fill(),e.fillStyle="grey",e.font=s+" Helvetica",e.fillText("underrated",0,18),e.fillStyle="grey",e.font=s+" Helvetica",e.fillText("happy :))",c,38),e.fillStyle="grey",e.font=s+" Helvetica",e.fillText("basic",u,18),e.fillStyle="grey",e.font=s+" Helvetica",e.fillText("sad :(",u,38)}),r.a.createElement("div",null,r.a.createElement("canvas",{className:"keyCanvas",ref:i,height:t,width:a}))}function P(e){var t,a,n=e.items,i=e.popularity,o=e.valence,l=e.songDictionary,s={},c=y(),u=!1,m=!1;if(c>900?(t=.038*c,a=.4*c):(t=.1*c,a=.77*c,u=!0),c<400&&(m=!0),null!==n)for(var d=0;d<n.length;d++)s[n[d].id]=n[d].album.images[0].url;var f={};function g(e){if(Object.keys(f).length<=0){var n=function(){var n=new Image;n.src=s[r];var l=b(i[r],o[r],a,t);n.onload=function(){e.drawImage(n,l[0],l[1],t,t)},f[r]=n};for(var r in s)n()}else for(var l in f){var c=b(i[l],o[l],a,t);e.drawImage(f[l],c[0],c[1],t,t)}}return s.length<10?r.a.createElement("p",{className:"sorry"}," Loading..."):c<300?r.a.createElement("p",{className:"sorry"},"We're sorry, your display is too small to properly view the data. Please switch to a device with a larger screen size."):r.a.createElement("div",null,r.a.createElement("div",{className:"heading"},r.a.createElement("h2",{className:"header",style:{fontSize:"2.25em",marginBottom:0}}," Where Your Music Falls "),r.a.createElement("div",{className:"key"},r.a.createElement(x,{height:50,width:a,smallFormat:m}))),u?r.a.createElement("div",{className:"smallerCanvas"},r.a.createElement(N,{draw:g,height:a,width:a,imageSize:t,popularity:i,valence:o,songInfo:l,smallFormat:u})):r.a.createElement("div",{className:"bigCanvas"},r.a.createElement(N,{draw:g,height:a,width:a,imageSize:t,popularity:i,valence:o,songInfo:l,smallFormat:u})))}a(31);var I=a(15),j=a.n(I),T=a(16),M=a.n(T),L=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={token:null,items:null,no_data:!1,valence:{},popularity:{},songDictionary:{}},e.getTopSongs=e.getTopSongs.bind(Object(d.a)(Object(d.a)(e))),e.getAudioFeatures=e.getAudioFeatures.bind(Object(d.a)(Object(d.a)(e))),e.getPopularity=e.getPopularity.bind(Object(d.a)(Object(d.a)(e))),e.getSongInfo=e.getSongInfo.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.body.style.zoom="100%",setInterval(this.decrTime,1e3);var e=v.access_token;e&&(this.setState({token:e}),this.getTopSongs(e))}},{key:"getTopSongs",value:function(e){var t=this;f.ajax({url:"https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=long_term",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(a){a?(t.setState({items:a.items,no_data:!1}),t.getAudioFeatures(e),t.getPopularity(e),t.getSongInfo(e)):window.alert("NOOOOO we couldn't get your top songs :((")}})}},{key:"getSongInfo",value:function(e){for(var t=this,a=function(){var a=t.state.items[n].id;t.setState({genreList:[]});var i=t.state.items[n].name,o=t.state.items[n].artists,l=t.state.items[n].album.images[0].url;for(r=0;r<o.length;r++){var s=o[r].id;f.ajax({url:"https://api.spotify.com/v1/artists/"+s,type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){if(e){var n=t.state.songDictionary;n[a]=a in n?{track:i,artists:o,genres:n[a].genres.concat(e.genres),src:l}:{track:i,artists:o,genres:e.genres,src:l},t.setState({songDictionary:n})}else window.alert("NOOOOO we couldn't get your top songs :((")}})}},n=0;n<this.state.items.length;n++){var r;a()}}},{key:"getAudioFeatures",value:function(e){for(var t=this,a=function(){var a=t.state.items[n].id;f.ajax({url:"https://api.spotify.com/v1/audio-features?ids="+a,type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){if(e){var n=t.state.valence;n[a]=[100-100*e.audio_features[0].valence],t.setState({valence:n})}else window.alert("NOOOOO we couldn't get your top songs :((")}})},n=0;n<this.state.items.length;n++)a()}},{key:"getPopularity",value:function(e){for(var t=this,a=function(){var a=t.state.items[n].id;f.ajax({url:"https://api.spotify.com/v1/tracks/"+a,type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){if(e){var n=t.state.popularity;n[a]=[e.popularity],t.setState({popularity:n})}else window.alert("NOOOOO we couldn't get your top songs :((")}})},n=0;n<this.state.items.length;n++)a()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{className:"intro"},!this.state.token&&r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"plotify"},r.a.createElement("img",{className:"logo",src:j.a,alt:"logo"}),r.a.createElement("img",{className:"logoName",src:M.a,alt:"logo"})),r.a.createElement("h1",{className:"divider"}," "),r.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("3a73a562c583499ea19565fc3ebc4bcc","&redirect_uri=").concat("https://plotifyapp.github.io/","&scope=").concat(g.join("%20"),"&response_type=token&show_dialog=true")},"Log in with Spotify"),r.a.createElement("p",{className:"hi"}," made with <3 by Kaily Liu and Joyce He "))),this.state.token&&!this.state.no_data&&r.a.createElement("div",null,r.a.createElement(P,{items:this.state.items,popularity:this.state.popularity,valence:this.state.valence,songDictionary:this.state.songDictionary})),this.state.no_data&&r.a.createElement("p",null,"NOOO it doesn't seem like we were able to retrieve your data :(")))}}]),t}(n.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a72b5c1f.chunk.js.map