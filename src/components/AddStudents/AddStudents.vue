<template>
  <div>
    <div class="question_bank">
      <el-table
        border
        :data="records"
        style="width: 100%; margin-top: 10px"
        :row-class-name="tableRowClassName"
      >
        style="width: 100%">
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
        <el-table-column prop="phone" label="手机号" >
        </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="city" label="所在地"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              size="small"
              icon="el-icon-circle-plus"
               type="success"
                plain
              >添加</el-button
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
          id: 6, //学生id
          username: "李思佳", //学生姓名
          avatar:
            "https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/5a9f48118166308daba8b6da7e466aab.jpg", //学生头像
          email: "907167912@qq.com", //学生邮箱
          city: "成都", //学生所在地
          lastLogin: null, //最后登录时间
          statu: 0, //
          phone: "15388409900", //学生电话号码
          sex: "女", //学生性别
        },
        {
          id: 6, //学生id
          username: "李思佳", //学生姓名
          avatar:
            "https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/5a9f48118166308daba8b6da7e466aab.jpg", //学生头像
          email: "907167912@qq.com", //学生邮箱
          city: "成都", //学生所在地
          lastLogin: null, //最后登录时间
          statu: 0, //
          phone: "15388409900", //学生电话号码
          sex: "女", //学生性别
        },
        {
          id: 6, //学生id
          username: "李思佳", //学生姓名
          avatar:
            "https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/5a9f48118166308daba8b6da7e466aab.jpg", //学生头像
          email: "907167912@qq.com", //学生邮箱
          city: "成都", //学生所在地
          lastLogin: null, //最后登录时间
          statu: 0, //
          phone: "15388409900", //学生电话号码
          sex: "女", //学生性别
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