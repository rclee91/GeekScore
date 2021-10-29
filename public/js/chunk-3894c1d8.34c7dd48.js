(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3894c1d8"],{"4d2b":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("BaseDialog",{attrs:{"activator-icon":"pencil-outline",color:"#fff",header:"Edit game info",simple:""},on:{submit:e.submitGame}},[e._l(e.fields,(function(t){return i("v-text-field",{key:t.label,attrs:{clearable:"",rules:t.rules,"prepend-icon":"mdi-"+t.icon,label:t.label},model:{value:t.value,callback:function(i){e.$set(t,"value","string"===typeof i?i.trim():i)},expression:"field.value"}})})),e.fields.imageUrl.value?i("v-img",{attrs:{src:e.fields.imageUrl.value,alt:e.fields.name.value,height:"200",contain:""}}):e._e(),i("v-switch",{attrs:{label:"Delete game",color:"error","hide-details":""},model:{value:e.toDelete,callback:function(t){e.toDelete=t},expression:"toDelete"}})],2)},a=[],l=i("2909"),s=(i("b0c0"),i("99af"),i("9dd9")),o=i("a6f4"),r=Object(o["h"])({name:"GamesEditDialog",props:{game:{type:Object,required:!0}},setup:function(e,t){var i=t.root.$store,n=Object(o["J"])(!1),a=Object(o["Q"])(e),r=a.game,u=Object(o["b"])((function(){return i.getters["games/getGamesNames"]()})),c=function(e){return Object(s["g"])(e,u.value,!0)},h=Object(o["H"])({name:{label:"Name",icon:"dice-multiple-outline",value:r.value.name,rules:[].concat(Object(l["a"])(s["e"]),[s["c"],c])},bggURL:{label:"Board geek game URL",icon:"cards-outline",value:void 0===r.value.bggURL?"":r.value.bggURL,rules:[s["b"]]},melodiceURL:{label:"Melodice URL",icon:"music-outline",value:void 0===r.value.melodiceURL?"":r.value.melodiceURL,rules:[s["b"]]},rulesURL:{label:"Rules URL",icon:"book-open-variant-outline",value:void 0===r.value.rulesURL?"":r.value.rulesURL,rules:[s["b"]]},imageUrl:{label:"Image URL",icon:"image-outline",value:void 0===r.value.imageUrl?"":r.value.imageUrl,rules:[s["b"]]}}),d=function(){if(n.value)return i.dispatch("games/deleteGame",r.value._id);v()},v=function(){var e={_id:r.value._id,name:h.name.value,bggURL:h.bggURL.value,melodiceURL:h.melodiceURL.value,rulesURL:h.rulesURL.value,imageUrl:h.imageUrl.value};return i.dispatch("games/updateGame",e)};return{toDelete:n,fields:h,submitGame:d,updateTheGame:v}}}),u=r,c=i("2877"),h=i("6544"),d=i.n(h),v=i("adda"),f=i("b73d"),p=i("8654"),m=Object(c["a"])(u,n,a,!1,null,null,null);t["default"]=m.exports;d()(m,{VImg:v["a"],VSwitch:f["a"],VTextField:p["a"]})},5311:function(e,t,i){"use strict";var n=i("5607"),a=i("2b0e");t["a"]=a["default"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},8547:function(e,t,i){"use strict";var n=i("2b0e"),a=i("80d2");t["a"]=n["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["j"]}}})},"9d01":function(e,t,i){},"9dd9":function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"f",(function(){return a})),i.d(t,"a",(function(){return o})),i.d(t,"d",(function(){return r})),i.d(t,"b",(function(){return u})),i.d(t,"g",(function(){return c})),i.d(t,"e",(function(){return h}));i("ac1f"),i("5319"),i("fb6a"),i("466d"),i("4de4");var n=function(e){return!!e||"Field is required"},a=function(e){var t=!!((null===e||void 0===e?void 0:e.length)<=100),i="Field is too long";return!e||(t||i)},l=function(e){var t=!!((null===e||void 0===e?void 0:e.length)>=2),i="Field is too short";return!e||(t||i)},s=function(e){var t=!(null===e||void 0===e||!e.replace(/\s/g,"").length),i="Field contains only whitespaces";return!e||(t||i)},o=function(e){var t=null===e||void 0===e?void 0:e.slice(0,100),i=/.+@.+\..+/.test(t),n="E-mail must be valid";return!e||(i||n)},r=function(e){var t=!!((null===e||void 0===e?void 0:e.length)>=6),i="Password is too short";return!e||(t||i)},u=function(e){var t=!(null===e||void 0===e||!e.match(/(https?:\/\/[^\s]+)/g)),i="Please provide a correct link";return!e||(t||i)},c=function(e,t,i){var n=null===t||void 0===t?void 0:t.filter((function(t){return t===e})),a=i?(null===n||void 0===n?void 0:n.length)>=1:(null===n||void 0===n?void 0:n.length)>1,l="This field should be unique";return!e||(!a||l)},h=[a,l,s]},b73d:function(e,t,i){"use strict";var n=i("15fd"),a=i("5530"),l=(i("0481"),i("ec29"),i("9d01"),i("fe09")),s=i("c37a"),o=i("c3f0"),r=i("0789"),u=i("490a"),c=i("80d2"),h=["title"];t["a"]=l["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var e=this.attrs$,t=(e.title,Object(n["a"])(e,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),t)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(u["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===c["x"].left&&this.isActive||e.keyCode===c["x"].right&&!this.isActive)&&this.onChange()}}})},ec29:function(e,t,i){},fe09:function(e,t,i){"use strict";i.d(t,"b",(function(){return o}));i("d3b7"),i("25f0"),i("4de4");var n=i("c37a"),a=i("5311"),l=i("8547"),s=i("58df");function o(e){e.preventDefault()}t["a"]=Object(s["a"])(n["a"],a["a"],l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=n["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:o},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===n&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}})}}]);
//# sourceMappingURL=chunk-3894c1d8.34c7dd48.js.map