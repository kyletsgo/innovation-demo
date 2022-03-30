var mbWidth = 640;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

// 裝canvas的容器、canvas父層容器、canvas overlay容器、AdobeAn修改後名稱
function init_canvas($canvas,$anim_container,$dom_overlay_container,_namespace){
    canvas = document.getElementById($canvas);
    anim_container = document.getElementById($anim_container);
    dom_overlay_container = document.getElementById($dom_overlay_container);

    var key = Object.keys(this[_namespace].compositions)[0];
    var comp = this[_namespace].getComposition(key);
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) {
        handleFileLoad(evt, comp)
    });
    loader.addEventListener("complete", function (evt) {
        handleComplete(evt, comp)
    });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            "images": [queue.getResult(ssMetadata[i].name)],
            "frames": ssMetadata[i].frames
        })
    }

    if (getUrlParam("result") != "" && getUrlParam("result") != null && getUrlParam("result") != "undifiend") {
        if (theme == "base") {
            exportRoot = new lib.Base2h5();
        } else if (theme == "gum") {
            exportRoot = new lib.Gumh5();
        } else if (theme == "asw") {
            exportRoot = new lib.Aswh5();
        }
    }else {
        exportRoot = new lib.Indexh5();
    }

    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    if (getUrlParam("result") != "" && getUrlParam("result") != null && getUrlParam("result") != "undifiend") {
        if (theme == "base") {
            baseAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
            baseAn.compositionLoaded(lib.properties.id);
        } else if (theme == "gum") {
            gumAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
            gumAn.compositionLoaded(lib.properties.id);
        } else if (theme == "asw") {
            aswAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
            aswAn.compositionLoaded(lib.properties.id);
        }
    }else {
        indexAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]); 
        indexAn.compositionLoaded(lib.properties.id);
    }

    fnStartAnimation();
}