<template>
  <div class="menu">
    <div class="menu-top">
      <el-button plain color="#999" type="primary" :icon="isCollapse==true?'el-icon-s-fold':'el-icon-s-unfold'" circle @click="operateMenu"></el-button>
    </div>
    <el-menu :router="true" :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="isCollapse">
      <el-submenu index="path1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="path11">选项1</el-menu-item>
          <el-menu-item index="path12">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="path2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data(){
      return{
        isCollapse: false,
      }
    },
    computed:{
      defaultActive(){
        var path = this.$route.path.replace('/','');
        return path;
      }
    },
    mounted() {
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key,keyPath){
        console.log('select1:',key,keyPath);
        // this.$router.push({
        //   path:key
        // })
      },
      operateMenu(){
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>

<style scoped lang="scss">
.menu{
  height: 100vh;
  max-width: 20%;
  background: #f5f5f5;
  .menu-top{
    display: flex;
    justify-content: center;
    width: 100%;
    background: #FFFFFF;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>