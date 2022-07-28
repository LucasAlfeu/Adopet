const botaoCadastrar = document.querySelector('.botao__formulario');

botaoCadastrar.addEventListener('click', function() {
    const form = document.querySelector('#form')
    
    const adotante = obtemDadosFormulario(form)
    
    const validaDados = validaDadosDoForm(adotante)
    if(!validaDados) {
        adotante.senha.reset()
    }

    const confirma = confirmaSenha( adotante.senha, adotante.senhaConfirmada) 

    if(confirma && validaDados){
        window.location.href = './entrar.html';
    }
})

function obtemDadosFormulario(form){
    let adotante = {
        email: form.email.value,
        nome: form.nome.value,
        senha: form.senha.value,
        senhaConfirmada: form.senha_confirma.value
    }
    return adotante
}

function validaDadosDoForm(adotante){  
    const erroEmail = document.querySelector('#erro-email') 
    const erroNome = document.querySelector('#erro-nome')  
    const erroSenha = document.querySelector('#erro-senha') 

    const regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/
    const regexNome = /[a-zA-Z][a-zA-Z]{3,32}/
    const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    if(!regexEmail.exec(adotante.email)){
        erroEmail.textContent = 'O Email está fora dos requisitos'
        return false
    }
    if(!regexNome.exec(adotante.nome)){        
        erroNome.textContent = 'Somente letras são permitidos'
        return false
    }
    if(!regexSenha.exec(adotante.senha)) {
        erroSenha.textContent = 'Sua senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número'
        return false
    }
    erroEmail.textContent = ''
    erroNome.textContent = ''
    erroSenha.textContent = ''
    return true
}

function confirmaSenha(senha, senhaConfirma){
    if( senha == senhaConfirma){
        return true
    } else {
        const confirmacaoSenha = document.querySelector('#erro-senhaConfirma') 
        confirmacaoSenha.textContent = 'As senhas devem ser compatíveis'
        return false
    }
}