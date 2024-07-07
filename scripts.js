document.addEventListener('DOMContentLoaded', function() {
    fetch('articles.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const listings = data.trim().split('\n').map(line => {
                const [id, details] = line.split(': ');
                const [title, object, size, price] = details.split(',');
                return { id, title, object, size, price };
            });

            const listingsContainer = document.getElementById('listings');

            listings.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'item';

                itemElement.innerHTML = `
                    <img src="images/${item.id}.jpg" alt="${item.title}" style="width:100%">
                    <h3><a href="article.html?id=${item.id}">${item.title}</a></h3>
                    <p>Objet: ${item.object}</p>
                    <p>Taille: ${item.size}</p>
                    <p>Prix: ${item.price}€</p>
                `;

                listingsContainer.appendChild(itemElement);
            });
        })
        .catch(error => console.error('Error loading articles:', error));
});
