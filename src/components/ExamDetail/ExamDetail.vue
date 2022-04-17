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
      <div class="descr">
        <div class="desrc_cancel">
        <h3>{{examdetail.tsName}}</h3>
        <el-button icon="el-icon-close"  type="text" class="desrc_cancel_btn" @click="deletety"></el-button>
        </div>
        <p >考试开始时间为：{{examdetail.startTime}}</p>
        <p >考试结束时间为：{{examdetail.endTime}}</p>
        <p >考试人数：{{ examdetail.totalNum}}</p>
        <p >状态：{{examdetail.statusId}}</p>
        <p >试卷总分{{examdetail.tsScore}}分</p>
      <div class="desrc_read_over">
        <el-button type='success' @click="readOver">批阅</el-button>
      </div>
      </div> 
    </el-card>
       <el-dialog
  title="警告"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span style="font-size:20px">确认要删除该考试项目吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="danger" @click="deletly(examdetail.id)">删 除</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import {deletelyExam} from '@/api/createExam'
import qs from 'qs'
export default {
  props: {
    examdetail: {
      type: Object,
      required: true,
    },
  },
  data() {
       return{
          centerDialogVisible: false
       }
  },
  methods: {
    deletety(){
this.centerDialogVisible=true
    },
    cancel(){
      this.centerDialogVisible=false
    },
  async deletly(id){
    console.log(id);
          const num=[];
     num.push(id)
       const data= await deletelyExam(qs.stringify({pub_id:num[0]})); 
       this.$message.success('成功')
      console.log(data);
      if(data.code ==200){
      this.$message.success('删除成功')
      this.$emit('deletecessss')
      this.centerDialogVisible=false
    }
  },
    readOver(){
      this.$router.push('/createExam/lookRemark')
    }
  }
};
</script>

<style scoped>


.el-card.is-always-shadow{
  border: 1px solid #b8d7e6;
}
.class-card {
  width: 300px;
  margin: 10px !important;
  /* background-color: rgb(222, 245, 255); */
}
.title {
  font-size: 20px;
  font-weight: 600;
  margin: 5px 0;
}
.descr p {
  color: rgb(160, 160, 160);
  line-height:30px;
}
.image{
width: 100%;
height: 250px;
}
.desrc_read_over{
  height: 50px;
  display: flex;
  justify-content:flex-end;
  align-items: center;
  /* background-color:rgb(207, 255, 211); */
}
.desrc_cancel{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}
.desrc_cancel_btn{
  font-size: 20px;
  padding:0px;
}
</style>
