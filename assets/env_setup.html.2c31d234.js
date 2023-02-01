import{_ as l}from"./change-hive-version.6df1e05b.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as d,a as n,d as s,w as p,b as e,e as i,r as t}from"./app.da453788.js";const u={},b=n("h1",{id:"开发环境配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开发环境配置","aria-hidden":"true"},"#"),e(" 开发环境配置")],-1),h=n("hr",null,null,-1),m=n("h2",{id:"前置条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前置条件","aria-hidden":"true"},"#"),e(" 前置条件")],-1),v=n("p",null,[n("strong",null,"Bitsail"),e("支持在本地IDE运行集成测试，为此需要:")],-1),k=n("li",null,"JDK1.8",-1),_=n("li",null,"maven 3.6+",-1),f={href:"https://www.docker.com/products/docker-desktop/",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"在安装上述必需组件后，您可以在本地的IDE上直接运行已有的集成测试。",-1),x=n("h2",{id:"从源代码编译",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#从源代码编译","aria-hidden":"true"},"#"),e(" 从源代码编译")],-1),j=n("h3",{id:"适配hive环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#适配hive环境","aria-hidden":"true"},"#"),e(" 适配hive环境")],-1),y=n("code",null,"bitsail-shaded-hive",-1),w=n("strong",null,"3.1.0",-1),S={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-shade/bitsail-shaded-hive/pom.xml",target:"_blank",rel:"noopener noreferrer"},C=i('<p><img src="'+l+`" alt="" loading="lazy"></p><h3 id="打包-产物结构" tabindex="-1"><a class="header-anchor" href="#打包-产物结构" aria-hidden="true">#</a> 打包&amp;产物结构</h3><ul><li>运行此脚本在编译时将Flink嵌入到BitSail的包中。<code>bash build.sh</code>。如果Flink已经在你们的集群中提供，则可以打包时只包含BitSail相关代码 <code>mvn clean package -pl bitsail-dist -am -Dmaven.test.skip=true</code></li></ul><p>完成打包后，输出的文件在此目录下<code>bitsail-dist/target/</code>.</p><p>产物的目录结构如下:</p><div class="language-simple line-numbers-mode" data-ext="simple"><pre class="language-simple"><code>bitsail-archive-\${version}-SNAPSHOT    
    /bin  
        /bitsail #提交启动脚本
    /conf
        /bitsail.conf #bitsail 系统配置
    /embedded
        /flink #内嵌flink
    /examples #e运行样例配置
        /example-datas #运行样例数据
        /Fake_xx_Example.json #Fake source 导入到 xx 的样例配置文件
        /xx_Print_Example.json #xx 导入到 print sink 的样例配置文件
    /libs #运行需要的jar包
        /bitsail-core.jar #入口 jar 包
        /connectors #connector plugin实现jar包
            /mapping #connector plugin 配置文件
        /components #各个组件的实现包，例如metric、dirty-collector
        /clients #bitsail client jar 包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行本地集成测试" tabindex="-1"><a class="header-anchor" href="#运行本地集成测试" aria-hidden="true">#</a> 运行本地集成测试</h2>`,7),E={href:"https://github.com/bytedance/bitsail/tree/master/bitsail-test/bitsail-connector-test",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"bitsail-connector-test",-1),K={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-test/bitsail-connector-test/src/main/java/com/bytedance/bitsail/test/connector/test/EmbeddedFlinkCluster.java",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-connectors/bitsail-connectors-legacy/bitsail-connector-kafka/src/test/java/com/bytedance/bitsail/connector/legacy/kafka/source/KafkaSourceITCase.java",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.testcontainers.org/modules/kafka/",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"testKafkaSource",-1),D=i(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KafkaSourceITCase</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testKafkaSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">BitSailConfiguration</span> configuration <span class="token operator">=</span> <span class="token class-name">JobConfUtils</span><span class="token punctuation">.</span><span class="token function">fromClasspath</span><span class="token punctuation">(</span><span class="token string">&quot;kafka_to_print.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">updateConfiguration</span><span class="token punctuation">(</span>configuration<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">EmbeddedFlinkCluster</span><span class="token punctuation">.</span><span class="token function">submitJob</span><span class="token punctuation">(</span>configuration<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function N(L,V){const o=t("RouterLink"),a=t("ExternalLinkIcon");return r(),d("div",null,[b,n("p",null,[s(o,{to:"/en/documents/start/env_setup.html"},{default:p(()=>[e("English")]),_:1}),e(" | 简体中文")]),h,m,v,n("ul",null,[k,_,n("li",null,[n("a",f,[e("Docker desktop"),s(a)])])]),g,x,j,n("p",null,[e("BitSail使用"),y,e("模块来管理hive依赖，在其中使用"),w,e("作为默认hive版本。 因此，用户如果想在其他版本的hive环境中部署和使用BitSail，需要先修改 "),n("a",S,[e("bitsail-shaded-hive"),s(a)]),e(" 中的hive版本信息（如下图所示）。")]),C,n("p",null,[e("在 "),n("a",E,[B,s(a)]),e(" 模块中，我们提供了 "),n("a",K,[e("EmbeddedFlinkCluster"),s(a)]),e(" 类用于启动一个本地运行的flink作业。")]),n("p",null,[e("例如，我们为Kafka读连接器构建了一个集成测试 "),n("a",F,[e("KafkaSourceITCase"),s(a)]),e(" 。 在这个测试中，首先会使用 "),n("a",I,[e("test container"),s(a)]),e(" 在本地docker中启动Kafka服务。此后便可以通过 "),T,e(" 方法来启动一个本地的 kafka2print flink作业。")]),D])}const R=c(u,[["render",N],["__file","env_setup.html.vue"]]);export{R as default};
