import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();


    const login = async ({userName, password}) =>{
            const success = handleInputErrors({userName,password});

            if(!success){
                return ;
            }
            setLoading(true);
		    try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({  userName, password}),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);
            console.log(data);
            toast.success("User Signed up successfully");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
    }

export default useLogin;

function handleInputErrors({userName,password}){
    if(!userName || !password){
        toast.error("Please fill a the inputs");
        return false;
    }

    if(password.length<6){
        toast.error("Password should be at least 6 characters");
        return false;
    }

    return true;

}