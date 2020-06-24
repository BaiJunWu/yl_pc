<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>核准项目列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card>
      <el-row :grtter="20">
        <el-col>
          <el-input v-model="query" placeholder="请搜索项目名称">
            <el-button slot="append" icon="el-icon-search" @click="queryClick()"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table :data="chkProjectList" style="width: 100%" border stripe>
        <el-table-column prop="number" label="项目代码"></el-table-column>
        <el-table-column prop="name" label="项目名称"></el-table-column>
        <el-table-column prop="schedule" label="管理部门"></el-table-column>
        <el-table-column prop="date" label="备案通过日期"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scoped">
            <el-button type="primary" size="mini" @click="getDicById(scoped)"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹出框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
    >
    <el-form label-width="200px">
          <el-form-item label="项目代码">{{ chkProjectDetails.number }}</el-form-item>
          <el-form-item label="项目名称"> {{ chkProjectDetails.name }}</el-form-item>
          <el-form-item label="申报单位"> {{ chkProjectDetails.declare }}</el-form-item>
          <el-form-item label="管理单位"> {{ chkProjectDetails.schedule }}</el-form-item>
          <el-form-item label="项目所在地">{{ chkProjectDetails.city }} </el-form-item>
          <el-form-item label="总投资">{{ chkProjectDetails.pri }} </el-form-item>
          <el-form-item label="项目规模及主要内容"> {{ chkProjectDetails.text }}</el-form-item>
          <el-form-item label="审批部门">{{ chkProjectDetails.unit }} </el-form-item>
          <el-form-item label="联系电话">{{ chkProjectDetails.pom }} </el-form-item>
          <el-form-item label="备案申报日期">{{ chkProjectDetails.dateDay }} </el-form-item>
          <el-form-item label="复核通过日期">{{ chkProjectDetails.review }} </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      chkProjectList: [], // 核准项目列表
      chkProjectDetails: [], // 核准项目列表详情
      dialogVisible: false
    };
  },
  created() {
    // 核准项目列表
    this.createList();
  },
  methods: {
    // 获取核准项目列表
    createList() {
      this.$axios.get("/chkProjectList").then(res => {
        this.chkProjectList = res.data.data;
      });
    },
    // 核准项目列表搜索
    queryClick() {
      var list = this.chkProjectList.filter(item =>
        item.name.includes(this.query)
      );
      this.chkProjectList = list;
    },
    // 根据id获取核准项目列表详情
    async getDicById(row) {
      this.dialogVisible = true;
      await this.$axios.get(`/chkProjectDetails/${row.row.id}`).then(res => {
        this.chkProjectDetails = res.data;
        console.log(res);
      });
    }
  },
  // 监听核准项目列表搜索
  watch: {
    query: function(newValue, oldBalue) {
      newValue.replace(/(^\s*)|(\s*$)/g, "");
      if (newValue == "") {
        this.createList();
      }
    }
  }
};
</script>
<style></style>
