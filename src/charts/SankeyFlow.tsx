import ReactECharts from 'echarts-for-react'
import styled from 'styled-components'

export function SankeyFlow() {
  const option = {
    tooltip: { trigger: 'item' },
    series: [
      {
        type: 'sankey',
        top: 4,
        left: 8,
        right: 8,
        bottom: 8,
        emphasis: { focus: 'adjacency' },
        data: [
          { name: '도시가스' },
          { name: '국내무연탄' },
          { name: '가음영업소' },
          { name: '금촌공장' },
          { name: '대구공장' },
          { name: '대전공장' },
          { name: '본사' },
          { name: '총 배출량' },
        ],
        links: [
          { source: '도시가스', target: '가음영업소', value: 12 },
          { source: '도시가스', target: '금촌공장', value: 8 },
          { source: '도시가스', target: '대구공장', value: 6 },
          { source: '도시가스', target: '본사', value: 5 },
          { source: '국내무연탄', target: '대전공장', value: 7 },
          { source: '국내무연탄', target: '금촌공장', value: 9 },
          { source: '가음영업소', target: '총 배출량', value: 12 },
          { source: '금촌공장', target: '총 배출량', value: 17 },
          { source: '대구공장', target: '총 배출량', value: 6 },
          { source: '대전공장', target: '총 배출량', value: 7 },
          { source: '본사', target: '총 배출량', value: 5 },
        ],
        lineStyle: { color: 'gradient', curveness: 0.5 },
        label: { color: '#334155' },
        itemStyle: { borderWidth: 0 },
      },
    ],
    color: ['#9DEEDC', '#AECBFA', '#BFD6FF', '#C3D1FF', '#E5E7EB'],
  }

  return (
    <Wrap>
      <h4>배출 흐름</h4>
      <ReactECharts option={option} style={{ height: 260 }} />
    </Wrap>
  )
}

const Wrap = styled.div`
  h4 { margin: 0 0 8px 0; }
`


