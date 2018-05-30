import FusionCharts from "fusioncharts";
import Pie2d from 'fusioncharts/viz/pie2d';
import IgnoreCaseExt from 'fusioncharts/features/ignore-case-ext';
FusionCharts.addDep(Pie2d);
FusionCharts.addDep(IgnoreCaseExt);
var dataSource = {
  "chart": {
      "caption": "Split of revenue by product categories",
      "subcaption": "Last year",
      "numberprefix": "$",
      "showpercentintooltip": "0",
      "decimals": "1",
      "usedataplotcolorforlabels": "1",
      "theme": "fint",
  },
  "data": [
      {
          "label": "Food",
          "value": "285040"
      },
      {
          "label": "Apparels",
          "value": "146330"
      },
      {
          "label": "Electronics",
          "value": "105070"
      },
      {
          "label": "Household",
          "value": "49100"
      }
  ]
}

function render(){
    var chart = new FusionCharts({
        type : 'pie2d',
        width: '600',
        height: '400',
        renderAt:'chartContainer',
        dataFormat:'json',
        dataSource:dataSource        
    });
    chart.render();
}


export default {
    render : render
}
