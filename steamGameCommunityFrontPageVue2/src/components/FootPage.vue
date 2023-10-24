<template>
  <footer>
    <!-- 公共页脚 -->
    <div class="footer-content">
      <p>&copy; 2023 制作不易，请Star | It's not easy to make, please Star</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* 样式可以根据您的需求进行自定义 */
footer {
  color: rgb(240, 113, 218);
  text-align: center;
  font-size: 18px;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 20px; /* 添加顶部间距，可以根据需要进行调整 */
}
</style>
