async function getDogImage() {
  const response = await fetch(
    "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"
  );
  const data = await response.json();
  const imageElement = document.createElement("img");
  imageElement.src = data.message;
  imageElement.alt = "random dog picture";
  document.getElementById("img-container").appendChild(imageElement);
  console.log(data);
}

getDogImage();

/* fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    const imageElement = document.createElement("img");
    imageElement.src = data.message;
    imageElement.alt = "random dog picture";
    document.getElementById("img-container").appendChild(imageElement);
  });
*/
const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

// promise.then(response => console.log(response))

try {
  const response = await promise;
  console.log(response);
} catch (err) {
  console.log(err);
}
