export default function uploaderReducer(state={ imageUrl: "", colors: {}, colorContainer: [],
         fetchingColors: false }, action) {
  switch (action.type) {
    case "UPLOAD_IMG":
      return { ...state, imageURL: action.payload }
    case "FETCHING_COLORS":
      return { ...state, fetchingColors: true}
    case "FETCHED_COLORS":
      return { ...state, colors: action.payload, fetchingColors: false }
    case "ADD_COLORS":
      const temp = [ ...state.colorContainer, ...action.payload ]
      const unique = [ ...new Set(temp)]
      return { ...state, colorContainer: unique }
    default:
      return state
  }
}
