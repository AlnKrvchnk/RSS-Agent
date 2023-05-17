import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
interface Props {
    rating?: string | number;
    title?: string;
    pubDate?: string;
    img?: { url: string; type: string };
    link?: string;
}
const NewsItem = ({ rating, title, pubDate, img, link }: Props) => {
    return (
        <Card>
            <CardActionArea href={link ? link : '#'} target="_blank">
                <CardMedia
                    component="img"
                    height="140"
                    image={img && img.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {pubDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        rating={rating}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link
                    href={link ? link : '#'}
                    underline="hover"
                    target="_blank"
                >
                    Подробнее
                </Link>
            </CardActions>
        </Card>
    );
};
export default NewsItem;
