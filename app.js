const app = Vue.createApp({
    data() {
        return {
            url: 'http://arturostop.github.io',
            showBooks: true,
            books: [
                {title: 'the subtle art of not giving a f*ck', author: 'Mark Manson', img: 'assets/1.png', isFav: true},
                {title: 'everything is f*cked', author: 'Mark Manson', img: 'assets/2.png', isFav: false},
                {title: 'el hombre duplicado', author: 'Jose Saramago', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')