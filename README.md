# Validação e mascara de CPF e CNPJ no mesmo campo com Javascript

Código Javascript para validação e mascara de CPF e CNPJ, código atualizado incluindo os novos CPFs que estão surgindo.
Incluindo também código de bloqueio de teclas não numéricas.

# Instalação
  Faça a chamada do arquivo .js conforme abaixo:
  
    <script src="valida-documento.js"></script>

# Utilização

Inclua no seu input o onBlur conforme abaixo para a validação e mascara:

  `onBlur="validaFormato(this);"`

Inclua o onkeypress conforme abaixo para bloquear as teclas não numércias:
  
  `onkeypress="return (apenasNumeros(event))"`
 
 
 


