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



(lib.aswt01 = function() {
	this.initialize(img.aswt01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,627,354);


(lib.aswt02 = function() {
	this.initialize(img.aswt02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,69);


(lib.aswt03 = function() {
	this.initialize(img.aswt03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,139);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,800);// helper functions:

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
p.nominalBounds = new cjs.Rectangle(0,0,1080,800);


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
	this.instance = new lib.aswt01();
	this.instance.setTransform(-314,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tittle, new cjs.Rectangle(-314,-177,627,354), null);


(lib.star = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.aswt03();
	this.instance.setTransform(-69.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-69.5,-69.5,139,139), null);


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
	this.shape.graphics.f("#003CA6").s().p("Eg5uAMbQG1hNGUieQGHiZEZi/QDiibCSirQheh1goh6QglhzANhuQAMhqA2hIQA2hIBGgBQAxgBAqAXQApAXAcAsQAxBNgEBwQgFBxg5B0QgzBohWBpQCgC7EiCbQFECtHSB2QNsDgTlAGQRQAGPhidIAAAfQviCcxTgGQzlgGtvjgQnUh4lHiuQkliciki/QiVCujkCbQkcDBmHCZQmZCgm7BOgA9UreQgyBAgMBjQgLBoAiBsQAlBzBYBvQBRhkAwhjQA1hrAFhqQAFhqgshFQgXglgigTQgigTgoAAIgEAAQg1ABguA8g");
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
	this.shape.graphics.f("#003CA6").s().p("EAoxAHNQlehmqukLQpLjjk9hoQoRisnthWQvxiwz5BRQp/Aom/BOIAAgeQG/hOJ/gpQT7hRP1CxQHtBWIUCtQE9BoJNDkQKsEKFcBlQJCCoIQAUIgBAeQoUgUpEiog");
	this.shape.setTransform(0,0.026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line01, new cjs.Rectangle(-372.2,-64.9,744.4,129.9), null);


(lib.light = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.aswt02();
	this.instance.setTransform(-54.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-54.5,-34.5,109,69), null);


// stage content:
(lib.Aswh5 = function(mode,startPosition,loop,reversed) {
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

	// star02
	this.instance = new lib.star();
	this.instance.setTransform(282.15,465.7,0.1637,0.1637);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regX:0.1,scaleX:1.6389,scaleY:1.6389,y:465.55,alpha:1},4).to({regX:0,scaleX:0.6827,scaleY:0.6827,x:282.1,y:465.65},4).wait(44));

	// star01
	this.instance_1 = new lib.star();
	this.instance_1.setTransform(682.7,220.45,0.2223,0.2223,0,0,0,0,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.8925,scaleY:1.8925,x:682.9,y:220.35,alpha:1},4).to({regX:0,regY:0,scaleX:1,scaleY:1,x:682.7,y:220.25},4).wait(53));

	// Layer_16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("Av7P8IAA/3If3AAIAAf3g");
	var mask_graphics_15 = new cjs.Graphics().p("A19P8IAA/3MAr7AAAIAAf3g");
	var mask_graphics_16 = new cjs.Graphics().p("A7/P8IAA/3MA3/AAAIAAf3g");
	var mask_graphics_17 = new cjs.Graphics().p("EgiBAP8IAA/3MBEDAAAIAAf3g");
	var mask_graphics_18 = new cjs.Graphics().p("EgoDAP8IAA/3MBQHAAAIAAf3g");
	var mask_graphics_19 = new cjs.Graphics().p("EguFAP8IAA/3MBcLAAAIAAf3g");
	var mask_graphics_20 = new cjs.Graphics().p("Eg0GAP8IAA/3MBoOAAAIAAf3g");
	var mask_graphics_21 = new cjs.Graphics().p("Eg6IAP8IAA/3MB0SAAAIAAf3g");
	var mask_graphics_22 = new cjs.Graphics().p("EhAKAP8IAA/3MCAVAAAIAAf3g");
	var mask_graphics_23 = new cjs.Graphics().p("EhGMAP8IAA/3MCMZAAAIAAf3g");
	var mask_graphics_24 = new cjs.Graphics().p("EhMOAP8IAA/3MCYdAAAIAAf3g");
	var mask_graphics_25 = new cjs.Graphics().p("EhSQAP8IAA/3MCkhAAAIAAf3g");
	var mask_graphics_26 = new cjs.Graphics().p("EhYSAP8IAA/3MCwlAAAIAAf3g");
	var mask_graphics_27 = new cjs.Graphics().p("EheUAP8IAA/3MC8pAAAIAAf3g");
	var mask_graphics_28 = new cjs.Graphics().p("EhkWAP8IAA/3MDItAAAIAAf3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:474.125,y:554.175}).wait(1).to({graphics:mask_graphics_15,x:474.125,y:554.175}).wait(1).to({graphics:mask_graphics_16,x:474.15,y:554.175}).wait(1).to({graphics:mask_graphics_17,x:474.15,y:554.175}).wait(1).to({graphics:mask_graphics_18,x:474.175,y:554.175}).wait(1).to({graphics:mask_graphics_19,x:474.175,y:554.175}).wait(1).to({graphics:mask_graphics_20,x:474.2,y:554.175}).wait(1).to({graphics:mask_graphics_21,x:474.2,y:554.175}).wait(1).to({graphics:mask_graphics_22,x:474.175,y:554.175}).wait(1).to({graphics:mask_graphics_23,x:474.2,y:554.175}).wait(1).to({graphics:mask_graphics_24,x:474.2,y:554.175}).wait(1).to({graphics:mask_graphics_25,x:474.225,y:554.175}).wait(1).to({graphics:mask_graphics_26,x:474.225,y:554.175}).wait(1).to({graphics:mask_graphics_27,x:474.25,y:554.175}).wait(1).to({graphics:mask_graphics_28,x:474.25,y:554.175}).wait(44));

	// line01
	this.instance_2 = new lib.line01();
	this.instance_2.setTransform(96.8,531.15,0.6145,0.6145,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(58));

	// Layer_15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EBEdAhJMAAAgk4MAk4AAAMAAAAk4g");
	var mask_1_graphics_1 = new cjs.Graphics().p("A3QScMAAAgk3MAuhAAAMAAAAk3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("A8FScMAAAgk3MA4LAAAMAAAAk3g");
	var mask_1_graphics_3 = new cjs.Graphics().p("Egg6AScMAAAgk3MBB1AAAMAAAAk3g");
	var mask_1_graphics_4 = new cjs.Graphics().p("EglvAScMAAAgk3MBLfAAAMAAAAk3g");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgqkAScMAAAgk3MBVJAAAMAAAAk3g");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgvZAScMAAAgk3MBezAAAMAAAAk3g");
	var mask_1_graphics_7 = new cjs.Graphics().p("Eg0OAScMAAAgk3MBodAAAMAAAAk3g");
	var mask_1_graphics_8 = new cjs.Graphics().p("Eg5DAScMAAAgk3MByHAAAMAAAAk3g");
	var mask_1_graphics_9 = new cjs.Graphics().p("Eg94AScMAAAgk3MB7xAAAMAAAAk3g");
	var mask_1_graphics_10 = new cjs.Graphics().p("EhCtAScMAAAgk3MCFbAAAMAAAAk3g");
	var mask_1_graphics_11 = new cjs.Graphics().p("EhHiAScMAAAgk3MCPFAAAMAAAAk3g");
	var mask_1_graphics_12 = new cjs.Graphics().p("EhMXAScMAAAgk3MCYvAAAMAAAAk3g");
	var mask_1_graphics_13 = new cjs.Graphics().p("EhRMAScMAAAgk3MCiZAAAMAAAAk3g");
	var mask_1_graphics_14 = new cjs.Graphics().p("Egm3AhJMAAAgk4MCsEAAAMAAAAk4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:674.15,y:212.075}).wait(1).to({graphics:mask_1_graphics_1,x:1224.875,y:306.125}).wait(1).to({graphics:mask_1_graphics_2,x:1219.425,y:306.125}).wait(1).to({graphics:mask_1_graphics_3,x:1214.025,y:306.125}).wait(1).to({graphics:mask_1_graphics_4,x:1208.575,y:306.125}).wait(1).to({graphics:mask_1_graphics_5,x:1203.175,y:306.125}).wait(1).to({graphics:mask_1_graphics_6,x:1197.725,y:306.125}).wait(1).to({graphics:mask_1_graphics_7,x:1192.325,y:306.125}).wait(1).to({graphics:mask_1_graphics_8,x:1186.925,y:306.125}).wait(1).to({graphics:mask_1_graphics_9,x:1181.475,y:306.125}).wait(1).to({graphics:mask_1_graphics_10,x:1176.075,y:306.125}).wait(1).to({graphics:mask_1_graphics_11,x:1170.625,y:306.125}).wait(1).to({graphics:mask_1_graphics_12,x:1165.225,y:306.125}).wait(1).to({graphics:mask_1_graphics_13,x:1159.775,y:306.125}).wait(1).to({graphics:mask_1_graphics_14,x:852.5,y:212.075}).wait(58));

	// line02
	this.instance_3 = new lib.line02();
	this.instance_3.setTransform(882.15,329.1,0.7536,0.7536);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72));

	// Layer_30 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AtdNeIAA67Ia7AAIAAa7g");
	var mask_2_graphics_1 = new cjs.Graphics().p("AteNfIAA69Ia8AAIAAa9g");
	var mask_2_graphics_2 = new cjs.Graphics().p("AtdNfIAA69Ia7AAIAAa9g");
	var mask_2_graphics_3 = new cjs.Graphics().p("AteNeIAA67Ia8AAIAAa7g");
	var mask_2_graphics_4 = new cjs.Graphics().p("AteNeIAA68Ia9AAIAAa8g");
	var mask_2_graphics_5 = new cjs.Graphics().p("AteNfIAA68Ia8AAIAAa8g");
	var mask_2_graphics_6 = new cjs.Graphics().p("AteNeIAA67Ia9AAIAAa7g");
	var mask_2_graphics_7 = new cjs.Graphics().p("AteNfIAA69Ia8AAIAAa9g");
	var mask_2_graphics_8 = new cjs.Graphics().p("AteNfIAA69Ia9AAIAAa9g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:1095.75,y:510.4}).wait(1).to({graphics:mask_2_graphics_1,x:1075.75,y:510.35}).wait(1).to({graphics:mask_2_graphics_2,x:1055.7,y:510.25}).wait(1).to({graphics:mask_2_graphics_3,x:1035.7,y:510.2}).wait(1).to({graphics:mask_2_graphics_4,x:1015.7,y:510.1}).wait(1).to({graphics:mask_2_graphics_5,x:995.65,y:510.05}).wait(1).to({graphics:mask_2_graphics_6,x:975.65,y:509.95}).wait(1).to({graphics:mask_2_graphics_7,x:955.6,y:509.9}).wait(1).to({graphics:mask_2_graphics_8,x:935.6,y:509.8}).wait(64));

	// light
	this.instance_4 = new lib.light();
	this.instance_4.setTransform(974,539.15,0.4486,0.4486,0,0,0,54.5,0);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,x:976.05,alpha:1},8).wait(64));

	// title
	this.instance_5 = new lib.tittle();
	this.instance_5.setTransform(544.35,419.05);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({x:536.35,alpha:1},7,cjs.Ease.get(1)).wait(58));

	// bg
	this.instance_6 = new lib.bg2("synched",0);
	this.instance_6.setTransform(605,451.35,1.322,1.322,0,0,0,539.9,399.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:539.8,regY:399.7,scaleX:1.2719,scaleY:1.2719,x:418.65,y:311.05,alpha:0},29,cjs.Ease.get(1)).wait(43));

	// bg
	this.instance_7 = new lib.bg2("synched",0);
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(272.1,202.7,1046.9,777.5999999999999);
// library properties:
lib.properties = {
	id: 'FB59D1E0A848436885A0B7989A76664A',
	width: 1080,
	height: 800,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/banner/asw/images/aswt01.png?1614313231909", id:"aswt01"},
		{src:"images/banner/asw/images/aswt02.png?1614313231909", id:"aswt02"},
		{src:"images/banner/asw/images/aswt03.png?1614313231909", id:"aswt03"},
		{src:"images/banner/asw/images/bg.jpg?1614313231909", id:"bg"}
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


})(createjs = createjs||{}, aswAn = aswAn||{});
var createjs, aswAn;