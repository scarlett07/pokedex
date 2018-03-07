// Variables constantes
const form = $('#search-form');
const searcPokemon = $('#search-pkemon');
const $container = $('#container-pokemons');
let nombre = $('#nombre')

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
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
      pokemon += `<li class="col l-4">
                    <figure "col l-4">
                    <img src = ${imagen}>
                    <figcaption>${name}</figcaption>
                    <span><a class="waves-effect waves-light btn modal-trigger" href="#modal1">Leer más</a>${url}</span>
                    </figure>
                  </li>`;
      // console.log(pokemon);
      $container.html(pokemon);

    }
  })
};

// $('a').click(function(){
// 		modal(dataRes);
//   }
//
// function modal(dataRes) {
// 	$("#nombre").text(dataRes.name);
// };

getPkemons();
