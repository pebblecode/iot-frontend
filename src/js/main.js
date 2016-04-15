(function () { 'use strict';

  var s = Snap("#svg-1");

  var floor = s.rect(0, 310, 400, 100)
  .attr({
    fill: "#ccf3ff"
  });

  Snap.load("../img/washing-machine.svg", function (f) {
    // f.selectAll("svg");
    var g = f.select("#washer");
    s.append(g);
    g.drag();
  });







}()); // end 'use strict'