import React, {Component} from 'react'
import echarts from "echarts"

class DashBoard extends Component{
    render(){
        return(
            <div className="aabb" ref={div=> this.div=div} style={{height: 400}}>
                
            </div>
        )
    }
    createEcharts = ()=>{
      // console.log (this.div)
      let myChart = echarts.init(this.div)

      var option = {
          title: {
              text: '年度报表统计'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [50, 200, 360, 100, 100, 200]
          }]
      }

      myChart.setOption(option)
    }
    componentDidMount() {
      this.createEcharts()
    }
}

export default DashBoard