import { SHOWTIME } from "./constants";

export function showTime(time){
    return {
        type:SHOWTIME,
        data:time
    }
}

