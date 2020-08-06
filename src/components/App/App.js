import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute/ArtistRoute";

const DEFAULT_ARTIST_ID = "5sm0jQ1mq0dusiLtDJ2b4R";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/artist/:artistId">
            <ArtistRoute />
          </Route>
          <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
