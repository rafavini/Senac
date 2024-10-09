const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//funcao que mostra mensagem de erro no input 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small'); //capturando a tag
    small.innerHTML = message
}

function showSucesso(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control sucesso'
    const small = formControl.querySelector('small'); //capturando a tag
    small.innerHTML = message
}


function checkRequired(listaInput) {
    //verificar os inputs se estao vindo
    // listaInput.forEach(function(input){
    //     console.log(input.value)
    // })


    let valid = true; // Variável para verificar se há erro
    listaInput.forEach(function (input) {
        if (input.value.trim() == '') {
            showError(input, `${getFieldName(input)} é obrigatório`);
            valid = false; // Define como inválido se houver erro
        } else {
            showSucesso(input);
        }
    });
    return valid;
}

//funcao feita apenas para colocar a mensagem com letra maiscula
function getFieldName(input) {
    return input.id[0].toUpperCase() + input.id.slice(1)
}


//funcao para checkar o tamanho dos valores
function checkLenght(input, min, max) {
    let valid = true; // Variável para verificar se há erro
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} tem que ter no mínimo ${min} caracteres`);
        valid = false; // Define como inválido se houver erro
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} precisa ser menor que ${max} caracteres`);
        valid = false; // Define como inválido se houver erro
    }
    return valid;
}


//check password

function CheckPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "As senhas não são iguais");
        return false; // Retorna false se as senhas não forem iguais
    }
    return true;
}

//lembrar que formulario ele  da refresh na tela se nao colocar o preventDefault()
form.addEventListener("submit", function (e) {
    e.preventDefault()


    //usando versao menos clean
    // if (username.value == ""){
    //     showError(username, "Usuario é obrigatorio")
    // }else{
    //     showSucesso(username)
    // }
    // if (email.value == ""){
    //     showError(email, "Usuario é obrigatorio")
    // }else{
    //     showSucesso(email)
    // }
    // if (password.value == ""){
    //     showError(password, "Usuario é obrigatorio")
    // }else{
    //     showSucesso(password)
    // }
    // if (password2.value == ""){
    //     showError(password2, "Usuario é obrigatorio")
    // }else{
    //     showSucesso(password2)
    // }


    //versao um pouco melhor usando funcao
    // checkRequired(username)
    // checkRequired(email)
    // checkRequired(password)
    // checkRequired(password2)



    //melhor versao
    let isValid = true

    isValid = checkRequired([username, email, password, password2])
    isValid = checkLenght(username, 3, 15) && isValid
    isValid = checkLenght(password, 3, 15) && isValid
    isValid = CheckPassword(password, password2) && isValid

    if (isValid) {
        const dados = {
            usuarioNome: username.value,
            usuarioEmail: email.value,
            usuarioSenha: password.value
        }
        console.log(dados)

        //muda de pagina para home
        window.location.href = "./pages/home.html"
    }




})