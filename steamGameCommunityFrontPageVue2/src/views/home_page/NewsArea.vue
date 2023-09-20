<template>
    <div class="container">
        <div class="core-zone">
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <router-link to="#">
                        <img src="../../assets/img/图片.svg" alt="" />
                        <span class="shaking" @mouseover="startShakeEffect(index)" @mouseleave="stopShakeEffect(index)">
                            {{ item }}
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { startShake, stopShake } from '../../assets/js/NewsArea';

export default {
    name: 'NewsArea',
    data() {
        return {
            items: [
                '本期给大家安利一款游戏社区APP，名字叫“小黑盒”...',
                '小黑盒是一款专为游戏玩家定制的...',
                '支持Steam、Switch、Xbox、PSN平台数据绑定...'
            ]
        };
    },
    methods: {
        startShakeEffect(index) {
            console.log("Received element:", index);
            startShake(document.querySelectorAll('.shaking')[index]);
        },
        stopShakeEffect(index) {
            stopShake(document.querySelectorAll('.shaking')[index]);
        }
    }
};

</script>

<style scoped>
/* 其他样式保持不变 */
/* 清除浮动带来的影响 */
.clear-float::after {
    content: '';
    display: block;
    clear: both;
}

.container {
    width: 500px;
    height: 330px;
    border: 2px solid rgb(67, 45, 202);
    border-radius: 20px;
    /* 添加圆角 */
    margin-left: 20px;
}


.core-zone ul {
    height: 320px;
    padding-left: 0;
}



.core-zone ul li img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
}

.core-zone ul li:last-child {
    margin-bottom: 10px;
}

.core-zone ul li {
    list-style-type: none;
    margin-top: 10px;
    height: 100px;
    /* 设置高度自动，以便多行文本 */
    width: 500px;
    position: relative;
}

.core-zone ul li span {
    display: -webkit-box;
    /* 将文本包装在块级元素中，以支持多行文本 */
    /*设置子元素排列方式*/
    -webkit-box-orient: vertical;
    /*设置显示的行数，多出的部分会显示为...*/
    -webkit-line-clamp: 2;
    height: 36px;
    position: absolute;
    left: 110px;
    top: 30px;
    right: 0;
    bottom: 0;
    font-size: 16px;
    overflow: hidden;
}

/* 鼠标悬浮抖动动画 */
@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-5px);
    }
}

/* 给具有抖动效果的元素添加动画样式 */
.shaking {
    animation: shake 2s infinite;
    /* 播放 2 秒的动画，并设置为无限循环 */
    animation-play-state: paused;
    /* 初始状态下动画暂停 */
}

/* 新添加的样式，用于悬浮时启动动画 */
.shaking:hover {
    animation-play-state: running;
    /* 悬浮时启动动画 */
}
</style>
