<template>
  <div class="navbar">
    <el-row>
      <el-col :span="22">
        <div class="header_left">{{title}}</div>
      </el-col>
      <el-col :span="2">
        <div class="avatarBox">
            <el-button type="sucess" @click="handleLogout">返回</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import router from "../../router";
export default {
  data(){
    return{
      title:'大雾看花'
    }
  },
  methods: {
    handleLogout() {
      router.replace("/layout/home");
    },
  },
};
</script>

<style scoped>
.header_left {
  margin-left: 20px;
}
.el-dropdown-link {
  color: white;
  margin-left: 8px;
}
.avatarBox {
  height: 80px;
  display: flex;
  align-items: center;
}
.el-button {
  width: 100px;
  /* font-size: 17px; */
}
</style>
