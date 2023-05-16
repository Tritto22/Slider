const imagesArray = [
    'img/Germany.jpg',
    'img/Greece.jpg',
    'img/Holland.jpg',
    'img/Italy.jpg',
    'img/Spain.jpg'
];

const description = [
    `                    
        <h2>Germania</h2>
        <p>La Germania è un Paese dell'Europa Occidentale con oltre due millenni di storia e un paesaggio caratterizzato da foreste, fiumi, catene montuose e spiagge affacciate sul Mare del Nord.</p>
    `,
    `                    
        <h2>Grecia</h2>
        <p>La Grecia è famosa in tutto il mondo per la bellezza delle sue isole e delle sue spiagge. Organizza con noi la tua prossima vacanza nelle isole greche!</p>
    `,
    `                    
        <h2>Holland</h2>
        <p>I Paesi Bassi, situati nel nord-ovest dell'Europa, sono conosciuti soprattutto per il paesaggio piatto ricco di canali, campi di tulipani, mulini a vento e piste ciclabili.</p>
    `,
    `                    
        <h2>Italy</h2>
        <p>L'Italia, Paese europeo con una lunga costa sul Mediterraneo, ha lasciato un'impronta profonda sulla cultura e sulla cucina occidentali.</p>
    `,
    `                    
        <h2>Spain</h2>
        <p>La Spagna, paese della penisola iberica, comprende 17 comunità autonome con diverse culture e caratteristiche geografiche.</p>
    `,
];

const itemsTitle = [
    'Germany',
    'Greece',
    'Holland',
    'Italy',
    'Spain'
];

let imgItems = '';

for (let i = 0; i < imagesArray.length; i ++ ) {
    imgItems += `
    <div class="img-item disable">
        <img src="${imagesArray[i]}" alt="${itemsTitle[i]}">

        <div class="description">
            ${description[i]}
        </div>
    </div>`;
};

const mainImg = document.querySelector('.main-img');

mainImg.innerHTML = imgItems;

let imgItem = document.querySelector('.img-item');
imgItem.className = 'img-item active';

let imgItemsContainer = '';

for (let i = 0; i < imagesArray.length; i++) {
    imgItemsContainer += `
    <div class="item opacity">
        <img src="${imagesArray[i]}" alt="${itemsTitle[i]}">
    </div>`;
};

const itemsContainer = document.querySelector('.items-container');

itemsContainer.innerHTML += imgItemsContainer;

let up = document.getElementById('scroll-up');

let down = document.getElementById('scroll-down');

let opacityItem = document.getElementsByClassName('item');

let activeImgItem = document.getElementsByClassName('img-item');

let item = 0;

opacityItem[item].className = 'item no-opacity border';

up.addEventListener('click', function(){
    opacityItem[item].className = 'item opacity';
    activeImgItem[item].className = 'img-item disable'

    item --;
    if (item < 0) {
        item = opacityItem.length - 1;
    };

    opacityItem[item].className = 'item no-opacity border';
    activeImgItem[item].className = 'img-item active'

});


down.addEventListener('click', function () {
    opacityItem[item].className = 'item opacity';
    activeImgItem[item].className = 'img-item disable'

    item ++;
    if (item >= opacityItem.length) {
        item = 0;
    }

    opacityItem[item].className = 'item no-opacity border';
    activeImgItem[item].className = 'img-item active'

});





