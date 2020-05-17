<template>
  <div class="container">
    当前位置：
    {{path}}
  </div>
</template>

<script>
  export default {
    name: "Container",
    data(){
      return{
        path:{}

      }
    },
    watch:{
      '$route'(to,from){
        this.init();
      }
    },
    mounted() {
      this.init();
    },
    methods:{
      init(){
        var path = this.$route.path.replace('/','');
        this.path = path;
        console.log('query',this.path)
      }
    }
  }
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  /*min-height: calc(100vh - 40px);*/
  height: 100vh;
  /*background: #f5f5f5;*/
  background: #ffffff;
  /*margin: 20px;*/
  box-sizing: border-box;
  padding: 20px;
}
</style>