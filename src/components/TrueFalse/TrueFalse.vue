<template>
    <div>
  <el-radio-group v-model="radio">
    <el-radio :label="0">对</el-radio>
    <el-radio :label="1">错</el-radio>
  </el-radio-group>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                radio:''
            }
        }
    }
</script>

<style scoped>

</style>