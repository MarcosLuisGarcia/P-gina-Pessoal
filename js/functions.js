// Aguarda o carregamento completo da página antes de executar a função
window.addEventListener('load', () => {

    // Seleciona a imagem de perfil dentro da classe 'picture' e armazena na variável imgFoto
    const imgFoto = document.querySelector('.picture img');

    // Move a imagem para a posição original (da esquerda) e torna visível
    imgFoto.style.left = '0';
    imgFoto.style.opacity = '1';

    // Seleciona o título H1 da bio
    const h1 = document.querySelector('.bio h1');

    // Move o H1 para a posição original (da direita) e torna visível
    h1.style.right = '0';
    h1.style.opacity = '1';

    // Seleciona o subtítulo H2 da bio
    const h2 = document.querySelector('.bio h2');

    // Move o H2 para a posição original e torna visível
    h2.style.right = '0';
    h2.style.opacity = '1';

    // Seleciona todos os parágrafos dentro da bio
    document.querySelectorAll('.bio p').forEach(p => {
        // Para cada parágrafo, move para a posição original e torna visível
        p.style.right = '0';
        p.style.opacity = '1';
    });

    // Seleciona todos os links (<a>) dentro da bio (como os ícones)
    document.querySelectorAll('.bio a').forEach(a => {
        // Para cada link, move para a posição original e torna visível
        a.style.right = '0';
        a.style.opacity = '1';
    });

    // Seleciona todos os ícones (<i>) dentro dos links da bio
    document.querySelectorAll('.bio a i').forEach(i => {
        // Para cada ícone, move para a posição original e torna visível
        i.style.right = '0';
        i.style.opacity = '1';
    });
});

// Seleciona o botão com o id 'btnTopo' que leva ao topo da página
const btnTopo = document.getElementById('btnTopo');

// Adiciona um evento de clique ao botão
btnTopo.addEventListener('click', () => {
    // Quando clicado, a página rola suavemente até o topo (posição 0)
    window.scrollTo({
        top: 0,             // Define a posição vertical da rolagem (0 = topo)
        behavior: 'smooth'  // Define a rolagem como suave, não instantânea
    });
});
            