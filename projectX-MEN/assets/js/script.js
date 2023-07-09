const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    removeCharacterSelected();
    character.classList.add("selected");

    changeImgCharacterSelected(character);

    changeNameCharacterSelected(character);

    changeDescriptionCharacterSelected(character);

  });
});


function changeDescriptionCharacterSelected(character) {
  const characterDescription = document.getElementById("character-description");
  characterDescription.innerText = character.getAttribute("data-description");
}

function changeNameCharacterSelected(character) {
  const characterName = document.getElementById("character-name");
  characterName.innerText = character.getAttribute("data-name");
}

function changeImgCharacterSelected(character) {
  const imgBigCharacter = document.querySelector(".big-character");
  const idCharacter = character.attributes.id.value;
  imgBigCharacter.src = `./assets/imagens/card-${idCharacter}.png`;
}

function removeCharacterSelected() {
  const characterSelected = document.querySelector(".selected");
  characterSelected.classList.remove("selected");
}

