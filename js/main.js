(function () { 'use strict';


//**************** SNAP SVG *******************//

  var s = Snap("#svg-1");
  var g = s.group();

  var floor = s.rect(0, 310, 400, 100)
  .attr({
    fill: "#ccf3ff"
  });

var washerElem;
var phoneElem;
var messageElem;
var noteElem;


Snap.load("./img/washing-machine.svg", function (washerSvg) {
    washerElem = washerSvg.select("#washer");
    s.append(washerElem);
    //set start point
    washerElem.transform('t7,23s.5,.5');
    washerElem.click( startAllWashes ); //start washer
});

Snap.load("./img/notification.svg", function (noteSvg) {
    noteElem = noteSvg.select("#note");
    s.append(noteElem);
    //set start point
    noteElem.transform('t145,85s.5,.5');
    noteAnimation();

    function noteAnimation() {
      noteElem.stop().animate({
        transform: 't145,85s.45,.45'},
        1000,
        function() {
          noteElem.stop().animate({
            transform: 't145,85s.5,.5'},
            1000,
            function() {
              noteAnimation()
            }
          );
        }
      );
    }
    // noteElem.animate('t145,85s.3,.3', )
});

Snap.load("../img/phone.svg", function (phoneSvg) {
    phoneElem = phoneSvg.select("#phone");
    s.append(phoneElem);
    //set start point
    phoneElem.transform('t160,280s.5,.5');
});

Snap.load("./img/message.svg", function (messageSvg) {
    messageElem = messageSvg.select("#message");
    s.append(messageElem);
    //set start point
    messageElem.transform('t202,382s.49,.49');
    messageElem.attr({ opacity: 0});
});

var startWash = function() {
    // washerElem.unclick( startAllWashes );

    var myFrames = [
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 50, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 75, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 75, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 100, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 100, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 125, easing: mina.easeinout },
      { animation: { transform: 't7,23s.50,.5r3,100,400' }, dur: 125, easing: mina.easeinout },
      { animation: { transform: 't13,23s.50,.5r-3,100,400' }, dur: 150, easing: mina.easeinout },
      { animation: { transform: 't10,23s.5,.5' }, dur: 150, easing: mina.easeinout }
    ];

    //blur
    blurSvg (washerElem);

    //run cycle
    nextFrame( washerElem, myFrames, 0, finish);
};

function finish() {
  unblurSvg(washerElem);

  setTimeout( function() {
      sendPulse(700);
      sendPulse(1400);
      sendPulse(2800);
  }, 1500);

  setTimeout( function() {
      showPhone();

      setTimeout( function() {
          hidePhone();
      }, 3000);

  }, 2100);
}

function hideNote() {
  noteElem.stop().animate({ opacity: 0, transform: 't145,65s.5,.5' }, 500);
}

function blurSvg (theObject) {
  theObject.attr({ filter: theObject.filter(Snap.filter.blur(2,1)) });
}

function unblurSvg (theObject) {
  theObject.attr({ filter: theObject.filter(Snap.filter.blur(0,0)) });
}

var sendPulse = function(time) {
  var circleOne = s.circle(203, 175, 10);
  circleOne.attr({
      fill: "#f7ce52",
      opacity: 0.75
  });

  circleOne.animate({ r: 150, opacity: 0 }, time);
};

var showPhone = function() {
  phoneElem.animate({ transform: 't160,80s.5,.5' }, 800, mina.easeinout );
  messageElem.animate({ transform: 't202,182s.49,.49', opacity: 1 }, 1500, mina.easeinout );
};

var hidePhone = function() {
  phoneElem.animate({ transform: 't160,280s.5,.5' }, 800, mina.easeinout );
  messageElem.animate({ transform: 't202,382s.49,.49', opacity: 0 }, 800, mina.easeinout );
};



//animate an object through an array of frames
function nextFrame ( el, frameArray,  whichFrame, callback ) {
  if( whichFrame >= frameArray.length ) { return callback(); }
  el.animate(
    frameArray[ whichFrame ].animation,
    frameArray[ whichFrame ].dur,
    frameArray[ whichFrame ].easing, 
    nextFrame.bind( null, el, frameArray, whichFrame + 1, callback )
  );
}

// function startWashLoop() {
//   setInterval(function () {
//     startWash();
//   }, 11000);
// }

function startAllWashes () {
  hideNote();
  setTimeout( function() {
    startWash();
    // startWashLoop();
  }, 1000);
}

//**************** END SNAP SVG *******************//


//**************** HOME *******************//

$('.nav-link').click( function(e) {
  e.preventDefault();
  var sectionId = this.href.split(/[#]+/).pop();

  $('html, body').animate({
        scrollTop: $("#" + sectionId ).offset().top
    }, 1000);
});


function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}



}()); // end 'use strict'