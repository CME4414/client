import { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    window.localStorage.removeItem('token');
    history.push('/login');
  });

  return null;
}
