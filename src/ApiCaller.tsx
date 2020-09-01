import { url } from './config';
import axios from 'axios'
 
export const ApiCaller = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});