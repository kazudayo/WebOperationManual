(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{227:function(t,e,o){var content=o(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("36b005b6",content,!0,{sourceMap:!1})},229:function(t,e,o){var content=o(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("2e60413e",content,!0,{sourceMap:!1})},247:function(t,e,o){"use strict";var n=o(366),r=o(368),m=o(367),c=(o(24),o(50),o(56),o(49),o(48),o(26),o(5),o(23),o(41),o(30),o(31),o(11));o(57);function l(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,m=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return m=t.done,t},e:function(t){c=!0,r=t},f:function(){try{m||null==o.return||o.return()}finally{if(c)throw r}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var f={data:function(){return{md:[],items:[]}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var o,n,r,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("json",{deep:!0}).where({extension:".json"}).fetch();case 2:o=e.sent,n=l(o);try{for(n.s();!(r=n.n()).done;)m=r.value,t.items.push({title:m.model,to:"/model"})}catch(t){n.e(t)}finally{n.f()}case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){if(localStorage.getItem("visited")){var t=localStorage.getItem("model"),section=localStorage.getItem("sectionTitle");this.$router.push("".concat(t)+"/".concat(section)),localStorage.removeItem("visited")}},methods:{selectDrawer:function(t){localStorage.setItem("sectionTitle","はじめに"),"/model"===t.to?(localStorage.setItem("model",t.title),localStorage.removeItem("pageTitle"),localStorage.setItem("selectedId1",null),this.$router.push("/".concat(t.title)+"/はじめに")):this.$router.push("".concat(t.to))}}},h=o(52),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e(n.a,[e("mainHeader"),t._v(" "),e(m.a,[e(r.a,[e("Nuxt")],1)],1),t._v(" "),e("mainFooter")],1)}),[],!1,null,null,null);e.a=component.exports},248:function(t,e,o){"use strict";var n=o(52),component=Object(n.a)({},(function(){return(0,this._self._c)("nuxt")}),[],!1,null,null,null);e.a=component.exports},249:function(t,e,o){"use strict";var n=o(366),r=(o(345),o(52)),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"mc"},[e("mainHeader",{staticStyle:{"z-index":"6"}}),t._v(" "),e("mainSidebar"),t._v(" "),e("Nuxt"),t._v(" "),e("mainFooter"),t._v(" "),e("mainOutline")],1)}),[],!1,null,null,null);e.a=component.exports},261:function(t,e,o){o(262),t.exports=o(263)},323:function(t,e,o){"use strict";o(227)},324:function(t,e,o){var n=o(37)((function(i){return i[1]}));n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),n.locals={},t.exports=n},327:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("5135230c",content,!0,{sourceMap:!1})},328:function(t,e,o){var n=o(37)((function(i){return i[1]}));n.push([t.i,'body,html{border:none;margin:0;overflow:hidden;padding:0;-webkit-overflow-scrolling:touch;-webkit-text-size-adjust:auto;font-family:"Baskerville","Times New Roman","klee",sans-serif;width:100%}body,html{height:100%;overscroll-behavior:none;position:relative}body{-webkit-touch-callout:none;-moz-user-select:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;background-color:var(--CA-black3);overflow-x:hidden}::-webkit-scrollbar{color:transparent;display:none;width:0}.main{display:flex}.title{font-weight:lighter;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.user--img{height:100%;-o-object-fit:contain;object-fit:contain;position:absolute;right:0;width:100%}.text-style{white-space:pre-line}',""]),n.locals={},t.exports=n},329:function(t,e,o){var content=o(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("17bc9ac2",content,!0,{sourceMap:!1})},330:function(t,e,o){var n=o(37)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),n.push([t.i,'.print-area{background-color:#fff;height:296.5mm;margin-bottom:40px;overflow:hidden;page-break-after:always;position:relative;width:210mm;z-index:0}.print-area--tombo{height:340.9mm;margin-bottom:150px;margin-top:80px;width:241.5mm}.page{font-family:"Noto Sans",sans-serif;height:296.5mm;left:0;padding:12mm 15mm;position:absolute;top:0;width:210mm}.page--tombo{left:15.75mm;top:22.2mm}.page:lang(en),.page:lang(ja){font-family:"Noto Sans JP",sans-serif}@media screen{.print-area{box-shadow:0 .5mm 2mm rgba(0,0,0,.3);left:50%;transform:translate3d(-50%,0,0)}}@media print{.no-print{display:none}body{margin:0;padding:0}.print-area{left:0;margin-bottom:0;margin-top:0;top:0}.v-main{padding-top:0!important}.container{padding:0!important}.v-application{background:#fff!important}}@page{size:A4 portrait;margin:0}.split-L,.split-R{width:49%}.split-3,.split-L,.split-R{display:inline-block;position:relative;vertical-align:top}.split-3{width:32.5%}.page-number{bottom:7mm;font-size:.75rem;font-weight:700;position:absolute}.page-number__left{left:7mm}.page-number__right{right:7mm}.section{font-size:.75rem;font-weight:400;position:absolute;top:5mm}.section__left{left:5mm}.section__right{right:5mm}.thumbIndex{color:#fff;font-size:.7rem;font-weight:600;height:53mm;line-height:9mm;position:absolute;text-align:center;vertical-align:middle;width:12.45mm;writing-mode:vertical-rl}.thumbIndex__posi1{background-color:var(--B2);top:16mm}.thumbIndex__posi2{background-color:var(--G1);top:69mm}.thumbIndex__posi3{background-color:var(--G3);top:122mm}.thumbIndex__posi4{background-color:var(--G4);top:175mm}.thumbIndex__posi5{background-color:var(--G5);top:228mm}.thumbIndex__left{left:-3.45mm}.thumbIndex__right{right:-3.45mm}.thumbIndex__left .thumbIndex__text{height:100%;position:absolute;right:0;width:9mm}.thumbIndex__right .thumbIndex__text{height:100%;left:0;position:absolute;width:9mm}.tombo{background-color:#fff;height:328mm;left:0;position:absolute;top:6.2mm;width:100%;z-index:-1}.tombo-mark{border:1px solid #000;height:12.3mm;position:absolute;width:12.3mm;z-index:100}.tombo-mark__top-left-vertical{border-left:none;border-top:none;left:10px;top:0}.tombo-mark__top-left-width{border-left:none;border-top:none;left:0;top:10px}.tombo-mark__top-center-vertical{top:0;width:1px}.tombo-mark__top-center-vertical,.tombo-mark__top-center-width{background-color:#000;border:none;left:50%;transform:translate3d(-50%,0,0)}.tombo-mark__top-center-width{height:.5px;top:6.15mm;width:24.6mm}.tombo-mark__top-center-circle{border-radius:6.15mm;height:6.15mm;left:50%;top:6.15mm;transform:translate3d(-50%,-50%,0);width:6.15mm}.tombo-mark__top-right-vertical{border-right:none;border-top:none;right:10px;top:0}.tombo-mark__top-right-width{border-right:none;border-top:none;right:0;top:10px}.tombo-mark__middle-left-width{background-color:#000;border:none;height:24.6mm;left:6.15mm;top:50%;transform:translate3d(0,-50%,0);width:1px}.tombo-mark__middle-left-vertical{background-color:#000;border:none;height:.5px;left:6.15mm;top:50%;transform:translate3d(-50%,0,0)}.tombo-mark__middle-left-circle{border-radius:6.15mm;height:6.15mm;left:6.15mm;top:50%;transform:translate3d(-50%,-50%,0);width:6.15mm}.tombo-mark__middle-right-width{background-color:#000;border:none;height:24.6mm;right:6.15mm;top:50%;transform:translate3d(0,-50%,0);width:1px}.tombo-mark__middle-right-vertical{background-color:#000;border:none;height:.5px;right:6.15mm;top:50%;transform:translate3d(50%,0,0)}.tombo-mark__middle-right-circle{border-radius:6.15mm;height:6.15mm;right:6.15mm;top:50%;transform:translate3d(50%,-50%,0);width:6.15mm}.tombo-mark__bottom-left-vertical{border-bottom:none;border-left:none;bottom:0;left:10px}.tombo-mark__bottom-left-width{border-bottom:none;border-left:none;bottom:10px;left:0}.tombo-mark__bottom-center-vertical{bottom:0;width:1px}.tombo-mark__bottom-center-vertical,.tombo-mark__bottom-center-width{background-color:#000;border:none;left:50%;transform:translate3d(-50%,0,0)}.tombo-mark__bottom-center-width{bottom:6.15mm;height:.5px;width:24.6mm}.tombo-mark__bottom-center-circle{border-radius:6.15mm;bottom:6.15mm;height:6.15mm;left:50%;transform:translate3d(-50%,50%,0);width:6.15mm}.tombo-mark__bottom-right-vertical{border-bottom:none;border-right:none;bottom:0;right:10px}.tombo-mark__bottom-right-width{border-bottom:none;border-right:none;bottom:10px;right:0}.tombo-line-checker{background-color:rgba(0,0,0,.02);height:303.4mm;left:12.3mm;position:absolute;top:12.3mm;width:216.9mm;z-index:1}',""]),n.locals={},t.exports=n},331:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("498e2b5c",content,!0,{sourceMap:!1})},332:function(t,e,o){var n=o(37)((function(i){return i[1]}));n.push([t.i,':root{--B1:#221814;--B2:#251e1b;--B3:#3e3a39;--G1:#595757;--G2:#7d7c7d;--G3:#888889;--G4:#b4b5b5;--G5:#c9c9ca;--G6:#dcdcdd;--W:#fff}.nuxt-content h1{background:#b4b5b5;background:var(--G4);border-radius:1mm;color:#fff;color:var(--W);font-size:1.75rem;font-weight:700;margin:7mm 0 3mm;padding:1mm 3mm;position:relative}.h1-L,.h1-R{height:49.55px}.h1-R{background-color:hsla(0,0%,100%,0)!important}.h3-title{border-bottom:.2mm solid #595757;border-bottom:.2mm solid var(--G1);font-size:1rem!important;font-weight:700!important;margin:7mm 3mm 3mm!important;position:relative!important}.h3-title:before{background:#595757;background:var(--G1);border-left:2.5mm solid;content:"";margin:0 2.35mm 0 0;padding:0}.nuxt-content h4{border-bottom:.2mm solid #595757;border-bottom:.2mm solid var(--G1)}.nuxt-content h4,.nuxt-content h5{font-weight:700}.nuxt-content h4,.nuxt-content h5,.nuxt-content h6{font-size:1rem;margin:7mm 3mm 3mm;position:relative}.nuxt-content h6{font-weight:400}.nuxt-content p{padding:0 3mm}.nuxt-content p,.nuxt-content ul{font-size:.75rem;font-weight:400;margin:1mm 3mm}.nuxt-content ul{padding-left:3mm;padding-right:3mm}.nuxt-content li,.nuxt-content table{font-size:.75rem;font-weight:400}.nuxt-content table{border-collapse:collapse;left:3mm;line-height:1rem;position:relative;vertical-align:center;width:calc(100% - 6mm)}.nuxt-content table th{background:#7d7c7d;background:var(--G2);border:.088mm solid #7d7c7d;border:.088mm solid var(--G2);border-left:none;border-right:none;color:#fff;color:var(--W);padding:1mm}.nuxt-content tr:nth-child(2n){background:#dcdcdd;background:var(--G6)}.nuxt-content table td{border:.088mm solid #7d7c7d;border:.088mm solid var(--G2);border-left:none;border-right:none;padding:1mm}.nuxt-content td:first-of-type{white-space:nowrap}.nuxt-content i{background-color:#3e3a39;background-color:var(--B3);color:#fff;color:var(--W);font-size:18px;padding:3px}.nuxt-content .memo{background-color:rgba(0,153,255,.267);border:1px solid #09f;border-radius:.5rem;margin:7mm 6mm 3mm;padding:3mm 0;position:relative}.nuxt-content .memo:before{background-image:url(/pages-test/icon/memo.svg);background-repeat:no-repeat;background-size:contain;content:"MEMO";display:inline-block;font-size:.75rem;font-weight:bolder;height:20px;left:6mm;line-height:20px;padding-left:28px;position:relative;vertical-align:middle;width:20px}.nuxt-content .check-area{background-color:rgba(255,204,0,.6);border:1px solid #a58400;border-radius:.5rem;margin:7mm 6mm 3mm;padding:3mm 0;position:relative}.nuxt-content .check-area:before{background-image:url(/pages-test/icon/check.svg);background-repeat:no-repeat;background-size:contain;content:"CHECK";display:inline-block;font-size:.75rem;font-weight:bolder;height:20px;left:6mm;line-height:20px;padding-left:28px;position:relative;vertical-align:middle;width:20px}.nuxt-content .caution{background-color:rgba(255,0,0,.467);border:1px solid red;border-radius:.5rem;margin:7mm 6mm 3mm;padding:3mm 0;position:relative}.nuxt-content .caution:before{background-image:url(/pages-test/icon/beware.svg);background-size:contain;content:"CAUTION";display:inline-block;font-size:.75rem;font-weight:bolder;height:20px;left:6mm;line-height:20px;padding-left:28px;position:relative;vertical-align:middle;width:20px}.nuxt-content code{background-color:transparent!important;font-size:.7rem!important;font-weight:400;line-height:1!important;padding:0!important}.nuxt-content .language-text{margin:0!important;padding-right:0!important}.nuxt-content .memo-page{border:2px solid #b4b5b5;border-color:var(--G4);border-radius:.5rem;height:260mm;margin-top:6mm;width:174mm}.nuxt-content .memo-page,.nuxt-content .memo-page:before{left:50%;position:absolute;transform:translate3d(-50%,0,0)}.nuxt-content .memo-page:before{color:#b4b5b5;color:var(--G4);content:"MEMO";display:inline;font-size:2rem;font-weight:400;letter-spacing:2rem;line-height:3rem;text-align:center;top:3mm;vertical-align:middle}.nuxt-content .gesture-icon{height:30px;line-height:30px;margin-bottom:12px;vertical-align:middle;width:30px}.nuxt-content .gesture-icon,.van__img{-o-object-fit:contain;object-fit:contain;position:relative}.van__img{height:100mm;left:50%;transform:translate3d(-50%,0,0);width:100%}.van__icon{display:block;height:30px;margin:auto;-o-object-fit:contain;object-fit:contain;width:30px}.van__table-icon{background-color:#3e3a39;background-color:var(--B3);height:20px;padding:3px;vertical-align:middle}.van__table-icon,.vtlna__img{-o-object-fit:contain;object-fit:contain;position:relative}.vtlna__img{height:100mm;left:50%;transform:translate3d(-50%,0,0);width:100%}.vtlna__icon{display:block;height:30px;margin:auto;-o-object-fit:contain;object-fit:contain;width:30px}.vtlna__inline-icon,.vtlna__inline-icon--dark{height:20px;-o-object-fit:contain;object-fit:contain;padding:3px;position:relative;vertical-align:middle}.vtlna__inline-icon--dark{background-color:#3e3a39;background-color:var(--B3)}.no-header-table th{display:none}.vtlna__table table{border:.088mm solid #7d7c7d!important;border:.088mm solid var(--G2)!important;margin-bottom:3mm;margin-top:3mm;width:99%!important}.vtlna__table tr{background-color:#fff!important;background-color:var(--W)!important}.vtlna__table td:first-of-type{font-size:8mm;height:20mm;width:20mm}.vtlna__table img{height:12mm;-o-object-fit:contain;object-fit:contain;vertical-align:middle}.icon-description td:first-of-type{height:auto}.vtlna__table-single table{border:.088mm solid #7d7c7d!important;border:.088mm solid var(--G2)!important;margin-bottom:3mm;margin-top:3mm;width:93%!important}.vtlna__table-single tr{background-color:#fff!important;background-color:var(--W)!important}.vtlna__table-single td:first-of-type{height:20mm;white-space:normal;width:20mm}.vtlna__table-single img{height:12mm;-o-object-fit:contain;object-fit:contain;vertical-align:middle}.vtlna__table-underline table{width:98%!important}.vtlna__table-underline tr{background-color:#fff!important;background-color:var(--W)!important}.vtlna__table-underline td:first-of-type{height:10mm;width:10mm}.vtlna__table-underline img{display:inline-block;vertical-align:top}.spec-sheet th{background-color:#595757!important;background-color:var(--G1)!important;border:.088mm solid #b4b5b5!important;border:.088mm solid var(--G4)!important;font-weight:900;line-height:1rem}.spec-sheet td:first-of-type{background-color:#7d7c7d;background-color:var(--G2);color:#fff;color:var(--W);font-weight:600;width:30mm!important}.spec-sheet td{border:.088mm solid #b4b5b5!important;border:.088mm solid var(--G4)!important;line-height:1rem}.safety-mark{display:inline-block;padding:1mm}.safety-mark,.safety-title{font-size:1.75rem;font-weight:700;line-height:10mm;margin-left:3mm;text-align:center;vertical-align:middle}.safety-title{border:.5mm solid #888889;border:.5mm solid var(--G3)}.piano-img{height:40mm;left:50%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 40%;object-position:50% 40%;position:relative;transform:translate3d(-50%,0,0);width:60%}.music-img,.sounds-img{height:15mm;left:50%;-o-object-fit:contain;object-fit:contain;position:relative;transform:translate3d(-50%,0,0);width:100%}table{display:inline-table!important}img{display:inline}',""]),n.locals={},t.exports=n},333:function(t,e,o){var content=o(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("494e736c",content,!0,{sourceMap:!1})},334:function(t,e,o){var n=o(37),r=o(335),m=o(336),c=o(337),l=o(338),d=n((function(i){return i[1]})),f=r(m),h=r(c),v=r(l,{hash:"#KawaiIcons"});d.push([t.i,'/*!\n * kawai-icons.css\n * @copyright 2021 Kawai Musical Instruments Manufacturing Co.,\n */@font-face{font-display:block;font-family:"KawaiIcons";font-style:normal;font-weight:400;src:url('+f+') format("truetype"),url('+h+') format("woff"),url('+v+') format("svg")}i{font-family:"KawaiIcons"!important;speak:never;display:inline-block;font-style:normal;font-variant:normal;font-weight:400;letter-spacing:normal;line-height:1;text-transform:none;word-wrap:normal;font-feature-settings:"liga",normal;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.KIF-piano:before{content:"\\e90a"}.KIF-electric-piano:before{content:"\\e919"}.KIF-organ:before{content:"\\e91a"}.KIF-church-organ:before{content:"\\e91b"}.KIF-harpsichord:before{content:"\\e91c"}.KIF-mallets:before{content:"\\e91d"}.KIF-strings:before{content:"\\e91e"}.KIF-choir:before{content:"\\e91f"}.KIF-pad:before{content:"\\e920"}.KIF-bass:before{content:"\\e921"}.KIF-guitar:before{content:"\\e922"}.KIF-colorful:before{content:"\\e954"}.KIF-touch-curve:before{content:"\\e923"}.KIF-voicing:before{content:"\\e924"}.KIF-damper-resonance:before{content:"\\e925"}.KIF-damper-noise:before{content:"\\e926"}.KIF-strings-resonance:before{content:"\\e927"}.KIF-undamped-string-resonance:before{content:"\\e928"}.KIF-cabinet-resonance:before{content:"\\e929"}.KIF-keyoff-effect:before{content:"\\e92a"}.KIF-fallback-noise:before{content:"\\e92b"}.KIF-hammer-noise:before{content:"\\e92c"}.KIF-hammer-delay:before{content:"\\e92d"}.KIF-topboard:before{content:"\\e92e"}.KIF-adsr:before{content:"\\e92f"}.KIF-stretch-tuning:before{content:"\\e93a"}.KIF-temperament:before{content:"\\e93b"}.KIF-key-volume:before{content:"\\e93c"}.KIF-pedal:before{content:"\\e93d"}.KIF-reverb:before{content:"\\e93e"}.KIF-effect:before{content:"\\e93f"}.KIF-piano--off:before{content:"\\e934"}.KIF-piano--on:before{content:"\\e935"}.KIF-sounds--off:before{content:"\\e936"}.KIF-sounds--on:before{content:"\\e937"}.KIF-music--off:before{content:"\\e938"}.KIF-music--on:before{content:"\\e939"}.KIF-metronome--off:before{content:"\\e940"}.KIF-metronome--on:before{content:"\\e941"}.KIF-rhythm--off:before{content:"\\e942"}.KIF-rhythm--on:before{content:"\\e943"}.KIF-menu:before{content:"\\e930"}.KIF-headphones:before{content:"\\e932"}.KIF-usb:before{content:"\\e931"}.KIF-bluetooth:before{content:"\\e933"}.KIF-midi:before{content:"\\e944"}.KIF-slider:before{content:"\\e945"}.KIF-settings:before{content:"\\e946"}.KIF-duet:before{content:"\\e947"}.KIF-left-hand:before{content:"\\e948"}.KIF-right-hand:before{content:"\\e949"}.KIF-delete:before{content:"\\e94a"}.KIF-save:before{content:"\\e94b"}.KIF-overdub:before{content:"\\e94c"}.KIF-brightness-up:before{content:"\\e94d"}.KIF-brightness-down:before{content:"\\e94e"}.KIF-home:before{content:"\\e900"}.KIF-music:before{content:"\\e901"}.KIF-quarter-note:before{content:"\\e953"}.KIF-settings--bold:before{content:"\\e902"}.KIF-keys--bold:before{content:"\\e903"}.KIF-keys:before{content:"\\e955"}.KIF-play:before{content:"\\e904"}.KIF-pause:before{content:"\\e905"}.KIF-skip-next:before{content:"\\e906"}.KIF-skip-previous:before{content:"\\e907"}.KIF-repeat:before{content:"\\e908"}.KIF-repeat-single:before{content:"\\e963"}.KIF-shuffle:before{content:"\\e909"}.KIF-plus:before{content:"\\e90b"}.KIF-minus:before{content:"\\e90c"}.KIF-close:before{content:"\\e90d"}.KIF-favorite:before{content:"\\e90e"}.KIF-navigate-before:before{content:"\\e90f"}.KIF-navigate-next:before{content:"\\e910"}.KIF-volume-mute:before{content:"\\e911"}.KIF-volume-down:before{content:"\\e912"}.KIF-volume-up:before{content:"\\e913"}.KIF-star:before{content:"\\e914"}.KIF-history:before{content:"\\e915"}.KIF-composer:before{content:"\\e916"}.KIF-scorebook:before{content:"\\e917"}.KIF-list:before{content:"\\e918"}.KIF-user:before{content:"\\e94f"}.KIF-plus--square:before{content:"\\e950"}.KIF-minus--square:before{content:"\\e951"}.KIF-close--square:before{content:"\\e952"}.KIF-composer-person:before{content:"\\e956"}.KIF-genre:before{content:"\\e957"}.KIF-hymn:before{content:"\\e958"}.KIF-lesson-book:before{content:"\\e959"}.KIF-recently-played:before{content:"\\e95a"}.KIF-relax:before{content:"\\e95b"}.KIF-usb-music:before{content:"\\e95c"}.KIF-music-favorite:before{content:"\\e95d"}.KIF-music-sound:before{content:"\\e95e"}.KIF-music-recplayback:before{content:"\\e95f"}.KIF-option:before{content:"\\e960"}.KIF-edit:before{content:"\\e961"}.KIF-share:before{content:"\\e962"}.KIF-recorder:before{content:"\\e964"}.KIF-dark-mode:before{content:"\\e965"}.KIF-light-mode:before{content:"\\e969"}.KIF-eighth-note:before{content:"\\e966"}.KIF-help:before{content:"\\e967"}.KIF-kms-logo:before{content:"\\e968"}.KIF-vpa:before{content:"\\e96a"}',""]),d.locals={},t.exports=d},336:function(t,e,o){t.exports=o.p+"fonts/KawaiIcons.bd12e14.ttf"},337:function(t,e,o){t.exports=o.p+"fonts/KawaiIcons.45e9ef0.woff"},338:function(t,e,o){t.exports=o.p+"img/KawaiIcons.5272f46.svg"},345:function(t,e,o){"use strict";o(229)},346:function(t,e,o){var n=o(37)((function(i){return i[1]}));n.push([t.i,".mc{display:flex;flex-flow:column}",""]),n.locals={},t.exports=n},347:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"getters",(function(){return r})),o.d(e,"mutations",(function(){return m})),o.d(e,"actions",(function(){return c}));var n=function(){return{md:null}},r={},m={setMd:function(t,e){t.md=e}},c={setMd:function(t,e){(0,t.commit)("setMd",e)}}},69:function(t,e,o){"use strict";var n=o(366),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},m=(o(323),o(52)),component=Object(m.a)(r,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[261,11,2,12]]]);