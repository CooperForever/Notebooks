import{c as n}from"./app.30979e86.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9</h1><p><img src="https://img.shields.io/badge/leetcode-237-blue" alt="leetcode" title="leetcode"> <img src="https://img.shields.io/badge/-easy-green" alt="leetcode" title="leetcode"><br> \u89E3\u9898\u601D\u8DEF\uFF1A\u5355\u9879\u94FE\u8868\u65E0\u6CD5\u83B7\u53D6\u4E0A\u4E2A\u8282\u70B9\uFF0C\u5C06\u88AB\u5220\u9664\u8282\u70B9\u8F6C\u79FB\u5230\u4E0A\u4E00\u4E2A\u8282\u70B9\u3002</p><h2 id="code-part" tabindex="-1"><a class="header-anchor" href="#code-part" aria-hidden="true">#</a> Code Part</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify node in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>val <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4);function t(p,o){return e}var l=a(s,[["render",t]]);export{l as default};