function validarFormulario(){
    const titleRegex = /^[a-zA-Z\s]+$/;
    const produtorRegex = /^[a-zA-Z\s]+$/;

    const title = document.getElementById("title").value; 
    const produtor = document.getElementById("produtor").value; 

    if(!titleRegex.test(title)){
        alert("Título inválido. Use apenas letras e espaços.");
        return false;
    }

    if(!produtorRegex.test(produtor)){
        alert("Nome do produtor inválido. Use apenas letras e espaços.");
        return false;
    }

    return true;
}