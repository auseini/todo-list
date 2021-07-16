/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\n\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/compareAsc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day?\n *\n * @description\n * Are the given dates in the same day?\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * var result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data.js */ \"./src/Data.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoList.js */ \"./src/TodoList.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass DOM{\r\n    \r\n    static loadPage(){\r\n        if(localStorage.getItem(\"todoList\") === null){\r\n             _Data_js__WEBPACK_IMPORTED_MODULE_0__.default.saveTodoList(new _TodoList_js__WEBPACK_IMPORTED_MODULE_3__.default());\r\n        }\r\n       \r\n\r\n        content.appendChild(DOM.createHeader());\r\n\r\n        //create main  to hold rest of stuff\r\n        const main = document.createElement(\"main\");\r\n        main.setAttribute(\"id\", \"main\");\r\n        content.appendChild(main);\r\n        \r\n        const sidebar = document.createElement(\"div\");\r\n        sidebar.setAttribute(\"id\", \"sidebar\");\r\n        main.appendChild(DOM.createSidebar(sidebar));\r\n\r\n        main.appendChild(DOM.createTasksPage(_Data_js__WEBPACK_IMPORTED_MODULE_0__.default.getTodoList().getProject(\"Today\")));\r\n    }\r\n\r\n    static createHeader(){\r\n        const header = document.createElement(\"header\");\r\n        const title = document.createElement(\"h1\");\r\n        title.textContent = \"Todo List\";\r\n        \r\n        header.appendChild(title);\r\n\r\n        return header;\r\n    }\r\n    \r\n    static createSidebar(sidebar){\r\n      \r\n\r\n        const today = document.createElement(\"p\");\r\n        today.innerHTML = \"Today\";\r\n        today.classList.add(\"projectName\")\r\n        sidebar.appendChild(today);\r\n        \r\n\r\n        const overdue = document.createElement(\"p\");\r\n        overdue.innerHTML = \"Overdue\";\r\n        overdue.classList.add(\"projectName\");\r\n       \r\n        sidebar.appendChild(overdue);\r\n        DOM.displayProjects(sidebar);\r\n        \r\n        return sidebar;\r\n    }\r\n   \r\n    static displayProjects(sidebar){\r\n        //create project object for each project in todolist\r\n        let list = _Data_js__WEBPACK_IMPORTED_MODULE_0__.default.getTodoList().projects;\r\n        for(let i = 2; i < list.length; i++){\r\n            \r\n           sidebar.appendChild(DOM.createProject(list[i].name));\r\n        }\r\n        \r\n    }\r\n\r\n    static createTasksPage(project){\r\n        const tasksArea = document.createElement(\"div\");\r\n        tasksArea.setAttribute(\"id\", \"tasks\");\r\n\r\n        const currProject = document.createElement(\"div\");\r\n        currProject.setAttribute(\"id\", \"currProject\");\r\n        currProject.textContent = project.name;\r\n        tasksArea.appendChild(currProject);\r\n\r\n        const addTask = document.createElement(\"div\");\r\n        addTask.setAttribute(\"id\", \"addTask\");\r\n        addTask.setAttribute(\"class\", \"addTask\");\r\n\r\n        const plusBtn = document.createElement(\"button\");\r\n        plusBtn.setAttribute(\"type\", \"button\");\r\n        plusBtn.setAttribute(\"id\", \"plusBtn\");\r\n        plusBtn.setAttribute(\"class\", \"rotate\");\r\n        plusBtn.addEventListener(\"click\", ()=> {\r\n            taskInput.classList.toggle(\"show\");\r\n            taskInput.value = \"\"\r\n        });\r\n        addTask.appendChild(plusBtn);\r\n\r\n        const taskInput = document.createElement(\"input\");\r\n        taskInput.setAttribute(\"id\", \"taskInput\");\r\n        taskInput.setAttribute(\"class\", \"taskInput\");\r\n        taskInput.setAttribute(\"type\", \"text\");\r\n        taskInput.setAttribute(\"placeholder\", \"Add a task\");\r\n        taskInput.addEventListener(\"keyup\", function(e) {\r\n            e.preventDefault();\r\n            \r\n            //get reference to currentProject\r\n            let currentProject = document.getElementById(\"currProject\");\r\n        //on enter create new task            \r\n            if(e.keyCode ===13 ){\r\n                // Data.addProject(e.target.value);\r\n                _Data_js__WEBPACK_IMPORTED_MODULE_0__.default.addTask(currProject.textContent, new _Task_js__WEBPACK_IMPORTED_MODULE_2__.default(e.target.value));\r\n                plusBtn.click();\r\n            }\r\n        });\r\n        addTask.appendChild(taskInput);\r\n\r\n        tasksArea.appendChild(addTask);\r\n\r\n        DOM.createAllTasks(project, tasksArea);\r\n\r\n        return tasksArea;\r\n    }\r\n    \r\n    static createTask(task){\r\n        const taskDiv = document.createElement(\"div\");\r\n        taskDiv.classList.add(\"task\");\r\n        \r\n        const delBtn = document.createElement(\"button\");\r\n        delBtn.setAttribute(\"type\", \"button\");\r\n        delBtn.id = \"label\";\r\n        delBtn.classList.add(\"delete\");\r\n        delBtn.addEventListener(\"click\", () => {\r\n            let currentProject = document.getElementById(\"currProject\");\r\n            _Data_js__WEBPACK_IMPORTED_MODULE_0__.default.deleteTask(currentProject.textContent,task);\r\n        });\r\n\r\n\r\n        const taskName = document.createElement(\"p\");\r\n        taskName.classList.add(\"taskName\");\r\n        taskName.innerHTML = task.name;\r\n\r\n        const taskDate = document.createElement(\"p\");\r\n        taskDate.classList.add(\"taskDate\");\r\n        taskDate.innerHTML = task.date;\r\n\r\n        taskDiv.appendChild(delBtn);\r\n        taskDiv.appendChild(taskName);\r\n        taskDiv.appendChild(taskDate);\r\n        return taskDiv;\r\n    }\r\n\r\n    static updateTasks(){\r\n        let project = _Data_js__WEBPACK_IMPORTED_MODULE_0__.default.getTodoList().getProject(document.getElementById(\"currProject\").textContent);\r\n        let tasksArea = document.getElementById(\"tasks\");\r\n\r\n        DOM.deleteTasks(tasksArea);\r\n        DOM.createAllTasks(project, tasksArea);\r\n    }\r\n\r\n    static deleteTasks(tasksArea){\r\n        for(let i = tasksArea.childNodes.length - 1; i >= 2; i--){\r\n            tasksArea.removeChild(tasksArea.childNodes[i]);\r\n        }\r\n    }\r\n\r\n    static createAllTasks(project, tasksArea){\r\n         //call function for each task of project, and create divs for them\r\n         for(let i = 0; i < project.tasks.length; i++){\r\n            tasksArea.appendChild(DOM.createTask(project.tasks[i]));\r\n        }\r\n    }\r\n\r\n    static createProject(projectName){\r\n        const element = document.createElement(\"p\");\r\n\r\n        element.innerHTML = projectName;\r\n        element.classList.add(\"projectName\");\r\n        element.id = projectName;\r\n\r\n        element.addEventListener(\"contextmenu\", (e) => {\r\n            e.preventDefault();\r\n\r\n        if(document.getElementById(\"context-menu\")){\r\n                document.getElementById(\"context-menu\").remove();\r\n        }\r\n\r\n            let element = DOM.createContextMenus(e.target.textContent);\r\n            document.body.appendChild(element);\r\n            element.style.top = e.clientY + \"px\" ;\r\n            element.style.left = e.clientX + \"px\";\r\n            element.classList.add(\"active\");\r\n        });\r\n       \r\n        return element;\r\n    }\r\n\r\n    static createContextMenus(name){\r\n        let menu = document.createElement(\"div\");\r\n        menu.classList.add(\"context-menu\");\r\n        menu.id = \"context-menu\";\r\n       \r\n        let rename = document.createElement(\"div\");\r\n        rename.textContent = \"Rename\";\r\n\r\n        rename.classList.add(\"item\");\r\n        menu.style.borderRadius = \"5px 5px 5px 5px\";\r\n        rename.addEventListener(\"click\", () => {\r\n            _Data_js__WEBPACK_IMPORTED_MODULE_0__.default.renameProject(name);\r\n        });\r\n            \r\n        menu.appendChild(rename);\r\n         \r\n        let item = document.createElement(\"div\");\r\n        let img = document.createElement(\"img\");\r\n        img.src = \"images/delete_icon_red.png\"\r\n        item.appendChild(img);\r\n        item.classList.add(\"item\");\r\n        item.classList.add(\"deleteProject\");\r\n        item.style.borderRadius = \"0px 0px 5px 5px\";\r\n        item.addEventListener(\"click\", () =>{\r\n            _Data_js__WEBPACK_IMPORTED_MODULE_0__.default.deleteProject(name);\r\n        });\r\n        \r\n        menu.appendChild(item);\r\n\r\n        //add event listerner that runs once to close the context menu\r\n        window.addEventListener(\"click\", () =>{\r\n            if( document.getElementById(\"context-menu\")){\r\n                document.getElementById(\"context-menu\").remove();\r\n            }\r\n            \r\n        }, {once: true});\r\n        return menu;\r\n    }\r\n\r\n    static updateProjects(){\r\n        let sidebar = document.getElementById(\"sidebar\");\r\n        sidebar.innerHTML = \"\";\r\n        DOM.createSidebar(sidebar);\r\n    }\r\n\r\n    static deleteProjects(sidebar){ \r\n    \r\n        for(let i = sidebar.childNodes.length - 1; i >= 2; i--){\r\n            sidebar.removeChild(sidebar.childNodes[i]);\r\n            \r\n        }\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/Data.js":
/*!*********************!*\
  !*** ./src/Data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Data)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/TodoList.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Data{\r\n    static saveTodoList(list){\r\n        localStorage.setItem(\"todoList\", JSON.stringify(list));\r\n    }\r\n\r\n    static getTodoList(){\r\n        //get todolist from local storage\r\n        const todoList = Object.assign(new _TodoList__WEBPACK_IMPORTED_MODULE_0__.default(), JSON.parse(localStorage.getItem(\"todoList\")));\r\n    \r\n        //need to populate arrays with info from local storage, otherwise it breaks\r\n        todoList.projects = todoList.projects\r\n            .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__.default(), project));\r\n\r\n        todoList.projects\r\n            .forEach((project) => project.tasks = \r\n                project.tasks.map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_2__.default(), task)));\r\n       \r\n      return todoList;\r\n    }\r\n    \r\n    static addProject(name){\r\n        const list = Data.getTodoList();\r\n        console.log(list)\r\n        list.addProject(new _Project__WEBPACK_IMPORTED_MODULE_1__.default(name));\r\n        console.log(list)\r\n        Data.saveTodoList(list);\r\n        _DOM__WEBPACK_IMPORTED_MODULE_3__.default.updateProjects();\r\n    }\r\n\r\n    static deleteProject(name){\r\n        const list = Data.getTodoList();\r\n        list.deleteProject(name);\r\n        Data.saveTodoList(list);\r\n        _DOM__WEBPACK_IMPORTED_MODULE_3__.default.updateProjects();\r\n       \r\n        console.log(\"delete\")\r\n    } \r\n    static renameProject(name){\r\n\r\n        console.log(\"rename\")\r\n    }\r\n\r\n    static addTask(projectName, task){\r\n        const list = Data.getTodoList();\r\n        list.getProject(projectName).addTask(task);\r\n        Data.saveTodoList(list);\r\n        _DOM__WEBPACK_IMPORTED_MODULE_3__.default.updateTasks();\r\n    }\r\n    static deleteTask(projectName, task){\r\n        const list = Data.getTodoList();\r\n        console.log(projectName);\r\n        list.getProject(projectName).removeTask(task.name);\r\n        Data.saveTodoList(list);\r\n        _DOM__WEBPACK_IMPORTED_MODULE_3__.default.updateTasks();\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Data.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\r\n\r\n\r\nclass Project{\r\n    constructor(name){\r\n        this._name = name;\r\n        this._tasks = [];\r\n    }\r\n\r\n    //func to set name\r\n    set name(name){\r\n        this._name = name;\r\n    }\r\n    //func to get name\r\n    get name(){\r\n        return this._name;\r\n    }\r\n    //func to import tasks\r\n    set tasks(tasks){\r\n        this._tasks = tasks;\r\n    }\r\n    //func to get tasks\r\n    get tasks(){\r\n        return this._tasks;\r\n    }\r\n\r\n    //function to get specific task\r\n    getTask(name){\r\n        return this.tasks.find( (task) => task.name === name);\r\n    }\r\n\r\n    //func to add task\r\n    addTask(task){\r\n        if(this.contains(this.tasks)) return;\r\n        this.tasks.push(task);\r\n    }\r\n    //func to remove task\r\n    removeTask(taskName){\r\n        //need to find task by name, otherwise objexts arent exactyl the same\r\n        let task = this.getTask(taskName);\r\n        let index = this.tasks.indexOf(task);\r\n        \r\n        if(index === -1) return;\r\n\r\n        this.tasks.splice(index, 1);\r\n    }\r\n    //check if task already exists\r\n    contains(name){\r\n        return this.tasks.some((task) => task.name === name);\r\n    }\r\n\r\n    //get todays tasks\r\n    getToday(){\r\n        //filter tasks for each element with todays date\r\n        return this.tasks.filter((task) => {\r\n            const date = new Date(task.date);\r\n            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(date));\r\n        }\r\n        );\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n\r\n\r\nclass Task{\r\n    constructor(name){\r\n        this._name = name;\r\n        this._date = \"No Date\";\r\n        this._description = \"\";\r\n    }\r\n\r\n    //getters/setters for name\r\n    set name(name){\r\n        this._name = name;\r\n    }\r\n    get name(){\r\n        return this._name;\r\n    }\r\n\r\n    //setters/getters for date\r\n    set date(date){\r\n        this._date = date;\r\n    }\r\n    get date(){\r\n        return this._date;\r\n    }\r\n\r\n    //setters/getters for disc\r\n    set description(description){\r\n        this._description = description;\r\n    }\r\n    get description(){\r\n        return this._description;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n\r\n\r\n\r\n\r\nclass TodoList {\r\n    constructor(){\r\n        //initialize project holder and add twoprojec\r\n        this._projects = [];\r\n        this._projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__.default(\"Today\"));\r\n        this._projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__.default(\"Overdue\"));\r\n    }\r\n\r\n    //setters/getter for projects\r\n    set projects(projects){\r\n        this._projects = projects;\r\n    }\r\n    get projects(){\r\n        return this._projects;\r\n    }\r\n\r\n    //get individual project\r\n    getProject(name){\r\n        return this.projects.find((project) => project.name === name);\r\n    }\r\n\r\n    //check if project is contained\r\n    contains(projectName){\r\n        return this.projects.some((project) => project.name === projectName);\r\n    }\r\n\r\n    //add project to projects\r\n    addProject(project){\r\n        this.projects.push(project);\r\n    }\r\n    //function to delete project\r\n    deleteProject(projectName){\r\n      \r\n        if(projectName === \"Today\" || projectName === \"Overdue\") return;\r\n    \r\n        let project = this.getProject(projectName);\r\n        let index = (this.projects.indexOf(project));\r\n        \r\n        if(index === -1) return;\r\n\r\n        //splice array\r\n        this.projects.splice(index, 1);\r\n    }\r\n\r\n    //function to update todays project\r\n    updateToday(){\r\n        let today = this.getProject(\"Today\");\r\n\r\n\r\n        //remove entries from today that are no longer today, and move them to Overdue\r\n        today.forEach((task) => {\r\n           if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(date_fns__WEBPACK_IMPORTED_MODULE_3__.default, task.date)) {\r\n               today.splice(today.indexOf(task), 1);\r\n               this.getProject(\"Overdue\").addTask(task);\r\n           }\r\n        });\r\n\r\n\r\n        this.projects.array.forEach(project => {\r\n            if(project.name === \"Today\" || project.name === \"Overdue\")\r\n                return;\r\n            //loop through all projects and add todays tasks if they arent already in project\r\n            project.forEach((task) => {\r\n                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(task.date)){\r\n                    if(!today.contains(task)){\r\n                        today.addTask(task);\r\n                    }\r\n                }\r\n            })\r\n        });\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/TodoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.loadPage);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;