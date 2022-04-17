<template>
    <div>
<el-tabs type="border-card">
  <el-tab-pane label="题库">
    <question-bank></question-bank>
  </el-tab-pane>
  <el-tab-pane label="试卷库">
      <text-exam-data></text-exam-data>
      </el-tab-pane>
</el-tabs>
    </div>
</template>

<script>
import { QuestionBank ,TextExamData} from "@/components/index";
    export default {
        components: {
            QuestionBank,
            TextExamData
              
        }
    }
</script>

<style lang="scss" scoped>

</style>