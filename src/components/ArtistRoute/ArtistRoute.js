import React from "react";
import { useSelector } from "react-redux";
import getAccessToken from "../../reducers/auth-reducer";

const ArtistRoute = () => {
  const accessToken = useSelector(getAccessToken);
  return accessToken;
};

export default ArtistRoute;
