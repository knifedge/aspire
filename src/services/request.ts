import Axios from 'axios';
import {configure} from 'axios-hooks';
import LRU from 'lru-cache';

export function createAxiosInstance() {
  const axios = Axios.create({
    baseURL: 'https://localhost:3000/',
  });

  const cache = new LRU({max: 10});

  configure({axios, cache});
}
