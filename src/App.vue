<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavBar/>
    <!-- <ContactList /> -->
    <!-- <PerentTest
     :title="perentTitle"
     @callParentFunction = "parentFunction"
     /> -->
     <router-view></router-view>
     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue'
import PerentTest from './components/PerentTest.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',

  data(){
    return{
      perentTitle:'Blog title'
    };
  },
  components: {
    HelloWorld,
    ContactList,
    PerentTest,
    NavBar
  },
  methods:{
    parentFunction(name,age){
      console.log('Hi from parent' + name,age)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
