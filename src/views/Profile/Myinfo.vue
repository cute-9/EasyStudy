<template>
  <div class="profile">
    <h2>个人中心</h2>
    <InlineEditTable></InlineEditTable>
  </div>
</template>

<script>
import { InlineEditTable } from "@/components/index.js";
export default {
  name: "Myinfo",
  components: {
    InlineEditTable,
  },
};
</script>

<style scoped></style>
