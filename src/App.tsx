import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import { HOMEPAGE } from './lib/constants'

export default function App() {
  return (
    <Router basename={HOMEPAGE}>
      <Routes />
    </Router>
  )
}
