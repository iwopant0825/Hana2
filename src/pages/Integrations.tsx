import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const connectors = [
  { service: 'Notion', status: 'Connected', key: '****abcd' },
  { service: 'Gmail', status: 'Disconnected', key: '-' },
  { service: 'Google Cloud', status: 'Connected', key: '****z9x8' },
]

export default function Integrations() {
  return (
    <div>
      <PageHeader title="통합 및 연동" subtitle="외부 서비스 연동 설정" />
      <Card title="커넥터 상태">
        <SimpleTable columns={[
          { key: 'service', label: '서비스' },
          { key: 'status', label: '상태' },
          { key: 'key', label: 'API Key' },
        ]} data={connectors} />
      </Card>
    </div>
  )
}


