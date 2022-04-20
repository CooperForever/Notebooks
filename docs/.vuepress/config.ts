/*
 * @Description: 
 * @Author: Jiang chen yi
 * @Date: 2022-04-19 12:36:46
 * @LastEditors: Jiang chen yi
 * @LastEditTime: 2022-04-20 14:46:07
 */
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import navbarConfig from './navbarConfig'
import sidebarConfig from './siderbarConfig'

export default defineUserConfig<DefaultThemeOptions>({
  base:"/Notebooks/",
  // 站点配置
  lang: "zh-CN",
  title: "Cooper & Zero",
  description: "纸上得来终觉浅",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: '/images/navbarLogo.png',
    navbar: navbarConfig,
    sidebar: sidebarConfig,
    repo: 'https://github.com/CooperForever',
    editLinks: false,
    editLinkText: '有错误请帮忙指出！',
    notFound:[
      "访问的笔记不存在"
    ],
    backToHome:"返回首页"
  },
});