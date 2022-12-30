import actions from "./type";
import produce from "immer";

const inititalState = {
  banners: [],
  movies: {},
  movieDetail: null,
  movieDetailSchedule: null,
  cinemas:[]
};

const reducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actions.SET_BANNERS:
        draft.banners = action.payload;
        break;
      case actions.SET_MOVIES:
        draft.movies = action.payload;
        break;
      case actions.SET_MOVIES_DETAIL:
        draft.movieDetail = action.payload;
        break;
      case actions.SET_MOVIES_DETAIL_SCHEDULE:
        draft.movieDetailSchedule = action.payload;
        break;
        case actions.SET_CINEMAS:
        draft.cinemas = action.payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;
