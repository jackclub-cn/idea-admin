<template>
  <div class="home">
    <Menu></Menu>
    <Container></Container>
<!--    {{path}}-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '@/components/Menu.vue';
import Container from '@/components/Container.vue';
export default {
  name: 'Home',
  data(){
    return {
      path:{}
    }
  },
  watch:{
    '$route'(to,from){
      console.log('change route')
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods:{
    init(){
      var path = this.$route.path;
      this.path = path;
      console.log('query',this.path)
    }
  },
  components: {
    HelloWorld,
    Menu,
    Container
  }
}
</script>
<style scoped lang="scss">
.home{
  display: flex;
  flex-wrap: nowrap;
  background: #f5f5f5;
}
</style>
