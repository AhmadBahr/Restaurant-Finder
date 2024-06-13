import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:3001/api/v1/Restaurants",
    params: {
        key: "<YOUR_GoogleAPIKey_HERE>"
    }
})