(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"3be5":function(e,t,a){},"53c0":function(e,t,a){"use strict";a("3be5")},9365:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"game"},[a("TheTitle",{attrs:{title:"Teams",icon:"account-group-outline",props:{gameId:e.gameId},component:"teams-add-dialog"}}),e.winRate?a("div",{staticClass:"win-rate"},[a("v-icon",{staticClass:"mr-3",attrs:{dark:"",color:"primary"}},[e._v("mdi-brightness-percent")]),a("span",[e._v("Your win rate is: "+e._s(e.winRate))])],1):e._e(),e.gameTeams?a("TheCardsList",{attrs:{"card-items":e.gameTeams,"card-route":e.teamRoute},on:{favorite:e.toggleFavoriteTeam},scopedSlots:e._u([{key:"action",fn:function(e){var t=e.item;return[a("TeamsEditDialog",{attrs:{team:t}})]}}],null,!1,1145852791)}):e._e()],1)},r=[],u=a("5530"),i=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("a6f4")),c=Object(i["h"])({name:"Game",components:{TheTitle:function(){return a.e("chunk-2d0dee65").then(a.bind(null,"882a"))},TheCardsList:function(){return Promise.all([a.e("chunk-07709945"),a.e("chunk-7e3a9dbc")]).then(a.bind(null,"baab"))},TeamsEditDialog:function(){return Promise.all([a.e("chunk-07709945"),a.e("chunk-2e20e2e1")]).then(a.bind(null,"a90e"))}},props:{gameId:{type:String,required:!0}},setup:function(e,t){var a=Object(i["Q"])(e),n=a.gameId,r=t.root.$store,c=Object(i["b"])((function(){return r.state.teams.teams})),o=Object(i["b"])((function(){return r.state.games.games})),s=function(){return r.dispatch("games/loadGames")},l=function(){return r.dispatch("games/loadWinRate",n.value)},m=function(){return r.dispatch("teams/loadTeams")},d=function(){var e,t;null!==(e=null===c||void 0===c?void 0:c.value)&&void 0!==e||m(),null!==(t=null===o||void 0===o?void 0:o.value)&&void 0!==t||s(),l()};d();var b=Object(i["b"])((function(){return r.state.games.winRate})),f=function(){return r.getters["teams/getGameTeams"](n.value)},g=Object(i["b"])((function(){return null!==c&&void 0!==c&&c.value?f():null})),v=function(){return r.getters["games/getGame"](n.value)},p=Object(i["b"])((function(){return{name:"team",params:{teamId:""},query:{gameId:n.value}}})),h=function(e){return r.dispatch("teams/updateTeam",e)},T=function(e){var t=Object(u["a"])(Object(u["a"])({},e),{},{gameId:n.value});h(t)},w=function(e){return r.dispatch("setBackTitle",e)};return Object(i["w"])((function(){return w()})),Object(i["Z"])((function(){if(o.value){var e=v(),t=e.name;w(t)}})),{winRate:b,gameTeams:g,teamRoute:p,toggleFavoriteTeam:T}}}),o=c,s=(a("53c0"),a("2877")),l=a("6544"),m=a.n(l),d=a("132d"),b=Object(s["a"])(o,n,r,!1,null,null,null);t["default"]=b.exports;m()(b,{VIcon:d["a"]})}}]);
//# sourceMappingURL=game.231754f9.js.map