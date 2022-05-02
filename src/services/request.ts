import Axios from 'axios';
import {configure} from 'axios-hooks';
import LRU from 'lru-cache';

export function createAxiosInstance() {
  const axios = Axios.create({
    baseURL: 'http://192.168.1.23:3100/',
  });

  const cache = new LRU({max: 10});

  configure({axios, cache});
}
