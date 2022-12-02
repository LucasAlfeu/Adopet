import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { confirmaSenhaState, emailState, listaDePerfilState, nomeState, senhaState } from "state/atom"


const useConfirmaCadastro = () => { 
    // const setPerfil = useSetRecoilState(listaDePerfilState)   
    const navigate = useNavigate()

    const nome = useRecoilValue(nomeState)
    const email = useRecoilValue(emailState)
    const senha = useRecoilValue(senhaState)
    const confirmaSenha = useRecoilValue(confirmaSenhaState)
    
    const confirmaCadastro = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        confirmaSenha ? console.log(`Nome: ${nome} - Email:${email} - Senha: ${senha}`) : console.log('Houve algum erro') 
        confirmaSenha ? navigate('/home') : console.log('Houve algum erro') 
    }
    return confirmaCadastro
}

export default useConfirmaCadastro