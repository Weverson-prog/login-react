import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children} : { children:  JSX.Element}) => {
    const auth = useAuth();
    
    if (!auth.email) {
        return <h1> no acess</h1>
    }

    return children

}