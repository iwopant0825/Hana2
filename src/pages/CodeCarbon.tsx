import { PageHeader } from '@/components/common/PageHeader'
import { Card } from '@/components/common/Card'
import { SimpleTable } from '@/components/common/SimpleTable'

const runs = [
  { project: 'etl-pipeline.py', duration: '32m', energy: '1.2 kWh', co2: '0.42 kg' },
  { project: 'train-nlp.py', duration: '2h 10m', energy: '6.4 kWh', co2: '2.1 kg' },
]

export default function CodeCarbon() {
  return (
    <div>
      <PageHeader title="소프트웨어/코드 탄소 최적화" subtitle="CodeCarbon/Kepler/Carbon Aware SDK" />
      <Card title="실행 내역">
        <SimpleTable columns={[
          { key: 'project', label: '프로젝트' },
          { key: 'duration', label: '소요시간' },
          { key: 'energy', label: '에너지' },
          { key: 'co2', label: 'CO2' },
        ]} data={runs} />
      </Card>
    </div>
  )
}


