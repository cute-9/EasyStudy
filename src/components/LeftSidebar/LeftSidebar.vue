<template>
    <div class="left_sider">
        <div  style="margin-left:20px">
<div class="tt">
    <p>题量：{{total}}</p>
    <p>总分：{{total_grade}}</p>
</div>
<p>1.{{exam_titles}}（共{{exam_total}}题，{{exam_grade}}分）</p>
<div>
fd
</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                total:22,
                total_grade:22,
                exam_titles:'单选题',
                exam_total:2,
                exam_grade:20
            }
        }
    }
</script>

<style  scoped>
.left_sider{
    margin-top: 20px;
    width: 400px;
    height: 1000px;
    background-color:white;
}
.tt{
    width: 60%;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
p{
    line-height:40px
}
</style>