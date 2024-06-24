$(document).ready(function() {
    let Carrinho = {};
    let PrecoTotal = 0;

    $('#produtos button').click(function() {
        AtualizarTotal($(this));
        AtualizarTabela();
    });

    function AtualizarTabela() {
        const corpoCarrinho = document.querySelector(".tabela-itens");
        corpoCarrinho.innerHTML = "";

        for (let item in Carrinho) {
            let itemHtml = '<div class="item-container">';
            itemHtml += `<img src="${Carrinho[item].foto}">`;
            itemHtml += '<div class="cart-item">';
            itemHtml += `<strong>${item}</strong>`;
            itemHtml += `<h3>R$ ${Carrinho[item].preco.toFixed(2).replace(".", ",")}</h3>`;
            itemHtml += `<p>Quantidade: ${Carrinho[item].quantidade}</p>`;
            itemHtml += '</div>';
            itemHtml += '</div>';
            corpoCarrinho.innerHTML += itemHtml;
        }
    }

    function AtualizarTotal(button) {
        const ItemEscolhido = button.parent().find('h3').text();
        const PrecoEscolhido = parseFloat(button.parent().find('#valor').text().replace(",", "."));
        const FotoEscolhida = button.parent().find('img').attr('src');

        if (Carrinho[ItemEscolhido]) {
            Carrinho[ItemEscolhido].quantidade += 1;
        } else {
            Carrinho[ItemEscolhido] = {
                quantidade: 1,
                preco: PrecoEscolhido,
                foto: FotoEscolhida
            };
        }

        PrecoTotal += PrecoEscolhido;
        const Total = document.getElementById("total");
        Total.innerHTML = `Total: R$ ${PrecoTotal.toFixed(2).replace(".", ",")}`;
    }

    //Tudo pra cima é á logica das branchs anteriores mas pensadas do 0 para adicionar a quantidade de itens no carrinho

    function Validar () {
        $('form').validate({
            rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            num: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, me diga seu nome",
            email: "Por favor coloque um email de confirmação",
            num: "Me diga um telefone para contato"
        }
})
    }




    $(".pedido button").click(function(){
        if(Object.keys(Carrinho).length === 0) {
            event.preventDefault();
            alert("Por favor coloque ao menos um item para poder prosseguir");
        } else {
            Validar();
        }


















    })


















})
