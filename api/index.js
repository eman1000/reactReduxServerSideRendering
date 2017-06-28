import axios from "axios";
const BACKEND_URL = "https://randomuser.me/api/";
export default function getFakeData() {
    return axios.get(BACKEND_URL);
}