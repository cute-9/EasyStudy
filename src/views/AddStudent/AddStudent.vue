<template>
  <div>
<h4 style="color:#eeb824">学生管理中心</h4>
<div class="hrs"></div>
  <el-select v-model="value" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <add-students></add-students>
  </div>
</template>

<script>
import { AddStudents } from "@/components/index";

export default {
    components:{
        AddStudents
    },
  data() {
    return {
      activeIndex: "1",
      value:'',
        options: [{
          value: '1',
          label: '已选择学生'
        }, {
          value: '2',
          label: '未选择学生'
        },
        ]
    };
  },
};
</script>

<style scoped>
.hrs{
    margin-top: 3px;
    margin-bottom: 20px;
    width: 100%;
    height: 2px;
    background-color:#eeb824;
}
</style>