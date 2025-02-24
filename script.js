// Selecionando todos os botões de seções
const buttons = document.querySelectorAll('.toggle-btn');

// Adicionando evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const section = button.parentElement; // A seção que contém o botão
        const menuItems = section.querySelector('.menu-items'); // A lista de itens da seção
        
        // Alternando a visibilidade da lista de itens
        if (menuItems.style.display === 'block') {
            menuItems.style.display = 'none'; // Fecha a seção
        } else {
            menuItems.style.display = 'block'; // Abre a seção
        }
    });
});
