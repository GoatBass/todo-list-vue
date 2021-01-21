import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const app = Vue.createApp({
    data() {
        return {
            items: [],
            currentItem: ''
        }
    },
    methods: {
        addItem() {
            this.items.push({
                id: nanoid(),
                task: this.currentItem,
                isCompleted: false,
                editMode : false
            })
            this.currentItem = ''
        }
    }
})

app.mount('#app')