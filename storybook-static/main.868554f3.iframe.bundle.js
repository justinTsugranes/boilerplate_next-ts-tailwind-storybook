;(self.webpackChunknextjs_tailwind_sanity_and_storybook =
  self.webpackChunknextjs_tailwind_sanity_and_storybook || []).push([
  [179],
  {
    './.storybook/preview.ts-generated-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      var preview_namespaceObject = {}
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          __namedExportsOrder: () => __namedExportsOrder,
          parameters: () => parameters
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.filter.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptor.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptors.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-properties.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js')
      var ClientApi = __webpack_require__('./node_modules/@storybook/client-api/dist/esm/ClientApi.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
        globals = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/globals.css'
        ),
        options = { insert: 'head', singleton: !1 }
      injectStylesIntoStyleTag_default()(globals.Z, options)
      globals.Z.locals
      var parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } }
        },
        __namedExportsOrder = ['parameters']
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        )
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key]
        switch (key) {
          case 'args':
            return (0, ClientApi.uc)(value)
          case 'argTypes':
            return (0, ClientApi.v9)(value)
          case 'decorators':
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1)
            })
          case 'loaders':
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1)
            })
          case 'parameters':
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {}
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                      })
                }
                return target
              })({}, value),
              !1
            )
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer)
            })
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer)
            })
          case 'render':
            return (0, ClientApi.$P)(value)
          case 'globals':
          case 'globalTypes':
            var v = {}
            return (v[key] = value), (0, ClientApi.h1)(v, !1)
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null
          default:
            return console.log(key + ' was not supported :( !')
        }
      })
    },
    './storybook-init-framework-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js')
    },
    './src/stories/Introduction.stories.mdx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => Introduction_stories
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js')
      var esm = __webpack_require__('./node_modules/@mdx-js/react/dist/esm.js'),
        dist_esm = __webpack_require__('./node_modules/@storybook/addon-docs/dist/esm/index.js'),
        next_image = __webpack_require__('./node_modules/next/image.js'),
        image_default = __webpack_require__.n(next_image)
      const code_brackets = {
          src: 'static/media/code-brackets.b174d86c.svg',
          height: 48,
          width: 48,
          blurDataURL: 'static/media/code-brackets.b174d86c.svg'
        },
        colors = {
          src: 'static/media/colors.d8002bff.svg',
          height: 48,
          width: 48,
          blurDataURL: 'static/media/colors.d8002bff.svg'
        },
        comments = {
          src: 'static/media/comments.99a445bb.svg',
          height: 48,
          width: 48,
          blurDataURL: 'static/media/comments.99a445bb.svg'
        },
        direction = {
          src: 'static/media/direction.aa124ee4.svg',
          height: 48,
          width: 48,
          blurDataURL: 'static/media/direction.aa124ee4.svg'
        },
        flow = {
          src: 'static/media/flow.8dcedb2a.svg',
          height: 48,
          width: 48,
          blurDataURL: 'static/media/flow.8dcedb2a.svg'
        },
        public_plugin = {
          src: 'static/media/plugin.738c41b2.svg',
          height: 48,
          width: 48,
          blurDataURL: 'static/media/plugin.738c41b2.svg'
        },
        repo = {
          src: 'static/media/repo.77297c5c.svg',
          height: 48,
          width: 48,
          blurDataURL: 'static/media/repo.77297c5c.svg'
        },
        stackalt = {
          src: 'static/media/stackalt.5cf1d85a.svg',
          height: 48,
          width: 48,
          blurDataURL: 'static/media/stackalt.5cf1d85a.svg'
        }
      var _excluded = ['components']
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i]
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
                }
                return target
              }),
          _extends.apply(this, arguments)
        )
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]))
        }
        return target
      }
      var layoutProps = {}
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded)
        return (0, esm.kt)(
          'wrapper',
          _extends({}, layoutProps, props, { components, mdxType: 'MDXLayout' }),
          (0, esm.kt)(dist_esm.h_, { title: 'Example/Introduction', mdxType: 'Meta' }),
          (0, esm.kt)(
            'style',
            null,
            "\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "
          ),
          (0, esm.kt)('h1', { id: 'welcome-to-storybook' }, 'Welcome to Storybook'),
          (0, esm.kt)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            (0, esm.kt)('strong', { parentName: 'p' }, 'stories'),
            ' to revisit during development, testing, or QA.'
          ),
          (0, esm.kt)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            (0, esm.kt)('inlineCode', { parentName: 'p' }, 'stories'),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            (0, esm.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'nofollow noopener noreferrer'
              },
              (0, esm.kt)('strong', { parentName: 'a' }, 'component-driven')
            ),
            ' process starting with atomic components and ending with pages.'
          ),
          (0, esm.kt)('div', { className: 'subheading' }, 'Configure'),
          (0, esm.kt)(
            'div',
            { className: 'link-list' },
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/addons/addon-types',
                target: '_blank'
              },
              (0, esm.kt)(image_default(), { src: public_plugin, alt: 'plugin', mdxType: 'Image' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Presets for popular tools'),
                'Easy setup for TypeScript, SCSS and more.'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/webpack',
                target: '_blank'
              },
              (0, esm.kt)(image_default(), { src: stackalt, alt: 'Build', mdxType: 'Image' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Build configuration'),
                'How to customize webpack and Babel'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
                target: '_blank'
              },
              (0, esm.kt)(image_default(), { src: colors, alt: 'colors', mdxType: 'Image' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Styling'),
                'How to load and configure CSS libraries'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                target: '_blank'
              },
              (0, esm.kt)(image_default(), { src: flow, alt: 'flow', mdxType: 'Image' }),
              (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'Data'), 'Providers and mocking for data libraries')
            )
          ),
          (0, esm.kt)('div', { className: 'subheading' }, 'Learn'),
          (0, esm.kt)(
            'div',
            { className: 'link-list' },
            (0, esm.kt)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/docs', target: '_blank' },
              (0, esm.kt)(image_default(), { src: repo, alt: 'repo', mdxType: 'Image' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Storybook documentation'),
                'Configure, customize, and extend'
              )
            ),
            (0, esm.kt)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/tutorials/', target: '_blank' },
              (0, esm.kt)(image_default(), { src: direction, alt: 'direction', mdxType: 'Image' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'In-depth guides'),
                'Best practices from leading teams'
              )
            ),
            (0, esm.kt)(
              'a',
              { className: 'link-item', href: 'https://github.com/storybookjs/storybook', target: '_blank' },
              (0, esm.kt)(image_default(), { src: code_brackets, alt: 'code', mdxType: 'Image' }),
              (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'GitHub project'), 'View the source and add issues')
            ),
            (0, esm.kt)(
              'a',
              { className: 'link-item', href: 'https://discord.gg/storybook', target: '_blank' },
              (0, esm.kt)(image_default(), { src: comments, alt: 'comments', mdxType: 'Image' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Discord chat'),
                'Chat with maintainers and the community'
              )
            )
          ),
          (0, esm.kt)(
            'div',
            { className: 'tip-wrapper' },
            (0, esm.kt)('span', { className: 'tip' }, 'Tip'),
            'Edit the Markdown in ',
            (0, esm.kt)('code', null, 'stories/Introduction.stories.mdx')
          )
        )
      }
      ;(MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0)
      var __page = function __page() {
        throw new Error('Docs-only story')
      }
      __page.parameters = { docsOnly: !0 }
      var componentMeta = { title: 'Example/Introduction', includeStories: ['__page'] },
        mdxStoryNameToKey = {}
      ;(componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return (0, esm.kt)(
              dist_esm.aT,
              { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
              (0, esm.kt)(MDXContent, null)
            )
          }
        }))
      const Introduction_stories = componentMeta
      var __namedExportsOrder = ['__page']
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/globals.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/cssWithMappingToString.js'),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/css-loader/dist/runtime/api.js'
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default())
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.inline-block {\n  display: inline-block;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-pink-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(219 39 119 / var(--tw-border-opacity));\n}\n.border-slate-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity));\n}\n.bg-pink-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 39 119 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.font-bold {\n  font-weight: 700;\n}\n.leading-none {\n  line-height: 1;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-slate-700 {\n  --tw-text-opacity: 1;\n  color: rgb(51 65 85 / var(--tw-text-opacity));\n}\n\n:root {\n  --max-width: 1100px;\n  --border-radius: 12px;\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\n\n  --foreground-rgb: 0, 0, 0;\n  --background-start-rgb: 214, 219, 220;\n  --background-end-rgb: 255, 255, 255;\n\n  --primary-glow: conic-gradient(\n    from 180deg at 50% 50%,\n    #16abff33 0deg,\n    #0885ff33 55deg,\n    #54d6ff33 120deg,\n    #0071ff33 160deg,\n    transparent 360deg\n  );\n  --secondary-glow: radial-gradient(\n    rgba(255, 255, 255, 1),\n    rgba(255, 255, 255, 0)\n  );\n\n  --tile-start-rgb: 239, 245, 249;\n  --tile-end-rgb: 228, 232, 233;\n  --tile-border: conic-gradient(\n    #00000080,\n    #00000040,\n    #00000030,\n    #00000020,\n    #00000010,\n    #00000010,\n    #00000080\n  );\n\n  --callout-rgb: 238, 240, 241;\n  --callout-border-rgb: 172, 175, 176;\n  --card-rgb: 180, 185, 188;\n  --card-border-rgb: 131, 134, 135;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --foreground-rgb: 255, 255, 255;\n    --background-start-rgb: 0, 0, 0;\n    --background-end-rgb: 0, 0, 0;\n\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\n    --secondary-glow: linear-gradient(\n      to bottom right,\n      rgba(1, 65, 255, 0),\n      rgba(1, 65, 255, 0),\n      rgba(1, 65, 255, 0.3)\n    );\n\n    --tile-start-rgb: 2, 13, 46;\n    --tile-end-rgb: 2, 5, 19;\n    --tile-border: conic-gradient(\n      #ffffff80,\n      #ffffff40,\n      #ffffff30,\n      #ffffff20,\n      #ffffff10,\n      #ffffff10,\n      #ffffff80\n    );\n\n    --callout-rgb: 20, 20, 20;\n    --callout-border-rgb: 108, 108, 108;\n    --card-rgb: 100, 100, 100;\n    --card-border-rgb: 200, 200, 200;\n  }\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\nbody {\n  color: rgb(var(--foreground-rgb));\n  background: linear-gradient(\n      to bottom,\n      transparent,\n      rgb(var(--background-end-rgb))\n    )\n    rgb(var(--background-start-rgb));\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n  .dark\\:border-pink-700 {\n    --tw-border-opacity: 1;\n    border-color: rgb(190 24 93 / var(--tw-border-opacity));\n  }\n  .dark\\:border-white {\n    --tw-border-opacity: 1;\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n  }\n  .dark\\:bg-pink-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(190 24 93 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-slate-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n  }\n  .dark\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/app/globals.css', '<no source>'],
            names: [],
            mappings:
              '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',
            sourcesContent: [
              "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n  --max-width: 1100px;\n  --border-radius: 12px;\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\n\n  --foreground-rgb: 0, 0, 0;\n  --background-start-rgb: 214, 219, 220;\n  --background-end-rgb: 255, 255, 255;\n\n  --primary-glow: conic-gradient(\n    from 180deg at 50% 50%,\n    #16abff33 0deg,\n    #0885ff33 55deg,\n    #54d6ff33 120deg,\n    #0071ff33 160deg,\n    transparent 360deg\n  );\n  --secondary-glow: radial-gradient(\n    rgba(255, 255, 255, 1),\n    rgba(255, 255, 255, 0)\n  );\n\n  --tile-start-rgb: 239, 245, 249;\n  --tile-end-rgb: 228, 232, 233;\n  --tile-border: conic-gradient(\n    #00000080,\n    #00000040,\n    #00000030,\n    #00000020,\n    #00000010,\n    #00000010,\n    #00000080\n  );\n\n  --callout-rgb: 238, 240, 241;\n  --callout-border-rgb: 172, 175, 176;\n  --card-rgb: 180, 185, 188;\n  --card-border-rgb: 131, 134, 135;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --foreground-rgb: 255, 255, 255;\n    --background-start-rgb: 0, 0, 0;\n    --background-end-rgb: 0, 0, 0;\n\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\n    --secondary-glow: linear-gradient(\n      to bottom right,\n      rgba(1, 65, 255, 0),\n      rgba(1, 65, 255, 0),\n      rgba(1, 65, 255, 0.3)\n    );\n\n    --tile-start-rgb: 2, 13, 46;\n    --tile-end-rgb: 2, 5, 19;\n    --tile-border: conic-gradient(\n      #ffffff80,\n      #ffffff40,\n      #ffffff30,\n      #ffffff20,\n      #ffffff10,\n      #ffffff10,\n      #ffffff80\n    );\n\n    --callout-rgb: 20, 20, 20;\n    --callout-border-rgb: 108, 108, 108;\n    --card-rgb: 100, 100, 100;\n    --card-border-rgb: 200, 200, 200;\n  }\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\nbody {\n  color: rgb(var(--foreground-rgb));\n  background: linear-gradient(\n      to bottom,\n      transparent,\n      rgb(var(--background-end-rgb))\n    )\n    rgb(var(--background-start-rgb));\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n",
              null
            ],
            sourceRoot: ''
          }
        ])
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx),)$':
      (module) => {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        ;(webpackEmptyContext.keys = () => []),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (webpackEmptyContext.id =
            './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx),)$'),
          (module.exports = webpackEmptyContext)
      },
    './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = { './stories/Introduction.stories.mdx': './src/stories/Introduction.stories.mdx' }
        function webpackContext(req) {
          var id = webpackContextResolve(req)
          return __webpack_require__(id)
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'")
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          }
          return map[req]
        }
        ;(webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map)
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$')
      },
    '?4f7e': () => {},
    './generated-stories-entry.cjs': (module, __unused_webpack_exports, __webpack_require__) => {
      'use strict'
      ;(module = __webpack_require__.nmd(module)),
        (0, __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js').configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx),)$'
            )
          ],
          module,
          !1
        )
    }
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
    __webpack_require__.O(
      0,
      [432],
      () => (
        __webpack_exec__('./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'),
        __webpack_exec__('./node_modules/@storybook/core-client/dist/esm/globals/globals.js'),
        __webpack_exec__('./storybook-init-framework-entry.js'),
        __webpack_exec__('./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js'),
        __webpack_exec__('./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'),
        __webpack_exec__('./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js'),
        __webpack_exec__('./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js'),
        __webpack_exec__('./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'),
        __webpack_exec__('./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js'),
        __webpack_exec__('./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js'),
        __webpack_exec__('./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js'),
        __webpack_exec__('./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js'),
        __webpack_exec__('./node_modules/storybook-addon-next/dist/preview.js-generated-config-entry.js'),
        __webpack_exec__('./.storybook/preview.ts-generated-config-entry.js'),
        __webpack_exec__('./generated-stories-entry.cjs')
      )
    )
    __webpack_require__.O()
  }
])
