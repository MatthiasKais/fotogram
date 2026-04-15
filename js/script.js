const openImgRef = document.getElementById("openImg");
const dialog = document.querySelector("dialog");
let currentIndex = 0;
let imgNumber = 0;

let myImagesNames = [
    'brightfreak-stockholm',
    'detait-fruit',
    'jackmac34-portugal',
    'jungr-death-valley',
    'loggawiggler-badwater',
    'makalu-latvia',
    'monument-valley',
    'oljamu-yosemite',
    'qimono-buddha',
    'viarami-traffic',
    'yosemite-valley',
    'salofoto-dog'
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
];

function openDialog(index) {
    currentIndex = index;
    openImgRef.showModal();
    renderDialog(index);
    displayImgNumber(index);
};

function closeDialog(){
    openImgRef.close();
};

function render() {
    let contentRef = document.getElementById('content');
    for (let index = 0; index < myImages.length; index++) {
         contentRef.innerHTML += getNoteTemplate(index);
    }
};

function getNoteTemplate(index) {
    return `<img class="single-image" onclick="openDialog(${index})" src="${myImages[index]}" alt="${myImagesNames[index]}" tabindex="0">`;
};

function renderDialog(index){
    let dialogRef = document.getElementById('dialogContent');
    let dialogImgName = document.getElementById('dialogImgName');
    dialogRef.innerHTML = ""; // Empties the dialog -> Only actual clicked images is showen in the dialog
    dialogImgName.innerHTML = "";
    dialogRef.innerHTML += getDialogTemplateImg(index);
    dialogImgName.innerHTML += getDialogTemplateImgName(index);
};

function getDialogTemplateImg(index) {
    return `<img class="dialog-img" src="${myImages[index]}" alt="${myImagesNames[index]}">`;
};

function getDialogTemplateImgName(index) {
    return `<p> ${myImagesNames[index]}  </p>`;

};

function filterButtonRight(index) {
    index +=1;
    if (index > 11)
        index = 0;
    else
        index = index
    currentIndex = index;
    renderDialog(index);
    displayImgNumber(index);
    return index;
};

function filterButtonLeft(index) {
    index -=1;

    if (index < 0)
        index = 11;
    else 
        index = index
    currentIndex = index;
    renderDialog(index);
    displayImgNumber(index);
    return index;
};

function displayImgNumber(index){
    index +=1; 
    let actualImgNumber = document.getElementById('imgNumberOf');
    actualImgNumber.innerHTML = "";
    actualImgNumber.innerHTML += getTemplateImgNumber(index); 
};

function getTemplateImgNumber(index){
    return `<p> ${index}/12 </p>`

};

dialog.addEventListener("click", (e) => {
  // Only close if the click was directly on the dialog (backdrop)
  if (e.target === e.currentTarget) {
    dialog.close();
  }
});




