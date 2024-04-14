import { 
    // DEL_DOGS, 
    // GET_DOGS, 
    POST_CROSSING, 
    POST_DOGS, 
    // PUT_DOGS 
} from "../constants";

const initialState= {
    canis: [],
    crossings: [],
};

const rootReducer = (state= initialState, {type, payload}, extra)=>{
    switch (type) {
        // case GET_DOGS: return {
        //     ...state,
        //     canis: payload,
        // };
        case POST_DOGS: return {
            ...state,
            canis: [...state.canis, payload],
        };
        // case PUT_DOGS: return {
        //     ...state,
        //     canis: payload,
        // };
        // case DEL_DOGS: return {
        //     ...state,
        //     canis: payload,
        // };
        case POST_CROSSING: return {
            ...state,
            crossings: [...state.crossings, payload],
        };
        default: return {
            ...state, extra
        }
    };
};

export default rootReducer;