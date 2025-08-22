import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const rows = [
  { date: '2025-08-01', category: '전력', amount: '12,340 kWh', co2: '5.66 t' },
  { date: '2025-08-02', category: '도시가스', amount: '2,100 Nm3', co2: '4.26 t' },
]

export default function Activity() {
  return (
    <div>
      <PageHeader title="활동데이터" subtitle="원천 활동 데이터 수집/관리" />
      <Card title="최근 수집 데이터">
        <SimpleTable columns={[
          { key: 'date', label: '일자' },
          { key: 'category', label: '구분' },
          { key: 'amount', label: '활동량' },
          { key: 'co2', label: 'CO2' },
        ]} data={rows} />
      </Card>
    </div>
  )
}


