import axios from 'axios'

export default {

    namespaced: true,

    state: {
        allProducts: [

        ]
    },

    getters: {
        getProducts: (state) => state.allProducts,

        getProductDetails: (state) => (productID) => {
            const productIndex = state.allProducts.findIndex(x => x.id == productID);
            return state.allProducts[productIndex];
        }

        // search: (state) => (searchedValue) => {

        //     searchedValue = searchedValue.toLowerCase();

        //     return state.allUsers.filter((item) => {
        //         return item.name.toLowerCase().includes(searchedValue);
        //     })
        // },

    },

    mutations: {
        loadProductsMutation(state) {
            axios
                .get('/products.json')
                .then(response => {
                    const list = response.data.list;
                    state.allProducts.splice(0, state.allProducts.length);
                    state.allProducts.push(...list);
                })
        },
       
        addProductMutation(state, userParam) {

            console.log("add new product mutation ", userParam);
           state.allProducts.push(userParam);
        }
    },

    actions: {
        loadProducts(context) {
            context.commit('loadProductsMutation');
        },

        addProduct(context, userParam) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('addProductMutation', userParam);
                    resolve();
                    // reject();
                }, 2000);

            });
        }
    },

};