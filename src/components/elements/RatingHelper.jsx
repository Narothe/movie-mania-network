import goodRate from "../assets/symbols/goodRate.png";
import midRate from "../assets/symbols/midRate.png";
import badRate from "../assets/symbols/badRate.png";

const getRatingImage = (rating) => {
    if (rating >= 8 && rating <= 10) {
        return goodRate;
    } else if (rating >= 4 && rating <= 7) {
        return midRate;
    } else if (rating >= 0 && rating <= 3) {
        return badRate;
    }
};

export default getRatingImage;
