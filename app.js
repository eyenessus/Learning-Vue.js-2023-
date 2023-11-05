var app = {
    data(){
        return {
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
            ]
        }
    }
}

Vue.createApp(app).mount('#app')