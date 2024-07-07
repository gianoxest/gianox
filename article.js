document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    if (articleId) {
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

                const article = listings.find(item => item.id === articleId);

                if (article) {
                    const articleDetails = document.getElementById('article-details');

                    articleDetails.innerHTML = `
                        <div class="article-detail">
                            <img src="images/${article.id}.jpg" alt="${article.title}">
                            <div class="article-info">
                                <h2>${article.title}</h2>
                                <ul>
                                    <li><strong>Objet:</strong> <em>${article.object}</em></li>
                                    <li><strong>Taille:</strong> <em>${article.size}</em></li>
                                    <li><strong>Prix:</strong> <em>${article.price}€</em></li>
                                </ul>
                                <button>Acheter</button>
                            </div>
                        </div>
                    `;
                } else {
                    const articleDetails = document.getElementById('article-details');
                    articleDetails.innerHTML = `<p>Article non trouvé.</p>`;
                }
            })
            .catch(error => console.error('Error loading article:', error));
    } else {
        const articleDetails = document.getElementById('article-details');
        articleDetails.innerHTML = `<p>Article non spécifié.</p>`;
    }
});
