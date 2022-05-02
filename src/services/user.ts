import useAxios from 'axios-hooks';
import {Endpoint} from './endpoint';

export function useUser() {
  const [{data, loading, error}] = useAxios(Endpoint.user);

  return {
    data,
    loading,
    error,
  };
}

export function useSpend() {
  const [{data, loading, error}] = useAxios(Endpoint.spendLimit);

  return {
    data,
    loading,
    error,
  };
}

export function useBalance() {
  const [{data, loading, error}] = useAxios(Endpoint.balance);

  return {
    data,
    loading,
    error,
  };
}
