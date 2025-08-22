import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'

export default function Reports() {
  return (
    <div>
      <PageHeader title="보고" subtitle="ESG/CBAM/PCF 보고서" />
      <Card title="보고서 템플릿">
        <ul>
          <li>ESG 보고서 (초안)</li>
          <li>CBAM 제출서 파일</li>
          <li>제품 탄소발자국(PCF) 보고서</li>
        </ul>
      </Card>
    </div>
  )
}


