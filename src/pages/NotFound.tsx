import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/GameCellDynamics/#")
        }, 5000)
    }, []);

    return <h1>Page not found!</h1>
}
