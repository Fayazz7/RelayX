import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppErrorBoundary from './app/AppErrorBoundary'
import { QueryProvider } from './app/QueryProvider'
import './index.css'
import AppRoutes from './routes/AppRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
      <QueryProvider>
        <AppRoutes />
      </QueryProvider>
    </AppErrorBoundary>
  </StrictMode>,
)
