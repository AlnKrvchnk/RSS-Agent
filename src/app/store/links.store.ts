import {} from 'mobx-react';
import { api } from '../api';
import { action, makeAutoObservable, observable } from 'mobx';
import { Link } from '../types/link';

class LinksStore {
    @observable isLoading: boolean = false;
    @observable error: string | undefined = undefined;
    @observable allLinks: Array<Link> = [];
    @observable selectLinks: Array<Link> = [];
    constructor() {
        makeAutoObservable(this);
    }

    @action
    public async getLinks() {
        this.isLoading = false;
        try {
            const data: Array<Link> = await api.links.getListLink();
            this.allLinks = data;
            this.isLoading = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action public setSelectLink(links: Array<Link>) {
        this.selectLinks = links;
    }
}
export default LinksStore;
