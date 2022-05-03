import useAxios from 'axios-hooks';
import {Endpoint} from './endpoint';

export function useUser() {
  const [{data, loading, error}] = useAxios(Endpoint.user);

  if (error) {
    return {
      data: {
        firstName: 'Mark',
        lastName: 'Henry',
        email: 'markhenty@aspireapp.com',
        image: 'https://img.icons8.com/stickers/100/000000/user.png',
      },
      loading: false,
    };
  }

  return {
    data,
    loading,
    error,
  };
}

export function useSpend() {
  const [{data, loading, error}] = useAxios(Endpoint.spendLimit);

  if (error) {
    return {
      data: {balance: Math.random() * 100},
      loading: false,
    };
  }

  return {
    data,
    loading,
    error,
  };
}

export function useBalance() {
  const [{data, loading, error}] = useAxios(Endpoint.balance);

  if (error) {
    return {
      data: {balance: Math.random() * 100},
      loading: false,
    };
  }

  return {
    data,
    loading,
    error,
  };
}
