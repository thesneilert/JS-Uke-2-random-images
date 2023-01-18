let image_array = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg"
  ];

  function valgfrittNavn() {
    let random_index = math.floor(math.random() * image_array.length);

    let selected_image = image_array[random_index]

    document.getElementById("random").src = `./img/$(selected_image)`;
  }

