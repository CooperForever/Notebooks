export default [
  // NavbarItem
  {
    text: "前端笔记",
    link: "/foo/",
    children: [
      {
        text: "JavaScript",
        children: [
          {
            text: "Js基础",
            link: "/frontend/js/basic/loop.md",
          },
          {
            text: "Js进阶",
            link: "/frontend/js/advanced/eventloop.md",
          },
        ],
      },
      {
        text: "Vue",
        link: "/frontend/vue/",
        children: [
          {
            text: "高级特性",
            link: "/frontend/vue/guide",
          },
          {
            text: "源码分析",
            link: "/frontend/vue/sourcecode",
          },
        ],
      },
    ],
  },
  {
    text: "Leetcode",
    link: "/leetcode/",
  },
  {
    text: "面试专项",
    link: "/interview/",
  },
  {
    text: "读书分享",
    children: [
      {
        text: "杂谈",
        link: "/",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "小说",
        link: "/not-foo/",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "^/foo/",
      },
    ],
  },
];
