import styled from 'styled-components'
import type { PropsWithChildren, ReactNode } from 'react'

type CardProps = PropsWithChildren<{
  title?: string
  subtitle?: string
  extra?: ReactNode
}>

export function Card({ title, subtitle, extra, children }: CardProps) {
  return (
    <Wrap>
      {(title || extra) && (
        <Header>
          <div>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </div>
          {extra && <Actions>{extra}</Actions>}
        </Header>
      )}
      <Body>{children}</Body>
    </Wrap>
  )
}

const Wrap = styled.section`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.layout.radius}px;
  padding: ${({ theme }) => theme.layout.gutter * 2}px;
  display: flex; flex-direction: column; gap: 8px;
`

const Header = styled.div`
  display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
`

const Title = styled.h3`
  margin: 0; font-size: 18px;
`

const Subtitle = styled.div`
  color: ${({ theme }) => theme.color.mutedText}; font-size: 13px; margin-top: 4px;
`

const Actions = styled.div`
  display: flex; align-items: center; gap: 8px;
`

const Body = styled.div``


