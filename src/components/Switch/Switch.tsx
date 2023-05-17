import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useAppContext } from '../../contexts/StoreContext';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
const Switch = () => {
    const store = useAppContext();
    const [value, setValue] = React.useState<boolean | undefined>(undefined);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log((event.target as HTMLInputElement).value);
        setValue(Boolean(Number((event.target as HTMLInputElement).value)));
    };

    useEffect(() => {
        console.log(value);
        value != undefined && store.news.sortedBy(value);
    }, [value]);

    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
                Сортировать:
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                row
            >
                <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="По возрастанию"
                />
                <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="По убыванию"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default observer(Switch);
