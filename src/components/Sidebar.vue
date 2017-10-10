<template>
  <div id="sidebar" style="background-color: ghostwhite">
    <h1>目录导航</h1>
    <br>
    <br>
    <router-link to="/">Home</router-link>
    <router-link to="Blog">Go to blogs</router-link>
    <router-link to="Form">Go to Form</router-link>
    <router-link to="FormDemo">Go to FormDemo</router-link>
    <router-link to="BootStrap">Go to BootStrap</router-link>
    <router-link to="ElementUIDemo">Go to ElementUI</router-link>
    <router-link to="Counter">Go to Counter</router-link>

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

</style>
