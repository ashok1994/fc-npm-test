import FusionCharts from 'fusioncharts/core';
import Column2d from 'fusioncharts/viz/column2d';
import IgnoreCaseExt from 'fusioncharts/features/ignore-case-ext';

FusionCharts.addDep(Column2d);
FusionCharts.addDep(IgnoreCaseExt);

var dataSource = {
  "chart": {
      "caption": "Monthly revenue for last year",
      "subCaption": "Harry's SuperMart",
      "xAxisName": "Month",
      "yAxisName": "Revenues (In USD)",
      "numberPrefix": "$",
      "paletteColors": "#0075c2",
      "bgColor": "#ffffff",
      "borderAlpha": "20",
      "canvasBorderAlpha": "0",
      "usePlotGradientColor": "0",
      "plotBorderAlpha": "10",
      "placevaluesInside": "1",
      "rotatevalues": "1",
      "valueFontColor": "#ffffff",
      "showXAxisLine": "1",
      "xAxisLineColor": "#999999",
      "divlineColor": "#999999",
      "divLineIsDashed": "1",
      "showAlternateHGridColor": "0",
      "subcaptionFontBold": "0",
      "subcaptionFontSize": "14"
  },
  "data": [
      {
          "label": "Jan",
          "value": "420000"
      },
      {
          "label": "Feb",
          "value": "810000"
      },
      {
          "label": "Mar",
          "value": "720000"
      },
      {
          "label": "Apr",
          "value": "550000"
      },
      {
          "label": "May",
          "value": "910000"
      },
      {
          "label": "Jun",
          "value": "510000"
      },
      {
          "label": "Jul",
          "value": "680000"
      },
      {
          "label": "Aug",
          "value": "620000"
      },
      {
          "label": "Sep",
          "value": "610000"
      },
      {
          "label": "Oct",
          "value": "490000"
      },
      {
          "label": "Nov",
          "value": "900000"
      },
      {
          "label": "Dec",
          "value": "730000"
      }
  ],
  "trendlines": [
      {
          "line": [
              {
                  "startvalue": "700000",
                  "color": "#1aaf5d",
                  "valueOnRight": "1",
                  "displayvalue": "Monthly Target"
              }
          ]
      }
  ]
};


function render(){
  FusionCharts.ready(() => {
    var chart = new FusionCharts({
      type: 'column2d',
      width: '600',
      height: '400',
      renderAt: 'chartContainer',
      dataFormat: 'json',
      dataSource : dataSource
    })
      chart.render();
    
  });
}

export default {
  render
}