import axios from 'axios'
const STICK_API_BASE_URL='http://localhost:8080/api/magicStick';

class MagicStick{
    getStick(){
        return axios.get(STICK_API_BASE_URL);
    }
}
export default new MagicStick()