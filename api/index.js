import axios from "axios";
const BACKEND_URL = "https://pixabay.com/api/?key=5701538-da0313fec5db349435216f7c3&q=hotels&image_type=photo";
export default function getFakeData() {
    return axios.get(BACKEND_URL);
}