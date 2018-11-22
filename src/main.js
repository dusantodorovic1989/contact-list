import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ConctactList from './components/ContactList.vue';
import AddContact from './components/AddContact.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect:'/contacts'},// alo nema nista ide contacts
  {path: '/contacts',component:ConctactList},
  {path: '/add-contact',component:AddContact}
];

const router = new VueRouter({
  routes
})

new Vue({
  router,// DODALI SMO
  render: h => h(App),
}).$mount('#app')
