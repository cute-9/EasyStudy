<template>
    <div class="container_create">
           <div class="header_title">
        <div class="header_left">
          <div class="header_left">
            <h3>标题：</h3>
            <el-input v-model="examtitle" style="width: 150px"></el-input>
          </div>
          <div class="header_left">
            <h3>难易程度：</h3>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <el-button @click="SaveReturn">保存并返回</el-button>
    </div>
    <div class="main_sidebar">
    <left-sidebar></left-sidebar>
<create-question></create-question>
    </div>
    </div>
</template>

<script>
import {CreateQuestion ,LeftSidebar} from '@/components/index'
    export default {
        components: {
            CreateQuestion,
            LeftSidebar
             
        },
        data(){
            return {
                value:'',
          examtitle:'',
            options: [{
          value: '选项1',
          label: '容易'
        }, {
          value: '选项2',
          label: '一般'
        }, {
          value: '选项3',
          label: '困难'
        }],
            }
        },
        methods: {
          SaveReturn(){
            this.$router.push('/createExam/ExamPage')
          }
        }
        
    }
</script>

<style  scoped>
.container_create{
  background-color:rgb(230, 230, 230,0.3);
}
.header_title{
    width: 100%;
    height: 80px;
      background-image: url(/img/header.104d4be2.png);
  background-size: cover;
  line-height: 80px;
  color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.header_left{
    width: 50%;
    display: flex;
    align-items: center;

}
.main_sidebar{
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
}
</style>