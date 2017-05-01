$(document).ready(function() {

            const characters = [];
            const genders = [];
            const teams = [];
            const avengers = [];
            const xMen = [];
            const guardians = [];


            // const myXMen = () => {
            //     for(let i = 0; i < myXMen.length; i++) {
            //         if();
            //     }
            // }


            // const myAvengers = () => {
            //     for(let i = 0; i < myAvengers.length; i++) {
            //         if();
            //     }
            // }


            // const myGuardians = () => {
            //     for(let i = 0; i < myGuardians.length; i++) {
            //         if();
            //     }
            // }

            


            // my Write To Dom function 
            const writeToDom = (superHeroArray) => {
                const domString = "";
                for(let i = 0; i < superHeroArray.length; i++) {}
                let selectedTeam = superHeroArray;
                teams.forEach((currentTeam) => {
                    domString += `<p>${teams.name}</p>`; 
                    if (currentTeam.name === selectedTeam.id) {
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
                $(".output").html(domString);
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
                // xhrCall.forEach((teams) => {
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
                console.log("characters", data2);
                return gendersJSON
            }).then((data3) => {
                genders = data3;
                console.log(data3);

            }).catch((error1) => {

            });
            $("#avengers").click((a) => {
                charactersJSON(avengers);
                console.log("avengers", avengers);
                writeToDom(a.target.id);
            });
            $("#xmen").click((x) => {
                charactersJSON(xmen);
                console.log("xmen", xmen);
                writeToDom(x.target.id);
            });
            $("#guardians").click((g) => {
                charactersJSON(guardians);
                console.log("guardians", guardians);
                writeToDom(g.target.id);
            });

        });











































