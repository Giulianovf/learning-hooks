import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return(
        <>
        <h1>Bem vindos aos Hooks</h1>
        <Link to="/useState">Vá para o UseStagePage</Link>
        <br />
        <Link to="/useEffect">Vá para o UseEffectPage</Link>
        <br />
        <Link to="/useCallback">Vá para o UseCallbackPage</Link>
        <br />
        <Link to="/useMemo">Vá para o UseMemoPage</Link>
        </>
    )
}  
export default HomePage;