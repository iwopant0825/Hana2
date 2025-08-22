import styled from 'styled-components'
import type { PropsWithChildren } from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <Root>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Body>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <Content>
          <div className="container">
            {children}
          </div>
        </Content>
      </Body>
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  grid-template-rows: ${({ theme }) => theme.layout.headerHeight}px 1fr;
  height: 100%;
`

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.color.surface};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding-left: calc(${({ theme }) => theme.layout.sidebarWidth}px + 4px);
  padding-right: 40px;
`

const Body = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.layout.sidebarWidth}px 1fr;
  height: calc(100vh - ${({ theme }) => theme.layout.headerHeight}px);
`

const SidebarWrapper = styled.aside`
  background: ${({ theme }) => theme.color.surface};
  border-right: 1px solid ${({ theme }) => theme.color.border};
  overflow: auto;
`

const Content = styled.main`
  padding: 16px;
  overflow: auto;
`


