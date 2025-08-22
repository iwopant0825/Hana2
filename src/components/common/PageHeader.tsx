import styled from 'styled-components'

type Props = { title: string; subtitle?: string }

export function PageHeader({ title, subtitle }: Props) {
  return (
    <Wrap>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-bottom: 8px;
  h2 { margin: 0; }
  p { margin: 4px 0 0 0; color: ${({ theme }) => theme.color.mutedText}; }
`


