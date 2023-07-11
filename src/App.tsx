import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from './layout/Nav';
import SideBar from './layout/SideBar';

function App () {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#E1B15D', // brown
      },
      secondary: {
        main: '#FFFFFF', // white
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Nav />
        </Grid>

        <Grid item xs={2}>
          <SideBar />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
