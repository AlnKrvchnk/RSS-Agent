import Grid from '@mui/material/Grid';
import FilterList from './components/Filter List/FilterList';
import FilterText from './components/Filter Text/FilterText';
import { Container, Stack, Typography } from '@mui/material';
import NewsItem from './components/News Item/NewsItem';
function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" style={{height:'100vh', paddingTop:'5vh'}}>
        
      <Stack spacing={4} position={'relative'}>
<Stack spacing={2} position={'sticky'} top={0} bgcolor={'white'} zIndex={1} >
<Typography variant="h2" m={2} align='center' color='primary.dark' fontWeight={'bold'}>RSS-agent</Typography>
<FilterList/>
<FilterText/></Stack>
<Stack spacing={2} padding={'2px'}>
  <NewsItem></NewsItem>
  <NewsItem></NewsItem>
  <NewsItem></NewsItem>
  <NewsItem></NewsItem>
</Stack>
      </Stack></Container>
    </div>
  );
}

export default App;
