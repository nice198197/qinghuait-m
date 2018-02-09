<template>
    <!--  滚动区域 -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <ul class="list">
                <li v-for="list in lists">
                    <div class="list-img">
                        <img :src="list.avatar">
                    </div>
                    <div class="list-text">
                        <p>{{list.content}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'

    const ERR_OK = 0;

    export default {
        data () {
            return {
                lists: [
                    
                ] 
            }
        },
        created() {
            const url = '/api/homeList';
            this.$http.get(url).then((res) => {
                res = res.body;
                if (res.errno === ERR_OK) {
                    console.log(res)
                    this.lists = res.data;
                    this.$nextTick(() => {
                        this.scroll = new BScroll(this.$refs.wrapper, {
                            click: true
                        });
                    });
                }
            });
        },
        mounted () {
           
        },
        methods: {

        },
        components: {
           
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../common/stylus/mixin.styl'
    .wrapper
        wrapper-absolute()
        .list
            li
                display flex
                padding 15px
                .list-img
                    flex 0 0 62px
                    width 62px
                    height 62px
                    margin-right 20px
                    img 
                        width 100%
                        height 100%
                .list-text
                    display flex
                    flex 1
                    align-items center
</style>
