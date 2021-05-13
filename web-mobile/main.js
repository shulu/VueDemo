window.boot = function () {
  const settings = window._CCSettings;
  window._CCSettings = undefined;
  const onProgress = null;

  const { RESOURCES, INTERNAL, MAIN, START_SCENE } = cc.AssetManager.BuiltinBundleName;
  // function setLoadingDisplay () {
  //     // Loading splash scene
  //     var splash = document.getElementById('splash');
  //     var progressBar = splash.querySelector('.progress-bar span');
  //     onProgress = function (finish, total) {
  //         var percent = 100 * finish / total;
  //         if (progressBar) {
  //             progressBar.style.width = percent.toFixed(2) + '%';
  //         }
  //     };
  //     splash.style.display = 'block';
  //     progressBar.style.width = '0%';

  //     cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
  //         splash.style.display = 'none';
  //     });
  // }

  function setLoadingDisplay() {
    // Loading splash scene
    const splash = document.getElementById('splash');
    const progressBar = splash.querySelector('.progressBg_bar');
    const progress_txt = splash.querySelector('.progressBg_txt');
    cc.loader.onProgress = function (completedCount, totalCount, item) {
      if (progressBar) {
        const percent = completedCount / totalCount;
        const wid = (percent * 70 + 400).toFixed(0);
        progressBar.style.width = `${wid}px`;
        if (progress_txt) {
          progress_txt.innerHTML = `${(percent * 30 + 70).toFixed(0)}%`;
        }
      }
    };
    splash.style.display = 'block';
    progressBar.style.width = '0%';

    cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, () => {
      splash.style.display = 'none';
    });
  }
  const onStart = function () {
    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);

    if (cc.sys.isBrowser) {
      setLoadingDisplay();
    }

    if (cc.sys.isMobile) {
      if (settings.orientation === 'landscape') {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
      } else if (settings.orientation === 'portrait') {
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
      }
      cc.view.enableAutoFullScreen(
        [
          cc.sys.BROWSER_TYPE_BAIDU,
          cc.sys.BROWSER_TYPE_BAIDU_APP,
          cc.sys.BROWSER_TYPE_WECHAT,
          cc.sys.BROWSER_TYPE_MOBILE_QQ,
          cc.sys.BROWSER_TYPE_MIUI,
        ].indexOf(cc.sys.browserType) < 0
      );
    }

    // Limit downloading max concurrent task to 2,
    // more tasks simultaneously may cause performance draw back on some android system / browsers.
    // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
    if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
      cc.assetManager.downloader.maxConcurrency = 2;
      cc.assetManager.downloader.maxRequestsPerFrame = 2;
    }

    const { launchScene } = settings;
    const bundle = cc.assetManager.bundles.find(b => b.getSceneInfo(launchScene));

    bundle.loadScene(launchScene, null, onProgress, (err, scene) => {
      if (!err) {
        cc.director.runSceneImmediate(scene);
        if (cc.sys.isBrowser) {
          // show canvas
          const canvas = document.getElementById('GameCanvas');
          canvas.style.visibility = '';
          const div = document.getElementById('GameDiv');
          if (div) {
            div.style.backgroundImage = '';
          }
          console.log(`Success to load scene: ${launchScene}`);
        }
      }
    });
  };

  const option = {
    id: 'GameCanvas',
    debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
    showFPS: settings.debug,
    frameRate: 60,
    groupList: settings.groupList,
    collisionMatrix: settings.collisionMatrix,
  };

  cc.assetManager.init({
    bundleVers: settings.bundleVers,
    remoteBundles: settings.remoteBundles,
    server: settings.server,
  });

  const bundleRoot = [INTERNAL, MAIN];
  settings.hasStartSceneBundle && bundleRoot.push(START_SCENE);
  settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

  let count = 0;
  function cb(err) {
    if (err) {
      return console.error(err.message, err.stack);
    }
    count++;
    if (count === bundleRoot.length + 1) {
      cc.game.run(option, onStart);
    }
  }

  cc.assetManager.loadScript(
    settings.jsList.map(x => `src/${x}`),
    cb
  );

  for (let i = 0; i < bundleRoot.length; i++) {
    cc.assetManager.loadBundle(bundleRoot[i], cb);
  }
};

if (window.jsb) {
  const isRuntime = typeof loadRuntime === 'function';
  if (isRuntime) {
    require('src/settings.js');
    require('src/cocos2d-runtime.js');
    if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
      require('src/physics.js');
    }
    require('jsb-adapter/engine/index.js');
  } else {
    require('src/settings.js');
    require('src/cocos2d-jsb.js');
    if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
      require('src/physics.js');
    }
    require('jsb-adapter/jsb-engine.js');
  }

  cc.macro.CLEANUP_IMAGE_CACHE = true;
  window.boot();
}
