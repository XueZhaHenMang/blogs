import{_ as n,c as a,f as e,o as l}from"./app-CB8GcC1F.js";const i={};function t(p,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="将博客部署到github-pages" tabindex="-1"><a class="header-anchor" href="#将博客部署到github-pages"><span>将博客部署到GitHub Pages</span></a></h1><ul><li><p>书接上回，我们使用<code>VuePress</code>生成了一个**<code>仅供本地访问的博客</code>**，接下来就是将博客部署到服务器上了，本文记录了部署到<code>GitHub Pages</code>的过程。</p></li><li><p><code>GitHub</code>在国内访问时灵时不灵，如果没有梯子或者网络不好一直连不上<code>GitHub</code>的，可以不用往下看了。</p></li><li><p>没使用过<code>GitHub</code>可以不用往下看了。</p></li></ul><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1. 前言</span></a></h2><ul><li>为什么选择<code>GitHub Pages</code>？ <ul><li>穷，没钱买<code>服务器、域名、CDN、OSS</code>。</li></ul></li><li>优缺点： <ul><li>优点：免费。</li><li>缺点：国内可能会访问不到。</li></ul></li></ul><h2 id="_2-将项目托管到github" tabindex="-1"><a class="header-anchor" href="#_2-将项目托管到github"><span>2. 将项目托管到GitHub</span></a></h2><h3 id="_2-1-创建远程仓库" tabindex="-1"><a class="header-anchor" href="#_2-1-创建远程仓库"><span>2.1 创建远程仓库</span></a></h3><ul><li><p>此处就不贴图了，给出建议配置如下：</p><ul><li><p>新建GitHub项目仓库，项目名为<code>blogs</code>。</p></li><li><p>设置仓库为<code>Public</code>。</p></li><li><p>可以不用添加<code>README</code>文件。</p></li><li><p>添加<code>.gitignore</code>文件，并选择<code>Node</code>作为<code>.gitignore</code>的模版。</p></li><li><p>可以不添加<code>license</code>。</p></li><li><p>点击创建即可。</p></li></ul></li></ul><h3 id="_2-2-对远程仓库进行设置" tabindex="-1"><a class="header-anchor" href="#_2-2-对远程仓库进行设置"><span>2.2 对远程仓库进行设置</span></a></h3><p>新建仓库之后会有一个<code>main</code>分支，我们用来存放源文件，所以需要**<code>使用其他分支</code>**来存放<code>VuePress</code>编译后的文件。</p><p>当然也可以选择不存放源文件，直接使用<code>main</code>分支存放编译后的文件。</p><ul><li>新建分支 <ul><li>名称随意，这里叫<code>gh-pages</code>。</li></ul></li><li>启用<code>Pages</code><ul><li>点击<code>Settings</code>选项卡。</li><li>左侧边栏点击<code>Pages</code>选项卡。</li><li><code>Build and deployment</code>下 <ul><li><code>Source</code>选择<code>Deploy from a branch</code>。</li><li><code>Branch</code>选择<code>gh-pages</code>分支，目录选<code>/(root)</code>。这里会出现一个<code>/docs</code>目录，我们在这个分支下没建这个目录，所以不选。</li><li>点击<code>save</code>按钮。</li></ul></li></ul></li></ul><h3 id="_2-3-创建本地仓库并关联远程仓库" tabindex="-1"><a class="header-anchor" href="#_2-3-创建本地仓库并关联远程仓库"><span>2.3 创建本地仓库并关联远程仓库</span></a></h3><ul><li><p>进入本地VuePress项目目录(有<code>packaeg.json</code>的目录），我这里是<code>[前缀]/vuepress-my-blogs</code>，请将<code>[前缀]</code>替换为你自己的路径。</p><div class="language-bas line-numbers-mode" data-highlighter="prismjs" data-ext="bas" data-title="bas"><pre><code><span class="line"># cd /path/to/your/local/folder</span>
<span class="line">cd [前缀]/vuepress-my-blogs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>初始化本地仓库</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>修改名称为<code>main</code>分支（可忽略）</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># git init默认会创建一个名为master的本地分支，可以使用如下命令修改分支名，没强迫症可以不修改</span></span>
<span class="line"><span class="token comment"># git branch -m &lt;name&gt;</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-m</span> main</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加远程仓库</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># git remote add origin https://github.com/username/repo.git</span></span>
<span class="line"><span class="token comment"># 可以使用ssh地址，也可以使用https地址</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:XueZhaHenMang/blogs.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查远程仓库，确保<code>origin</code>指向远程仓库地址URL</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> remote <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>拉取远程分支内容</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># git pull [&lt;options&gt;] [&lt;remote repository name&gt;] [&lt;remote branch name&gt;]</span></span>
<span class="line"><span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> origin main</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将如下文件添加进<code>.gitignore</code>文件中</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;# VuePress 默认临时文件目录&quot;</span> <span class="token operator">&gt;&gt;</span> .gitignore</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;.vuepress/.temp&quot;</span> <span class="token operator">&gt;&gt;</span> .gitignore</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;# VuePress 默认缓存目录&quot;</span> <span class="token operator">&gt;&gt;</span> .gitignore</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;.vuepress/.cache&quot;</span> <span class="token operator">&gt;&gt;</span> .gitignore</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;# VuePress 默认构建生成的静态文件目录&quot;</span> <span class="token operator">&gt;&gt;</span> .gitignore</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;.vuepress/dist&quot;</span> <span class="token operator">&gt;&gt;</span> .gitignore</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果前面选了\`Node\`作为.gitignore文件的模版的话，里面一般都包含了 node_modules/ 文件夹了。</span></span>
<span class="line"><span class="token comment"># 如果 .gitignore 文件中没有 node_modules/，可以将其添加进去</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;# 存放依赖文件的目录&quot;</span> <span class="token operator">&gt;&gt;</span> .gitignore</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;node_modules/&quot;</span> <span class="token operator">&gt;&gt;</span> .gitignore</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看文件状态</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>对已修改文件进行追踪</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token comment"># 可以再使用 git status 确认哪些被追踪了，忽略文件不会显示。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置当前仓库的用户名和邮箱（可忽略）</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 如果有配置全局的名称，以下两个操作可不做</span></span>
<span class="line"><span class="token function">git</span> config user.name <span class="token string">&quot;你的名字&quot;</span></span>
<span class="line"><span class="token function">git</span> config user.email <span class="token string">&quot;你的邮箱地址&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对已追踪的修改文件进行提交</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;初始化仓库，第一次提交文件&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>推送到远程分支</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 建立本地main分支与远程上游main分支的跟踪,并进行推送</span></span>
<span class="line"><span class="token comment"># git push --set-upstream origin &lt;本地分支名&gt;:&lt;远程分支名&gt;</span></span>
<span class="line"><span class="token function">git</span> push --set-upstream origin main:main</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查远程仓库的<code>main</code>分支，如果有刚刚推送的文件，那么这一步就成功了。</li></ul><h4 id="_2-4-配置github-actions" tabindex="-1"><a class="header-anchor" href="#_2-4-配置github-actions"><span>2.4 配置GitHub Actions</span></a></h4><p>我们只需要写一个<code>workflows</code>文件，会自动触发<code>GitHub Actions</code>。</p><ul><li>进入本地VuePress项目目录(有<code>packaeg.json</code>的目录），我这里是<code>[前缀]/vuepress-my-blogs</code>，请将<code>[前缀]</code>替换为你自己的路径。</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># cd /path/to/your/local/folder</span></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>前缀<span class="token punctuation">]</span>/vuepress-my-blogs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建<code>.github/workflows/build-vuepress.yml</code>文件，文件名可以更改。</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> .github/workflows</span>
<span class="line"><span class="token function">touch</span> .github/workflows/build-vuepress.yml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将以下内容写入<code>.github/workflows/build-vuepress.yml</code>中</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>vuepress</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 每当 push 到 main 分支时触发部署</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span></span>
<span class="line">  <span class="token comment"># 手动触发部署</span></span>
<span class="line">  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">permissions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write</span>
<span class="line">  <span class="token key atrule">deployments</span><span class="token punctuation">:</span> write</span>
<span class="line">  <span class="token key atrule">pages</span><span class="token punctuation">:</span> write</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">docs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line"></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 选择要使用的 pnpm 版本</span></span>
<span class="line">          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span></span>
<span class="line">          <span class="token comment"># 使用 pnpm 安装依赖</span></span>
<span class="line">          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 选择要使用的 node 版本</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span></span>
<span class="line">          <span class="token comment"># 缓存 pnpm 依赖</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm</span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 运行构建脚本</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm docs<span class="token punctuation">:</span>build</span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span></span>
<span class="line">      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 部署到 gh-pages 分支</span></span>
<span class="line">          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages</span>
<span class="line">          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line">          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line">          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将修改的文件提交并推送到远程</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 对修改文件添加追踪</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token comment"># 提交修改</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;添加github workflows文件&quot;</span></span>
<span class="line"><span class="token comment"># 推送到远程</span></span>
<span class="line"><span class="token function">git</span> push</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查远程仓库的构建过程 <ul><li>推送本次修改之后，github会自动触发<code>actions</code>的执行。</li><li>点击<code>Actions</code>选项卡，如果看到<code>workflow</code>运行成功。</li><li><code>https://yourname.github.io/blogs/</code>能够成功访问，则表示成功。</li></ul></li></ul><h2 id="_3-结语" tabindex="-1"><a class="header-anchor" href="#_3-结语"><span>3. 结语</span></a></h2><ul><li>现在我们的博客可以在网上访问了。</li><li>接下来可以做的事情 <ol><li>可以继续翻阅<code>VuePress</code>的文档，做一些个性化设计。</li><li>可以往里面添加自己的<code>Markdown</code>内容啦。</li><li>可以搞个图床，存放文档中的图片。</li><li>可以买一个域名，添加<code>CNAME</code>解析，解决国内访问的问题。</li><li>可以考虑加上<code>Google analysis</code>看看访问情况。</li><li>可以考虑加上广告等等。</li><li>当然也可以考虑将博客部署到其他服务器上，不过就要面对备案、流量等问题了。</li></ol></li></ul>`,48)]))}const o=n(i,[["render",t],["__file","将博客部署到GitHub Pages.html.vue"]]),d=JSON.parse('{"path":"/%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/%E5%B0%86%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2%E5%88%B0GitHub%20Pages.html","title":"将博客部署到GitHub Pages","lang":"zh-CN","frontmatter":{"sidebar":"heading"},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. 将项目托管到GitHub","slug":"_2-将项目托管到github","link":"#_2-将项目托管到github","children":[{"level":3,"title":"2.1 创建远程仓库","slug":"_2-1-创建远程仓库","link":"#_2-1-创建远程仓库","children":[]},{"level":3,"title":"2.2 对远程仓库进行设置","slug":"_2-2-对远程仓库进行设置","link":"#_2-2-对远程仓库进行设置","children":[]},{"level":3,"title":"2.3 创建本地仓库并关联远程仓库","slug":"_2-3-创建本地仓库并关联远程仓库","link":"#_2-3-创建本地仓库并关联远程仓库","children":[]}]},{"level":2,"title":"3. 结语","slug":"_3-结语","link":"#_3-结语","children":[]}],"git":{"updatedTime":1733653413000},"filePathRelative":"搭建博客/将博客部署到GitHub Pages.md"}');export{o as comp,d as data};
