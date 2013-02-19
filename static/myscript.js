function load () {
  Sandman.doFirst ("gesture");
  var canvas = document.getElementById ("gesture");
  var context = canvas.getContext ('2d');
  context.fillStyle = 'white';
  context.font = "bold 400pt Calibri";
  context.fillText ('x',500,500);
}

/*$ (function () {
  $ ('button#next').bind ('click',function () {
  $.getJSON ('/feature',{t : 1}, function (data) {
  var canvas = document.getElementById("gesture");
  var context = canvas.getContext ('2d');
  context.fillStyle = 'white';
  context.font = "bold 400pt Calibri";
  context.fillText ('y',500,500);

  });
  });
  });*/

function displayFeatures (index) {
  if (index === 1)
    var canvas = document.getElementById("gesture");
  var context = canvas.getContext ('2d');
  context.clearRect (0,0,1200,800);
  context.fillStyle = 'white';
  context.font = "bold 400pt Calibri";
  context.fillText ('y',500,500);

}

function L () {
  displayFeatures (1);
}
