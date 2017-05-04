$(document).ready(function() {

    let characters = [];
    let genders = [];
    let teams = [];
    let avengers = [];
    let xMen = [];
    let guardians = [];


    // my Write To Dom function 
    const writeToDom = (superHeroArray) => {
        let domString = "";
        for (let g = 0; g < superHeroArray.length; g++) {
            domString += `<div class="row">`;
            domString += `<div id="rows" class="col-xs-6 col-md-3">;`
            domString += `<h4>${superHeroArray[g].name}</h4>`;
            domString += `<p>${superHeroArray[g].description}</p>`;
            domString += `<p>${superHeroArray[g].image}</p>`;
            domString += `</div></div>`
            

        }

        const myXMen = () => {
            for (let i = 0; i < myXMen.length; i++) {
                if (superHeroArray[g].team_id === 0) {
                    xMen.push(superHeroArray[i]);
                }
            }
            writeToDom(myXMen);
        }


        const myAvengers = () => {
            for (let j = 0; j < myAvengers.length; j++) {
                if (superHeroArray[g].team_id === 1) {
                    avengers.push(superHeroArray[j]);
                }
            }
            writeToDom(myAvengers);
        }


        const myGuardians = () => {
            for (let k = 0; k < myGuardians.length; l++) {
                if (superHeroArray[g].team_id === 2) {
                    guardians.push(superHeroArray[k]);
                }
            }
            writeToDom(myGuardians);
        }
        $(".output").html(domString);

    }





    //ajax and promise for teams
    const teamsJSON = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/teams.json").done((data1) => {
                resolve(data1.teams);
                console.log("teamsJSON", data1);
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
                console.log("charactersJSON", data2);
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
                console.log("gendersJSON", data3);
            }).fail((error3) => {
                reject(error3);
            });
        });
    };

    Promise.all([teamsJSON(), charactersJSON(), gendersJSON()])
        .then((results) => {
            // console.log(results);
            results.forEach((xhrResult) => {
                // xhrCall.forEach((teams) => {
                characters.push(characters);

                });
            });
        // });

    teamsJSON().then((data1) => {
        teams = data1;
        // console.log("teams", teams);
        return charactersJSON();
    }).then((data2) => {
        characters = data2;
        // console.log("characters", data2);
        return gendersJSON
    }).then((data3) => {
        genders = data3;
        // console.log(data3);

    }).catch((error1) => {

    });
    $("#avengers").click((a) => {
        charactersJSON(avengers);
        console.log("avengers", avengers);
        writeToDom(a.target.id);
    });
    $("#xmen").click((x) => {
        charactersJSON(xMen);
        console.log("xMen", xMen);
        writeToDom(x.target.id);
    });
    $("#guardians").click((g) => {
        charactersJSON(guardians);
        console.log("guardians", guardians);
        writeToDom(g.target.id);
    });

});




































