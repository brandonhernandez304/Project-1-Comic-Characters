////BASEURL////
// URLhttps://superheroapi.com/api/access-token
// access token = 5365844290201681
/////////////////////
//VARIABLES
/////////////////////
const URL = "https://www.superheroapi.com/api.php/5365844290201681/search/"

console.log("https://www.superheroapi.com/api.php/5365844290201681/search/")
/////////////////////
//ELEMENT REFERENCES
/////////////////////
const $name = $('#name')
const $identity = $('#identity');
const $race = $('#race');
const $height = $('#height')
const $weight = $('#weight')
const $groupAffiliation = $('#group-affiliation')
const $input = $('input[type=text]');
const $mainContent = $('main');
const $photo = $('#photo');
const $intelligence = $('#intelligence');
const $strength = $('#strength')
const $speed = $('#speed')
const $durability = $('#durability')
const $power = $('#power')
const $combat = $('#combat');
const $form = $('form')
const $stats = $('.stats')
const $bio = $('.bio')
/////////////////////
//EVENT LISTENERS
////////////////////
$form.on('submit', handleGetData)
/////////////////////
//FUNCTIONS
/////////////////////
function handleGetData(event) {
    $stats.show()
    $bio.show()
    $photo.show()
    event.preventDefault()
    userInput = $input.val()
    //if there is nothing in the submission, return nothing
    if (userInput === '') return;

    $.ajax(URL + userInput).then(
        function (data) {
            console.log("character is ready");
            console.log(data);
            $photo.attr('src', data.results[0].image["url"])
            $name.text(`Hero/Villain Name: ${data.results[0].name}`);
            $identity.text(data.results[0].biography["full-name"]);
            $race.text(data.results[0].appearance.race);
            $height.text(data.results[0].appearance.height[0]);
            $weight.text(data.results[0].appearance.weight[0]);
            $groupAffiliation.text(data.results[0].connections["group-affiliation"]);
            $intelligence.text(data.results[0].powerstats.intelligence);
            $strength.text(data.results[0].powerstats.strength);
            $speed.text(data.results[0].powerstats.speed);
            $durability.text(data.results[0].powerstats.durability);
            $power.text(data.results[0].powerstats.power);
            $combat.text(data.results[0].powerstats.combat);
            //make submission box blank after entering
            $input.val('')
        },
        function (error) {
            console.log("we broke it");
            console.log(error);
        }
    );


}

