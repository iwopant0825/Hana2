import styled from 'styled-components'
import { FiSun, FiBell } from 'react-icons/fi'

export function Header() {
  return (
    <Bar>
      <Left>
        <Brand>
          <img src="/Logo.svg" alt="Re:Stlye logo" />
        </Brand>
        <Separator />
        <Breadcrumb>
          <span>Home</span>
          <span>/</span>
          <strong>대시보드</strong>
        </Breadcrumb>
      </Left>
      <Right>
        <IconButton aria-label="theme">
          <FiSun />
        </IconButton>
        <IconButton aria-label="notice">
          <FiBell />
        </IconButton>
        <Avatar>HA</Avatar>
      </Right>
    </Bar>
  )
}

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.layout.headerHeight}px;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Brand = styled.div`
  display: flex; align-items: center; gap: 8px;
  img { width: 70px; height: 70px; display: block; }
`

// brand text removed

const Separator = styled.i`
  width: 1px; height: 16px; background: ${({ theme }) => theme.color.border};
  margin: 0 8px 0 4px; display: inline-block;
`

const Breadcrumb = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.color.mutedText};
  font-size: 14px;
  strong { color: ${({ theme }) => theme.color.text}; }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.mutedText};
  cursor: pointer;
`

const Avatar = styled.div`
  width: 32px; height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.primary};
  color: white;
  display: grid; place-items: center;
  font-weight: 700;
  margin-left: 4px;
`


