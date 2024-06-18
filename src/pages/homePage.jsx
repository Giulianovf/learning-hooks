import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext} from "../contexts/userContext";

export const HomePage = () => {
    const user = useContext(UserContext);
    return(
        <>
        <h1>Bem vindos aos Hooks, {user.userName}!</h1>
        <Link to="/useState">Vá para o UseStagePage</Link>
        <br />
        <Link to="/useEffect">Vá para o UseEffectPage</Link>
        <br />
        <Link to="/useCallback">Vá para o UseCallbackPage</Link>
        <br />
        <Link to="/useMemo">Vá para o UseMemoPage</Link>
        <br />
        <Link to="/useRef">Vá para o UseRefPage</Link>
        </>
    )
}  
export default HomePage;