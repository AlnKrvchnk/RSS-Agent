import axios, { AxiosInstance } from 'axios';
import { config } from './config';
import NewsApi from './news.api';
import LinksApi from './links.api';

class Api {
    private readonly client: AxiosInstance;
    public readonly news: NewsApi;
    public readonly links:LinksApi;
    constructor() {
        this.client = axios.create(config);
      
        this.client.interceptors.response.use((res) => res.data);
     this.links=new LinksApi(this);
        this.news = new NewsApi(this);
        this.client.interceptors.request.use((config) => ({
            ...config,
        }));
    
    }
    public get<Response>(url: string): Promise<Response> {
        return this.client.get<null, Response>(url);
    }
}

export default Api;
export const api = new Api();