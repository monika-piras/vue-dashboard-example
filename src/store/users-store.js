import axios from 'axios'

export default {

    namespaced: true,

    state: {
        allUsers: [

        ]
    },

    getters: {
        getUsers: (state) => state.allUsers,

        search: (state) => (searchedValue) => {
            
            searchedValue = searchedValue.toLowerCase();

            return state.allUsers.filter((item) => { 
                return item.name.toLowerCase().includes(searchedValue); 
            })
        },

        // getUserDetail: (state) => (userID) => {
        //     const userIndex = state.allUsers.findIndex(x => x.id == userID);
        //     return state.allUsers[userIndex];
        // },
    },

    mutations: {
        loadUsersMutation(state) {
            axios
                .get('/users.json')
                .then(response => {
                    const list = response.data.list;
                    state.allUsers.push(...list);
                })
        },

        // addFilm(state, filmNew) {
        //     state.allFilms.push(filmNew);
        // }
    },

    actions: {
        loadUsers(context) {
            context.commit('loadUsersMutation');
        },
        //     callActionAddFilm(context, filmParam) {
        //         context.commit('addFilm', filmParam);
        //     },
    },

};