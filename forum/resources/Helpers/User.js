import Token from "./Token"

import Tokens from './Token'
class User{
    login(data){
        axios.post('/api/auth/login',data)
        .then(res => {
            Tokens.payload(res.data.access_token)
        })
        .catch(error => console.log(error.response.data))
    }
}


export default User = new User()