<template>
    <div class="menu">
        <div class="menu-list" :class="{'show':toShow}">
            <div class="menu-header">
                <img src="./avatar.png">
            </div>
            <ul class="menu-con">
                <li v-for="menu in menus" @click="toHide($event)" ref="liMenu">
                    <router-link :to="menu.link">{{menu.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            toShow: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                menus: [
                    {'title':'首页','link':'/home'},
                    {'title':'关于我们','link':'/aboutUs'},
                    {'title':'新闻列表','link':'/news'}
                ]
            }
        },
        methods: {
            toHide(e) {
                this.$emit('change',false,e.target.innerText)
            }
        },
        components: {

        }
    }
</script>

<style lang="stylus" scoped>
    .menu-list
        position fixed
        top 0
        bottom 0
        width 250px
        left -250px
        z-index 999
        background #2F4056
        transition all .3s ease
        &.show
            transform translateX(250px)
        .menu-header
            text-align center
            padding 60px 0
            img 
                width 100px
                height 100px
                border-radius 50%
    .menu-con
        li
            a
                display block
                padding-left 40px
                height 40px
                line-height 40px
                color #fff

        
 
</style>
