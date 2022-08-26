<template>
  <div>
    <div class="main_myeditor">
      <div class="header_create_question">
        <p>选择题型：</p>
        <el-button @click="SingleChoice">单选题</el-button>
        <el-button @click="MultipleChoice">多选题</el-button>
        <el-button @click="TrueFalse">判断题</el-button>
        <el-button @click="Write">填空题</el-button>
        <el-button @click="WriteTopic">简答题</el-button>
      </div>
      <div>
        {{ examName }} 分数：<el-input
          style="width: 100px"
          v-model="detailsList.qsSc"
        ></el-input>
      </div>
      <my-editor @reachData="reachData"></my-editor>
      <h3
        style="margin-top: 20px; margin-bottom: 20px; color: rgb(114, 114, 114)"
      >
        答案:
      </h3>
      <!-- 单选题 -->
      <div v-if="examName == '单选题'">
        <SingleChoice @SingleChoice="Singlechoicenum" />
      </div>
      <!-- 多选题 -->
      <div v-if="examName == '多选题'">
        <multiple-choice @MultipChoice="Multipchoice"></multiple-choice>
      </div>
      <!-- 判断题 -->
      <div v-if="examName == '判断题'">
        <TrueFalse />
      </div>
      <!-- 解答题 -->
      <div v-if="examName == '解答题'">
        <my-editor @reachData="freeQuestion"></my-editor>
      </div>
      <div v-if="examName == '填空题'">
        <my-editor @reachData="freeQuestion"></my-editor>
      </div>
      <!-- <div>
      <h3 style="margin-top:20px;margin-bottom:20px;color:rgb(240, 185, 82)">答案解析:</h3>
      <my-editor @reachData="freeData"></my-editor>
      </div> -->
      <div class="header_left">
        <h3>难易程度：</h3>
        <el-select v-model="info.qsTotal.levelId" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="footer_btn">
        <el-button type="success" plain @click="converse">保存该题</el-button>
        <el-button type="success" plain @click="timeconverse">暂存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
var loc = new Array();

import MyEditor from "../MyEditor/MyEditor.vue";
import SingleChoice from "../SingleChoice/SingleChoice.vue";
import MultipleChoice from "../MultipleChoice/MultipleChoice.vue";
import TrueFalse from "../TrueFalse/TrueFalse.vue";
import { udquestion } from "@/api/createQuestion";
// import upLocalData from "@/utils/localData"
// import qs from "qs"
export default {
  components: {
    MyEditor,
    SingleChoice,
    MultipleChoice,
    TrueFalse,
  },
  data() {
    return {
      score: 5,
      value: "容易",
      examName: "单选题",
    
      info: {
        qsTotal: {
          id: "",
          typeId: 1,
          levelId: 1,
          prId: 4,
          tcId: 2,
          isSub: 0,
          question: "",
        },
        qsOp: [],
      },
      detailsList: {
        qsId: "",
        qsSc: 5,
        typeId: "",
      },
      options: [
        {
          value: 1,
          label: "容易",
        },
        {
          value: 2,
          label: "一般",
        },
        {
          value: 3,
          label: "困难",
        },
      ],
      dataTotole: {
        tsPaper: {
          tsName: "",
          tsScore: 25,
          levelId: "",
          tcId: "",
          prId: "",
        },
        disList: [{ typeId: 2, qsSc: 30, qsDesc: "彭彭", qsCount: 37 }],
        detailsList:[]
      },
    };
  },
  mounted() {
    this.info.qsTotal.tcId = window.localStorage.getItem("id");
    this.dataTotole.tsPaper.tcId = window.localStorage.getItem("id");
    this.info.qsTotal.prId = window.localStorage.getItem("prId");
    this.dataTotole.tsPaper.prId = window.localStorage.getItem("prId");
  },
  methods: {
    SingleChoice() {
      this.examName = "单选题";
      this.info.qsTotal.levelId = 1;
    },
    MultipleChoice() {
      this.examName = "多选题";
      this.info.qsTotal.levelId = 2;
    },
    TrueFalse() {
      this.examName = "判断题";
      this.info.qsTotal.levelId = 3;
    },
    Write() {
      this.examName = "填空题";
      this.info.qsTotal.levelId = 4;
    },
    WriteTopic() {
      this.examName = "解答题";
      this.info.qsTotal.levelId = 5;
    },
    reachData(data) {
      this.info.qsTotal.question = data;
    },
    freeQuestion(data) {
      //  this.info.qsOp.push(data)
      var tt = { qsOption: "", isTrue: 1 };
      tt["qsOption"] = data;
      this.info.qsOp.push(tt);
      this.info.qsTotal.isSub = 1;
    },
    Singlechoicenum(data) {
      this.info.qsOp = data;
      //  console.log(data);
    },
    Multipchoice(data) {
      this.info.qsOp = data;
    },
    async converse() {
      var data = JSON.parse(JSON.stringify(this.info));
      const res = await udquestion(data);
      console.log(res);
      if (res.code == 200) {
        this.$message.success("保存成功!");
        this.detailsList.qsId = res.data;
        this.detailsList.typeId = this.info.qsTotal.levelId;
        loc.push(this.detailsList);
        this.localData.setItem("qsdata", JSON.stringify(loc));
      } else {
        this.$message.erro("保存失败!");
      }
    },
    timeconverse() {
      var localdata=JSON.parse(localStorage.getItem("qsdata"))
    this.dataTotole.detailsList=localdata
    this.$emit('allexamdata',this.dataTotole)
    },
  },
};
</script>
<style  scoped>
.main_myeditor {
  width: 100%;
  background-color: white;
  /* margin-left: auto;
    margin-right: auto; */
}
.header_create_question {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* color:rgb(114, 114, 114) */
}
.footer_btn {
  width: 200px;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.header_left {
  margin-top: 20px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>