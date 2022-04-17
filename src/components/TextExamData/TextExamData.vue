<template>
  <div>
      <el-button type="primary" class="text_exam_btn"> 创建试卷</el-button>
    <div class="question_bank">
      <el-table
       border
        :data="records"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column label="序号" type="index" width="80">
        </el-table-column>
        <el-table-column prop="question" label="题目名称"> </el-table-column>
        <el-table-column prop="level" label="难易程度" width="120">
        </el-table-column>
        <el-table-column prop="prId" label="题目数量" width="120">
        </el-table-column>
        <el-table-column prop="username" label="创建者" width="180">
        </el-table-column>
        <el-table-column prop="username" label="创建时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="text"
              size="small"
              icon="el-icon-edit"
              >修改</el-button
            >
            <el-button
              type="text"
              size="small"
              icon="el-icon-delete"
              style="color: red"
              >删除</el-button
            >
            <el-button size="small" icon="el-icon-s-opportunity" type="success"
              >封存</el-button
            >
            <el-button size="small" icon="el-icon-s-promotion" type="success"
              >发布</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer_text_data">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="9"
      >
      </el-pagination>
      <el-button type="danger" plain icon="el-icon-delete" @click="recycleBin"> 回收站 </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      records: [
        {
          id: 3,
          typeId: 2,
          type: "多选题",
          level: "中",
          levelId: 2,
          prId: 2,
          tcId: 2,
          username: "test",
          question: "hahahahahahah",
        },
        {
          id: 5,
          typeId: 2,
          type: "多选题",
          level: "中",
          levelId: 2,
          prId: 2,
          tcId: 2,
          username: "test",
          question: "hahahahahahah",
        },
        {
          id: 5,
          typeId: 2,
          type: "多选题",
          level: "中",
          levelId: 2,
          prId: 2,
          tcId: 2,
          username: "test",
          question: "hahahahahahah",
        },
        {
          id: 5,
          typeId: 2,
          type: "多选题",
          level: "中",
          levelId: 2,
          prId: 2,
          tcId: 2,
          username: "test",
          question: "hahahahahahah",
        },
      ],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      } else if (row === 1) {
        return "";
      }
      return "";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    recycleBin(){
      this.$router.push('/RecycleBin');
    }
  },
};
</script>

<style>
/* .el-table .warning-row {
  background: rgb(238, 238, 238);
}

.el-table .success-row {
  background: rgb(238, 238, 238);

} */
.footer_text_data {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
<style scoped>
.text_exam_btn{
    float: right;
    margin-bottom: 10px;
}
</style>