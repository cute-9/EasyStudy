<template>
  <div>
    <div class="question_bank">
      <el-table
        border
        :data="records"
        style="width: 100%;margin-top:10px"
        :row-class-name="tableRowClassName"
      >
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>
        <el-table-column prop="stName" label="姓名" width="80"> </el-table-column>
        <el-table-column prop="phone" label="学号/工作号" width="150">
        </el-table-column>
        <el-table-column prop="stStatusId" label="学生作答状态" width="120">
        </el-table-column>
        <el-table-column prop="stStartTime" label="开始时间" width="180">
        </el-table-column>
        <el-table-column prop="stSubmitTime" label="提交时间" width="180">
        </el-table-column>
        <el-table-column prop="stIp" label="学生IP"> </el-table-column>
        <el-table-column prop="city" label="学生所在地" width="100"> </el-table-column>
        <el-table-column prop="correctRate" label="客观题正确率" width="110">
        </el-table-column>
        <el-table-column prop="stScore" label="分数" width="50"> </el-table-column>
        <el-table-column prop="approve" label="批阅状态" width="100"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" icon="el-icon-magic-stick" type="primary" @click="handleClick(scope.row)"
              >批阅</el-button
            >
            <el-button size="small" icon="el-icon-refresh-left" type="danger"
              >打回去重做</el-button
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
          id: 1,
          pubId: 3,
          stName: "李思佳",
          stNum: null,
          stStatusId: 1,
          status: "待作答",
          stStartTime: '2022-04-11T17:15:00.000+00:00',
          stSubmitTime: '2022-04-11T17:15:00.000+00:00',
          stIp: null,
          correctRate: null,
          stScore: 50,
          approveId: 1,
          approve: "未批阅",
          appIp: null,
          stId: null,
          username: "李思佳",
          email: "907167912@qq.com",
          city: "成都",
          phone: "15388409900",
        },
        {
          id: 2,
          pubId: 3,
          stName: "陈世龙",
          stNum: null,
          stStatusId: 1,
          status: "待作答",
          stStartTime: null,
          stSubmitTime: null,
          stIp: null,
          correctRate: null,
          stScore: null,
          approveId: 1,
          approve: "未批阅",
          appIp: null,
          stId: null,
          username: "陈世龙",
          email: "907167912@qq.com",
          city: "成都",
          phone: "15388409900",
        },
                {
          id: 2,
          pubId: 3,
          stName: "陈世龙",
          stNum: null,
          stStatusId: 1,
          status: "待作答",
          stStartTime: null,
          stSubmitTime: null,
          stIp: null,
          correctRate: null,
          stScore: null,
          approveId: 1,
          approve: "未批阅",
          appIp: null,
          stId: null,
          username: "陈世龙",
          email: "907167912@qq.com",
          city: "成都",
          phone: "15388409900",
        },
                {
          id: 2,
          pubId: 3,
          stName: "陈世龙",
          stNum: null,
          stStatusId: 1,
          status: "待作答",
          stStartTime: null,
          stSubmitTime: null,
          stIp: null,
          correctRate: null,
          stScore: null,
          approveId: 1,
          approve: "未批阅",
          appIp: null,
          stId: null,
          username: "陈世龙",
          email: "907167912@qq.com",
          city: "成都",
          phone: "15388409900",
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
    handleClick(a){
      console.log(a);
    }
  },
};
</script>

<style>
.el-table .warning-row {
  background: rgb(243, 243, 243,0.5);
}

.el-table .success-row {
   background: rgb(243, 243, 243,0.5);
}
.footer_text_data {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
<style scoped>
.text_exam_btn {
  float: right;
  margin-bottom: 10px;
}
</style>