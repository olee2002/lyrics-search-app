import axios from 'axios'

const Api = {
   axiosInitialize() {
      const instance = axios.create({
         baseURL: process.env.REACT_APP_MUSIXMATCH_URL,
      })
      return instance
   },
   axiosInstance() {
      const instance = axios.create({
         // https://cors-access-allow.herokuapp.com is used to resolve cors issue in dev env
         baseURL: `https://cors-access-allow.herokuapp.com/${process.env.REACT_APP_MUSIXMATCH_URL}`,
         timeout: 10000,
         headers: {
            'Content-Type': 'application/json',
         },
         params: {
            apikey: process.env.REACT_APP_MUSIXMATCH_API_KEY,
         },
      })
      return instance
   },
}

export default Api
