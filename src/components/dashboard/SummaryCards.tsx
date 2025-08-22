import styled from 'styled-components'

export function SummaryCards() {
  return (
    <Wrap>
      <KPI>
        <Label>총 배출량</Label>
        <Value>94,290.02 <small>tCO2eq</small></Value>
        <Sub>할당량 800,000대비 <span className="down">12.89% 배출 효율</span></Sub>
      </KPI>

      <Quick>
        <h4>감축 우수 사업장</h4>
        <ol>
          <li>1등 금촌공장</li>
          <li>2등 대구공장</li>
          <li>3등 대전공장</li>
          <li>4등 본사</li>
        </ol>
      </Quick>

      <Quick>
        <h4>우수 데이터 사업장</h4>
        <ol>
          <li>1등 시아 사업장 80점</li>
          <li>2등 지사 사업장 75점</li>
          <li>3등 기타 사업장 60점</li>
          <li>4등 가나 사업장 50점</li>
        </ol>
      </Quick>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 16px;
  @media (max-width: 1200px) { grid-template-columns: 1fr; }
`

const Card = styled.section`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.layout.radius}px;
  padding: 14px;
`

const KPI = styled(Card)`
  display: grid;
  align-content: center;
  gap: 8px;
  min-height: 160px;
  h1, .value { font-variant-numeric: tabular-nums; }
`

const Label = styled.div`
  color: ${({ theme }) => theme.color.mutedText};
  font-weight: 600;
`

const Value = styled.div`
  font-size: 42px; font-weight: 800; letter-spacing: 0.2px;
  small { font-size: 16px; font-weight: 600; color: ${({ theme }) => theme.color.mutedText}; }
`

const Sub = styled.div`
  color: ${({ theme }) => theme.color.mutedText};
  .down { color: ${({ theme }) => theme.color.positive}; font-weight: 700; }
`

const Quick = styled(Card)`
  display: grid; align-content: center;
  h4 { margin: 0 0 8px 0; }
  ol { margin: 0; padding-left: 16px; display: grid; gap: 6px; }
`


