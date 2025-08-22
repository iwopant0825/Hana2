import ReactECharts from 'echarts-for-react'
import styled from 'styled-components'

export function FuelArea() {
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)
  const option = {
    tooltip: { trigger: 'axis' },
    grid: { left: 16, right: 8, top: 16, bottom: 8, containLabel: true },
    xAxis: { type: 'category', data: months, axisLine: { show: false }, axisTick: { show: false } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#eee' } }, axisLine: { show: false }, axisTick: { show: false } },
    series: [
      { name: '국내무연탄', type: 'line', stack: 'fuel', areaStyle: {}, data: [300, 400, 500, 600, 800, 2000, 5000, 1500, 600, 500, 500, 600] },
      { name: '도시가스', type: 'line', stack: 'fuel', areaStyle: {}, data: [200, 250, 300, 350, 400, 900, 2000, 900, 500, 400, 420, 450] },
      { name: '기타', type: 'line', stack: 'fuel', areaStyle: {}, data: [100, 120, 150, 200, 250, 500, 900, 350, 250, 220, 230, 240] },
    ],
    color: ['#D6FFF2', '#9DEEDC', '#5AD1BC'],
  }

  return (
    <Wrap>
      <h4>월별 연료 배출</h4>
      <ReactECharts option={option} style={{ height: 260, width: '100%' }} />
    </Wrap>
  )
}

const Wrap = styled.div`
  h4 { margin: 0 0 8px 0; }
`


