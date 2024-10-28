function validarFormulario(){
    const nomeRegex = /^[a-zA-Z\s]+$/;
    const cidadeRegex = /^[a-zA-Z\s]+$/;
    const estadoRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;

    
    const nome = document.getElementById("nome").value; 
    const email = document.getElementById("email").value; 
    const cpf = document.getElementById("cpf").value; 
    const cidade = document.getElementById("cidade").value; 
    const estado = document.getElementById("estado").value; 

    if(!nomeRegex.test(nome)){
        alert("Nome inválido. Use apenas letras e espaços.");
        return false;
    }

    if(!cidadeRegex.test(cidade)){
        alert("Cidade inválida. Insira uma cidade Válida.");
        return false;
    }

    if(!estadoRegex.test(estado)){
        alert("Estado inválido. Insira um estado válido.");
        return false;
    }

    if (!emailRegex.test(email)){
        alert("E-mail inválido. Insira um e-mail válido.")
        return false;
    }

    if (!cpfRegex.test(cpf)){
        alert("CPF inválido, insira um CPF válido.")
        return false;
    }

    return true;
}