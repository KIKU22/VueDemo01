<template>
    <div class="header">
        <header>
            <ul>
                <li>
                    <router-link to="/">主页</router-link>
                </li>
                <li>
                    <router-link to="/news">新闻</router-link>
                </li>
                <li>
                    <router-link to="/shequ">社区</router-link>
                </li>
                <li>
                    <router-link to="/phone">电话</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
ul li{
    list-style: none;
    float: left;
    padding: 10px;
}
header{
    background-color: #666;
    height: 45px;
}
a{
    color: #fff;
}
</style>