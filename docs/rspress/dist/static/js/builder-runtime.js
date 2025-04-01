(function() {
var __webpack_modules__ = {

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      if (cachedModule.error !== undefined) throw cachedModule.error;return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
      id: moduleId,
loaded: false,
 exports: {}
      });
      // Execute the module function
      try {
var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
            __webpack_require__.i.forEach(function(handler) { handler(execOptions); });
            module = execOptions.module;
            if (!execOptions.factory) {
              console.error("undefined factory", moduleId)
            }
            execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
            } catch (e) {
            module.error = e;
            throw e;
          }
          // Flag the module as loaded 
 module.loaded = true;
// Return the exports of the module
 return module.exports;

}
// expose the modules object (__webpack_modules__)
 __webpack_require__.m = __webpack_modules__;
// expose the module cache
 __webpack_require__.c = __webpack_module_cache__;
// expose the module execution interceptor
 __webpack_require__.i = [];
// webpack/runtime/has_own_property
(function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// es
(function() {
__webpack_require__.es = function (from, to) {
	Object.keys(from).forEach(function (k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k))
			Object.defineProperty(to, k, {
				enumerable: true,
				get: function () {
					return from[k];
				}
			});
	});
	return from;
};

})();
// webpack/runtime/load_chunk_with_module
(function() {
var map = {"./docs/components/button.mdx": ["148",],"./docs/components/feedback/loadingindicator.mdx": ["887",],"./docs/components/forms/checkbox.mdx": ["579",],"./docs/components/forms/textinput.mdx": ["217",],"./docs/components/index.mdx": ["647",],"./docs/components/media/avatar.mdx": ["734",],"./docs/components/media/icon.mdx": ["267",],"./docs/components/media/image.mdx": ["164",],"./docs/components/typography.mdx": ["362",],"./docs/guide/accessibility.mdx": ["441",],"./docs/guide/installation.mdx": ["77",],"./docs/guide/introduction.mdx": ["893",],"./docs/index.mdx": ["375",],};

__webpack_require__.el = function(module) {
  var chunkId = map[module];
  if (chunkId === undefined) {
      return Promise.resolve();
  }
  if (chunkId.length > 1) {
    return Promise.all(chunkId.map(__webpack_require__.e));
  } else {
    return __webpack_require__.e(chunkId[0]);
  };
}

})();
// webpack/runtime/ensure_chunk
(function() {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = function (chunkId) {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce(function (promises, key) {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};

})();
// webpack/runtime/public_path
(function() {
__webpack_require__.p = "/";

})();
// webpack/runtime/get_chunk_filename/__webpack_require__.u
(function() {
// This function allow to reference chunks
        __webpack_require__.u = function (chunkId) {
          // return url for filenames based on template
          return {"148": "static/js/async/148.js","164": "static/js/async/164.js","217": "static/js/async/217.js","267": "static/js/async/267.js","362": "static/js/async/362.js","375": "static/js/async/375.js","441": "static/js/async/441.js","579": "static/js/async/579.js","647": "static/js/async/647.js","734": "static/js/async/734.js","77": "static/js/async/77.js","887": "static/js/async/887.js","893": "static/js/async/893.js",}[chunkId];
        };
      
})();
// webpack/runtime/get_chunk_filename/__webpack_require__.k
(function() {
// This function allow to reference chunks
        __webpack_require__.k = function (chunkId) {
          // return url for filenames based on template
          return {"333": "static/css/333.css",}[chunkId];
        };
      
})();
// webpack/runtime/load_script
(function() {
var inProgress = {};

// var dataWebpackPrefix = "webpack:";
// loadScript function to load a script via script tag
__webpack_require__.l = function loadScript(url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (
				s.getAttribute("src") == url
				// || s.getAttribute("data-webpack") == dataWebpackPrefix + key
			) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement("script");

		script.charset = "utf-8";
		script.timeout = 120;
		// script.setAttribute("data-webpack", dataWebpackPrefix + key);
		script.src = url;

		if (false && script.src.indexOf(window.location.origin + '/') !== 0) {
			script.crossOrigin = false;
		}
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: "timeout",
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/hot_module_replacement
(function() {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
// TODO: not needed in rspack temporary,
// TODO: because we transfer all changed modules.
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) {
		return require;
	}
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
					request +
					") from disposed module " +
					moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId) {
		return trackBlockingPromise(require.e(chunkId));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) {
				hot._selfAccepted = true;
			} else if (typeof dep === "function") {
				hot._selfAccepted = dep;
			} else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () {};
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () {};
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) {
				hot._selfDeclined = true;
			} else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._declinedDependencies[dep[i]] = true;
				}
			} else {
				hot._declinedDependencies[dep] = true;
			}
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx > 0) {
				hot._disposeHandlers.splice(idx, 1);
			}
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) {
				return currentStatus;
			}
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStats) {
	currentStatus = newStats;
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++) {
		results[i] = registeredStatusHandlers[i].call(null, newStats);
	}
	return Promise.all(results);
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) {
		return fn();
	}
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	}
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
					[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						} else {
							return setStatus("ready").then(function () {
								return updatedModules;
							});
						}
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) {
			result.dispose();
		}
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) {
			error = err;
		}
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) {
						list.push(moduleId);
					}
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) {
			currentUpdateApplyHandlers = [];
		}
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}

})();
// webpack/runtime/on_chunk_loaded
(function() {
var deferred = [];
__webpack_require__.O = function (result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0],
			fn = deferred[i][1],
			priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function (key) {
					return __webpack_require__.O[key](chunkIds[j]);
				})
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/get_main_filename/__webpack_require__.hmrF
(function() {
__webpack_require__.hmrF = function () {
            return 'builder-runtime.' + __webpack_require__.h() + '.hot-update.json';
         };
        
})();
// webpack/runtime/get_chunk_update_filename
(function() {
__webpack_require__.hu = function (chunkId) {
            return '' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js';
         };
        
})();
// webpack/runtime/get_full_hash
(function() {
__webpack_require__.h = function () {
	return "de9a1d50b15c6f68";
};

})();
// webpack/runtime/global
(function() {
__webpack_require__.g = (function () {
	if (typeof globalThis === "object") return globalThis;
	try {
		return this || new Function("return this")();
	} catch (e) {
		if (typeof window === "object") return window;
	}
})();

})();
// webpack/runtime/define_property_getters
(function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/make_namespace_object
(function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/compat_get_default_export
(function() {
// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function(module) {
	// var getter = module && module.__esModule ?
    //     function() { return module['default']; } :
    //     function() { return module; }
	// __webpack_require__.d(getter, { a: getter });
	// return getter;
	return module && module.__esModule ? module['default'] : module;
};
})();
// webpack/runtime/create_fake_namespace_object
(function() {
var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__ };
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
	__webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return  value[key]; } });
	}
	def['default'] = function() { return value };
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/node_module_decorator
(function() {
__webpack_require__.nmd = function(module) {
    module.paths = [];
    if (!module.children) module.children = [];
    return module;
}
})();
// webpack/runtime/css_loading
(function() {
var installedChunks = {"builder-runtime": 0,"lib-lodash": 0,"lib-polyfill": 0,"lib-react": 0,"lib-router": 0,"main": 0,};
var uniqueName = "webpack";
// loadCssChunkData is unnecessary
var loadingAttribute = "data-webpack-loading";
var loadStylesheet = function(chunkId, url, done, hmr) {
	var link,
		needAttach,
		key = "chunk-" + chunkId;
	if (!hmr) {
		var links = document.getElementsByTagName("link");
		for (var i = 0; i < links.length; i++) {
			var l = links[i];
			var href = l.getAttribute("href") || l.href;
			if (href && !href.startsWith(__webpack_require__.p)) {
				href =
					__webpack_require__.p + (href.startsWith("/") ? href.slice(1) : href);
			}
			if (
				l.rel == "stylesheet" &&
				((href && href.startsWith(url)) ||
					l.getAttribute("data-webpack") == uniqueName + ":" + key)
			) {
				link = l;
				break;
			}
		}
		if (!done) return link;
	}
	if (!link) {
		needAttach = true;
		link = document.createElement("link");
		link.setAttribute("data-webpack", uniqueName + ":" + key);
		link.setAttribute(loadingAttribute, 1);
		link.rel = "stylesheet";
		link.href = url;

		if (false && link.href.indexOf(window.location.origin + '/') !== 0) {
			link.crossOrigin = false;
		}
	}
	var onLinkComplete = function (prev, event) {
		link.onerror = link.onload = null;
		link.removeAttribute(loadingAttribute);
		clearTimeout(timeout);
		if (event && event.type != "load") link.parentNode.removeChild(link);
		done(event);
		if (prev) return prev(event);
	};
	if (link.getAttribute(loadingAttribute)) {
		var timeout = setTimeout(
			onLinkComplete.bind(null, undefined, { type: "timeout", target: link }),
			120000
		);
		link.onerror = onLinkComplete.bind(null, link.onerror);
		link.onload = onLinkComplete.bind(null, link.onload);
	} else onLinkComplete(undefined, { type: "load", target: link });
	hmr
		? hmr.parentNode.insertBefore(link, hmr)
		: needAttach && document.head.appendChild(link);
	return link;
};
__webpack_require__.f.css = function (chunkId, promises) {
	// css chunk loading
	var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
		? installedChunks[chunkId]
		: undefined;
	if (installedChunkData !== 0) {
		// 0 means "already installed".

		// a Promise means "currently loading".
		if (installedChunkData) {
			promises.push(installedChunkData[2]);
		} else {
			if (['333'].indexOf(chunkId) > - 1) {
				// setup Promise in chunk cache
				var promise = new Promise(function (resolve, reject) {
					installedChunkData = installedChunks[chunkId] = [resolve, reject];
				});
				promises.push((installedChunkData[2] = promise));

				// start chunk loading
				var url = __webpack_require__.p + __webpack_require__.k(chunkId);
				// create error before stack unwound to get useful stacktrace later
				var error = new Error();
				var loadingEnded = function (event) {
					if (__webpack_require__.o(installedChunks, chunkId)) {
						installedChunkData = installedChunks[chunkId];
						if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
						if (installedChunkData) {
							if (event.type !== "load") {
								var errorType = event && event.type;
								var realSrc = event && event.target && event.target.src;
								error.message =
									"Loading css chunk " +
									chunkId +
									" failed.\n(" +
									errorType +
									": " +
									realSrc +
									")";
								error.name = "ChunkLoadError";
								error.type = errorType;
								error.request = realSrc;
								installedChunkData[1](error);
							} else {
								// loadCssChunkData(__webpack_require__.m, link, chunkId);
								installedChunkData[0]();
							}
						}
					}
				};
				var link = loadStylesheet(chunkId, url, loadingEnded);
			} else installedChunks[chunkId] = 0;
		}
	}
};
// TODO: diffrent with webpack
// webpack using `loadCssChunkData` and detect css variables to add install chunk.
// Because rspack the css chunk is always generate one js chunk, so here use js chunk to add install chunk.
var loadCssChunkCallback = function (parentChunkLoadingFunction, data) {
	var chunkIds = data[0];
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (var i = 0; i < chunkIds.length; i++) {
		if (installedChunks[chunkIds[i]] === undefined) {
			installedChunks[chunkIds[i]] = 0;
		}
	}
};
var chunkLoadingGlobal = self['webpackChunkfluid_react_native_docs'] = self['webpackChunkfluid_react_native_docs'] || [];
chunkLoadingGlobal.push = loadCssChunkCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);var oldTags = [];
var newTags = [];
var applyHandler = function (options) {
	return {
		dispose: function () {},
		apply: function () {
			var moduleIds = [];
			newTags.forEach(function (info) {
				info[1].sheet.disabled = false;
			});
			while (oldTags.length) {
				var oldTag = oldTags.pop();
				if (oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
			}
			while (newTags.length) {
				var info = newTags.pop();
				// var chunkModuleIds = loadCssChunkData(__webpack_require__.m, info[1], info[0]);
				// chunkModuleIds.forEach(function(id) {
				//     moduleIds.push(id)
				// });
			}
			return moduleIds;
		}
	};
};
var cssTextKey = function (link) {
	return Array.from(link.sheet.cssRules, function (r) {
		return r.cssText
	}).join();
};
__webpack_require__.hmrC.css = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	chunkIds.forEach(function (chunkId) {
		var filename = __webpack_require__.k(chunkId);
		var url = __webpack_require__.p + filename;
		var oldTag = loadStylesheet(chunkId, url);
		if (!oldTag) return;
		promises.push(
			new Promise(function (resolve, reject) {
				var link = loadStylesheet(
					chunkId,
					url + (url.indexOf("?") < 0 ? "?" : "&") + "hmr=" + Date.now(),
					function (event) {
						if (event.type !== "load") {
							var error = new Error();
							var errorType = event && event.type;
							var realSrc = event && event.target && event.target.src;
							error.message =
								"Loading css hot update chunk " +
								chunkId +
								" failed.\n(" +
								errorType +
								": " +
								realSrc +
								")";
							error.name = "ChunkLoadError";
							error.type = errorType;
							error.request = realSrc;
							reject(error);
						} else {
							try {
								if (cssTextKey(oldTag) == cssTextKey(link)) {
									if (link.parentNode) link.parentNode.removeChild(link);
									return resolve();
								}
							} catch (e) {}
							// var factories = {};
							// loadCssChunkData(factories, link, chunkId);
							// Object.keys(factories).forEach(function(id) {
							//     (updatedModulesList.push(id));
							// });
							link.sheet.disabled = true;
							oldTags.push(oldTag);
							newTags.push([chunkId, link]);
							resolve();
						}
					},
					oldTag
				);
			})
		);
	});
};

})();
// webpack/runtime/jsonp_chunk_loading
(function() {
var installedChunks = {"builder-runtime": 0,};
__webpack_require__.f.j = function (chunkId, promises) {
	// JSONP chunk loading for javascript
	var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
		? installedChunks[chunkId]
		: undefined;
	if (installedChunkData !== 0) {
		// 0 means "already installed".

		// a Promise means "currently loading".
		if (installedChunkData) {
			promises.push(installedChunkData[2]);
		} else {
			if (['148','164','217','267','333','362','375','441','579','647','734','77','887','893','lib-lodash','lib-polyfill','lib-react','lib-router','main'].indexOf(chunkId) > - 1) {
				// setup Promise in chunk cache
				var promise = new Promise(function (resolve, reject) {
					installedChunkData = installedChunks[chunkId] = [resolve, reject];
				});
				promises.push((installedChunkData[2] = promise));

				// start chunk loading
				var url = __webpack_require__.p + __webpack_require__.u(chunkId);
				// create error before stack unwound to get useful stacktrace later
				var error = new Error();
				var loadingEnded = function (event) {
					if (__webpack_require__.o(installedChunks, chunkId)) {
						installedChunkData = installedChunks[chunkId];
						if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
						if (installedChunkData) {
							var errorType =
								event && (event.type === "load" ? "missing" : event.type);
							var realSrc = event && event.target && event.target.src;
							error.message =
								"Loading chunk " +
								chunkId +
								" failed.\n(" +
								errorType +
								": " +
								realSrc +
								")";
							error.name = "ChunkLoadError";
							error.type = errorType;
							error.request = realSrc;
							installedChunkData[1](error);
						}
					}
				};
				__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
			} else installedChunks[chunkId] = 0;
		}
	}
};
var currentUpdatedModulesList;
var waitingUpdateResolves = {};
function loadUpdateChunk(chunkId, updatedModulesList) {
	currentUpdatedModulesList = updatedModulesList;
	return new Promise(function (resolve, reject) {
		// start update chunk loading
		var url = __webpack_require__.p + __webpack_require__.hu(chunkId);

		waitingUpdateResolves[chunkId] = resolve;
		// create error before stack unwound to get useful stacktrace later
		var error = new Error();
		var loadingEnded = function (event) {
			if (waitingUpdateResolves[chunkId]) {
				waitingUpdateResolves[chunkId] = undefined;
				var errorType =
					event && (event.type === "load" ? "missing" : event.type);
				var realSrc = event && event.target && event.target.src;
				error.message =
					"Loading hot update chunk " +
					chunkId +
					" failed.\n(" +
					errorType +
					": " +
					realSrc +
					")";
				error.name = "ChunkLoadError";
				error.type = errorType;
				error.request = realSrc;
				reject(error);
			}
		};
		__webpack_require__.l(url, loadingEnded);
	});
}

self["hotUpdate"] = function (chunkId, moreModules, runtime) {
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
			currentUpdate[moduleId] = moreModules[moduleId];
			if (currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
		}
	}
	if (runtime) currentUpdateRuntime.push(runtime);
	if (waitingUpdateResolves[chunkId]) {
		waitingUpdateResolves[chunkId]();
		waitingUpdateResolves[chunkId] = undefined;
	}
};
var currentUpdateChunks;
var currentUpdate;
var currentUpdateRemovedChunks;
var currentUpdateRuntime;
function applyHandler(options) {
	if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
	currentUpdateChunks = undefined;
	function getAffectedModuleEffects(updateModuleId) {
		var outdatedModules = [updateModuleId];
		var outdatedDependencies = {};
		var queue = outdatedModules.map(function (id) {
			return {
				chain: [id],
				id: id
			};
		});
		while (queue.length > 0) {
			var queueItem = queue.pop();
			var moduleId = queueItem.id;
			var chain = queueItem.chain;
			var module = __webpack_require__.c[moduleId];
			if (
				!module ||
				(module.hot._selfAccepted && !module.hot._selfInvalidated)
			) {
				continue;
			}

			if (module.hot._selfDeclined) {
				return {
					type: "self-declined",
					chain: chain,
					moduleId: moduleId
				};
			}

			if (module.hot._main) {
				return {
					type: "unaccepted",
					chain: chain,
					moduleId: moduleId
				};
			}

			for (var i = 0; i < module.parents.length; i++) {
				var parentId = module.parents[i];
				var parent = __webpack_require__.c[parentId];
				if (!parent) {
					continue;
				}
				if (parent.hot._declinedDependencies[moduleId]) {
					return {
						type: "declined",
						chain: chain.concat([parentId]),
						moduleId: moduleId,
						parentId: parentId
					};
				}
				if (outdatedModules.indexOf(parentId) !== -1) {
					continue;
				}
				if (parent.hot._acceptedDependencies[moduleId]) {
					if (!outdatedDependencies[parentId]) {
						outdatedDependencies[parentId] = [];
					}
					addAllToSet(outdatedDependencies[parentId], [moduleId]);
					continue;
				}
				delete outdatedDependencies[parentId];
				outdatedModules.push(parentId);
				queue.push({
					chain: chain.concat([parentId]),
					id: parentId
				});
			}
		}

		return {
			type: "accepted",
			moduleId: updateModuleId,
			outdatedModules: outdatedModules,
			outdatedDependencies: outdatedDependencies
		};
	}

	function addAllToSet(a, b) {
		for (var i = 0; i < b.length; i++) {
			var item = b[i];
			if (a.indexOf(item) === -1) a.push(item);
		}
	}

	var outdatedDependencies = {};
	var outdatedModules = [];
	var appliedUpdate = {};

	var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
		console.warn(
			"[HMR] unexpected require(" + module.id + ") to disposed module"
		);
	};

	for (var moduleId in currentUpdate) {
		if (__webpack_require__.o(currentUpdate, moduleId)) {
			var newModuleFactory = currentUpdate[moduleId];
			var result;
			if (newModuleFactory) {
				result = getAffectedModuleEffects(moduleId);
			} else {
				result = {
					type: "disposed",
					moduleId: moduleId
				};
			}
			var abortError = false;
			var doApply = false;
			var doDispose = false;
			var chainInfo = "";
			if (result.chain) {
				chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
			}
			switch (result.type) {
				case "self-declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of self decline: " + result.moduleId + chainInfo
						);
					break;
				case "declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of declined dependency: " +
								result.moduleId +
								" in " +
								result.parentId +
								chainInfo
						);
					break;
				case "unaccepted":
					if (options.onUnaccepted) options.onUnaccepted(result);
					if (!options.ignoreUnaccepted)
						abortError = new Error(
							"Aborted because " + moduleId + " is not accepted" + chainInfo
						);
					break;
				case "accepted":
					if (options.onAccepted) options.onAccepted(result);
					doApply = true;
					break;
				case "disposed":
					if (options.onDisposed) options.onDisposed(result);
					doDispose = true;
					break;
				default:
					throw new Error("Unexception type " + result.type);
			}
			if (abortError) {
				return {
					error: abortError
				};
			}
			if (doApply) {
				appliedUpdate[moduleId] = newModuleFactory;
				addAllToSet(outdatedModules, result.outdatedModules);
				for (moduleId in result.outdatedDependencies) {
					if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
						if (!outdatedDependencies[moduleId])
							outdatedDependencies[moduleId] = [];
						addAllToSet(
							outdatedDependencies[moduleId],
							result.outdatedDependencies[moduleId]
						);
					}
				}
			}
			if (doDispose) {
				addAllToSet(outdatedModules, [result.moduleId]);
				appliedUpdate[moduleId] = warnUnexpectedRequire;
			}
		}
	}
	currentUpdate = undefined;

	var outdatedSelfAcceptedModules = [];
	for (var j = 0; j < outdatedModules.length; j++) {
		var outdatedModuleId = outdatedModules[j];
		var module = __webpack_require__.c[outdatedModuleId];
		if (
			module &&
			(module.hot._selfAccepted || module.hot._main) &&
			// removed self-accepted modules should not be required
			appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
			// when called invalidate self-accepting is not possible
			!module.hot._selfInvalidated
		) {
			outdatedSelfAcceptedModules.push({
				module: outdatedModuleId,
				require: module.hot._requireSelf,
				errorHandler: module.hot._selfAccepted
			});
		}
	}

	var moduleOutdatedDependencies;
	return {
		dispose: function () {
			currentUpdateRemovedChunks.forEach(function (chunkId) {
				delete installedChunks[chunkId];
			});
			currentUpdateRemovedChunks = undefined;

			var idx;
			var queue = outdatedModules.slice();
			while (queue.length > 0) {
				var moduleId = queue.pop();
				var module = __webpack_require__.c[moduleId];
				if (!module) continue;

				var data = {};

				// Call dispose handlers
				var disposeHandlers = module.hot._disposeHandlers;
				for (j = 0; j < disposeHandlers.length; j++) {
					disposeHandlers[j].call(null, data);
				}
				__webpack_require__.hmrD[moduleId] = data;

				module.hot.active = false;

				delete __webpack_require__.c[moduleId];

				delete outdatedDependencies[moduleId];

				for (j = 0; j < module.children.length; j++) {
					var child = __webpack_require__.c[module.children[j]];
					if (!child) continue;
					idx = child.parents.indexOf(moduleId);
					if (idx >= 0) {
						child.parents.splice(idx, 1);
					}
				}
			}

			var dependency;
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						for (j = 0; j < moduleOutdatedDependencies.length; j++) {
							dependency = moduleOutdatedDependencies[j];
							idx = module.children.indexOf(dependency);
							if (idx >= 0) module.children.splice(idx, 1);
						}
					}
				}
			}
		},
		apply: function (reportError) {
			// insert new code
			for (var updateModuleId in appliedUpdate) {
				if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
					__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
				}
			}

			// run new runtime modules
			for (var i = 0; i < currentUpdateRuntime.length; i++) {
				currentUpdateRuntime[i](__webpack_require__);
			}

			// call accept handlers
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					var module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						var callbacks = [];
						var errorHandlers = [];
						var dependenciesForCallbacks = [];
						for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
							var dependency = moduleOutdatedDependencies[j];
							var acceptCallback = module.hot._acceptedDependencies[dependency];
							var errorHandler = module.hot._acceptedErrorHandlers[dependency];
							if (acceptCallback) {
								if (callbacks.indexOf(acceptCallback) !== -1) continue;
								callbacks.push(acceptCallback);
								errorHandlers.push(errorHandler);
								dependenciesForCallbacks.push(dependency);
							}
						}
						for (var k = 0; k < callbacks.length; k++) {
							try {
								callbacks[k].call(null, moduleOutdatedDependencies);
							} catch (err) {
								if (typeof errorHandlers[k] === "function") {
									try {
										errorHandlers[k](err, {
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k]
										});
									} catch (err2) {
										if (options.onErrored) {
											options.onErrored({
												type: "accept-error-handler-errored",
												moduleId: outdatedModuleId,
												dependencyId: dependenciesForCallbacks[k],
												error: err2,
												originalError: err
											});
										}
										if (!options.ignoreErrored) {
											reportError(err2);
											reportError(err);
										}
									}
								} else {
									if (options.onErrored) {
										options.onErrored({
											type: "accept-errored",
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k],
											error: err
										});
									}
									if (!options.ignoreErrored) {
										reportError(err);
									}
								}
							}
						}
					}
				}
			}

			// Load self accepted modules
			for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
				var item = outdatedSelfAcceptedModules[o];
				var moduleId = item.module;
				try {
					item.require(moduleId);
				} catch (err) {
					if (typeof item.errorHandler === "function") {
						try {
							item.errorHandler(err, {
								moduleId: moduleId,
								module: __webpack_require__.c[moduleId]
							});
						} catch (err2) {
							if (options.onErrored) {
								options.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: moduleId,
									error: err2,
									originalError: err
								});
							}
							if (!options.ignoreErrored) {
								reportError(err2);
								reportError(err);
							}
						}
					} else {
						if (options.onErrored) {
							options.onErrored({
								type: "self-accept-errored",
								moduleId: moduleId,
								error: err
							});
						}
						if (!options.ignoreErrored) {
							reportError(err);
						}
					}
				}
			}

			return outdatedModules;
		}
	};
}

__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
	if (!currentUpdate) {
		currentUpdate = {};
		currentUpdateRuntime = [];
		currentUpdateRemovedChunks = [];
		applyHandlers.push(applyHandler);
	}
	if (!__webpack_require__.o(currentUpdate, moduleId)) {
		currentUpdate[moduleId] = __webpack_require__.m[moduleId];
	}
};

__webpack_require__.hmrC.jsonp = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	currentUpdateChunks = {};
	currentUpdateRemovedChunks = removedChunks;
	currentUpdate = removedModules.reduce(function (obj, key) {
		obj[key] = false;
		return obj;
	}, {});
	currentUpdateRuntime = [];
	chunkIds.forEach(function (chunkId) {
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId] !== undefined
		) {
			promises.push(loadUpdateChunk(chunkId, updatedModulesList));
			currentUpdateChunks[chunkId] = true;
		} else {
			currentUpdateChunks[chunkId] = false;
		}
	});
	if (__webpack_require__.f) {
		__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
			if (
				currentUpdateChunks &&
				__webpack_require__.o(currentUpdateChunks, chunkId) &&
				!currentUpdateChunks[chunkId]
			) {
				promises.push(loadUpdateChunk(chunkId));
				currentUpdateChunks[chunkId] = true;
			}
		};
	}
};
__webpack_require__.hmrM = function () {
	if (typeof fetch === "undefined")
		throw new Error("No browser support: need fetch API");
	return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(
		function (response) {
			if (response.status === 404) return; // no update available
			if (!response.ok)
				throw new Error(
					"Failed to fetch update manifest " + response.statusText
				);
			return response.json();
		}
	);
};
__webpack_require__.O.j = function (chunkId) {
	return installedChunks[chunkId] === 0;
};
// install a JSONP callback for chunk loading
var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
	var chunkIds = data[0],
	moreModules = data[1],
	runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId,
		chunkId,
		i = 0;
	if (chunkIds.some(function(id) { return installedChunks[id] !== 0 })) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self['webpackChunkfluid_react_native_docs'] = self['webpackChunkfluid_react_native_docs'] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);

})();

})()
