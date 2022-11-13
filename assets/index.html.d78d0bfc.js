import{_ as s,o as d,c as u,a as e,b as t,d as o,w as l,e as n,r}from"./app.95a514df.js";const c={},h=n('<h2 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h2><p>iOS and iPadOS devices can typically only update to firmware versions which Apple has &quot;signed&quot;. This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.</p><p>Fortunately, we can use different &quot;profiles&quot; to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.</p><p>This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:</p><ul><li><strong>12.5.5</strong> (<em>Only for devices which did not receive iOS 13 or newer</em>) - November 29th, 2022</li><li><strong>15.6</strong> - November 15th, 2022</li><li><strong>15.6.1</strong> - December 11th, 2022</li><li><strong>16.0</strong> (<em>iPhone 14 series only</em>) - December 13th, 2022</li><li><strong>16.0</strong> (<em>All other devices</em>) - December 21st, 2022</li><li><strong>16.0.1</strong> - December 21st, 2022</li><li><strong>16.0.2</strong> - January 8th, 2022</li><li><strong>15.7</strong> (<em>iPads which got 16.x on 14.4.2 or older only</em>) - January 22nd, 2022</li><li><strong>16.0.3</strong> - January 22nd, 2022</li></ul>',5),p=e("code",null,"UTC 00:00",-1),g={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},m=n('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Depending on your target iOS version, you won&#39;t be able to do this if you futurerestored after the following dates:</p><ul><li>12.5.5: August 31st, 2022</li><li>15.6: August 17th, 2022</li><li>15.6.1: September 12th, 2022</li><li>16.0 (<em>iPhone 14 series only</em>): September 14th, 2022</li><li>16.0 (<em>All other devices</em>): September 22nd, 2022</li><li>16.0.1: September 22nd, 2022</li><li>16.0.2: October 10th, 2022</li><li>15.7: October 24th, 2022</li><li>16.0.3: October 24th, 2022</li></ul></div>',1),f={class:"custom-container tip"},b=e("p",{class:"custom-container-title"},"TIP",-1),v=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"If you previously attempted an older blobless method, remove all delay and beta profiles prior to following this method.")],-1),y=e("h2",{id:"installing-dahlia",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-dahlia","aria-hidden":"true"},"#"),t(" Installing Dahlia")],-1),_=e("li",null,"Launch your current jailbreak",-1),w={href:"https://dhinakg.github.io/repo/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://repo.cadoth.net",target:"_blank",rel:"noopener noreferrer"},q=e("li",null,[t("Search and install the "),e("code",null,"Dahlia"),t(" package")],-1),S=e("li",null,[t("Tap "),e("code",null,"Reboot Device"),t(", and then rejailbreak your device after rebooting")],-1),T=n('<h2 id="preparing-to-update" tabindex="-1"><a class="header-anchor" href="#preparing-to-update" aria-hidden="true">#</a> Preparing to update</h2><ol><li>Open the settings app, scroll down, and tap on <code>Dahlia</code></li><li>Enable <code>Toggle Supervision</code>, then say Yes to Userspace Rebooting <ul><li>If you are already supervised for any reason, you can skip this step</li></ul></li><li>Tap <code>Download Profiles</code>, then tap &quot;Normal&quot;</li><li>Tap <code>Download Profile</code> next to the iOS version you are wanting to update too.</li><li>Tap &quot;Allow&quot; when prompted</li><li>Exit out of the Dahlia menu and go to <code>General</code> -&gt; <code>Profiles &amp; Device Management</code> -&gt; <code>OTA Delay - [Days] Days</code></li><li>Tap &quot;Install&quot; in the top right corner and enter your passcode if prompted</li><li>Tap &quot;Install&quot; again twice to confirm</li><li>Go back to the <code>Dahlia</code> tab in Settings</li><li>Make sure <code>Ready to Update</code> says &quot;Yes&quot; <ul><li>If it doesn&#39;t, click the &quot;i&quot; next to the &quot;Ready to Update&quot; tab, and see what the issue is</li></ul></li></ol><h2 id="restoring-rootfs" tabindex="-1"><a class="header-anchor" href="#restoring-rootfs" aria-hidden="true">#</a> Restoring rootFS</h2>',3),D=e("li",null,"Open the Settings application",-1),x=e("li",null,[t("Tap "),e("code",null,"General"),t(" -> "),e("code",null,"Software Update")],-1),I=e("li",null,[t("Ensure that the version displayed is the version you are intending to update to "),e("ul",null,[e("li",null,[e("strong",null,"Do not"),t(" update yet, we will do this later")])])],-1),O=e("li",null,"Reboot your device",-1),A=n('<h2 id="updating-your-firmware-version" tabindex="-1"><a class="header-anchor" href="#updating-your-firmware-version" aria-hidden="true">#</a> Updating your firmware version</h2><ol><li>Plug your device into power and connect to the Internet with Wi-Fi</li><li>Open the Settings application</li><li>Tap <code>General</code> -&gt; <code>Software Update</code></li><li>Ensure that the version displayed is the version you are intending to update to</li><li>Download and install the update</li><li>Once updated, remove the update profile and (if applicable) the beta profile through Settings</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>As a result of supervising earlier, your device will remain supervised. Being in a supervised state means that:</p><ul><li>A message will display in Settings, showing that your device is supervised</li><li>Activation lock will be disabled, potentially making your device accessible by thieves (FindMy will still work however)</li><li>If your device has Mobile Device Management enabled (e.g. a school or work device), then your organisation will be able to silently install and uninstall apps on your device</li></ul><p>Note that, for most users, staying in a supervised state won&#39;t be an issue.</p><p>It is possible to remove the supervised state by resetting your device and restoring a previously made backup. This can be done by selecting &quot;Erase All Content and Settings&quot; in the Settings app, then restoring from a backup during setup from iCloud.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you restore a backup made in a jailbroken state from <strong>iTunes/Finder</strong>, you may encounter severe issues, such as bootloops.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you restore a backup made in a jailbroken state from <strong>iCloud</strong>, you may encounter false-positive flagging of jailbreak detection.</p></div>',5),P={class:"custom-container tip"},R=e("p",{class:"custom-container-title"},"TIP",-1),j={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"};function N(E,G){const i=r("ExternalLinkIcon"),a=r("router-link");return d(),u("div",null,[h,e("p",null,[t("Time is given in "),p,t(". For more expiration dates, view "),e("a",g,[t("dhinakg.github.io/delayed-otas.html"),o(i)]),t(".")]),m,e("div",f,[b,e("p",null,[t("You must have a jailbreak to follow these instructions. If you cannot jailbreak, follow "),o(a,{to:"/updating-blobless-advanced"},{default:l(()=>[t("Updating (Blobless) (Advanced)")]),_:1}),t(" instead.")])]),v,y,e("ol",null,[_,e("li",null,[t("Open your preferred package manager and add the following repos: "),e("ul",null,[e("li",null,[e("a",w,[t("https://dhinakg.github.io/repo/"),o(i)])]),e("li",null,[e("a",k,[t("https://repo.cadoth.net"),o(i)])])])]),q,S]),T,e("ol",null,[D,x,I,e("li",null,[t("Open your current jailbreak and restore rootFS "),e("ul",null,[e("li",null,[t("If you need a detailed guide on how to restore rootfs, follow "),o(a,{to:"/restoring-rootfs"},{default:l(()=>[t("Restoring Rootfs")]),_:1}),t(" and select the jailbreak which you currently use")])])]),O]),A,e("div",P,[R,e("p",null,[t("If the update was successful, continue to "),o(a,{to:"/get-started"},{default:l(()=>[t("Get Started")]),_:1}),t(" to jailbreak your device.")])]),e("p",null,[t("Credits to "),e("a",j,[t("dhinakg"),o(i)]),t(" for discovering this method.")])])}var C=s(c,[["render",N],["__file","index.html.vue"]]);export{C as default};
