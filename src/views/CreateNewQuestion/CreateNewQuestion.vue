<template>
    <div class="container_question">
<create-new-question></create-new-question>
    </div>
</template>

<script>
import {CreateNewQuestion} from "@/components/index"
    export default {
        components: {
            CreateNewQuestion
        }
    }
</script>

<style  scoped>
.container_question{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}
</style>