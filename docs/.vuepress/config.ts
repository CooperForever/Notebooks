import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import navbarConfig from './navbarConfig'
import sidebarConfig from './siderbarConfig'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "zh-CN",
  title: "Cooper & Zero",
  description: "Note Something",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: navbarConfig,
    sidebar: sidebarConfig,
    repo: 'https://github.com/CooperForever'
  },
});
