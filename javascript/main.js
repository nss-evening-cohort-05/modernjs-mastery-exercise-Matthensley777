$(document).ready(function() {

    // let characters = [];
    // let genders = [];
    // let teams = [];
    // let avengers = "";
    // let xMen = "";
    // let guardians = "";
    // let superHeroArray = "";


    // my Write To Dom function 
    const writeToDom = (superHeroArray, teamId) => {
        let domString = "";
        for (let g = 0; g < superHeroArray.length; g++) {
            if(superHeroArray[g].team_id === teamId){
                console.log(superHeroArray[g]);
                // domString += `<div class="row">`;
                domString += `<div id="rows" class="col-xs-6 col-md-3">;`
                domString += `<h4>${superHeroArray[g].name}</h4>`;
                domString += `<p>${superHeroArray[g].description}</p>`;
                domString += `<img ${superHeroArray[g].image}>`;
                domString += `</div></div>`

            }
        }

        
        $(".output").html(domString);

    }





    //ajax and promise for teams
    const teamsJSON = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/teams.json").done((data1) => {
                resolve(data1.teams);
                // console.log("teamsJSON", data1);
            }).fail((error1) => {
                reject(error1);
            });
        });
    };
    //ajax and promise for characters
    const charactersJSON = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/characters.json").done((data2) => {
                resolve(data2.characters);
                // console.log("charactersJSON", data2);
            }).fail((error2) => {
                reject(error2);
            });
        });
    };
    //ajax and promise for gender
    const gendersJSON = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/genders.json").done((data3) => {
                resolve(data3.genders);
                // console.log("gendersJSON", data3);
            }).fail((error3) => {
                reject(error3);
            });
        });
    };

    const dataGetter = (teamId) => {
        Promise.all([teamsJSON(), charactersJSON(), gendersJSON()])
            .then((results) => {
                console.log(results);
                let characters = results[1];
                let teams = results[0];
                let genders = results[2];
                
                characters.forEach((character) => {
                    teams.forEach((team) => {
                        genders.forEach((gender) => {
                            if(character.team_id === team.id){
                                character.team_name = team.name;
                            }

                            if(character.gender_id === gender.id){
                                character.gender_name = gender.type;
                            }
                            if(character.description === ""  && character.gender_name === "Male"){
                                character.description = "1234567890";
                            }
                             if(character.description === ""  && character.gender_name === "Female"){
                                character.description = "abcde fghij klmno pqrst uvwxy z";
                            }
                        })
                    }) 
               })
                console.log("characters", characters); 
            writeToDom(characters, teamId);

            });

        };

 
    $("#avengers").click((a) => {
        dataGetter(1);
    });
    $("#xmen").click((x) => {
        dataGetter(0);
    });
    $("#guardians").click((g) => {
        dataGetter(2);
    });

});





































