# Reynard - uBlock Origin Docs 

## What is 'Hard Mode', and Why Should I use It?
When you connect to an average domain, it requests dozens (_sometimes even hundreds!_) of resources. These resources could be images, JavaScript, CSS, additional content, etc. They could also be trackers, ads, telemetry, fingerprinting scripts, or other malicious content.  

Instead of using a list with millions of trackers, ads, malware, telemetry, and bad actors that quickly gets out of date. You can instead deny everything by default, and punch little holes allowing 'good' websites & content. Because the amount of 'bad' content is ever growing (at an exponential rate), and the amount of 'good' content is relatively stable, you could never keep up with all the 'badness'. However, you could certainly keep up with all the 'goodness'. This policy of denying everything but the 'goodness' is called, somewhat predictably, a 'default deny policy', and it's a great idea.

**Think of the default deny policy in terms of a castle.** A 'good' castle doesn't let just anyone in; it blocks everyone from entering by default, and only lets in the handful of people verified to be good, manually. A 'bad' castle lets anyone and everyone in, unless they're on the _naughty list_. The 'good' castle will be safe from spies & sieges for far longer than the 'bad' castle ever could, no matter how fast that _naughty list_ grows. 

The only reason a default deny policy isn't used more often, is that it requires knowledge to maintain & use, and requires a large amount of initial setup work.

uBlock Origin has two main component parts for blocking: static filter lists, and dynamic rules. Domains are first parsed through the dynamic filtering rules, where it's determined if they go through or not. If they're allowed, they can then go through to static filters, where their content is parsed and modified. Otherwise, their content never touches your computer.  

On a default uBlock setup, the dynamic rules pane is empty, and  uBlock lets all websites through to the static filtering layer by default. However, given how good a default deny policy is (as explained earlier), you can set uBlock Origin to hard mode, which blocks *all* third party content by default (3rd party scripts, 3rd party frames, and 3rd party).  

The rules to enable hard mode in uBlock Origin's dynamic rules pane are as follows:  
```* * 3p block```  
```* * 3p-frame block```  
```* * 3p-script block```  

However, this breaks nearly every website on the modern internet. So, instead of giving up and using an ever-growing filterlist, you use the 'noop' operator (short for no-operation) on specific 'good' domains, allowing it to pass through and later be filtered by the second layer of uBlock Origin: your static filterlist setup. 

If a certain website requires site-specific helper content, you can also 'noop' on a per-site basis.  

From uBlock Origin Wiki:
> Characteristics [of uBlock Origin Hard Mode]:
> * Web pages will load fast.
> * Your privacy exposure to 3rd parties is reduced to a minimum.
> * You no longer depend mostly on 3rd-party filter lists to dictate what is blocked or not.
> * The static filter lists are still used to mop up whatever network requests is not blocked in this mode -- so double protection.
> * Very high likelihood of web pages being broken: you have to be ready and willing to fix them when this happen.
> *Keep in mind though that as you build your ruleset for the sites you usually visit, you will spend less and less time fixing web pages.*  

— [uBlock Origin Wiki - Blocking Mode: Hard Mode](https://github.com/gorhill/ublock/wiki/Blocking-mode:-hard-mode)

### What Makes This Setup Different?

Recall that I mentioned one of the only reasons a default-deny policy isn't used more often is the large setup cost. I've solved that issue by including a curated list of ~500 verified 'good' CDNs and resources, giving you a solid starting point to build from. This means you can start using Hard Mode immediately without spending weeks building your noop-list from scratch.

The other barrier is the knowledge required to maintain a default deny policy, and unfortunately, I can't package that in a GitHub repo. However, it's easy enough to learn through practice. Using Hard Mode day-to-day is covered in the "How to Use Hard Mode" section later in this README.

## What's included in the uBlock Directory?

This directory contains most/everything needed to replicate my uBlock Origin Hard Mode setup:

### Core Files

**`trimmed-dynamic-rules.txt`** - The heart of Hard Mode: ~500 curated 'noop' rules for commonly-used CDNs, APIs, JS frameworks, etc. These are the domains I've personally verified as safe to allow through the first dynamic filtering layer. This list also contains the rules to enable Hard Mode. Import these into uBlock Origin's "My rules" pane to get started with Hard Mode immediately.  

**`advanced-settings.txt`** - Advanced uBlock Origin configuration settings (accessible via the gear icon next to "I am an advanced user" in the Settings tab). These fine-tune uBlock's behavior for optimal performance. Completely optional: contains mainly minor refinements. 

**`ublock-filterlists.md`** - Complete list of filter lists I have enabled, with links. This documents the second filtering layer (static filters) that complements Reynard's Hard Mode dynamic rules.

**`README.md`** - This file. Complete documentation for understanding, installing, and using this Hard Mode setup.

## Installation & Setup

### Prerequisites
- LibreWolf (or Firefox-based browser) with uBlock Origin installed
- Familiarity with browser extensions (for setup, usage requires a little more knowledge, but don't despair, it's easy enough to learn)

**Important:** This setup is designed for LibreWolf + uBlock Origin. It will work in Firefox, but I can't guarantee everything will be the same (It should, but I don't definitively know).

### Step 1: Enable Advanced User Mode

1. Navigate to uBlock Origin's settings dashboard
3. Go to the Settings tab (the first tab)
4. Scroll down and check "I am an advanced user"
5. A gear icon will appear next to the checkbox, you can either configure advanced settings now or later, order shouldn't matter. For clarity sake, I'm going to cover it later in the guide. 

### Step 2: Import Dynamic Rules (~500 CDN Noops)

This is the core of Hard Mode, your curated list of 'good' domains.

1. In the uBlock Origin dashboard, go to the My rules tab
2. You'll see two panes: "Temporary rules" (top) and "Permanent rules" (bottom)
3. Open `trimmed-dynamic-rules.txt` from the Reynard `ublock/` directory
4. Copy all contents from the file
5. Paste into the "tempoary rules" pane (bottom section)
6. Click Save (top right)
7. Click commit (top right)
8. Make sure all the rules copied are in your "permanent rules" pane

**What this does:** Allows ~500 verified CDNs/APIs/JS frameworks to pass through the first filtering layer (to be handled by the second layer, static filtering), preventing immediate breakage on most sites.

### Step 3: Import Advanced Settings (Optional)

Fine-tune uBlock's behavior for optimal Hard Mode performance.

1. In the Settings tab, find "I am an advanced user" (should be checked from Step 1)
2. Click the gear icon next to it
3. A new pane will open with `key: value` pairs
4. Open `advanced-settings.txt` from the Reynard `ublock/` directory
5. Copy the entire `advanced-settings.txt` file
6. Delete the entire default settings file 
7. Past the entire contents of the `advanced-settings.txt` file
6. Click Apply changes (top left of the advanced settings pane)

**Note:** This step is optional. The advanced settings file contains minor refinements, Hard Mode will work fine without them.

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
	- When all lists are in the import box, click "apply changes" button (top right)

**Warning:** My personal cosmetic filter list is extremely aggressive. Consider starting without it and adding later if you want strict cosmetic filtering.

### Step 5: Verify Hard Mode is Active

1. Click the uBlock Origin extension icon on any webpage
2. First and foremost, the blocked count should be highlighted red
2. You should also see the dynamic filtering matrix (grid of colored cells)
3. Check that **3rd-party** rows have **red cells** for:
   - **script** (3rd-party scripts blocked)
   - **frame** (3rd-party frames blocked)
   - **3rd-party** (all other 3rd-party content blocked)

**If you see red cells in all 3 of the 3rd-party rows, Hard Mode is working.**

### What to Expect on First Use

**Some sites will break.** This is normal and expected, even with ~500 nooped CDNs.

**Common issues you'll encounter:**
- Images don't load (CDN blocked)
- Videos won't play (media CDN blocked)
- Login buttons don't work (auth domain blocked)
- Forms don't submit (API blocked)
- Entire page is blank (main content served via 3rd-party)
- Pages look broken (CSS provider is blocked, bootstrap servers are blocked)

**The fix:** Noop additional domains on a per-site or global basis. See "How to Use Hard Mode Effectively" below for the daily workflow.

**Hard Mode is a one-time setup cost for long-term control and privacy.** Stick with it for 2-3 weeks and it becomes second nature. You'll thank your protectiveness when you hear about some new domain that p'wnd people en masse, that you managed to avoid by blocking everything. That's not to say you're 100% safe. You're not, even with the most advanced setup (which this is not), user error is the #1 source of failure.

## How to use Hard Mode effectively
### Falling back to easier modes 
### Troubleshooting 

## Performance impact 

## Related/Further reading/cross-references

## Contributing 

## Credits
