<template>
  <div class="home">
    <div>
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="result">
      <el-card>
        <h2>文本预览如下：</h2>
        <!-- 默认的content是一段html代码，使用 v-html 指令可以使其进行转换 -->
        <div class="editor-content" v-html="content" />
      </el-card>
    </div>
  </div>
</template>

<script>
import { Tinymce } from "@/components/index.js";

export default {
  name: "Home",
  components: {
    Tinymce,
  },
  data() {
    return {
      content: "",
    };
  },
};
</script>

<style scoped>
.result {
  margin-top: 20px;
}
</style>
