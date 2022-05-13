export const devServer = {
    proxy: {
        '/api/magicStick': { 
          target: 'https://dorothymagic.com:8080',
          changeOrigin: true,
        },
    }
    // 3000 포트에서 vue 개발 서버를 실행합니다.
    //port: 3000
};