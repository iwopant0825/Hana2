import ReactECharts from 'echarts-for-react'
import styled from 'styled-components'

export function MonthlyArea() {
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)
  const option = {
    tooltip: { trigger: 'axis' },
    grid: { left: 16, right: 8, top: 16, bottom: 8, containLabel: true },
    xAxis: { type: 'category', data: months, axisLine: { show: false }, axisTick: { show: false } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#eee' } }, axisLine: { show: false }, axisTick: { show: false } },
    series: [
      {
        name: '전력',
        type: 'line',
        stack: 'total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: [1200, 1400, 1600, 1800, 2000, 3000, 5000, 2200, 1800, 1600, 1700, 2100],
      },
      {
        name: '연료',
        type: 'line',
        stack: 'total',
        areaStyle: {},
        data: [400, 500, 600, 800, 900, 1600, 3000, 1200, 900, 700, 800, 1000],
      },
      {
        name: '폐기물',
        type: 'line',
        stack: 'total',
        areaStyle: {},
        data: [200, 200, 300, 300, 400, 500, 900, 600, 350, 300, 300, 400],
      },
    ],
    color: ['#BFD6FF', '#7FB3FF', '#C3D1FF'],
  }

  return (
    <Wrap>
      <h4>월별 배출량 (tCO2)</h4>
      <ReactECharts option={option} style={{ height: 260, width: '100%' }} />
    </Wrap>
  )
}

const Wrap = styled.div`
  h4 { margin: 0 0 8px 0; }
`


