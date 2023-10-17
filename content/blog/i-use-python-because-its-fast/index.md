---
title: I use Python because it's fast
date: "2023-10-17T17:59:48.248Z"
description: "Python is notorious for being slow and inefficient, but in this article, discover the reasons why it's fast and widely used in the industry."
---

I am not a huge fan of Python. I recently wrote an article outlining my reasons behind my dissatisfaction with the language - [I hate Python](https://roerohan.github.io/blog/why-i-hate-python/).

Since I published this article, a number of developers who resonated with my sentiments regarding Python reached out, and I had several discussions delving into the reasons behind our discontent with Python.

However, the question that was unanswered in most of these discussions was "Why do we still use Python?". Whenever I'm building a Python project, there comes a point where I wonder - "Ugh, I should've opted for a different language". Some argue that a lot of developers use Python because most of the Machine Learning or AI libraries are written in Python. However, even in those libraries, the actual resource-intensive "Machine Learning" part is built in C, and the sucky parts that nobody wants to work on are built using Python.

I think I've finally understood why I use Python.

## Python is designed to _ship_ fast

Admittedly, Python is slow. You must've read thousands of articles about why it's slow (including mine?) and watched a dozen videos of [Primagen](https://www.youtube.com/@ThePrimeagen) complaining about the language.

However, one aspect in which Python excels is the developer-friendliness (I know, I know, forced indentation is annoying, but hold your horses). If you think about it, Python was probably not intended to be a fast language - considering it's an interpreted language and the fact that it has a GIL. I think you can write a program in Python in about the same amount of time it takes you to write some pseudo code or draw a flowchart. I don't believe any developer using "trendy" languages like Rust, Elixir, Nim, etc. can say the same about their language. It might take slightly longer to run your code, but often the "time-to-market" is more vital than the execution time. Let's be honest, you'll probably never reach Python's performance boundaries in your web app with 5 users. However, you might spend time building something extremely performant, but you'll miss the hype train and lose the 5 users you could've had for your website.

## Python is not _that_ slow

Again, let me be clear. Python **is** slow. But, to be frank, when have you ever noticed that it's slow? Outside of benchmarking, you've probably never had a situation where you felt that a faster language would do the job better. I'm not suggesting that it's a good idea to build a performance product in Python, but most of the time, Python is _fast enough_. If you're building an automation pipeline, or even a REST API to interact with an ML model, I would argue that Python is good enough. If you ever have to deal with graphs and CSVs, I can't think of a better language than Python.

## When should I use Python

Python has been around for long enough for us to know what we should and should not build with it. I know a lot of developers who hate Python because it's "cool" to hate something slow. Of course, it is our tendency to optimize everything to perfection (as you might have noticed in any Data Structures and Algorithms course), but if you look at it from the user's perspective, they don't care about what language you're using behind the hood as long as it works.

Python is my go-to language if I'm working on any of the following:

1. Scripts to scrape information from the web
2. Using a machine learning model of any kind
3. Scripts for CTFs (or any small automation tool)
4. Small-to-medium scale or PoC projects
5. Testing scripts for other APIs/products

## Conclusion

Python has its flaws, just like any other language. I have had my fair share of frustrations with the language, as you might've guessed from my [previous article](https://roerohan.github.io/blog/why-i-hate-python/). However, my annoyance with Python doesn't imply that I'm oblivious to its merits or that I'll never use it again.

Python's strength lies in its simplicity. One should not dismiss Python as an option because it's subjectively "slow" or because it's "not cool" to write code in Python. Programming in a more difficult language doesn't make you a better programmer.

While not always on par with languages designed for high-performance computing, Python holds a unique position in the world of software development.
If you're working on a project that needs to be shipped fast, don't overlook Python — it might just be the ideal tool for the job.
