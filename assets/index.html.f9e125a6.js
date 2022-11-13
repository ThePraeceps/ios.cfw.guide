import{_ as r}from"./Odysseyn1x.f106730e.js";import{_ as c,o as d,c as u,a as e,b as o,d as t,w as a,e as l,r as s}from"./app.95a514df.js";const h={},y=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1),p={class:"custom-container warning"},f=e("p",{class:"custom-container-title"},"WARNING",-1),m=e("code",null,"Right Before Trigger",-1),b=e("p",null,"Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking millions of iOS devices with A7 to A11 SoC's on firmwares 12.0 to 14.8.1.",-1),g=e("p",null,"After installing checkra1n, we'll be using a script to install Odysseyra1n. This replaces important parts of the jailbreak with modern and fast alternatives.",-1),_=e("p",null,"On iOS 14, A11 devices do not allow you to use SEP functionality in a jailbroken state. SEP functionality are things such as a passcode, Face ID/Touch ID, and Apple Pay.",-1),v=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1),k=e("li",null,[o("A 256MB or greater USB Drive "),e("ul",null,[e("li",null,"If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. A CD or DVD), you can use that instead of a USB Drive")])],-1),w={href:"https://github.com/raspberryenvoie/odysseyn1x/releases",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/raspberryenvoie/odysseyn1x/releases/tag/v2.12-checkra1n-0.10.1",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[o('For 64-bit computers, download the "AMD64" version '),e("ul",null,[e("li",null,`It doesn't matter if you have an AMD processor or not, "AMD64" is just the name of the architecture`)])],-1),O=e("li",null,'For 32-bit computers, download the "i686" version',-1),A={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},I=l('<p><img src="'+r+'" alt="A screenshot of the Odysseyn1x menu"></p><h2 id="installing-ventoy" tabindex="-1"><a class="header-anchor" href="#installing-ventoy" aria-hidden="true">#</a> Installing Ventoy</h2><ol><li>Download and extract the contents of the <code>Ventoy.zip</code> file</li><li>Insert your USB drive if you have not already done so, and open the <code>Ventoy2Disk.exe</code> file</li><li>Select the USB drive you would like to boot Odysseyn1x from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Click <code>Install</code> and confirm that you are ok erasing the USB drive <ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once it has installed, copy the Odysseyn1x iso file that you downloaded onto the USB drive</li></ol><h2 id="booting-odysseyn1x" tabindex="-1"><a class="header-anchor" href="#booting-odysseyn1x" aria-hidden="true">#</a> Booting Odysseyn1x</h2><ol><li>Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li><li>Press enter once you see the Ventoy screen to boot into Odysseyn1x</li></ol><h2 id="running-checkra1n" tabindex="-1"><a class="header-anchor" href="#running-checkra1n" aria-hidden="true">#</a> Running checkra1n</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div>',7),B=l("<li>Once you have loaded odysseyn1x, select <code>checkra1n</code><ul><li>If you&#39;re on an A8X or A9X device, select the <code>checkra1n (A8X/A9X)</code> option instead.</li><li>If you&#39;re on an A11 device, you will need to head into <code>Options</code>, then enable the <code>Skip A11 BPR Check</code></li><li>If you&#39;re on iOS 14.6 or later, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code></li></ul></li><li>Click <code>Start</code> and follow all onscreen prompts</li>",2),q=e("code",null,"Start",-1),D=e("ul",null,[e("li",null,"Follow the instructions until your device reboots to a black screen")],-1),C=e("li",null,"Once your device boots, you can quit checkra1n, but do not shut down your computer",-1),U=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don't recommend it because of the fact that:"),e("ul",null,[e("li",null,"People generally tend to have more stability when using Odysseyra1n instead of installing Cydia"),e("li",null,"Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available"),e("li",null,"Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia")])],-1),T=e("h2",{id:"the-odysseyra1n-script",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-odysseyra1n-script","aria-hidden":"true"},"#"),o(" The Odysseyra1n script")],-1),P={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"TIP",-1),j={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"},N=l('<p>The following steps only need to be performed once and are optional but highly recommended for a smoother experience and modern bootstrap.</p><ol><li>Unlock your device</li><li>Ensure that your computer is trusted by your device</li><li>Select <code>Odysseyra1n</code> in Odysseyn1x</li><li>Sileo should install to your device</li><li>Do not close Odysseyn1x as you will need to re-jailbreak in a few minutes</li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>After installing Odysseyra1n, <strong>do not</strong> install Cydia from the Loader app.</p></div>',3),R=l('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function E(G,F){const n=s("router-link"),i=s("ExternalLinkIcon");return d(),u("div",null,[y,e("div",p,[f,e("p",null,[o("A7 devices will likely fail to successfully jailbreak with Odysseyn1x, as a result, you'll need to use an older Odysseyn1x version and quickly unplug and replug your device once you see "),m,o(". It is highly recommended to follow "),t(n,{to:"/installing-chimera"},{default:a(()=>[o("Installing Chimera")]),_:1}),o(" instead.")])]),e("p",null,[o("Odysseyra1n is a "),t(n,{to:"/types-of-jailbreak/#semi-tethered-jailbreaks"},{default:a(()=>[o("semi-tethered jailbreak")]),_:1}),o(", meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.")]),b,g,_,v,e("ul",null,[k,e("li",null,[o("The latest version of "),e("a",w,[o("Odysseyn1x"),t(i)]),e("ul",null,[e("li",null,[o("If you are on an A7 device, you should instead get the v2.12-checkra1n-0.10.1 release of "),e("a",S,[o("Odysseyn1x"),t(i)])]),x,O])]),e("li",null,[e("a",A,[o("Ventoy"),t(i)])])]),I,e("ol",null,[B,e("li",null,[o("You will now be presented with instructions in how to reboot your device into "),t(n,{to:"/faq/#what-is-dfu-mode"},{default:a(()=>[o("DFU mode")]),_:1}),o(", click "),q,o(" to begin "),D]),C]),U,T,e("div",P,[V,e("p",null,[o("If you would prefer to do so, instead of running the script on your computer, you can run the Odysseyra1n script using the "),e("a",j,[o("shortcut"),t(i)]),o(" by opening this page on your device and then clicking the shortcut hyperlink.")])]),N,e("p",null,[o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),t(n,{to:"/faq/#what-are-tweaks"},{default:a(()=>[o("tweaks")]),_:1}),o(", themes, packages and more.")]),R])}var W=c(h,[["render",E],["__file","index.html.vue"]]);export{W as default};
