module.exports = {
    title: 'vuePress模板博客',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: 'GitHub', link: 'https://github.com/caoyezi' },
            { text: 'firstBlog', link: '/blog/FirstBlog.md' },
            { text: '有问题请问我', link: 'https://baidu.com' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
          ]
    }
};