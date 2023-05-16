const imagesArray = [
    'img/Germany.jpg',
    'img/Greece.jpg',
    'img/Holland.jpg',
    'img/Italy.jpg',
    'img/Spain.jpg'
];

const description = [
    `                    
        <h1>Germania</h1>
        <p>La Germania è un Paese dell'Europa Occidentale con oltre due millenni di storia e un paesaggio caratterizzato da foreste, fiumi, catene montuose e spiagge affacciate sul Mare del Nord.</p>
    `,
    `                    
        <h1>Grecia</h1>
        <p>La Grecia è famosa in tutto il mondo per la bellezza delle sue isole e delle sue spiagge. Organizza con noi la tua prossima vacanza nelle isole greche!</p>
    `,
    `                    
        <h1>Holland</h1>
        <p>I Paesi Bassi, situati nel nord-ovest dell'Europa, sono conosciuti soprattutto per il paesaggio piatto ricco di canali, campi di tulipani, mulini a vento e piste ciclabili.</p>
    `,
    `                    
        <h1>Italy</h1>
        <p>L'Italia, Paese europeo con una lunga costa sul Mediterraneo, ha lasciato un'impronta profonda sulla cultura e sulla cucina occidentali.</p>
    `,
    `                    
        <h1>Spain</h1>
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

// let up = document.getElementById('scroll-up');

// let item = document.querySelector('.item');

// item.className = 'item no-opacity';



// let noOpacityItem = 0;



// up.addEventListener('click', function(){
//     noOpacityItem -= 1;
// });

// let down = document.getElementById('scroll-down');

// down.addEventListener('click', function () {
//     noOpacityItem += 1;
// });

