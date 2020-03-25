<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <div>
      <el-input
        v-model="listQuery.title"
        placeholder=":Title"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="getList"
      ></el-input>
      <el-input
        v-model="listQuery.author"
        placeholder=":Author"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="getList"
      ></el-input>
      <el-select v-model="listQuery.sort" placeholder="请选择排序方式" @change="getList">
        <el-option
          label="升序"
          value="0"
        ></el-option>
        <el-option
          label="降序"
          value="1"
        ></el-option>
      </el-select>
    </div>
    <el-table :data="list">
      <el-table-column label="ID" prop="id" align="center" width="80"></el-table-column>
      <el-table-column label="Title" prop="id" align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Author" prop="id" align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="DisplayTime" prop="id" align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.display_time}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" prop="id" align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.status}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="getList"
      :total="total"
      :page-size="listQuery.limit"
      layout="total, prev, pager, next"
      :current-page.sync="listQuery.page"
    />
  </div>
</template>

<style>
</style>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        limit: 20,
        page: 1,
        title: "",
        author: "",
        sort: ''
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      Axios.get("/vue-element-admin/article/list", {
        params: this.listQuery // 查询对象
      }).then(response => {
        // console.log(response.data.list);
        this.list = response.data.list;
        this.total = response.data.total;
      });
    }
  }
};
</script>
