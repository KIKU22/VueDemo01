<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

	<p>{{helloa}}</p>
  <p>{{helloa}}</p>

  <i-button>Default</i-button>
      <i-button type="primary">Primary</i-button>
      <i-button type="ghost">Ghost</i-button>
      <i-button type="dashed">Dashed</i-button>
      <!-- <i-button type="text">Text</i-button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      helloa: 'hhhHHHH哈哈哈223啥'
    }

  },
  created(){
     console.log(1,this);
     console.log(2,this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
