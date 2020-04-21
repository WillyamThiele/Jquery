/*Construa um algoritmo que recebe dois números e peça ao usuário qual operação ele deseja realizar
 (+, -, * ou /), e de acordo com a opção que ele inserir faça o cálculo e apresente o resultado.*/
$(document).ready(function() {

    $("#btn-mais").click(function(){
        var nub1 = $("#n_01").val();
        var nub2 = $("#n_02").val();
        
        nub1 = parseFloat(nub1);
        nub2 = parseFloat(nub2);
        
        $("#resposta").html("Soma :"+ nub1 + " + " + nub2 + " = "  + ( nub1 + nub2));
    });
    $("#btn-menos").click(function(){
        var nub1 = $("#n_01").val();
        var nub2 = $("#n_02").val();
        
        nub1 = parseFloat(nub1);
        nub2 = parseFloat(nub2);
        
        $("#resposta").html("Subitração :"+ nub1 + " - " + nub2 + " = "  + ( nub1 - nub2));
    });
    $("#btn-dividir").click(function(){
        var nub1 = $("#n_01").val();
        var nub2 = $("#n_02").val();
        
        nub1 = parseFloat(nub1);
        nub2 = parseFloat(nub2);
        
        $("#resposta").html("Divizão :"+ nub1 + " / " + nub2 + " = "  + ( nub1 / nub2));
    });
    $("#btn-mulstiplicar").click(function(){
        var nub1 = $("#n_01").val();
        var nub2 = $("#n_02").val();
        
        nub1 = parseFloat(nub1);
        nub2 = parseFloat(nub2);
        
        $("#resposta").html("Smultiplicação :"+ nub1 + " * " + nub2 + " = "  + ( nub1 * nub2));
    });
});






