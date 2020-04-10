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

	module.exports = __webpack_require__(101);


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

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(21);
	__webpack_require__(14);
	__webpack_require__(102);
	var store= __webpack_require__(17);
	var productService= __webpack_require__(104);
	var cartService=__webpack_require__(25)
	var template   = __webpack_require__(105);
	var page = {
	    data : {
	        productId : store.getUrlParam("productId") || "",
	    },
	    init : function(){
	        this.onLoad();
	        this.bindEvent();
	    },
	    onLoad : function(){
	        // 如果没有传productId, 自动跳回首页
	        if(!this.data.productId){
	            store.goHome();
	        }
	        this.loadDetail();
	    },
	    bindEvent : function(){
	        var _this = this;
	        // 图片预览
	        $(document).on("mouseenter", ".p-img-item", function(){
	            var imageUrl   = $(this).find(".p-img").attr("src");
	            $(".main-img").attr("src", imageUrl);
	        });
	        // count的操作
	        $(document).on("click", ".p-count-btn", function(){
	            var type        = $(this).hasClass("plus") ? "plus" : "minus",
	                $pCount     = $(".p-count"),
	                currCount   = parseInt($pCount.val()),
	                minCount    = 1,
	                maxCount    = _this.data.detailInfo.stock || 1;
	            if(type === "plus"){
	                $pCount.val(currCount < maxCount ? currCount + 1 : maxCount);
	            }
	            else if(type === "minus"){
	                $pCount.val(currCount > minCount ? currCount - 1 : minCount);
	            }
	        });
	        // 加入购物车
	        $(document).on("click", ".cart-add", function(){
	            cartService.addToCart({
	                productId   : _this.data.productId,
	                count       : $(".p-count").val()
	            }, function(res){
	                window.location.href = "./result.html?type=cart-add";
	            }, function(errMsg){
	                store.errorTips(errMsg);
	            });
	        });
	    },
	    // 加载商品详情的数据
	    loadDetail : function(){
	        var _this       = this,
	            html        = "",
	            $pageWrap   = $(".page-wrap");
	        // loading
	        $pageWrap.html("<div class=\"loading\"></div>");
	        // 请求detail信息
	        productService.getProductDetail(this.data.productId, function(res){
	            _this.filter(res);
	            // 缓存住detail的数据
	            _this.data.detailInfo = res;
	            // render
	            html = store.renderHtml(template, res);
	            $pageWrap.html(html);
	        }, function(errMsg){
	            $pageWrap.html("<p class=\"err-tip\">找不到该商品</p>");
	        });
	    },
	    // 数据匹配
	    filter : function(data){
	        data.subImages = data.subImages.split(",");
	    }
	};
	$(function(){
	    page.init();
	})

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(17);

	var productService = {
	    // 获取商品列表
	    getProductList : function(listParam, resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/product/list.do"),
	            data    : listParam,
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 获取商品详细信息
	    getProductDetail : function(productId, resolve, reject){
	        store.request({
	            url     : store.getServerUrl("/product/detail.do"),
	            data    : {
	                productId : productId
	            },
	            success : resolve,
	            error   : reject
	        });
	    }
	}
	module.exports = productService;

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	module.exports = "<div class=\"intro-wrap\">\n    <div class=\"p-img-con\">\n        <div class=\"main-img-con\">\n            <img class=\"main-img\" src=\"{{imageHost}}{{mainImage}}\" alt=\"{{name}}\"/>\n        </div>\n        <ul class=\"p-img-list\">\n            {{#subImages}}\n            <li class=\"p-img-item\">\n                <img class=\"p-img\" src=\"{{imageHost}}{{.}}\" alt=\"{{name}}\" />\n            </li>\n            {{/subImages}}\n        </ul>\n    </div>\n    <div class=\"p-info-con\">\n        <h1 class=\"p-name\">{{name}}</h1>\n        <p class=\"p-subtitle\">{{subtitle}}</p>\n        <div class=\"p-info-item p-price-con\">\n            <span class=\"label\">价格:</span>\n            <span class=\"info\">￥{{price}}</span>\n        </div>\n        <div class=\"p-info-item\">\n            <span class=\"label\">库存:</span>\n            <span class=\"info\">{{stock}}</span>\n        </div>\n        <div class=\"p-info-item p-count-con\">\n            <span class=\"label\">数量:</span>\n            <input class=\"p-count\" value=\"1\" readonly=\"\"/>\n            <span class=\"p-count-btn plus\">+</span>\n            <span class=\"p-count-btn minus\">-</span>\n        </div>\n        <div class=\"p-info-item\">\n            <a class=\"btn cart-add\">加入购物车</a>\n        </div>\n    </div>\n</div>\n<div class=\"detail-wrap\">\n    <div class=\"detail-tab-con\">\n        <ul class=\"tab-list\">\n            <li class=\"tab-item active\">详细描述</li>\n        </ul>\n    </div>\n    <div class=\"detail-con\">\n        {{{detail}}}\n    </div>\n</div>";

/***/ })

/******/ });