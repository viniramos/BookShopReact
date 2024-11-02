import { useNavigate } from "react-router-dom"

export function NotFound(){

    const navigate = useNavigate()
    const handleNavigation=()=> navigate("/")

    return(
        <>
            <h1>Error 404: Not Found</h1>

            <button onClick={handleNavigation}>Voltar a página inicial</button>
        </>
    )
}