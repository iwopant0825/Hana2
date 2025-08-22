import styled from 'styled-components'
import type { PropsWithChildren } from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { useState } from 'react'
import { AIChatPanel } from '../components/common/AIChatPanel'

export function AppLayout({ children }: PropsWithChildren) {
  const [aiOpen, setAiOpen] = useState(false)
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
      <AIFab aria-label="AI" onClick={() => setAiOpen((v) => !v)}>AI</AIFab>
      <AIChatPanel open={aiOpen} onClose={() => setAiOpen(false)} />
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
  padding-left: 16px;
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

const AIFab = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 56px; height: 56px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.color.primary};
  color: #ffffff;
  font-weight: 800;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 12px 32px rgba(0,0,0,0.16); }
  &:active { transform: translateY(0); box-shadow: 0 8px 24px rgba(0,0,0,0.14); }
  &:focus-visible { outline: 2px solid rgba(47,118,255,0.35); outline-offset: 2px; }
`


