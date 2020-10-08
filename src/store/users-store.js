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

    },

    mutations: {
        loadUsersMutation(state) {
            axios
                .get('/users.json')
                .then(response => {
                    const list = response.data.list;
                    state.allUsers.splice(0, state.allUsers.length);
                    state.allUsers.push(...list);
                })
        },
        newUserUpdatedMutation(state, userParam) {
            
           console.log("new user mutation ", userParam);
           console.log(state.allUsers);

           var index = state.allUsers.findIndex((x) => x.id == userParam.id);
           state.allUsers.splice(index, 1, userParam);
        }
        // addFilm(state, filmNew) {
        //     state.allFilms.push(filmNew);
        // }
    },

    actions: {
        loadUsers(context) {
            context.commit('loadUsersMutation');
        },
        newUserUpdated(context, userParam){
            context.commit('newUserUpdatedMutation', userParam);
        }
       
    },

};