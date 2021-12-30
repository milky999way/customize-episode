module.exports = {
  assetPrefix: '/episode',
  publicRuntimeConfig: { 
    staticFolder: '/episode/public'
  },
  // trailingSlash: true, // 클라이언트 사이드 라우팅에서만 리디렉션됨(새로고침시 404페이지)
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  poweredByHeader: false
}