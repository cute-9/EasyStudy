<template>
  <div>
    <el-container>
      <el-header class="header"><HeaderBack/> </el-header>
      <el-container class="main">
        <el-aside width="200px">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
          >
            <el-menu-item index="/createExam/ExamPage">
              <i class="el-icon-s-order"></i>
              <span slot="title">考试</span>
            </el-menu-item>
         <el-menu-item index="/createExam/dataManagement">
              <i class="el-icon-document-copy"></i>
              <span slot="title">资料库</span>
            </el-menu-item> 
            <el-menu-item index="/createExam/lookRemark">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">批阅</span>
            </el-menu-item>
            <el-menu-item index="/createExam/addStudent">
              <i class="el-icon-s-data"></i>
              <span slot="title">管理</span>
            </el-menu-item>
                    
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
import { HeaderBack } from "@/components/index";
export default {
  components: {
    HeaderBack,
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
