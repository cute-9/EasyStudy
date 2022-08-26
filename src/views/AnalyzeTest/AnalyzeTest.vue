<template>
  <div style="margin-top: 20px">
    <span style="margin-left: 50px"></span>
    <el-button type="success" @click="ascending" plain>升序</el-button>
    <el-button type="success" @click="Descending" plain>降序</el-button>
    <span style="margin-left: 100px">
      <el-input
        v-model="searchName1"
        style="width: 200px"
        placeholder="根据姓名查询"
        clearable
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="searchName"
        ></el-button>
      </el-input>
    </span>
    <span style="margin-left: 40px">
      <el-input
        v-model="searchTest1"
        style="width: 200px"
        placeholder="根据试卷查询"
        clearable
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="searchTest"
        ></el-button>
      </el-input>
    </span>

    <el-button type="success" style="margin-left: 100px" @click="exportGrade"
      >导出成绩</el-button
    >

    <el-table :data="tableData" style="width: 90%; margin: 50px auto" stripe>
      <el-table-column
        prop="stName"
        label="学生姓名"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="stScore" label="成绩" width="150" align="center">
      </el-table-column>
      <el-table-column prop="tsName" label="试卷名称"> </el-table-column>
      <el-table-column prop="id" label="发行编号" width="150" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  getData,
  ascendingData,
  DescendingData,
  searchNameData,
  searchTestData,
  
} from "@/api/analyzeTest";
export default {
  name: "AnalyzeTest",
  data() {
    return {
      searchName1: "",
      searchTest1: "",
      tableData: [
        {
            stName: "李思佳",
            stScore: 68,
            tsName: "历史",
            id: 11
        },
        {
            stName: "陈世龙",
            stScore: 89,
            tsName: "历史",
            id: 11
        },
        {
            stName: "彭于晏",
            stScore: 98,
            tsName: "历史",
            id: 11
        }
      ],
    };
  },
  created() {
    // this.getTableData();
  },
  methods: {
    searchName() {
      searchNameData(this.searchName1).then((res) => {
        this.tableData = res.data;
      });
    },
    searchTest() {
      searchTestData(this.searchTest1).then((res) => {
        this.tableData = res.data;
      });
    },
    getTableData() {
      getData().then((res) => {
        // this.tableData = res.data;
        console.log(res);
      });
    },
    //&升序
    ascending() {
      ascendingData(this.tableData).then((res) => {
        this.tableData = res.data;
        // console.log(res);
      });
    },
    //&降序
    Descending() {
      DescendingData(this.tableData).then((res) => {
        this.tableData = res.data;
        // console.log(res);
      });
    },
    exportGrade() {
      // exportResult(this.tableData).then((res) => {
      //   const link = document.createElement("a");
      //   let blob = URL.createObjectURL(new Blob([res]), { type: "text/xml" });
      //   link.style.display = "none";
      //   link.href = blob;
      //   link.download = "textttt.xlsx";
      //   document.body.appendChild(link);
      //   link.click();
      //   // 下载后移除元素
      //   document.body.removeChild(link);
      //   URL.revokeObjectURL(link.href);
      // });
    },
  },
};
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>