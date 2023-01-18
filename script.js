const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg"
  ];
  
  const imageContainer = document.getElementById("images");

  function showRandomImage() {
    // Clear previous images
    imageContainer.innerHTML = "";
    let randomIndex = Math.floor(Math.random() * images.length);
    let image = document.createElement("img");
    image.src = images[randomIndex];
    imageContainer.appendChild(image);
  }