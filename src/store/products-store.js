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
                .get('http://localhost:3000/products')
                .then(response => {
                    const list = response.data.list;
                    state.allProducts.splice(0, state.allProducts.length);
                    state.allProducts.push(...list);
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
