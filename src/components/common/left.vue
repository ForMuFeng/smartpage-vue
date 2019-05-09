<template>
  <div class="aside">
    <div class="sidebar">
      <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#FFFFFF"
               text-color="#000000" active-text-color="#20a0ff" unique-opened router>
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                    {{ threeItem.title }}
                  </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                  {{ subItem.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
    export default {
        name: "left",
      data() {
        return {
          collapse: false,
          items: [
            {
              icon: 'el-icon-tickets',
              index: 'mainPage',
              title: '系统首页'
            },
            {
              icon: 'el-icon-tickets',
              index: 'ocr',
              title: '文字识别'
            },
          ]
        }
      },
      methods: {
      },
      computed:{
        onRoutes(){
          return this.$route.path.replace('/','');
        }
      },
    }
</script>

<style scoped>
.aside{
  border: 0;
  height: 100vh;
  width: 100%;
}
.el-menu{
    border: 0px;
  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
