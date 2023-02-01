import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as u,a as t,b as n,d as a,w as e,e as i,r as l}from"./app.da453788.js";const c={},r=t("h1",{id:"hudi-连接器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#hudi-连接器","aria-hidden":"true"},"#"),n(" Hudi 连接器")],-1),h=i(`<p><strong>BitSail</strong> Hudi 连接器支持读写 Hudi 表，主要功能如下</p><ul><li>支持流式写入Hudi表。</li><li>支持批式写入Hudi表。</li><li>支持批式读取Hudi表。</li></ul><h2 id="支持hudi版本" tabindex="-1"><a class="header-anchor" href="#支持hudi版本" aria-hidden="true">#</a> 支持Hudi版本</h2><ul><li>0.11.1</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-hudi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hudi读取" tabindex="-1"><a class="header-anchor" href="#hudi读取" aria-hidden="true">#</a> Hudi读取</h2><h3 id="支持数据类型" tabindex="-1"><a class="header-anchor" href="#支持数据类型" aria-hidden="true">#</a> 支持数据类型</h3><ul><li>支持的基础数据类型如下: <ul><li>整数类型: <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>浮点类型: <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>时间类型: <ul><li>timestamp</li><li>date</li></ul></li><li>字符类型: <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>布尔类型: <ul><li>boolean</li></ul></li><li>二进制类型: <ul><li>binary</li></ul></li></ul></li><li>支持的复杂数据类型包括: <ul><li>map</li><li>array</li></ul></li></ul><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>读连接器参数在<code>job.reader</code>中配置，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;hoodie&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;datasource&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;snapshot&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token string">&quot;/path/to/table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span><span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hudi.dag.HudiSourceFunctionDAGBuilder&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;MERGE_ON_READ&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数描述</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Hudi读连接器类名, <code>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiSourceFunctionDAGBuilder</code></td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">表的路径，可以是HDFS，S3，或者其他文件系统。</td></tr><tr><td style="text-align:left;">table.type</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Hudi表的类型，可以是 <code>MERGE_ON_READ</code> 或者 <code>COPY_ON_WRITE</code></td></tr><tr><td style="text-align:left;">hoodie.datasource.query.type</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">查询类型，可以是 <code>snapshot</code> 最新视图 或者 <code>read_optimized</code> 读优化视图</td></tr></tbody></table><h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数描述</th></tr></thead><tbody><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">读取并发度</td></tr></tbody></table><h2 id="hudi写入" tabindex="-1"><a class="header-anchor" href="#hudi写入" aria-hidden="true">#</a> Hudi写入</h2><h3 id="支持数据类型-1" tabindex="-1"><a class="header-anchor" href="#支持数据类型-1" aria-hidden="true">#</a> 支持数据类型</h3><ul><li>支持的基础数据类型如下: <ul><li>整数类型: <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>浮点类型: <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>时间类型: <ul><li>timestamp</li><li>date</li></ul></li><li>字符类型: <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>布尔类型: <ul><li>boolean</li></ul></li><li>二进制类型: <ul><li>binary</li></ul></li></ul></li><li>支持的复杂数据类型包括: <ul><li>map</li><li>array</li></ul></li></ul><h3 id="主要参数-1" tabindex="-1"><a class="header-anchor" href="#主要参数-1" aria-hidden="true">#</a> 主要参数</h3><p>写连接器参数在<code>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hoodie&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bucket&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;datasource&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;write&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;recordkey&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BUCKET&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hudi.sink.HudiSinkFunctionDAGBuilder&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;write&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;upsert&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MERGE_ON_READ&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;source_schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;id\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;},{\\&quot;name\\&quot;:\\&quot;test\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;},{\\&quot;name\\&quot;:\\&quot;timestamp\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;}]&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sink_schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;id\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;},{\\&quot;name\\&quot;:\\&quot;test\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;},{\\&quot;name\\&quot;:\\&quot;timestamp\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;}]&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数-1" tabindex="-1"><a class="header-anchor" href="#必需参数-1" aria-hidden="true">#</a> 必需参数</h4>`,23),k=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"参数名称"),t("th",{style:{"text-align":"left"}},"是否必填"),t("th",{style:{"text-align":"left"}},"参数枚举值"),t("th",{style:{"text-align":"left"}},"参数含义")])],-1),y=t("tr",null,[t("td",{style:{"text-align":"left"}},"class"),t("td",{style:{"text-align":"left"}},"Yes"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[n("Hudi写连接器类型, "),t("code",null,"com.bytedance.bitsail.connector.legacy.hudi.sink.HudiSinkFunctionDAGBuilder")])],-1),g=t("tr",null,[t("td",{style:{"text-align":"left"}},"write.operation"),t("td",{style:{"text-align":"left"}},"Yes"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[t("code",null,"upsert"),n(),t("code",null,"insert"),n(),t("code",null,"bulk_insert")])],-1),b=t("tr",null,[t("td",{style:{"text-align":"left"}},"table.type"),t("td",{style:{"text-align":"left"}},"Yes"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[n("Hudi表类型，"),t("code",null,"MERGE_ON_READ"),n("或者 "),t("code",null,"COPY_ON_WRITE")])],-1),v=t("tr",null,[t("td",{style:{"text-align":"left"}},"path"),t("td",{style:{"text-align":"left"}},"Yes"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},"表的路径，可以是HDFS，S3，或者其他文件系统。 如果该路径没有Hudi表，则会创建一张新表。")],-1),q=t("tr",null,[t("td",{style:{"text-align":"left"}},"format_type"),t("td",{style:{"text-align":"left"}},"Yes"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[n("输入的数据类型，当前支持 "),t("code",null,"json")])],-1),m=t("tr",null,[t("td",{style:{"text-align":"left"}},"source_schema"),t("td",{style:{"text-align":"left"}},"Yes"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},"用于解析输入数据的字段类型。")],-1),f=t("tr",null,[t("td",{style:{"text-align":"left"}},"sink_schema"),t("td",{style:{"text-align":"left"}},"Yes"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},"用于写入Hudi表的字段类型。")],-1),x={style:{"text-align":"left"}},_={href:"http://hoodie.table.name",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"left"}},"Yes",-1),E=t("td",{style:{"text-align":"left"}},null,-1),j=t("td",{style:{"text-align":"left"}},"Hudi表的名字。",-1),D=i(`<h4 id="可选参数-1" tabindex="-1"><a class="header-anchor" href="#可选参数-1" aria-hidden="true">#</a> 可选参数</h4><p>如需了解更多Hudi的高级参数, 请查看代码 <code>FlinkOptions.java</code></p><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">hoodie.datasource.write.recordkey.field</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">对于 <code>upsert</code> 操作, 此参数用于指定主键字段.</td></tr><tr><td style="text-align:left;">index.type</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">对于 <code>upsert</code> 操作, 此参数用于指定索引类型. 可以是 <code>STATE</code> 或者 <code>BUCKET</code></td></tr><tr><td style="text-align:left;">hoodie.bucket.index.num.buckets</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">如果我们使用了BUCKET索引, 我们需要指定桶的数量。</td></tr><tr><td style="text-align:left;">hoodie.bucket.index.hash.field</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">如果我们使用了BUCKET索引, 我们需要指定用于计算桶ID的字段。</td></tr></tbody></table><h2 id="hudi压缩" tabindex="-1"><a class="header-anchor" href="#hudi压缩" aria-hidden="true">#</a> Hudi压缩</h2><h3 id="主要参数-2" tabindex="-1"><a class="header-anchor" href="#主要参数-2" aria-hidden="true">#</a> 主要参数</h3><p>Compaction参数包含了reader和writer部分。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token string">&quot;/path/to/table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span><span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSourceDAGBuilder&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token string">&quot;/path/to/table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span><span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSinkDAGBuilder&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必填参数" tabindex="-1"><a class="header-anchor" href="#必填参数" aria-hidden="true">#</a> 必填参数</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">job.reader.class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Hudi压缩读取器类名, <code>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSourceDAGBuilder</code></td></tr><tr><td style="text-align:left;">job.writer.class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Hudi压缩写入器类名, <code>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSinkDAGBuilder</code></td></tr><tr><td style="text-align:left;">job.reader.path</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">表的路径，可以是HDFS，S3，或者其他文件系统。</td></tr><tr><td style="text-align:left;">job.writer.path</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">表的路径，可以是HDFS，S3，或者其他文件系统。</td></tr></tbody></table><h4 id="选填参数" tabindex="-1"><a class="header-anchor" href="#选填参数" aria-hidden="true">#</a> 选填参数</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">执行压缩的并发度</td></tr></tbody></table><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,12);function S(Y,B){const s=l("RouterLink"),o=l("ExternalLinkIcon");return d(),u("div",null,[r,t("p",null,[n("上级文档："),a(s,{to:"/zh/documents/connectors/"},{default:e(()=>[n("连接器")]),_:1})]),h,t("table",null,[k,t("tbody",null,[y,g,b,v,q,m,f,t("tr",null,[t("td",x,[t("a",_,[n("hoodie.table.name"),a(o)])]),H,E,j])])]),D,t("p",null,[n("配置示例文档："),a(s,{to:"/zh/documents/connectors/hudi/hudi-example.html"},{default:e(()=>[n("Hudi 连接器示例")]),_:1})])])}const A=p(c,[["render",S],["__file","hudi.html.vue"]]);export{A as default};
