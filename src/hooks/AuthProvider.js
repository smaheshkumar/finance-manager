import { useContext, createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('site') || '')
    const navigate = useNavigate();
    const loginAction = async (data) => {
        try {
            const response = await fetch("https://run.mocky.io/v3/ceacd3d3-4501-4566-a2cf-d60eb2bb934e", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.data) {
                console.log('res', res);
                setUser(res.data);
                setToken(res.data.sub);
                localStorage.setItem('site', res.data.sub);
                navigate("/dashboard");
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            console.log(err);
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem('site');
        navigate('/login');
    }

    return (
        <AuthContext.Provider value= {{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};