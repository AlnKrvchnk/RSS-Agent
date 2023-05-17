import { Link } from '../types/link';

export const links = {
    getAll: () => '/links',
};
export const news = {
    getAll: () => '/news',
    getByFilter: (
        links: Array<Link> | undefined,
        keys: Array<string> | undefined
    ) => `/news${formatFilters(links, keys)}`,
};
const formatFilters = (
    linkList: Array<Link> | undefined,
    findBy: Array<string> | undefined
) => {
    let req = '?';
    linkList &&
        linkList.forEach((link) => {
            req = req + 'link=' + link.id + '&';
        });
    findBy &&
        findBy.forEach((key) => {
            req = req + 'find=' + key + '&';
        });
    return req.slice(0, -1);
};
