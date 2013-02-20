flag = 1;

function load () {
  Sandman.doFirst ("gesture");
  var canvas = document.getElementById ("gesture");
  var context = canvas.getContext ('2d');
  context.fillStyle = 'white';
  context.font = "bold 40pt Calibri";
  context.fillText ('Welcome to Sandman.js, a javascript gesture library',60,240);
  context.fillText('with features superior to other libraries.',60,300);
  context.fillText ('To begin with draw a simple "S".' , 60, 400);
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
  if (index === 1) {
    var canvas = document.getElementById("gesture");
    var context = canvas.getContext ('2d');
    context.clearRect (0,0,1500,800);
    context.fillStyle = 'white';
    context.font = "bold 40pt Calibri";
    context.fillText ('Sandman.js can recognize unistroke as well as',60,240);
    context.fillText (' multistroke gestures.',60,300);
    context.fillText ('Draw "A" using multistroke gestures.',60,400);
    var tab = document.getElementById ('tab1');
    tab.style.backgroundColor = 'transparent';
    var tab = document.getElementById ('tab2');
    tab.style.backgroundColor = '#00FFFF';

  }
  if (index === 2) {
    var canvas = document.getElementById("gesture");
    var context = canvas.getContext ('2d');
    context.clearRect (0,0,1500,800);
    context.fillStyle = 'white';
    context.font = "bold 40pt Calibri";
    context.fillText ('Sandman.js can recognize gestures independent',60,240);
    context.fillText ('of the way they are drawn.',60,300);
    context.fillText ('Draw "L" using single stroke',60,400);
    var tab = document.getElementById ('tab2');
    tab.style.backgroundColor = 'transparent';
    var tab = document.getElementById ('tab3');
    tab.style.backgroundColor = '#00FFFF';
  }
  if (index === 3) {
    var canvas = document.getElementById("gesture");
    var context = canvas.getContext ('2d');
    context.clearRect (0,0,1500,800);
    context.fillStyle = 'white';
    context.font = "bold 40pt Calibri";
/*    context.fillText ('Sandman.js can recognize unistroke as well as',60,240);
    context.fillText (' multistroke gestures.',60,300);*/
    context.fillText ('Now draw "L" in other way around',60,400);
    var tab = document.getElementById ('tab3');
    tab.style.backgroundColor = 'transparent';
    var tab = document.getElementById ('tab4');
    tab.style.backgroundColor = '#00FFFF';
  }
  if (index === 4) {
    var canvas = document.getElementById("gesture");
    var context = canvas.getContext ('2d');
    context.clearRect (0,0,1500,800);
    context.fillStyle = 'white';
    context.font = "bold 40pt Calibri";
    context.fillText ('Sandman.js also provides customized gestures.',60,240);
    context.fillText ('"?" my customized gesture',60,400);
    var tab = document.getElementById ('tab4');
    tab.style.backgroundColor = 'transparent';
    var tab = document.getElementById ('tab5');
    tab.style.backgroundColor = '#00FFFF';

  }
  if (index === 5) {
    var canvas = document.getElementById("gesture");
    var context = canvas.getContext ('2d');
    context.clearRect (0,0,1500,800);
    context.fillStyle = 'white';
    context.font = "bold 40pt Calibri";
    context.fillText ('You can also customize your own gestures.',60,240);
    context.fillText ('How?',60,400);
    var tab = document.getElementById ('tab5');
    tab.style.backgroundColor = 'transparent';
    var tab = document.getElementById ('tab6');
    tab.style.backgroundColor = '#00FFFF';

  }
}

function S () {

  displayFeatures (1);
}

function A () {
  displayFeatures (2);
}
function L () {
  if (flag === 1) {
    alert ("hi");
    flag = 0;
    displayFeatures (3);
  }
  else {
    flag = 1;
    displayFeatures (4);
  }

}

  function Q () {
    displayFeatures (5);
  }
