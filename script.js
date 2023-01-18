let image_array = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg"
  ];

  function valgfrittNavn(valgfrittElement) {
    let random_index = Math.floor(Math.random() * image_array.length);
    let selected_image = image_array[random_index]
    //se i console hvilket bildet som blir vist
    console.log(selected_image)

    valgfrittElement.innerHTML = `<img src=${selected_image}></img>`;
  }