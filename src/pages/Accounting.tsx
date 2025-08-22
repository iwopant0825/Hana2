import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const factors = [
  { name: '전력(대한민국 평균)', unit: 'kgCO2/kWh', value: 0.459 },
  { name: '도시가스', unit: 'kgCO2/Nm3', value: 2.03 },
]

export default function Accounting() {
  return (
    <div>
      <PageHeader title="탄소 회계 및 보고서" subtitle="Scope 1/2/3 및 규제 보고" />
      <Card title="배출 계수">
        <SimpleTable columns={[
          { key: 'name', label: '항목' },
          { key: 'unit', label: '단위' },
          { key: 'value', label: '값' },
        ]} data={factors} />
      </Card>
    </div>
  )
}


