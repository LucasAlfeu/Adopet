import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { estaLogadoState } from "state/atom"

const useIrPara = () => {    
    const estaLogado = useRecoilValue(estaLogadoState)
    const navigate = useNavigate()

    const irParaHome = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if(estaLogado === false) {
            navigate('/')
        } else {
            navigate('/home')
        }
    }
    const irParaMessage = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if(estaLogado === false) {
            navigate('/')
        } else {
            navigate('/message')
        }
    }

    return {irParaHome, irParaMessage}
}

export default useIrPara