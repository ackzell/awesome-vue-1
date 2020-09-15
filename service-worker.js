/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2abe5c5f542843e92ff8d831b88904fb"
  },
  {
    "url": "assets/css/0.styles.faa55993.css",
    "revision": "135c90cff3040a651b1774cf15c05188"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0697bb0e.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.bff27ce7.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.f75be051.js",
    "revision": "5704ca0cae54e143aab021d95bc347e2"
  },
  {
    "url": "assets/js/13.5129a0e6.js",
    "revision": "9ddadf81d970ec257348a8e29c0de56c"
  },
  {
    "url": "assets/js/14.2c34dbf1.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.aae20716.js",
    "revision": "467ee2b3710f725838abf9d406d93e6d"
  },
  {
    "url": "assets/js/16.2638bdc6.js",
    "revision": "7a5d203fa238cf0aaf6d9c2f0981b36f"
  },
  {
    "url": "assets/js/17.7419e4a0.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.6b2b7329.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.92dc5e77.js",
    "revision": "69894ec1ac755fa3ebccd4b6ba66fb68"
  },
  {
    "url": "assets/js/20.b008f0f9.js",
    "revision": "5b07e3ce272ff85b3cbca77c0ba6a107"
  },
  {
    "url": "assets/js/21.e4c68eef.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.42e4efa8.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.0c5d14a4.js",
    "revision": "35fbe09786e4cdbeeee3d5733f05d5de"
  },
  {
    "url": "assets/js/24.c09453b4.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.74d296f1.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.1de66769.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.7fc57dad.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.db4cff29.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.209e5d3a.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.71767182.js",
    "revision": "42bf27c478e73a1f4d1365adb5937f5c"
  },
  {
    "url": "assets/js/30.ca8c2494.js",
    "revision": "7ba0f93218280270ac6813c7dfa4afba"
  },
  {
    "url": "assets/js/31.d6b03cba.js",
    "revision": "42d4cf8213d5145a9e6e74caecde4611"
  },
  {
    "url": "assets/js/32.0f2f394d.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.51e41ca3.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.23de4028.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.a0b1f594.js",
    "revision": "325d684fdb17210940f579a06f05f8cf"
  },
  {
    "url": "assets/js/36.d2338b1c.js",
    "revision": "7ad90d2549949012c7995cc10531420e"
  },
  {
    "url": "assets/js/37.b29fa909.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.aefcdd70.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.d8b56762.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.98f4d58e.js",
    "revision": "6ff48b173fe48d74f83d91ddae9ed94b"
  },
  {
    "url": "assets/js/8.2d2ea21a.js",
    "revision": "fecec816d169e320f4524396daf5378f"
  },
  {
    "url": "assets/js/9.2a70800e.js",
    "revision": "9b1c61b42c9205e064861563a98294b1"
  },
  {
    "url": "assets/js/app.80568ddf.js",
    "revision": "df210bd7fda39b94f212662d0e00c79b"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "14f50cfc7488822705140568e4b43f06"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "7cb8d84bb4c284303f94370652764967"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "f975809cda63a43fcb6539a92929235d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "28569b0c35372c5bab548ed94c3ea81b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "2846b1ffbf446186a27f2439932bb2fc"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "17f8260ed89d48e848de6d1827393c3c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5f9a7ad59c4c2afc2ae1099dd0bda2ba"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a4db6750fca7eacb84d059079ea4000f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b27b38d9d6710fe2bda658c24a6362ee"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "652df0b34fdfddde50fced3ce47c4eab"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "5cf2c96a8a773375bcba319744496f7c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "25516ad361754362f06e74bab304fb77"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "1053a8eb11899c970bdd6d9846fe656a"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0a65d7f983a545f51cce953805253969"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6ddf23e221d4e3d72ad7cdaa5cf3c5f8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5952ffff3fd146c42ed8df63d88d41a0"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "74a1bc212728514cf05388ce0bba2fe2"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ebff5127923805637ee73ad6458006e9"
  },
  {
    "url": "resources/books.html",
    "revision": "08a27eeca125149b7b5d8f7250583c3f"
  },
  {
    "url": "resources/community.html",
    "revision": "bfd3221ee1a892504832e72de06c22bc"
  },
  {
    "url": "resources/conferences.html",
    "revision": "74cb47211c494198b292630019063445"
  },
  {
    "url": "resources/courses.html",
    "revision": "17a2f7a2e0e86ba1b85c23c70548a4c5"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "155ad77c2a7601b3e119483b5d70ba44"
  },
  {
    "url": "resources/examples.html",
    "revision": "26536c8f5eaef466856caa8528f40a76"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "263b28578cb7596676c9a6718b58a875"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "efd2cf0aa5300402e38b9987f1545dea"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "0b5bd034a28385b2eecc21f698a4a42b"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "998ea058e05a96a5a45749005d4aaa07"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c0e8a2e5544dadd9d990046d37a0b5ed"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "fb3ea8790d5887c2f8640bc0334884c1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "60e527590fe3691dafd4f484a109ab35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
