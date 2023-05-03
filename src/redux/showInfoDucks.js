

// Constants
const inicialStateShowInfo = {
  arrayOptions: [
    {key:1, option:"Moto"},
    {key:2, option:"Coche"},
    {key:3, option:"Avion"},
    {key:4, option:"Barco"}
  ],
  isLoading: false,
};

// Types 
const SET_DATA = "SET_DATA";
const CHANGE_LOADING = "CHANGE_LOADING";



// Reducer
export default function showInfoReducer(state = inicialStateShowInfo, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        arrayOptions: action.payload,
      };
    case CHANGE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    default:
      return state;
  }
}

// Actions
export const setArray = (newArray) =>({
  type: SET_DATA,
  payload: newArray,
});

export const changeLoading = () =>({
  type: CHANGE_LOADING,
});