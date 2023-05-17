import { Container, Stack, Typography } from '@mui/material';
import FindByBox from './components/Find By Box/FindByBox';
import NewsList from './components/News List/NewsList';
import Switch from './components/Switch/Switch';
function App() {
    return (
        <div className="App">
            <Container
                maxWidth="sm"
                style={{ height: '100vh', paddingTop: '5vh' }}
            >
                <Stack spacing={4} position={'relative'}>
                    <Stack
                        spacing={2}
                        position={'sticky'}
                        top={0}
                        bgcolor={'white'}
                        zIndex={1}
                    >
                        <Typography
                            variant="h2"
                            m={2}
                            align="center"
                            color="primary.dark"
                            fontWeight={'bold'}
                        >
                            RSS-agent
                        </Typography>
                        <FindByBox />
                        <Switch />
                    </Stack>
                    <NewsList />
                </Stack>
            </Container>
        </div>
    );
}

export default App;
