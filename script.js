document.addEventListener('DOMContentLoaded', function() {
    // Carrega os eventos do JSON
    fetch('eventos.json')
        .then(response => response.json())
        .then(eventos => {
            const eventosGrid = document.getElementById('eventos-grid');
            
            eventos.forEach(evento => {
                const eventoCard = document.createElement('div');
                eventoCard.className = 'evento-card';
                
                eventoCard.innerHTML = `
                    <div class="evento-content">
                        <h3 class="evento-nome">${evento.nome}</h3>
                        <p class="evento-descricao">${evento.descricao}</p>
                    </div>
                `;
                
                eventosGrid.appendChild(eventoCard);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar eventos:', error);
        });

    // Efeito para o botão de call-to-action
    const calloutButton = document.querySelector('.callout-button');
    if (calloutButton) {
        calloutButton.addEventListener('click', () => {
            alert('Vem fazer parte do Trem do Sul! Entre em contato conosco pelos nossos canais!');
        });
    }

    // Animação para o carrossel automático
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        let currentIndex = 0;
        const items = carouselTrack.querySelectorAll('.carousel-item');
        const itemCount = items.length;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % itemCount;
            carouselTrack.scrollTo({
                top: items[currentIndex].offsetTop,
                behavior: 'smooth'
            });
        }, 5000);
    }
});