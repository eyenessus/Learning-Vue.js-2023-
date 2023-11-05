var app = {
    data(){
        return {
            title:'Curso Vue JS 3',
            name:'Emerson',
            lastName:'Sousa',
            products :
            [
                {
                    title:'Cavalos',
                    description:'Diversos cavalos',
                    image:'./img/cavalos.jpeg',
                    starts:0
                },
                {
                    title:'Cavalos',
                    description:'Diversos cavalos',
                    image:'./img/racas_cavalo_thumbnail.png',
                    starts:2,
                }
            ],
            cart:[],
        }
    },
    methods: {
        addCart (product){
            this.title = 'Curso Vue 3 Js'
            this.cart.push(product)
        },

        inCart (product){
            return this.cart.indexOf(product) != -1
        },
        removeCart(product){
            this.cart  = this.cart.filter((prod,index)=> product != prod)
        }
    },
}

Vue.createApp(app).mount('#app')