import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,a as t,b as e,d as a,w as s,e as d,r as o}from"./app.da453788.js";const c={},u=t("h1",{id:"larksheet-connector",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#larksheet-connector","aria-hidden":"true"},"#"),e(" LarkSheet connector")],-1),h=t("p",null,[e("The "),t("strong",null,"BitSail"),e(" LarkSheet connector supports reading lark sheets. The main function points are as follows:")],-1),k=t("li",null,"Support batch read from single or multiple lark sheets at once.",-1),m={href:"https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology?lang=en-US",target:"_blank",rel:"noopener noreferrer"},g=t("li",null,"Support read a portion of columns from sheets.",-1),f=d(`<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-larksheet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="larksheet-reader" tabindex="-1"><a class="header-anchor" href="#larksheet-reader" aria-hidden="true">#</a> LarkSheet reader</h3><h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3><p>BitSail LarkSheet reader processes all data as string.</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.reader</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sheet_urls&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;datetime&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">LarkSheet reader class name, <code>com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat</code></td></tr><tr><td style="text-align:left;">sheet_urls</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">A list of sheet to read. Multi sheets urls are separated by comma.</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types.</td></tr></tbody></table><p>The following parameters are for authentication, you have to set (<code>sheet_token</code>) or (<code>app_id</code> and <code>app_secret</code>) in your configuration.</p><table><tr><th>Param name</th><th>Required</th><th>Optional value</th><th>Description</th></tr><tr><td>sheet_token</td><td rowspan="3">At least set one:<br>1. \`sheet_token\`<br>2. \`app_id\` and \`app_secret\`</td><td></td><td>Token for get permission to visit <a href="https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN">feishu open api</a>.</td></tr><tr><td>app_id</td><td></td><td rowspan="2">Use \`app_id\` and \`app_secret\` to generate token for visiting <a href="https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN">feishu open api</a>.</td></tr><tr><td>app_secret</td><td></td></tr></table><p>Note that if you use <code>sheet_token</code>, it may expire when the job runs. If you use <code>app_id</code> and <code>app_secret</code>, the token will be refreshed if it expires.</p><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Read parallelism num</td></tr><tr><td style="text-align:left;">batch_size</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Number of lines extracted once.</td></tr><tr><td style="text-align:left;">skip_nums</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">A list of numbers indicating how many lines should be skipped in each sheet.</td></tr></tbody></table><h2 id="related-documents" tabindex="-1"><a class="header-anchor" href="#related-documents" aria-hidden="true">#</a> Related documents</h2>`,16);function y(b,v){const n=o("RouterLink"),l=o("ExternalLinkIcon");return r(),i("div",null,[u,t("p",null,[e("Parent document: "),a(n,{to:"/en/documents/connectors/"},{default:s(()=>[e("Connectors")]),_:1})]),h,t("ul",null,[k,t("li",null,[e("Support authentication by static token and "),t("a",m,[e("application"),a(l)]),e(".")]),g]),f,t("p",null,[e("Configuration examples: "),a(n,{to:"/en/documents/connectors/larksheet/larksheet-example.html"},{default:s(()=>[e("LarkSheet connector example")]),_:1})])])}const q=p(c,[["render",y],["__file","larksheet.html.vue"]]);export{q as default};
