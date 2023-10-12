---
title: I hate Python
date: "2023-10-12T19:29:11.017Z"
description: "A rant about the problems I've encountered while working with Python."
---

Many experienced programmers love Python, and it baffles me. Python is often hailed as a versatile and powerful language and has a devoted following, especially among developers who have just started their journey.

Admittedly, Python is a good "scripting" language. Some people like to call it a "glue" language. It's a great choice if you have to write a quick script to hack something together. For instance, if I have to write a script to send a request to the coffee machine (connected to the WiFi) to pour me an Espresso before I start moving, I would probably use Python for it. I've always used it for writing quick PoC scripts during CTFs. If you were programming as a hobby, I'd suggest you go with Python, as there is a library to do just about anything.

Python's use of indentation and simple syntax makes it an excellent choice for getting things done swiftly and, therefore, a great choice for hobbyists. I am also very fond of the [Zen of Python](https://peps.python.org/pep-0020/), and I think it would be an amazing language if it would deliver what the zen promised. Well, that covers the aspects I appreciate in Python, let's dive into the reasons behind my frustrations with the language.

## Simplicity comes with a cost

I wouldn't advocate Python if you aim to become a highly proficient and specialized programmer. The "Pythonic" way of writing code abstracts away a lot of programming basics, which, in my opinion, causes more harm than good for beginners. For instance, if you learned programming in Python, you would have never dealt with data types, never cared about efficiency, and would've probably used a library for any minor problem that ever got in your way. Imagine writing C, Rust, or Go for the first time, coming from Python land, with the notion that you're great at programming. You'd have to deal with memory allocation, garbage cleaning, concurrency, and efficiency, to mention a few. Sure, you can always afford a machine with sufficient resources to run your sub-optimal code, but in the real world, you need to worry about the cost and speed of your service. When you're building a system that needs to be used by thousands of people from all over the world, a single-threaded `while True` loop might not always cut.

Of course, you can use `asyncio` in Python for so-called "multi-threading". However, I haven't heard of any beginner who's even heard of `asyncio`, let alone used it. In contrast, I have come across people who have been programming in Python for multiple years and still have no idea how to write a function to sort an array (for Pythoners, a "list") without using the in-built `sort` method. I'm not suggesting that it's wrong to use Python's `sort` or use libraries for performing certain tasks. They're there for a reason, and you do not need to rebuild the wheel. However, in most cases, it's good to know how the wheel was built (not in the case of pip wheel, that's a mess).

## The Global Interpreter Lock (again)

In short, Python's Global Interpreter Lock (GIL) is a roadblock. If you've not heard of it, the GIL restricts Python bytecodes to running on a single thread at a time, making life difficult for multi-threaded applications. Here's how the [Python wiki](https://wiki.python.org/moin/GlobalInterpreterLock) describes it:

> In CPython, the global interpreter lock, or GIL, is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once. The GIL prevents race conditions and ensures thread safety.

For projects that rely on parallel processing, this is a real bottleneck. The GIL was intended to be an effective solution for thread safety in the Python interpreter, but it has a major downside. With the GIL, you can never truly write multi-threaded code in Python. To some extent, you can do it using `asyncio` coroutines, but these workarounds provide a concurrency paradigm that's a lot more complex than simply using threads. For a language that has the reputation of being "beginner-friendly", I find it unnecessarily convoluted.

The GIL is not all bad, of course, as you'd never have to think about thread safety. However, I would rather have to think about it to write an efficient program than write one that's slow and laggy. When you're building products that are intended to be scaled to millions of users, an otherwise small performance issue can become catastrophic. This is another reason why I think Python is the right choice for hobbyists, and for hacking together scripts, exclusively.

## Constrained Indentation and Verbosity

Python's strict indentation and whitespace rules, while promoting clean code, drive me a little crazy. In most cases, ugly indented code makes you want to write code that's more linear, and sure that's a good thing about it. Sometimes, however, you can't avoid it, and that file seems repugnant. Have you ever tried contributing to a Python code-base that doesn't have a linter set up? It is hell to deal with inconsistent tabs and spaces that sometimes even your editor can't comprehend. The point I'm trying to make is that cleanliness lies in being able to write readable, concise code. Python seems to have cracked the readability aspect of it, but it's nowhere close to concise.

Speaking of verbosity, I'm tired of importing modules with absolute paths starting from the root of the project. I haven't seen any editors intellisense auto-import Python functions and modules with no errors (I've used VSCode and nvim). It should be the developer's decision whether or not they want to use relative imports with modules, and I've tried really hard but I've never been able to make it work. In my opinion, Python modules are the worst way of implementing modules that I've seen in any language. The _necessity_ of having `__init__.py` files inside every directory is really annoying. Even if you didn't have a single line of code in your `__init__.py` file, you'll need it for the Python interpreter to recognize it as a module.

## Global namespace pollution and dynamic typing

While I'm not a fan of dynamic typing, I can't complain much since I develop a lot of things in Javascript (actually, Typescript). Admittedly, Typescript's type system is not the best, but somehow it feels like a good middle-ground between statically typed and dynamically typed languages. It enforces (somewhat) types wherever you want them to be enforced. Writing Python annotations seems like a waste of time. If you're not using a static type-checker like [mypy](https://mypy.readthedocs.io/en/stable/), you might as well not write any annotations, as they wouldn't do anything other than providing some intellisense (which isn't always accurate either).

The global namespace pollution, however, is annoying to me. If `sorted` is an in-built method, I should not be able to overwrite it. Somehow, this is valid Python code:

```py
arr = [5, 4, 3, 2, 1]
sorted = sorted(arr)
```

The next time I try to run the `sorted` method, I'm going to run into this error:

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'list' object is not callable
```

I'm sure you can see how `import *` may pollute the namespace. It's not uncommon to see `from <module> import *` in Python. When you import a module, all the variables and functions defined in the module will get imported, if you didn't specify any using `__all__`.

## Dependency management

It is painful to set up clean and isolated package management in Python. Most people just install all their dependencies globally and later run into clashes and nuke their entire Python environment. Some just accept their fate and set up a [virtual environment](https://docs.python.org/3/library/venv.html), but then manage their `requirements.txt` files manually as `pip freeze` is a nightmare. It will fix versions of the packages you didn't even want to install. I've faced issues where the `requirements.txt` file generated on my Linux system couldn't be installed by `pip` on my friend's Mac. Now, you can use something like `pipreqs`, but what's the point of having dependency management if you have to install a different library anyway. In fact, most Linux users stick to installing Python packages using their distro's package manager (`pacman` for example), so that they do not have to deal with `pip`. There is no consistency in package management, and the absence of a lock file might be one of the biggest reasons for it. The absence of native locking mechanisms leaves room for potential discrepancies between development and production environments.

Developers often turn to third-party tools like pipenv, poetry, or conda to enhance dependency management. While these tools offer valuable features, they can also introduce complexity and may require a learning curve.

Python's dependency resolver is not as robust as some other package managers. Resolving complex version constraints and ensuring compatibility between packages can be a daunting task, especially in projects with numerous dependencies; imagine having to do that on your own.

The PyPy team did come up with [PEP-582](https://peps.python.org/pep-0582/), which seems to be a better solution at first glance. If you think about it though, it moves a central `venv` to an unmanaged set of scattered `__pypackages__` directories, which is even harder to replicate. The implementation of PEP-582 in PDM is also not consistent (read more about it in [this article](https://pradyunsg.me/blog/2023/01/21/pdm-does-not-implement-pep-582/) my friend wrote.)

## Conclusion

With its rich community and extensive libraries, Python certainly has its merits. That makes it popular among data scientists and machine-learning/AI enthusiasts where you would most definitely find a pre-trained model or a library that already implements the most efficient algorithm. However, its drawbacks, including performance limitations, the GIL, and the inflexibility of its typing, make it a bit of a thorny companion. An engineer takes pride in writing beautiful and efficient code, and most consider Python to be ugly and slow. Of course, no language is perfect (although some are very close to being perfect), most have their nuances.

Although Python is undeniably robust and powerful, I would prefer not to use it for big projects in the future. You won't use most of Python's "power" in your everyday. It's like bringing a machete to cut your hair.

I've written a fair amount of Python, and I've come to dislike it only recently when I had to build and maintain a large project in Python. Python will still be my go-to language for scripting, and for building small weekend projects.

If you've reached this far, you probably share similar sentiments and frustration. If you'd like to dive deeper into this conversation or have thoughts to share, please feel free to reach out!
