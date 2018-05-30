/**
 * This file is to run directly on browsers 
 * It assumes FusionCharts has been imported 
 */


 // Rendering Column2d
/*  
 FusionCharts.ready(function(){
  var revenueChart = new FusionCharts({
    "type": "column2d",
    "renderAt": "chartContainer",
    "width": "500",
    "height": "300",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "theme": "fint"
        },
        "data": [{
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
        ]
    }

  });
  revenueChart.render();
 }); */

 // Rendering Map
 FusionCharts.ready(function () { 

    
    var  salesByState = new FusionCharts({
      "type" :  "maps/usa", 
      // If we use type : 'usa', 
      // then we need to set FusionCharts.options.html5ScriptNamePrefix = 'maps/fusioncharts.'
      "renderAt" :  "chartContainer",
      "width" :  "600",
      "height" :  "400",
      "dataFormat" :  "json",
      "dataSource" :  {
        "chart" :  {
            "caption" :  "Annual Sales by State",
            "subcaption" :  "Last year",
            "entityFillHoverColor" :  "#cccccc",
            "numberScaleValue" :  "1,1000,1000",
            "numberScaleUnit" :  "K,M,B",
            "numberPrefix" :  "$",
            "showLabels" :  "1",
            "theme" :  "fint"
        },
        "colorrange" :  {
            "minvalue" :  "0",
            "startlabel" :  "Low",
            "endlabel" :  "High",
            "code" :  "#e44a00",
            "gradient" :  "1",
            "color" :  [{
                    "maxvalue" :  "56580",
                    "displayvalue" :  "Average",
                    "code" :  "#f8bd19"
                },
                {
                    "maxvalue" :  "100000",
                    "code" :  "#6baa01"
                }
            ]
        },
        "data" : [
          {
              "id" :  "HI",
              "value" :  "3189"
          },
          {
              "id" :  "DC",
              "value" :  "2879"
          },
          {
              "id" :  "MD",
              "value" :  "920"
          },
          {
              "id" :  "DE",
              "value" :  "4607"
          },
          {
              "id" :  "RI",
              "value" :  "4890"
          },
          {
              "id" :  "WA",
              "value" :  "34927"
          },
          {
              "id" :  "OR",
              "value" :  "65798"
          },
          {
              "id" :  "CA",
              "value" :  "61861"
          },
          {
              "id" :  "AK",
              "value" :  "58911"
          },
          {
              "id" :  "ID",
              "value" :  "42662"
          },
          {
              "id" :  "NV",
              "value" :  "78041"
          },
          {
              "id" :  "AZ",
              "value" :  "41558"
          },
          {
              "id" :  "MT",
              "value" :  "62942"
          },
          {
              "id" :  "WY",
              "value" :  "78834"
          },
          {
              "id" :  "UT",
              "value" :  "50512"
          },
          {
              "id" :  "CO",
              "value" :  "73026"
          },
          {
              "id" :  "NM",
              "value" :  "78865"
          },
          {
              "id" :  "ND",
              "value" :  "50554"
          },
          {
              "id" :  "SD",
              "value" :  "35922"
          },
          {
              "id" :  "NE",
              "value" :  "43736"
          },
          {
              "id" :  "KS",
              "value" :  "32681"
          },
          {
              "id" :  "OK",
              "value" :  "79038"
          },
          {
              "id" :  "TX",
              "value" :  "75425"
          },
          {
              "id" :  "MN",
              "value" :  "43485"
          },
          {
              "id" :  "IA",
              "value" :  "46515"
          },
          {
              "id" :  "MO",
              "value" :  "63715"
          },
          {
              "id" :  "AR",
              "value" :  "34497"
          },
          {
              "id" :  "LA",
              "value" :  "70706"
          },
          {
              "id" :  "WI",
              "value" :  "42382"
          },
          {
              "id" :  "IL",
              "value" :  "73202"
          },
          {
              "id" :  "KY",
              "value" :  "79118"
          },
          {
              "id" :  "TN",
              "value" :  "44657"
          },
          {
              "id" :  "MS",
              "value" :  "66205"
          },
          {
              "id" :  "AL",
              "value" :  "75873"
          },
          {
              "id" :  "GA",
              "value" :  "76895"
          },
          {
              "id" :  "MI",
              "value" :  "67695"
          },
          {
              "id" :  "IN",
              "value" :  "33592"
          },
          {
              "id" :  "OH",
              "value" :  "32960"
          },
          {
              "id" :  "PA",
              "value" :  "54346"
          },
          {
              "id" :  "NY",
              "value" :  "42828"
          },
          {
              "id" :  "VT",
              "value" :  "77411"
          },
          {
              "id" :  "NH",
              "value" :  "51403"
          },
          {
              "id" :  "ME",
              "value" :  "64636"
          },
          {
              "id" :  "MA",
              "value" :  "51767"
          },
          {
              "id" :  "CT",
              "value" :  "57353"
          },
          {
              "id" :  "NJ",
              "value" :  "80788"
          },
          {
              "id" :  "WV",
              "value" :  "95890"
          },
          {
              "id" :  "VA",
              "value" :  "83140"
          },
          {
              "id" :  "NC",
              "value" :  "97344"
          },
          {
              "id" :  "SC",
              "value" :  "88234"
          },
          {
              "id" :  "FL",
              "value" :  "88234"
          }
        ]
      }
    });
    salesByState.render();
  });