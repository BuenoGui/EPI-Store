$(document).ready (function() {
    let Carrinho = [];
    let Linhas = "";

        $('#produtos button').click( function() {

            AdicionarItem($(this));
            AtualizarTabela();

        })

        function AdicionarItem(button) {

            const ItemEscolhido = button.parent().find('h3').text();
            const PrecoEscolhido = button.parent().find('strong').text();
            const FotoEscolhida = button.parent().find('img').attr('src');
    
            let Item = '<div class"item-container" style="display: flex;">';
            Item += `<img src="${FotoEscolhida}">`
            Item += '<div class="cart-item">'
            Item += `<strong>${ItemEscolhido}</strong>`
            Item += `<h3>R$ ${PrecoEscolhido}</h3>`
            Item += '</div>'
            Item += '</div>'

            Linhas += Item
        }

    function AtualizarTabela () {
        const corpoCarrinho = document.querySelector(".tabela-itens")
        corpoCarrinho.innerHTML = Linhas;
    }

    function AtualizarTotal () {
        
    }
})