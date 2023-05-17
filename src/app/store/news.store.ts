import {} from 'mobx-react';
import { api } from '../api';
import { action, makeAutoObservable, observable } from 'mobx';
import { Articles } from '../types/articles';
import { Link } from '../types/link';
import { wordList } from '../types/wordsList';

class NewsStore {
    @observable error: string | undefined = undefined;
    @observable newsList: Array<Articles> | undefined = undefined;
    constructor() {
        makeAutoObservable(this);
    }

    @action
    public async getData() {
        this.newsList = undefined;
        try {
            const data: Array<Articles> = await api.news.getNews();
            this.newsList = data;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public sortedBy(up: boolean) {
        let data = this.newsList;
        if (up) {
            data &&
                data.sort(
                    (first, second) =>
                        Number(first.rating) - Number(second.rating)
                );
        } else {
            data &&
                data.sort(
                    (first, second) =>
                        Number(second.rating) - Number(first.rating)
                );
        }
        this.newsList = data;
        console.log(data);
    }
    @action
    public async getFilteredData(
        linkList?: Array<Link> | undefined,
        findBy?: string | undefined
    ) {
        this.newsList = undefined;
        let filteredArray: Array<string> | undefined;
        if (findBy) {
            const findByArr = findBy.replace(/[.,:;?!""()%]/g, ' ').split(' ');
            filteredArray = findByArr.filter(
                (word) => !wordList.includes(word)
            );
        }
        try {
            const data = await api.news.getFilterNews(linkList, filteredArray);
            console.log(data);
            this.newsList = data;
        } catch (err) {
            console.log(err);
        }
    }
}

export default NewsStore;
