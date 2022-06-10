const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

new Vue({
    el: "#app",
    data: {
        x: "",
        hoverValue: "false",
        i: 0,
        lista: slides,

        currentImage: "img/01.jpg",
        currentCountry: "Svezia",
        currentText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
    },
    methods: {
        nextClick() {
            this.i++

            if (this.i == 5) { this.i = 0 }


            this.currentImage = this.lista[this.i].image;
            this.currentCountry = this.lista[this.i].title;
            this.currentText = this.lista[this.i].text


        },
        previousClick() {

            this.i--
            if (this.i < 0) { this.i = 4 }

            this.currentImage = this.lista[this.i].image
            this.currentCountry = this.lista[this.i].title;
            this.currentText = this.lista[this.i].text
        },
        onDirectClick(valoreLista, index) {
            this.currentImage = valoreLista.image
            this.currentCountry = valoreLista.title
            this.currentText = valoreLista.text
            this.i = index
            console.log(index);

        },

    },
    mounted() {
        this.x = setInterval(() => {
            this.i++

            if (this.i == 5) { this.i = 0 }


            this.currentImage = this.lista[this.i].image;
            this.currentCountry = this.lista[this.i].title;
            this.currentText = this.lista[this.i].text


        }, 3000);

    },


})

