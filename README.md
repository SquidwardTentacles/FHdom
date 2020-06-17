# tools

<template>
  <div class="bannerf flexbox between">
    <div class="left">
      <div class="zhu"
           id="zhu"></div>
      <div class="zhu"
           id="lineq"></div>
    </div>
    <div class="center">
      <div>
        <div class="map"
             id="map"></div>
      </div>
    </div>
    <div class="right">right</div>
  </div>
</template>
<script>

import mapMixin from '../../assets/mixin/map'
export default {
  mixins: [mapMixin],
  data () {
    return {}
  },
  mounted () {
    this.initialization()
    this.lineWatch()

  },
  methods: {
    // 柱形图
    initialization () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("zhu"))
      // 绘制图表
      let dataArr = ["衬衫", "羊毛", "雪纺", "裤子"]
      myChart.setOption({
        // 定义legend图标颜色
        color: ["#f24e06", "#f24e06", "#e2ff1f", "#069dee"],
        // legend中的data需要与series中的name一致 才能显示标题
        legend: {
          data: dataArr,
          bottom: 20,
          left: 'left',
          // legend排列方向
          orient: "vertical",
          textStyle: {
            fontSize: 10
          },
          show: true,
          itemWidth: 10,
          itemHeight: 8
        },
        grid: {
          left: "30%",
          bottom: 20,
          show: false
        },
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子"],
          type: "category",
          name: "类别",
          nameLocation: "end",
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#718faf'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#718faf'
            }
          },
          name: "价格"
        },
        series: [
          {
            name: dataArr[0],
            type: "bar",
            data: [5, 20, 36, 10],
            barWidth: "40%",
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = ["#f24e06", "#f24e06", "#e2ff1f", "#069dee"]
                  return colorList[params.dataIndex]
                }
              }
            }
          },
          {
            name: "羊毛",
            type: "bar"
          },
          {
            name: "雪纺",
            type: "bar"
          },
          {
            name: "裤子",
            type: "bar"
          }
        ]
      })
      window.addEventListener("resize", function () {
        myChart.resize()
      })
    },
    // 折线图
    lineWatch () {
      var myChart = this.$echarts.init(document.getElementById('lineq'))

      window.addEventListener("resize", function () {
        myChart.resize()
      })
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        grid: {
          left: '20%'
        },
        legend: {
          left: '20'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#38305b'
                }
              }
            }
          },
          {
            data: [543, 432, 201, 534, 1290, 1130, 1920],
            type: 'line',
            color: '#1d586f',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#1d4c74'
                }
              }
            },
            smooth: true
          },
        ]
      }
      )
    },

  }
};
</script>
<style lang="less" scope="d">
.bannerf {
  // background-color: #0c1b44;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  .left,
  .right {
    height: 100%;
    width: 20%;
  }
  .left {
    .zhu {
      width: 6rem;
      height: 6.25rem;
    }
  }
  .center {
    height: 100%;
    flex: 1;
    .map {
      width: 900px;
      height: 500px;
    }
  }
}
</style>
