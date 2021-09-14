const images = [
    'images/1.jpg',
    'images/a.jpg',
    'images/b.jpg',
    'images/c.jpg',
    'images/d.jpg',
    'images/2.jpg',
];
let imgIndex = 0;
const index = document.getElementById('image-slide');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    index.setAttribute('src', imgUrl)
    imgIndex++;
}, 1000)