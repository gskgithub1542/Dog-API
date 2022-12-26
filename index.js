function renderImage() {
  const dogImageDiv = document.getElementById("dogImage");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      dogImageDiv.innerHTML = `<img src="${json.message}">`;
    });
}
