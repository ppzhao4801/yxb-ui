
module.exports={
    "/pages/component":
    [
        {
            title: 'Basic 基础组件',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1 显示h2
            initialOpenGroupIndex: 0, // 可选的, 默认值是 0
            children: [
                {
                    title: 'Button 按钮',   // 必要的
                    sidebarDepth: 0,    // 可选的, 默认值是 1 0表示不显示
                    path:"/pages/component/button"
                },
                {
                    title: 'Border 边框',   // 必要的
                    sidebarDepth: 0,    // 可选的, 默认值是 1 0表示不显示
                    path:"/pages/component/alert"
                }
            ]
        },
        {
            title: 'Form 表单组件',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
            ]
        }
    ]
}
