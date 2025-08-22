import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const sites = [
  { name: '본사', region: 'Seoul', employees: 120 },
  { name: '금촌공장', region: 'Paju', employees: 340 },
]

export default function Enterprise() {
  return (
    <div>
      <PageHeader title="기업관리" subtitle="사업장/조직 관리" />
      <Card title="사업장 목록">
        <SimpleTable columns={[
          { key: 'name', label: '이름' },
          { key: 'region', label: '지역' },
          { key: 'employees', label: '인원' },
        ]} data={sites} />
      </Card>
    </div>
  )
}


