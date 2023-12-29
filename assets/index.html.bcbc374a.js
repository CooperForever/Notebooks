import{c as n}from"./app.30979e86.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="webpack\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> webpack\u57FA\u7840\u914D\u7F6E</h1><h2 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h2><p>\u7528\u4E8E\u914D\u7F6Ewebpack\u89E3\u6790\u5165\u53E3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u914D\u7F6E\u5355\u4E2A\u5165\u53E3</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">&#39;index.js&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//\u914D\u7F6E\u591A\u5165\u53E3</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token string">&#39;./home.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">about</span><span class="token operator">:</span> <span class="token string">&#39;./about.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token string">&#39;./contact.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\u914D\u7F6E\u6253\u5305\u6587\u4EF6\u8F93\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u9700\u8981\u7EDD\u5BF9\u8DEF\u5F84</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contentHash].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u4EF6\u8F93\u51FA\u540D</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// \u81EA\u52A8\u6E05\u7406\u4E0A\u6B21\u6253\u5305\u6587\u4EF6</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u914D\u7F6Eloader\u4E0Eplugin" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eloader\u4E0Eplugin" aria-hidden="true">#</a> \u914D\u7F6Eloader\u4E0Eplugin</h3><p>loader\u7528\u4E8E\u5BF9\u6A21\u5757\u7684\u6E90\u4EE3\u7801\u8FDB\u884C\u8F6C\u6362\u3002plugin \u76EE\u7684\u5728\u4E8E\u89E3\u51B3 loader \u65E0\u6CD5\u5B9E\u73B0\u7684\u5176\u4ED6\u4E8B\uFF0C\u53EF\u4EE5\u8D2F\u7A7Fwebpack\u5168\u90E8\u751F\u547D\u5468\u671F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.?js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.?vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
      
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../public/index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;index.html&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u914D\u7F6Ebabel" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ebabel" aria-hidden="true">#</a> \u914D\u7F6Ebabel</h2><p>webpack\u914D\u7F6Ebabel\u9700\u8981\u5B89\u88C5\u4E00\u4E0B\u4F9D\u8D56</p><ul><li>babel-loader</li><li>@babel/core babel\u6838\u5FC3\u5305</li><li>@babel/preset-env babel\u7F16\u8BD1\u7684\u9884\u8BBE \u5728webpack\u4E2D\u914D\u7F6Ebabel\u53EF\u4EE5\u901A\u8FC7babel-loader\u7684options\uFF0C\u4E5F\u53EF\u4EE5\u65B0\u5EFA.babelrc.js\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> SourceMap</h2><p>SourceMap \u662F\u4E00\u79CD\u6620\u5C04\u5173\u7CFB\uFF0C\u5F53\u9879\u76EE\u8FD0\u884C\u540E\uFF0C\u5982\u679C\u51FA\u73B0\u9519\u8BEF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 SourceMap \u53CD\u5411\u5B9A\u4F4D\u5230\u6E90\u7801\u4F4D\u7F6E\u3002</p><table><thead><tr><th>\u5173\u952E\u5B57</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>inline</td><td>\u4EE3\u7801\u5185\u901A\u8FC7dataUrl\u5F62\u5F0F\u5F15\u5165SourceMap</td></tr><tr><td>hidden</td><td>\u751F\u6210SourceMap\u6587\u4EF6\uFF0C\u4F46\u4E0D\u4F7F\u7528</td></tr><tr><td>eval</td><td>eval()\u5F62\u5F0F\u6267\u884C\u4EE3\u7801</td></tr><tr><td>cheap</td><td>\u53EA\u9700\u8981\u5B9A\u4F4D\u5230\u884C\uFF0C\u4E0D\u9700\u8981\u5217\u4FE1\u606F</td></tr><tr><td>module</td><td>\u5C55\u793A\u6E90\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\u4F4D\u7F6E</td></tr></tbody></table><p>\u5F00\u53D1\u73AF\u5883\u63A8\u8350\u914D\u7F6E\uFF1A<code>eval-cheap-module-source-map</code></p><ul><li>\u751F\u6210\u4EE3\u7801\u901A\u8FC7 eval \u6267\u884C</li><li>\u5305\u542B dataUrl \u5F62\u5F0F\u7684 SourceMap \u6587\u4EF6</li><li>\u53EF\u4EE5\u5728\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u4E2D\u5B9A\u4F4D\u5230\u9519\u8BEF\u6240\u5728\u884C\u4FE1\u606F</li><li>\u4E0D\u9700\u8981\u5B9A\u4F4D\u5217\u4FE1\u606F\uFF0C\u6253\u5305\u901F\u5EA6\u8F83\u5FEB</li><li>\u5728\u6E90\u4EE3\u7801\u4E2D\u5B9A\u4F4D\u5230\u9519\u8BEF\u6240\u5728\u884C\u4FE1\u606F</li></ul><p>\u751F\u4EA7\u73AF\u5883\u63A8\u8350\u914D\u7F6E\uFF1A<code>none</code></p><h2 id="\u6784\u5EFA\u901F\u5EA6\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u901F\u5EA6\u4F18\u5316" aria-hidden="true">#</a> \u6784\u5EFA\u901F\u5EA6\u4F18\u5316</h2><h3 id="\u6784\u5EFA\u65F6\u95F4\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u65F6\u95F4\u5206\u6790" aria-hidden="true">#</a> \u6784\u5EFA\u65F6\u95F4\u5206\u6790</h3><p>\u5B89\u88C5 <code>speed-measure-webpack-plugin</code>,\u5728webpack@5\u4E2D\u90E8\u5206loader\u548Cplugins\u9700\u8981\u964D\u7EA7\u5904\u7406\u3002</p><h3 id="\u4F18\u5316resolve\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316resolve\u914D\u7F6E" aria-hidden="true">#</a> \u4F18\u5316resolve\u914D\u7F6E</h3><ol><li><code>alias</code> \u7528\u4E8E\u521B\u5EFA\u522B\u540D\uFF0C\u7B80\u5316\u6A21\u5757\u5F15\u5165\u3002<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
 <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
 <span class="token comment">// \u914D\u7F6E\u522B\u540D</span>
     <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token string-property property">&#39;~&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token string-property property">&#39;components&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// xxx.js</span>
 <span class="token keyword">import</span> <span class="token string">&#39;~/index.js&#39;</span>
 <span class="token keyword">import</span> <span class="token string">&#39;@/router.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li>extensions \u6A21\u5757\u5BFC\u5165\u4E0D\u5E26\u6269\u5C55\u540D\u65F6\uFF0Cwebpack\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u5C1D\u8BD5\u89E3\u6790\u6A21\u5757,\u81EA\u5B9A\u4E49\u4F1A\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u4F7F\u7528<code>...</code>\u4FDD\u7559\u9ED8\u8BA4\u914D\u7F6E<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// defalut extensions: [&#39;.js&#39;, &#39;.json&#39;, &#39;.wasm&#39;],</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>externals <code>externals</code>\u914D\u7F6E\u9009\u9879\u63D0\u4F9B\u4E86\u300C\u4ECE\u8F93\u51FA\u7684 bundle \u4E2D\u6392\u9664\u4F9D\u8D56\u300D\u7684\u65B9\u6CD5\u3002\u6B64\u529F\u80FD\u901A\u5E38\u5BF9 library \u5F00\u53D1\u4EBA\u5458\u6765\u8BF4\u662F\u6700\u6709\u7528\u7684\uFF0C\u7136\u800C\u4E5F\u4F1A\u6709\u5404\u79CD\u5404\u6837\u7684\u5E94\u7528\u7A0B\u5E8F\u7528\u5230\u5B83\u3002<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token string">&#39;jQuery&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.my-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li>\u7F29\u5C0F\u8303\u56F4 \u914D\u7F6Eloader\u65F6\u4F7F\u7528include\u4E0Eexclude\u53BB\u6307\u5B9A\u6216\u8005\u6392\u9664\u76EE\u5F55\uFF0Cexlcude\u4F18\u5148\u7EA7\u66F4\u9AD8</li><li>noParse <ul><li>\u4E0D\u9700\u8981\u89E3\u6790\u7684\u7B2C\u4E09\u53D1\u5E93\uFF0C\u901A\u8FC7\u5B57\u6BB5\u914D\u7F6E\uFF0C\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6</li><li>\u5FFD\u7565\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E3\u6790import \u3001require\u8BED\u6CD5</li></ul></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
      <span class="token literal-property property">noParse</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">jquery|lodash</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="6"><li>IgnorePlugin \u7528\u4E8E\u5FFD\u7565\u67D0\u4E9B\u5E93\u4E2D\u7684\u67D0\u4E9B\u6587\u4EF6<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">// \u914D\u7F6E\u63D2\u4EF6</span>
         <span class="token operator">...</span>
         <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">resourceRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.\\/locale$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
         <span class="token literal-property property">contextRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token punctuation">]</span>  
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><strong>\u4E0EnoParse\u533A\u522B\uFF1A</strong> noParse\u4E0D\u89E3\u6790\uFF0C\u4F46\u662F\u5F15\u5165\u4EE3\u7801\u4E2D\u6709; IgnorePlugin\u76F4\u63A5\u4E0D\u5F15\u5165\uFF0C\u4EE3\u7801\u4E2D\u6CA1\u6709</li><li>\u591A\u8FDB\u7A0B\u914D\u7F6E<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728\u5C0F\u578B\u9879\u76EE\u4E2D\uFF0C\u914D\u7F6E\u591A\u8FDB\u7A0B\u6253\u5305\u53CD\u800C\u4F1A\u589E\u52A0\u65F6\u95F4\u6210\u672C\uFF0C\u56E0\u4E3A\u8FDB\u7A0B\u4E4B\u95F4\u901A\u8BAF\u548C\u542F\u52A8\u8FDB\u7A0B\u90FD\u6709\u65F6\u95F4\u5F00\u9500\u3002</p></div> \u5B89\u88C5<code>thread-loader</code>,\u4F7F\u7528\u65F6\uFF0C\u9700\u5C06\u6B64 loader \u653E\u7F6E\u5728\u5176\u4ED6 loader \u4E4B\u524D\u3002\u653E\u7F6E\u5728\u6B64 loader \u4E4B\u540E\u7684 loader \u4F1A\u5728\u4E00\u4E2A\u72EC\u7ACB\u7684 worker \u6C60\u4E2D\u8FD0\u884C\u3002<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
     <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
     <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
     <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;thread-loader&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u542F\u591A\u8FDB\u7A0B\u6253\u5305</span>
         <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">worker</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li><li>\u5F00\u542F\u7F13\u5B58</li></ol><ul><li>babel-loader\u5F00\u542F\u7F13\u5B58<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>   <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u542F\u7528\u7F13\u5B58</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li>cache-loader<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(s[ac]|c)ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
        <span class="token string">&#39;cache-loader&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7F13\u5B58\u524D\u9762 loader \u8F6C\u6362\u7684\u7ED3\u679C</span>
        <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li>hard-source-webpack-plugin webpack5\u4E4B\u524D\u9700\u8981\u4F7F\u7528\u8BE5\u63D2\u4EF6\u7F13\u5B58\uFF0C\u51CF\u5C11\u91CD\u590D\u6784\u5EFA\u3002</li><li>cache \u6301\u4E45\u5316\u7F13\u5B58<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;filesystem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u53D1\u6A21\u5F0F\u9ED8\u8BA4\u4E3A memory,\u751F\u6210\u73AF\u5883\u7981\u7528</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h2 id="\u4F18\u5316\u6784\u5EFA\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316\u6784\u5EFA\u7ED3\u679C" aria-hidden="true">#</a> \u4F18\u5316\u6784\u5EFA\u7ED3\u679C</h2><ol><li>\u538B\u7F29css\u3001js <code> css-minizer-webpack-plugin</code> \u9700\u8981\u5B89\u88C5\uFF0CTerserPlugin webpack\u5185\u7F6E</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>Tree-shaking Tree-shaking \u4F5C\u7528\u662F\u5254\u9664\u6CA1\u6709\u4F7F\u7528\u7684\u4EE3\u7801\uFF0C\u4EE5\u964D\u4F4E\u5305\u7684\u4F53\u79EF\u3002\u751F\u4EA7\u73AF\u5883\u9ED8\u8BA4\u5F00\u542F\u3002</li><li>Scope Hoisting \u4F5C\u7528\u57DF\u63D0\u5347\uFF0C\u539F\u7406\u662F\u5C06\u591A\u4E2A\u6A21\u5757\u653E\u5728\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u4E0B\uFF0C<strong>\u4EE5\u6B64\u6765\u51CF\u5C11\u51FD\u6570\u58F0\u660E\u548C\u5185\u5B58\u5F00\u9500</strong>\uFF0Cwebpack\u9ED8\u8BA4\u5F00\u542F</li></ol><h2 id="webpack\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#webpack\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> webpack\u5DE5\u4F5C\u539F\u7406</h2><p>webpack\u9996\u5148\u4ECE\u914D\u7F6E\u6587\u4EF6\u548Cshell\u542F\u52A8\u8BED\u53E5\u4E2D\u8BFB\u53D6\u5408\u5E76\u53C2\u6570\uFF0C\u521D\u59CB\u5316\u5B8C\u6210\u540E\u8C03\u7528Complier\u7684<code>run</code>\u6765\u542F\u52A8\u7F16\u8BD1\u6784\u5EFA\u8FC7\u7A0B\uFF0Cwebpack\u7684\u6784\u5EFA\u6D41\u7A0B\u5305\u62EC\uFF1A</p><ul><li>compile</li><li>make \u4ECE\u5165\u53E3\u6587\u4EF6\u89E6\u53D1\uFF0C\u8C03\u7528\u6240\u6709loader\u5BF9\u6A21\u5757\u7FFB\u8BD1\uFF0C\u5728\u627E\u51FA\u6A21\u5757\u7684\u4F9D\u8D56</li><li>build \u751F\u6210\u4F9D\u8D56\u5173\u7CFB\u56FE</li><li>seal \u6839\u636E\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684Chunk\uFF0C\u5728\u628Achunk\u8F6C\u6362\u6210\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u8F93\u51FA\u5217\u8868</li><li>emit \u6839\u636E\u786E\u5B9A\u7684\u8F93\u51FA\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF</li></ul>`,35);function e(t,o){return p}var c=s(a,[["render",e]]);export{c as default};