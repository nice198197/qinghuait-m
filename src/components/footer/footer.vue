<template>
    <div class="footer">
        <p>这是固定底部</p>
    </div>
    
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
               
            };
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
        position fixed
        bottom 0
        width 100%
        height 50px
        background #2F4056
        p
            text-align center
            line-height 50px
</style>