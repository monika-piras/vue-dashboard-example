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
                .get(process.env.VUE_APP_URL + '/users')
                .then(response => {
                    const list = response.data.list;
                    state.allUsers.splice(0, state.allUsers.length);
                    state.allUsers.push(...list);
                })
        },
        updateUserMutation(state, userParam) {

            console.log("new user mutation ", userParam);
            var index = state.allUsers.findIndex((x) => x.id == userParam.id);
            state.allUsers.splice(index, 1, userParam);
        },
        addUserMutation(state, userParam) {

            console.log("add new user mutation ", userParam);
            state.allUsers.push(userParam);
        }
    },

    actions: {
        loadUsers(context) {
            context.commit('loadUsersMutation');
        },
        updateUser(context, userParam) {
            console.log('call action updateUser');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateUserMutation', userParam);
                    resolve();
                    // reject();
                }, 2000);

            });
        },

        addUser(context, userParam) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('addUserMutation', userParam);
                    resolve();
                    // reject();
                }, 2000);

            });
        }
    }
};