import { IPerfil } from "interface/IPerfil"
import { useNavigate } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { confirmaSenhaState, emailState, listaDePerfilState, nomeState, senhaState } from "state/atom"


const useConfirmaCadastro = () => {
    const setPerfil = useSetRecoilState(listaDePerfilState)
    const perfil = useRecoilValue(listaDePerfilState)
    const navigate = useNavigate()

    const nome = useRecoilValue(nomeState)
    const email = useRecoilValue(emailState)
    const senha = useRecoilValue(senhaState)
    const confirmaSenha = useRecoilValue(confirmaSenhaState)

    const perfilAceito: IPerfil = {
        nome: nome,
        email: email,
        senha: senha
    }

    const confirmaCadastro = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (confirmaSenha) {
            setPerfil(perfilAceito)
            navigate('/home')
        } else {
            console.log("Reveja seus dados, houve algum erro")
        }
    }
    return confirmaCadastro
}

export default useConfirmaCadastro