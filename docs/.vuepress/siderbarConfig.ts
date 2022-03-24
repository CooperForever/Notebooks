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
      children: [
        "/frontend/js/advanced/websocket.md",
        // "/frontend/js/advanced/this.md",
      ],
    },
  ],
  "/frontend/vue/": [
    {
      text: "Vue特性",
      collapsible: false,
      children: [
        "/frontend/vue/guide/lifeCycle.md",
        "/frontend/vue/guide/VueRouter.md",
        "/frontend/vue/guide/props.md",
      ],
    },
    {
      text: "Vue源码分析",
      collapsible: true,
      children: [
        "/frontend/vue/sourceCode/websocket.md",
        // "/frontend/js/advanced/this.md",
      ],
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
  "/buildtool/": [
    {
      text: "Rollup",
      collapsible: true,
      children: ["/buildtool/rollup/readme.md"],
    },
    {
      text: "Webpack",
      collapsible: true,
      children: ["/buildtool/webpack/readme.md"],
    },
    {
      text: "Vite",
      collapsible: true,
      children: ["/buildtool/vite/readme.md"],
    },
  ],
  "/leetcode/": [
    {
      text: "Stack",
      collapsible: true,
      children: ["/leetcode/stack/validparentheses.md"],
    },
    {
      text: "Queue",
      collapsible: true,
      children: ["/leetcode/queue/recentcall.md"],
    },
    {
      text: "LinkedList",
      collapsible: true,
      children: [
        "/leetcode/linkedlist/delnode.md",
        "/leetcode/linkedlist/reverse-linked-list.md",
        "/leetcode/linkedlist/towsum.md",
        "/leetcode/linkedlist/remove-duplicates-from-sorted-list.md",
        "/leetcode/linkedlist/linked-list-cycle.md",
      ],
    },
    {
      text: "Map&Set",
      collapsible: true,
      children: [
        "/leetcode/dict-set/intersection-of-two-arrays.md",
        "/leetcode/dict-set/longest-str.md",
        "/leetcode/dict-set/min-window-str.md",
      ],
    },
  ],
};
