import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
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
                    <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : ''}>
                      { name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {
              routes.map( ({to, path, Component}) => (
                <Route key = { to } path={ path } element = { <Component/> }/>
              ))
            }
            <Route path="/*" element = { <Navigate to={routes[1].to} replace /> }/>
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}