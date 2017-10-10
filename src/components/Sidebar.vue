<template>
  <div id="sidebar" style="background-color: ghostwhite">
    <h1>目录导航</h1>
    <br>
    <br>
    <router-link to="/" activeClass="v-link-active" >Home</router-link>
    <router-link to="/Blog" activeClass="v-link-active">Go to blogs</router-link>
    <router-link to="/Form" activeClass="v-link-active">Go to Form</router-link>
    <router-link to="FormDemo" activeClass="v-link-active">Go to FormDemo</router-link>
    <router-link to="BootStrap" activeClass="v-link-active">Go to BootStrap</router-link>
    <router-link to="ElementUIDemo" activeClass="v-link-active">Go to ElementUI</router-link>
    <router-link to="Counter" activeClass="v-link-active">Go to Counter</router-link>
    <router-link to="Dialog" activeClass="v-link-active">Go to Dialog</router-link>

  </div>
</template>

<script>

  export default {
    name: 'sidebar',
  };

</script>

<style>

  #sidebar {
    counter-reset: section; /* Set a counter named 'section', and it`s initial value is 0. */
  }

  #sidebar a {
    display: block;
    font-size: large;
    text-align: left;
    margin: 5px 10px;
  }

  #sidebar a:before {
    color: red;
    counter-increment: section; /* Increment the value of section counter by 1 */
    content: counter(section) '. '; /* Display the value of section counter */
  }

  #sidebar .v-link-active {
    color: #ffffff;
    background-color: #2c3e50;
  }


</style>
