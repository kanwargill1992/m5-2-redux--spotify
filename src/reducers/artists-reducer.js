const initialState = {
  token: null,
  status: "idle",
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_ARTIST": {
      return {
        ...state,
        currentArtist: action.profile,
        status: "idle",
      };
    }

    case "RECEIVE_ARTIST_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    default: {
      return state;
    }
  }
}

export const getArtist = () => {
  return (state) => state.artist.artist;
};

export const getArtistStatus = () => {
  return (state) => state.artist.status;
};
