import { showTime } from "./action";
import { SHOWTIME } from "./constants";

let initialTime = 1.0;
export const reducer = (state=initialTime,action) => {
    switch (action.type) {
        case SHOWTIME:
            return action.data
        default : 
            return state;
    }
} 

