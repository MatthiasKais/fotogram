const openImgRef = document.getElementById("openImg");
let currentIndex = 0; 

let myImagesNames = [
    'brightfreak-stockholm-3897532',
    'detait-fruit-8773085',
    'jackmac34-portugal-3561087',
    'jungr-death-valley-2314018',
    'loggawiggler-badwater-4546',
    'makalu-latvia-3725548',
    'manniguttenberger-monument-valley-5499156',
    'oljamu-yosemite-8177850',
    'qimono-buddha-5410319',
    'viarami-traffic-7033509',
    'walkerssk-yosemite-valley-2053308',
    'salofoto-dog-10187835'
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
    console.log("Clicked image index:", index);
    currentIndex = index;
    openImgRef.showModal();
    renderDialog(index);
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
    return `<img class="single-image" onclick="openDialog(${index})" src="${myImages[index]}" alt="${myImagesNames[index]}">`;
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
    return `<p> ${myImagesNames[index]} </p>`;

};

function filterButtonRight(index) {
    console.log(index)
    index +=1;
    console.log(index)
    if (index > 11)
        index = 0;
    else
        index = index
    currentIndex = index;
    renderDialog(index);
    return currentIndex;
};

function filterButtonLeft(index) {
    index -=1;
    if (index < 0)
        index = 11;
    else 
        index = index
    currentIndex = index;
    renderDialog(index);
    return index;
};





