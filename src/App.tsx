import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav';
import SideBar from './layout/SideBar';
import Main from './layout/Main';
import Future from './layout/Future';
import About from './layout/About';
import Add from './layout/Add';

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
      <Grid container>
        <Grid item xs={12}>
          <Nav />
        </Grid>

        <Routes>
          <Route path='/' element={
            <>
              <Grid item xs={12} md={2}>
                <SideBar />
              </Grid>
              <Grid item xs={12} md={10}>
                <Main />
              </Grid>
            </>
            }>
          </Route>

          <Route path='/add' element={
            <Grid item xs={12}>
              <Add />
            </Grid>
            } />

          <Route path='/about' element={
            <Grid item xs={12}>
              <About />
            </Grid>
            } />

          <Route path='/future' element={
            <>
              <Grid item xs={12} md={2}>
                <SideBar />
              </Grid>
              <Grid item xs={12} md={10}>
                <Future />
              </Grid>
            </>
            }>
          </Route>

      </Routes>

      </Grid>
    </ThemeProvider>
  );
}

export default App;
