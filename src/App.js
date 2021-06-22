import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import './App.css';
import ChallengeList from './pages/ChallengeList';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

import { PrivateRoute, PublicRoute } from './components/Auth';
import Logout from './pages/Logout';

function App() {
  return (
    <ToastProvider
      autoDismiss={true}
      placement="bottom-right"
    >
      <Router>
        <Switch>
          <PublicRoute
            exact
            path="/"
          >
            <Login />
          </PublicRoute>
          <PublicRoute path="/signup">
            <Signup />
          </PublicRoute>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/challenges">
            <ChallengeList />
          </PrivateRoute>
          <PrivateRoute path="/me">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/logout">
            <Logout />
          </PrivateRoute>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
