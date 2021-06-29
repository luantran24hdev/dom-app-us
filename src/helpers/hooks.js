import {useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux';
//khong dang nhap moi vao duoc trang login 
export default function useNotAuth(){
    const location = useLocation();
    const history = useHistory();
    const token = useSelector(state=>state.auth.access_token);
    // lang nghe su thay doi cua location (router)
    // moi lan duong dan url thay doi minh deu phai check 
    useEffect(()=>{
        // neu co token thi khong cho phep vao 
        if(token){
            history.push('/')
        }
    },[location,history,token])
}