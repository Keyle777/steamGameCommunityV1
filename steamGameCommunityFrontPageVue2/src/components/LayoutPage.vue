<template>
    <div class="main">
        <NavigationBar />
    </div>
</template>
<script>
import NavigationBar from './NavigationBar.vue';
export default {
    name: "LayoutPage",
    components: {
        NavigationBar
    },
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<style>
html,
body {
    font-family: "alimama" !important;
    font-size: 0;
}
</style>