import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import navbarConfig from './navbarConfig'
import sidebarConfig from './siderbarConfig'

export default defineUserConfig<DefaultThemeOptions>({
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
  },
});
