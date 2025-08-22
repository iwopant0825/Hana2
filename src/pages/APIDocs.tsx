import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'

export default function APIDocs() {
  return (
    <div>
      <PageHeader title="API 문서" subtitle="REST API 안내" />
      <Card title="시작하기">
        <code>GET /api/v1/emissions</code>
        <p>Bearer API 키로 인증합니다. 샘플 응답은 개발 서버에서 확인하세요.</p>
      </Card>
    </div>
  )
}


