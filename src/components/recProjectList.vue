<template>
  <div class="recProject-list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>备案项目列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card>
      <el-row :grtter="20">
        <el-col>
          <el-input v-model="query" placeholder="请搜索项目名称">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="queryClick"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table :data="recProjectList" style="width: 100%" border stripe>
        <el-table-column prop="number" label="项目编号"></el-table-column>
        <el-table-column prop="name" label="项目名称"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="schedule" label="进度"></el-table-column>
        <el-table-column prop="dateDay" label="备案通过日期"></el-table-column>
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
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">
      <el-form label-width="200px">
          <el-form-item label="备案项目编号">{{ recProjectDetails.number }}</el-form-item>
          <el-form-item label="项目名称"> {{ recProjectDetails.name }}</el-form-item>
          <el-form-item label="项目所在地"> {{ recProjectDetails.city }}</el-form-item>
          <el-form-item label="项目总投资"> {{ recProjectDetails.pri }}</el-form-item>
          <el-form-item label="项目规模及内容">{{ recProjectDetails.text }} </el-form-item>
          <el-form-item label="建设单位">{{ recProjectDetails.unit }} </el-form-item>
          <el-form-item label="备案机关"> {{ recProjectDetails.organ }}</el-form-item>
          <el-form-item label="备案申报日期">{{ recProjectDetails.dateDay }} </el-form-item>
          <el-form-item label="复核通过日期">{{ recProjectDetails.review }} </el-form-item>
          <el-form-item label="项目起止年限">{{ recProjectDetails.date_d }} </el-form-item>
          <el-form-item label="项目当前进度">{{ recProjectDetails.schedule }} </el-form-item>
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
      recProjectList: [], // 备案项目列表
      recProjectDetails: [], // 备案项目列表详情
      dialogVisible: false
    };
  },
  created() {
    // 备案项目列表
    this.createList();
  },
  methods: {
    // 获取备案项目列表
    createList() {
      this.$axios.get("/recProjectList").then(res => {
        this.recProjectList = res.data.data;
      });
    },
    // 搜索备案项目列表
    queryClick() {
      var list = this.recProjectList.filter(item =>
        item.name.includes(this.query)
      );
      this.recProjectList = list;
    },
    // 根据id获取备案项目列表详情
    async getDicById(row) {
      this.dialogVisible = true;
      await this.$axios.get(`/recProjectDetails/${row.row.id}`).then(res => {
        this.recProjectDetails = res.data;
        console.log(this.recProjectDetails);
      });
    }
  },
  // 监听备选列表搜索框
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
