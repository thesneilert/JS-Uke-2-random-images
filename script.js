const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
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