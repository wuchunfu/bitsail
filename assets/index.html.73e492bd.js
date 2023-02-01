import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as s,d as t,w as l,e as i,r as p}from"./app.da453788.js";const u={},d=n("h1",{id:"常用组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用组件","aria-hidden":"true"},"#"),s(" 常用组件")],-1),r=n("hr",null,null,-1),_=n("h3",{id:"内容",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内容","aria-hidden":"true"},"#"),s(" 内容")],-1),k=n("p",null,"本模块包含多种可用于应用开发的基本功能组件。目前我们支持了五种基本的功能模块：",-1),h=n("p",null,[n("code",null,"bitsail-component-clients"),s(":")],-1),m=n("li",null,[s("支持创建各种client，例如"),n("code",null,"KafkaProducer"),s("。")],-1),g=n("p",null,[n("code",null,"bitsail-component-formats-flink"),s(":")],-1),b=n("li",null,[s("支持将各种数据源的数据类型（例如hive的 "),n("code",null,"Writables"),s("）转化为 "),n("code",null,"bitsail rows"),s("。")],-1),f=n("p",null,[n("code",null,"bitsail-conversion-flink"),s(":")],-1),v=n("li",null,[s("支持将 "),n("code",null,"bitsail rows"),s(" 转化为各种数据源的数据类型（比如hive的 "),n("code",null,"Writables"),s("）。")],-1),x=n("p",null,[n("code",null,"bitsail-flink-row-parser"),s(":")],-1),w=n("li",null,[s("支持按照指定格式解析 "),n("code",null,"bytes"),s(" 数组为 "),n("code",null,"bitsail rows"),s("。")],-1),y=i(`<hr><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3><p>开发者可通过如下方式导入依赖来使用相应的功能模块：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-xxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function z(I,N){const a=p("RouterLink");return o(),c("div",null,[d,r,_,k,n("ul",null,[n("li",null,[h,n("ul",null,[m,n("li",null,[s("细节可参考："),t(a,{to:"/zh/documents/components/clients/introduction.html"},{default:l(()=>[s("bitsail_component_clients")]),_:1})])])]),n("li",null,[g,n("ul",null,[b,n("li",null,[s("细节可参考："),t(a,{to:"/zh/documents/components/format/introduction.html"},{default:l(()=>[s("bitsail_component_formats_flink")]),_:1})])])]),n("li",null,[f,n("ul",null,[v,n("li",null,[s("细节可参考："),t(a,{to:"/zh/documents/components/conversion/introduction.html"},{default:l(()=>[s("bitsail_conversion_flink")]),_:1})])])]),n("li",null,[x,n("ul",null,[w,n("li",null,[s("细节可参考："),t(a,{to:"/zh/documents/components/parser/introduction.html"},{default:l(()=>[s("bitsail_flink_row_parser")]),_:1})])])])]),y])}const C=e(u,[["render",z],["__file","index.html.vue"]]);export{C as default};