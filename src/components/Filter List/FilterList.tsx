import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useAppContext } from '../../contexts/StoreContext';
import { useEffect, useState } from 'react';
import { Link } from '../../app/types/link';
import { observer } from 'mobx-react';

interface Props {
    setValue: (value: Array<Link>) => void;
}

const FilterList = ({ setValue }: Props) => {
    const store = useAppContext();
    useEffect(() => {
        store.links.getLinks();
    }, []);

    const linkList = store.links.allLinks;
    const handleSelect = (el: Array<Link>) => {
        setValue(el);
    };
    return (
        <Autocomplete
            multiple
            id="filterList"
            options={linkList}
            getOptionLabel={(option) => option.title}
            defaultValue={linkList}
            filterSelectedOptions={true}
            onChange={(e, el) => handleSelect(el)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Источники новостей"
                    placeholder="Выберите источник новостей"
                />
            )}
        />
    );
};
export default observer(FilterList);
