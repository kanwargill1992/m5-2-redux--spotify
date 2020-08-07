import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import GlobalStyle from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute/ArtistRoute";
import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../../actions";

const DEFAULT_ARTIST_ID = "5sm0jQ1mq0dusiLtDJ2b4R";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessToken());
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => dispatch(receiveAccessToken(json)))
      .catch((err) => dispatch(receiveAccessTokenError()));
  }, []);
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
