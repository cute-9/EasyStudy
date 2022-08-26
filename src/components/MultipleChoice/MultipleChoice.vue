<template>
  <div>
    <el-form :model="dynamicForm">
      <div style="margin-top:20px">
        <el-button type="success" @click="addInput" icon="el-icon-plus"
          >添加选项</el-button
        >
      </div>
      <div>
        <el-checkbox-group v-model="radio" class="tt">
          <el-checkbox
            :label="item.qsOption"
            v-for="(item, index) in dynamicForm.counter"
            :key="index"
            style="margin-bottom: 10px;margin-top:20px"
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
          </el-checkbox>
        </el-checkbox-group>
      </div>
          <el-button @click="sureChoice">保存选项</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
      emits:["MultipChoice"],
  data() {
    return {
      dynamicFormVisible: true,
      radio: [],
      dynamicForm: {
        counter: [],
      },
    };
  },
  methods: {
    addInput() {
      this.dynamicForm.counter.push({
         qsOption:'fad',
        isTrue:0,
      });
      console.log(this.dynamicForm.counter);
    },
    delInput(index) {
      this.dynamicForm.counter.splice(index, 1);
    },
    saveForm() {
      console.log(this.dynamicForm.counter);
    },
        sureChoice(){
      var dataChoice=JSON.parse(JSON.stringify(this.dynamicForm.counter))
    var dataValue=JSON.parse(JSON.stringify(this.radio))
    for(let i=0;i<dataChoice.length;i++){
        var tt=dataChoice[i].qsOption
        for(let j=0;j<dataValue.length;j++){
                if(dataValue[j]==tt){
                    dataChoice[i].isTrue=1
                }
        }
    }
this.$emit('MultipChoice',dataChoice)
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