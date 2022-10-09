const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 빌드 타겟 디렉토리
  outputDir: "../src/main/resources/static",

  devServer: {
    proxy: {
      '/api': {
        // '/api' 로 들어오면 포트 7070(스프링 서버)로 보낸다
        target: 'http://localhost:6060',
        changeOrigin: true // cross origin 허용
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
});
