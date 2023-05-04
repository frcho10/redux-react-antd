import axios from "axios";

// Constants
const initialStateInfoUser = {
    infoUser: {},
    isLoading: false,
    error: false,
    message: "",
  };
  
  // Types 
  const SET_DATA_INFO_USER = "SET_DATA_INFO_USER";
  const CHANGE_LOADING_INFO_USER = "CHANGE_LOADING_INFO_USER";
  const ERROR_MESSAGE = "ERROR_MESSAGE";
  
  
  
  // Reducer
  export default function changeUserReducer(state = initialStateInfoUser, action) {
    switch (action.type) {
        case SET_DATA_INFO_USER:
            return {
            ...state,
            infoUser: action.payload,
            };
        case CHANGE_LOADING_INFO_USER:
            return {
            ...state,
            isLoading: !state.isLoading
            };
        case ERROR_MESSAGE:
            return {
            ...state,
            error: !state.error,
            message: action.payload,
            };
        default:
        return state;
    }
  }
  
  // Actions

  export const changeUser = ( ) => async (dispatch, getState) => {
    
    try {
        dispatch({
            type: CHANGE_LOADING_INFO_USER,
        });
        const response = await axios.get(`https://randomuser.me/api?nat=ES`);
       
        dispatch({
            type: CHANGE_LOADING_INFO_USER,
        });
        
        console.log(response.data.results[0])
        dispatch({
            type: SET_DATA_INFO_USER,
            payload: response.data.results[0]
        });

    } catch (error) {
        dispatch({
        type: ERROR_MESSAGE,
        payload: error.response.data,
        });
        
    }
  };