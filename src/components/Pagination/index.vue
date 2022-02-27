<template>
  <!-- 分页器 -->
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start>1" @click="$emit('getPageNo',1)" :class="{active : pageNo == 1}">1</button>
    <button v-if="startNumAndEndNum.start>2" >···</button>

    <span v-for="(page,index) in startNumAndEndNum.end" :key="index" @click="$emit('getPageNo',page)">
      <button v-if="page>=startNumAndEndNum.start" :class="{active:pageNo == page}">{{page}}</button>
    </span>

    <button v-if="startNumAndEndNum.end<totalPage - 1">···</button>
    <button v-if="startNumAndEndNum.end<totalPage" @click="$emit('getPageNo',totalPage)" :class="{active : pageNo == totalPage}">{{totalPage}}</button>
    <button :disabled="pageNo == totalPage" @click="$emit('getPageNo',pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props : ['pageNo' , 'pageSize' , 'total' , 'continues'],
  computed : {
    totalPage () {
      return Math.ceil(this.total/this.pageSize)
    },
    startNumAndEndNum(){
      //定义开始与结束页码
      const {continues, pageNo, totalPage} = this;
      let start = 0, end = 0;
      if(continues > totalPage){
        start = 1
        end = totalPage
      }
      else{
        start = pageNo - parseInt(continues/2)
        end = pageNo + parseInt(continues/2)
        //将开始页码为0 负数的时候去掉
        if(start < 1){
          start = 1
          end = continues
        }
        //将end出现大于总页数的时候去掉
        if(end > totalPage){
          end = totalPage
          start = totalPage - continues + 1
        }
      }
      return {start , end}
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
  button {
    margin: 0 10px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-height: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    // &.active {
    //   cursor: not-allowed;
    //   background-color: #6088af;
    //   color: #fff;
    // }
  };
    .active{
      background: skyblue;
    }
};

</style>