<template>
  <el-container class="index">
    <el-aside width="200px" class="aside">
      <!-- 分组 -->
      <el-menu
        background-color="#333744"
        text-color="#fff"
        active-text-color="#409eff"
        :router="true"
      >
        <el-menu-item-group>
          <el-menu-item index="/recProject">
            <i class="el-icon-menu"></i>
            <span>备案项目列表</span>
          </el-menu-item>
          <el-menu-item index="/chkProject">
            <i class="el-icon-menu"></i>
            <span>核准项目列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {

};
</script>

<style lang="less">
.index {
  height: 100%;
}

.aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.main {
  background-color: #eaedf1;
}
</style>
