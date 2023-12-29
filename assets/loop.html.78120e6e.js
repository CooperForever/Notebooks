import{r as t,o,a as l,b as n,e,F as p,d as s,c}from"./app.30979e86.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"js\u4E2D\u6240\u6709\u5FAA\u73AF\u95EE\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#js\u4E2D\u6240\u6709\u5FAA\u73AF\u95EE\u9898","aria-hidden":"true"},"#"),s(" JS\u4E2D\u6240\u6709\u5FAA\u73AF\u95EE\u9898")],-1),d=n("h2",{id:"\u6240\u6709\u5FAA\u73AF\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6240\u6709\u5FAA\u73AF\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" \u6240\u6709\u5FAA\u73AF\u65B9\u6CD5")],-1),k=n("thead",null,[n("tr",null,[n("th",null,"\u65B9\u6CD5\u540D"),n("th",null,"\u9002\u7528\u573A\u666F"),n("th",null,"\u8FD4\u56DE\u503C"),n("th",null,"\u5916\u94FE")])],-1),b=n("td",null,[n("code",null,"Array.prototype.forEach()")],-1),_=n("td",null,"\u6570\u7EC4\u5FAA\u73AF",-1),h=n("td",null,"undefined",-1),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",target:"_blank",rel:"noopener noreferrer"},m=s("Link"),y=n("td",null,[n("code",null,"Array.prototype.map()")],-1),g=n("td",null,"\u6570\u7EC4\u5FAA\u73AF",-1),v=n("td",null,"new Array",-1),j={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",target:"_blank",rel:"noopener noreferrer"},w=s("Link"),A=n("td",null,[n("code",null,"Array.prototype.reduce()")],-1),z=n("td",null,"\u6570\u7EC4\u5FAA\u73AF",-1),N=n("td",null,"new Array",-1),O={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",target:"_blank",rel:"noopener noreferrer"},C=s("Link"),S=n("td",null,[n("code",null,"Object.keys()"),s(" / "),n("code",null,"Object.getOwnPropertyNames()")],-1),x=n("td",null,"\u5BF9\u8C61\u5FAA\u73AF",-1),R=n("td",null,"Array",-1),q={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",target:"_blank",rel:"noopener noreferrer"},J=s("Link"),L=n("td",null,[n("code",null,"for...in")],-1),E=n("td",null,"\u53EF\u8FED\u4EE3\u5BF9\u8C61",-1),G=n("td",null,"never",-1),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",target:"_blank",rel:"noopener noreferrer"},V=s("Link"),B=n("td",null,[n("code",null,"for...of")],-1),P=n("td",null,"\u53EF\u8FED\u4EE3\u5BF9\u8C61",-1),F=n("td",null,"never",-1),I={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",target:"_blank",rel:"noopener noreferrer"},M=s("Link"),T=c(`<h2 id="for-in-\u4E0E-for-of-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#for-in-\u4E0E-for-of-\u533A\u522B" aria-hidden="true">#</a> <code>for...in</code> \u4E0E <code>for...of</code> \u533A\u522B</h2><p><code>for...in</code> \u4EE5\u4EFB\u610F\u987A\u5E8F\u904D\u5386\u4E00\u4E2A\u5BF9\u8C61\u7684\u9664Symbol\u4EE5\u5916\u7684\u53EF\u679A\u4E3E\u5C5E\u6027</p><p><code>for...of</code> \u904D\u5386\u53EF\u8FED\u4EE3\u5BF9\u8C61\u5B9A\u4E49\u8981\u8FED\u4EE3\u7684\u6570\u636E(\u53EF\u8FED\u4EE3\u6570\u636E\u7C7B\u578B\u5305\u62EC Array\uFF0CMap\uFF0CSet\uFF0CString\uFF0CTypedArray\uFF0Carguments \u5BF9\u8C61\u7B49\u7B49)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">objCustom</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">arrCustom</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
iterable<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs 0, 1, 2, &quot;foo&quot;, &quot;arrCustom&quot;, &quot;objCustom&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>iterable<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs 0, 1, 2, &quot;foo&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs 3, 5, 7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>\u603B\u7ED3\uFF1A</strong><br><code>for...in</code>\u4F1A\u628A\u539F\u578B\u4E0A\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF08\u53EF\u679A\u4E3E\u5C5E\u6027\uFF09\u4E5F\u904D\u5386\u51FA\u6765\uFF0C\u4E0D\u9002\u5408\u7528\u6765\u904D\u5386\u6570\u7EC4,\u53EF\u4EE5\u7528\u6765\u904D\u5386\u5BF9\u8C61 <code>for...of</code>\u4E0D\u80FD\u76F4\u63A5\u904D\u5386\u666E\u901A\u5BF9\u8C61</p><h2 id="break-return-\u80FD\u5426\u7EC8\u6B62\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#break-return-\u80FD\u5426\u7EC8\u6B62\u5FAA\u73AF" aria-hidden="true">#</a> <code>break/return</code> \u80FD\u5426\u7EC8\u6B62\u5FAA\u73AF</h2><ul><li>\u57FA\u672Cfor\u5FAA\u73AF \u2705 break/return \u5747\u80FD\u7EC8\u6B62\u5FAA\u73AF</li><li><code>forEach</code> \u274C return\u4E0D\u80FD\u7EC8\u6B62\u5FAA\u73AF</li><li><code>map</code> \u274C return\u4E0D\u80FD\u7EC8\u6B62\u5FAA\u73AF</li><li><code>reduce</code> \u274C return\u4E0D\u80FD\u7EC8\u6B62\u5FAA\u73AF</li><li><code>for...in</code> \u2705 break/return \u5747\u80FD\u7EC8\u6B62\u5FAA\u73AF</li><li><code>for...of</code> \u2705 break/return \u5747\u80FD\u7EC8\u6B62\u5FAA\u73AF</li></ul><p><strong>\u53C2\u8003\uFF1A</strong></p>`,8),D={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"},H=s("MDN > Array");function K(Q,U){const a=t("ExternalLinkIcon");return o(),l(p,null,[i,d,n("table",null,[k,n("tbody",null,[n("tr",null,[b,_,h,n("td",null,[n("a",f,[m,e(a)])])]),n("tr",null,[y,g,v,n("td",null,[n("a",j,[w,e(a)])])]),n("tr",null,[A,z,N,n("td",null,[n("a",O,[C,e(a)])])]),n("tr",null,[S,x,R,n("td",null,[n("a",q,[J,e(a)])])]),n("tr",null,[L,E,G,n("td",null,[n("a",W,[V,e(a)])])]),n("tr",null,[B,P,F,n("td",null,[n("a",I,[M,e(a)])])])])]),T,n("ul",null,[n("li",null,[n("a",D,[H,e(a)])])])],64)}var Z=r(u,[["render",K]]);export{Z as default};
