import{c as n}from"./app.30979e86.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h1 id="\u56FE" tabindex="-1"><a class="header-anchor" href="#\u56FE" aria-hidden="true">#</a> \u56FE</h1><h2 id="\u56FE\u7684\u6DF1\u5EA6\u4F18\u5148\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7684\u6DF1\u5EA6\u4F18\u5148\u904D\u5386" aria-hidden="true">#</a> \u56FE\u7684\u6DF1\u5EA6\u4F18\u5148\u904D\u5386</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    graph<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u56FE\u7684\u5E7F\u5EA6\u4F18\u5148\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7684\u5E7F\u5EA6\u4F18\u5148\u904D\u5386" aria-hidden="true">#</a> \u56FE\u7684\u5E7F\u5EA6\u4F18\u5148\u904D\u5386</h2>`,4);function t(e,c){return p}var i=a(s,[["render",t]]);export{i as default};
