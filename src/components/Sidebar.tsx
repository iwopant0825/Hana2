import styled from 'styled-components'
import { FiHome, FiSettings, FiFolder, FiGrid, FiCpu, FiCloud, FiZap, FiBookOpen, FiUsers, FiLink } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

const menus = [
  { icon: <FiHome />, label: '대시보드', to: '/dashboard' },
  { icon: <FiGrid />, label: '활동데이터', to: '/activity' },
  { icon: <FiZap />, label: '전략', to: '/strategies' },
  { icon: <FiFolder />, label: '배출권관리', to: '/allowance' },
  { icon: <FiFolder />, label: '보고', to: '/reports' },
  { icon: <FiUsers />, label: '기업관리', to: '/enterprise' },
  { icon: <FiCloud />, label: '클라우드 탄소', to: '/cloud' },
  { icon: <FiCpu />, label: '코드 탄소', to: '/code' },
  { icon: <FiGrid />, label: '탄소 회계', to: '/accounting' },
  { icon: <FiLink />, label: '연동', to: '/integrations' },
  { icon: <FiBookOpen />, label: 'API 문서', to: '/api' },
  { icon: <FiUsers />, label: '커뮤니티', to: '/community' },
  { icon: <FiSettings />, label: '설정', to: '/settings' },
]

export function Sidebar() {
  const { pathname } = useLocation()
  return (
    <Wrap>
      <BrandBar>
        <BrandIcon>영</BrandIcon>
        <BrandText>Re:Stlye</BrandText>
        <ComposeBtn title="새로 만들기">✎</ComposeBtn>
      </BrandBar>
      <Nav>
        {menus.map((m) => {
          const active = pathname.startsWith(m.to)
          return (
            <NavItem as={Link} to={m.to} key={m.label} data-active={active ? 'true' : undefined}>
              <i>{m.icon}</i>
              <span>{m.label}</span>
            </NavItem>
          )
        })}
      </Nav>
    </Wrap>
  )
}

const Wrap = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 56px 1fr;
`

const BrandBar = styled.div`
  display: grid; grid-template-columns: 28px 1fr 24px; align-items: center;
  column-gap: 8px; padding: 0 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`

const BrandIcon = styled.div`
  width: 24px; height: 24px; border-radius: 6px; background: ${({ theme }) => theme.color.border};
  display: grid; place-items: center; font-weight: 700; color: ${({ theme }) => theme.color.mutedText};
`

const BrandText = styled.div`
  font-weight: 700; color: ${({ theme }) => theme.color.text};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`

const ComposeBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border}; background: ${({ theme }) => theme.color.surface};
  border-radius: 6px; width: 24px; height: 24px; color: ${({ theme }) => theme.color.mutedText};
  cursor: pointer;
`

const Nav = styled.nav`
  padding: 10px 8px;
  display: grid; gap: 4px;
  align-content: start;
  grid-auto-rows: min-content;
`

const NavItem = styled.a`
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: center;
  gap: 8px; padding: 8px 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.mutedText};
  cursor: pointer;
  &[data-active='true'] {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.border};
  }
  &:hover { background: ${({ theme }) => theme.color.background}; color: ${({ theme }) => theme.color.text}; }
  & i { display: grid; place-items: center; }
`


