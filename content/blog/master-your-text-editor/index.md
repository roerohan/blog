---
title: Type fast, and master your text editor
date: "2023-10-25T19:37:53.776Z"
description: "Working online often requires writing and editing text. Learn to type fast, and master a text editor of your choice and boost your productivity."
---

Whether you're a software developer or a technical writer, your primary job is to edit text. It is surprising that most people whose jobs involve editing text do not care about their typing speed or text editor.

## Improve your typing speed

In brief, your typing speed is proportional to the time it will take for you to finish your work. If you have to look at your keyboard while you type, you're shifting your focus, which affects the quality and the speed of your work. Investing your time in learning [touch typing](https://en.wikipedia.org/wiki/Touch_typing) will always prove beneficial. Also, contrary to common belief, working on your typing speed is actually fun!

There are a number of websites where you can practice typing. I would recommend [Monkeytype](https://monkeytype.com/) as I love the minimal interface and the infographics that indicate how your typing session went. Besides, I'm a sucker for keyboard shortcuts, and Monkeytype has a bunch of convenient shortcuts to navigate around their website.

For those with a competitive spirit, [TypeRacer](https://play.typeracer.com/) is the ultimate arena to put your typing skills to the test! Here, you can improve your typing speed while racing against others.

What's a good typing speed? I'd say around 60 to 70 words per minute should be a good short-term target. Your typing speed will keep improving over time, but you don't need to sweat once you can comfortably type at this pace.

If you spend most of your day typing at your desk, it might also be worthwhile to invest in a good keyboard. I prefer [mechanical keyboards](https://www.businessinsider.com/guides/tech/what-is-a-mechanical-keyboard?IR=T) but don't take my word for it. Research the different kinds of keyboards out there before you pick your poison.

## Master your text editor

As a programmer, I spend about 90% of my time editing text - either debugging some bug or refactoring some code. Obviously, the efficiency of my text editor will affect my productivity. I could write code on Notepad or even Microsoft Word, but these editors do not have any features to help me edit text.

There is no "best" editor. The power of an editor is very subjective, and your editor is the best for you if you're familiar with it; except Atom, I don't know why you'd use that.

Explore other text editors, as they might be better for you. I've used a number of editors and IDEs such as Notepad, Atom, Sublime Text, PyCharm, Android Studio, Visual Studio Code, and Neovim. I've developed a mental checklist of what I look for in a text editor:

1. **It should be very convenient to move around the file** - I do not like to use my mouse for scrolling through files. Therefore, I love it when a text editor has shortcuts for navigating around the text.
2. **The editor should be extensible with plugins or extensions** - A good editor often has a supportive community. I prefer an extensible editor, which offers community plugins I can enable if I want to.
3. **There should be a way to perform simple, repeatable actions** - I often have to make the same change in multiple places, like changing the name of a variable or a function.
4. **Syntax highlighting and LSP** - Since I use my text editor primarily for development, it should be able to highlight syntax across various programming languages, either out of the box or using a plugin. It should also have an LSP that can provide autocompletion suggestions for the type of code I'm writing.
5. **Lightweight and minimalistic** - I do not want my text editor to hog more resources than the code I'm trying to run. Also, it should have a minimalistic design and not be distracting while I'm trying to focus.
6. **Dark theme** - Are you really a coder if you're not using a dark theme? Well, I generally tend to work late in the day when it's kinda dark outside, so a light theme text editor hurts my eyes. I could also just turn on the lights, but this seemed more convenient.

I was using Visual Studio Code for the longest time, as it checked most of the boxes for me at the time. To master the text editor, you need to be familiar with the shortcuts so that you don't spend any time thinking about how to open the sidebar or delete a line. It does not require a lot of effort to master VSCode, and it is a pretty good editor for most people. It is also pretty easy to make plugins for VSCode. Back when I was learning Javascript/Typescript, I built a VSCode plugin called [Mongo Snippets](https://marketplace.visualstudio.com/items?itemName=roerohan.mongo-snippets-for-node-js). It used to be the most popular Mongo extension on VSCode (with almost 190k installs) until the MongoDB team released their official extension.

For the past few months, I've been using [Neovim](https://neovim.io/) as my primary text editor, and I feel very productive using it. Of course, it checks all the boxes in my checklist. It's extremely customizable; you can configure Neovim using a simple yet powerful programming language called Lua. Since the editor itself is programmable, it gives you a lot of scope for configuring it according to your needs.

Neovim runs on the terminal and doesn't open a GUI interface, so it's useful when I have to edit configuration files on remote servers by SSHing into them.

There is a steep learning curve to using Neovim effectively. To be able to configure it according to your liking, you need to have the time and the programming knowledge. However, there are a bunch of preconfigured Neovim setups like [LazyVim](https://www.lazyvim.org/), [NvChad](https://nvchad.com/), and [AstroNvim](https://astronvim.com/) which should be good enough for most use cases. I started out with AstroNvim and rarely felt the necessity to change any major configurations.

You also need to learn Vim motions to be able to use Neovim effectively. It's not going to come to you naturally, but learning vim motions is definitely worth your time. Essentially, vim motions make Neovim (or any Vim) more than just an editor - it provides a set of keybindings with which you can navigate and edit files effectively. You can combine a set of keypresses in different modes and perform complicated operations very simply. It is hard to understand the power of Vim motions until you see it on your own. I'd highly recommend you check out this [series of videos](https://www.youtube.com/watch?v=X6AR2RMB5tE&list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R).

Setting up Neovim might feel like a lot of work, so I understand why most people do not want to use it. However, Vim motions are also available in popular text editors like VSCode, IntelliJ, etc. I do not see why everyone does not use Vim motions. It's the most efficient way of navigating and editing text files that I know of. In fact, I think it's a good idea to learn Vim motions even if you're not a developer. I write most of my articles in [Markdown](https://www.markdownguide.org/) in my Neovim editor, and I find it a lot more convenient than writing it on Google Docs or Notion.

## Conclusion

In conclusion, typing is not merely a practical skill but a transformative tool that can empower your work and overall digital experience. Typing with precision and speed can unlock new levels of efficiency.

Your productivity is also affected by where you're typing. Pick a good text editor that suits your needs, not just any popular text editor. It is a good idea to learn Vim motions, especially if you're a developer.
