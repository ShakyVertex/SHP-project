<template lang="en">
    <!-- 全局组件：三级联动 -->
    <div>
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"/>
        <Brand/>
    </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import TypeNav from '../../components/TypeNav'
import { mapState } from 'vuex'
export default {
    name: 'home-page',
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
        TypeNav,
    },
    mounted() {
        this.$store.dispatch('getFloorList')
    },
    computed: {
        ...mapState({
            floorList: (state) => state.home.floorList
        })
    }
}
</script>

<style lang="en">
    
</style>