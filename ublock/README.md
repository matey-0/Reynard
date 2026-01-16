# Reynard - uBlock Origin Docs 

## What is 'Hard Mode', and Why Should I Use It?
When you connect to an average website, it requests dozens (_sometimes even hundreds!_) of resources. These resources could be images, JavaScript, CSS, additional content, etc. They could also be trackers, ads, telemetry, fingerprinting scripts, or other malicious content.  

Instead of using a list with millions of trackers, ads, malware, telemetry, and bad actors that quickly gets out of date, you can instead deny everything by default and punch little holes allowing 'good' websites and content. Because the amount of 'bad' content is ever-growing (at an exponential rate), and the amount of 'good' content is relatively stable, you could never keep up with all the 'badness'. However, you could certainly keep up with all the 'goodness'. This policy of denying everything but the 'goodness' is called, somewhat predictably, a 'default deny policy', and it's a great idea.

**Think of the default deny policy in terms of a castle.** A 'good' castle doesn't let just anyone in; it blocks everyone from entering by default and only lets in the handful of people verified to be good, manually. A 'bad' castle lets anyone and everyone in, unless they're on the _naughty list_. The 'good' castle will be safe from spies and sieges for far longer than the 'bad' castle ever could, no matter how fast that _naughty list_ grows. 

The only reason a default deny policy isn't used more often is that it requires knowledge to maintain and use, and requires a large amount of initial setup work.

uBlock Origin has two main component parts for blocking: static filter lists, and dynamic rules. Domains are first parsed through the dynamic filtering rules, where it's determined if they go through or not. If they're allowed, they can then go through to static filters, where their content is parsed and modified. Otherwise, their content never touches your computer.  

On a default uBlock setup, the dynamic rules pane is empty, and uBlock lets all websites through to the static filtering layer by default. However, given how good a default deny policy is (as explained earlier), you can set uBlock Origin to hard mode, which blocks all third-party content by default (3rd-party scripts, 3rd-party frames, and 3rd-party).  

The rules to enable hard mode in uBlock Origin's dynamic rules pane are as follows:  
```* * 3p block```  
```* * 3p-frame block```  
```* * 3p-script block```  

However, this breaks nearly every website on the modern internet. So, instead of giving up and using an ever-growing filter list, you use the 'noop' operator (short for no operation) on specific 'good' domains, allowing it to pass through and later be filtered by the second layer of uBlock Origin: your static filter list setup. 

If a certain website requires site-specific helper content, you can also 'noop' on a per-site basis.  

From uBlock Origin Wiki:
> Characteristics [of uBlock Origin Hard Mode]:
> * Web pages will load fast.
> * Your privacy exposure to 3rd parties is reduced to a minimum.
> * You no longer depend mostly on 3rd-party filter lists to dictate what is blocked or not.
> * The static filter lists are still used to mop up whatever network requests are not blocked in this mode — so double protection.
> * Very high likelihood of web pages being broken: you have to be ready and willing to fix them when this happens.
> *Keep in mind though that as you build your ruleset for the sites you usually visit, you will spend less and less time fixing web pages.*  

— [uBlock Origin Wiki - Blocking Mode: Hard Mode](https://github.com/gorhill/ublock/wiki/Blocking-mode:-hard-mode)

### What Makes This Setup Different?

Recall that I mentioned one of the only reasons a default-deny policy isn't used more often is the large setup cost. I've solved that issue by including a curated list of ~600 verified 'good' CDNs and resources, giving you a solid starting point to build from. This means you can start using Hard Mode immediately without spending weeks building your noop list from scratch.

The other barrier is the knowledge required to maintain a default deny policy, and unfortunately, I can't package that in a GitHub repo. However, it's easy enough to learn through practice. Using Hard Mode day-to-day is covered in the "How to Use Hard Mode" section later in this README.

## What's included in the uBlock Directory?

This directory contains most/everything needed to replicate my uBlock Origin Hard Mode setup:

### Core Files

**`trimmed-dynamic-rules.txt`** - The heart of Hard Mode: ~600 curated 'noop' rules for commonly used CDNs, APIs, JS frameworks, etc. These are the domains I've personally verified as safe to allow through the first dynamic filtering layer. This list also contains the rules to enable Hard Mode. Import these into uBlock Origin's "My rules" pane to get started with Hard Mode immediately.  

**`advanced-settings.txt`** - Advanced uBlock Origin configuration settings (accessible via the gear icon next to "I am an advanced user" in the Settings tab). These fine-tune uBlock's behaviour for optimal performance. Completely optional: contains mainly minor refinements. 

**`ublock-filterlists.md`** - Complete list of filter lists I have enabled, with links. This documents the second filtering layer (static filters) that complements Reynard's Hard Mode dynamic rules.

**`README.md`** - This file. Complete documentation for understanding, installing, and using this Hard Mode setup.

## Installation & Setup

### Prerequisites
- LibreWolf (or Firefox-based browser) with uBlock Origin installed
- Familiarity with browser extensions (for setup; usage requires a little more knowledge, but don't despair, it's easy enough to learn)

**Important:** This setup is designed for LibreWolf + uBlock Origin. It will work in Firefox, but I can't guarantee everything will be the same (it should, but I don't definitively know).

### Step 1: Enable Advanced User Mode

1. Navigate to uBlock Origin's settings dashboard
3. Go to the Settings tab (the first tab)
4. Scroll down and check "I am an advanced user"
5. A gear icon will appear next to the checkbox; you can either configure advanced settings now or later — order shouldn't matter. For clarity's sake, I'm going to cover it later in the guide. 

### Step 2: Import Dynamic Rules (~600 CDN Noops)

This is the core of Hard Mode: your curated list of 'good' domains.

1. In the uBlock Origin dashboard, go to the My rules tab
2. You'll see two panes: "Temporary rules" (top) and "Permanent rules" (bottom)
3. Open `trimmed-dynamic-rules.txt` from the Reynard `ublock/` directory
4. Copy all contents from the file
5. Paste into the "Temporary rules" pane (bottom section)
6. Click Save (top right)
7. Click Commit (top right)
8. Make sure all the rules copied are in your "Permanent rules" pane

**What this does:** Allows ~600 verified CDNs/APIs/JS frameworks to pass through the first filtering layer (to be handled by the second layer, static filtering), preventing immediate breakage on most sites.

### Step 3: Import Advanced Settings (Optional)

Fine-tune uBlock's behaviour for optimal Hard Mode performance.

1. In the Settings tab, find "I am an advanced user" (should be checked from Step 1)
2. Click the gear icon next to it
3. A new pane will open with `key: value` pairs
4. Open `advanced-settings.txt` from the Reynard `ublock/` directory
5. Copy the entire `advanced-settings.txt` file
6. Select the entire text block and delete it
7. Paste the entire contents of the `advanced-settings.txt` file
6. Click Apply changes (top left of the advanced settings pane)

**Note:** This step is optional. The advanced settings file contains minor refinements; Hard Mode will work fine without them.

**Tip:** If you're unsure about a setting, reference the [uBlock Advanced Preferences Wiki Page](https://github.com/gorhill/uBlock/wiki/Advanced-settings)

### Step 4: Enable Filter Lists

Time to set up the second filtering layer (static filters).

1. In the uBlock Origin dashboard, go to the Filter lists tab
2. Check all default lists
3. Import custom lists:
   - See `ublock-filterlists.md` for the complete list of custom filter lists I use
   - Scroll to the Custom section at the bottom of the Filter lists tab
   - Click Import...
   - Paste each custom list URL from `ublock-filterlists.md`, one at a time
	- When all lists are in the import box, click the "Apply changes" button (top right)

**Warning:** My personal cosmetic filter list is extremely aggressive. Consider starting without it and adding it later if you want strict cosmetic filtering.

### Step 5: Verify Hard Mode is Active

1. Click the uBlock Origin extension icon on any webpage
2. First and foremost, the blocked count should be highlighted red
2. You should also see the dynamic filtering matrix (a grid of coloured cells)
3. Check that 3rd-party rows have red cells for:
   - script (3rd-party scripts blocked)
   - frame (3rd-party frames blocked)
   - 3rd-party (all other 3rd-party content blocked)

**If you see red cells in all three of the 3rd-party rows, Hard Mode is working.**

### What to Expect on First Use
**Some sites will break.** This is normal and expected, even with ~600 nooped CDNs.

**Common issues you'll encounter:**
- Images don't load (CDN blocked)
- Videos won't play (media CDN blocked)
- Login buttons don't work (auth domain blocked)
- Forms don't submit (API blocked)
- Entire page is blank (main content served via 3rd-party)
- Pages look broken (CSS provider is blocked, Bootstrap servers are blocked)

**The fix:** Noop additional domains on a per-site or global basis. See "How to Use Hard Mode Effectively" below for the daily workflow.

**Hard Mode is a one-time setup cost for long-term control and privacy.** Stick with it for 2–3 weeks and it becomes second nature. You'll thank your protectiveness when you hear about some new domain that pwned people en masse, which you managed to avoid by blocking everything. That's not to say you're 100% safe. You're not, even with the most advanced setup possible (which this is not), or the least advanced setup: user error is still the number one source of failure.

## How to Use Hard Mode Effectively
### Daily Workflow

Hard Mode becomes manageable once you learn the pattern. Here's what happens 90% of the time:

1. Visit a website
2. Something breaks (content missing, features don't work, blank page)
3. Open the uBlock Origin panel (click the extension icon, or set a shortcut to open uBlock Origin quickly: I use Control+Shift+U)
4. Identify blocked 3rd-party domains (red cells in the matrix)
5. Noop the likely culprit (usually a CDN, API, or content delivery domain)
6. Reload the page and test
7. Repeat if still broken (usually 1–3 noops per site)
8. When you identify the offending site(s), confirm and save your preference to your dynamic rules

After 2–3 weeks of daily browsing, you'll rarely encounter new breakage, and when you do, unbreaking is nearly instant. The setup pain is temporary; the control is permanent. 

### Understanding the uBlock Origin Matrix
When you click the uBlock Origin icon on any webpage, you'll see the dynamic filtering matrix (if you've expanded uBlock fully):  
> Example image:  
> <img width="1264" height="1092" alt="image" src="https://github.com/user-attachments/assets/ce2f7d90-5c71-4634-b748-e2e50b26f1d7" />  

**What you're looking at:**
- **Rows:** Resource types (all, image, css, media, script, frame, etc.)
- **Columns:** Global rules (left) vs Per-site rules (right)
- **Cell colours:**
  - **Red:** Blocked
  - **Green:** Allowed (skips all steps, including static filtering)
  - **Grey:** Noop (no rule; falls through to static filters)
  - **Dark grey (only on right side):** Inherited rule from global scope

**Hard Mode shows:**
- **3rd-party script row:** Red in both columns (all 3rd-party scripts blocked by default)
- **3rd-party frame row:** Red in both columns (all 3rd-party frames blocked by default)
- **3rd-party row:** Red in both columns (all other 3rd-party content blocked by default)

### How to Noop Domains
#### Global Noop (Allow Everywhere)
Use this only for trusted CDNs, APIs, and infrastructure domains you encounter on multiple sites. Whilst it's best to be careful and conservative, if you're using a comprehensive set of filter lists, you should be fine for the most part if you aren't super careful.

**Steps:**
1. Click the uBlock Origin icon on the broken webpage
2. Scroll down below the top section of the matrix to see the individual domains blocked
3. Find likely culprits (CDNs like `cloudflare.com`, APIs like `googleapis.com`, JS frameworks like `jquery.com`)
4. Click the domain name to add a temporary rule
5. Click to go from red (blocked) → grey (noop)
7. Reload the page and test
6. If you have a winning combo of domains to noop, click the padlock icon at the top to make the rule permanent

**Result:** That domain is now nooped globally — on all websites. It will pass through to your static filter layer unhindered.

#### Per-Site Noop (Allow Only on Current Site)

Use this for domains you don't fully trust, or that are specific to one website.

**Steps:**
1. Same as above, but click the domain in the site-specific column (column on the left)
2. Click once to noop (grey)
3. Reload the page to test
3. Click the padlock icon to make it permanent

**Result:** That domain is only nooped for the current website.

### Which Domains Should You Noop?
#### Usually Safe to Noop Globally:

**CDNs (Content Delivery Networks):**
Stuff like:  
- `cloudflare.com`, `akamaihd.net`, `fastly.net`, `jsdelivr.net`, `unpkg.com`, `cloudfront.net`, `azureedge.net`, `stackpathcdn.com`

**Google Infrastructure:**
Stuff like:  
- `googleapis.com`, `gstatic.com`, `googleusercontent.com`, `google.com` (if needed for fonts, but be cautious with Google. I block Google Fonts by default)

**JS Frameworks & Libraries:**
Stuff like:  
- `jquery.com`, `bootstrapcdn.com`, `fontawesome.com`

**Media CDNs:**
Stuff like:  
- `imgur.com`, `giphy.com`, `vimeocdn.com`

**Cloud Storage:**
Stuff like:  
- `s3.amazonaws.com`, `storage.googleapis.com`

**Rule of thumb:** If it's infrastructure (delivering content) and used across many sites, a global noop is usually fine. Your static filters will still catch trackers and ads served from these domains.

#### Noop Per-Site Only:

**Social Media Widgets:**
Stuff like:  
- `facebook.com`, `twitter.com`, `linkedin.com`
- Only noop on sites where you need the widget (e.g., embedded Facebook posts, or on Facebook itself)

**Site-Specific Domains:**
- Anything that looks unique to one company/site
- Example: `shopify-assets.com` — only needed on Shopify stores, etc.

#### Stuff You Don't Noop

**Analytics:**
Don't noop these ever:  
- `google-analytics.com`, `googletagmanager.com`
- (Don't noop at all; these are pure tracking)

**Ad Networks:**
Don't noop these ever: 
- `doubleclick.net`, `adsense.com`
- (Don't noop; let Hard Mode block them)

### When in Doubt

1. Start with a per-site noop
2. If you encounter the same domain breaking multiple sites, promote to a global noop
3. Check my `trimmed-dynamic-rules.txt` for examples; if a domain is in there, I've personally verified it's safe to noop globally

**You can always undo:**
- Go to the My rules tab in the uBlock dashboard
- Find the rule (format: `example.com example.com * noop`)
- Delete the line
- Click Commit, then Save

#### Medium Mode (Recommended Fallback)

Blocks 3rd-party scripts and frames but allows other 3rd-party content (images, CSS, etc.).

**How to switch:**
1. uBlock Origin dashboard → **My rules** tab
2. Change global rules from:
```* * 3rd-party-script block```  
```* * 3rd-party-frame block```  
```* * 3rd-party block```  
To:  
```* * 3rd-party-script block```  
```* * 3rd-party-frame block```  
**i.e.,** delete the `* * 3rd-party block` line  
3. Commit & Save

**Result:** Most sites work out of the box. You still block the dangerous stuff (scripts, frames) but allow images, fonts, and CSS from 3rd parties. You can also use Medium Mode on a per-site basis: for example, I have GitHub set to Medium Mode because it breaks in Hard Mode.

#### Normal Mode (uBlock Origin default blocking mode)
**How to switch:**
1. Go to the dynamic filter pane
2. Select everything, delete
3. Commit & Save  
**Result:** Almost all sites will just work. They will also load slower, and you leave yourself at higher risk. No shame in using Normal Mode over harder modes; they're much higher maintenance.  
**Recommendation:** Give Hard Mode a try for a few weeks; if it doesn't click by then, reduce to Normal Mode. Hard Mode is really worth it, though.

### Too Many Sites Breaking?
**Recommendations:**
1. Fall back to Medium Mode temporarily while you build your ruleset
2. Ask for help: Check the uBlock Origin subreddit or GitHub discussions; others may have solved the same site
3. As a last resort, switch to Normal Mode. Having uBlock is better than no uBlock.

### Final Note: Be conservative with global noops. If you're unsure, noop per-site first.

## Performance Impact

Hard Mode is more performant than default uBlock Origin setups:

**Benefits:**
- Less RAM usage - blocking requests before they load means less memory overhead
- Faster page loads - fewer network requests = faster rendering
- Reduced bandwidth - blocked 3rd-party content never downloads

**Costs:**
- Initial mental overhead
- Occasional 5–10 seconds fixing a broken site

Hard Mode is faster and lighter than default uBlock setups, and you have complete control over what runs in your browser. 

## Related/Further Reading/Cross-References
**Community Resources:**
- [r/uBlockOrigin](https://www.reddit.com/r/uBlockOrigin/) - Active community for troubleshooting
- [uBlock Origin GitHub Issues](https://github.com/gorhill/uBlock/issues) - Report bugs or ask questions  

**Official uBlock Origin Resources:**  
- [uBlock Origin Wiki - Blocking Mode: Hard Mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-hard-mode)
- [uBlock Origin Wiki - Dynamic Filtering](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering)
- [uBlock Origin Wiki - Per-site Switches](https://github.com/gorhill/uBlock/wiki/Per-site-switches)

## Credits
**uBlock Origin:**
- [gorhill](https://github.com/gorhill), and all uBlock Origin contributors for creating the most powerful content blocker available
- The uBlock Origin community for documentation, guides, and support

**Filter List Maintainers:**
- Dandelion Sprout, Fanboy, AdGuard, EasyList team, and all filter list maintainers whose work powers all the filter lists we rely on

**Reynard** is my personal implementation of Hard Mode principles, refined over six months of daily use. All mistakes are mine, not uBlock or anyone else's.
