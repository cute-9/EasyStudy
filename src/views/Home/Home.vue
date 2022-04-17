<template>
  <div class="home" >
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="我教的课" name="first"> </el-tab-pane>
    </el-tabs>
    <div class="new_class">
      <el-button type="primary" round @click="buttonDiaolog">
        <i class="el-icon-circle-plus"></i>
        新建课程
      </el-button>
      <div>
        <el-input
          placeholder="请输入内容"
          v-model="info.projectname"
          class="input-with-select new_search"
        >
          <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
        </el-input>
      </div>
    </div> 
    <div v-if="records.length==0" class="noclass">暂无此课程</div>
    <div class="el-home-hamnager" v-if="records.length!=0">
      <div v-for="(item, index) in records" :key="index">
        <home-hamnager :recordsItem="item" :key="item.id" @deletecess="deletecess"></home-hamnager>
    </div>
    </div>
    <el-dialog
      title="新建课程"
      :visible.sync="centerDialogVisible"
      width="40%"
      center
    >
      <el-form ref="form" :model="newclass" label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="newclass.prName"></el-input>
        </el-form-item>
        <el-form-item label="老师名字">
          <el-input v-model="newclass.prTeacher"></el-input>
        </el-form-item>
        <el-form-item label="课程描述">
          <el-input v-model="newclass.prDesc"></el-input>
        </el-form-item>
        <el-form-item label="课程封面:">
          <div class="new_image">
            <div
              v-for="(item, index) in this.infoimage"
              :key="index"
              :class="{ active: currentImageIndex === item }"
              @click="itemClick(item)"
            >
              <el-image :src="item"></el-image>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="addProjectsure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { HomeHamnager } from "@/components/index";
import { addProject, selectBYtcid } from "@/api/home";

import qs from "qs";
export default {
  name: "Home",
  components: {
    // Tinymce,
    HomeHamnager,
  },
  data() {
    return {
      info: {
        tcId: 5,
        projectname: "",
        page: 1,
        size: 10,
      },
      activeName: "first",
      centerDialogVisible: false,
      projectname: "",
      radio3: "",
      newclass: {
        prName: "",
        prDesc: "",
        prPic: "http://bytes.isekko.cn/FsPPuxHL50m5xHaBBtf6AqS6wFvj",
        prTeacher: "",
        tcId: "5",
      },
      currentImageIndex: "http://bytes.isekko.cn/FsPPuxHL50m5xHaBBtf6AqS6wFvj",
      infoimage: [
        "http://bytes.isekko.cn/FsPPuxHL50m5xHaBBtf6AqS6wFvj",
        "http://bytes.isekko.cn/Fh72wmz1kLN2qDW4id5aax920vCK",
        "http://bytes.isekko.cn/Fg3GNqk4c0LTe8D7SJGVbJiPdeDR",
        "http://bytes.isekko.cn/FnlE0kuR0a9AnPjYgukU9dCGLi8I",
        "http://bytes.isekko.cn/FkdczMrsT_4ncGRODbGB_kjO0Mza",
      ],
      records:[],
    };
  },
  mounted() {
    this.info.tcId=window.localStorage.getItem('id')
    // this.select();
    // console.log(JSON.parse(JSON.stringify(this.info)));
this.select();
  },
  methods: {
    buttonDiaolog() {
      this.centerDialogVisible = true;
    },
    itemClick(item) {
      this.currentImageIndex = item;
      this.newclass.prPic = item;
      //  console.log(this.currentImageIndex);
    },
    cancel() {
      this.centerDialogVisible = false;
      this.newclass = {};
    },
    async addProjectsure() {
      var data = this.newclass;
      const res = await addProject(data);
      if (res.code == 200) {
        this.select()
        this.centerDialogVisible = false;
      }
    },
    select(){
          let info = JSON.parse(JSON.stringify(this.info));
    selectBYtcid(qs.stringify(info)).then((res) => {
      // console.log(res.data.records);
       this.records=res.data.records

    });
    },
    deletecess(){
      // console.log(data);
      this.select()
    },
    searchBtn(){
this.select()
    }
  },
};
</script>

<style scoped>
.new_class {
  display: flex;
  justify-content: space-between;
}
.new_search {
  width: 400px;
}

.el-home-hamnager {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* margin: 10px 100px; */
}
.new_image {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.new_image .el-image {
  height: 100px;
  width: 100px;
}
.new_image .active {
  border: solid 3px rgb(187, 241, 255);
}
.noclass{
  margin-top: 20px;
  text-align: center;
  font-size:20px;
  color:rgb(126, 126, 126);
}
</style>
