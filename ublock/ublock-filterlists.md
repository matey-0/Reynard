# Filterlists I use
### Note: Enabling all lists is probably overkill, especially with hard mode. However, I've noticed no breakage, and my experience has been only positive. YMMV.

Built-In:  
<img width="1004" height="508" alt="image" src="https://github.com/user-attachments/assets/d7ede2c7-e2bf-4995-b267-862e532a75ad" />  

Ads:  
<img width="818" height="250" alt="image" src="https://github.com/user-attachments/assets/f3de6693-b01a-4efa-a73f-52f3b7c00049" />  

Privacy:  
<img width="1036" height="314" alt="image" src="https://github.com/user-attachments/assets/7efbaaa8-4adf-48ee-ac3d-89a5a1c6f3bd" />  

Malware protection, security:  
<img width="942" height="188" alt="image" src="https://github.com/user-attachments/assets/f9c48acd-b4b4-4a3e-867f-4aa5eaddda4d" />  

Multipurpose:  
<img width="942" height="188" alt="image" src="https://github.com/user-attachments/assets/0c1ad835-1908-46fd-9e03-550efbfdba53" />  

Cookie notices:  
<img width="1058" height="442" alt="image" src="https://github.com/user-attachments/assets/8ad69bcd-f418-4c0c-a72c-7889514824ab" />  

Social Widgets:  
<img width="890" height="258" alt="image" src="https://github.com/user-attachments/assets/7d0fcad6-1ee3-43a5-b88f-262b9f6cd687" />  

Annoyances:  
<img width="962" height="752" alt="image" src="https://github.com/user-attachments/assets/be49cf1e-9dc5-40d4-b87d-00a053aa9a66" />  

Custom:  
<img width="1122" height="504" alt="image" src="https://github.com/user-attachments/assets/3e84da52-e5f4-4f1d-aeba-e40872deef65" />  

### Recommended Filter Lists

My setup uses **all of the default uBlock Origin lists** (ads, privacy, malware, etc.) **minus the regional filters**, plus these custom lists for additional coverage:

**Annoyances:**
- [Dandelion Sprout's Annoyances List](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/AnnoyancesList) - Cookie banners, newsletter popups, etc.
- [Fanboy's Annoyances](https://secure.fanboy.co.nz/fanboy-annoyance_ubo.txt) - Social widgets, annoying UI elements
- [I don't care about cookies](https://www.i-dont-care-about-cookies.eu/abp/) - Cookie banners
- [Mateo's Personal Cosmetic Filter List](https://raw.githubusercontent.com/Mateo-Grgic/personal-filter-lists/refs/heads/main/Mateo's%20Personal%20Cosmetic%20Filterlist) - My personal cosmetic filters - **Use with caution, very opinionated**

**Privacy & Tracking:**
- [AdGuard Tracking Protection Filter](https://filters.adtidy.org/extension/ublock/filters/3.txt) - Additional tracker coverage beyond EasyPrivacy
- [ClearURLs For uBo (Unofficial)](https://raw.githubusercontent.com/DandelionSprout/adfilt/refs/heads/master/ClearURLs%20for%20uBo/clear_urls_uboified.txt) - Strips tracking parameters from URLs
- [Mateo's Misc Tracker Block List](https://raw.githubusercontent.com/Mateo-Grgic/personal-filter-lists/refs/heads/main/Mateo's%20Misc%20Tracker%20Block%20List) - My personal tracker list

**Why this combination?**  
The default lists provide extremely comprehensive baseline coverage. Custom lists fill gaps in annoyance blocking and tracking protection that the uBlock team *choose* to not filter (not maliciously, just not to break everything & bloat the default lists). My personal lists are extremely aggressive. Consider them optional or use as inspiration for your own rules.

**Important:** If you import my personal cosmetic filter list, expect site breakage. It's designed for my browsing habits and aggressively hides elements I find annoying. The tracker list is safer for general use.








