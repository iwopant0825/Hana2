import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const goals = [
  { name: '전력 사용량 15% 절감', due: '2025-12', progress: '40%' },
  { name: '데이터센터 재생에너지 50%', due: '2026-06', progress: '25%' },
]

export default function Strategies() {
  return (
    <div>
      <PageHeader title="감축 전략 및 시뮬레이션" subtitle="목표/시나리오/추천" />
      <Card title="감축 목표">
        <SimpleTable columns={[
          { key: 'name', label: '목표' },
          { key: 'due', label: '기한' },
          { key: 'progress', label: '진행률' },
        ]} data={goals} />
      </Card>
    </div>
  )
}


