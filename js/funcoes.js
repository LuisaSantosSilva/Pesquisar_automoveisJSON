//função de "search" ou pesquisa
$(function () {
    // Captura o evento de envio do formulário com id "Pesquisar"
    $("#Pesquisar").submit(function (event) {
        // Impede o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Obtém os valores dos campos de entrada
        var marca = $("#marca").val();
        var nome = $("#nome").val();

        // Limpa os dados da tabela antes de repopular
        $("#TableData").empty();

        // Obter os dados do arquivo JSON
        $.getJSON("js/automoveis.json", function (data) {
            // Itera sobre os automóveis no JSON
            data['automoveis'].forEach(function (automovel) {
                // Verifica se o automóvel atende aos critérios de pesquisa
                if ((marca === '' || automovel['MARCA'].includes(marca)) &&
                    (nome === '' || automovel['CARRO'].includes(nome))) {
                        
                    // Adiciona uma nova linha à tabela
                    $("#TableData").append("<tr>");

                    // Itera sobre as propriedades do automóvel e adiciona células à tabela
                    for (var prop in automovel) {
                        $("#TableData").append("<td scope='col'>" + automovel[prop] + "</td>");
                    }

                    // Fecha a linha da tabela
                    $("#TableData").append("</tr>");
                }
            });
        });
    });  
});


//função para mostrar os valores de js/automoveis.json na tabela
$(function(){
    $.getJSON("js/automoveis.json", function(data) {
        for(var i = 0; i <  data['automoveis'].length; i++){
            $("#TableData").append("<tr>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
            $("#TableData").append("</tr>");
        }
    });
});

