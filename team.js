const teamMembers = [
  {
    name: "Rosa",
    surname: "del Río",
    age: "25",
    city: "Murcia",
    hobby: "  ",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Zelda",
    favoriteFilm: "Pesadilla antes de navidad",
    favoriteBook: "Marina",
    petName: "Loki",
  },
  {
    name: "Jeizer",
    surname: "Valarezo",
    age: "19",
    city: "Pamplona",
    hobby: "Chess",
    favoriteFood: "Caesar salad",
    favoriteVideoGame: "League Of Legends",
    favoriteFilm: "Cars",
    favoriteBook: "El perfume",
    petName: "nakel",
  },
  {
    name: "Miguel",
    surname: "Morón",
    age: "23",
    city: "Sevilla",
    hobby: "Programar  ",
    favoriteFood: "Macarrones",
    favoriteVideoGame: "League Of Legends",
    favoriteFilm: "Saw",
    favoriteBook: "Teo va al cole",
    petName: ""
  }

];

function juegaLol(teamMembers){
let jugadores=[];
teamMembers.forEach(persona => {
  if(persona.favoriteVideoGame == ("League Of Legends")){
    jugadores.push(persona.name + " " + persona.surname)
  };
});

return jugadores;
}

console.log(juegaLol(teamMembers));