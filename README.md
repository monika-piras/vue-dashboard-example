# VUE-DASHBOARD-EXAMPLE 


Online demo here: https://monika-piras.github.io/vue-dashboard-example/

GitHub repo here: https://github.com/monika-piras/vue-dashboard-example



An example about how to build a responsive and mobile friendly website with [VueJS], retrieving the data with an Api call from an API Server (built with hapijs) and updating the internal state of the Vue Store by caching the data.

Internal state changes are managed via Vuex following Flux pattern.

This is an example of a Dashboard that show a list of users and products. 

The user can view the detail of each user and product, can modify it or add to the list a new one by filling in the appropriate Form with controls for patterns and required fields. 

On the Home Page there are two charts created by using Vue-ApexCharts component, to show the amount of men and women users and their age.

The navigation of the pages is managed with specific routes and passage of parameters in query strings.

The site is responsive and mobile friendly.

The user can:

- view the detail of the user/product
- edit the detail of the user/product
- add a new user/product to the list by filling in the form with controls



## Install
```
npm install
```

### Run locally
```
npm run serve
```

## License


MIT

## Version

0.1.0



[VueJS]: <https://vuejs.org>
