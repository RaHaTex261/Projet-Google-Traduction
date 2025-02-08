// miantso an'ilay select ao @ html
const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),

selectTag.forEach ((tag, id) => {
    for (const country_code in countries) {
        // selecte default lang EN à HINDI
        let selected;
        if(id ==  0 && country_code == "en-GB"){
            selected = "selected";
        } else if(id ==  1 && country_code == "hi-IN"){
            selected = "selected";
        }
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`; //ilay option io bataina avy ao @ html
        tag.insertAdjcentHTML("beforeend", option); //ajouter une balise d'option à l'intérieur de la balise de sélection
    }
});