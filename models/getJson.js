// import fonction fs
const fs = require('fs');
const { lessons, student } = require('../db');

//get les infos demander dans la BDD.json
//export 
function getInfosAboutJSON(params){

    //recuperation du fichier 
    let BDD = fs.readFileSync('./BDD.json');

    //recuperation du contenue du json
    let Listes = JSON.parse(BDD);


    //choix de la partit a renvoyer 
    switch (params) {
        case "parents":
            console.log("parents")

            //on recupere la bonne partit avant le return
            let parents  = Listes.parents  ;
            return parents ;

            break;
        case "child":
            console.log("child")

            //on recupere la bonne partit avant le return
            let child    = Listes.child    ;
            return child ;

            break;
        case "lessons":
            console.log("lessons")

            //on recupere la bonne partit avant le return
            let lessons  = Listes.lessons  ;
            return lessons ;

            break;
        case "teachers":
            console.log("teachers")

            //on recupere la bonne partit avant le return
            let teachers = Listes.teachers ;
            return teachers ;

            break;
    
        default:
            console.log("erreur mauvaise syntaxe")
            break;
    }

    //returne de secu
    return params ;
}

//return la meme chose que getInfosAbout mais dans une map avec un tableau
function getInfosAboutMAP(params) {

    switch (params) {
        case "parents":
            console.log("parents")

            return parents ;
            break;
        case "child":
            console.log("child")

            return child ;

            break;
        case "lessons":
            console.log("lessons")

            ToMap(getInfosAboutJSON(params))

            return lessons ;

            break;
        case "teachers":
            console.log("teachers")

            return teachers ;

            break;
    
        default:
            console.log("erreur mauvaise syntaxe")
            break;
    }


    return " plouf ";
}

function ToMap(params) {
    console.log(params.length)
    for (let index = 0; index < array.length; index++) {
        const element = array[index]; 
    }
    
}



function getAStudent(student_id) {
    the_student = getInfosAboutJSON("child").find(element => element.id == student_id);
    console.log(the_student);
    return(the_student);
}






// console.log("\n \n \n \n");

// console.log(getInfosAboutJSON("lessons"));

// console.log("\n \n \n \n");
module.exports = getInfosAboutJSON("child");