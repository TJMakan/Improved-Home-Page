var Carousel;


Carousel = ['https://i.natgeofe.com/n/29409031-6aac-47be-8c7c-680b72d85dda/map-garden-route-road-trip.jpg?w=2048&h=1638', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehLfWb6doesftJjtWgW5BVytO46jZf-ro9g&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRiTKjayvDqg7Wh0FNCXEDNnhJCi-u4fKpA&s'];
let element_image_display = document.getElementById('image-display');
element_image_display.setAttribute("src", Carousel[0]);


document.getElementById('prev-btn').addEventListener('click', (event) => {
  let element_image_display2 = document.getElementById('image-display');
  Carousel.unshift(Carousel.pop());
  element_image_display2.setAttribute("src", Carousel.slice(-1)[0]);

});

document.getElementById('next-btn').addEventListener('click', (event) => {
  let element_image_display3 = document.getElementById('image-display');
  Carousel.unshift(Carousel.pop());
  element_image_display3.setAttribute("src", Carousel[0]);

});
