import axios from "axios";
const URL = "http://localhost:8000";

const ApiRequest = async (route , values) =>{

    const response = await axios.post(`${URL}${route}`, values);
    return response.data;

}

export default ApiRequest