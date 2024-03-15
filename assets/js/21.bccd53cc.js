(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{409:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"reacthooks记忆"}},[t._v("REACTHOOKS记忆")]),t._v(" "),a("h2",{attrs:{id:"_1-setstate"}},[t._v("1. setState")]),t._v(" "),a("h3",{attrs:{id:"setstate更新状态的2种写法"}},[t._v("setState更新状态的2种写法")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t(1). setState(stateChange, [callback])------对象式的setState\n            1.stateChange为状态改变对象(该对象可以体现出状态的更改)\n            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用\n\t\t\t\t\t\n\t(2). setState(updater, [callback])------函数式的setState\n            1.updater为返回stateChange对象的函数。\n            2.updater可以接收到state和props。\n            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。\n总结:\n\t\t1.对象式的setState是函数式的setState的简写方式(语法糖)\n\t\t2.使用原则：\n\t\t\t\t(1).如果新状态不依赖于原状态 ===> 使用对象方式\n\t\t\t\t(2).如果新状态依赖于原状态 ===> 使用函数方式\n\t\t\t\t(3).如果需要在setState()执行后获取最新的状态数据, \n\t\t\t\t\t要在第二个callback函数中读取\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"_2-lazyload"}},[t._v("2. lazyLoad")]),t._v(" "),a("h3",{attrs:{id:"路由组件的lazyload"}},[t._v("路由组件的lazyLoad")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Login "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/pages/Login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Home "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Suspense fallback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("loading"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Switch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/xxx"')]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Xxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Redirect to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Switch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Suspense"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"_3-hooks"}},[t._v("3. Hooks")]),t._v(" "),a("h4",{attrs:{id:"_1-react-hook-hooks是什么"}},[t._v("1. React Hook/Hooks是什么?")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(1). Hook是React 16.8.0版本增加的新特性/新语法\n(2). 可以让你在函数组件中使用 state 以及其他的 React 特性\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"_2-三个常用的hook"}},[t._v("2. 三个常用的Hook")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(1). State Hook: React.useState()\n(2). Effect Hook: React.useEffect()\n(3). Ref Hook: React.useRef()\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"_3-state-hook"}},[t._v("3. State Hook")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作\n(2). 语法: const [xxx, setXxx] = React.useState(initValue)  \n(3). useState()说明:\n        参数: 第一次初始化指定的值在内部作缓存\n        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数\n(4). setXxx()2种写法:\n        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值\n        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"_4-effect-hook"}},[t._v("4. Effect Hook")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)\n(2). React中的副作用操作:\n        发ajax请求数据获取\n        设置订阅 / 启动定时器\n        手动更改真实DOM\n(3). 语法和说明: \n        useEffect(() => { \n          // 在此可以执行任何带副作用操作\n          return () => { // 在组件卸载前执行\n            // 在此做一些收尾工作, 比如清除定时器/取消订阅等\n          }\n        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行\n    \n(4). 可以把 useEffect Hook 看做如下三个函数的组合\n        componentDidMount()\n        componentDidUpdate()\n    \tcomponentWillUnmount() \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h4",{attrs:{id:"_5-ref-hook"}},[t._v("5. Ref Hook")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据\n(2). 语法: const refContainer = useRef()\n(3). 作用:保存标签对象,功能与React.createRef()一样\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"_4-fragment"}},[t._v("4. Fragment")]),t._v(" "),a("h3",{attrs:{id:"使用"}},[t._v("使用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("<Fragment><Fragment>\n<></>\n")])])]),a("h3",{attrs:{id:"作用"}},[t._v("作用")]),t._v(" "),a("blockquote",[a("p",[t._v("可以不用必须有一个真实的DOM根标签了")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_5-context"}},[t._v("5. Context")]),t._v(" "),a("h3",{attrs:{id:"理解"}},[t._v("理解")]),t._v(" "),a("blockquote",[a("p",[t._v("一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信")])]),t._v(" "),a("h3",{attrs:{id:"使用-2"}},[t._v("使用")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 创建Context容器对象：\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" XxxContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 渲染子组时，外面包裹xxxContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 通过value属性给后代组件传递数据：\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("xxxContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("数据"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t子组件\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxxContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 后代组件读取数据：\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一种方式:仅适用于类组件 ")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" contextType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxxContext  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明接收context")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取context中的value数据")]),t._v("\n\t  \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二种方式: 函数组件与类组件都可以")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("xxxContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value就是context中的value数据")]),t._v("\n\t        要显示的内容\n\t      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxxContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h3",{attrs:{id:"注意"}},[t._v("注意")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("在应用开发中一般不用context, 一般都用它的封装react插件\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"_6-组件优化"}},[t._v("6. 组件优化")]),t._v(" "),a("h3",{attrs:{id:"component的2个问题"}},[t._v("Component的2个问题")]),t._v(" "),a("blockquote",[a("ol",[a("li",[a("p",[t._v("只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低")])]),t._v(" "),a("li",[a("p",[t._v("只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低")])])])]),t._v(" "),a("h3",{attrs:{id:"效率高的做法"}},[t._v("效率高的做法")]),t._v(" "),a("blockquote",[a("p",[t._v("只有当组件的state或props数据发生改变时才重新render()")])]),t._v(" "),a("h3",{attrs:{id:"原因"}},[t._v("原因")]),t._v(" "),a("blockquote",[a("p",[t._v("Component中的shouldComponentUpdate()总是返回true")])]),t._v(" "),a("h3",{attrs:{id:"解决"}},[t._v("解决")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("办法1: \n\t重写shouldComponentUpdate()方法\n\t比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false\n办法2:  \n\t使用PureComponent\n\tPureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true\n\t注意: \n\t\t只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  \n\t\t不要直接修改state数据, 而是要产生新数据\n项目中一般使用PureComponent来优化\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"_7-render-props"}},[t._v("7. render props")]),t._v(" "),a("h3",{attrs:{id:"如何向组件内部动态传入带内容的结构-标签"}},[t._v("如何向组件内部动态传入带内容的结构(标签)?")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Vue中: \n\t使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>\nReact中:\n\t使用children props: 通过组件标签体传入结构\n\t使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性\n")])])]),a("h3",{attrs:{id:"children-props"}},[t._v("children props")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("<A>\n  <B>xxxx</B>\n</A>\n{this.props.children}\n问题: 如果B组件需要A组件内的数据, ==> 做不到 \n")])])]),a("h3",{attrs:{id:"render-props"}},[t._v("render props")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("<A render={(data) => <C data={data}></C>}></A>\nA组件: {this.props.render(内部state数据)}\nC组件: 读取A组件传入的数据显示 {this.props.data} \n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"_8-错误边界"}},[t._v("8. 错误边界")]),t._v(" "),a("h4",{attrs:{id:"理解-2"}},[t._v("理解：")]),t._v(" "),a("p",[t._v("错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面")]),t._v(" "),a("h4",{attrs:{id:"特点"}},[t._v("特点：")]),t._v(" "),a("p",[t._v("只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误")]),t._v(" "),a("h5",{attrs:{id:"使用方式"}},[t._v("使用方式：")]),t._v(" "),a("p",[t._v("getDerivedStateFromError配合componentDidCatch")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生命周期函数，一旦后台组件报错，就会触发")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDerivedStateFromError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在render之前触发")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回新的state")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        hasError"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidCatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 统计页面的错误。发送请求发送到后台去")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"_9-组件通信方式总结"}},[t._v("9. 组件通信方式总结")]),t._v(" "),a("h4",{attrs:{id:"组件间的关系"}},[t._v("组件间的关系：")]),t._v(" "),a("ul",[a("li",[t._v("父子组件")]),t._v(" "),a("li",[t._v("兄弟组件（非嵌套组件）")]),t._v(" "),a("li",[t._v("祖孙组件（跨级组件）")])]),t._v(" "),a("h4",{attrs:{id:"几种通信方式"}},[t._v("几种通信方式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t1.props：\n\t\t(1).children props\n\t\t(2).render props\n\t2.消息订阅-发布：\n\t\tpubs-sub、event等等\n\t3.集中式管理：\n\t\tredux、dva等等\n\t4.conText:\n\t\t生产者-消费者模式\n")])])]),a("h4",{attrs:{id:"比较好的搭配方式"}},[t._v("比较好的搭配方式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t父子组件：props\n\t兄弟组件：消息订阅-发布、集中式管理\n\t祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)\n")])])]),a("h3",{attrs:{id:"消息订阅与发布"}},[t._v("消息订阅与发布")]),t._v(" "),a("ul",[a("li",[t._v("订阅消息\n"),a("ul",[a("li",[t._v("消息名，订阅消息")]),t._v(" "),a("li",[t._v("发布消息")])])])]),t._v(" "),a("h2",{attrs:{id:"消息订阅-发布机制"}},[t._v("消息订阅-发布机制")]),t._v(" "),a("h3",{attrs:{id:"pubsub"}},[t._v("PubSub")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("PubSubJs\nnpm i pubsub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("js\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PubSub "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pubsub-js'")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create a function to subscribe to topics")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mySubscriber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add the function to the list of subscribers for a particular topic")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we're keeping the returned token, in order to be able to unsubscribe")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from the topic later on")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PubSub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MY TOPIC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mySubscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// publish a topic asynchronously")]),t._v("\nPubSub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MY TOPIC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发布了消息")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// publish a topic synchronously, which is faster in some environments,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but will get confusing when one topic triggers new topics in the")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// same execution chain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// USE WITH CAUTION, HERE BE DRAGONS!!!")]),t._v("\nPubSub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publishSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MY TOPIC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);