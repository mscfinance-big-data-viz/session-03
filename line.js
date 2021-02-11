var stock1= {
    x: [2017, 2018, 2019, 2020],
    y: [5, 7, 12, -3],
    mode: 'lines+markers',
    name: 'Company A',
};

var stock2= {
    x: [2017, 2018, 2019, 2020],
    y: [4, -1, 7, 2],
    mode: 'lines+markers',
    name: 'Company B',
};

var data = [stock1, stock2];

var layout={
    title: 'Compared performances',
    xaxis: {
        tickmode: 'array',
        tickvals: [2017, 2018, 2019, 2020]}
};

Plotly.newPlot('myViz', data, layout)