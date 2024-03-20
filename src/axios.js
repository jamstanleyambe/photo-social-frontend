
import axios from 'axios'
const instance = axios.create({
    baseURL: "https://photo-social-backend-a4190ae40470.herokuapp.com"
})
export default instance
