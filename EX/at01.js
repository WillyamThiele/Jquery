$(document).ready(function() {
    $("h1").html ('teste....');

    $("#email").val("estes@gmail.com");

    $("#btn-salvar").click(function(){
        var email =$('#enail').var();
        var nome =$('#nome').var();


            $('#resultado').html(' ');("o nome do usuario é " + nome + " o Imeal é " + email);
    });
    
});