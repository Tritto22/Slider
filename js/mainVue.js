const app = new Vue({
    el: '#root',
    data:{
        imagesArray: [
            {
                title: 'Germany',
                description: 'La Germania è un Paese dell\'Europa Occidentale con oltre due millenni di storia e un paesaggio caratterizzato da foreste, fiumi, catene montuose e spiagge affacciate sul Mare del Nord.',
                path: 'img/Germany.jpg'
            },
            {
                title: 'Greece',
                description: 'La Grecia è famosa in tutto il mondo per la bellezza delle sue isole e delle sue spiagge. Organizza con noi la tua prossima vacanza nelle isole greche!',
                path: 'img/Greece.jpg'
            },
            {
                title: 'Holland',
                description: 'I Paesi Bassi, situati nel nord-ovest dell\'Europa, sono conosciuti soprattutto per il paesaggio piatto ricco di canali, campi di tulipani, mulini a vento e piste ciclabili.',
                path: 'img/Holland.jpg'
            },
            {
                title: 'Italy',
                description: 'L\'Italia, Paese europeo con una lunga costa sul Mediterraneo, ha lasciato un\'impronta profonda sulla cultura e sulla cucina occidentali.',
                path: 'img/Italy.jpg'
            },
            {
                title: 'Spain',
                description: 'La Spagna, paese della penisola iberica, comprende 17 comunità autonome con diverse culture e caratteristiche geografiche.',
                path: 'img/Spain.jpg'
            },

        ],
        position: 0,
        autoplayID: null
    },
    methods: {
        left: function(){
            if(this.position == 0){
                this.position = this.imagesArray.length - 1;
            } else {
                this.position--;
            }
        },
        right: function(){
            if(this.position == this.imagesArray.length - 1){
                this.position = 0;
            } else {
                this.position++;
            }
        },
        select: function(index){
            this.position = index;
        },
        autoplay: function(){
            this.autoplayID = setInterval(this.right,3000)
        },
        stopAutoplay: function(){
            clearInterval(this.autoplayID)
        },
    },
    mounted () {
        this.autoplay()
    }
});