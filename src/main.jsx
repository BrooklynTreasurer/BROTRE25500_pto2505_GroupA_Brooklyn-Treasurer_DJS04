import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')

/**
 * Mounts the React application into the root DOM node.
 * @returns {void}
 */
function bootstrap() {
  if (!rootElement) {
    throw new Error('Root element with id "root" was not found.')
  }

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

bootstrap()
