export default {
  "/frontend/js/": [
    {
      text: "Js基础",
      collapsible: true,
      children: ["/frontend/js/basic/loop.md"],
    },
    {
      text: "Js进阶",
      collapsible: true,
      children: ["/frontend/js/advanced/eventloop.md", "/frontend/js/advanced/this.md"],
    },
  ],
  "/frontend/vue/": [
    {
      text: "Vue特性",
      collapsible: false,
      children: ["/frontend/vue/guide/lifeCycle.md","/frontend/vue/guide/VueRouter.md"],
    },
    {
      text: "Vue源码分析",
      collapsible: true,
      children: ["/frontend/vue/sourceCode/eventloop.md", "/frontend/js/advanced/this.md"],
    },
  ],
  "/interview/": [
    {
      text: "1-10题",
      collapsible: true,
      children: ["/interview/1to10.md"],
    },
    {
      text: "11-20题",
      collapsible: true,
      children: ["/interview/11to20.md"],
    },
  ],
  
};
