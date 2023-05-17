import { Button } from '@mui/material';
import FilterList from '../Filter List/FilterList';
import FilterText from '../Filter Text/FilterText';
import { useState } from 'react';
import { Link } from '../../app/types/link';
import { observer } from 'mobx-react';
import { useAppContext } from '../../contexts/StoreContext';

const FindByBox = () => {
    const store = useAppContext();
    const [linkList, setLinkList] = useState<Array<Link> | undefined>();
    const [findBy, setFindBy] = useState<string | undefined>();

    const handleClick = () => {
        store.news.getFilteredData(linkList, findBy);
    };
    const handleSetLink = (value: Array<Link>) => {
        setLinkList(value);
    };
    const handleSetFindBy = (value: string) => {
        setFindBy(value);
    };
    return (
        <>
            <FilterList setValue={handleSetLink} />
            <FilterText setValue={handleSetFindBy} />
            <Button variant="outlined" onClick={handleClick}>
                Найти
            </Button>
        </>
    );
};
export default observer(FindByBox);
