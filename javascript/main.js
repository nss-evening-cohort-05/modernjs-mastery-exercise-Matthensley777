$(document).ready(function() {

            const characters = [];
            const genders = [];
            const teams = [];

            
            // const writeToDom = (userSelectedTeam) => {
            //     const domString = "";
            //     for(let i = 0; i < characters.length; i++){
            //         domString += `<p>${characters[i].name}</p>`
            //         console.log("characters", characters);
            //     }
            // }

// <div class="row">
//   <div id="rows" class="col-xs-6 col-md-3">
//     <a href="#" id="charactercards" class="thumbnail">
//       <img src="..." alt="...">
//     </a>
//   </div>
//   ...
// </div>





            // loop for each json file and write to dom function, I think I"m going to re-write this with for loops
            const writeToDom = (userSelectedTeam) => {
                const domString = "";
                let selectedTeam = userSelectedTeam;
                teams.forEach((currentTeam) => {
                    domString += `<p>${teams[i].name}</p>`; 
                    if (currentTeam.name === selectedTeam) {
                        characters.forEach((currentCharacters) => {
                            domString += `<div class="row">`;
                            domString += `<div id="rows" class="col-xs-6 col-md-3">;`
                            domString += `<p>${characters.name}</p>`;
                            domString += `<p>${characters.description}</p>`;
                            domString += `<p>${characters.image}</p>`;
                            domString += `</div></div>`
                            if (currentCharacters.team_id === currentTeam.id) {
                                genders.forEach((currentGender) => {
                                    domString += `<p>${genders.name}</p>`;
                                    if (currentGender.type === currentCharacters.gender_id) {

                                    }
                                });
                            }
                        });
                    }
                });
                $("#output").html(domString);
            };
            //ajax and promise for teams
            const teamsJSON = () => {
                return new Promise((resolve, reject) => {
                    $.ajax("./db/teams.json").done((data1) => {
                        resolve(data1.teams);
                        console.log(data1);
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
                        console.log(data2);
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
                        console.log(data3);
                    }).fail((error3) => {
                        reject(error3);
                    });
                });
            };

    Promise.all([teamsJSON(), charactersJSON(), gendersJSON()])
        .then((results) => {
            console.log(results);
            results.forEach((xhrResult) => {
                // xhrCall.forEach((characters) => {
                    characters.push(characters);

                // });
            });
        });

            teamsJSON().then((data1) => {
                teams = data1;
                // console.log("teams", teams);
                return charactersJSON();
            }).then((data2) => {
                characters = data2;
                console.log("characters", characters);
                return gendersJSON
            }).then((data3) => {
                genders = data3;
                console.log(data3);

            }).catch((error1) => {

            });
            $("#avengers").click((e) => {
                charactersJSON(avengers);
                console.log("avengers", avengers);
                writeToDom(e.target.id);
            });
            $("#xmen").click((e) => {
                charactersJSON(xmen);
                console.log("xmen", xmen);
                writeToDom(e.target.id);
            });
            $("#guardians").click((e) => {
                charactersJSON(guardians);
                console.log("guardians", guardians);
                writeToDom(e.target.id);
            });
        });











































