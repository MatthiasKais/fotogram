

let myImagesNames = [
'brightfreak-stockholm-3897532.jpg',
'detait-fruit-8773085.jpg',,
'jackmac34-portugal-3561087.jpg',
'jungr-death-valley-2314018.jpg',
'loggawiggler-badwater-4546.jpg',
'makalu-latvia-3725548.jpg',
'manniguttenberger-monument-valley-5499156.jpg',
'oljamu-yosemite-8177850.jpg',
'qimono-buddha-5410319.jpg',
'viarami-traffic-7033509.jpg',
'walkerssk-yosemite-valley-2053308.jpg',
'salofoto-dog-10187835.jpg'
];


let myImages = [
    './img/brightfreak-stockholm-3897532.jpg',
    './img/detait-fruit-8773085.jpg',
    './img/jackmac34-portugal-3561087.jpg',
    './img/jungr-death-valley-2314018.jpg',
    './img/loggawiggler-badwater-4546.jpg',
    './img/makalu-latvia-3725548.jpg',
    './img/manniguttenberger-monument-valley-5499156.jpg',
    './img/oljamu-yosemite-8177850.jpg',
    './img/qimono-buddha-5410319.jpg',
    './img/viarami-traffic-7033509.jpg',
    './img/walkerssk-yosemite-valley-2053308.jpg',
    './img/salofoto-dog-10187835.jpg',
]


function render() {
    let contentRef = document.getElementById('content');
    for (let index = 0; index < myImages.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index);
    }
}

function getNoteTemplate(index) {
  return `<img class="single-image" onclick="openModal(${index})" src="${myImages[index]}" alt="${myImagesNames[index]}">`;
}



function openModal(index) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = myImages[index];
  modalImg.alt = myImagesNames[index];
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

