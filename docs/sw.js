const swVersion= 1;
const swFl= [
  '/',
  './index.html',
  './res/logo.png'
]

// 安装
self.addEventListener('install', e=>{
  console.log(1,'serverworker install.')
  cp= caches.open(swVersion).then(cache=>{
    return cache.addAll(swFl)
  });
  e.waitUntil(cp)
});

// 使用
self.addEventListener('fetch', e=>{
  console.log(2, 'fetch enator...') 
  e.respondWith(
    caches.match(e.request)
      .then(cache=>{return cache || fetch(e.request)})
      .catch(err=> {return fetch(e.request)});
  );
});

// 更新
self.addEventListener('activate', e=>{
  console.log(3, 'server file activate...')
});