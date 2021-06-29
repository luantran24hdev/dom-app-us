const keyToken = "ACCESS_TOKEN"
const Storage = {
    setToken(token){
        localStorage.setItem(keyToken,token)
    },
    getToken(){
        return localStorage.getItem(keyToken)
    }
}

export default Storage;