
import Tokens from './Token'
import AppStorage from './AppStorage'
import Token from './Token'
class User{
    login(data){
        axios.post('/api/auth/login',data)
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log(error.response.data))
    }

    //Using For Store access token and User name
    responseAfterLogin(res){
        const access_token = res.data.access_token
        const username = res.data.user
        if(Tokens.isValid(access_token)){
            AppStorage.store(username, access_token)
            window.location = '/forum'
        }

    }
    
    //Check if Token is Avilable Or Not
    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            return Token.isValid(storedToken) ? true : false
        }

        return false
    }

    //Check User is Logged in or not
    loggedIn(){
        return this.hasToken()
        
    }

    //Use for user logout
    logout(){
        AppStorage.clear()
        window.location = '/forum'
    }

    //Get Username using this functtion
    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    //Get Id using this function
    id(){
        if(this.loggedIn()){
            if(this.loggedIn()){
                const payload = Token.payload(AppStorage.getToken())
                return payload.sub
            }
        }
    }

    own(id){
        alert(this.id());
        alert(id);
        return this.id() == id
    }
}


export default User = new User()