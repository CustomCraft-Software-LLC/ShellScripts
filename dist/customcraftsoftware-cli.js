#!/usr/bin/env node
var g=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var fe=g((ht,ue)=>{"use strict";ue.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}});var X=g((xt,he)=>{var S=fe(),de={};for(let e of Object.keys(S))de[S[e]]=e;var f={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};he.exports=f;for(let e of Object.keys(f)){if(!("channels"in f[e]))throw new Error("missing channels property: "+e);if(!("labels"in f[e]))throw new Error("missing channel labels property: "+e);if(f[e].labels.length!==f[e].channels)throw new Error("channel and label counts mismatch: "+e);let{channels:n,labels:r}=f[e];delete f[e].channels,delete f[e].labels,Object.defineProperty(f[e],"channels",{value:n}),Object.defineProperty(f[e],"labels",{value:r})}f.rgb.hsl=function(e){let n=e[0]/255,r=e[1]/255,t=e[2]/255,o=Math.min(n,r,t),s=Math.max(n,r,t),i=s-o,l,c;s===o?l=0:n===s?l=(r-t)/i:r===s?l=2+(t-n)/i:t===s&&(l=4+(n-r)/i),l=Math.min(l*60,360),l<0&&(l+=360);let a=(o+s)/2;return s===o?c=0:a<=.5?c=i/(s+o):c=i/(2-s-o),[l,c*100,a*100]};f.rgb.hsv=function(e){let n,r,t,o,s,i=e[0]/255,l=e[1]/255,c=e[2]/255,a=Math.max(i,l,c),u=a-Math.min(i,l,c),h=function(x){return(a-x)/6/u+1/2};return u===0?(o=0,s=0):(s=u/a,n=h(i),r=h(l),t=h(c),i===a?o=t-r:l===a?o=1/3+n-t:c===a&&(o=2/3+r-n),o<0?o+=1:o>1&&(o-=1)),[o*360,s*100,a*100]};f.rgb.hwb=function(e){let n=e[0],r=e[1],t=e[2],o=f.rgb.hsl(e)[0],s=1/255*Math.min(n,Math.min(r,t));return t=1-1/255*Math.max(n,Math.max(r,t)),[o,s*100,t*100]};f.rgb.cmyk=function(e){let n=e[0]/255,r=e[1]/255,t=e[2]/255,o=Math.min(1-n,1-r,1-t),s=(1-n-o)/(1-o)||0,i=(1-r-o)/(1-o)||0,l=(1-t-o)/(1-o)||0;return[s*100,i*100,l*100,o*100]};function xn(e,n){return(e[0]-n[0])**2+(e[1]-n[1])**2+(e[2]-n[2])**2}f.rgb.keyword=function(e){let n=de[e];if(n)return n;let r=1/0,t;for(let o of Object.keys(S)){let s=S[o],i=xn(e,s);i<r&&(r=i,t=o)}return t};f.keyword.rgb=function(e){return S[e]};f.rgb.xyz=function(e){let n=e[0]/255,r=e[1]/255,t=e[2]/255;n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92;let o=n*.4124+r*.3576+t*.1805,s=n*.2126+r*.7152+t*.0722,i=n*.0193+r*.1192+t*.9505;return[o*100,s*100,i*100]};f.rgb.lab=function(e){let n=f.rgb.xyz(e),r=n[0],t=n[1],o=n[2];r/=95.047,t/=100,o/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;let s=116*t-16,i=500*(r-t),l=200*(t-o);return[s,i,l]};f.hsl.rgb=function(e){let n=e[0]/360,r=e[1]/100,t=e[2]/100,o,s,i;if(r===0)return i=t*255,[i,i,i];t<.5?o=t*(1+r):o=t+r-t*r;let l=2*t-o,c=[0,0,0];for(let a=0;a<3;a++)s=n+1/3*-(a-1),s<0&&s++,s>1&&s--,6*s<1?i=l+(o-l)*6*s:2*s<1?i=o:3*s<2?i=l+(o-l)*(2/3-s)*6:i=l,c[a]=i*255;return c};f.hsl.hsv=function(e){let n=e[0],r=e[1]/100,t=e[2]/100,o=r,s=Math.max(t,.01);t*=2,r*=t<=1?t:2-t,o*=s<=1?s:2-s;let i=(t+r)/2,l=t===0?2*o/(s+o):2*r/(t+r);return[n,l*100,i*100]};f.hsv.rgb=function(e){let n=e[0]/60,r=e[1]/100,t=e[2]/100,o=Math.floor(n)%6,s=n-Math.floor(n),i=255*t*(1-r),l=255*t*(1-r*s),c=255*t*(1-r*(1-s));switch(t*=255,o){case 0:return[t,c,i];case 1:return[l,t,i];case 2:return[i,t,c];case 3:return[i,l,t];case 4:return[c,i,t];case 5:return[t,i,l]}};f.hsv.hsl=function(e){let n=e[0],r=e[1]/100,t=e[2]/100,o=Math.max(t,.01),s,i;i=(2-r)*t;let l=(2-r)*o;return s=r*o,s/=l<=1?l:2-l,s=s||0,i/=2,[n,s*100,i*100]};f.hwb.rgb=function(e){let n=e[0]/360,r=e[1]/100,t=e[2]/100,o=r+t,s;o>1&&(r/=o,t/=o);let i=Math.floor(6*n),l=1-t;s=6*n-i,i&1&&(s=1-s);let c=r+s*(l-r),a,u,h;switch(i){default:case 6:case 0:a=l,u=c,h=r;break;case 1:a=c,u=l,h=r;break;case 2:a=r,u=l,h=c;break;case 3:a=r,u=c,h=l;break;case 4:a=c,u=r,h=l;break;case 5:a=l,u=r,h=c;break}return[a*255,u*255,h*255]};f.cmyk.rgb=function(e){let n=e[0]/100,r=e[1]/100,t=e[2]/100,o=e[3]/100,s=1-Math.min(1,n*(1-o)+o),i=1-Math.min(1,r*(1-o)+o),l=1-Math.min(1,t*(1-o)+o);return[s*255,i*255,l*255]};f.xyz.rgb=function(e){let n=e[0]/100,r=e[1]/100,t=e[2]/100,o,s,i;return o=n*3.2406+r*-1.5372+t*-.4986,s=n*-.9689+r*1.8758+t*.0415,i=n*.0557+r*-.204+t*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,i=i>.0031308?1.055*i**(1/2.4)-.055:i*12.92,o=Math.min(Math.max(0,o),1),s=Math.min(Math.max(0,s),1),i=Math.min(Math.max(0,i),1),[o*255,s*255,i*255]};f.xyz.lab=function(e){let n=e[0],r=e[1],t=e[2];n/=95.047,r/=100,t/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,t=t>.008856?t**(1/3):7.787*t+16/116;let o=116*r-16,s=500*(n-r),i=200*(r-t);return[o,s,i]};f.lab.xyz=function(e){let n=e[0],r=e[1],t=e[2],o,s,i;s=(n+16)/116,o=r/500+s,i=s-t/200;let l=s**3,c=o**3,a=i**3;return s=l>.008856?l:(s-16/116)/7.787,o=c>.008856?c:(o-16/116)/7.787,i=a>.008856?a:(i-16/116)/7.787,o*=95.047,s*=100,i*=108.883,[o,s,i]};f.lab.lch=function(e){let n=e[0],r=e[1],t=e[2],o;o=Math.atan2(t,r)*360/2/Math.PI,o<0&&(o+=360);let i=Math.sqrt(r*r+t*t);return[n,i,o]};f.lch.lab=function(e){let n=e[0],r=e[1],o=e[2]/360*2*Math.PI,s=r*Math.cos(o),i=r*Math.sin(o);return[n,s,i]};f.rgb.ansi16=function(e,n=null){let[r,t,o]=e,s=n===null?f.rgb.hsv(e)[2]:n;if(s=Math.round(s/50),s===0)return 30;let i=30+(Math.round(o/255)<<2|Math.round(t/255)<<1|Math.round(r/255));return s===2&&(i+=60),i};f.hsv.ansi16=function(e){return f.rgb.ansi16(f.hsv.rgb(e),e[2])};f.rgb.ansi256=function(e){let n=e[0],r=e[1],t=e[2];return n===r&&r===t?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(r/255*5)+Math.round(t/255*5)};f.ansi16.rgb=function(e){let n=e%10;if(n===0||n===7)return e>50&&(n+=3.5),n=n/10.5*255,[n,n,n];let r=(~~(e>50)+1)*.5,t=(n&1)*r*255,o=(n>>1&1)*r*255,s=(n>>2&1)*r*255;return[t,o,s]};f.ansi256.rgb=function(e){if(e>=232){let s=(e-232)*10+8;return[s,s,s]}e-=16;let n,r=Math.floor(e/36)/5*255,t=Math.floor((n=e%36)/6)/5*255,o=n%6/5*255;return[r,t,o]};f.rgb.hex=function(e){let r=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(r.length)+r};f.hex.rgb=function(e){let n=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];let r=n[0];n[0].length===3&&(r=r.split("").map(l=>l+l).join(""));let t=parseInt(r,16),o=t>>16&255,s=t>>8&255,i=t&255;return[o,s,i]};f.rgb.hcg=function(e){let n=e[0]/255,r=e[1]/255,t=e[2]/255,o=Math.max(Math.max(n,r),t),s=Math.min(Math.min(n,r),t),i=o-s,l,c;return i<1?l=s/(1-i):l=0,i<=0?c=0:o===n?c=(r-t)/i%6:o===r?c=2+(t-n)/i:c=4+(n-r)/i,c/=6,c%=1,[c*360,i*100,l*100]};f.hsl.hcg=function(e){let n=e[1]/100,r=e[2]/100,t=r<.5?2*n*r:2*n*(1-r),o=0;return t<1&&(o=(r-.5*t)/(1-t)),[e[0],t*100,o*100]};f.hsv.hcg=function(e){let n=e[1]/100,r=e[2]/100,t=n*r,o=0;return t<1&&(o=(r-t)/(1-t)),[e[0],t*100,o*100]};f.hcg.rgb=function(e){let n=e[0]/360,r=e[1]/100,t=e[2]/100;if(r===0)return[t*255,t*255,t*255];let o=[0,0,0],s=n%1*6,i=s%1,l=1-i,c=0;switch(Math.floor(s)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return c=(1-r)*t,[(r*o[0]+c)*255,(r*o[1]+c)*255,(r*o[2]+c)*255]};f.hcg.hsv=function(e){let n=e[1]/100,r=e[2]/100,t=n+r*(1-n),o=0;return t>0&&(o=n/t),[e[0],o*100,t*100]};f.hcg.hsl=function(e){let n=e[1]/100,t=e[2]/100*(1-n)+.5*n,o=0;return t>0&&t<.5?o=n/(2*t):t>=.5&&t<1&&(o=n/(2*(1-t))),[e[0],o*100,t*100]};f.hcg.hwb=function(e){let n=e[1]/100,r=e[2]/100,t=n+r*(1-n);return[e[0],(t-n)*100,(1-t)*100]};f.hwb.hcg=function(e){let n=e[1]/100,t=1-e[2]/100,o=t-n,s=0;return o<1&&(s=(t-o)/(1-o)),[e[0],o*100,s*100]};f.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};f.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};f.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};f.gray.hsl=function(e){return[0,0,e[0]]};f.gray.hsv=f.gray.hsl;f.gray.hwb=function(e){return[0,100,e[0]]};f.gray.cmyk=function(e){return[0,0,0,e[0]]};f.gray.lab=function(e){return[e[0],0,0]};f.gray.hex=function(e){let n=Math.round(e[0]/100*255)&255,t=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(t.length)+t};f.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}});var pe=g((pt,xe)=>{var L=X();function pn(){let e={},n=Object.keys(L);for(let r=n.length,t=0;t<r;t++)e[n[t]]={distance:-1,parent:null};return e}function gn(e){let n=pn(),r=[e];for(n[e].distance=0;r.length;){let t=r.pop(),o=Object.keys(L[t]);for(let s=o.length,i=0;i<s;i++){let l=o[i],c=n[l];c.distance===-1&&(c.distance=n[t].distance+1,c.parent=t,r.unshift(l))}}return n}function bn(e,n){return function(r){return n(e(r))}}function yn(e,n){let r=[n[e].parent,e],t=L[n[e].parent][e],o=n[e].parent;for(;n[o].parent;)r.unshift(n[o].parent),t=bn(L[n[o].parent][o],t),o=n[o].parent;return t.conversion=r,t}xe.exports=function(e){let n=gn(e),r={},t=Object.keys(n);for(let o=t.length,s=0;s<o;s++){let i=t[s];n[i].parent!==null&&(r[i]=yn(i,n))}return r}});var be=g((gt,ge)=>{var K=X(),mn=pe(),F={},vn=Object.keys(K);function wn(e){let n=function(...r){let t=r[0];return t==null?t:(t.length>1&&(r=t),e(r))};return"conversion"in e&&(n.conversion=e.conversion),n}function Cn(e){let n=function(...r){let t=r[0];if(t==null)return t;t.length>1&&(r=t);let o=e(r);if(typeof o=="object")for(let s=o.length,i=0;i<s;i++)o[i]=Math.round(o[i]);return o};return"conversion"in e&&(n.conversion=e.conversion),n}vn.forEach(e=>{F[e]={},Object.defineProperty(F[e],"channels",{value:K[e].channels}),Object.defineProperty(F[e],"labels",{value:K[e].labels});let n=mn(e);Object.keys(n).forEach(t=>{let o=n[t];F[e][t]=Cn(o),F[e][t].raw=wn(o)})});ge.exports=F});var _e=g((bt,Ce)=>{"use strict";var ye=(e,n)=>(...r)=>`\x1B[${e(...r)+n}m`,me=(e,n)=>(...r)=>{let t=e(...r);return`\x1B[${38+n};5;${t}m`},ve=(e,n)=>(...r)=>{let t=e(...r);return`\x1B[${38+n};2;${t[0]};${t[1]};${t[2]}m`},P=e=>e,we=(e,n,r)=>[e,n,r],O=(e,n,r)=>{Object.defineProperty(e,n,{get:()=>{let t=r();return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0}),t},enumerable:!0,configurable:!0})},Z,j=(e,n,r,t)=>{Z===void 0&&(Z=be());let o=t?10:0,s={};for(let[i,l]of Object.entries(Z)){let c=i==="ansi16"?"ansi":i;i===n?s[c]=e(r,o):typeof l=="object"&&(s[c]=e(l[n],o))}return s};function _n(){let e=new Map,n={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};n.color.gray=n.color.blackBright,n.bgColor.bgGray=n.bgColor.bgBlackBright,n.color.grey=n.color.blackBright,n.bgColor.bgGrey=n.bgColor.bgBlackBright;for(let[r,t]of Object.entries(n)){for(let[o,s]of Object.entries(t))n[o]={open:`\x1B[${s[0]}m`,close:`\x1B[${s[1]}m`},t[o]=n[o],e.set(s[0],s[1]);Object.defineProperty(n,r,{value:t,enumerable:!1})}return Object.defineProperty(n,"codes",{value:e,enumerable:!1}),n.color.close="\x1B[39m",n.bgColor.close="\x1B[49m",O(n.color,"ansi",()=>j(ye,"ansi16",P,!1)),O(n.color,"ansi256",()=>j(me,"ansi256",P,!1)),O(n.color,"ansi16m",()=>j(ve,"rgb",we,!1)),O(n.bgColor,"ansi",()=>j(ye,"ansi16",P,!0)),O(n.bgColor,"ansi256",()=>j(me,"ansi256",P,!0)),O(n.bgColor,"ansi16m",()=>j(ve,"rgb",we,!0)),n}Object.defineProperty(Ce,"exports",{enumerable:!0,get:_n})});var Ae=g((yt,Ee)=>{"use strict";Ee.exports=(e,n=process.argv)=>{let r=e.startsWith("-")?"":e.length===1?"-":"--",t=n.indexOf(r+e),o=n.indexOf("--");return t!==-1&&(o===-1||t<o)}});var Fe=g((mt,Be)=>{"use strict";var En=require("os"),ke=require("tty"),w=Ae(),{env:b}=process,E;w("no-color")||w("no-colors")||w("color=false")||w("color=never")?E=0:(w("color")||w("colors")||w("color=true")||w("color=always"))&&(E=1);"FORCE_COLOR"in b&&(b.FORCE_COLOR==="true"?E=1:b.FORCE_COLOR==="false"?E=0:E=b.FORCE_COLOR.length===0?1:Math.min(parseInt(b.FORCE_COLOR,10),3));function J(e){return e===0?!1:{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function Q(e,n){if(E===0)return 0;if(w("color=16m")||w("color=full")||w("color=truecolor"))return 3;if(w("color=256"))return 2;if(e&&!n&&E===void 0)return 0;let r=E||0;if(b.TERM==="dumb")return r;if(process.platform==="win32"){let t=En.release().split(".");return Number(t[0])>=10&&Number(t[2])>=10586?Number(t[2])>=14931?3:2:1}if("CI"in b)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE"].some(t=>t in b)||b.CI_NAME==="codeship"?1:r;if("TEAMCITY_VERSION"in b)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(b.TEAMCITY_VERSION)?1:0;if(b.COLORTERM==="truecolor")return 3;if("TERM_PROGRAM"in b){let t=parseInt((b.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(b.TERM_PROGRAM){case"iTerm.app":return t>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(b.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(b.TERM)||"COLORTERM"in b?1:r}function An(e){let n=Q(e,e&&e.isTTY);return J(n)}Be.exports={supportsColor:An,stdout:J(Q(!0,ke.isatty(1))),stderr:J(Q(!0,ke.isatty(2)))}});var je=g((vt,Oe)=>{"use strict";var kn=(e,n,r)=>{let t=e.indexOf(n);if(t===-1)return e;let o=n.length,s=0,i="";do i+=e.substr(s,t-s)+n+r,s=t+o,t=e.indexOf(n,s);while(t!==-1);return i+=e.substr(s),i},Bn=(e,n,r,t)=>{let o=0,s="";do{let i=e[t-1]==="\r";s+=e.substr(o,(i?t-1:t)-o)+n+(i?`\r
`:`
`)+r,o=t+1,t=e.indexOf(`
`,o)}while(t!==-1);return s+=e.substr(o),s};Oe.exports={stringReplaceAll:kn,stringEncaseCRLFWithFirstIndex:Bn}});var Ie=g((wt,Se)=>{"use strict";var Fn=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,Me=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,On=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,jn=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,Mn=new Map([["n",`
`],["r","\r"],["t","	"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e","\x1B"],["a","\x07"]]);function Re(e){let n=e[0]==="u",r=e[1]==="{";return n&&!r&&e.length===5||e[0]==="x"&&e.length===3?String.fromCharCode(parseInt(e.slice(1),16)):n&&r?String.fromCodePoint(parseInt(e.slice(2,-1),16)):Mn.get(e)||e}function Dn(e,n){let r=[],t=n.trim().split(/\s*,\s*/g),o;for(let s of t){let i=Number(s);if(!Number.isNaN(i))r.push(i);else if(o=s.match(On))r.push(o[2].replace(jn,(l,c,a)=>c?Re(c):a));else throw new Error(`Invalid Chalk template style argument: ${s} (in style '${e}')`)}return r}function Rn(e){Me.lastIndex=0;let n=[],r;for(;(r=Me.exec(e))!==null;){let t=r[1];if(r[2]){let o=Dn(t,r[2]);n.push([t].concat(o))}else n.push([t])}return n}function De(e,n){let r={};for(let o of n)for(let s of o.styles)r[s[0]]=o.inverse?null:s.slice(1);let t=e;for(let[o,s]of Object.entries(r))if(Array.isArray(s)){if(!(o in t))throw new Error(`Unknown Chalk style: ${o}`);t=s.length>0?t[o](...s):t[o]}return t}Se.exports=(e,n)=>{let r=[],t=[],o=[];if(n.replace(Fn,(s,i,l,c,a,u)=>{if(i)o.push(Re(i));else if(c){let h=o.join("");o=[],t.push(r.length===0?h:De(e,r)(h)),r.push({inverse:l,styles:Rn(c)})}else if(a){if(r.length===0)throw new Error("Found extraneous } in Chalk template literal");t.push(De(e,r)(o.join(""))),o=[],r.pop()}else o.push(u)}),t.push(o.join("")),r.length>0){let s=`Chalk template literal is missing ${r.length} closing bracket${r.length===1?"":"s"} (\`}\`)`;throw new Error(s)}return t.join("")}});var $e=g((Ct,ze)=>{"use strict";var I=_e(),{stdout:ee,stderr:ne}=Fe(),{stringReplaceAll:Sn,stringEncaseCRLFWithFirstIndex:In}=je(),{isArray:q}=Array,Le=["ansi","ansi","ansi256","ansi16m"],M=Object.create(null),Tn=(e,n={})=>{if(n.level&&!(Number.isInteger(n.level)&&n.level>=0&&n.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let r=ee?ee.level:0;e.level=n.level===void 0?r:n.level},te=class{constructor(n){return Pe(n)}},Pe=e=>{let n={};return Tn(n,e),n.template=(...r)=>We(n.template,...r),Object.setPrototypeOf(n,W.prototype),Object.setPrototypeOf(n.template,n),n.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},n.template.Instance=te,n.template};function W(e){return Pe(e)}for(let[e,n]of Object.entries(I))M[e]={get(){let r=z(this,re(n.open,n.close,this._styler),this._isEmpty);return Object.defineProperty(this,e,{value:r}),r}};M.visible={get(){let e=z(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:e}),e}};var qe=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(let e of qe)M[e]={get(){let{level:n}=this;return function(...r){let t=re(I.color[Le[n]][e](...r),I.color.close,this._styler);return z(this,t,this._isEmpty)}}};for(let e of qe){let n="bg"+e[0].toUpperCase()+e.slice(1);M[n]={get(){let{level:r}=this;return function(...t){let o=re(I.bgColor[Le[r]][e](...t),I.bgColor.close,this._styler);return z(this,o,this._isEmpty)}}}}var Ln=Object.defineProperties(()=>{},{...M,level:{enumerable:!0,get(){return this._generator.level},set(e){this._generator.level=e}}}),re=(e,n,r)=>{let t,o;return r===void 0?(t=e,o=n):(t=r.openAll+e,o=n+r.closeAll),{open:e,close:n,openAll:t,closeAll:o,parent:r}},z=(e,n,r)=>{let t=(...o)=>q(o[0])&&q(o[0].raw)?Te(t,We(t,...o)):Te(t,o.length===1?""+o[0]:o.join(" "));return Object.setPrototypeOf(t,Ln),t._generator=e,t._styler=n,t._isEmpty=r,t},Te=(e,n)=>{if(e.level<=0||!n)return e._isEmpty?"":n;let r=e._styler;if(r===void 0)return n;let{openAll:t,closeAll:o}=r;if(n.indexOf("\x1B")!==-1)for(;r!==void 0;)n=Sn(n,r.close,r.open),r=r.parent;let s=n.indexOf(`
`);return s!==-1&&(n=In(n,o,t,s)),t+n+o},N,We=(e,...n)=>{let[r]=n;if(!q(r)||!q(r.raw))return n.join(" ");let t=n.slice(1),o=[r.raw[0]];for(let s=1;s<r.length;s++)o.push(String(t[s-1]).replace(/[{}\\]/g,"\\$&"),String(r.raw[s]));return N===void 0&&(N=Ie()),N(e,o.join(""))};Object.defineProperties(W.prototype,M);var $=W();$.supportsColor=ee;$.stderr=W({level:ne?ne.level:0});$.stderr.supportsColor=ne;ze.exports=$});var Ge=g((_t,Ue)=>{"use strict";Ue.exports=({onlyFirst:e=!1}={})=>{let n=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(n,e?void 0:"g")}});var Ve=g((Et,He)=>{"use strict";var Pn=Ge();He.exports=e=>typeof e=="string"?e.replace(Pn(),""):e});var Ye=g((At,U)=>{var qn=function(){"use strict";function e(i,l,c,a){var u;typeof l=="object"&&(c=l.depth,a=l.prototype,u=l.filter,l=l.circular);var h=[],x=[],C=typeof Buffer<"u";typeof l>"u"&&(l=!0),typeof c>"u"&&(c=1/0);function A(p,le){if(p===null)return null;if(le==0)return p;var v,R;if(typeof p!="object")return p;if(e.__isArray(p))v=[];else if(e.__isRegExp(p))v=new RegExp(p.source,s(p)),p.lastIndex&&(v.lastIndex=p.lastIndex);else if(e.__isDate(p))v=new Date(p.getTime());else{if(C&&Buffer.isBuffer(p))return Buffer.allocUnsafe?v=Buffer.allocUnsafe(p.length):v=new Buffer(p.length),p.copy(v),v;typeof a>"u"?(R=Object.getPrototypeOf(p),v=Object.create(R)):(v=Object.create(a),R=a)}if(l){var ae=h.indexOf(p);if(ae!=-1)return x[ae];h.push(p),x.push(v)}for(var V in p){var Y;R&&(Y=Object.getOwnPropertyDescriptor(R,V)),!(Y&&Y.set==null)&&(v[V]=A(p[V],le-1))}return v}return A(i,c)}e.clonePrototype=function(l){if(l===null)return null;var c=function(){};return c.prototype=l,new c};function n(i){return Object.prototype.toString.call(i)}e.__objToStr=n;function r(i){return typeof i=="object"&&n(i)==="[object Date]"}e.__isDate=r;function t(i){return typeof i=="object"&&n(i)==="[object Array]"}e.__isArray=t;function o(i){return typeof i=="object"&&n(i)==="[object RegExp]"}e.__isRegExp=o;function s(i){var l="";return i.global&&(l+="g"),i.ignoreCase&&(l+="i"),i.multiline&&(l+="m"),l}return e.__getRegExpFlags=s,e}();typeof U=="object"&&U.exports&&(U.exports=qn)});var Ke=g((kt,Xe)=>{var Wn=Ye();Xe.exports=function(e,n){return e=e||{},Object.keys(n).forEach(function(r){typeof e[r]>"u"&&(e[r]=Wn(n[r]))}),e}});var Je=g((Bt,Ze)=>{Ze.exports=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531],[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]]});var nn=g((Ft,oe)=>{"use strict";var zn=Ke(),T=Je(),Ne={nul:0,control:0};oe.exports=function(n){return en(n,Ne)};oe.exports.config=function(e){return e=zn(e||{},Ne),function(r){return en(r,e)}};function en(e,n){if(typeof e!="string")return Qe(e,n);for(var r=0,t=0;t<e.length;t++){var o=Qe(e.charCodeAt(t),n);if(o<0)return-1;r+=o}return r}function Qe(e,n){return e===0?n.nul:e<32||e>=127&&e<160?n.control:$n(e)?0:1+(e>=4352&&(e<=4447||e==9001||e==9002||e>=11904&&e<=42191&&e!=12351||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65135||e>=65280&&e<=65376||e>=65504&&e<=65510||e>=131072&&e<=196605||e>=196608&&e<=262141))}function $n(e){var n=0,r=T.length-1,t;if(e<T[0][0]||e>T[r][1])return!1;for(;r>=n;)if(t=Math.floor((n+r)/2),e>T[t][1])n=t+1;else if(e<T[t][0])r=t-1;else return!0;return!1}});var se=g((Ot,tn)=>{var Un=Ve(),Gn=nn();tn.exports=function(e){return Gn(Un(e))}});var rn=g((jt,k)=>{"use strict";var _=se();function G(e,n){return Array.apply(null,{length:n+1}).join(e).slice(0,n)}function Hn(e,n,r){e=e??"",e=String(e);var t=n-_(e);return t<=0?e:e+G(r||" ",t)}function Vn(e,n,r){e=e??"",e=String(e);var t=n-_(e);if(t<=0)return e;var o=Math.floor(t/2),s=t-o;return G(r||" ",o)+e+G(r||" ",s)}function Yn(e,n,r){e=e??"",e=String(e);var t=n-_(e);return t<=0?e:G(r||" ",t)+e}function Xn(e,n){function r(t,o){return t.trim().split(" ").reduce(function(s,i){var l=s[s.length-1];return l&&_(l.join(" "))+_(i)<o?s[s.length-1].push(i):s.push([i]),s},[]).map(function(s){return s.join(" ")})}return e.split(`
`).map(function(t){return r(t,n)}).reduce(function(t,o){return t.concat(o)},[])}function Kn(e,n,r){e=e.trim();for(var t=[],o=e.split(" "),s="",i=_(r);s||o.length;){if(s){var l=s;s=""}else var l=o.shift();if(_(l)>n){for(var c=0,a=0,u=n-i;c<l.length;){var h=_(l.charAt(c));if(h+a>u)break;a+=h,++c}s=l.slice(c),l=l.slice(0,c),l+=r}t.push(l)}return t.join(" ")}function Zn(e,n){if(e=e??"",e=String(e),n==1/0)return e;for(var r=0,t=0;r<e.length;){var o=_(e.charAt(r));if(o+t>n)break;t+=o,++r}return e.slice(0,r)}k.exports.padRight=Hn;k.exports.padCenter=Vn;k.exports.padLeft=Yn;k.exports.splitIntoLines=Xn;k.exports.splitLongWords=Kn;k.exports.truncateString=Zn});var an=g((Mt,ln)=>{"use strict";var ie=se(),D=rn(),Jn=D.padRight,Qn=D.padCenter,Nn=D.padLeft,on=D.splitIntoLines,et=D.splitLongWords,nt=D.truncateString,cn=function(n){return n.toUpperCase()},tt=function(n,r,t){return n},rt=Object.freeze({maxWidth:1/0,minWidth:0,columnSplitter:" ",truncate:!1,truncateMarker:"\u2026",preserveNewLines:!1,paddingChr:" ",showHeaders:!0,headingTransform:cn,dataTransform:tt});ln.exports=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.config||{};delete n.config;var t=n.maxLineWidth||1/0;t==="auto"&&(t=process.stdout.columns||1/0),delete n.maxLineWidth,n=sn({},rt,n),n.config=n.config||Object.create(null),n.spacing=n.spacing||`
`,n.preserveNewLines=!!n.preserveNewLines,n.showHeaders=!!n.showHeaders,n.columns=n.columns||n.include;var o=n.columns||[];e=ct(e,o),o.length||e.forEach(function(c){for(var a in c)o.indexOf(a)===-1&&o.push(a)});var s=o.reduce(function(c,a){var u=Object.create(n);return c[a]=sn(u,r[a]),c},Object.create(null));o.forEach(function(c){var a=s[c];a.name=c,a.maxWidth=Math.ceil(a.maxWidth),a.minWidth=Math.ceil(a.minWidth),a.truncate=!!a.truncate,a.align=a.align||"left"}),e=e.map(function(c){var a=Object.create(null);return o.forEach(function(u){a[u]=c[u]!=null?c[u]:"",a[u]=""+a[u],s[u].preserveNewLines?a[u]=a[u].replace(/[^\S\n]/gmi," "):a[u]=a[u].replace(/\s/gmi," ")}),a}),o.forEach(function(c){var a=s[c];e=e.map(function(u,h){var x=Object.create(a);u[c]=a.dataTransform(u[c],x,h);var C=Object.keys(x);if(C.indexOf("name")!==-1){if(a.headingTransform!==cn)return;a.headingTransform=function(A){return A}}return C.forEach(function(A){return a[A]=x[A]}),u})});var i={};n.showHeaders&&(o.forEach(function(c){var a=s[c];if(!a.showHeaders){i[c]="";return}i[c]=a.headingTransform(a.name)}),e.unshift(i)),o.forEach(function(c){var a=s[c];a.width=e.map(function(u){return u[c]}).reduce(function(u,h){return u>=a.maxWidth?u:Math.max(u,Math.min(a.maxWidth,Math.max(a.minWidth,ie(h))))},0)}),o.forEach(function(c){var a=s[c];e=e.map(function(u){return u[c]=et(u[c],a.width,a.truncateMarker),u})}),o.forEach(function(c){var a=s[c];e=e.map(function(u,h){var x=u[c];if(u[c]=on(x,a.width),a.truncate&&u[c].length>1){u[c]=on(x,a.width-ie(a.truncateMarker));var C=u[c][0];it(C,a.truncateMarker)||(u[c][0]+=a.truncateMarker),u[c]=u[c].slice(0,1)}return u})}),o.forEach(function(c){var a=s[c];a.width=e.map(function(u){return u[c].reduce(function(h,x){return h>=a.maxWidth?h:Math.max(h,Math.min(a.maxWidth,Math.max(a.minWidth,ie(x))))},0)}).reduce(function(u,h){return u>=a.maxWidth?u:Math.max(u,Math.min(a.maxWidth,Math.max(a.minWidth,h)))},0)});var l=ot(e,s,o,n.paddingChr);return l.reduce(function(c,a){return c.concat(a.reduce(function(u,h){return u.concat(h.join(n.columnSplitter))},[]))},[]).map(function(c){return nt(c,t)}).join(n.spacing)};function ot(e,n,r,t){return e.map(function(o){var s=[],i=0;r.forEach(function(a){i=Math.max(i,o[a].length)});for(var l=function(u){s[u]=s[u]||[],r.forEach(function(h){var x=n[h],C=o[h][u]||"";x.align==="right"?s[u].push(Nn(C,x.width,t)):x.align==="center"||x.align==="centre"?s[u].push(Qn(C,x.width,t)):s[u].push(Jn(C,x.width,t))})},c=0;c<i;c++)l(c);return s})}function sn(){return Object.assign?Object.assign.apply(Object,arguments):st.apply(void 0,arguments)}function st(e,n){"use strict";if(e==null)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),t=!1,o,s=1;s<arguments.length;s++){var i=arguments[s];if(i!=null){for(var l=Object.keys(Object(i)),c=0,a=l.length;c<a;c++){var u=l[c];try{var h=Object.getOwnPropertyDescriptor(i,u);h!==void 0&&h.enumerable&&(r[u]=i[u])}catch(x){t||(t=!0,o=x)}}if(t)throw o}}return r}function it(e,n,r){r=r||e.length,r=r-n.length;var t=e.lastIndexOf(n);return t!==-1&&t===r}function ct(e,n){if(Array.isArray(e))return e;var r=[];for(var t in e){var o={};o[n[0]||"key"]=t,o[n[1]||"value"]=e[t],r.push(o)}return r}});var{execSync:lt}=require("child_process"),un=require("path"),H=require("fs"),d=$e(),at=an(),y=e=>{let n=un.resolve(__dirname,"../dist/scripts",e);if(H.existsSync(n))return n;let r=un.resolve(__dirname,"../scripts",e);return H.existsSync(r)?r:null},ut={build_size:y("build_size.sh"),clean_and_rebuild:y("clean_and_rebuild.sh"),clean_unused_dependencies:y("clean_unused_dependencies.sh"),create_component:y("create_component.sh"),create_component_react_native:y("create_component_react_native.sh"),create_screen_react_native:y("create_screen_react_native.sh"),create_route_gatsby:y("create_route_gatsby.sh"),create_env:y("create_env.sh"),create_hook:y("create_hook.sh"),analyze_bundle:y("analyze_bundle.sh"),setup:y("setup.sh"),unused_imports_list:y("unused_imports_list.sh"),unused_imports_uninstall:y("unused_imports_uninstall.sh"),update_dependencies:y("update_dependencies.sh")},fn=[{command:d.bold.cyan("create-component"),description:d.yellow("Create a new component for the project.")},{command:d.bold.cyan("create-component-react-native"),description:d.yellow("Create a new React Native component.")},{command:d.bold.cyan("create-screen-react-native"),description:d.yellow("Create a new React Native screen.")},{command:d.bold.cyan("create-env"),description:d.yellow("Create a .env file with default settings.")},{command:d.bold.cyan("create-route-gatsby"),description:d.yellow("Create a new route in a Gatsby project.")},{command:d.bold.cyan("create-hook"),description:d.yellow("Create a custom React hook.")},{command:d.bold.cyan("build-size"),description:d.yellow("Get the size of the build.")},{command:d.bold.cyan("clean-and-rebuild"),description:d.yellow("Clean and rebuild the project.")},{command:d.bold.cyan("clean-unused-dependencies"),description:d.yellow("Remove unused dependencies from the project.")},{command:d.bold.cyan("setup"),description:d.yellow("Run project setup script.")},{command:d.bold.cyan("unused-imports-list"),description:d.yellow("List unused imports in the project.")},{command:d.bold.cyan("unused-imports-uninstall"),description:d.yellow("Uninstall packages that are no longer imported.")},{command:d.bold.cyan("update-dependencies"),description:d.yellow("Update project dependencies.")},{command:d.bold.cyan("analyze-bundle"),description:d.yellow("Analyze the project bundle size.")},{command:d.bold.cyan("help"),description:d.yellow("Show this help message.")}],dn=e=>{let n=fn.filter(r=>r.command.includes(e)||e.includes(r.command)).map(r=>r.command);n.length>0&&(console.log(d.yellow("\u{1F4A1} Did you mean one of these commands?")),n.forEach(r=>console.log(` - ${r}`)))},m=(e,n)=>{let r=ut[e];r||(console.error(d.red(`\u274C Unknown script or script not found: ${d.bold(e)}`)),dn(e),process.exit(1));try{H.accessSync(r,H.constants.X_OK)}catch{console.error(d.red(`\u274C Script is not executable: ${d.bold(r)}`)),console.error(d.yellow("\u{1F4A1} Please ensure the script has execution permissions.")),process.exit(1)}console.log(d.green(`\u{1F680} Running ${d.bold(r)}...`));let t=ft();try{lt(`bash "${r}" ${n.join(" ")}`,{stdio:"inherit"}),t.stop(),console.log(d.green(`\u2705 Script ${d.bold(r)} completed successfully!`))}catch(o){t.stop(),console.error(d.red(`\u274C Failed to run ${d.bold(r)}: ${o.message}`)),console.error(d.yellow("\u{1F4A1} Check the script for errors or missing dependencies.")),process.exit(1)}},hn=()=>{console.log(d.bold.blue("\u{1F4DC} Available commands:"));let e=at(fn,{columnSplitter:"   ",config:{description:{maxWidth:60}}});console.log(e)},ft=()=>{let e=["|","/","-","\\"],n=0,r=setInterval(()=>{process.stdout.write(`\r${e[n++%e.length]}  `)},100);return{stop:()=>{clearInterval(r),process.stdout.write("\r")}}},B=process.argv.slice(2);B.length===0&&(hn(),process.exit(0));var ce=B[0];switch(ce){case"create-component":m("create_component",B.slice(1));break;case"create-component-react-native":m("create_component_react_native",B.slice(1));break;case"create-screen-react-native":m("create_screen_react_native",B.slice(1));break;case"create-env":m("create_env",[]);break;case"create-route-gatsby":m("create_route_gatsby",B.slice(1));break;case"create-hook":m("create_hook",B.slice(1));break;case"build-size":m("build_size",[]);break;case"clean-and-rebuild":m("clean_and_rebuild",[]);break;case"clean-unused-dependencies":m("clean_unused_dependencies",[]);break;case"setup":m("setup",[]);break;case"unused-imports-list":m("unused_imports_list",[]);break;case"unused-imports-uninstall":m("unused_imports_uninstall",[]);break;case"update-dependencies":m("update_dependencies",[]);break;case"analyze-bundle":m("analyze_bundle",[]);break;case"help":hn();break;default:console.error(d.red(`\u274C Unknown command: ${d.bold(ce)}`)),dn(ce),process.exit(1)}
