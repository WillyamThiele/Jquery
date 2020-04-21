$(document).ready(function() {
    

    $("#btn-comp").click(function(){

        var nub1 = $("#n_01").val();
        var nub2 = $("#n_02").val();
        nub1 = parseFloat(nub1);
        nub2 = parseFloat(nub2);

        if(nub1 > nub2)
                {$("#resposta").html("o numero é "+ nub1 +' é maior que '+ nub2);}
        else
            if (nub1 === nub2)
                {  $("#resposta").html("são iguais");}
        else
                { $("#resposta").html("o numero é "+ nub1 +' é menor que '+ nub2);}
        
    });
    
});








