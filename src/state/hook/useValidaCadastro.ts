import { useRecoilValue, useSetRecoilState } from "recoil"
import { emailState, nomeState, senhaState, confirmaSenhaState } from "state/atom"


const useValidaFormulario = () => {
    const setEmail = useSetRecoilState(emailState)
    const setNome = useSetRecoilState(nomeState)
    const senha = useRecoilValue(senhaState)
    const setSenha = useSetRecoilState(senhaState)
    const setSenhaConfirmada = useSetRecoilState(confirmaSenhaState)
    

    const validaEmail = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const emailParaTestar = e.target.value
        const ehValido = regex.test(emailParaTestar)
        ehValido ? setEmail(emailParaTestar) : console.log('Email incorreto')
    }
    const validaNome = (e: React.FocusEvent<HTMLInputElement, Element>) => { 
        const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
        const nomeParaTestar = e.target.value
        const ehValido = regex.test(nomeParaTestar)
        ehValido ? setNome(nomeParaTestar) : console.log('nome incorreto')
    }
    const validaSenha = (e: React.FocusEvent<HTMLInputElement, Element>) => { //Teste123!
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g
        const senhaParaTestar = e.target.value
        const ehValido = regex.test(senhaParaTestar)
        ehValido ? setSenha(senhaParaTestar) : console.log('senha incorreto')
    }
    const confirmaSenha = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const confirmaSenha = e.target.value
        confirmaSenha === senha ? setSenhaConfirmada(true) : console.log('Senhas diferente')
    }
    return {validaEmail, validaNome, validaSenha, confirmaSenha}
}

export default useValidaFormulario