window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,  
        title:{
            text: "Step 2"
        },
        axisY: {
            title: "Sum of Sales (€million)",
            valueFormatString: "#0,,.",
            suffix: "mn",
            stripLines: [{
            }]
        },
        data: [{
            type: "line",
            xValueFormatString: "####",
            showInLegend: true,
            dataPoints: [
            
                { x: 2010, y: 13894163 },
                { x: 2011, y: 15710758 },
                { x: 2012, y: 16854413 },
                { x: 2013, y: 16723019 },
                { x: 2014, y: 17972595 },
                { x: 2015, y: 17686790 },
                { x: 2016, y: 17910320 },
                { x: 2017, y: 18448033 },
                { x: 2018, y: 20351620 },
                { x: 2019, y: 21018395 },
                { x: 2020, y: 18952091 },
            
            
            ]
        }]
    });
    chart.render();
    
    }