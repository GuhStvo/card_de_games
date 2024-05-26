function carregar() {
    fetch("games.json")
        .then(response => response.json())
        .then(games => {
            const container = document.getElementById("jogos-container")
            
            games.map(game => {
                const card = document.createElement("div")
                card.classList.add("card")

                const img = document.createElement("img")
                img.src = game.imagem
                img.alt = game.nome

                const titulo = document.createElement("h3")
                titulo.textContent = game.nome
                
                card.appendChild(img)
                card.appendChild(titulo)
                container.appendChild(card)
            })
        })
}

carregar()