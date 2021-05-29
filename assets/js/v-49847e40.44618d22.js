(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[689],{6146:(e,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>r});const r={key:"v-49847e40",path:"/rookie/preInstall.html",title:"安装前的准备",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.确保网络环境",slug:"_1-确保网络环境",children:[]},{level:2,title:"2.刻录启动优盘",slug:"_2-刻录启动优盘",children:[]},{level:2,title:"3.进入主板 BIOS 进行设置",slug:"_3-进入主板-bios-进行设置",children:[]},{level:2,title:"4.关闭主板设置中的 Secure Boot",slug:"_4-关闭主板设置中的-secure-boot",children:[]},{level:2,title:"5.调整启动方式为 UEFI",slug:"_5-调整启动方式为-uefi",children:[]},{level:2,title:"6.调整硬盘启动顺序",slug:"_6-调整硬盘启动顺序",children:[]},{level:2,title:"7.准备安装",slug:"_7-准备安装",children:[]}],filePathRelative:"rookie/preInstall.md",git:{updatedTime:1622292364e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:1}]}}},8056:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>v});var r=s(6252);const n=(0,r.uE)('<h1 id="安装前的准备"><a class="header-anchor" href="#安装前的准备">#</a> 安装前的准备</h1><p>由于当前 UEFI 已普及十余年，安装将全部以 UEFI+GPT 的形式进行，传统 BIOS 方式不再赘述。</p><h2 id="_1-确保网络环境"><a class="header-anchor" href="#_1-确保网络环境">#</a> 1.确保网络环境</h2><p>如果你可以使用路由器分接出来的网线，以 dhcp 的方式直接上网，那么不用准备什么。如果你的环境只能使用无线网络安装，需要事先把自己所用的 wifi 名称改成自己能记住的英文名称。因为<strong>安装时无法显示和输入中文名的 wifi</strong>，你会看到一堆不知道是什么的方块，并且在安装过程中你将没有办法输入中文的无线名称进行连接。</p><p>其次，有些笔记本电脑上存在无线网卡的硬件开关或者键盘控制，开机后安装前需要<strong>确保你的无线网卡硬件开关处于打开状态</strong>。</p><h2 id="_2-刻录启动优盘"><a class="header-anchor" href="#_2-刻录启动优盘">#</a> 2.刻录启动优盘</h2>',6),o=(0,r.Uk)("准备一个 2G 以上的优盘，刻录一个安装启动盘。安装镜像 iso 在"),t={href:"https://archlinux.org/download/",target:"_blank",rel:"noopener noreferrer"},l=(0,r.Uk)("下载页面"),i=(0,r.Uk)("下载，建议通过磁力链接或 torrent 下载。"),c=(0,r.Uk)("Windows 下推荐使用"),p={href:"https://www.ventoy.net/cn/doc_start.html",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("ventoy"),d=(0,r.Uk)("或者"),u={href:"https://rufus.ie/",target:"_blank",rel:"noopener noreferrer"},f=(0,r.Uk)("Rufus"),k=(0,r.Uk)("或者"),g={href:"https://www.poweriso.com/download.php",target:"_blank",rel:"noopener noreferrer"},b=(0,r.Uk)("Power ISO"),_=(0,r.Uk)("进行优盘刻录。三者皆为免费使用的软件。具体操作请自行查阅，都非常简单。"),m=(0,r.uE)('<p>Linux 下可以直接用 dd 命令进行刻录。注意 of 的参数为 sdx,不是 sdx1 sdx2 等。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">dd</span> <span class="token assign-left variable">bs</span><span class="token operator">=</span>4M <span class="token assign-left variable">if</span><span class="token operator">=</span>/path/to/archlinux.iso <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdx <span class="token assign-left variable">status</span><span class="token operator">=</span>progress <span class="token assign-left variable">oflag</span><span class="token operator">=</span>sync\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>bs=4M 指定一个较为合理的文件输入输出块大小。<br> status=progress 用来输出刻录过程总的信息。<br> oflag=sync 用来控制写入数据时的行为特征。确保命令结束时数据及元数据真正写入磁盘，而不是刚写入缓存就返回。</p></blockquote><h2 id="_3-进入主板-bios-进行设置"><a class="header-anchor" href="#_3-进入主板-bios-进行设置">#</a> 3.进入主板 BIOS 进行设置</h2><p>插入优盘并开机。在开机的时候，按下 F2/F8/F10/DEL 等(取决与你的主板型号，具体请查阅你主板的相关信息)按键，进入主板的 BIOS 设置界面。</p><h2 id="_4-关闭主板设置中的-secure-boot"><a class="header-anchor" href="#_4-关闭主板设置中的-secure-boot">#</a> 4.关闭主板设置中的 Secure Boot</h2><p>在类似名为 <code>security</code> 的选项卡中，找到一项名为 Secure Boot(名称可能略有差异)的选项，选择 Disable 将其禁用。</p><h2 id="_5-调整启动方式为-uefi"><a class="header-anchor" href="#_5-调整启动方式为-uefi">#</a> 5.调整启动方式为 UEFI</h2><p>在某些旧的主板里，需要调整启动模式为 UEFI,而非传统的 BIOS/CSM。在类似名为 <code>boot</code> 的选项卡中，找到类似名为 Boot Mode 的选项，确保将其调整为 UEFI only，而非 legacy/CSM。</p><h2 id="_6-调整硬盘启动顺序"><a class="header-anchor" href="#_6-调整硬盘启动顺序">#</a> 6.调整硬盘启动顺序</h2><p>在类似名为 <code>boot</code> 的选项卡中，找到类似名为 Boot Options(名称可能略有差异)的设置选项，将 USB 优盘的启动顺序调至首位。</p><h2 id="_7-准备安装"><a class="header-anchor" href="#_7-准备安装">#</a> 7.准备安装</h2><p>最后保存 BIOS 设置并退出，一般的按键是 F10。此时系统重启，不出意外你应该已经进入 archlinux 的安装界面。</p>',13),v={render:function(e,a){const s=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[n,(0,r.Wm)("p",null,[o,(0,r.Wm)("a",t,[l,(0,r.Wm)(s)]),i]),(0,r.Wm)("p",null,[c,(0,r.Wm)("a",p,[h,(0,r.Wm)(s)]),d,(0,r.Wm)("a",u,[f,(0,r.Wm)(s)]),k,(0,r.Wm)("a",g,[b,(0,r.Wm)(s)]),_]),m],64)}}}}]);