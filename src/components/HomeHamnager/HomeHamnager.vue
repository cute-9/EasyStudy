 <template>
  <div
    class="class-card"
    style="
       {
        width: '300px';
      }
    "
  >
    <el-card
      :body-style="{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }"
    >
      <img :src="recordsItem.prPic" class="image"      @click="hanmger(recordsItem.id)" />
      <div class="descr">
        <div class="title">课程名称：{{ recordsItem.prName }}</div>
        <div class="teacher">老师名字：{{ recordsItem.prTeacher }}</div>
        <el-button type="danger" plain @click="deletely(recordsItem.id)">删除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { deletetly} from "@/api/home";
import qs from 'qs'
export default {
  name: "ClCard",
  emits: ["deletecess"],
  props: {
    recordsItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hanmger(prId){
      // console.log(123);
      // let id=prId
      // console.log(prId);
      this.$router.push(
      "/createExam/ExamPage",
        // query: {
        //   "id":prId
        // }
      )
       window.localStorage.setItem("prId",prId)
    },
   async deletely(prId){
     const num=[];
     num.push(prId)
       const data= await deletetly(qs.stringify({prId:num[0]})); 
      //  this.$message.success('成功')
      //  console.log(data);
      if(data.code ==200){
      this.$message.success('删除成功')
      this.$emit('deletecess')
      }
    }
  }
};
</script>

<style scoped>
.class-card {
  width: 300px;
  margin: 10px !important;
  /* background-color: rgb(222, 245, 255); */
}
.title {
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
}
.teacher {
  color: rgb(82, 82, 82);
}
.image{
width: 100%;
height: 250px;
}
</style>
