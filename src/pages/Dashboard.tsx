import styled from 'styled-components'
import { SummaryCards } from '@/components/dashboard/SummaryCards'
import { ScopeDonut } from '@/charts/ScopeDonut'
import { MonthlyArea } from '@/charts/MonthlyArea'
import { FuelArea } from '@/charts/FuelArea'
import { SankeyFlow } from '@/charts/SankeyFlow'

export default function Dashboard() {
  return (
    <Grid>
      <Header>
        <Title>하나루프 대시보드</Title>
        <Meta>기준 연도: 2022년</Meta>
      </Header>

      <Row>
        <SummaryCards />
      </Row>

      <Row>
        <Card>
          <ScopeDonut />
        </Card>
        <Card>
          <SankeyFlow />
        </Card>
      </Row>

      <Row>
        <Card>
          <MonthlyArea />
        </Card>
        <Card>
          <FuelArea />
        </Card>
      </Row>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.layout.gutter * 3}px;
`

const Header = styled.div`
  display: flex; align-items: baseline; gap: 12px;
`

const Title = styled.h2`
  margin: 0;
`

const Meta = styled.span`
  color: ${({ theme }) => theme.color.mutedText};
  font-size: 14px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.layout.gutter * 3}px;
  align-items: stretch;
  @media (max-width: 1200px) { grid-template-columns: 1fr; }
`

const Card = styled.section`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.layout.radius}px;
  padding: ${({ theme }) => theme.layout.gutter * 2}px;
  display: flex; flex-direction: column;
`


