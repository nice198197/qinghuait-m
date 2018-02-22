<template>
    <div class="footer">
        <ul class="tabbar">
            <li v-for="(item,index) in items" class="tabbar-item">
                <router-link :to="item.link">
                    <i :class="item.class"></i>
                    {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                items: [
                    {'title':'首页','link':'/home','class': 'iconfont icon-home'},
                    {'title':'分类','link':'/classify','class': 'iconfont icon-list-numbered'},
                    {'title':'购物车','link':'/shopCart','class': 'iconfont icon-cart'},
                    {'title':'我的','link':'/mine','class': 'iconfont icon-user'}
                ],
                isACtive: true
            }
        },
        methods: {
         
        },
        components: {
            
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../common/stylus/variable.styl'
    .footer 
        height 50px
        position fixed
        bottom 0
        left 0
        right 0
        line-height 50px
        background $bg-theme-d
    .tabbar
        display flex
        width 100%
        height 100%
        .tabbar-item
            flex 1
            text-align center
    .router-link-exact-active
        &.active
            color #5FB878
</style>