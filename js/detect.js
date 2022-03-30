detect = function () {
  //private menbers
  let forwardTimes = []
  let withBoxes = false
  var isVidoe = false;

  //private methods
  function init() {
    console.log('detect is loaded.');

  }

  //////////////////////////////////
  //FaceDetector
  
  async function initFaceDetector() {
    // load face detection and face expression recognition models
    await changeFaceDetector(TINY_FACE_DETECTOR)            //選擇FaceDetector演算法 //注意路徑**
    await faceapi.loadFaceLandmarkModel('face-api/')        //加載FaceLandmarkModel //注意路徑**
    await faceapi.loadFaceExpressionModel('face-api/')   //加載FaceExpressionModel //注意路徑**
    changeInputSize(224)

    // try to access users webcam and stream the images
    // to the video element
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} })
    const videoEl = $('#inputVideo').get(0)
    videoEl.srcObject = stream
  }

  function updateTimeStats(timeInMs) {
    forwardTimes = [timeInMs].concat(forwardTimes).slice(0, 30)
    const avgTimeInMs = forwardTimes.reduce((total, t) => total + t) / forwardTimes.length
    $('#time').val(`${Math.round(avgTimeInMs)} ms`)
    $('#fps').val(`${faceapi.utils.round(1000 / avgTimeInMs)}`)
  }

  async function onPlay() {

    // console.log('play');

    const videoEl = $('#inputVideo').get(0)

    if ($('#inputVideo').height() != 0 && !isVidoe) {
      isVidoe = true;
      console.log($('#inputVideo').height());
      var _d = ($(window).height() * 1.3) / $('#inputVideo').height();
      gsap.set('.video__container', { x: -30, scaleX: -_d, scaleY: _d, transformOrigin: 'center top' });
    }

    if (videoEl.paused || videoEl.ended || !isFaceDetectionModelLoaded())
      return setTimeout(() => onPlay())


    const options = getFaceDetectorOptions()

    const ts = Date.now()
    // const result = await faceapi.detectSingleFace(videoEl, options).withFaceLandmarks()
    const result = await faceapi.detectAllFaces(videoEl, options).withFaceLandmarks().withFaceExpressions()
    var _faceLandmarks;
    updateTimeStats(Date.now() - ts)

    // if (result) {
    //   const canvas = $('#overlay').get(0)
    //   const dims = faceapi.matchDimensions(canvas, videoEl, true)

    //   const resizedResult = faceapi.resizeResults(result, dims)
    //   const minConfidence = 0.05
    //   if (withBoxes) {
    //     faceapi.draw.drawDetections(canvas, resizedResult)
    //   }
    //   // faceapi.draw.drawFaceExpressions(canvas, resizedResult, minConfidence)
    //   faceapi.draw.drawFaceLandmarks(canvas, resizedResult)

    //   _faceLandmarks = resizedResult.landmarks;
    //   console.log(_faceLandmarks);
    // }

    if (result) {
      const canvas = $('#overlay').get(0)

      const dims = faceapi.matchDimensions(canvas, videoEl, true)
      const resizedResult = faceapi.resizeResults(result, dims)

      // draw detections into the canvas
      // faceapi.draw.drawDetections(canvas, resizedResult)

      // draw the landmarks into the canvas
      // faceapi.draw.drawFaceLandmarks(canvas, resizedResult)


      // const box = { x: 50, y: 50, width: 100, height: 100 }
      // // see DrawBoxOptions below
      // const drawOptions = {
      //   label: 'Hello I am a box!',
      //   lineWidth: 2
      // }
      // const drawBox = new faceapi.draw.DrawBox(box, drawOptions)
      // drawBox.draw(canvas)


      for (const face of result) {
        const features = {
          jaw: face.landmarks.positions.slice(0, 17),
          eyebrowLeft: face.landmarks.positions.slice(17, 22),
          eyebrowRight: face.landmarks.positions.slice(22, 27),
          noseBridge: face.landmarks.positions.slice(27, 31),
          nose: face.landmarks.positions.slice(31, 36),
          eyeLeft: face.landmarks.positions.slice(36, 42),
          eyeRight: face.landmarks.positions.slice(42, 48),
          lipOuter: face.landmarks.positions.slice(48, 60),
          lipInner: face.landmarks.positions.slice(60),
        };
    
        for (const eye of [features.eyeLeft, features.eyeRight]) {
          const eyeBox = getBoxFromPoints(eye);
          const text = [
            '⭐️'
          ]
          const anchor = {x: eyeBox.center.x - 14, y: eyeBox.center.y - 8}
          const drawOptions = {
            anchorPosition: 'TOP_LEFT',
            backgroundColor: 'rgba(0, 0, 0, 0)'
          }
          const drawBox = new faceapi.draw.DrawTextField(text, anchor, drawOptions)
          drawBox.draw(canvas, resizedResult)
        }
      }



      // const text = [
      //   'This is a textline!',
      //   'This is another textline!'
      // ]
      // const anchor = { x: 0, y: 0 }
      // // see DrawTextField below
      // const drawOptions = {
      //   anchorPosition: 'TOP_LEFT',
      //   backgroundColor: 'rgba(0, 0, 0, 0.5)'
      // }
      // const drawBox = new faceapi.draw.DrawTextField(text, anchor, drawOptions)
      // drawBox.draw(canvas, resizedResult)


      // resizedResult.forEach( detection => {
      //   const box = detection.detection.box
      //   const drawBox = new faceapi.draw.DrawBox(box, { label: "12 year old " + "CCC" })
      //   drawBox.draw(canvas)
      // })



      const maxDistance = 0.6


      // if (withBoxes) {
      //   faceapi.draw.drawDetections(canvas, resizedResult)
      // }
      // faceapi.draw.drawFaceExpressions(canvas, resizedResult, minConfidence)
      // faceapi.draw.drawFaceLandmarks(canvas, resizedResult)

      // _faceLandmarks = resizedResult.landmarks;
      // console.log(_faceLandmarks);
    }


    //FaceExpressions
    // const result2 = await faceapi.detectSingleFace(videoEl, options).withFaceExpressions()
    // console.log(result2);
    // if(result2 !== 'undefined') console.log(result2);
    // if (result2) {
    //   const canvas = $('#overlay').get(0)
    //   const dims = faceapi.matchDimensions(canvas, videoEl, true)

    //   const resizedResult2 = faceapi.resizeResults(result2, dims)
    //   const minConfidence = 0.05
    //   faceapi.draw.drawFaceExpressions(canvas, resizedResult2, minConfidence) 
    // }

    setTimeout(() => onPlay())
  }

  //////////////////////////////////

  function getBoxFromPoints(points) {
    const box = {
      bottom: -Infinity,
      left: Infinity,
      right: -Infinity,
      top: Infinity,
  
      get center() {
        return {
          x: this.left + this.width / 2,
          y: this.top + this.height / 2,
        };
      },
  
      get height() {
        return this.bottom - this.top;
      },
  
      get width() {
        return this.right - this.left;
      },
    };
  
    for (const point of points) {
      box.left = Math.min(box.left, point.x);
      box.right = Math.max(box.right, point.x);
  
      box.bottom = Math.max(box.bottom, point.y);
      box.top = Math.min(box.top, point.y);
    }
  
    return box;
  }

  function intoPage(el, status = "block") {
    gsap.fromTo(el, {
      autoAlpha: 0,
      display: status
    }, {
      duration: 1.3,
      autoAlpha: 1,
      ease: "power2.out",
      delay: 0.3
    })
  }

  function leavePage(el) {
    gsap.fromTo(el, {
      autoAlpha: 1
    }, {
      duration: 0.3,
      autoAlpha: 0,
      onComplete: function () {
        $(el).css("display", "none");
      }
    })
  }

  {
    $(document).ready(function () {

      intoPage(".frame03");
      initFaceDetector();
    });
  }

  //public
  return {
    intoPage: function () {
      intoPage();
    },
    leavePage: function () {
      leavePage();
    },

    nextPage: function () {
      nextPage();
    },

    onPlay:function () {
      onPlay();
    }
  };
};

var detect = new detect();