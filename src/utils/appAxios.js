import axios from "axios";

const baseURL = "https://apitest.nilvera.com";
const config = {
    headers:{
        Authorization : "Bearer D990CABE4EB949DCCCA45A7B9C4B307E5239968C7A6766C076F3A956A7AD7104"
    }
};

export const action = {
    stocks:async () => {
        return await axios.get(`${baseURL}/general/Stocks`,config)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default action;