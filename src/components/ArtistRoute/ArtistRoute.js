import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import {
  requestArtist,
  receiveArtist,
  receiveArtistError,
} from "../../actions";
import { getArtist, getArtistStatus } from "../../reducers/artists-reducer";

import getAccessToken from "../../reducers/auth-reducer";

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const artistId = params.id;
  const accessToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(requestArtist());
    fetchArtistProfile(accessToken, artistId)
      .then((data) => {
        dispatch(receiveArtist(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(receiveArtistError());
      });
  }, [accessToken]);
  const artist = useSelector(getArtist());

  if (artist) {
    return (
      <div>
        <h1>{artist.name}</h1>
        <h2>{followersNum} followers</h2>
        <h3>Tags</h3>
        {artist.genres.slice(0, 2).map((genre, index) => {
          return <div key={genre + index}>{genre}</div>;
        })}
      </div>
    );
  }
};

export default ArtistRoute;
