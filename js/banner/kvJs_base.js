(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,960);


(lib.L1 = function() {
	this.initialize(img.L1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,105);


(lib.L2 = function() {
	this.initialize(img.L2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,61);


(lib.L3 = function() {
	this.initialize(img.L3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,233);


(lib.L4 = function() {
	this.initialize(img.L4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,107);


(lib.L5 = function() {
	this.initialize(img.L5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,143);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.bg2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1080,960);


(lib.tittle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A7B3E").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tittle, new cjs.Rectangle(-312.3,-175.9,624.7,351.9), null);


(lib.line02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#138E45").s().p("Eg5uAMbQG1hNGUieQGHiZEZi/QDiibCSirQheh1goh6QglhzANhuQAMhqA2hIQA2hIBGgBQAxgBAqAXQApAXAcAsQAxBNgEBwQgFBxg5B0QgzBohWBpQCgC7EiCbQFECtHSB2QNsDgTlAGQRQAGPhidIAAAfQviCcxTgGQzlgGtvjgQnUh4lHiuQkliciki/QiVCujkCbQkcDBmHCZQmZCgm7BOgA9UreQgyBAgMBjQgLBoAiBsQAlBzBYBvQBRhkAwhjQA1hrAFhqQAFhqgshFQgXglgigTQgigTgoAAIgEAAQg1ABguA8g");
	this.shape.setTransform(0.025,0.0229);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line02, new cjs.Rectangle(-369.4,-82.5,738.9,165.1), null);


(lib.line01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#138E45").s().p("EAoxAHNQlehmqukLQpLjjk9hoQoSisnrhWQvyiwz6BRQp+Aom/BOIAAgeQG/hOJ/gpQT6hRP1CxQHvBWISCtQE/BoJMDkQKsEKFdBlQJBCoIQAUIgBAeQoTgUpFiog");
	this.shape.setTransform(0,0.026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line01, new cjs.Rectangle(-372.2,-64.9,744.4,129.9), null);


(lib.L5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.L5();
	this.instance.setTransform(-106.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L5_1, new cjs.Rectangle(-106.5,-71.5,213,143), null);


(lib.L4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.L4();
	this.instance.setTransform(-98,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L4_1, new cjs.Rectangle(-98,-53.5,196,107), null);


(lib.L3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.L3();
	this.instance.setTransform(-107.5,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L3_1, new cjs.Rectangle(-107.5,-116.5,215,233), null);


(lib.L2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.L2();
	this.instance.setTransform(-49.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L2_1, new cjs.Rectangle(-49.5,-30.5,99,61), null);


(lib.L1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.L1();
	this.instance.setTransform(-70.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L1_1, new cjs.Rectangle(-70.5,-52.5,141,105), null);


// stage content:
(lib.Base2h5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [71];
	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("EANIAyzIAA/5If5AAIAAf5g");
	var mask_graphics_18 = new cjs.Graphics().p("A1NP8IAA/3MAqbAAAIAAf3g");
	var mask_graphics_19 = new cjs.Graphics().p("A6fP8IAA/3MA0+AAAIAAf3g");
	var mask_graphics_20 = new cjs.Graphics().p("A/wP8IAA/3MA/hAAAIAAf3g");
	var mask_graphics_21 = new cjs.Graphics().p("EglCAP8IAA/3MBKFAAAIAAf3g");
	var mask_graphics_22 = new cjs.Graphics().p("EgqTAP8IAA/3MBUoAAAIAAf3g");
	var mask_graphics_23 = new cjs.Graphics().p("EgvlAP8IAA/3MBfLAAAIAAf3g");
	var mask_graphics_24 = new cjs.Graphics().p("Eg03AP8IAA/3MBpvAAAIAAf3g");
	var mask_graphics_25 = new cjs.Graphics().p("Eg6IAP8IAA/3MB0SAAAIAAf3g");
	var mask_graphics_26 = new cjs.Graphics().p("Eg/aAP8IAA/3MB+1AAAIAAf3g");
	var mask_graphics_27 = new cjs.Graphics().p("EhErAP8IAA/3MCJYAAAIAAf3g");
	var mask_graphics_28 = new cjs.Graphics().p("EhJ9AP8IAA/3MCT7AAAIAAf3g");
	var mask_graphics_29 = new cjs.Graphics().p("EhPPAP8IAA/3MCefAAAIAAf3g");
	var mask_graphics_30 = new cjs.Graphics().p("EhUhAP8IAA/3MCpDAAAIAAf3g");
	var mask_graphics_31 = new cjs.Graphics().p("EhZyAP8IAA/3MCzlAAAIAAf3g");
	var mask_graphics_32 = new cjs.Graphics().p("EhfEAP8IAA/3MC+JAAAIAAf3g");
	var mask_graphics_33 = new cjs.Graphics().p("EhkWAyzIAA/5MDItAAAIAAf5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:288.075,y:325.1}).wait(1).to({graphics:mask_graphics_18,x:474.125,y:548.175}).wait(1).to({graphics:mask_graphics_19,x:474.15,y:548.175}).wait(1).to({graphics:mask_graphics_20,x:474.15,y:548.175}).wait(1).to({graphics:mask_graphics_21,x:474.175,y:548.175}).wait(1).to({graphics:mask_graphics_22,x:474.15,y:548.175}).wait(1).to({graphics:mask_graphics_23,x:474.175,y:548.175}).wait(1).to({graphics:mask_graphics_24,x:474.175,y:548.175}).wait(1).to({graphics:mask_graphics_25,x:474.2,y:548.175}).wait(1).to({graphics:mask_graphics_26,x:474.2,y:548.175}).wait(1).to({graphics:mask_graphics_27,x:474.2,y:548.175}).wait(1).to({graphics:mask_graphics_28,x:474.225,y:548.175}).wait(1).to({graphics:mask_graphics_29,x:474.225,y:548.175}).wait(1).to({graphics:mask_graphics_30,x:474.225,y:548.175}).wait(1).to({graphics:mask_graphics_31,x:474.225,y:548.175}).wait(1).to({graphics:mask_graphics_32,x:474.25,y:548.175}).wait(1).to({graphics:mask_graphics_33,x:474.25,y:325.1}).wait(39));

	// line01
	this.instance = new lib.line01();
	this.instance.setTransform(96.8,531.15,0.6145,0.6145,0,0,0,0.1,0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(55));

	// Layer_15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EBEdAjzMAAAgk4MAk4AAAMAAAAk4g");
	var mask_1_graphics_1 = new cjs.Graphics().p("A2aScMAAAgk3MAs1AAAMAAAAk3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("A6YScMAAAgk3MA0xAAAMAAAAk3g");
	var mask_1_graphics_3 = new cjs.Graphics().p("A+XScMAAAgk3MA8vAAAMAAAAk3g");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgiVAScMAAAgk3MBErAAAMAAAAk3g");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgmTAScMAAAgk3MBMoAAAMAAAAk3g");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgqSAScMAAAgk3MBUlAAAMAAAAk3g");
	var mask_1_graphics_7 = new cjs.Graphics().p("EguQAScMAAAgk3MBciAAAMAAAAk3g");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgyPAScMAAAgk3MBkfAAAMAAAAk3g");
	var mask_1_graphics_9 = new cjs.Graphics().p("Eg2OAScMAAAgk3MBscAAAMAAAAk3g");
	var mask_1_graphics_10 = new cjs.Graphics().p("Eg6MAScMAAAgk3MB0ZAAAMAAAAk3g");
	var mask_1_graphics_11 = new cjs.Graphics().p("Eg+LAScMAAAgk3MB8WAAAMAAAAk3g");
	var mask_1_graphics_12 = new cjs.Graphics().p("EhCJAScMAAAgk3MCETAAAMAAAAk3g");
	var mask_1_graphics_13 = new cjs.Graphics().p("EhGHAScMAAAgk3MCMPAAAMAAAAk3g");
	var mask_1_graphics_14 = new cjs.Graphics().p("EhKGAScMAAAgk3MCUNAAAMAAAAk3g");
	var mask_1_graphics_15 = new cjs.Graphics().p("EhOEAScMAAAgk3MCcJAAAMAAAAk3g");
	var mask_1_graphics_16 = new cjs.Graphics().p("EhSDAScMAAAgk3MCkHAAAMAAAAk3g");
	var mask_1_graphics_17 = new cjs.Graphics().p("Egm3AjzMAAAgk4MCsEAAAMAAAAk4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:674.15,y:229.075}).wait(1).to({graphics:mask_1_graphics_1,x:1225.825,y:340.125}).wait(1).to({graphics:mask_1_graphics_2,x:1221.35,y:340.125}).wait(1).to({graphics:mask_1_graphics_3,x:1216.875,y:340.125}).wait(1).to({graphics:mask_1_graphics_4,x:1212.425,y:340.125}).wait(1).to({graphics:mask_1_graphics_5,x:1207.95,y:340.125}).wait(1).to({graphics:mask_1_graphics_6,x:1203.5,y:340.125}).wait(1).to({graphics:mask_1_graphics_7,x:1199,y:340.125}).wait(1).to({graphics:mask_1_graphics_8,x:1194.55,y:340.125}).wait(1).to({graphics:mask_1_graphics_9,x:1190.1,y:340.125}).wait(1).to({graphics:mask_1_graphics_10,x:1185.65,y:340.125}).wait(1).to({graphics:mask_1_graphics_11,x:1181.15,y:340.125}).wait(1).to({graphics:mask_1_graphics_12,x:1176.7,y:340.125}).wait(1).to({graphics:mask_1_graphics_13,x:1172.225,y:340.125}).wait(1).to({graphics:mask_1_graphics_14,x:1167.775,y:340.125}).wait(1).to({graphics:mask_1_graphics_15,x:1163.3,y:340.125}).wait(1).to({graphics:mask_1_graphics_16,x:1158.825,y:340.125}).wait(1).to({graphics:mask_1_graphics_17,x:852.5,y:229.075}).wait(55));

	// line02
	this.instance_1 = new lib.line02();
	this.instance_1.setTransform(882.15,329.1,0.7536,0.7536);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72));

	// title
	this.instance_2 = new lib.tittle();
	this.instance_2.setTransform(544.35,419.05);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:536.35,alpha:1},8,cjs.Ease.get(1)).wait(55));

	// L5
	this.instance_3 = new lib.L5_1();
	this.instance_3.setTransform(1251.35,506.85,0.3052,0.3052,0,0,180);
	this.instance_3.alpha = 0.4609;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.6993,scaleY:0.6993,guide:{path:[1251.4,506.9,1194.8,525.5,1139.4,541.3,1119,547.1,1099.2,552.3,978.6,584.4,879.1,597.3,734.3,616,642.7,592.8,504.2,558,264.3,616.4,220.7,627,173,640.9]},alpha:1},36,cjs.Ease.get(1)).wait(36));

	// L4
	this.instance_4 = new lib.L4_1();
	this.instance_4.setTransform(635,98.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({x:599,y:82.4,alpha:1},9).wait(56));

	// L3
	this.instance_5 = new lib.L3_1();
	this.instance_5.setTransform(1031.6,253.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:987.6,y:233.5,alpha:1},9).wait(57));

	// L2
	this.instance_6 = new lib.L2_1();
	this.instance_6.setTransform(106.5,358.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({_off:false},0).to({x:82.5,y:346.5,alpha:1},9).wait(41));

	// L1
	this.instance_7 = new lib.L1_1();
	this.instance_7.setTransform(81.5,410.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({x:5.5,y:402.5,alpha:1},9).wait(42));

	// bg
	this.instance_8 = new lib.bg2("synched",0);
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(408,400,875.9000000000001,560);
// library properties:
lib.properties = {
	id: 'FB59D1E0A848436885A0B7989A76664A',
	width: 1080,
	height: 800,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/banner/base/images/bg.jpg?1614313598782", id:"bg"},
		{src:"images/banner/base/images/L1.png?1614313598782", id:"L1"},
		{src:"images/banner/base/images/L2.png?1614313598782", id:"L2"},
		{src:"images/banner/base/images/L3.png?1614313598782", id:"L3"},
		{src:"images/banner/base/images/L4.png?1614313598782", id:"L4"},
		{src:"images/banner/base/images/L5.png?1614313598782", id:"L5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FB59D1E0A848436885A0B7989A76664A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, baseAn = baseAn||{});
var createjs, baseAn;