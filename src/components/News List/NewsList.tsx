import Stack from '@mui/material/Stack';
import NewsItem from '../News Item/NewsItem';
import { useAppContext } from '../../contexts/StoreContext';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const NewsList = () => {
    const store = useAppContext();
    useEffect(() => {}, []);
    const newsList = store.news.newsList;
    return (
        <Stack spacing={2} padding={'2px'}>
            {newsList ? (
                newsList.map((news) => <NewsItem {...news} />)
            ) : (
                <Typography
                    variant="h4"
                    color="primary"
                    align="center"
                    children="Не найдено"
                />
            )}
        </Stack>
    );
};
export default observer(NewsList);
