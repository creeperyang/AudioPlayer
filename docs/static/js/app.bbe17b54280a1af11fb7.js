webpackJsonp([1],{"2ziG":function(t,s){},FE84:function(t,s){},G27z:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("/5sW"),n=i("aaQ4"),a={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"loader"},[s("div",{staticClass:"loader__figure"})])}]},r={name:"cover",props:["data","mime"],methods:{},computed:{imgUrl:function(){return this.data instanceof Uint8Array?"data:"+this.mime+";base64,"+function(t){for(var s=0,i=t.length,e="",n=void 0;s<i;)n=t.slice(s,Math.min(s+32768,i)),e+=String.fromCharCode.apply(null,n),s+=32768;return btoa(e)}(this.data):this.data}},components:{Loader:i("VU/8")({name:"loader"},a,!1,function(t){i("tB4V")},"data-v-3e25d9e0",null).exports}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cover"},[this.imgUrl?s("img",{attrs:{src:this.imgUrl}}):s("loader")],1)},staticRenderFns:[]},o=function(t){var s=t%60;return t<60?0|t:(t-s)/60+":"+(s<10?"0"+(0|s):0|s)},l={name:"timebar",props:["current","count","width"],computed:{transformStyle:function(){return{transform:"translate3d("+((this.current/this.count*100).toFixed(4)+"%")+",0,0)"}},curTime:function(){return o(this.current)},totalTime:function(){return o(this.count)}}},h={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"bar",style:{width:t.width}},[i("div",{staticClass:"bar-inner",style:t.transformStyle})]),t._v(" "),i("div",{staticClass:"time"},[i("span",{staticClass:"mark"},[t._v(t._s(t.curTime))]),t._v(" "),i("span",{staticClass:"mark"},[t._v(t._s(t.totalTime))])])])},staticRenderFns:[]},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ctrl-container"},[i("svg",{staticClass:"ctrl-icon icon-skip-back",on:{click:function(s){t.switchMusic(-1)}}},[i("use",{attrs:{"xlink:href":"#icon-skip-back"}})]),t._v(" "),t.playing?i("svg",{staticClass:"ctrl-icon icon-play",on:{click:t.playOrPauseMusic}},[i("use",{attrs:{"xlink:href":"#icon-pause"}})]):i("svg",{staticClass:"ctrl-icon icon-play",on:{click:t.playOrPauseMusic}},[i("use",{attrs:{"xlink:href":"#icon-play"}})]),t._v(" "),i("svg",{staticClass:"ctrl-icon icon-skip-forward",on:{click:function(s){t.switchMusic(1)}}},[i("use",{attrs:{"xlink:href":"#icon-skip-forward"}})])])},staticRenderFns:[]},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("svg",{attrs:{display:"none",width:"0",height:"0",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-cog",viewBox:"0 0 1024 1024"}},[s("title",[this._v("cog")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M512 0q53 0 90.5 37.5t37.5 90.5v22q15.667 5.333 37.667 15.333l15.333-15.333q37.667-37.667 90.667-37.667 52.667 0 90.333 37.667t37.667 90.333q0 53-37.667 90.667l-15.333 15.333q10 22 15.333 37.667h22q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-22q-5.333 15.667-15.333 37.667l15.333 15.333q37.667 37.667 37.667 90.667 0 52.667-37.667 90.333t-90.333 37.667q-53 0-90.667-37.667l-15.333-15.333q-22 10-37.667 15.333v22q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-22q-15.667-5.333-37.667-15.333l-15.333 15.333q-37.667 37.667-90.333 37.667-53 0-90.5-37.667t-37.5-90.333q0-53.333 37.333-90.667l15.333-15.333q-10-22-15.333-37.667h-22q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h22q5.333-15.667 15.333-37.667l-15.333-15.333q-37.333-37.333-37.333-90.667 0-52.667 37.5-90.333t90.5-37.667q52.667 0 90.333 37.667l15.333 15.333q22-10 37.667-15.333v-22q0-53 37.5-90.5t90.5-37.5zM512 85.333q-17.667 0-30.167 12.5t-12.5 30.167v88.333q-74.667 10.667-136.333 56.333l-62.333-62.333q-12.667-12.667-30-12.667-17.667 0-30.167 12.5t-12.5 30.167q0 18 12.333 30.333l62.333 62.333q-45.667 61.667-56.333 136.333h-88.333q-17.667 0-30.167 12.5t-12.5 30.167 12.5 30.167 30.167 12.5h88.333q10.667 74.667 56.333 136.333l-62.333 62.333q-12.333 12.333-12.333 30.333 0 17.667 12.5 30.167t30.167 12.5q17.333 0 30-12.667l62.333-62.333q61.667 45.667 136.333 56.333v88.333q0 17.667 12.5 30.167t30.167 12.5 30.167-12.5 12.5-30.167v-88.333q74.667-10.667 136.333-56.333l62.333 62.333q12.667 12.667 30.333 12.667t30.167-12.5 12.5-30.167-12.667-30.333l-62.333-62.333q45.667-61.667 56.333-136.333h88.333q17.667 0 30.167-12.5t12.5-30.167-12.5-30.167-30.167-12.5h-88.333q-10.667-74.667-56.333-136.333l62.333-62.333q12.667-12.667 12.667-30.333t-12.5-30.167-30.167-12.5-30.333 12.667l-62.333 62.333q-61.667-45.667-136.333-56.333v-88.333q0-17.667-12.5-30.167t-30.167-12.5zM512 341.333q70.667 0 120.667 50t50 120.667-50 120.667-120.667 50-120.667-50-50-120.667 50-120.667 120.667-50zM512 426.667q-35.333 0-60.333 25t-25 60.333 25 60.333 60.333 25 60.333-25 25-60.333-25-60.333-60.333-25z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-heart",viewBox:"0 0 1024 1024"}},[s("title",[this._v("heart")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M753.333 85.333q69.667 0 128.5 34.333t93.167 93.167 34.333 128.5q0 50-19.167 97.167t-55.833 83.833l-422.333 422.333-422.333-422.333q-36.667-36.667-55.833-83.833t-19.167-97.167q0-69.667 34.333-128.5t93.167-93.167 128.5-34.333q50.333 0 97.167 19t83.833 56l60.333 60.333 60.333-60.333q36.667-36.667 83.833-55.833t97.167-19.167zM753.333 170.667q-33.333 0-64.667 12.667t-56 37.333l-120.667 120.667-120.667-120.667q-24.667-24.667-56-37.333t-64.667-12.667q-46.667 0-85.833 22.833t-62 62-22.833 85.833q0 33.333 12.667 64.667t37.333 56l362 362 362-362q24.667-24.667 37.333-56t12.667-64.667q0-46.667-22.833-85.833t-62-62-85.833-22.833z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-align-justify",viewBox:"0 0 1024 1024"}},[s("title",[this._v("align-justify")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M128 213.333h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5zM128 725.333h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5zM128 554.667h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5zM128 384h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-skip-back",viewBox:"0 0 1024 1024"}},[s("title",[this._v("skip-back")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M725.333 170.667q17.667 0 30.167 12.5t12.5 30.167q0 18-12.333 30.333l-268.667 268.333 268.667 268.667q12.333 12.333 12.333 30.333 0 17.667-12.5 30t-30.167 12.333q-18 0-30.333-12.333l-298.667-298.667q-12.333-13-12.333-30.333 0-17 12.333-30l298.667-298.667q12.667-12.667 30.333-12.667zM256 170.667q17.667 0 30.167 12.5t12.5 30.167v597.333q0 17.667-12.5 30.167t-30.167 12.5-30.167-12.5-12.5-30.167v-597.333q0-17.667 12.5-30.167t30.167-12.5z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-rewind",viewBox:"0 0 1024 1024"}},[s("title",[this._v("rewind")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M768 170.667q17.667 0 30.167 12.5t12.5 30.167-12.667 30.333l-268.333 268.333 268.333 268.333q12.667 12.667 12.667 30.333t-12.5 30.167-30.167 12.5q-18 0-30.333-12.333l-298.667-298.667q-12.333-12.333-12.333-30.333t12.333-30.333l298.667-298.667q12.333-12.333 30.333-12.333zM512 170.667q17.667 0 30.167 12.5t12.5 30.167-12.667 30.333l-268.333 268.333 268.333 268.333q12.667 12.667 12.667 30.333t-12.5 30.167-30.167 12.5q-18 0-30.333-12.333l-298.667-298.667q-12.333-12.333-12.333-30.333t12.333-30.333l298.667-298.667q12.333-12.333 30.333-12.333z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-play",viewBox:"0 0 1024 1024"}},[s("title",[this._v("play")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M170.667 896v-768l640 384zM644.667 512l-388.667-233.333v466.667z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-pause",viewBox:"0 0 1024 1024"}},[s("title",[this._v("pause")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M682.667 128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-512q0-53 37.5-90.5t90.5-37.5zM341.333 128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-512q0-53 37.5-90.5t90.5-37.5zM341.333 213.333q-17.667 0-30.167 12.5t-12.5 30.167v512q0 17.667 12.5 30.167t30.167 12.5 30.167-12.5 12.5-30.167v-512q0-17.667-12.5-30.167t-30.167-12.5zM682.667 213.333q-17.667 0-30.167 12.5t-12.5 30.167v512q0 17.667 12.5 30.167t30.167 12.5 30.167-12.5 12.5-30.167v-512q0-17.667-12.5-30.167t-30.167-12.5z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-fast-forward",viewBox:"0 0 1024 1024"}},[s("title",[this._v("fast-forward")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M469.333 170.667q17.667 0 30 12.333l298.667 298.667q12.667 12.667 12.667 30.333t-12.667 30.333l-298.667 298.667q-12.333 12.333-30 12.333t-30.167-12.5-12.5-30.167q0-18 12.333-30.333l268.333-268.333-268.333-268.333q-12.333-12.333-12.333-30.333 0-18.333 12.167-30.5t30.5-12.167zM213.333 170.667q17.667 0 30 12.333l298.667 298.667q12.667 12.667 12.667 30.333t-12.667 30.333l-298.667 298.667q-12.333 12.333-30 12.333t-30.167-12.5-12.5-30.167q0-18 12.333-30.333l268.333-268.333-268.333-268.333q-12.333-12.333-12.333-30.333 0-18.333 12.167-30.5t30.5-12.167z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-skip-forward",viewBox:"0 0 1024 1024"}},[s("title",[this._v("skip-forward")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M256 170.667q17.667 0 30.333 12.667l298.667 298.667q12.333 12.333 12.333 30 0 18-12.333 30.333l-298.667 298.667q-12.333 12.333-30.333 12.333-17.667 0-30.167-12.333t-12.5-30q0-17.333 12.333-30.333l268.667-268.667-268.667-268.333q-12.333-13-12.333-30.333 0-17.667 12.5-30.167t30.167-12.5zM725.333 170.667q17.667 0 30.167 12.5t12.5 30.167v597.333q0 17.667-12.5 30.167t-30.167 12.5-30.167-12.5-12.5-30.167v-597.333q0-17.667 12.5-30.167t30.167-12.5z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-shuffle",viewBox:"0 0 1024 1024"}},[s("title",[this._v("shuffle")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M768 0q17.667 0 30.333 12.667l170.667 170.667q12.333 12.333 12.333 30 0 18-12.333 30.333l-170.667 170.667q-12.333 12.333-30.333 12.333-17.667 0-30.167-12.5t-12.5-30.167q0-17 12.333-30l98-98h-67.667q-60 0-112.667 26.167t-88.333 71.5q-55 70-55 158.333 0 89-42.667 165.333-22.667 41-55 73.667-47.333 48.333-110.333 75.333t-133.333 27h-85.333q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5h85.333q60.333 0 112.833-26t88.167-71.333q55-70 55-158.667 0-89 42.667-165.333 23-41.333 55-73.333 47.333-48.333 110.333-75.5t133.333-27.167h67.667l-98-97.667q-12.333-13-12.333-30.333 0-17.667 12.5-30.167t30.167-12.5zM768 597.333q17.667 0 30.333 12.667l170.667 170.667q12.333 12.333 12.333 30.333 0 17.667-12.333 30l-170.667 170.667q-12.333 12.333-30.333 12.333-17.667 0-30.167-12.333t-12.5-30q0-17.333 12.333-30.333l98-98h-67.667q-70.333 0-133.333-27t-110.333-75.333q25.667-37.667 42.667-80.333 35.667 45.333 88.167 71.333t112.833 26h67.667l-98-97.667q-12.333-13-12.333-30.333 0-17.667 12.5-30.167t30.167-12.5zM85.333 170.667h85.333q70.333 0 133.333 27.167t110.333 75.5q-26 38.333-42.667 80.333-35.667-45.333-88.333-71.5t-112.667-26.167h-85.333q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-repeat",viewBox:"0 0 1024 1024"}},[s("title",[this._v("repeat")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M42.667 554.667h256q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-144l116 113.333q49.333 49.667 113 75 61 25 128.333 25t128.333-25q33.333-13.667 62.5-33.5t49.667-40.667 37.333-44.667 27-43.833 17.167-40q6-16.667 22-24.167t32.333-1.833q16.667 6 24.167 21.833t1.833 32.167q-14 42.667-40.667 84.667t-60 75.333q-61.333 61.333-141 93.667-77.333 31.333-160.667 31.333-83 0-160.667-31.333-79.667-32.333-141-93.667l-125-122.333v162q0 17.667-12.5 30.167t-30.167 12.5-30.167-12.5-12.5-30.167v-256q0-17.667 12.5-30.167t30.167-12.5zM512 85.333q83 0 160.667 31.333 79.667 32.333 141 93.667l0.667 0.667 124.333 121.667v-162q0-17.667 12.5-30.167t30.167-12.5 30.167 12.5 12.5 30.167v256q0 17.667-12.5 30.167t-30.167 12.5h-256q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5h144l-116-113.333q-48.667-48.667-110.833-74.333t-130.5-25.667q-67.333 0-128.333 25-63.667 25.333-113 75-20 17.667-43.833 53.833t-36.833 73.833q-6 16.667-22 24.167t-32.333 1.833q-16.667-6-24.167-21.833t-1.833-32.167q14-42.667 40.667-84.667t60-75.333q61.333-61.333 141-93.667 77.667-31.333 160.667-31.333z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-folder",viewBox:"0 0 1024 1024"}},[s("title",[this._v("folder")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M170.667 85.333h213.333l85.333 128h384q53 0 90.5 37.5t37.5 90.5v469.333q0 53-37.5 90.5t-90.5 37.5h-682.667q-53 0-90.5-37.5t-37.5-90.5v-597.333q0-53 37.5-90.5t90.5-37.5zM423.667 298.667l-82.333-128h-170.667q-17.667 0-30.167 12.5t-12.5 30.167v597.333q0 17.667 12.5 30.167t30.167 12.5h682.667q17.667 0 30.167-12.5t12.5-30.167v-469.333q0-17.667-12.5-30.167t-30.167-12.5h-429.667z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-star",viewBox:"0 0 1024 1024"}},[s("title",[this._v("star")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M396.667 384l115.333-355 115.333 355h373.333l-302 209.667 115.333 348.667-302-221-302 219.333 115.333-347-302-209.667h373.333zM565.333 469.333l-53.333-169.667-53.333 169.667h-165.667l133.333 88.333-52.333 157.667 138.333-100 137.667 101-52.333-157.667 133-89.333h-165.333z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-menu",viewBox:"0 0 1024 1024"}},[s("title",[this._v("menu")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M128 213.333h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5zM128 725.333h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5zM128 469.333h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-ellipsis",viewBox:"0 0 1024 1024"}},[s("title",[this._v("ellipsis")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M853.333 384q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5zM170.667 384q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5zM170.667 469.333q-17.667 0-30.167 12.5t-12.5 30.167 12.5 30.167 30.167 12.5 30.167-12.5 12.5-30.167-12.5-30.167-30.167-12.5zM512 384q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5zM512 469.333q-17.667 0-30.167 12.5t-12.5 30.167 12.5 30.167 30.167 12.5 30.167-12.5 12.5-30.167-12.5-30.167-30.167-12.5zM853.333 469.333q-17.667 0-30.167 12.5t-12.5 30.167 12.5 30.167 30.167 12.5 30.167-12.5 12.5-30.167-12.5-30.167-30.167-12.5z"}})]),this._v(" "),s("symbol",{attrs:{id:"icon-headphones",viewBox:"0 0 1024 1024"}},[s("title",[this._v("headphones")]),this._v(" "),s("path",{staticClass:"path1",attrs:{d:"M288 576h-64v448h64c17.6 0 32-14.4 32-32v-384c0-17.6-14.4-32-32-32z"}}),this._v(" "),s("path",{staticClass:"path2",attrs:{d:"M736 576c-17.602 0-32 14.4-32 32v384c0 17.6 14.398 32 32 32h64v-448h-64z"}}),this._v(" "),s("path",{staticClass:"path3",attrs:{d:"M1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512c0 61.412 10.83 120.29 30.656 174.848-19.478 33.206-30.656 71.87-30.656 113.152 0 112.846 83.448 206.188 192 221.716v-443.418c-31.914 4.566-61.664 15.842-87.754 32.378-5.392-26.718-8.246-54.364-8.246-82.676 0-229.75 186.25-416 416-416s416 186.25 416 416c0 28.314-2.83 55.968-8.22 82.696-26.1-16.546-55.854-27.848-87.78-32.418v443.44c108.548-15.532 192-108.874 192-221.714 0-41.274-11.178-79.934-30.648-113.138 19.828-54.566 30.648-113.452 30.648-174.866z"}})])])])},staticRenderFns:[]},v={name:"spectrum",props:["width","height","analyser","current"],computed:{style:function(){return{width:this.width+"px",height:this.height+"px"}}},mounted:function(){var t=this;this.ctx=this.$refs.canvas.getContext("2d"),this.$watch("current",function(){t.drawing||t.drawSpectrum()})},methods:{drawSpectrum:function(){var t=this.ctx,s=this.analyser,i=new Uint8Array(s.frequencyBinCount);s.getByteFrequencyData(i);var e=this.width,n=this.height,a=Math.round(e/3),r=void 0,c=void 0;for(this.drawing=!0,t.clearRect(0,0,e,n),t.fillStyle="#0b0a31",r=0;r<a;++r)c=i[r+100]/5,t.fillRect(3*r,0,1,c);this.drawing=!1}}},p={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"spectrum-container"},[s("canvas",{ref:"canvas",style:this.style,attrs:{width:this.width,height:this.height}})])},staticRenderFns:[]},q={name:"Player",props:["musicList","initialIndex"],data:function(){return{title:"Creeper's player",currentIndex:this.initialIndex||0,tag:{},duration:100,currentTime:0,analyser:null}},computed:{cover:function(){return this.tag.image||{}}},mounted:function(){if(this.musicList&&this.musicList.length){var t=this.musicList[this.currentIndex].url;this.play(t)}},methods:{play:function(t){var s=this;this.destroy(),this.setup(),function(t,s){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer",i.onload=function(){return s(i)},i.onerror=function(t){return console.log(t)},i.send()}(t,function(t){var i=t.response,e=Object(n.parse)(new Uint8Array(i));s.tag=e,s.audioCtx.decodeAudioData(i,function(t){s.sourceNode.buffer=t,s.sourceNode.start(0),s.duration=t.duration},function(t){console.log("Error with decoding audio data"+t.err)})})},setup:function(){var t=window.AudioContext||window.webkitAudioContext,s=this.audioCtx=new t;this.sourceNode=s.createBufferSource(),this.scriptNode=s.createScriptProcessor(4096,1,1),this.analyser=s.createAnalyser(),this.analyser.smoothingTimeConstant=.5,this.analyser.fftSize=1024,this.analyser.maxDecibels=80,this.sourceNode.connect(this.analyser),this.analyser.connect(this.scriptNode),this.scriptNode.connect(s.destination),this.scriptNode.onaudioprocess=this.onAudioProcess.bind(this),this.sourceNode.onended=this.onEnded.bind(this)},destroy:function(){this.sourceNode&&(this.sourceNode.disconnect(this.analyser),this.sourceNode.onended=null,this.sourceNode=null),this.analyser&&(this.analyser.disconnect(this.scriptNode),this.analyser=null),this.scriptNode&&(this.scriptNode.disconnect(this.audioCtx.destination),this.scriptNode.onaudioprocess=null,this.scriptNode=null)},onAudioProcess:function(t){for(var s=t.inputBuffer,i=t.outputBuffer,e=0;e<i.numberOfChannels;e++)for(var n=s.getChannelData(e),a=i.getChannelData(e),r=0;r<s.length;r++)a[r]=n[r];this.currentTime+=s.duration,this.currentTime>this.duration&&(this.currentTime=this.duration)},onEnded:function(){this.destroy(),this.switchMusic(1)},pauseMusic:function(){this.scriptNode.disconnect(this.audioCtx.destination)},resumeMusic:function(){this.scriptNode.connect(this.audioCtx.destination)},switchMusic:function(t){var s=this.currentIndex+t;s<0?s=this.musicList.length-1:s>this.musicList.length-1&&(s=0),this.currentIndex=s,this.duration=0,this.play(this.musicList[s].url)}},components:{Cover:i("VU/8")(r,c,!1,function(t){i("G27z")},"data-v-687271f0",null).exports,Timebar:i("VU/8")(l,h,!1,function(t){i("kYDu")},"data-v-898bd0e8",null).exports,Controller:i("VU/8")({name:"controller",data:function(){return{playing:!0}},methods:{playOrPauseMusic:function(){this.playing=!this.playing,this.$emit(this.playing?"play":"pause")},switchMusic:function(t){this.$emit(t>0?"next":"prev")}}},u,!1,function(t){i("g7ET")},"data-v-355b521d",null).exports,SvgIcons:i("VU/8")({name:"svg-icons"},d,!1,null,null,null).exports,Spectrum:i("VU/8")(v,p,!1,function(t){i("2ziG")},null,null).exports}},m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("main",{staticClass:"container"},[i("svg-icons"),t._v(" "),i("header",{staticClass:"header"},[i("svg",{staticClass:"icon-headphones"},[i("use",{attrs:{"xlink:href":"#icon-headphones"}})]),t._v(" "),i("span",{staticClass:"title"},[t._v("Creeper's Player")])]),t._v(" "),i("Cover",{attrs:{mime:t.cover.mime,data:t.cover.data}}),t._v(" "),i("Timebar",{attrs:{count:t.duration,current:t.currentTime,width:300}}),t._v(" "),i("section",{staticClass:"metadata"},[i("p",{staticClass:"music-title"},[t._v(t._s(t.tag.title||" "))]),t._v(" "),i("p",{staticClass:"music-artist"},[t._v(t._s(t.tag.artist||" "))])]),t._v(" "),i("controller",{on:{play:t.resumeMusic,pause:t.pauseMusic,next:function(s){t.switchMusic(1)},prev:function(s){t.switchMusic(-1)}}}),t._v(" "),i("div",{staticClass:"words"},[t._v("\n    最怕有一天，突然就听懂了一首歌\n  ")]),t._v(" "),i("spectrum",{attrs:{analyser:t.analyser,current:t.currentTime,width:88,height:24}})],1)},staticRenderFns:[]},f={state:{musicList:[{url:"http://7sbnba.com1.z0.glb.clouddn.com/music-Walk Away.mp3"},{url:"http://7sbnba.com1.z0.glb.clouddn.com/music-红玫瑰.mp3"},{url:"http://7sbnba.com1.z0.glb.clouddn.com/music-原谅.mp3"},{url:"http://7sbnba.com1.z0.glb.clouddn.com/music-我们怎么了.mp3"},{url:"http://7sbnba.com1.z0.glb.clouddn.com/music-遥远的她.mp3"},{url:"http://7sbnba.com1.z0.glb.clouddn.com/music-魔鬼中的天使.mp3"},{url:"http://7sbnba.com1.z0.glb.clouddn.com/music-Apologize.mp3"},{url:"http://7sbnba.com1.z0.glb.clouddn.com/music-改造人.mp3"}]}},_={name:"app",data:function(){return{musicList:f.state.musicList}},components:{Player:i("VU/8")(q,m,!1,function(t){i("FE84")},"data-v-710da1c7",null).exports}},y={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("player",{attrs:{musicList:this.musicList,initialIndex:0}}),this._v(" "),s("router-view")],1)},staticRenderFns:[]},w=i("VU/8")(_,y,!1,function(t){i("bzrS")},null,null).exports,g=i("/ocq");e.a.use(g.a);var b=new g.a({routes:[]});e.a.config.productionTip=!1,new e.a({el:"#app",router:b,render:function(t){return t(w)}})},bzrS:function(t,s){},g7ET:function(t,s){},kYDu:function(t,s){},tB4V:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.bbe17b54280a1af11fb7.js.map