(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,302944,e=>{"use strict";function t(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}(0,e.i(56562).__name)(t,"populateCommonDb"),e.s(["populateCommonDb",0,t])},72562,e=>{"use strict";var t=e.i(301945),a=e.i(302944),r=e.i(905664),i=e.i(311495),n=e.i(56562),l=e.i(289590),s={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},o={axes:[],curves:[],options:s},c=structuredClone(o),m=i.defaultConfig_default.radar,g=(0,n.__name)(()=>(0,r.cleanAndMerge)({...m,...(0,i.getConfig)().radar}),"getConfig"),d=(0,n.__name)(()=>c.axes,"getAxes"),h=(0,n.__name)(()=>c.curves,"getCurves"),u=(0,n.__name)(()=>c.options,"getOptions"),p=(0,n.__name)(e=>{c.axes=e.map(e=>({name:e.name,label:e.label??e.name}))},"setAxes"),x=(0,n.__name)(e=>{c.curves=e.map(e=>({name:e.name,label:e.label??e.name,entries:f(e.entries)}))},"setCurves"),f=(0,n.__name)(e=>{if(void 0==e[0].axis)return e.map(e=>e.value);let t=d();if(0===t.length)throw Error("Axes must be populated before curves for reference entries");return t.map(t=>{let a=e.find(e=>e.axis?.$refText===t.name);if(void 0===a)throw Error("Missing entry for axis "+t.label);return a.value})},"computeCurveEntries"),_={getAxes:d,getCurves:h,getOptions:u,setAxes:p,setCurves:x,setOptions:(0,n.__name)(e=>{let t=e.reduce((e,t)=>(e[t.name]=t,e),{});c.options={showLegend:t.showLegend?.value??s.showLegend,ticks:t.ticks?.value??s.ticks,max:t.max?.value??s.max,min:t.min?.value??s.min,graticule:t.graticule?.value??s.graticule}},"setOptions"),getConfig:g,clear:(0,n.__name)(()=>{(0,i.clear)(),c=structuredClone(o)},"clear"),setAccTitle:i.setAccTitle,getAccTitle:i.getAccTitle,setDiagramTitle:i.setDiagramTitle,getDiagramTitle:i.getDiagramTitle,getAccDescription:i.getAccDescription,setAccDescription:i.setAccDescription},$=(0,n.__name)(e=>{(0,a.populateCommonDb)(e,_);let{axes:t,curves:r,options:i}=e;_.setAxes(t),_.setCurves(r),_.setOptions(i)},"populate"),v={parse:(0,n.__name)(async e=>{let t=await (0,l.parse)("radar",e);n.log.debug(t),$(t)},"parse")},y=(0,n.__name)((e,a,r,i)=>{let n=i.db,l=n.getAxes(),s=n.getCurves(),o=n.getOptions(),c=n.getConfig(),m=n.getDiagramTitle(),g=b((0,t.selectSvgElement)(a),c),d=o.max??Math.max(...s.map(e=>Math.max(...e.entries))),h=o.min,u=Math.min(c.width,c.height)/2;C(g,l,u,o.ticks,o.graticule),T(g,l,u,c),w(g,l,s,h,d,o.graticule,c),k(g,s,o.showLegend,c),g.append("text").attr("class","radarTitle").text(m).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),b=(0,n.__name)((e,t)=>{let a=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,i={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return e.attr("viewbox",`0 0 ${a} ${r}`).attr("width",a).attr("height",r),e.append("g").attr("transform",`translate(${i.x}, ${i.y})`)},"drawFrame"),C=(0,n.__name)((e,t,a,r,i)=>{if("circle"===i)for(let t=0;t<r;t++){let i=a*(t+1)/r;e.append("circle").attr("r",i).attr("class","radarGraticule")}else if("polygon"===i){let i=t.length;for(let n=0;n<r;n++){let l=a*(n+1)/r,s=t.map((e,t)=>{let a=2*t*Math.PI/i-Math.PI/2,r=l*Math.cos(a),n=l*Math.sin(a);return`${r},${n}`}).join(" ");e.append("polygon").attr("points",s).attr("class","radarGraticule")}}},"drawGraticule"),T=(0,n.__name)((e,t,a,r)=>{let i=t.length;for(let n=0;n<i;n++){let l=t[n].label,s=2*n*Math.PI/i-Math.PI/2;e.append("line").attr("x1",0).attr("y1",0).attr("x2",a*r.axisScaleFactor*Math.cos(s)).attr("y2",a*r.axisScaleFactor*Math.sin(s)).attr("class","radarAxisLine"),e.append("text").text(l).attr("x",a*r.axisLabelFactor*Math.cos(s)).attr("y",a*r.axisLabelFactor*Math.sin(s)).attr("class","radarAxisLabel")}},"drawAxes");function w(e,t,a,r,i,n,l){let s=t.length,o=Math.min(l.width,l.height)/2;a.forEach((t,a)=>{if(t.entries.length!==s)return;let c=t.entries.map((e,t)=>{let a=2*Math.PI*t/s-Math.PI/2,n=M(e,r,i,o);return{x:n*Math.cos(a),y:n*Math.sin(a)}});"circle"===n?e.append("path").attr("d",A(c,l.curveTension)).attr("class",`radarCurve-${a}`):"polygon"===n&&e.append("polygon").attr("points",c.map(e=>`${e.x},${e.y}`).join(" ")).attr("class",`radarCurve-${a}`)})}function M(e,t,a,r){return r*(Math.min(Math.max(e,t),a)-t)/(a-t)}function A(e,t){let a=e.length,r=`M${e[0].x},${e[0].y}`;for(let i=0;i<a;i++){let n=e[(i-1+a)%a],l=e[i],s=e[(i+1)%a],o=e[(i+2)%a],c={x:l.x+(s.x-n.x)*t,y:l.y+(s.y-n.y)*t},m={x:s.x-(o.x-l.x)*t,y:s.y-(o.y-l.y)*t};r+=` C${c.x},${c.y} ${m.x},${m.y} ${s.x},${s.y}`}return`${r} Z`}function k(e,t,a,r){if(!a)return;let i=(r.width/2+r.marginRight)*3/4,n=-(3*(r.height/2+r.marginTop))/4;t.forEach((t,a)=>{let r=e.append("g").attr("transform",`translate(${i}, ${n+20*a})`);r.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${a}`),r.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(t.label)})}(0,n.__name)(w,"drawCurves"),(0,n.__name)(M,"relativeRadius"),(0,n.__name)(A,"closedRoundCurve"),(0,n.__name)(k,"drawLegend");var L=(0,n.__name)((e,t)=>{let a="";for(let r=0;r<e.THEME_COLOR_LIMIT;r++){let i=e[`cScale${r}`];a+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return a},"genIndexStyles"),D=(0,n.__name)(e=>{let t=(0,i.getThemeVariables)(),a=(0,i.getConfig)(),n=(0,r.cleanAndMerge)(t,a.themeVariables),l=(0,r.cleanAndMerge)(n.radar,e);return{themeVariables:n,radarOptions:l}},"buildRadarStyleOptions"),P=(0,n.__name)(({radar:e}={})=>{let{themeVariables:t,radarOptions:a}=D(e);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${a.axisColor};
		stroke-width: ${a.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${a.axisLabelFontSize}px;
		color: ${a.axisColor};
	}
	.radarGraticule {
		fill: ${a.graticuleColor};
		fill-opacity: ${a.graticuleOpacity};
		stroke: ${a.graticuleColor};
		stroke-width: ${a.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${a.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${L(t,a)}
	`},"styles");e.s(["diagram",0,{parser:v,db:_,renderer:{draw:y},styles:P}])},139149,e=>{e.v(t=>Promise.all(["static/chunks/08ai2vq2380.x.js"].map(t=>e.l(t))).then(()=>t(85691)))},368613,e=>{e.v(t=>Promise.all(["static/chunks/00et89.xsrohe.js"].map(t=>e.l(t))).then(()=>t(707398)))},456732,e=>{e.v(t=>Promise.all(["static/chunks/06r80qjw.-g76.js"].map(t=>e.l(t))).then(()=>t(73042)))},234132,e=>{e.v(t=>Promise.all(["static/chunks/0s4l09o-z53yd.js"].map(t=>e.l(t))).then(()=>t(868241)))},77605,e=>{e.v(t=>Promise.all(["static/chunks/0djde0ebz-0vt.js"].map(t=>e.l(t))).then(()=>t(459737)))},906234,e=>{e.v(t=>Promise.all(["static/chunks/12~9-i3fnv.w9.js"].map(t=>e.l(t))).then(()=>t(14693)))},871400,e=>{e.v(t=>Promise.all(["static/chunks/169~guxa9xbbi.js"].map(t=>e.l(t))).then(()=>t(543892)))}]);