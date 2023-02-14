'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/images/background_dev.jpg": "59c899dbee030dfb7558a63295633ba1",
"assets/assets/images/background.jpg": "bf8b0f3416d7b0287e53e8f9577293c2",
"assets/assets/images/banner_transparent.png": "35530627eff139a96f55e9a25aa48912",
"assets/assets/images/test1.jpg": "e2a2123daeed3b272481b17bf5e1f51b",
"assets/assets/images/banner.png": "b7b91fc794929f050d04b324fbf3daf0",
"assets/assets/images/logo.png": "92263b514208454d65bc71e75afd7e8d",
"assets/assets/export_templates/balita.xlsx": "02f8db678d6ea10aebddd8f675ec81e7",
"assets/assets/export_templates/pengukuran.xlsx": "b90270ff221fc7d2cd8174ca0fabba67",
"assets/assets/link_thumbnails/17.jpg": "e6d20838dbda4785bbbc8db2416c20b1",
"assets/assets/link_thumbnails/13.jpg": "5a133ea96f7339157aa36dd42dbe3ced",
"assets/assets/link_thumbnails/18.jpg": "0f8309fd010c6176957551b847fdc2ec",
"assets/assets/link_thumbnails/26.jpg": "6b8408dc3816770125bf0d2daeff07d1",
"assets/assets/link_thumbnails/22.jpg": "99c155daf96c172c0aae3249a74bae27",
"assets/assets/link_thumbnails/15.jpg": "c62bc6416d75acef74129a9aa7333a6d",
"assets/assets/link_thumbnails/21.jpg": "2c366d8e9e8fed051a0988b8535a867c",
"assets/assets/link_thumbnails/5.jpg": "2120f7d28256300e2e2bdc43d1d5ad79",
"assets/assets/link_thumbnails/6.jpg": "c598e76a3a922d36dfe4903d93f5bd79",
"assets/assets/link_thumbnails/2.jpg": "09b0c81081ffd1ef10b085832716e187",
"assets/assets/link_thumbnails/20.jpg": "7a438aa34be50855bfce6bc4605189d3",
"assets/assets/link_thumbnails/27.jpg": "a768a1eed8848b49273e5d2d371f340e",
"assets/assets/link_thumbnails/19.jpg": "b4b05b9a214e6cbbdd7eb9184422442d",
"assets/assets/link_thumbnails/11.jpg": "33741f84c7fd52d7767ee18848ed3156",
"assets/assets/link_thumbnails/23.jpg": "723d3b58aedd9ff4fde44d3c2fea0926",
"assets/assets/link_thumbnails/16.jpg": "e738d3d0cc741c7e6a37eb95fadc17e7",
"assets/assets/link_thumbnails/28.jpg": "aacfb7ee638c22ebca9c4790e821e7b5",
"assets/assets/link_thumbnails/4.jpg": "af161f89dbd04dea36376c3e86679078",
"assets/assets/link_thumbnails/3.jpg": "945eeb75d75b1330c10e641742cfc3ea",
"assets/assets/link_thumbnails/1.jpg": "1d1320c35a32a96005c0d6fceea6c762",
"assets/assets/link_thumbnails/25.jpg": "6bbe390a77252e2e9993f36bdc0f0df1",
"assets/assets/link_thumbnails/8.jpg": "79087c357c727f776e5631f8a9857bc2",
"assets/assets/link_thumbnails/0.jpg": "fba2cf2df597fb0b4933672852389957",
"assets/assets/link_thumbnails/10.jpg": "ce3dc43fccf75c163042f8f4f7305251",
"assets/assets/link_thumbnails/12.jpg": "1dce04e2ccb56a5dca96e74fc7e341ed",
"assets/assets/link_thumbnails/24.jpg": "581b2ccb59b77291a6b06125c38b9e87",
"assets/assets/link_thumbnails/31.jpg": "d270c88d5b2e87dba981bff35d996985",
"assets/assets/link_thumbnails/14.jpg": "b7588666f7c766a334a8b4a4b83e12c4",
"assets/assets/link_thumbnails/9.jpg": "0170cdc1e8a4d42027489a96af68dec3",
"assets/assets/link_thumbnails/7.jpg": "fe0724928d335f17e1d11ec16bf169aa",
"assets/assets/link_thumbnails/30.jpg": "0e201c7ffd4a254ef1e166ec31893f72",
"assets/assets/link_thumbnails/29.jpg": "b5f11469f7edb8c48dc0b9fe670ea78c",
"assets/assets/articles/03-penanggulanan_stunting-ind.mp3": "301038f2620b2279ed37f92929df3c75",
"assets/assets/articles/08-pengasuhan_anak.jpg": "356b5b67bd0e796ba294a7e3dd642669",
"assets/assets/articles/07-pemenuhan_gizi-ind.mp3": "60d8f960e3d2fb25cf7b0d7e51630130",
"assets/assets/articles/11-lauk_pauk-banjar.mp3": "896f7dc8d323b531e31007add70b4b6f",
"assets/assets/articles/07-pemenuhan_gizi.jpg": "65fdf1e14148cef8f4bf5268956a290d",
"assets/assets/articles/10-makanan_pokok-banjar.mp3": "d4a6cf981282a290bdf3892d5aa1fd9d",
"assets/assets/articles/02-penyebab_stunting-banjar.mp3": "181686456f83dcbf7e15737f81f62a62",
"assets/assets/articles/13-sayur_sayuran-banjar.mp3": "8064c3c3a64b1a704c206d77fc59b682",
"assets/assets/articles/resep_lokal.pdf": "20aa13bf77df01c341a455aea7653744",
"assets/assets/articles/04-asi_makanan-ind.mp3": "42d19a5d9fe9790dd22dcbec79049242",
"assets/assets/articles/08-pengasuhan_anak-banjar.mp3": "a91dd258397a6adb5704b6f57ff298a9",
"assets/assets/articles/03-penanggulanan_stunting-ind.md": "5bedb2282d07a2dc756cce9d19c73c98",
"assets/assets/articles/01-stunting-banjar.mp3": "cce6e61f0956b907a0af9a12a973c6d2",
"assets/assets/articles/09-imunisasi_balita-dayak.mp3": "eafcc46cd18671c9674666326c432c0b",
"assets/assets/articles/10-makanan_pokok-dayak.mp3": "ba93a8923d634028a83bad56b115b757",
"assets/assets/articles/05-kebutuhan_06bulan-dayak.md": "d5e2330a0b41bd4642ef842de837a952",
"assets/assets/articles/resep_keluarga_sehat_tabalong.pdf": "5b16b0d88bba1ef55b8cddc7e3e78975",
"assets/assets/articles/09-imunisasi_balita-ind.mp3": "b0ba7c93a58f36060e2b63af936f13c6",
"assets/assets/articles/08-pengasuhan_anak-dayak.mp3": "06730ba0e45fcd170c8844dcb1c61342",
"assets/assets/articles/13-sayur_sayuran-ind.md": "2b9f8862c8865ac811c6e6b766dd4897",
"assets/assets/articles/09-imunisasi_balita-ind.md": "bee704434a35a1619ccb7162f45a496f",
"assets/assets/articles/05-kebutuhan_06bulan-banjar.md": "360b7106dfda0589d83830b46bf7f8af",
"assets/assets/articles/04-asi_makanan.jpg": "fb5eab802f1fccc7036fd061fd3d4e53",
"assets/assets/articles/12-buah_buahan-banjar.mp3": "45d97dfe5d1dd90bf85e24a01f91f21c",
"assets/assets/articles/05-kebutuhan_06bulan-ind.mp3": "d98099c6ac376a0c762578a38910142b",
"assets/assets/articles/01-stunting-dayak.md": "8093e0339c30f562253581d80753ac0a",
"assets/assets/articles/02-penyebab_stunting-dayak.mp3": "e5336cbe4fab00eaceb7afe1841a12c0",
"assets/assets/articles/09-imunisasi_balita.jpg": "47a988e0c5163a982731a15d8d99e16a",
"assets/assets/articles/06-pendamping_624bulan-ind.md": "c6bce67147a60a3e9acfa64d694fe970",
"assets/assets/articles/05-kebutuhan_06bulan-banjar.mp3": "20db666c5c5fb0a61cf54ca0e3fe4241",
"assets/assets/articles/resep_keluarga_sehat_tabalong.jpg": "4e50650aba9e254982390067173d7fb7",
"assets/assets/articles/06-pendamping_624bulan-banjar.md": "d09e3470550ad4f71ceb833a352e0956",
"assets/assets/articles/02-penyebab_stunting-ind.md": "00633b7d9d24e87ed04b8adec8d3d0d8",
"assets/assets/articles/12-buah_buahan.jpg": "c93847589238c4cd0cee311257a7fc9e",
"assets/assets/articles/05-kebutuhan_06bulan.jpg": "f1b494af8ca7256cc0e7ba7bd17786e8",
"assets/assets/articles/11-lauk_pauk-dayak.mp3": "4afbb0d41dbc6e300c316ae165ed0e50",
"assets/assets/articles/13-sayur_sayuran-dayak.md": "fa09748cd544355c87b635e72fc1735c",
"assets/assets/articles/resep_lokal.jpg": "d0180dd79c8848803049ba50b8883b03",
"assets/assets/articles/14-pencegahan_stunting-dayak.mp3": "26f72323b787a88f2d4d89ea94f3825a",
"assets/assets/articles/11-lauk_pauk-banjar.md": "3c4d3934af7a5998533f3480af2e1bf8",
"assets/assets/articles/12-buah_buahan-ind.mp3": "f67d82223272b86965c54f903db40c90",
"assets/assets/articles/14-pencegahan_stunting-ind.mp3": "d3834ce18b4779fdbce009ffde40d34a",
"assets/assets/articles/01-stunting-ind.mp3": "5e0889098d7ab24205752c109e8692a2",
"assets/assets/articles/10-makanan_pokok-banjar.md": "9117500648d415dc3ab777296e3cd789",
"assets/assets/articles/06-pendamping_624bulan.jpg": "db2bb3437334f60df2e0c2b74275f858",
"assets/assets/articles/11-lauk_pauk.jpg": "f1ff187f7005492afe967c12230a3d0a",
"assets/assets/articles/03-penanggulanan_stunting-banjar.mp3": "550bddbda6c206089da31520257a6b3d",
"assets/assets/articles/14-pencegahan_stunting.jpg": "c5a0664b6f3ad6cd181a57e2bbf3de6d",
"assets/assets/articles/08-pengasuhan_anak-banjar.md": "b7ef9e4636323b0c6ea53afd795a51b2",
"assets/assets/articles/14-pencegahan_stunting-banjar.md": "b287b76c59ee949e74bf4c504919ad28",
"assets/assets/articles/08-pengasuhan_anak-ind.md": "aae32b30dadc86cef40749c2ff42655d",
"assets/assets/articles/06-pendamping_624bulan-ind.mp3": "2fc41c5987734c0c8db076562869a95a",
"assets/assets/articles/10-makanan_pokok-ind.mp3": "abf10516ee5979677d12557a325cce64",
"assets/assets/articles/14-pencegahan_stunting-ind.md": "d712f8a53cedd05872cc53631c6c4bf6",
"assets/assets/articles/01-stunting-dayak.mp3": "523cdd51111f98520db32b73dd478a70",
"assets/assets/articles/07-pemenuhan_gizi-dayak.mp3": "3bf84d45bc87411237da2c0ac1bf1601",
"assets/assets/articles/02-penyebab_stunting-dayak.md": "b53179b6698f0cc84e7b9d1fb4ddcee8",
"assets/assets/articles/11-lauk_pauk-dayak.md": "c710cd6a7489fd324b1d7ed30db1a670",
"assets/assets/articles/10-makanan_pokok-dayak.md": "01b94578688048dbe0deb1b3545e8929",
"assets/assets/articles/09-imunisasi_balita-banjar.mp3": "3785158de3581f1d2b7d1b1c356c6636",
"assets/assets/articles/12-buah_buahan-dayak.mp3": "a43626574fbd2a33e2603c4ca1f665c6",
"assets/assets/articles/05-kebutuhan_06bulan-dayak.mp3": "036e666a4f85d2379e2c485d52570f76",
"assets/assets/articles/12-buah_buahan-ind.md": "859721a35a253688371b400560076600",
"assets/assets/articles/12-buah_buahan-banjar.md": "697a3c0c83e4a48eb0576ecb195b09d5",
"assets/assets/articles/13-sayur_sayuran-banjar.md": "987650a6c162886cba3eac9e69880593",
"assets/assets/articles/01-stunting.jpg": "c163994d4ac77325c99141591f4cfc61",
"assets/assets/articles/02-penyebab_stunting-banjar.md": "8f89c942eef27889f7b46262f91160df",
"assets/assets/articles/04-asi_makanan-dayak.mp3": "fb02ff06761d5c4a7d84b40342035f20",
"assets/assets/articles/resep_keluarga_sehat_unicef.pdf": "3d78a46b2e2ec9da3c834956f939649f",
"assets/assets/articles/07-pemenuhan_gizi-dayak.md": "98c1219fd1343b1eaa9e284de9217504",
"assets/assets/articles/03-penanggulanan_stunting-dayak.md": "be4826adc6d9e67619184fb63c12cdad",
"assets/assets/articles/10-makanan_pokok-ind.md": "00dbdfb5f8d2a7aea52d1090cb8454fe",
"assets/assets/articles/09-imunisasi_balita-dayak.md": "9f732a672baf9614e07abbb6d1c26bbe",
"assets/assets/articles/02-penyebab_stunting.jpg": "979a6a72cc16618adef8bf1c2c3e95a6",
"assets/assets/articles/resep_telur.pdf": "2e424d4963dc586f32a8dd54c92f8d65",
"assets/assets/articles/11-lauk_pauk-ind.mp3": "c1368ebee8dbc455889b87e8f3461e79",
"assets/assets/articles/04-asi_makanan-banjar.mp3": "43bb5f71b6e9fd07a68d4af8db17a872",
"assets/assets/articles/04-asi_makanan-banjar.md": "7d23282b3cae01491dd78132cd72c4f1",
"assets/assets/articles/07-pemenuhan_gizi-banjar.mp3": "581976e83dcb0a3d755b316771a178d9",
"assets/assets/articles/05-kebutuhan_06bulan-ind.md": "cf8b0f61f8b0ca0ffcda6cbea69584c5",
"assets/assets/articles/14-pencegahan_stunting.pdf": "27bdc457384d75fb6494d919d71b60f3",
"assets/assets/articles/11-lauk_pauk-ind.md": "b497de369cd193c1eb0e8f55c1207084",
"assets/assets/articles/04-asi_makanan-ind.md": "161c8c75dbf0d964ad711300b4c06fe2",
"assets/assets/articles/13-sayur_sayuran-dayak.mp3": "5417852bb65d46eb75e3b4bae08863ae",
"assets/assets/articles/01-stunting-banjar.md": "a9b64538250575d9c2f7c8da7acabe6b",
"assets/assets/articles/14-pencegahan_stunting-banjar.mp3": "e358c50dc87962e26b0e74ad8f9de934",
"assets/assets/articles/13-sayur_sayuran.jpg": "1b982b060a90919421f102e3923d9acd",
"assets/assets/articles/06-pendamping_624bulan-banjar.mp3": "9f80d5707ade3caade6df8c616ee2ad6",
"assets/assets/articles/10-makanan_pokok.jpg": "3e790d979232deb88b608064711b2c65",
"assets/assets/articles/08-pengasuhan_anak-ind.mp3": "77dee43f4c0801633e3678d230519a9f",
"assets/assets/articles/03-penanggulanan_stunting-dayak.mp3": "44191f213545b5ef302a50631872bc50",
"assets/assets/articles/09-imunisasi_balita-banjar.md": "87d136d898adc71431071ee9e275baf5",
"assets/assets/articles/13-sayur_sayuran-ind.mp3": "9eacbaa3e2ad25bd01201d11cc3a5334",
"assets/assets/articles/04-asi_makanan-dayak.md": "b897f5aff2c3dd148db0496b1587c62f",
"assets/assets/articles/02-penyebab_stunting-ind.mp3": "9992e20a3023c2608fd11cd0e0e5c528",
"assets/assets/articles/06-pendamping_624bulan-dayak.md": "5da679af4086a5e7a617868582b2801d",
"assets/assets/articles/03-penanggulanan_stunting.jpg": "a7fe081cc85931c6c1629def156c6be0",
"assets/assets/articles/07-pemenuhan_gizi-banjar.md": "c7f2b4b567c1a817915eac60531b03d0",
"assets/assets/articles/resep_telur.jpg": "432c0922fe1f5675f91c1a98d3b6134d",
"assets/assets/articles/resep_keluarga_sehat_unicef.jpg": "823ca63c35ce7538c98afa7e78ddfc12",
"assets/assets/articles/14-pencegahan_stunting-dayak.md": "593a797fd3fd996958f3affe3f535146",
"assets/assets/articles/08-pengasuhan_anak-dayak.md": "44a6df4892e9bb227f9a24171892c7be",
"assets/assets/articles/01-stunting-ind.md": "6ecf3cdd57e4d7a752e8342e3b03b714",
"assets/assets/articles/03-penanggulanan_stunting-banjar.md": "1103edb9554f0cb35812388402484d3c",
"assets/assets/articles/06-pendamping_624bulan-dayak.mp3": "2aeed090ada7b35c57b44f48db6ad2e8",
"assets/assets/articles/07-pemenuhan_gizi-ind.md": "754f270eaefeb9c19cc081a82e5a15f3",
"assets/assets/articles/12-buah_buahan-dayak.md": "6edd2f822e72e72f5bdbff96ccaee37a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "6d6c3f2fd940b69297121bb91a470d32",
"assets/shaders/ink_sparkle.frag": "ec70dcba2f683c816c81323f0135702f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "136d3dc76760f6bfed655ce3345d544e",
"index.html": "e696e4ecb14339f893d2a37388b240fe",
"/": "e696e4ecb14339f893d2a37388b240fe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "a5b32fcccfb82abb22c8e63b5c3ef8af",
"icons/Icon-512.png": "03a777f133cbf012af5d9a88dd42d4f3",
"icons/Icon-maskable-512.png": "03a777f133cbf012af5d9a88dd42d4f3",
"icons/Icon-maskable-192.png": "a5b32fcccfb82abb22c8e63b5c3ef8af",
"main.dart.js": "ea1afcae961a96a1ff946766c72bc653",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"version.json": "c10b9d73ce4de4c8b207e2ae54be33a3",
"manifest.json": "cd273ad4b49d6700c9e55015d95389c6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
