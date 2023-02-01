import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as n,b as t,d as s,w as e,e as p,r as c}from"./app.da453788.js";const r={},d=n("h1",{id:"print连接器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#print连接器","aria-hidden":"true"},"#"),t(" Print连接器")],-1),u=p(`<p><em><strong>BitSail</strong></em> Print写连接器将上游过来的数据打印出来，目前在Flink Task Manager的Stdout中可以看到。</p><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-print<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="print输出" tabindex="-1"><a class="header-anchor" href="#print输出" aria-hidden="true">#</a> Print输出</h2><h3 id="支持数据类型" tabindex="-1"><a class="header-anchor" href="#支持数据类型" aria-hidden="true">#</a> 支持数据类型</h3><p>Print连接器对数据类型没有限制</p><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>写连接器参数在<code>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.print.sink.PrintSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;batch_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">Print写连接器类型, <code>com.bytedance.bitsail.connector.legacy.print.sink.PrintSink</code></td></tr></tbody></table><h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">batch_size</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">指定每次写入的批次大小</td><td style="text-align:left;">10</td></tr></tbody></table><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,14);function h(g,k){const a=c("RouterLink");return i(),o("div",null,[d,n("p",null,[t("上级文档: "),s(a,{to:"/zh/documents/connectors/"},{default:e(()=>[t("connectors")]),_:1})]),u,n("p",null,[t("配置示例文档: "),s(a,{to:"/zh/documents/connectors/print/print-example.html"},{default:e(()=>[t("print-connector-example")]),_:1})])])}const v=l(r,[["render",h],["__file","print.html.vue"]]);export{v as default};
