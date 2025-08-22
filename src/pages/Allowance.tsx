import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const rows = [
  { year: 2025, allocation: '12,000 t', used: '8,400 t', balance: '3,600 t' },
]

export default function Allowance() {
  return (
    <div>
      <PageHeader title="배출권관리" subtitle="할당량/거래/잔여 관리" />
      <Card title="연도별 배출권 현황">
        <SimpleTable columns={[
          { key: 'year', label: '연도' },
          { key: 'allocation', label: '할당량' },
          { key: 'used', label: '사용량' },
          { key: 'balance', label: '잔여' },
        ]} data={rows} />
      </Card>
    </div>
  )
}


