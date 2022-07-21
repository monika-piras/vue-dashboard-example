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
    },

    mutations: {
        loadProductsMutation(state) {
            axios
                .get(process.env.VUE_APP_URL + '/products')
                .then(response => {
                    const serverList = response.data.list;
                 
                    //if you don't want to change the original array from the API 
                    //server use map

                    // const parsedList = serverList.map(item =>{
                    //     return  {
                    //         ...item,
                    //         image : process.env.VUE_APP_URL + item.image
                    //     }
                    // });

                    serverList.forEach((item) =>{
                        item.image =  process.env.VUE_APP_URL + item.image
                    });
                  
                    state.allProducts.splice(0, state.allProducts.length);
                    state.allProducts.push(...serverList);
                })
        },

        addProductMutation(state, productParam) {
            console.log("add new product mutation ", productParam);
            state.allProducts.push(productParam);
        },

        editProductMutation(state, productParam) {
            var index = state.allProducts.findIndex((x) => x.id == productParam.id);
            state.allProducts.splice(index, 1, productParam);
        }
    },

    actions: {
        loadProducts(context) {
            context.commit('loadProductsMutation');
        },

        addProduct(context, productParam) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('addProductMutation', productParam);
                    resolve();
                    // reject();
                }, 2000);
            });
        },

        editProduct(context, productParam) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('editProductMutation', productParam);
                    resolve();
                    // reject();
                }, 2000);
            });
        }

    }
};