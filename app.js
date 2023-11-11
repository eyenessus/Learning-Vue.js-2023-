var myapp = {
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
            styles:{
                color:'white',
                backgroundColor:'black',
            },
             themeBlack:true,
         
        }
    },
    computed:{
        fullName(){
            return this.name + ' ' + this.lastName
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
        },
        toogleTheme(){
            this.themeBlack = !this.themeBlack;
            if(this.themeBlack){
                this.styles.color = 'white',
                this.styles.backgroundColor = 'black'
            }else{
                this.styles.color = 'black',
                this.styles.backgroundColor = 'white'
            }
        }
    },
}



