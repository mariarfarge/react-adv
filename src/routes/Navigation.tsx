import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              { 
                routes.map((({to, name}) =>               
                  <li key={ to } >
                    <NavLink to={to} activeClassName="nav-active" exact>
                      { name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map( ({to, Component}) => (
                <Route key = { to } path={to}>
                  <Component/>         
                </Route>
              ))
            }
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}