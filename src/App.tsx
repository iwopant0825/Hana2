import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import Dashboard from '@/pages/Dashboard'
import CloudCarbon from '@/pages/CloudCarbon'
import CodeCarbon from '@/pages/CodeCarbon'
import Integrations from '@/pages/Integrations'
import Accounting from '@/pages/Accounting'
import Strategies from '@/pages/Strategies'
import Copilot from '@/pages/Copilot'
import Settings from '@/pages/Settings'
import APIDocs from '@/pages/APIDocs'
import Community from '@/pages/Community'
import Activity from '@/pages/Activity'
import Allowance from '@/pages/Allowance'
import Reports from '@/pages/Reports'
import Enterprise from '@/pages/Enterprise'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cloud" element={<CloudCarbon />} />
          <Route path="/code" element={<CodeCarbon />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/allowance" element={<Allowance />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/copilot" element={<Copilot />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/api" element={<APIDocs />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
