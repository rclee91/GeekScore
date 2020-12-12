(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tools"],{"4de4e":function(t,e,s){"use strict";var i=s("585e"),a=s.n(i);a.a},"54cc":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("the-title",{attrs:{title:"Tools",icon:"hammer-screwdriver"}}),s("v-row",[s("v-col",{attrs:{sm:"6",md:"4",cols:"12"}},[s("dice-roller-dialog")],1),s("v-col",{attrs:{sm:"6",md:"4",cols:"12"}},[s("timer-dialog")],1)],1)],1)},a=[],o=s("882a"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("the-dialog",{attrs:{header:"Dice Roller",simple:""},scopedSlots:t._u([{key:"activator",fn:function(){return[s("v-card",{staticClass:"mx-auto card-pointer",attrs:{dark:"",raised:""}},[s("div",{staticClass:"title-wrap"},[s("v-card-title",{staticClass:"d-flex"},[s("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v("mdi-dice-d20")]),s("span",{staticClass:"label_text"},[t._v("Dice Roller")])],1)],1)])]},proxy:!0},{key:"footer",fn:function(){return[s("v-btn",{attrs:{color:"secondary darken-1",outlined:""},on:{click:t.rollDice}},[s("v-icon",{staticClass:"mr-1",attrs:{dark:""}},[t._v(" mdi-dice-6 ")]),t._v("Roll ")],1)]},proxy:!0}])},[t._l(t.fields,(function(e,i){return s("v-card-text",{key:i,staticClass:"d-flex justify-center"},[s("v-icon",{attrs:{large:"",color:"grey darken-1"},on:{click:function(t){return e.func("minus")}}},[t._v(" mdi-minus ")]),s("v-text-field",{staticClass:"mx-2",attrs:{value:e.model,label:e.label,readonly:""}}),s("v-icon",{attrs:{large:"",color:"grey darken-1"},on:{click:function(t){return e.func("plus")}}},[t._v(" mdi-plus ")])],1)})),s("div",{staticClass:"dice",class:t.show?"boxRotate box-transition":"box-transition"},[s("span",[t._v(" "+t._s(t.totalValue?t.totalValue:0)+" ")])])],2)},l=[],r={name:"DiceRollerDialog",data:function(){return{show:!0,totalValue:"",fields:{diceSide:{func:this.changeSide,label:"Dice Sides",model:3},rollNumber:{func:this.changeRoll,label:"Number of dices",model:1}}}},methods:{changeSide:function(t){"plus"===t?this.fields.diceSide.model<20&&this.fields.diceSide.model++:this.fields.diceSide.model>3&&this.fields.diceSide.model--},changeRoll:function(t){"plus"===t?this.fields.rollNumber.model<10&&this.fields.rollNumber.model++:this.fields.rollNumber.model>1&&this.fields.rollNumber.model--},rollDice:function(){this.show=!this.show,this.totalValue=this.fields.rollNumber.model+Math.floor(Math.random()*(this.fields.diceSide.model*this.fields.rollNumber.model-this.fields.rollNumber.model+1))}}},c=r,d=(s("4de4e"),s("2877")),u=s("6544"),h=s.n(u),m=s("8336"),f=s("b0af"),v=s("99d9"),b=s("132d"),p=s("8654"),g=Object(d["a"])(c,n,l,!1,null,"684a7846",null),k=g.exports;h()(g,{VBtn:m["a"],VCard:f["a"],VCardText:v["b"],VCardTitle:v["c"],VIcon:b["a"],VTextField:p["a"]});var _=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("the-dialog",{attrs:{header:"Clock Tools",simple:""},scopedSlots:t._u([{key:"activator",fn:function(){return[s("v-card",{staticClass:"mx-auto card-pointer",attrs:{dark:"",raised:""}},[s("div",{staticClass:"title-wrap"},[s("v-card-title",{staticClass:"d-flex"},[s("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v("mdi-timer")]),s("span",{staticClass:"label_text"},[t._v("Clock Tools")])],1)],1)])]},proxy:!0},{key:"footer",fn:function(){return[s("v-btn",{staticClass:"mr-2",attrs:{color:"secondary darken-1",outlined:""},on:{click:t.playPauseTimer}},[s("v-icon",{attrs:{dark:""}},[t._v(" "+t._s(t.pause?"mdi-play":"mdi-pause")+" ")]),t._v(" "+t._s(t.pause?"Play":"Pause")+" ")],1),s("v-btn",{attrs:{color:"secondary darken-1",outlined:""},on:{click:t.stopTimer}},[s("v-icon",{attrs:{dark:""}},[t._v(" mdi-stop ")]),t._v(" Stop ")],1)]},proxy:!0}])},[s("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tabs-slider",{attrs:{color:"secondary"}}),t._l(t.tabs,(function(e){return s("v-tab",{key:e.name,attrs:{href:"#"+e.href}},[s("span",{staticClass:"mt-2"},[t._v(t._s(e.name))])])}))],2),s("v-tabs-items",{staticClass:"pt-4 px-4",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab-item",{attrs:{value:"tab-timer"}},[s("clock-tools-fields",{attrs:{hours:t.hours,minutes:t.minutes,seconds:t.seconds,"disabled-field":""},on:{"update:hours":function(e){t.hours=e},"update:minutes":function(e){t.minutes=e},"update:seconds":function(e){t.seconds=e}}})],1),s("v-tab-item",{attrs:{value:"tab-countdown"}},[s("clock-tools-fields",{attrs:{hours:t.hours,minutes:t.minutes,seconds:t.seconds},on:{"update:hours":function(e){t.hours=e},"update:minutes":function(e){t.minutes=e},"update:seconds":function(e){t.seconds=e}}})],1)],1)],1)},C=[],x=(s("d3b7"),s("25f0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"mx-auto"},[s("v-col",{staticClass:"col"},[s("v-text-field",{attrs:{value:t.hours,maxlength:"2",dense:"",label:"Hours",outlined:"",disabled:t.disabledField},on:{input:function(e){return t.$emit("update:hours",e)}}})],1),s("v-col",{staticClass:"col"},[s("v-text-field",{attrs:{value:t.minutes,maxlength:"2",dense:"",label:"Minutes",outlined:"",disabled:t.disabledField},on:{input:function(e){return t.$emit("update:minutes",e)}}})],1),s("v-col",{staticClass:"col"},[s("v-text-field",{attrs:{value:t.seconds,maxlength:"2",dense:"",label:"Seconds",outlined:"",disabled:t.disabledField},on:{input:function(e){return t.$emit("update:seconds",e)}}})],1)],1)}),y=[],T=(s("a9e3"),{name:"ClockToolsFields",props:{hours:{type:[String,Number],required:!0},minutes:{type:[String,Number],required:!0},seconds:{type:[String,Number],required:!0},disabledField:{type:Boolean}}}),w=T,V=s("62ad"),S=s("0fd9"),j=Object(d["a"])(w,x,y,!1,null,null,null),N=j.exports;h()(j,{VCol:V["a"],VRow:S["a"],VTextField:p["a"]});var D={name:"TimerDialog",components:{ClockToolsFields:N},data:function(){return{hours:"00",minutes:"00",seconds:"00",tab:null,pause:!0,playInterval:!1,tabs:[{name:"Timer",href:"tab-timer"},{name:"Countdown",href:"tab-countdown"}]}},watch:{tab:function(){this.stopTimer()}},destroyed:function(){this.stopTimer()},methods:{playPauseTimer:function(){var t=this;this.pause=!this.pause,this.pause?clearInterval(this.playInterval):this.playInterval=setInterval((function(){"tab-timer"===t.tab?t.timerMethod():t.countdownMethod()}),1e3)},stopTimer:function(){this.hours="00",this.minutes="00",this.seconds="00",this.pause=!0,clearInterval(this.playInterval),window.navigator.vibrate(1e3)},timerMethod:function(){this.seconds++,this.seconds>59&&(this.seconds=0,this.minutes++,this.minutes>59&&(this.minutes=0,this.hours++,this.hours<10&&(this.hours="0"+this.hours)),this.minutes<10&&(this.minutes="0"+this.minutes)),this.seconds<10&&(this.seconds="0"+this.seconds)},countdownMethod:function(){this.seconds--,"00"===this.hours&&"00"===this.minutes&&this.seconds<="00"?this.stopTimer():(this.seconds<0&&(this.seconds="59",this.minutes>=1?this.minutes--:this.minutes="00",this.minutes<=0&&this.hours>"00"&&(this.minutes="59",this.hours>=1?this.hours--:this.hours="00")),this.seconds<10&&(this.seconds="0"+this.seconds),this.minutes<10&&this.minutes.toString().length<=1&&(this.minutes="0"+this.minutes),this.hours<10&&this.hours.toString().length<=1&&(this.hours="0"+this.hours))}}},O=D,R=s("71a3"),I=s("c671"),$=s("fe57"),B=s("aac8"),F=s("9a96"),P=Object(d["a"])(O,_,C,!1,null,null,null),M=P.exports;h()(P,{VBtn:m["a"],VCard:f["a"],VCardTitle:v["c"],VIcon:b["a"],VTab:R["a"],VTabItem:I["a"],VTabs:$["a"],VTabsItems:B["a"],VTabsSlider:F["a"]});var E={name:"ToolsPage",components:{TheTitle:o["a"],DiceRollerDialog:k,TimerDialog:M},data:function(){return{tools:[{id:"dice",name:"Dice Roller"},{id:"clock",name:"Clock Tools"}]}}},q=E,H=Object(d["a"])(q,i,a,!1,null,null,null);e["default"]=H.exports;h()(H,{VCol:V["a"],VRow:S["a"]})},"585e":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return r}));var i=s("b0af"),a=s("80d2"),o=Object(a["i"])("v-card__actions"),n=Object(a["i"])("v-card__subtitle"),l=Object(a["i"])("v-card__text"),r=Object(a["i"])("v-card__title");i["a"]},b0af:function(t,e,s){"use strict";s("0481"),s("4069"),s("a9e3");var i=s("f3f3"),a=(s("615b"),s("10d2")),o=s("297c"),n=s("1c87"),l=s("58df");e["a"]=Object(l["a"])(o["a"],n["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),s=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(s,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=tools.c1185118.js.map