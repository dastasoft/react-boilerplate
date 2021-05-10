import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import { ROUTES } from './lib/constants'

export default function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.HOME}>
        <Home />
      </Route>
    </Switch>
  )
}
