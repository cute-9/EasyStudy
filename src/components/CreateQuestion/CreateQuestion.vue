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
      {{examName}}  分数：<el-input style="width:100px" v-model="score"></el-input>
  </div>
      <MyEditor />     
      <h3 style="margin-top:20px;margin-bottom:20px ;    color:rgb(114, 114, 114)" >答案:</h3>
      <!-- 单选题 -->
      <div v-if="examName=='单选题'">
      <SingleChoice/>
      </div>
      <!-- 多选题 -->
      <div v-if="examName=='多选题'">
 <multiple-choice></multiple-choice>
      </div>
      <!-- 判断题 -->
      <div v-if="examName=='判断题'">
      <TrueFalse/>
      </div>
      <!-- 解答题 /填空题-->
      <div v-if="examName=='解答题'">
      <my-editor></my-editor>
      </div>
            <div v-if="examName=='填空题'">
      <my-editor></my-editor>
      </div>
      <div>
      <h3 style="margin-top:20px;margin-bottom:20px;color:rgb(240, 185, 82)">答案解析:</h3>
      <my-editor></my-editor>
      </div>
          <div class="footer_btn">
  <el-button type="success" plain>保存</el-button>
    </div>
    </div>
  </div>
</template>

<script>
import MyEditor from "../MyEditor/MyEditor.vue";
import SingleChoice from "../SingleChoice/SingleChoice.vue";
import MultipleChoice from "../MultipleChoice/MultipleChoice.vue";
import TrueFalse from "../TrueFalse/TrueFalse.vue";
export default {
  components: {
    MyEditor,
    SingleChoice,
    MultipleChoice,
    TrueFalse
  },
  data(){
      return {
 score:5,
 examName:'单选题'
      }
  },
  methods: {
    SingleChoice(){
      this.examName='单选题'
    },
    MultipleChoice(){
      this.examName='多选题'

    },
    TrueFalse(){
      this.examName='判断题'

    },
    Write(){
      this.examName='填空题'

    },
    WriteTopic(){
      this.examName='解答题'

    }
  }
};
</script>
<style  scoped>
.main_myeditor{
    width: 100%;
    background-color: white;
    /* margin-left: auto;
    margin-right: auto; */
}
.header_create_question{
    margin-top: 20px;
    margin-bottom: 20px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* color:rgb(114, 114, 114) */
}
.footer_btn{
  width: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
}
</style>