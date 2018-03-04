const form = $('#search-form');
const searcPokemon = $('#search-pkemon');
const $container = $('#container-pokemons');
//
// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   responseContainer.innerHTML = '';
//   searchedForText = searchFile.value;
//   getNews();
// });


function getPkemons() {
  $.ajax({
      url: `https://pokeapi.co/api/v2/pokedex/1/`
    }).done(drawPokemon)
    .fail(hanleError);
};

function hanleError() {
  console.log('Se ha presentado un error');
};

function drawPokemon(data) {
  const pokemons = data.pokemon_entries;
  console.log(pokemons);
  let pokemon = ' ';
  pokemons.forEach(function(element, index) {
    if (index < 25) {
      let name = element.pokemon_species.name;
      let url = element.pokemon_species.url;
      const imagen = 'https://dummyimage.com/150x150';
      pokemon += `<li>
                    <figure>
                    <img src = ${imagen}>
                    <figcaption>${name}</figcaption>
                    <span>${url}</span>
                    </figure>
                  </li>`;
       console.log(pokemon);
      $container.html(pokemon);
    //  alert('sa')
    }
  })
}

getPkemons();
