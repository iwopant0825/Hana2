import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const cloudRows = [
  { provider: 'AWS', service: 'EC2', account: 'prod', co2: '12.4 t', cost: '$3,120' },
  { provider: 'GCP', service: 'Compute', account: 'ml', co2: '8.1 t', cost: '$1,980' },
  { provider: 'Azure', service: 'VM', account: 'core', co2: '6.3 t', cost: '$1,240' },
]

export default function CloudCarbon() {
  return (
    <div>
      <PageHeader title="클라우드 탄소 관리" subtitle="클라우드별 배출량 상세 분석" />
      <Card title="클라우드별 배출량">
        <SimpleTable columns={[
          { key: 'provider', label: '클라우드' },
          { key: 'service', label: '서비스' },
          { key: 'account', label: '계정' },
          { key: 'co2', label: '배출량' },
          { key: 'cost', label: '비용' },
        ]} data={cloudRows} />
      </Card>
    </div>
  )
}


