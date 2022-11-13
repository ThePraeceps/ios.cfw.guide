import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,o as d,c as u,a as e,b as o,d as t,w as s,e as i,r as a}from"./app.95a514df.js";const h={},p=i('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You need to have enabled developer mode on your ChromeOS device to follow this</p></div><h2 id="downloads-chromeos" tabindex="-1"><a class="header-anchor" href="#downloads-chromeos" aria-hidden="true">#</a> Downloads (ChromeOS)</h2>',5),m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},g=i('<p><img src="'+r+'" alt="A screenshot of the checkra1n application"></p><h2 id="allowing-checkra1n-to-run" tabindex="-1"><a class="header-anchor" href="#allowing-checkra1n-to-run" aria-hidden="true">#</a> Allowing checkra1n to run</h2><ol><li>Move the checkra1n binary which is downloaded to <code>/usr/local/bin</code><ul><li>This can be done by doing the following: <ul><li>press <code>Ctrl</code> + <code>Alt</code> + <code>T</code></li><li>run <code>shell</code></li><li>run <code>mv ~/Downloads/checkra1n /usr/local/bin/</code></li></ul></li></ul></li><li>Run the following command in terminal: <code>sudo mount -o remount,exec /tmp</code><ul><li>You&#39;ll need to do this every single time you reboot your ChromeOS device</li></ul></li><li>Every time you need to jailbreak in ChromeOS, you need to plug in your device, and enter Recovery Mode manually.</li></ol><h2 id="installing-checkra1n" tabindex="-1"><a class="header-anchor" href="#installing-checkra1n" aria-hidden="true">#</a> Installing checkra1n</h2>',4),_=i("<li>Open the <code>pongoOS.zip</code> file, navigate to <code>PongoConsolidated.bin</code>, then extract it. <ul><li>Keep note of where you extract this</li></ul></li><li>Run the <code>checkra1n</code> binary in CLI mode using this custom pongoOS in the terminal using <code>TERM=linux sudo checkra1n -c -k [path to PongoConsolidated.bin]</code></li><li>Plug your iOS device into your computer</li>",3),f=e("code",null,"Start",-1),w=e("ul",null,[e("li",null,"Follow the instructions until your device shows a black screen")],-1),b=e("li",null,"After this, checkra1n should automatically install",-1),k=e("p",null,"Your iOS device should now reboot.",-1),v=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don't recommend it because of the fact that:"),e("ul",null,[e("li",null,"People generally tend to have more stability when using Odysseyra1n instead of installing Cydia"),e("li",null,"Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available"),e("li",null,"Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia")])],-1),S=e("h2",{id:"the-odysseyra1n-script",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-odysseyra1n-script","aria-hidden":"true"},"#"),o(" The Odysseyra1n script")],-1),x=e("li",null,"Open this page (ios.cfw.guide/installing-odysseyra1n-chromeos-a8x-a9x) on your device by typing this URL into Safari",-1),C={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"},I=e("ul",null,[e("li",null,"If needed, download the Shortcuts app.")],-1),O=e("li",null,[o("When prompted, choose "),e("code",null,"Open")],-1),P=e("li",null,[o("If necessary, press the "),e("code",null,"Procursus Bootstraper"),o(" icon, then press the Play icon.")],-1),A=e("li",null,"Press OK to any prompts which do come up",-1),T=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[o("If prompted about an untrusted shortcut, run another shortcut, then open "),e("code",null,"Settings"),o(", go to "),e("code",null,"Shortcuts"),o(", and then toggle "),e("code",null,"Allow Untrusted Shortcuts")])],-1);function U(B,N){const n=a("ExternalLinkIcon"),l=a("router-link");return d(),u("div",null,[p,e("ul",null,[e("li",null,[o("The latest release of "),e("a",m,[o("checkra1n"),t(n)])]),e("li",null,[o("The custom version of "),e("a",y,[o("pongoOS"),t(n)])])]),g,e("ol",null,[_,e("li",null,[o("You will now be presented with instructions in how to reboot your device into "),t(l,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>[o("DFU mode")]),_:1}),o(", click "),f,o(" to begin "),w]),b]),k,v,S,e("ol",null,[x,e("li",null,[o("Click on "),e("a",C,[o("this hyperlink"),t(n)]),o(" on your device, and press `Get Shortcut "),I]),O,P,A]),T,e("p",null,[o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),t(l,{to:"/faq/#what-are-tweaks"},{default:s(()=>[o("tweaks")]),_:1}),o(", themes, packages and more.")])])}var E=c(h,[["render",U],["__file","index.html.vue"]]);export{E as default};
