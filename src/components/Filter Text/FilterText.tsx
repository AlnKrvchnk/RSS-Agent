import { FilledInput } from '@mui/material';
import { observer } from 'mobx-react';
import { useAppContext } from '../../contexts/StoreContext';
import { useState } from 'react';

interface Props {
    setValue: (value: string) => void;
}

const FilterText = ({ setValue }: Props) => {
    const handleChange = (value: string) => {
        setValue(value);
    };
    return (
        <FilledInput
            placeholder="Введите запрос"
            onChange={(el) => {
                handleChange(el.target.value);
            }}
        />
    );
};
export default observer(FilterText);
