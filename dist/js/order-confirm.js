/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(127);


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(9);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(10);

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	var store=__webpack_require__(17);
	var header={
	    init:function(){
	       this.bindEvent();
	    },
	    onload:function(){
	        var keyword=store.getUrlParam("keyword");
	        if(keyword){
	            $("#search-input").val(keyword);
	        }
	    },
	    bindEvent:function(){
	        var _this=this;
	        $("#search-btn").click(function(){
	             _this.searchSubmit();
	        });
	        $("#search-input").keyup(function(e){
	           if(e.keyCode===13){
	            _this.searchSubmit();
	           }
	        });
	    },
	    //提交搜索内容
	    searchSubmit:function(){
	        var keyword=$("#search-input").val();
	        if(keyword){
	            window.location.href="./list.html?keyword="+keyword;
	        }else{
	            store.goHome;
	        }
	    },
	}
	module.exports=header.init();


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var conf={
	    serverHost:""
	};
	var hogan=__webpack_require__(18);
	var store={
	    //网络请求
	    request:function(param){
	        var _this=this;
	        $.ajax({
	            type : param.method||"get",
	            url : param.url||"",
	            datatype : param.type||"json",
	            data : param.data||"",
	            success:function(res){
	                if(0===res.status){
	                    if(typeof param.success==="function") param.success(res.data,res.msg);
	                }else if(10===res.status){
	                    _this.doLogin;
	                }else if(1===res.status){
	                    if(typeof param.error==="function") param.error(res.msg);
	                }
	            },
	            error:function(err){
	                if(typeof param.error==="function") param.error(err.statusText);
	            }
	        })
	    },
	    // 获取服务器地址
	    getServerUrl : function(path){
	    return conf.serverHost + path;
	    },
	    //获取URL参数
	    getUrlParam:function(name){
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var result = window.location.search.substr(1).match(reg);
	        return result ? decodeURIComponent(result[2]) : null;
	    },
	    //渲染html模板
	    renderHtml:function(htmlTemplate,data){
	        var template=hogan.compile(htmlTemplate);
	        var result=template.render(data);
	        return result;
	    },
	    successTips:function(msg){
	        alert(msg||"操作成功");
	    },
	    errorTips:function(msg){
	        alert(msg||"操作失败");
	    },
	    //字段验证，空判断，手机，邮箱
	    validate:function(value,type){
	        var value=$.trim(value);
	       if("require"===type){
	        return !!value;
	       }
	       if("email"===type){
	        return /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(value);
	       }
	       if("phone"===type){
	        return /^1\d{10}$/.test(value);
	       }
	       return false;
	    },
	    showLoading: function (target) {
	        if (target instanceof jQuery) {
	            target.html("<div class=\"loading\"></div>");
	        } else {
	            $(target).html("<div class=\"loading\"></div>");
	        }
	    },
	    //登陆处理
	    doLogin:function(){
	        window.location.href="./user-login.html?redirect="+encodeURIComponent(window.location.href);
	    },
	    //返回主页
	    goHome:function(){
	        window.location.href="./index.html";
	    }
	}
	module.exports=store;


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	// This file is for use with Node.js. See dist/ for browser files.

	var Hogan = __webpack_require__(19);
	Hogan.Template = __webpack_require__(20).Template;
	Hogan.template = Hogan.Template;
	module.exports = Hogan;


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	(function (Hogan) {
	  // Setup regex  assignments
	  // remove whitespace according to Mustache spec
	  var rIsWhitespace = /\S/,
	      rQuot = /\"/g,
	      rNewline =  /\n/g,
	      rCr = /\r/g,
	      rSlash = /\\/g,
	      rLineSep = /\u2028/,
	      rParagraphSep = /\u2029/;

	  Hogan.tags = {
	    '#': 1, '^': 2, '<': 3, '$': 4,
	    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
	    '{': 10, '&': 11, '_t': 12
	  };

	  Hogan.scan = function scan(text, delimiters) {
	    var len = text.length,
	        IN_TEXT = 0,
	        IN_TAG_TYPE = 1,
	        IN_TAG = 2,
	        state = IN_TEXT,
	        tagType = null,
	        tag = null,
	        buf = '',
	        tokens = [],
	        seenTag = false,
	        i = 0,
	        lineStart = 0,
	        otag = '{{',
	        ctag = '}}';

	    function addBuf() {
	      if (buf.length > 0) {
	        tokens.push({tag: '_t', text: new String(buf)});
	        buf = '';
	      }
	    }

	    function lineIsWhitespace() {
	      var isAllWhitespace = true;
	      for (var j = lineStart; j < tokens.length; j++) {
	        isAllWhitespace =
	          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
	          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
	        if (!isAllWhitespace) {
	          return false;
	        }
	      }

	      return isAllWhitespace;
	    }

	    function filterLine(haveSeenTag, noNewLine) {
	      addBuf();

	      if (haveSeenTag && lineIsWhitespace()) {
	        for (var j = lineStart, next; j < tokens.length; j++) {
	          if (tokens[j].text) {
	            if ((next = tokens[j+1]) && next.tag == '>') {
	              // set indent to token value
	              next.indent = tokens[j].text.toString()
	            }
	            tokens.splice(j, 1);
	          }
	        }
	      } else if (!noNewLine) {
	        tokens.push({tag:'\n'});
	      }

	      seenTag = false;
	      lineStart = tokens.length;
	    }

	    function changeDelimiters(text, index) {
	      var close = '=' + ctag,
	          closeIndex = text.indexOf(close, index),
	          delimiters = trim(
	            text.substring(text.indexOf('=', index) + 1, closeIndex)
	          ).split(' ');

	      otag = delimiters[0];
	      ctag = delimiters[delimiters.length - 1];

	      return closeIndex + close.length - 1;
	    }

	    if (delimiters) {
	      delimiters = delimiters.split(' ');
	      otag = delimiters[0];
	      ctag = delimiters[1];
	    }

	    for (i = 0; i < len; i++) {
	      if (state == IN_TEXT) {
	        if (tagChange(otag, text, i)) {
	          --i;
	          addBuf();
	          state = IN_TAG_TYPE;
	        } else {
	          if (text.charAt(i) == '\n') {
	            filterLine(seenTag);
	          } else {
	            buf += text.charAt(i);
	          }
	        }
	      } else if (state == IN_TAG_TYPE) {
	        i += otag.length - 1;
	        tag = Hogan.tags[text.charAt(i + 1)];
	        tagType = tag ? text.charAt(i + 1) : '_v';
	        if (tagType == '=') {
	          i = changeDelimiters(text, i);
	          state = IN_TEXT;
	        } else {
	          if (tag) {
	            i++;
	          }
	          state = IN_TAG;
	        }
	        seenTag = i;
	      } else {
	        if (tagChange(ctag, text, i)) {
	          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
	                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
	          buf = '';
	          i += ctag.length - 1;
	          state = IN_TEXT;
	          if (tagType == '{') {
	            if (ctag == '}}') {
	              i++;
	            } else {
	              cleanTripleStache(tokens[tokens.length - 1]);
	            }
	          }
	        } else {
	          buf += text.charAt(i);
	        }
	      }
	    }

	    filterLine(seenTag, true);

	    return tokens;
	  }

	  function cleanTripleStache(token) {
	    if (token.n.substr(token.n.length - 1) === '}') {
	      token.n = token.n.substring(0, token.n.length - 1);
	    }
	  }

	  function trim(s) {
	    if (s.trim) {
	      return s.trim();
	    }

	    return s.replace(/^\s*|\s*$/g, '');
	  }

	  function tagChange(tag, text, index) {
	    if (text.charAt(index) != tag.charAt(0)) {
	      return false;
	    }

	    for (var i = 1, l = tag.length; i < l; i++) {
	      if (text.charAt(index + i) != tag.charAt(i)) {
	        return false;
	      }
	    }

	    return true;
	  }

	  // the tags allowed inside super templates
	  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

	  function buildTree(tokens, kind, stack, customTags) {
	    var instructions = [],
	        opener = null,
	        tail = null,
	        token = null;

	    tail = stack[stack.length - 1];

	    while (tokens.length > 0) {
	      token = tokens.shift();

	      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
	        throw new Error('Illegal content in < super tag.');
	      }

	      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
	        stack.push(token);
	        token.nodes = buildTree(tokens, token.tag, stack, customTags);
	      } else if (token.tag == '/') {
	        if (stack.length === 0) {
	          throw new Error('Closing tag without opener: /' + token.n);
	        }
	        opener = stack.pop();
	        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
	          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
	        }
	        opener.end = token.i;
	        return instructions;
	      } else if (token.tag == '\n') {
	        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
	      }

	      instructions.push(token);
	    }

	    if (stack.length > 0) {
	      throw new Error('missing closing tag: ' + stack.pop().n);
	    }

	    return instructions;
	  }

	  function isOpener(token, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].o == token.n) {
	        token.tag = '#';
	        return true;
	      }
	    }
	  }

	  function isCloser(close, open, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].c == close && tags[i].o == open) {
	        return true;
	      }
	    }
	  }

	  function stringifySubstitutions(obj) {
	    var items = [];
	    for (var key in obj) {
	      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
	    }
	    return "{ " + items.join(",") + " }";
	  }

	  function stringifyPartials(codeObj) {
	    var partials = [];
	    for (var key in codeObj.partials) {
	      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
	    }
	    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
	  }

	  Hogan.stringify = function(codeObj, text, options) {
	    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
	  }

	  var serialNo = 0;
	  Hogan.generate = function(tree, text, options) {
	    serialNo = 0;
	    var context = { code: '', subs: {}, partials: {} };
	    Hogan.walk(tree, context);

	    if (options.asString) {
	      return this.stringify(context, text, options);
	    }

	    return this.makeTemplate(context, text, options);
	  }

	  Hogan.wrapMain = function(code) {
	    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
	  }

	  Hogan.template = Hogan.Template;

	  Hogan.makeTemplate = function(codeObj, text, options) {
	    var template = this.makePartials(codeObj);
	    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
	    return new this.template(template, text, this, options);
	  }

	  Hogan.makePartials = function(codeObj) {
	    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
	    for (key in template.partials) {
	      template.partials[key] = this.makePartials(template.partials[key]);
	    }
	    for (key in codeObj.subs) {
	      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
	    }
	    return template;
	  }

	  function esc(s) {
	    return s.replace(rSlash, '\\\\')
	            .replace(rQuot, '\\\"')
	            .replace(rNewline, '\\n')
	            .replace(rCr, '\\r')
	            .replace(rLineSep, '\\u2028')
	            .replace(rParagraphSep, '\\u2029');
	  }

	  function chooseMethod(s) {
	    return (~s.indexOf('.')) ? 'd' : 'f';
	  }

	  function createPartial(node, context) {
	    var prefix = "<" + (context.prefix || "");
	    var sym = prefix + node.n + serialNo++;
	    context.partials[sym] = {name: node.n, partials: {}};
	    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
	    return sym;
	  }

	  Hogan.codegen = {
	    '#': function(node, context) {
	      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
	                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
	                      't.rs(c,p,' + 'function(c,p,t){';
	      Hogan.walk(node.nodes, context);
	      context.code += '});c.pop();}';
	    },

	    '^': function(node, context) {
	      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
	      Hogan.walk(node.nodes, context);
	      context.code += '};';
	    },

	    '>': createPartial,
	    '<': function(node, context) {
	      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
	      Hogan.walk(node.nodes, ctx);
	      var template = context.partials[createPartial(node, context)];
	      template.subs = ctx.subs;
	      template.partials = ctx.partials;
	    },

	    '$': function(node, context) {
	      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
	      Hogan.walk(node.nodes, ctx);
	      context.subs[node.n] = ctx.code;
	      if (!context.inPartial) {
	        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
	      }
	    },

	    '\n': function(node, context) {
	      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
	    },

	    '_v': function(node, context) {
	      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	    },

	    '_t': function(node, context) {
	      context.code += write('"' + esc(node.text) + '"');
	    },

	    '{': tripleStache,

	    '&': tripleStache
	  }

	  function tripleStache(node, context) {
	    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	  }

	  function write(s) {
	    return 't.b(' + s + ');';
	  }

	  Hogan.walk = function(nodelist, context) {
	    var func;
	    for (var i = 0, l = nodelist.length; i < l; i++) {
	      func = Hogan.codegen[nodelist[i].tag];
	      func && func(nodelist[i], context);
	    }
	    return context;
	  }

	  Hogan.parse = function(tokens, text, options) {
	    options = options || {};
	    return buildTree(tokens, '', [], options.sectionTags || []);
	  }

	  Hogan.cache = {};

	  Hogan.cacheKey = function(text, options) {
	    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
	  }

	  Hogan.compile = function(text, options) {
	    options = options || {};
	    var key = Hogan.cacheKey(text, options);
	    var template = this.cache[key];

	    if (template) {
	      var partials = template.partials;
	      for (var name in partials) {
	        delete partials[name].instance;
	      }
	      return template;
	    }

	    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
	    return this.cache[key] = template;
	  }
	})( true ? exports : Hogan);


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	var Hogan = {};

	(function (Hogan) {
	  Hogan.Template = function (codeObj, text, compiler, options) {
	    codeObj = codeObj || {};
	    this.r = codeObj.code || this.r;
	    this.c = compiler;
	    this.options = options || {};
	    this.text = text || '';
	    this.partials = codeObj.partials || {};
	    this.subs = codeObj.subs || {};
	    this.buf = '';
	  }

	  Hogan.Template.prototype = {
	    // render: replaced by generated code.
	    r: function (context, partials, indent) { return ''; },

	    // variable escaping
	    v: hoganEscape,

	    // triple stache
	    t: coerceToString,

	    render: function render(context, partials, indent) {
	      return this.ri([context], partials || {}, indent);
	    },

	    // render internal -- a hook for overrides that catches partials too
	    ri: function (context, partials, indent) {
	      return this.r(context, partials, indent);
	    },

	    // ensurePartial
	    ep: function(symbol, partials) {
	      var partial = this.partials[symbol];

	      // check to see that if we've instantiated this partial before
	      var template = partials[partial.name];
	      if (partial.instance && partial.base == template) {
	        return partial.instance;
	      }

	      if (typeof template == 'string') {
	        if (!this.c) {
	          throw new Error("No compiler available.");
	        }
	        template = this.c.compile(template, this.options);
	      }

	      if (!template) {
	        return null;
	      }

	      // We use this to check whether the partials dictionary has changed
	      this.partials[symbol].base = template;

	      if (partial.subs) {
	        // Make sure we consider parent template now
	        if (!partials.stackText) partials.stackText = {};
	        for (key in partial.subs) {
	          if (!partials.stackText[key]) {
	            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
	          }
	        }
	        template = createSpecializedPartial(template, partial.subs, partial.partials,
	          this.stackSubs, this.stackPartials, partials.stackText);
	      }
	      this.partials[symbol].instance = template;

	      return template;
	    },

	    // tries to find a partial in the current scope and render it
	    rp: function(symbol, context, partials, indent) {
	      var partial = this.ep(symbol, partials);
	      if (!partial) {
	        return '';
	      }

	      return partial.ri(context, partials, indent);
	    },

	    // render a section
	    rs: function(context, partials, section) {
	      var tail = context[context.length - 1];

	      if (!isArray(tail)) {
	        section(context, partials, this);
	        return;
	      }

	      for (var i = 0; i < tail.length; i++) {
	        context.push(tail[i]);
	        section(context, partials, this);
	        context.pop();
	      }
	    },

	    // maybe start a section
	    s: function(val, ctx, partials, inverted, start, end, tags) {
	      var pass;

	      if (isArray(val) && val.length === 0) {
	        return false;
	      }

	      if (typeof val == 'function') {
	        val = this.ms(val, ctx, partials, inverted, start, end, tags);
	      }

	      pass = !!val;

	      if (!inverted && pass && ctx) {
	        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
	      }

	      return pass;
	    },

	    // find values with dotted names
	    d: function(key, ctx, partials, returnFound) {
	      var found,
	          names = key.split('.'),
	          val = this.f(names[0], ctx, partials, returnFound),
	          doModelGet = this.options.modelGet,
	          cx = null;

	      if (key === '.' && isArray(ctx[ctx.length - 2])) {
	        val = ctx[ctx.length - 1];
	      } else {
	        for (var i = 1; i < names.length; i++) {
	          found = findInScope(names[i], val, doModelGet);
	          if (found !== undefined) {
	            cx = val;
	            val = found;
	          } else {
	            val = '';
	          }
	        }
	      }

	      if (returnFound && !val) {
	        return false;
	      }

	      if (!returnFound && typeof val == 'function') {
	        ctx.push(cx);
	        val = this.mv(val, ctx, partials);
	        ctx.pop();
	      }

	      return val;
	    },

	    // find values with normal names
	    f: function(key, ctx, partials, returnFound) {
	      var val = false,
	          v = null,
	          found = false,
	          doModelGet = this.options.modelGet;

	      for (var i = ctx.length - 1; i >= 0; i--) {
	        v = ctx[i];
	        val = findInScope(key, v, doModelGet);
	        if (val !== undefined) {
	          found = true;
	          break;
	        }
	      }

	      if (!found) {
	        return (returnFound) ? false : "";
	      }

	      if (!returnFound && typeof val == 'function') {
	        val = this.mv(val, ctx, partials);
	      }

	      return val;
	    },

	    // higher order templates
	    ls: function(func, cx, partials, text, tags) {
	      var oldTags = this.options.delimiters;

	      this.options.delimiters = tags;
	      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
	      this.options.delimiters = oldTags;

	      return false;
	    },

	    // compile text
	    ct: function(text, cx, partials) {
	      if (this.options.disableLambda) {
	        throw new Error('Lambda features disabled.');
	      }
	      return this.c.compile(text, this.options).render(cx, partials);
	    },

	    // template result buffering
	    b: function(s) { this.buf += s; },

	    fl: function() { var r = this.buf; this.buf = ''; return r; },

	    // method replace section
	    ms: function(func, ctx, partials, inverted, start, end, tags) {
	      var textSource,
	          cx = ctx[ctx.length - 1],
	          result = func.call(cx);

	      if (typeof result == 'function') {
	        if (inverted) {
	          return true;
	        } else {
	          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
	          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
	        }
	      }

	      return result;
	    },

	    // method replace variable
	    mv: function(func, ctx, partials) {
	      var cx = ctx[ctx.length - 1];
	      var result = func.call(cx);

	      if (typeof result == 'function') {
	        return this.ct(coerceToString(result.call(cx)), cx, partials);
	      }

	      return result;
	    },

	    sub: function(name, context, partials, indent) {
	      var f = this.subs[name];
	      if (f) {
	        this.activeSub = name;
	        f(context, partials, this, indent);
	        this.activeSub = false;
	      }
	    }

	  };

	  //Find a key in an object
	  function findInScope(key, scope, doModelGet) {
	    var val;

	    if (scope && typeof scope == 'object') {

	      if (scope[key] !== undefined) {
	        val = scope[key];

	      // try lookup with get for backbone or similar model data
	      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
	        val = scope.get(key);
	      }
	    }

	    return val;
	  }

	  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
	    function PartialTemplate() {};
	    PartialTemplate.prototype = instance;
	    function Substitutions() {};
	    Substitutions.prototype = instance.subs;
	    var key;
	    var partial = new PartialTemplate();
	    partial.subs = new Substitutions();
	    partial.subsText = {};  //hehe. substext.
	    partial.buf = '';

	    stackSubs = stackSubs || {};
	    partial.stackSubs = stackSubs;
	    partial.subsText = stackText;
	    for (key in subs) {
	      if (!stackSubs[key]) stackSubs[key] = subs[key];
	    }
	    for (key in stackSubs) {
	      partial.subs[key] = stackSubs[key];
	    }

	    stackPartials = stackPartials || {};
	    partial.stackPartials = stackPartials;
	    for (key in partials) {
	      if (!stackPartials[key]) stackPartials[key] = partials[key];
	    }
	    for (key in stackPartials) {
	      partial.partials[key] = stackPartials[key];
	    }

	    return partial;
	  }

	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;

	  function coerceToString(val) {
	    return String((val === null || val === undefined) ? '' : val);
	  }

	  function hoganEscape(str) {
	    str = coerceToString(str);
	    return hChars.test(str) ?
	      str
	        .replace(rAmp, '&amp;')
	        .replace(rLt, '&lt;')
	        .replace(rGt, '&gt;')
	        .replace(rApos, '&#39;')
	        .replace(rQuot, '&quot;') :
	      str;
	  }

	  var isArray = Array.isArray || function(a) {
	    return Object.prototype.toString.call(a) === '[object Array]';
	  };

	})( true ? exports : Hogan);


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	var store=__webpack_require__(17);
	var userService=__webpack_require__(24);
	var cartService=__webpack_require__(25);
	// 导航
	var nav = {
	    init : function(){
	        this.bindEvent();
	        // this.loadUserInfo();
	        // this.loadCartCount();
	        return this;
	    },
	    bindEvent : function(){
	        //测试
	        $(".test-account").click(function(){
	            alert("用户名:123  密码:123123");
	        })
	        // 登录点击事件
	        $(".js-login").click(function(){
	            store.doLogin();
	        });
	        // 注册点击事件
	        $(".js-register").click(function(){
	            window.location.href = "./user-register.html";
	        });
	        // 退出点击事件
	        $(".js-logout").click(function(){
	            userService.logout(function(res){
	                window.location.reload();
	            }, function(errMsg){
	                store.errorTips(errMsg);
	            });
	        });
	    },
	    //加载用户信息
	    loadUserInfo : function(){
	        userService.checkLogin(function(res){
	            $(".user.not-login").hide().siblings(".user.login").show()
	                .find(".username").text(res.username);
	        }, function(errMsg){
	            // do nothing
	        });
	    },
	    // 加载购物车数量
	    loadCartCount : function(){
	        cartService.getCartCount(function(res){
	            $(".nav .cart-count").text(res || 0);
	        }, function(errMsg){
	            $(".nav .cart-count").text(0);
	        });
	    }
	};

	module.exports = nav.init();

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	var store=__webpack_require__(17);
	var userService={
	    //用户登录
	    login:function(userInfo,resolve,reject){
	        store.request({
	            url:store.getServerUrl("/user/login.do"),
	            method:"POST",
	            data:userInfo,
	            success:resolve,
	            error:reject
	        });
	    },
	    //用户注册
	    register:function(userRegister,resolve,reject){
	        store.request({
	            url:store.getServerUrl("/user/register.do"),
	            method:"POST",
	            data:userRegister,
	            success:resolve,
	            error:reject
	        });
	    },
	    //验证用户名是否存在
	    checkUsername:function(username,resolve,reject){
	        store.request({
	            url:store.getServerUrl("/user/check_valid.do"),
	            method:"POST",
	            data:{
	                type:"username",
	                str: username
	            },
	            success:resolve,
	            error:reject
	        });
	    },
	      // 获取用户密码提示问题
	      getQuestion : function(username, resolve, reject){
	        store.request({
	            url: store.getServerUrl("/user/forget_get_question.do"),
	            data: {
	                username : username
	            },
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    // 检查密码提示问题答案
	    checkAnswer : function(userInfo, resolve, reject){
	        store.request({
	            url: store.getServerUrl("/user/forget_check_answer.do"),
	            data: userInfo,
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    // 重置密码
	    resetPassword : function(userInfo, resolve, reject){
	        store.request({
	            url: store.getServerUrl("/user/forget_reset_password.do"),
	            data: userInfo,
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    // 获取用户信息
	    getUserInfo : function(resolve, reject){
	        store.request({
	            url: store.getServerUrl("/user/get_information.do"),
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    // 更新个人信息
	    updateUserInfo : function(userInfo, resolve, reject){
	        store.request({
	            url: store.getServerUrl("/user/update_information.do"),
	            data: userInfo,
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    // 登录状态下更新密码
	    updatePassword : function(userInfo, resolve, reject){
	        store.request({
	            url: store.getServerUrl("/user/reset_password.do"),
	            data: userInfo,
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    // 登出
	    logout : function(resolve, reject){
	        store.request({
	            url: store.getServerUrl("/user/logout.do"),
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    }

	}
	module.exports=userService;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(17);

	var cartService = {
	    // 获取购物车数量
	    getCartCount : function(resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/get_cart_product_count.do"),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 添加到购物车
	    addToCart : function(productInfo, resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/add.do"),
	            data    : productInfo,
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 获取购物车列表
	    getCartList : function(resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/list.do"),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 选择购物车商品
	    selectProduct : function(productId, resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/select.do"),
	            data    : {
	                productId : productId
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 取消选择购物车商品
	    unselectProduct : function(productId, resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/un_select.do"),
	            data    : {
	                productId : productId
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 选中全部商品
	    selectAllProduct : function(resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/select_all.do"),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 取消选中全部商品
	    unselectAllProduct : function(resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/un_select_all.do"),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 更新购物车商品数量
	    updateProduct : function(productInfo, resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/update.do"),
	            data    : productInfo,
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 删除指定商品
	    deleteProduct : function(productIds, resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/cart/delete_product.do"),
	            data    : {
	                productIds : productIds
	            },
	            success : resolve,
	            error   : reject
	        });
	    },
	}
	module.exports = cartService;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(128);
	__webpack_require__(14);
	__webpack_require__(21);
	var store = __webpack_require__(17);
	var _order = __webpack_require__(130);
	var _address = __webpack_require__(131);
	var templateAddress = __webpack_require__(132);
	var templateProduct = __webpack_require__(133);
	var addressModal = __webpack_require__(134);

	var page = {
	    data: {
	        selectedAddressId: null
	    },
	    init: function () {
	        this.onLoad();
	        this.bindEvent();
	    },
	    onLoad: function () {
	        this.loadAddressList();
	        this.loadProductList();
	    },
	    bindEvent: function () {
	        var _this = this;
	        //选择收货地址
	        $(document).on("click", ".address-item", function () {
	            $(this).addClass("active")
	                .siblings(".address-item").removeClass("active");
	            // 复制选中地址id
	            _this.data.selectedAddressId = $(this).data("id");
	        });

	        //提交订单
	        $(document).on("click", ".order-submit", function () {
	            var shippingId = _this.data.selectedAddressId;
	            if (shippingId) {
	                _order.create({
	                    shippingId: shippingId
	                }, function (res) {
	                    window.location.href = "./payment.html?orderNumber=" + res.orderNo;
	                }, function (errMsg) {
	                    store.errorTips(errMsg);
	                });
	            } else {
	                store.errorTips("请选择一个收货地址");
	            }
	        });

	        // 添加地址
	        $(document).on("click", ".address-add", function () {
	            addressModal.show({
	                isUpdate: false,
	                onSuccess: function () {
	                    _this.loadAddressList();
	                }
	            });
	        });
	        //编辑收货地址
	        $(document).on("click", ".address-update", function (e) {
	            e.stopPropagation();
	            var shippingId = $(this).parents(".address-item").data("id");
	            _address.getAddress(shippingId, function (res) {
	                addressModal.show({
	                    isUpdate: true,
	                    data: res,
	                    onSuccess: function () {
	                        _this.loadAddressList();
	                    }
	                });
	            }, function (errMsg) {
	                store.errorTips("打开失败咯~~>_<~~，刷新试试？");
	            });
	        });
	        // 删除地址
	        $(document).on("click", ".address-delete", function (e) {
	            e.stopPropagation();
	            var id = $(this).parents(".address-item").data("id");
	            store.confirmTips("确认要删除该地址？", function () {
	                _address.deleteAddress(id, function (res) {
	                    _this.loadAddressList();
	                }, function (errMsg) {
	                    store.errorTips(errMsg);
	                });
	            });
	        });

	    },
	    loadAddressList: function () {
	        var _this = this;
	        store.showLoading(".address-con");
	        _address.getAddressList(function (res) {
	            _this.filterAddress(res);
	            var addressHtml = store.renderHtml(templateAddress, res);
	            $(".address-con").html(addressHtml);
	        }, function (errMsg) {
	        });
	    },
	    loadProductList: function () {
	        var _this = this;
	        store.showLoading(".product-con");
	        _order.getProductList(function (res) {
	            var productHtml = store.renderHtml(templateProduct, res);
	            $(".product-con").html(productHtml);
	        }, function (errMsg) {
	        })
	    },
	    //处理地址列表选中状态
	    filterAddress: function (data) {
	        if (this.data.selectedAddressId) {
	            var selectedAddressIdFlag = false;
	            for (var i = 0, iLength = data.list.length; i < iLength; i++) {
	                if (data.list[i].id === this.data.selectedAddressId) {
	                    data.list[i].isActive = true;
	                    selectedAddressIdFlag = true;
	                }
	            }
	            // 如果以前选中的地址不在列表里，将其删除
	            if (!selectedAddressIdFlag) {
	                this.data.selectedAddressId = null;
	            }
	        }
	    }
	};

	$(function () {
	    page.init();
	});

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	
	var store = __webpack_require__(17);

	var orderService = {
	    //获取未结算的商品信息
	    getProductList: function (resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/order/get_order_cart_product.do"),
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    // 根据收货地址创建订单
	    create: function (orderInfo, resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/order/create.do"),
	            data: orderInfo,
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    // 获取当前登陆用户的订单列表
	    getOrderList: function (orderInfo, resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/order/list.do"),
	            data: orderInfo,
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    getOrderDetail: function (orderNumber, resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/order/detail.do"),
	            data: {
	                orderNo: orderNumber
	            },
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    cancelOrder: function (orderNumber, resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/order/cancel.do"),
	            data: {
	                orderNo: orderNumber
	            },
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    }
	};
	module.exports = orderService;


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(17);
	var addressService = {
	    //获取用户地址信息
	    getAddressList: function (resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/shipping/list.do"),
	            data: {
	                pageSize: 50,
	                pageNum: 1
	            },
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    //新增收货地址
	    save: function (addressInfo, resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/shipping/add.do"),
	            data: addressInfo,
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    //获取地址详细信息
	    getAddress: function (shippingId, resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/shipping/select.do"),
	            data: {
	                shippingId: shippingId
	            },
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    //更新地址信息
	    update: function (shippingInfo, resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/shipping/update.do"),
	            data: shippingInfo,
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    },
	    //删除收货地址
	    deleteAddress: function (shippingId, resolve, reject) {
	        store.request({
	            url: store.getServerUrl("/shipping/del.do"),
	            data: {
	                shippingId: shippingId
	            },
	            method: "POST",
	            success: resolve,
	            error: reject
	        });
	    }
	};
	module.exports = addressService;


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

	module.exports = "{{#list}}\n{{#isActive}}\n<div class=\"address-item active\" data-id=\"{{id}}\">\n{{/isActive}}\n{{^isActive}}\n<div class=\"address-item\" data-id=\"{{id}}\">\n{{/isActive}}\n    <div class=\"address-title\">\n        {{receiverCity}} {{receiverProvince}} （ {{receiverName}} 收 ）\n    </div>\n    <div class=\"address-detail\">\n        {{receiverAddress}} {{receiverPhone}}\n    </div>\n    <div class=\"address-opera\">\n        <span class=\"link address-update\">编辑</span>\n        <span class=\"link address-delete\">删除</span>\n    </div>\n</div>\n{{/list}}\n<div class=\"address-add\">\n    <div class=\"address-new\">\n        <i class=\"fa fa-plus\"></i>\n        <div class=\"text\">使用新地址</div>\n    </div>\n</div>";

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

	module.exports = "<table class=\"product-table\">\n    <tr>\n        <th class=\"cell-img\">&nbsp;</th>\n        <th class=\"cell-info\">商品描述</th>\n        <th class=\"cell-price\">价格</th>\n        <th class=\"cell-count\">数量</th>\n        <th class=\"cell-total\">小计</th>\n    </tr>\n    {{#orderItemVoList}}\n    <tr>\n        <td class=\"cell-img\">\n            <a href=\"./detail.html?productId={{productId}}\" target=\"_blank\">\n                <img class=\"p-img\" src=\"{{imageHost}}{{productImage}}\" alt=\"{{productName}}\" />\n            </a>\n        </td>\n        <td class=\"cell-info\">\n            <a class=\"link\" href=\"./detail.html?productId={{productId}}\" target=\"_blank\">{{productName}}</a>\n        </td>\n        <td class=\"cell-price\">￥{{currentUnitPrice}}</td>\n        <td class=\"cell-count\">{{quantity}}</td>\n        <td class=\"cell-total\">￥{{totalPrice}}</td>\n    </tr>\n    {{/orderItemVoList}}\n</table>\n<div class=\"submit-con\">\n    <span>订单总价:</span>\n    <span class=\"submit-total\">￥{{productTotalPrice}}</span>\n    <span class=\"btn order-submit\">提交订单</span>\n</div>";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var store = __webpack_require__(17);
	var cities = __webpack_require__(135);
	var addressService = __webpack_require__(131);
	var templateAddressModal = __webpack_require__(136);

	var addressModal = {
	    show: function (option) {
	        this.option = option;
	        //初始化，防止null
	        this.option.data = option.data || {};
	        this.$modalWrap = $(".modal-wrap");
	        // 渲染页面
	        this.loadModal();
	        //绑定事件
	        this.bindEvent();
	    },
	    hide: function () {
	        this.$modalWrap.empty();
	    },
	    loadModal: function () {
	        var modalHtml = store.renderHtml(templateAddressModal, {
	            isUpdate: this.option.isUpdate,
	            data: this.option.data
	        });
	        this.$modalWrap.html(modalHtml);
	        //加载省份
	        this.loadProvince();
	    },
	    bindEvent: function () {
	        var _this = this;
	        // 选择框改变的情况下
	        this.$modalWrap.find("#receiver-province").change(function () {
	            var selectProvice = $(this).val();
	            _this.loadCities(selectProvice);
	        });

	        //提交收货地址
	        this.$modalWrap.find(".address-btn").click(function () {
	            var receiverInfo = _this.getReceiverInfo(),
	                isUpdate = _this.option.isUpdate;
	            if (!isUpdate && receiverInfo.status) {
	                //新增收货地址并且验证通过
	                addressService.save(receiverInfo.data,
	                    function (res) {
	                        store.successTips("地址添加成功");
	                        _this.hide();
	                        typeof  _this.option.onSuccess === "function"
	                        && _this.option.onSuccess(res);
	                    }, function (errMsg) {
	                        store.errorTips(errMsg);
	                    });
	            } else if (isUpdate && receiverInfo.status) {
	                //更新收货地址，并且验证通过
	                addressService.update(receiverInfo.data,
	                    function (res) {
	                        store.successTips("更新地址成功");
	                        _this.hide();
	                        typeof  _this.option.onSuccess === "function"
	                        && _this.option.onSuccess(res);
	                    }, function (errMsg) {
	                        store.errorTips(errMsg);
	                    });
	            } else {
	                //验证不通过
	                store.errorTips(receiverInfo.errMsg || "好像哪里不对了~~>_<~~");
	            }
	        });
	        //拦截事件
	        this.$modalWrap.find(".modal-container").click(function (e) {
	            //事件拦截,消费掉
	            e.stopPropagation();
	        });
	        //点击蒙版和X都关闭弹窗
	        this.$modalWrap.find(".close").click(function () {
	            _this.hide();
	        });

	    },
	    //加载省份信息
	    loadProvince: function () {
	        var provinces = cities.getProvinces() || [],
	            $provinceSelect = this.$modalWrap.find("#receiver-province");
	        //根据省份形成select html数据
	        var html = this.getSelectOption(provinces);
	        $provinceSelect.html(html);
	        if (this.option.isUpdate && this.option.data.receiverProvince) {
	            $provinceSelect.val(this.option.data.receiverProvince);
	            this.loadCities(this.option.data.receiverProvince);
	        }
	    },
	    //加载城市信息
	    loadCities: function (provinceName) {
	        var cities = cities.getCities(provinceName) || [],
	            $citySelect = this.$modalWrap.find("#receiver-city");
	        $citySelect.html(this.getSelectOption(cities));
	        if (this.option.isUpdate && this.option.data.receiverCity) {
	            $citySelect.val(this.option.data.receiverCity)
	        }
	    },
	    //获取select框选项，输入数组，输出html
	    getSelectOption: function (optionArray) {
	        var html = "<option value=\"\">请选择</option>";//默认样式
	        for (var i = 0, length = optionArray.length; i < length; i++) {
	            html += "<option value=\"\" + optionArray[i] + \"\">" + optionArray[i] + "</option>";
	        }
	        return html;
	    },
	    //获取表单信息,并做表单验证
	    getReceiverInfo: function () {
	        var receiverInfo = {},
	            result = {
	                status: false
	            };
	        receiverInfo.receiverName = $.trim(this.$modalWrap.find("#receiver-name").val());
	        receiverInfo.receiverProvince = this.$modalWrap.find("#receiver-province").val();
	        receiverInfo.receiverCity = this.$modalWrap.find("#receiver-city").val();
	        receiverInfo.receiverAddress = $.trim(this.$modalWrap.find("#receiver-address").val());
	        receiverInfo.receiverPhone = $.trim(this.$modalWrap.find("#receiver-phone").val());
	        receiverInfo.receiverZip = $.trim(this.$modalWrap.find("#receiver-zip").val());
	        if (this.option.isUpdate) {
	            receiverInfo.id = this.$modalWrap.find("#receiver-id").val();
	        }
	        // 表单验证
	        if (!receiverInfo.receiverName) {
	            result.errMsg = "请输入收件人姓名";
	        }
	        else if (!receiverInfo.receiverProvince) {
	            result.errMsg = "请选择收件人所在省份";
	        }
	        else if (!receiverInfo.receiverCity) {
	            result.errMsg = "请选择收件人所在城市";
	        }
	        else if (!receiverInfo.receiverAddress) {
	            result.errMsg = "请输入收件人详细地址";
	        }
	        else if (!receiverInfo.receiverPhone) {
	            result.errMsg = "请输入收件人手机号";
	        }
	        // 所有验证都通过了
	        else {
	            result.status = true;
	            result.data = receiverInfo;
	        }
	        return result;


	    },
	};
	module.exports = addressModal;

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

	/**
	 * @author Rayhahah
	 * @blog http://rayhahah.com
	 * @time 2017/11/8
	 * @fuction
	 */


	var _cities = {
	    cityInfo: {
	        '北京': ['北京'],
	        '上海': ['上海'],
	        '天津': ['天津'],
	        '重庆': ['重庆'],
	        '河北省': ['石家庄', '张家口', '承德', '秦皇岛', '唐山', '廊坊', '保定', '沧州', '衡水', '邢台', '邯郸'],
	        '山西省': ['太原', '大同', '朔州', '阳泉', '长治', '晋城', '忻州', '吕梁', '晋中', '临汾', '运城'],
	        '辽宁省': ['沈阳', '朝阳', '阜新', '铁岭', '抚顺', '本溪', '辽阳', '鞍山', '丹东', '大连', '营口', '盘锦', '锦州', '葫芦岛'],
	        '吉林省': ['长春', '白城', '松原', '吉林', '四平', '辽源', '通化', '白山', '延边'],
	        '黑龙江省': ['哈尔滨', '齐齐哈尔', '黑河', '大庆', '伊春', '鹤岗', '佳木斯', '双鸭山', '七台河', '鸡西', '牡丹江', '绥化', '大兴安'],
	        '江苏省': ['南京', '徐州', '连云港', '宿迁', '淮阴', '盐城', '扬州', '泰州', '南通', '镇江', '常州', '无锡', '苏州'],
	        '浙江省': ['杭州', '湖州', '嘉兴', '舟山', '宁波', '绍兴', '金华', '台州', '温州', '丽水'],
	        '安徽省': ['合肥', '宿州', '淮北', '阜阳', '蚌埠', '淮南', '滁州', '马鞍山', '芜湖', '铜陵', '安庆', '黄山', '六安', '巢湖', '池州', '宣城'],
	        '福建省': ['福州', '南平', '三明', '莆田', '泉州', '厦门', '漳州', '龙岩', '宁德'],
	        '江西省': ['南昌', '九江', '景德镇', '鹰潭', '新余', '萍乡', '赣州', '上饶', '抚州', '宜春', '吉安'],
	        '山东省': ['济南', '聊城', '德州', '东营', '淄博', '潍坊', '烟台', '威海', '青岛', '日照', '临沂', '枣庄', '济宁', '泰安', '莱芜', '滨州', '菏泽'],
	        '河南省': ['郑州', '三门峡', '洛阳', '焦作', '新乡', '鹤壁', '安阳', '濮阳', '开封', '商丘', '许昌', '漯河', '平顶山', '南阳', '信阳', '周口', '驻马店'],
	        '湖北省': ['武汉', '十堰', '襄攀', '荆门', '孝感', '黄冈', '鄂州', '黄石', '咸宁', '荆州', '宜昌', '恩施', '襄樊'],
	        '湖南省': ['长沙', '张家界', '常德', '益阳', '岳阳', '株洲', '湘潭', '衡阳', '郴州', '永州', '邵阳', '怀化', '娄底', '湘西'],
	        '广东省': ['广州', '清远', '韶关', '河源', '梅州', '潮州', '汕头', '揭阳', '汕尾', '惠州', '东莞', '深圳', '珠海', '江门', '佛山', '肇庆', '云浮', '阳江', '茂名', '湛江'],
	        '海南省': ['海口', '三亚'],
	        '四川省': ['成都', '广元', '绵阳', '德阳', '南充', '广安', '遂宁', '内江', '乐山', '自贡', '泸州', '宜宾', '攀枝花', '巴中', '达川', '资阳', '眉山', '雅安', '阿坝', '甘孜', '凉山'],
	        '贵州省': ['贵阳', '六盘水', '遵义', '毕节', '铜仁', '安顺', '黔东南', '黔南', '黔西南'],
	        '云南省': ['昆明', '曲靖', '玉溪', '丽江', '昭通', '思茅', '临沧', '保山', '德宏', '怒江', '迪庆', '大理', '楚雄', '红河', '文山', '西双版纳'],
	        '陕西省': ['西安', '延安', '铜川', '渭南', '咸阳', '宝鸡', '汉中', '榆林', '商洛', '安康'],
	        '甘肃省': ['兰州', '嘉峪关', '金昌', '白银', '天水', '酒泉', '张掖', '武威', '庆阳', '平凉', '定西', '陇南', '临夏', '甘南'],
	        '青海省': ['西宁', '海东', '西宁', '海北', '海南', '黄南', '果洛', '玉树', '海西'],
	        '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '呼伦贝尔盟', '兴安盟', '哲里木盟', '锡林郭勒盟', '乌兰察布盟', '鄂尔多斯', '巴彦淖尔盟', '阿拉善盟'],
	        '广西': ['南宁', '桂林', '柳州', '梧州', '贵港', '玉林', '钦州', '北海', '防城港', '南宁', '百色', '河池', '柳州', '贺州'],
	        '西藏': ['拉萨', '那曲', '昌都', '林芝', '山南', '日喀则', '阿里'],
	        '宁夏': ['银川', '石嘴山', '吴忠', '固原'],
	        '新疆': ['乌鲁木齐', '克拉玛依', '喀什', '阿克苏', '和田', '吐鲁番', '哈密', '博尔塔拉', '昌吉', '巴音郭楞', '伊犁', '塔城', '阿勒泰'],
	        '香港': ['香港'],
	        '澳门': ['澳门'],
	        '台湾': ['台北', '台南', '其他']
	    },
	    // 获取所有的省份
	    getProvinces: function () {
	        var provinces = [];
	        for (var item in this.cityInfo) {
	            provinces.push(item);
	        }
	        return provinces;
	    },
	    // 获取某省份的所有城市
	    getCities: function (provinceName) {
	        return this.cityInfo[provinceName] || [];
	    }
	};

	module.exports = _cities;

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

	module.exports = "<div class=\"modal close\">\n    <div class=\"modal-container\">\n        <div class=\"modal-header\">\n            {{#isUpdate}}\n            <h1 class=\"modal-title\">更新地址</h1>\n            {{/isUpdate}}\n            {{^isUpdate}}\n            <h1 class=\"modal-title\">使用新地址</h1>\n            {{/isUpdate}}\n            <i class=\"fa fa-close close\"></i>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form\">\n                <div class=\"form-line\">\n                    <label class=\"label\" for=\"receiver-name\">\n                        <span class=\"required\">*</span>收件人姓名：\n                    </label>\n                    <input class=\"form-item\" id=\"receiver-name\" placeholder=\"请输入收件人姓名\" value=\"{{data.receiverName}}\" />\n                </div>\n                <div class=\"form-line\">\n                    <label class=\"label\" for=\"receiver-province\">\n                        <span class=\"required\">*</span>\n                        所在城市：\n                    </label>\n                    <select class=\"form-item\" id=\"receiver-province\">\n                        <option value=\"\">请选择</option>\n                    </select>\n                    <select class=\"form-item\" id=\"receiver-city\">\n                        <option value=\"\">请选择</option>\n                    </select>\n                </div>\n                <div class=\"form-line\">\n                    <label class=\"label\" for=\"receiver-address\">\n                        <span class=\"required\">*</span>\n                        详细地址：\n                    </label>\n                    <input class=\"form-item\" id=\"receiver-address\" placeholder=\"请精确到门牌号\" value=\"{{data.receiverAddress}}\"/>\n                </div>\n                <div class=\"form-line\">\n                    <label class=\"label\" for=\"receiver-phone\">\n                        <span class=\"required\">*</span>\n                        收件人手机：\n                    </label>\n                    <input class=\"form-item\" id=\"receiver-phone\" placeholder=\"请输入11位手机号\"  value=\"{{data.receiverPhone}}\"/>\n                </div>\n                <div class=\"form-line\">\n                    <label class=\"label\" for=\"receiver-zip\">邮政编码：</label>\n                    <input class=\"form-item\" id=\"receiver-zip\" placeholder=\"如：100000\"  value=\"{{data.receiverZip}}\"/>\n                </div>\n                <div class=\"form-line\">\n                    <input type=\"hidden\" id=\"receiver-id\" value=\"{{data.id}}\" />\n                    <a class=\"btn address-btn\">保存收货地址</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ })

/******/ });