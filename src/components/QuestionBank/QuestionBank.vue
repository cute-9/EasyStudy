<template>
  <div>
    <div class="question_bank">
      <div>
            <el-select v-model="value" placeholder="请选择题型" style="margin-right:10px">
    <el-option
      v-for="item in options"
      :key="item.type"
      :label="item.type"
      :value="item.id">
    </el-option>
  </el-select>
        <el-select v-model="levelId" placeholder="请选择难易程度">
          <el-option
            v-for="item in levelIdData"
            :key="item.level"
            :label="item.level"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
        <el-button type="primary" @click="createNewQuestion">添加题目</el-button>
    </div>
    <question-table></question-table>
  </div>
</template>

<script>
import QuestionTable from '../QuestionTable/QuestionTable.vue'
import {selecttype,selectlevel} from "@/api/createExam"
export default {
components: {
QuestionTable
},
  data() {
    return {
        levelId:'',
        value:'',
      levelIdData: [
        {
          id: 1,
          level: "易",
          createTime: null,
          updateTime: null,
        },
        { id: 2, level: "中",
         createTime: '',
          updateTime: null 
          },
        {
          id: 3,
          level: "难",
          createTime: null,
          updateTime: null,
        },
      ],
      options:[
                  {
            "id": 1,
            "type": "单选题",
            "createTime": null,
            "updateTime": null
        },
        {
            "id": 2,
            "type": "多选题",
            "createTime": null,
            "updateTime": null
        },
                {
            "id": 3,
            "type": "填空题",
            "createTime": null,
            "updateTime": null
        },
        {
            "id": 4,
            "type": "判断题",
            "createTime": null,
            "updateTime": null
        },
        {
            "id": 5,    
            "updateTime": null
        }
      ]
    };
  },
  mounted() {
this.questiontype()
  },
  methods:{
   async searchquestion(){
        // const data = await selecttype
        // if(data.code ==200)
        // console.log(data);
    },
        async questiontype(){
      const data = await selecttype()
      // console.log(data);
this.options=data.data

    },
    async questionlevel(){
      const data= await selectlevel()
this.levelIdData=data.data
    },
    createNewQuestion(){
      this.$router.push('/CreateNewQuestion')
    }
  }
};
</script>

<style scoped>
.question_bank{
    display: flex;
    justify-content:space-between;
    align-items: center;
}
</style>