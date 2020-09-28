class User{
    login(data){
        axios.post('/api/auth/login',data)
        .then(res => console.log(res.data))
        .catch(error => console.log(error.response.data))
    }
}


export default User = new User()