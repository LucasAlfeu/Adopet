

const useEsconderSenha = () => {
    const esconderSenha = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const tagInput = e.currentTarget.parentNode?.children[0]
        const atributo = tagInput?.attributes[1].value
        atributo === 'password' ? tagInput?.setAttribute('type', 'text') : tagInput?.setAttribute('type', 'password')

    }
    return esconderSenha
}

export default useEsconderSenha