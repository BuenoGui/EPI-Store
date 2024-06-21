$(document).ready (function() {
    let Carrinho = [];
    let Linhas = "";
    let PrecoTotal = 0

        $('#produtos button').click( function() {

            AtualizarTotal($(this));
            AtualizarTabela();
        })

    function AtualizarTabela () {
        const corpoCarrinho = document.querySelector(".tabela-itens")
        corpoCarrinho.innerHTML = Linhas;
    }

    function AtualizarTotal (button) {

    const ItemEscolhido = button.parent().find('h3').text();
    const PrecoEscolhido = button.parent().find('#valor').text().replace(",",".");
    const FotoEscolhida = button.parent().find('img').attr('src');

        let Item = '<div class= "item-container">';
        Item += `<img src="${FotoEscolhida}">`
        Item += '<div class="cart-item">'
        Item += `<strong>${ItemEscolhido}</strong>`
        Item += `<h3>R$ ${PrecoEscolhido}</h3>`
        Item += '</div>'
        Item += '</div>'

        Linhas += Item
        Carrinho += ItemEscolhido

        if(Carrinho.includes(ItemEscolhido.value)) {
            
        }
    
    let PrecoNum = parseFloat(PrecoEscolhido);
    PrecoTotal += PrecoNum

    const Total = document.getElementById("total")
    Total.innerHTML = `Total: R$ ${PrecoTotal.toFixed(2).replace(".",",")}`
    

    console.log(Carrinho)

    }


})