import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Endpoint} from './endpoint';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  cardInfo: Object;
}
export function useGetUser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch(Endpoint.user)
      .then(response => response.json())
      .then(response => {
        if (response) {
          setUser(response.user);
          dispatch({
            type: 'STORE_USER',
            payload: response.user,
          });
          setLoading(false);
          return;
        }
      })
      .catch(e => {
        setLoading(false);
        setError(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: user,
    error,
    loading,
  };
}
