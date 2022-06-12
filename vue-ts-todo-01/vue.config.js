const path = require("path");

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src", "assets"),
        "@layouts": path.resolve(__dirname, "src", "layouts"),
        "@components": path.resolve(__dirname, "src", "components"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
    },
  },
});
