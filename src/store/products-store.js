import axios from 'axios'

export default {

    namespaced: true,

    state: {
        allProducts: [

        ]
    },

    getters: {
        getProducts: (state) => state.allProducts,

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
        // updateUserMutation(state, userParam) {

        //     console.log("new user mutation ", userParam);
        //     //    console.log(state.allUsers);
        //     var index = state.allUsers.findIndex((x) => x.id == userParam.id);
        //     state.allUsers.splice(index, 1, userParam);
        // },
        // addUserMutation(state, userParam) {

        //     console.log("add new user mutation ", userParam);
        //    state.allUsers.push(userParam);
        // }
    },

    actions: {
        loadProducts(context) {
            context.commit('loadProductsMutation');
        },
        // updateUser(context, userParam) {
        //     console.log('call action updateUser');
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             context.commit('updateUserMutation', userParam);
        //             resolve();
        //             // reject();
        //         }, 2000);

        //     });
        // },

        // addUser(context, userParam) {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             context.commit('addUserMutation', userParam);
        //             resolve();
        //             // reject();
        //         }, 2000);

        //     });
        // }
    },

};