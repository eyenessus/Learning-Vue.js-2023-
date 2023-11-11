const productDetails = {
    template: ` <p>{{product.title}}</p>
    <strong v-if="product.starts > 0">{{product.starts}}</strong>
    <img v-bind:src="product.image" v-bind:alt="product.title" style="width: 100px;">

    <button href="#"
     @click.prevent="addCart(product)" 
    :disabled="productInCart"
    :class="['color',productInCart ? 'button-disabled' : '']">
    ADD CART
    </button>
    `,
    data() {
        return {
            example: 123,
        }
    },
    // props:['product','productInCart'],
    props:{
        product:{
            type:Object,
            required:true,
        },
        productInCart:{
            type:Boolean,
            required:true,
        }

    },
    methods:{
        addCart(product){
            console.log('add product in cart');
        }
    }
}