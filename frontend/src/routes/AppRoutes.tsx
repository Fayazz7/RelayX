import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import HowLoofWorksPage from '../pages/HowLoofWorksPage'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/how-loof-works" element={<HowLoofWorksPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
