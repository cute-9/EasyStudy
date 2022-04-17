<template>
  <div>
    <div class="question_bank">
      <el-header class="header">
试卷回收站
<el-button>返回</el-button>
      </el-header>
      <el-table
       border
        :data="records"
        style="width: 80%;margin-top:10px;margin-left:auto;margin-right:auto"
        :row-class-name="tableRowClassName"
      >
        style="width: 100%">
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>
        <el-table-column prop="question" label="题目名称"> </el-table-column>
        <el-table-column prop="type" label="题型" width="180">
        </el-table-column>
        <el-table-column prop="level" label="难易程度"> </el-table-column>
        <el-table-column prop="prId" label="题目数量"> </el-table-column>
        <el-table-column prop="tcId" label="使用数量"> </el-table-column>
        <el-table-column prop="username" label="老师名称"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="success" size="small" icon="el-icon-edit">恢复</el-button>
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
        style="width: 80%;margin-top:10px;margin-left:auto;margin-right:auto"

      >
      </el-pagination>
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
  },
};
</script>

<style scoped>
.footer_text_data {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.header {
  width: 100%;
  height: 80px !important;
  background-image: url(/img/header.104d4be2.png);
  background-size: cover;
  line-height: 80px;
  color: white;
  font-size: 22px;
  /* position: fixed; */
  /* z-index: 99; */
display:flex;
justify-content: space-between;
align-items: center;
}
</style>