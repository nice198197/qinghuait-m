<template>
    <div class="wrapper">
        <cube-scroll 
            ref="scroll"
            :options="options"
            @pulling-down="onPullingDown"
            @pulling-up="onPullingUp">
            <cube-slide :data="slides"/>
            <ul>
                <li v-for="item in lists" class="list">
                    <div class="list-left">
                        <img :src="item.avatar">
                    </div>
                    <div class="list-right">
                        <p>{{item.title}}</p>
                        <p>{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                curentPage: 1,
                pageSize: 9,
                dataMore: true,
                slides: [
                    {
                        url: 'http://www.baidu.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                    },
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                    },
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                    }
                ],
                lists: [],
                options: {
                    pullDownRefresh: {
                        threshold: 50,
                        stop: 40,
                        txt: '刷新成功'
                    },
                    pullUpLoad: {
                        threshold: 0,
                        txt: {
                            more: '加载更多',
                            noMore: '-End-到底了'
                        }
                    }
                },      
            }
        },
        created() {
            this.$http.post('/api/homeList',{curentPage:this.curentPage,pageSize:this.pageSize}).then(function(res) {
                this.lists = res.body.data
                this.hasMore(res)
            },function() {
                const toast = this.$createToast({
                    time: 1000,
                    txt: '数据加载异常，请刷新重试',
                    mask: true
                }).show()
            })
        },
        computed: {
            
        },
        methods: {
            // 上拉刷新
            onPullingDown() {
                // 更新数据
                setTimeout(() => {
                    this.$http.post('/api/homeList',{curentPage:this.curentPage,pageSize:this.pageSize}).then(function(res) {
                        this.lists =res.body.data
                        this.$refs.scroll.forceUpdate()
                    },function() {
                        this.$refs.scroll.forceUpdate()
                    })  
                }, 1000)
            },
            // 下拉加载
            onPullingUp() {
                // 没有更多数据则不滚动
                if (!this.dataMore) {
                    this.$refs.scroll.forceUpdate()
                    return
                }
                this.curentPage ++
                this.$http.post('/api/homeList',{curentPage:this.curentPage,pageSize:this.pageSize}).then(function(res) {
                    this.hasMore(res)
                    this.lists = this.lists.concat(res.body.data)
                    this.$refs.scroll.forceUpdate()
                },function() {
                    this.$refs.scroll.forceUpdate()
                })
            },
            // 判断是否还有更多数据
            hasMore(res) {
                let totalLen = Math.ceil(res.body.total/this.pageSize)
                if (this.curentPage === totalLen) {
                    this.dataMore = false
                }  
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../../common/stylus/mixin.styl'
    .wrapper
        wrapper-absolute()
    .cube-slide
        height auto
    .list
        display flex
        .list-left
            width 50px
            height 50px
            padding 10px
            img 
                width 100%
                height 100%
        .list-right
            flex 1
            display flex
            padding 10px
            align-items center
        
            
</style>
