import ReactECharts from 'echarts-for-react'
import styled from 'styled-components'

export function ScopeDonut() {
  const option = {
    tooltip: { trigger: 'item' },
    legend: { right: 8, top: 'middle', orient: 'vertical' },
    series: [
      {
        type: 'pie',
        radius: ['60%', '85%'],
        center: ['32%', '52%'],
        itemStyle: { borderColor: '#fff', borderWidth: 2 },
        label: { show: false },
        data: [
          { value: 63000, name: '스코프1' },
          { value: 24000, name: '스코프2' },
          { value: 7000, name: '스코프3' },
        ],
      },
    ],
    color: ['#BFD6FF', '#7FB3FF', '#5A84C8'],
  }

  return (
    <Wrap>
      <h4>스코프 배출 비중</h4>
      <ReactECharts option={option} style={{ height: 220 }} />
    </Wrap>
  )
}

const Wrap = styled.div`
  h4 { margin: 0 0 8px 0; }
`


