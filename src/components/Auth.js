import {
  Route,
  Redirect,
} from 'react-router-dom';

export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => (window.localStorage.getItem('token') ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

export function PublicRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => (!window.localStorage.getItem('token') ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/challenges',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}
