<template>
  <div>
    <div class="question_bank">
      <el-table
       border
        :data="records"
        style="width: 100%;margin-top:10px"
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
            <el-button @click="handleClick(scope.row)" type="text" size="small" icon="el-icon-edit">修改</el-button>
            <el-button type="text" size="small" icon="el-icon-delete" style="color:red">删除</el-button>
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
</style>