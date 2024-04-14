// import { API_URL } from "../../newComps/config/environment";
import { 
    // DEL_CROSSING, 
    // DEL_DOGS, 
    // GET_CROSSING, 
    // GET_DOGS, 
    POST_CROSSING, 
    POST_DOGS, 
    // PUT_CROSSING, 
    // PUT_DOGS 
} from "../constants";
// import { DEL_CATEGORIES, GET_CATEGORIES, POST_CATEGORIES, PUT_CATEGORIES } from "../constants";

// export const getDogs = (payload) => {
//     return {
//         type: GET_DOGS,
//         payload,
//     }
// };

export const addDog = (payload) => {
    return {
        type: POST_DOGS,
        payload,
    }
};

// export const putDog = (payload) => {
//     return {
//         type: PUT_DOGS,
//         payload,
//     }
// };

// export const delDog = (payload) => {
//     return {
//         type: DEL_DOGS,
//         payload,
//     }
// };

// export const getCrossings = (payload) => {
//     return {
//         type: GET_CROSSING,
//         payload,
//     }
// };

export const addCrossing = (payload) => {
    return {
        type: POST_CROSSING,
        payload,
    }
};

// export const putCrossing = (payload) => {
//     return {
//         type: PUT_CROSSING,
//         payload,
//     }
// };

// export const delCrossing = (payload) => {
//     return {
//         type: DEL_CROSSING,
//         payload,
//     }
// };