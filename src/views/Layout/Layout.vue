<template>
  <div class="layout">
    <el-container>
      <el-header class="header"><Navbar /> </el-header>
      <el-container class="main">
        <el-aside width="200px">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
          >
            <el-menu-item index="/layout/home" style="margin-top: 3px">
              <i class="el-icon-menu"></i>
              <span slot="title">课程</span>
            </el-menu-item>
            <!-- <el-menu-item index="/layout/profile">
              <i class="el-icon-s-custom"></i>
              <span slot="title">个人中心</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-main>
          <el-card class="box-card">
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Navbar } from "@/components/index";
export default {
  name: "Layout",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.el-header {
  width: 100%;
  height: 80px !important;
  background-image: url("../../assets/header.png");
  background-size: cover;
  line-height: 80px;
  color: white;
  font-size: 22px;
  position: fixed;
  z-index: 99;
}
.main {
  position: relative;
}
.el-aside {
  position: fixed;
  top: 80px;
  height: 100%;
}
.el-main {
  position: absolute;
  top: 80px;
  left: 200px;
  right: 0;
}

.is-active {
  background-color: #ecf5ff;
}
</style>
