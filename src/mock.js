import Mock from "mockjs";

// 备案项目列表
Mock.mock("http://localhost:9999/api/v1/recProjectList", "get", {
  ok: "@integer(0,1)",
  data: [
    {
      id: 1,
      number: "2020-01",
      name: "备案项目一",
      status: "有效", // 0代表有效
      schedule: "板结（通过）",
      dateDay: "2020-06-19"
    },
    {
      id: 2,
      number: "2020-02",
      name: "备案项目二",
      status: "有效", // 0代表有效
      schedule: "板结（通过）",
      dateDay: "2020-06-18"
    }
  ]
});

var arr = [
  {
    id: 1,
    number: "2020-01",
    name: "备案项目一",
    city: "备案项目一所在地址",
    pri: "300万元",
    text:
      "项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容",
    unit: "备案项目一的建设单位",
    organ: "发展和改革局",
    dateDay: "2020年06月19日",
    review: "2020年06月19日",
    date_d: "2020年09月01日 - 2020年11月01日",
    schedule: "板结（通过）"
  },
  {
    id: 2,
    number: "2020-02",
    name: "备案项目二",
    city: "备案项目二所在地址",
    pri: "300万元",
    text:
      "项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容",
    unit: "备案项目二的建设单位",
    organ: "发展和改革局",
    dateDay: "2020年06月18日",
    review: "2020年06月18日",
    date_d: "2020年09月01日 - 2020年11月01日",
    schedule: "板结（通过）"
  }
];

// 备案项目列表详情
Mock.mock(
  /http:\/\/localhost:9999\/api\/v1\/recProjectDetails\/\d/,
  "get",
  function(options) {
    // console.log(options)
    var str = options.url;
    var id = str.charAt(str.length - 1);
    for (var i in arr) {
      if (arr[i].id == id) {
        return arr[i];
      }
    }
    data = {
      data: arr[i],
      status: 1,
      messsage: "成功"
    };
    return data;
  }
);

// 核准项目列表

Mock.mock("http://localhost:9999/api/v1/chkProjectList", "get", {
  ok: "@integer(0,1)",
  data: [
    {
      id: 1,
      number: "2020-01",
      name: "核准项目一",
      schedule: "管理部门一",
      date: "2020-06-19"
    },
    {
      id: 2,
      number: "2020-02",
      name: "核准项目二",
      schedule: "管理部门二",
      date: "2020-06-18"
    }
  ]
});

var arr2 = [
  {
    id: 1,
    number: "2020-01",
    name: "备案项目一",
    declare: "核准项目一申报单位",
    schedule: "核准项目一管理单位",
    city: "备案项目一所在地址",
    pri: "300万元",
    text:
      "项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容项目一的规模及内容",
    unit: "项目一的审批部门",
    pom: "000000000",
    dateDay: "2020年06月18日",
    review: "2020年06月19日"
  },
  {
    id: 2,
    number: "2020-02",
    name: "备案项目二",
    declare: "核准项目二申报单位",
    schedule: "核准项目二管理单位",
    city: "备案项目一所在地址",
    pri: "300万元",
    text:
      "项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容项目二的规模及内容",
    unit: "项目二的审批部门",
    pom: "000000000",
    dateDay: "2020年06月18日",
    review: "2020年06月19日"
  }
];

// 核准项目列表详情
Mock.mock(
  /http:\/\/localhost:9999\/api\/v1\/chkProjectDetails\/\d/,
  "get",
  function(options) {
    var str = options.url;
    var id = str.charAt(str.length - 1);
    for (var i in arr2) {
      if (arr2[i].id == id) {
        return arr2[i];
      }
    }
    data = {
      data: arr2[i],
      status: 1,
      messsage: "成功"
    };
    return data;
  }
);
