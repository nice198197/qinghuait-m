<template>
    <div>
        <div class="page-cover" v-show="show" @click="isShow"></div>
        <div class="header" :class="{'show': show}">
            <div class="pull-left">
                logo
            </div>
            <div class="title">{{pageTtile}}</div>
            <div class="pull-right" @click="isShow">
                <i class="iconfont icon-user"></i>
            </div>
        </div>
        <menuList @change="changeShow" :toShow='show'></menuList>
    </div>
    
</template>

<script type="text/ecmascript-6">
    import menuList from '../menu/menu'
    export default {
        data () {
            return {
                show: false,
                pageTtile: '首页'
            };
        },
        methods: {
            isShow() {
                this.show = !this.show
            },
            changeShow(hide,pageTtile) {
                this.show = hide
                this.pageTtile = pageTtile
            }
        },
        components: {
            menuList
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../common/stylus/variable.styl'
    .page-cover
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background rgba(0,0,0,.3)
        z-index 8
    .header
        position fixed
        left 0
        right 0 
        height 60px
        line-height 60px
        background $bg-theme
        transition all .3s ease
        &.show
            transform translateX(250px)
        .pull-left
            position absolute
            left 0
            top 0
            padding 0 10px
            .iconfont
                font-size $font-size-lg
        .title
            text-align center
        .pull-right
            position absolute
            right 0
            top 0
            padding 0 10px
            .iconfont
                font-size $font-size-lg

</style>