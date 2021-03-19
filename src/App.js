import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import Info from "./pages/Info";

import { createMuiTheme, Paper, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "rgb(229, 9, 20)",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/info/:id">
              <Info />
            </Route>
          </Router>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
