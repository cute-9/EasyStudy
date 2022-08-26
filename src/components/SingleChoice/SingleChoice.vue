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
            v-for="(item, index) in dynamicForm.counter"
            :key="index"
            style="margin-bottom: 10px;margin-top:20px"
             :label="item.qsOption"
          >
                    {{String.fromCharCode(index+65)}}
              <el-input
                style="width: 230px"
                v-model="item.qsOption"
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
      <el-button @click="sureChoice">保存选项</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  emits:["SingleChoice"],
  data() {
    return {
      dynamicFormVisible: true,
      radio: "",
      dynamicForm: {
        counter:[]
      }
    };
  },
  methods: {
    addInput() {
      this.dynamicForm.counter.push({
        qsOption:'fad',
        isTrue:0,
      });
      
    },
    delInput(index) {
      this.dynamicForm.counter.splice(index, 1);
    },
    saveForm() {
      console.log(this.dynamicForm.counter);
    },
    sureChoice(){
      var dataChoice=JSON.parse(JSON.stringify(this.dynamicForm.counter))
      for(let i=0;i<=dataChoice;i++){
        let nums=this.dynamicForm.counter[i].qsOption
        let nums2=this.radio
if(nums2==nums){
this.dynamicForm.counter[i].isTrue=1
}
      }
this.$emit('SingleChoice',dataChoice)
    }
  },
};
</script>

<style scoped>
.tt {
  width:600px;
  /* align-items: center; */
}
</style>