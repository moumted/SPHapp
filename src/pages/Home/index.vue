<template>
<div>
    <TypeNav></TypeNav>
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
</div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Brand from '@/pages/Home/Brand'
import Floor from '@/pages/Home/Floor'
import Like from '@/pages/Home/Like'
import Rank from '@/pages/Home/Rank'
export default {
    name : 'Home',
    components : {
        ListContainer,
        Recommend,
        Brand,
        Floor,
        Like,
        Rank
    },
    mounted(){
        // 获取用户信息
        this.$store.dispatch('getUserInfo')
    }
}
</script>

<style scoped lang="less">

</style>