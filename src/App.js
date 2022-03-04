import "./App.css";
import { Container, Grid } from "@mui/material";
import AppCard from "./english/Card";
import AppCardArabic from "./arabic/Card";
import AppCardArabic2 from "./arabic2/Card";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <AppCard />
          </Grid>
          <Grid item xs={4}>
            <AppCardArabic />
          </Grid>
          <Grid item xs={4}>
            <AppCardArabic2 />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
