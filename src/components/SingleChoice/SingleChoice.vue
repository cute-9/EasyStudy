<template>
  <div>
    <el-form :model="dynamicForm">
      <div style="margin-top:20px">
        <el-button type="success" @click="addInput" icon="el-icon-plus"
          >添加选项</el-button
        >
      </div>
      <div>
        <el-radio-group v-model="radio" class="tt">
          <el-radio
            :label="item.xxName"
            v-for="(item, index) in dynamicForm.counter"
            :key="index"
            style="margin-bottom: 10px;margin-top:20px"
          >
                    {{String.fromCharCode(index+65)}}
              <el-input
                style="width: 230px"
                v-model="item.xxName"
                placeholder="选项答案"
                autocomplete="off"
              ></el-input>
              <el-button
                type="danger"
                @click="delInput(index)"
                icon="el-icon-minus"
              ></el-button>
          </el-radio>
        </el-radio-group>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicFormVisible: true,
      radio: "",
      dynamicForm: {
        counter: [],
      },
    };
  },
  methods: {
    addInput() {
      this.dynamicForm.counter.push({
        xxName: "",
      });
      console.log(this.dynamicForm.counter);
    },
    delInput(index) {
      this.dynamicForm.counter.splice(index, 1);
    },
    saveForm() {
      console.log(this.dynamicForm.counter);
    },
  },
};
</script>

<style scoped>
.tt {
  width:600px;
  /* align-items: center; */
}
</style>