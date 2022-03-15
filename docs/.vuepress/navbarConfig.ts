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
            text: "Vue特性",
            link: "/frontend/vue/guide",
          },
          {
            text: "源码分析",
            link: "/frontend/vue/sourcecode",
          },
        ],
      },
      {
        text: "构建工具",
        link: "/buildtool/",
        children: [
          {
            text: "Rollup",
            link: "/buildtool/rollup",
          },
          {
            text: "Vite",
            link: "/buildtool/webpack",
          },
          {
            text: "Webpack",
            link: "/buildtool/vite",
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
        text: "文章",
        link: "/readings/articles/",
      },
      {
        text: "小说",
        link: "/readings/novels/",
      },
    ],
  },
];
