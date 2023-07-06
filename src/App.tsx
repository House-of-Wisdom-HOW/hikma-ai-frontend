import { Grid } from '@mui/material';
import Nav from './layout/Nav';
import SideBar from './layout/SideBar';

function App () {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Nav />
      </Grid>

      <Grid item xs={2}>
        <SideBar />
      </Grid>
    </Grid>
  );
}

export default App;
