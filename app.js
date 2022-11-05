const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Brandon Sanderson',
            age: 54,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
         changeTitle(title) {
            this.title = title
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')