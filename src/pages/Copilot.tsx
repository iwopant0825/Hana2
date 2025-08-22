import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'

export default function Copilot() {
  return (
    <div>
      <PageHeader title="AI 코파일럿/카본 버디" subtitle="규제 분석, 가이드, Q&A" />
      <Card title="예시 질문">
        <ul>
          <li>CBAM 최신 개정안의 주요 영향은?</li>
          <li>지난 달 배출량 증가의 원인과 개선책은?</li>
        </ul>
      </Card>
    </div>
  )
}


