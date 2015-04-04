/**
 * Created by Bethoven on 02/04/2015.
 */

function validaFormato(element) {
    var strDocument = (element.value).replace(/\D/g,'');
    var sizeStrDocument = (strDocument).length;
    var RegExp = /(^[\d]{3}[\d]{3}[\d]{3}[\d]{2}$)|(^[\d]{2}[\d]{3}[\d]{3}[\d]{4}[\d]{2}$)/;
    var divResultado = document.getElementById("divResultado");

    if (RegExp.test(strDocument) == true) {
        if (sizeStrDocument == 11 ){
            if (!validaCPF(strDocument)){
                divResultado.innerText = "Este não é um CPF válido!";
                element.select();
                return false;
            }
            else
            {
                divResultado.innerText = "Este é um CPF válido!";
                element.value=mascaraCPF(strDocument);
                return true;
            }
        }
        if (sizeStrDocument == 14){
            if(!validaCNPJ(strDocument)){
                divResultado.innerText = "Este não é um CNPJ válido!";
                element.select();
                return false;
            }
            else {
                divResultado.innerText = "Este é um CNPJ válido!";
                element.value = mascaraCNPJ(strDocument);
                return true;
            }
        }
    } else {
        strDocument == "" ? divResultado.innerText = "" : divResultado.innerText = "'"+strDocument+"' Não tem o formato de um CPF ou um CNPJ válidos!";
        return false;
    }
}

// Função que valida o CPF
function validaCPF(strDocument) {
    var soma;
    var resto;
    soma = 0;

    // Elimina CPF's invalidos conhecidos
    if (strDocument == "00000000000" ||
        strDocument == "11111111111" ||
        strDocument == "22222222222" ||
        strDocument == "33333333333" ||
        strDocument == "44444444444" ||
        strDocument == "55555555555" ||
        strDocument == "66666666666" ||
        strDocument == "77777777777" ||
        strDocument == "88888888888" ||
        strDocument == "99999999999")
    return false;

    for (i = 1; i <= 9; i++) soma = soma + parseInt(strDocument.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strDocument.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(strDocument.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strDocument.substring(10, 11))) return false;
    return true;
}

// Função que valida o CNPJ
function validaCNPJ(CNPJ) {
    var validaArray = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    var primeiroDigito = new Number;
    var segundoDigito = new Number;
    var digito = Number(eval(CNPJ.charAt(12)+CNPJ.charAt(13)));

    for(i = 0; i<validaArray.length; i++){
        primeiroDigito += (i>0? (CNPJ.charAt(i-1)*validaArray[i]):0);
        segundoDigito += CNPJ.charAt(i)*validaArray[i];
    }
    primeiroDigito = (((primeiroDigito%11)<2)? 0:(11-(primeiroDigito%11)));
    segundoDigito = (((segundoDigito%11)<2)? 0:(11-(segundoDigito%11)));

    resultado = (((primeiroDigito*10)+segundoDigito)) == digito ? true : false;
    return resultado;
}

// Função de mascara para o CPF
function mascaraCPF(CPF){
    return CPF.substring(0,3)+"."+CPF.substring(3,6)+"."+CPF.substring(6,9)+"-"+CPF.substring(9,11);
}

//	Função de mascara para o CNPJ
function mascaraCNPJ(CNPJ){
    return CNPJ.substring(0,2)+"."+CNPJ.substring(2,5)+"."+CNPJ.substring(5,8)+"/"+CNPJ.substring(8,12)+"-"+CNPJ.substring(12,14);
}

// Função que bloqueia teclas não numéricas
function apenasNumeros(e)
{
    if (document.all){var evt=event.keyCode;}
    else{var evt = e.charCode;}
    if (evt <20 || (evt >47 && evt<58)){return true;}
    return false;
}