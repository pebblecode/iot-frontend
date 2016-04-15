(function () { 'use strict';

  var s = Snap("#svg-1");

  var floor = s.rect(0, 310, 400, 100)
  .attr({
    fill: "#ccf3ff"
  });

var washerElem;

 Snap.load("../img/washing-machine.svg", function (washerSvg) {
    washerElem = washerSvg.select("#washer");
    s.append(washerElem);
    washerElem.drag();
    washerElem.hover( hoverover, hoverout );
    //set start point
    washerElem.transform('t50,50s.5,.5')
  });

var hoverover = function() { console.log(washerElem) };
var hoverout = function() { washerElem.transform('r20,200,200'); };








}()); // end 'use strict'