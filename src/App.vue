<template>
    <div>
        <v-header></v-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import vHeader from './components/header/header'
    import vFooter from './components/footer/footer'
    export default {
        name: 'app',
        data() {
            return {
               
            }
        },
        components: {
            vHeader,
            vFooter
        }   
    }
</script>

<style lang="stylus" scoped>
        
</style>
