import { useNavigate } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { estaLogadoState, listaDePerfilState } from "state/atom"

const useLoginValidacao = () => {
    const perfil = useRecoilValue(listaDePerfilState)
    const setEstaLogado = useSetRecoilState(estaLogadoState)
    const navigate = useNavigate()
    let verificaEmail = ''
    let verificaSenha = ''

    const listarEmail = (e: React.FocusEvent<HTMLInputElement, Element>): string => {
        verificaEmail = (e.target.value)
        return verificaEmail
    }
    const listarSenha = (e: React.FocusEvent<HTMLInputElement, Element>): string => {
        verificaSenha = (e.target.value)
        return verificaSenha
    }

    const confirmaLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(perfil.email === verificaEmail && perfil.senha === verificaSenha){
            setEstaLogado(true)
            navigate('/home')
        } else {
            console.log('Seu email ou sua senha estão incorretos')
        }
    }

    return {listarEmail, listarSenha, confirmaLogin}
}

export default useLoginValidacao