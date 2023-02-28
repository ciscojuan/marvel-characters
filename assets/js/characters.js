"1+privada+publica";
ts = 1;
pk = "c13d19c05231a50bcea5c844f09b960e";
pik = "af4aa873e8f4766178d0e99cdfa80f6a18e7eb46";
hash = "317049953472af01ff9dd92b48639551";
apiKey = "c13d19c05231a50bcea5c844f09b960e";

url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;


const marvel = {
    render: () => {
        const marvewlContainer = document.querySelector('.marvel-cards')
        let contentHTML = ''

      fetch(url)
        .then(res => res.json())
        .then((json) => {
          for(const hero of json.data.results){
            let urlHero = hero.urls[0].url;
            contentHTML += `
            <div class="card">
                <a href="${urlHero}" target="_blank" rel="noopener noreferrer">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="card-thumbnail">
                </a>
                <h3>Nombre: ${hero.name}</h3>
            </div>`
            marvewlContainer.innerHTML = contentHTML
          }
        })
    }
  };
  marvel.render();