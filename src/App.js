import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import { HOMEPAGE } from './lib/constants'

function App() {
  return (
    <Router basename={HOMEPAGE}>
      <Routes />
    </Router>
  )
}

export default App
