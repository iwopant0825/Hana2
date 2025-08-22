import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const users = [
  { name: '홍길동', role: 'Admin', email: 'hong@example.com' },
  { name: '김영희', role: 'Viewer', email: 'kim@example.com' },
]

export default function Settings() {
  return (
    <div>
      <PageHeader title="설정" subtitle="조직/권한/알림" />
      <Card title="사용자">
        <SimpleTable columns={[
          { key: 'name', label: '이름' },
          { key: 'role', label: '역할' },
          { key: 'email', label: '이메일' },
        ]} data={users} />
      </Card>
    </div>
  )
}


