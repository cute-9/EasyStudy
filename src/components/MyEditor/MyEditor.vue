<template>
  <div>
    <div style="border: 1px solid #ccc; margin-top: 10px;">
      <!-- 工具栏 -->
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
      />
      <!-- 编辑器 -->
      <Editor
        style="height: 300px; overflow-y: hidden"
        :defaultConfig="editorConfig"
        v-model="myeditor"
        @onCreated="onCreated"
      />
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
export default {
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      myeditor: "",
      toolbarConfig: {
        // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
        excludeKeys: ["group-more-style"],
      },
      editorConfig: {
        placeholder: "请输入内容...",
        // autoFocus: false,
        // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {},
      },
    };
  },
  methods: {
      sumbit() {
    //            this.myeditor = this.myeditor.replace(/<[^<>]+>/g, "").replace(
    //     /&nbsp;/gi,
    //     ""
    //   );
console.log(this.myeditor);
      },
    onCreated(editor) {
      this.editor = Object.seal(editor); // 【注意】一定要用 Object.seal() 否则会报错
    },
    getEditorText() {
      const editor = this.editor;
      if (editor == null) return;

    //   console.log(editor.getText()); // 执行 editor API
    },
    printEditorHtml() {
      const editor = this.editor;
      if (editor == null) return;

    //   console.log(editor.getHtml()); // 执行 editor API
    },
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    // setTimeout(() => {
    //   this.html = "<p>Ajax 异步设置内容 HTML</p>";
    // }, 1500);
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁 editor ，重要！！！
  },
};
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped>
</style>
