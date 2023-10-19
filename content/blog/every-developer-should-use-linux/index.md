---
title: Every developer should use Linux
date: "2023-10-18T17:00:22.838Z"
description: "Mastering Linux is not easy. It is often a better choice for developers to learn things the hard way."
---

![I want to uninstall my bootloader](./meme.jpeg)

In the world of software development, the choice of the operating system can significantly impact productivity, versatility, and even the creative flow of developers. While there are numerous options available, one operating system consistently stands out.

Using a Linux-based operating system is unquestionably the best decision you can make to bolster your career as a developer. I've heard good things about FreeBSD and other \*nix systems, but I can not advocate for them as I haven't used them. It is worth mentioning that I do not consider MacOS a great choice despite it being a \*nix variant. However, my least favorite "popular OS" for writing code is undeniably Windows.

In this article, I'm not going to discuss how Linux is great because it's open source, and customizable, and has a wonderful community, even though I acknowledge that these are good enough reasons to be using Linux.

## A happy accident

From my experience, beginners have an aversion to Linux, which is somewhat understandable. Typically, you wouldn't have it pre-installed on your computer and while trying to dual boot a system, you're basically messing with expensive hardware and if you fuck up, it might cost you a lot of money. If you have no idea what you're doing, it's a pain to read a bunch of articles or watch a couple of videos just to install an operating system, while you already have a "user-friendly" alternative served to you on a silver platter. I had these thoughts when I was starting out, and I'm sure a lot of you did too.

I started out using Windows as I used to be fond of games (like Assassin's Creed). While installing a patch for a game, I somehow got hold of a fishy executable, and as soon as I ran it my laptop went into an irrecoverable crashloop. I ran the "Windows Troubleshooter" several times, but that didn't fix it either. Of course, this had to happen the night before my first end-semester examinations in University, for which I was extremely unprepared.

As I needed a laptop to browse through my teacher's presentation for the Calculus exam scheduled 6 hours from then, I was desperately searching for a bootable Windows pendrive (at that point, it couldn't care less if it was pirated). After an hour of asking around for help, I could only find a pen drive from a friend with something called "Manjaro" in it. I had no idea what Manjaro is - or what Linux is for that matter. All I knew was, if I install this operating system, I can run Powerpoint on it and read through the said presentation.

While installing, it asked me a bunch of questions about partitioning disks, which I conveniently ignored. After some time, I had this new OS running, and to my disbelief, it didn't have Powerpoint on it (by the way, this was before Google Slides was popular). Out of the 4.5 hours I had left to study for the test, I spent another 30 minutes trying to figure out how to view this presentation.

I consider this one of the most beneficial "accidents" in my journey as a developer. Gladly, I aced the test (is what I want you to think). I didn't learn any calculus that night, but I did learn how to figure out something I didn't know without asking for someone's help.

## Do hard things

Coming back to the point I was trying to make, it is likely that you will fuck something up while installing or using Linux. However, once you've broken something, you will have to go through a number of blog posts and documentation that you probably won't understand to fix your computer, and in this process, you'll learn a lot about how things work under the hood. It will be a painful experience trying to solve a problem you have no idea about, but that's what (most) developers do daily. This way, you'll either figure out how to become a developer or if you want to become a developer.

Becoming a good software engineer is not easy, part of the journey is learning how to do things the "hard way". The "hard way" is often unappreciated. It is not necessary to know how your computer works, just like it's not necessary to know how a library works before you use it. However, having the ability to dig under the hood is critical when your code is breaking on production due to an issue in the library. Any library that you use in your code is usually a hobby project of an open-source enthusiast who might just decide to discontinue maintaining the library. The responsibility then lies on you to triage the issue, and potentially fix it. If you're using a Linux distro as your primary OS, you'll be prepared for such unforeseen situations as you will keep running into such issues. You might run a weird command with `sudo` while trying to customize something, and now it's up to you to fix it.

Linux is hard, and you won't become proficient at it unless you put in the effort. As a Windows or a Mac user, you're so used to being spoon-fed that you don't even try to figure out any issues you run into. You'll instantly call your "Apple Genius" or "Windows Wizard" to resolve your issue. Sure, if you had no intention of becoming a programmer one day, it's okay to ask someone else to fix your computer. However, if you do, you develop a [developer mindset](https://skillcrush.com/blog/the-developer-mindset/) and fix your shit.

The best part about Linux is that it does not spoon-feed you. Have a problem? Read the docs. Read the article written by a random kernel developer in 2002. You want it resolved, go figure it out. If you embrace doing things the hard way, you've already reached your first software engineering milestone.

## The usual

Of course, there are other benefits of using Linux, like personalization, security, and so on, but I'll let you read up about it yourself. It doesn't matter if you end up using Linux for the rest of your career, but installing a Linux distro is by far the best thing you can do as a beginner developer. I would recommend Arch Linux, or something loosely based on Arch (like Manjaro), not because it is the best. In fact, I recommend using Arch because I think it breaks the most and therefore teaches you the most. If you have the time (don't lie to yourself, you probably do), set everything up from scratch - pick a desktop environment, a window manager, a splash screen, a shell, a compositor, whatever you like. You'll not just learn what these things are, you'll end up creating an environment for yourself that's entirely your own, one that you actually like using, and not one that is forced upon you by Windows or MacOS.

## Conclusion

Here's what motivated me to write this article:

I recently came across [npmaile's blog](https://github.com/npmaile/blog/). The first point in his article [How to get into software](https://github.com/npmaile/blog/blob/main/posts/2.%20How%20to%20get%20into%20software.md#1-install-arch-linux-on-your-main-computer-and-use-it-for-all-computer-tasks) resonated with me.

Statistically speaking, it's improbable that you will click the above link to check out the article, so let me make it convenient for you.

> 1. Install Arch Linux on your main computer and use it for ALL computer tasks. \
>     \
>     I picked Arch not because it is the most perfect or the best, but because it requires you to see what's going into your computing environment. This is to see what a computer does at a little lower level, and see how a more modular computing environment works.\
>    \
>     You will learn how to use the command line, and likely get some experience writing shell scripts to tailor your personal computing to your own preferences Additionally, whether or not you end up sticking with Arch (or linux at all), you will find the Arch wiki to be a useful reference for debugging software products.

Also, if you like 30-minute YouTube videos, here's one by the [ThePrimagen](https://www.youtube.com/c/theprimeagen) talking about [Why You Should Learn To Program the HARD WAY](https://www.youtube.com/watch?v=DZkbDCSdC1Q).

I'd love to hear what motivated you to start using Linux, or what's stopping you from diving into it. Feel free to reach out on [X (formerly Twitter)](https://x.com/roerohan) if you'd like to chat, or provide constructive feedback about the article.
