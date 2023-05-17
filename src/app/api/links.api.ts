
import { Link } from '../types/link';
import Api from './index';

export default class LinksApi {
    constructor(private readonly api: Api) {
    }

    public getListLink(): Promise<Array<Link>> {
        return this.api.get('/links');
    }
}