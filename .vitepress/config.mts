import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrgPage = repositoryName?.endsWith('.github.io')
const base =
  process.env.VITEPRESS_BASE ??
  (process.env.GITHUB_ACTIONS && repositoryName && !isUserOrOrgPage
    ? `/${repositoryName}/`
    : '/')

// 使用 withMermaid 包裹原本的配置
export default withMermaid(
  defineConfig({
    title: "Data-Structure",
    description: "Algorithm",
    base,
    themeConfig: {
      // 导航栏和侧边栏配置
      sidebar: [
        {
          text: '线性结构',
          items: [
            { text: '链表实现', link: '/linear/linked-list' }
          ]
        }
      ]
    }
  })
)
