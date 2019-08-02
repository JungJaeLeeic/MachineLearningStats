var traces = [{
  x: [],
  y: [],
  mode: 'markers',
  type: 'scatter',
  name: 'data'
}];

traces.push({
  x: [],
  y: [],
  mode: 'markers',
  type: 'scatter',
  name: 'data'
});

traces.push({
  x: [],
  y: [],
  mode: 'markers',
  type: 'scatter',
  name: 'data'
});

traces.push({
  x: [],
  y: [],
  mode: 'markers',
  type: 'scatter',
  name: 'data'
});

var datasetx = [];
var datasety = [];
var setx = [];


var layout = {
  xaxis: {range: [-20, 20]},
  yaxis: {range: [-20, 20]},

  title:'Click on the plot to add more data points'
};

var myPlot = document.getElementById('myPlot')
Plotly.newPlot('myPlot', traces, layout, {hovermode: 'closest'});

Number.prototype.between = function(min, max) {
  return this >= min && this <= max;
};


Plotly.d3.select(".plotly").on('click', function(d, i) {
  var e = Plotly.d3.event;
  var bg = document.getElementsByClassName('nsewdrag drag')[0];
  var x = ((e.layerX - bg.attributes['x'].value + 4) / (bg.attributes['width'].value)) * (myPlot.layout.xaxis.range[1] - myPlot.layout.xaxis.range[0]) + myPlot.layout.xaxis.range[0];
  var y = ((e.layerY - bg.attributes['y'].value + 4) / (bg.attributes['height'].value)) * (myPlot.layout.yaxis.range[0] - myPlot.layout.yaxis.range[1]) + myPlot.layout.yaxis.range[1]
  if (x.between(myPlot.layout.xaxis.range[0], myPlot.layout.xaxis.range[1]) &&
    y.between(myPlot.layout.yaxis.range[0], myPlot.layout.yaxis.range[1])) {
    Plotly.extendTraces(myPlot, {
      x: [
        [x]
      ],
      y: [
        [y]
      ]
    }, [3]);
  }
  datasetx.push([1,x])
  setx.push(x)
  datasety.push(y)


});



function transpose(a) {

  // Calculate the width and height of the Array
  var w = a.length || 0;
  var h = a[0] instanceof Array ? a[0].length : 0;

  // In case it is a zero matrix, no transpose routine needed.
  if(h === 0 || w === 0) { return []; }

  /**
   * @var {Number} i Counter
   * @var {Number} j Counter
   * @var {Array} t Transposed data is stored in this array.
   */
  var i, j, t = [];

  // Loop through every item in the outer array (height)
  for(i=0; i<h; i++) {

    // Insert a new row (array)
    t[i] = [];

    // Loop through every item per item in outer array (width)
    for(j=0; j<w; j++) {

      // Save transposed data.
      t[i][j] = a[j][i];
    }
  }

  return t;
}


function mle() {

    first = math.inv(math.multiply(transpose(datasetx), datasetx));
    second = math.multiply(first, transpose(datasetx));
    final = math.multiply(second, datasety)

    var newtrace = [{
    x: [-20,20],
    y: [final[0] + (final[1])*(-20), final[0] + (final[1])*(20)],
    mode: 'lines',
    type: 'scatter',
    name: 'LR'
    }];

    Plotly.plot('myPlot',newtrace);

    datasetx = [];
    datasety = [];
}



function deleteTrace(){

    var traces = [{
    x: [],
    y: [],
    mode: 'markers',
    type: 'scatter',
    name: 'data'
    }];

    traces.push({
      x: [],
      y: [],
      mode: 'markers',
      type: 'scatter',
      name: 'data'
    });

    traces.push({
      x: [],
      y: [],
      mode: 'markers',
      type: 'scatter',
      name: 'data'
    });

    traces.push({
      x: [],
      y: [],
      mode: 'markers',
      type: 'scatter',
      name: 'data'
    });

    var datasetx = [];
    var datasety = [];
    var setx = [];


    var layout = {
      xaxis: {range: [-20, 20]},
      yaxis: {range: [-20, 20]},
      title:'Click on the plot to add more data points'
    };

    var myPlot = document.getElementById('myPlot')
    Plotly.newPlot('myPlot', traces, layout, {hovermode: 'closest'});

    Number.prototype.between = function(min, max) {
      return this >= min && this <= max;
    };

};
