import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'

export default function Community() {
  return (
    <div>
      <PageHeader title="커뮤니티 및 지원" subtitle="FAQ/가이드/포럼" />
      <Card title="FAQ">
        <ul>
          <li>데이터는 어디에 저장되나요?</li>
          <li>배출 계수를 커스터마이즈할 수 있나요?</li>
        </ul>
      </Card>
    </div>
  )
}


