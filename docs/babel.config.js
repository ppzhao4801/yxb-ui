module.exports = {
    presets: ['@vue/babel-preset-jsx'],
    plugins: [
        [
            "import",
            {
                "libraryName": "yxb-ui",
                "libraryDirectory":"lib/components",
                "styleLibraryDirectory":"lib/styles",
                // "style": (name) => `lib/styles/${name}.css`
            }
        ]
    ]
}