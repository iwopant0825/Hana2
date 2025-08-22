import styled from 'styled-components'
import { FiX, FiCompass, FiFileText, FiSearch, FiGlobe } from 'react-icons/fi'

interface AIChatPanelProps {
  open: boolean
  onClose: () => void
}

export function AIChatPanel({ open, onClose }: AIChatPanelProps) {
  if (!open) return null
  return (
    <Root role="dialog" aria-modal="true" aria-label="AI 도움말">
      <HeaderBar>
        <Title>무엇을 도와드릴까요?</Title>
        <IconBtn aria-label="닫기" onClick={onClose}>
          <FiX />
        </IconBtn>
      </HeaderBar>

      <SuggestionList>
        <SuggestionItem>
          <i><FiCompass /></i>
          <span>연결된 앱에서 답변 찾기</span>
        </SuggestionItem>
        <SuggestionItem>
          <i><FiFileText /></i>
          <span>이 페이지 요약</span>
        </SuggestionItem>
        <SuggestionItem>
          <i><FiSearch /></i>
          <span>액션 아이템 찾기</span>
        </SuggestionItem>
        <SuggestionItem>
          <i><FiGlobe /></i>
          <span>이 페이지 번역</span>
        </SuggestionItem>
      </SuggestionList>

      <Composer>
        <Input type="text" placeholder="AI에게 무엇이든 물어보고, 작업하세요" />
        <SendBtn type="button">↩︎</SendBtn>
      </Composer>
    </Root>
  )
}

const Root = styled.div`
  position: fixed;
  right: 24px;
  bottom: 92px; /* FAB 위로 살짝 띄움 */
  width: 420px;
  max-height: 70vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 16px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.18);
  overflow: hidden;
  z-index: 1100;
`

const HeaderBar = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 14px 14px 10px 16px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
`

const IconBtn = styled.button`
  position: absolute; top: 10px; right: 10px;
  width: 32px; height: 32px;
  display: grid; place-items: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.mutedText};
  border-radius: 8px;
  cursor: pointer;
`

const SuggestionList = styled.div`
  padding: 8px 8px 0 8px;
  overflow: auto;
  display: grid; gap: 6px;
`

const SuggestionItem = styled.button`
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  text-align: left;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  & i { display: grid; place-items: center; color: ${({ theme }) => theme.color.mutedText}; }
  &:hover { background: ${({ theme }) => theme.color.background}; }
`

const Composer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`

const Input = styled.input`
  height: 40px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  border-radius: 10px;
  outline: none;
  &:focus { box-shadow: 0 0 0 3px rgba(47,118,255,0.15); border-color: ${({ theme }) => theme.color.primary}; }
`

const SendBtn = styled.button`
  height: 40px; width: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.mutedText};
  cursor: pointer;
`


