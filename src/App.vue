<template>
    <div>
        <v-header></v-header>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import vHeader from './components/header/header'
    export default {
        name: 'app',
        data() {
            return {
               
            }
        },
        components: {
            vHeader
        }   
    }
</script>

<style lang="stylus" scoped>
   
</style>
