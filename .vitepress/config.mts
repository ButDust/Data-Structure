import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// 使用 withMermaid 包裹原本的配置
export default withMermaid(
  defineConfig({
    title: "Data-Structure",
    description: "Algorithm",
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