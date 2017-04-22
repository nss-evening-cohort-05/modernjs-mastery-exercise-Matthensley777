$(document).ready(function() {

            const characters = [];
            const genders = [];
            const teams = [];

            //loop for each json file and write to dom function, I think I"m going to re-write this with for loops
            const writeToDom = (userSelectedTeam) => {
                const domString = "";
                let selectedTeam = userSelectedTeam;
                teams.forEach((currentTeam) => {
                    if (currentTeam.name === selectedTeam) {
                        console.log("currentTeam", currentTeam.name);
                        characters.forEach((currentCharacters) => {
                            if (currentCharacters.team_id === currentTeam.id) {
                                console.log("currentCharacters", currentCharacters.name);
                                genders.forEach((currentGender) => {
                                    if (currentGender.type === currentCharacters.gender_id) {
                                    	 console.log("currentGender", currentGender);

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
                    }).fail((error3) => {
                        reject(error3);
                    });
                });
            };

            teamsJSON().then((data1) => {
                teams = data1;
                console.log("teams", teams);
                return charactersJSON();
            }).then((data2) => {
                characters = data2;
                console.log("characters", characters);
                return gendersJSON
            }).then((data3) => {
                genders = data3;

            }).catch((error1) => {

            });
            $("#avengers").click((e) => {
                charactersJSON();
                console.log("avengers", avengers);
                writeToDom(e.target.id);
            });
            $("#xmen").click((e) => {
                teamsJSON();
                console.log("xmen", xmen);
                writeToDom(e.target.id);
            });
            $("#guardians").click((e) => {
                teamsJSON();
                console.log("guardians", guardians)
                writeToDom(e.target.id);
            });
        });











































