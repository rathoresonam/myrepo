
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart3D);

// Add data
chart.data = [{
  "Industrial sector": "Aerospace & Defence",
  "Sum of Profits (€million)": 387409.19
}, {
  "Industrial sector": "Alternative Energy",
  "Sum of Profits (€million)": 7448.61
}, {
  "Industrial sector": "Automobiles & Parts",
  "Sum of Profits (€million)": 1272000.78
}, {
  "Industrial sector": "Banks",
  "Sum of Profits (€million)": 734744.65
}, {
  "Industrial sector": "Beverages",
  "Sum of Profits (€million)": 270453.22
}, {
  "Industrial sector": "Biotechnology",
  "Sum of Profits (€million)": -192361.37
}, {
  "Industrial sector": "Chemicals",
  "Sum of Profits (€million)": 831481.68
}, {
  "Industrial sector": "Commercial Vehicles & Trucks",
  "Sum of Profits (€million)": 176.12
}, {
  "Industrial sector": "Computer Hardware",
  "Sum of Profits (€million)": 278.72
}, {
  "Industrial sector": "Computer Services",
  "Sum of Profits (€million)": 186.04
}, {
  "Industrial sector": "Construction & Materials",
  "Sum of Profits (€million)": 547897.81
}, {
  "Industrial sector": "Electrical equipment",
  "Sum of Profits (€million)": -6388536.47
}, {
  "Industrial sector": "Electricity",
  "Sum of Profits (€million)": 375453.87
}, {
  "Industrial sector": "Electronic & Electrical equipment",
  "Sum of Profits (€million)": 87839.7
}, {
  "Industrial sector": "Electronic Equipment",
  "Sum of Profits (€million)": 881345
}, {
  "Industrial sector": "Equity Investment Instruments",
  "Sum of Profits (€million)": 501.16
}, {
  "Industrial sector": "Financial Services",
  "Sum of Profits (€million)": 121156.6
}, {
    "Industrial sector": "Fixed Line Telecommunications",
    "Sum of Profits (€million)": 634079.03
  }, {
    "Industrial sector": "Food & Drug Retailers",
    "Sum of Profits (€million)": 34696.08
  }, {
    "Industrial sector": "Food Producers",
    "Sum of Profits (€million)": 520213.44
  }, {
    "Industrial sector": "Forestry & Paper",
    "Sum of Profits (€million)": 44341.52
  }, {
    "Industrial sector": "Gas & Water",
    "Sum of Profits (€million)": 148021.42
  }, {
    "Industrial sector": "General Industrials",
    "Sum of Profits (€million)": 492844.22
  }, {
    "Industrial sector": "General Retailers",
    "Sum of Profits (€million)": 96992.93
  }, {
    "Industrial sector": "Health care equipment & services",
    "Sum of Profits (€million)": 349139.78
  }, {
    "Industrial sector": "Household Goods & Home Construction",
    "Sum of Profits (€million)": 312967.42
  }, {
    "Industrial sector": "Industrial Engineering",
    "Sum of Profits (€million)": 711255.49
  }, {
    "Industrial sector": "Industrial Machinery",
    "Sum of Profits (€million)": 474.68
  }, {
    "Industrial sector": "Industrial Metals & Mining",
    "Sum of Profits (€million)": 204347.11
  }, {
    "Industrial sector": "Industrial Transportation",
    "Sum of Profits (€million)": 47529.18
  }, {
    "Industrial sector": "Internet",
    "Sum of Profits (€million)": 330.98
  }, {
    "Industrial sector": "Leisure goods",
    "Sum of Profits (€million)": 169787.6
  }, {
    "Industrial sector": "Life Insurance",
    "Sum of Profits (€million)": -101948.58
  }, {
    "Industrial sector": "Media",
    "Sum of Profits (€million)": 69243.33
  }, {
    "Industrial sector": "Mining",
    "Sum of Profits (€million)": 348291.4
  }, {
    "Industrial sector": "Mobile Telecommunications",
    "Sum of Profits (€million)": 74370.11
  }, {
    "Industrial sector": "Nonequity Investment Instruments",
    "Sum of Profits (€million)": 381.3
  }, {
    "Industrial sector": "Nonlife Insurance",
    "Sum of Profits (€million)": 854.51
  }, {
    "Industrial sector": "Oil & Gas Producers",
    "Sum of Profits (€million)": 2234612.27
  }, {
    "Industrial sector": "Oil Equipment, Services & Distribution",
    "Sum of Profits (€million)": 189720.33
  }, {
    "Industrial sector": "Other Financials",
    "Sum of Profits (€million)": 5651.47
  }, {
    "Industrial sector": "Personal & Household Goods",
    "Sum of Profits (€million)": 708
  }, {
    "Industrial sector": "Personal Goods",
    "Sum of Profits (€million)": 311169.28
  }, {
    "Industrial sector": "Pharmaceuticals",
    "Sum of Profits (€million)": 1407476.6
  }, {
    "Industrial sector": "Real Estate Investment & Services",
    "Sum of Profits (€million)": 55731.2
  }, {
    "Industrial sector": "Semiconductors",
    "Sum of Profits (€million)": 1333.28
  }, {
    "Industrial sector": "Software & Computer Services",
    "Sum of Profits (€million)": 1381336.74 
  }, {
    "Industrial sector": "Support Services",
    "Sum of Profits (€million)": 125623.88
  }, {
    "Industrial sector": "Technology Hardware & Equipment",
    "Sum of Profits (€million)": 1704326.66
  }, {
    "Industrial sector": "Telecommunications",
    "Sum of Profits (€million)": 73.86
  }, {
    "Industrial sector": "Telecommunications equipment",
    "Sum of Profits (€million)": -78.41
  }, {
    "Industrial sector": "Tobacco",
    "Sum of Profits (€million)": 296930.9
  }, {
    "Industrial sector": "Toys",
    "Sum of Profits (€million)": 105.49
  }, {
    "Industrial sector": "RTravel & Leisure",
    "Sum of Profits (€million)": 162434.04
  }];

// Create axis
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Industrial sector";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.renderer.labels.template.hideOversized = false;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.tooltip.label.rotation = 270;
categoryAxis.tooltip.label.horizontalCenter = "right";
categoryAxis.tooltip.label.verticalCenter = "middle";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Sum of Profits (€million)";
valueAxis.title.fontWeight = "bold";

// Create series
var series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = "Sum of Profits (€million)";
series.dataFields.categoryX = "Industrial sector";
series.name = "Step 3";
series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = am4core.color("#FFFFFF");

columnTemplate.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

columnTemplate.adapter.add("stroke", function(stroke, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineY.strokeOpacity = 0;

}); // end am4core.ready()
