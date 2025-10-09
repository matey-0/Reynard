# Reynard - uBlock Origin Docs 

## What is 'Hard Mode', and Why Should I use It?
When you connect to an average domain, it requests dozens (_sometimes even hundreds!_) of resources. These resources could be images, JavaScript, CSS, additional content, etc. They could also be trackers, ads, telemetry, fingerprinting scripts, or other malicious content.  

Instead of using a list with millions of trackers, ads, malware, telemetry, and bad actors that quickly gets out of date. You can instead deny everything by default, and punch little holes allowing 'good' websites & content. Because the amount of 'bad' content is ever growing (at an exponential rate), and the amount of 'good' content is relatively stable, you could never keep up with all the 'badness'. However, you could certainly keep up with all the 'goodness'. This policy of denying everything but the 'goodness' is called, somewhat predictably, a 'default deny policy', and it's a great idea.

**Think of the default deny policy in terms of a castle.** A 'good' castle doesn't let just anyone in; it blocks everyone from entering by default, and only lets in the handful of people verified to be good, manually. A 'bad' castle lets anyone and everyone in, unless they're on the _naughty list_. The 'good' castle will be safe from spies & sieges for far longer than the 'bad' castle ever could, no matter how fast that _naughty list_ grows. 

The only reason a default deny policy isn't used more often, is that it requires knowledge to maintain & use, and requires a large amount of initial setup work.

uBlock Origin has two main component parts for blocking: static filter lists, and dynamic rules. Domains are first parsed through the dynamic filtering rules, where it's determined if they go through or not. If they're allowed, they can then go through to static filters, where their content is parsed and modified. Otherwise, their content never touches your computer.  

On a default uBlock setup, the dynamic rules pane is empty, and  uBlock lets all websites through to the static filtering layer by default. However, given how good a default deny policy is (as explained earlier), you can set uBlock Origin to hard mode, which blocks *all* third party content by default (3rd party scripts, 3rd party frames, and 3rd party).  

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

Recall that I mentioned one of the only reasons a default-deny policy isn't used more often is the large setup cost. I've solved that issue by including a curated list of ~600 verified 'good' CDNs and resources, giving you a solid starting point to build from. This means you can start using Hard Mode immediately without spending weeks building your noop-list from scratch.

The other barrier is the knowledge required to maintain a default deny policy, and unfortunately, I can't package that in a github repo. However, it's easy enough to learn through practice. Using Hard Mode day-to-day is covered in the "How to Use Hard Mode" section later in this README.

## What's included in the uBlock Directory?
### Recommended filter lists 

## Installation & Setup

## How to use Hard Mode effectively
### Falling back to easier modes 
### Troubleshooting 

## Performance impact 

## Related/Further reading/cross-references

## Contributing 

## Credits
