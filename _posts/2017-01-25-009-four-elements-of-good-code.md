---
layout: post
title: "009. Four Elements of Good Code"
description: "In this episode Thanasis and Dimitri talk about what defines good code."
date: 2017-01-25 11:00:00 +0300
tags : [startups, code, engineering, developers, documentation, logging, testing]
episodeFile: "https://s3.amazonaws.com/listenshiprepeat/009-four-elements-of-good-code.mp3"
podcastLength: "35:48"
podcastSizeBytes: "69298342"
---

## Episode Description

In this episode Thanasis and Dimitri talk about what defines good code.

## Transcript

**Dimitri** [00.00.05]: Are you an entrepreneur, a designer, a developer, never before has it been easier to get your new venture off the ground. Whether you’re just getting started or have already begun your journey, you’ve come to the right place. In each episode we will dive into a new challenge breaking it down into simple, digestible terms. I’m Dimitri...

**Dimitri** [00.00.21]: ...And I’m Thanasis.

**Dimitri** [00.00.23]: And you’re listening to Listen-Ship-Repeat, episode 9, “Four elements of good code”.

(Music)

**Thanasis** [00.00.35]: What’s up, Dimitri?

**Dimitri** [00.00.38]: I’m a bit under with the weather honestly, but I’ll get through it.

**Thanasis** [00.00.41]: I am under the weather literally with the kind of low temperatures we have here.

**Dimitri** [00.00.49]: Yeah, but it’s ok! We will get through it.

**Thanasis** [00.00.53]: I guess yeah! We had a broken faucet at the balcony to dig through the whole balcony and the cement, that kind of stuff. But let’s move on.

**Dimitri** [00.01:10]: Yeah! So, today we will try to communicate a non technical founder for example, four elements that make up good code, good code base, healthy code base. So, what don’t you kick it off, Thanasi?

**Thanasis** [00.01.33]: Right! So, again like in all episodes our perspective here is to inform the non technical all the while retaining interest for the technical people and good code has been a subject of discussion since software was invented and the problem with quality code is that it’s kind of elusive, there is no solid definition as to what quality code is. Every developer, if you ask them, they believe that their code is very good and everybody other’s code is bad. We wanna try to put some sanity into this discussion and allow for the non-tech people to know what points to look into under the carpet and have a good understanding of the quality of code produced by a developer or a team. So, let’s start by trying to establish what is good quality code and good quality code is definitely not a code that performs its task, but is a given, I mean if the code base is the software didn’t deliver what was tasked to deliver, then it wouldn’t ever be produced, get rolled out in production. That’s definitely not an indication. In my mind the measure of quality code is the measure under which an other or the same developer can come back to the code base after a big period of time, read a code base and understand what is going on.

**Dimitri** [00.03.37]: That’s a good metric!

**Thanasis** [00.03.38]: Right, yeah! For me it is about readability of the code, maintainability, how testable it is and it is a very specific mantra that says that we write code for developers to read not for machines to execute. And this comes in contrast with many waves/trends, like write less and writing less is not good for readability. It’s not kind of laziness, but you can attribute to that, we’ll try to figure out ways to write the same things with less characters.

**Dimitri** [00.04.34]: Maybe it’s also people trying to find the optimum way to write code.

**Thanasis** [00.04.42]: Yeah! Optimization is a different subject entirely.

**Dimitri** [00.04.46]: What are you referring to, like saving a few spaces here and there. There are some border lines.

**Thanasis** [00.04.51]: So, for instance in JAVAscript, there was a big debate 5 years ago, if I recall correctly, about whether we should use semicolons or not. And there was this whole wave of saying that why should we use semicolons, since the language doesn’t need them and we type less.

**Dimitri** [00.05.13]: Oh, it’s same in many languages. Swift comes to mind, it comes down to personal preferences. I know some people for example in C, you don’t have to, you know, if it’s a void function, you don’t have to return, people like typing it for the exact readability.

**Thanasis** [00.05.35]: Explicitly, right, yeah! I mean to be explicit is to raise the readability of your code.

**Dimitri** [00.05:42]: Exactly! So, no right or wrong obviously.

**Thanasis** [00.05:48]: I find wrong! I call it out, I think it’s wrong!

**Dimitri** [00.05.53]: It’s your right to be wrong. So, you can be wrong and it’s all good. Now, for semicolons, we can go on forever, I mean what are you gonna do? Are you gonna batch a sequential statement on a single line? No! so, the new line is good enough. Other things now, what about organizational and file structure within the actual project file?

**Thanasis** [00.06.23]: Right! We now we go into the actual elements of good code.

**Dimitri** [00.6.27]: Oh, ok! You mentioned readability and you can open up a single source file and read it and see what is going on, but I also look a good code as being more overarching philosophy. In your architecture, in the way you choose to architect, your project. So, how many modules do you have to carry out a single task? How many source files do you have to carry out some functionality, to put everything in the same file, do break it up and how readable is to read it once you have broken up. And there are ways to do that. So, that’s your project file organization. So, for example let’s take a use case, let’s take an Xcode a workspace project, so you can have stuff tact away as dependencies, so that will be nice on your side, your assets, your image etc. and this can be, I am actually moving away from Xcode, this can be for any project. So, your files, your source files, your assets in different folders, other files that you might use, text, CSV, whatever within your file structure for example. Let’s say you are working on a graphical interface project, you can sort your files depending on which view you are working on, your model code will be in a different folder and so on and so forth, you get the picture. That should also be reflected on the file system too, in case somebody does want to open your project or looking for something or explore it on Github or something.

**Thanasis** [00.08.31]: Right! I think Dimitri, this whole point is about the file system.

**Dimitri** [00.08.40]: Yeah, you are absolutely right, but sometimes for example, the file system doesn’t actually reflect what you see when you open up the project folder. So, on the philosophy that it has to one to one, I mean for example, the X project that I mentioned it’s actually the case.

**Thanasis** [00.09.00]: What do you mean? Why do you say that?

**Dimitri** [00.09.03]: So, your file structure, when you open up the project, you’ve manually set that and you can rearrange files there, so let’s take all your images..

**Thanasis** [00.09.16]: You mean when you starting a new Xcode project, it already has a boiler plate with a specific folders for you to start off.

**Dimitri** [00.09.21]: Exactly! But when you add files, they can be in a different folder within your..

**Thanasis** [00.09.31]: That’s your choice!

**Dimitri** [00.09.33]: Yeah, but what I am saying is it would be great for example if the file system reflected the ID.

**Thanasis** [00.09.41]: Let’s not get into that now, I think that the message you want to convey here is that the organization of your file naming and folder structure gives an idea about how you perceive things.

**Dimitri** [00.10.05]: Where things are located and what things are basically.

**Thanasis** [00.10.09]: Now, for projects that already create a few folders for you that come with a boilerplate, that of course is a given. However, you start building on top of that. And if you are building for say 6-12 months on top of that boilerplate, it will look very different from how it started. And the way it looks just by browsing the folder and the files, is an indication of the quality of the code because if you browse through a structure of folders with files that represent code, you know, parts of the code base and you are really feeling lost, then it’s not your fault. In a well structured project with proper folders and proper file names, even a non developer should be able to browse through the directories and understand what they are saying, this thing performs this thing, this folder is about users, this folder is about items, stuff like that. I mean very basic stuff. The contrast of this is like having a folder where all of your files are inside, you know all code basis in the same folder with names that don’t make sense.

**Dimitri** [00.11.39]: Yes, I think we really carried this point crossed to our listeners.

**Thanasis** [00.11.49]: So, element of good code No1, organization of your files and folders structure throughout your project. It helps even other developers come in to the project easily and understand what is going on.

**Dimitri** [00.12.05]: And just punctuate that before we move on, very similar to what you do with your regular files. So, if you organize enough the way you sort your documents, whether it’s in your Dropbox or another machine, the philosophy is very similar to a code base.

**Thanasis** [00.12.23]: Exactly! Organizational skills. So, element No2 is the module health, and by module we mean basically a single file and you could even say that it’s about a whole code base, but let’s stick to a single file and module. So, we select a random module out of the code base, we open it up and we just play and look at it. We scroll down, up and down and the first thing we notice is how many lines of code does it have. And in coding lines of code is a very important metric, and in quality code and of course depending on the language, there is a limit to how many lines of code you can have before your module becomes unreadable or unmaintainable. In Javascript that limit is around 300 lines, in other languages that are less expressive, less verbose, it can go down to 200 or 150, and of course that number gets dictated by company’s CTO, who says ‘’guys, folks, girls your modules are not going to be more than 300 lines of code, break them up!’’.

**Dimitri** [00.13.47]: I’m going to disagree with that. I can tell you by 3 or 4 environments that come to mind, just a boilerplate, if you originate a file can be just about 300 lines.

**Thanasis** [00.14.01]: And you are right on top of that, water plate? I cannot believe that.

**Dimitri** [00.14:04]: Yeah! So, for example, let’s take an under application for activity. So, the activity in an android application for example is what you see on the screen or a general application in any case. So, if you generate the class file that has some standard methods that all of these activity classes use, so they go 50,60, 100. If you add like a list of something and you have an adapter and this is just like scale, it goes up. So, I wouldn’t recommend to our users a specific number, but I would say try to get it to the minimum possible amount of lines. Not saying these languages..

**Thanasis** [00.14.59]: I said it differs from platforms, right? So, your if your boiler plates starts with 150 lines..

**Dimitri** [00.15.11]: It can possibly impose that limit on you.

**Thanasis** [00.15.12]: Right! The idea here is that there will not be files with 2000-3000 lines of codes.

**Dimitri** [00.15.20]: That will never happen! I mean, you’ve seen it all the time, you can probably go to random repository in Github right now and see something like that. In any case, it’s difficult for that to be justifiable.

**Thanasis** [00.15.40]: So, as you scroll down the file and you look it up and down, you figure out how many lines of code it is. The next thing that you want to understand is basically the look and feel, and that means a lot of things. Now, if you are not a trained developer, look and feel for you must be something that as you look throughout the code, you kind of start to understand what is going on, there are methods, names that make sense to you, there are variable names that make sense you, and you understand a little bit about what is going on. You have a rough idea. If you are a little more expert on development, then you start to appreciate smaller things, like how small its method is, how clean the indentation format is and there is no nesting. You know, little small things like that especially language specific stuff that will give you hints as to whether, you know, a certain specific pattern has been followed when developing the application or it is just random ramblings from like 20 different people and it's one of them did something different and you see different code styles within the same module and stuff like that.

**Dimitri** [00.17.04]: Alright! What else can we talk about? Zombie code, dead code? If you haven’t use something in a while or you wrote something to replace something previously, remove it, it doesn’t have to be there, it will make it less valuable, it might increase compile times. So, remove it. Duplicate blocks of code with identical functionality or the copy paste school of programming, very easy trap to fall into, very easy to avoid to either identical get rid off one of them and pick what you think it is better for you. Also, not reinventing the wheel, there are a lot of mechanisms out there that didn’t exist years ago as open source becomes not only the most popular code but the norm, people write the stuff and they share them and these days where there are a lot of dependency management systems that are very easy to install and that makes it very easy for you to get this code into your project. Let’s say you start a new project there is a specific functionality set that you have to cover, you go to Github for example, cocoapods, what other dependency systems there are?

**Thanasis** [00.18.48]: There are many and you should know them as you are developing your language.

**Dimitri** [00.18.53]: Within your domain. So, you go there, you can search around and you will find something. And you can bring it to your project. So, sometimes you might even have to tweak it, so most of the work is done for you anyway.

**Thanasis** [00.19.11]: And if you don’t find it right, put it back on open source!

**Dimitri** [00.19.14]: Exactly! Yeah, excellent advice! It could be just as a sight note, it can be a single method you wrote and if you think it will be useful just put it out there and share some as good will, put something out there into the world. So, we talked about methods just now. Let’s focus a bit on variable and naming skills, very exciting topic. I just have to say that the most modern environments support boarder complete so you don’t have to have a single character variable names, you can go crazy as a matter of fact, you can be very comprehensive in naming your variables, you don’t have to write mini sentences but you don’t have to say PKT as Z, gives you a packet size and it’s very readable. Sorry for the terrible example, but I think you catch my drift. Again a lot of this stuff comes back to readability, doesn’t it? So, be careful how you name your stuff, same applies for methods, for classes, any sort of object in your code.

**Thanasis** [00.20.40]: Right! And you know, naming stuff in your code base and in your project file, is one of two hardest things a developer has to do. We all know the famous code by Phil Carton, there are only two hard things in computer science, cashing validation and naming things. So, that’s a funny thing. Now, the last metric of module health is documentation. Whether you see comments throughout the code base and doc blocks if the language welcomes them. Doc blocks are the documentation, the very specific kind of documentation, on how you document your methods, what they expect as input, what values they output. So, especially in non typed languages like php, javascript and python, where you do not have strict types, a variable can be any type, it can be a string, it can be a number, it can be an array. So, those doc blocks give you kind of security as what is expected by the method and that helps. Of course, documentation goes beyond the limits of a single module, it applies to the whole project so you open up the project, probably on Github, as repository, does it have a ‘readme’ that will guide you as to what you are seeing right here. You know, this is project X that does Y , in order to install it, you need to perform these steps, 1,2,3,4,5,… in order to run the test you need to do X. And any other note that would be important to deploy a service, perform this command, to reset the database, perform the other command. All of these are critical documentation that their original author knows, but has to share for the other parts of the team. And you can use a ‘readme’, you can use the project squiqui, which is provided for free by Github. So, they release no excuse there, just put down the effort. One of the things that will help you and discipline you towards a direction of documenting is actually contributing or creating open source software, because by definition you have to document everything there, so the rest developers can understand what is going on. Now, let’s move on to the third element of good code and that is logging. Logging has been neglected by most developers, hasn’t been given the value that it deserves. Basically, logging is your life boat out of tough situations, because by the code base reaches a certain size, let’s say more than 10.000-20.000 lines of code, and you have no logging and while you are running your server, it just randomly breaks at some point, you will not be easily be able to trace the path towards where the application crashed, whereas it you have logging you can see right there and then in front of you which execution path was followed and have a better idea as you start to debug the problem of where to look.

**Dimitri** [00.24.39]: Yeah, and extending on that, for logging you mentioned, exemptions etc. there is a lot of packages out there that will give you a stuck trace of what went wrong. So, in combination with your logging, I think you are safe to be able to fix what happened when otherwise you wouldn’t.

**Thanasis** [00.25.04]: Absolutely! And what is the last point Dimitri?

**Dimitri** [00.25.08]: Oh, testing, uni-testing, testing driven development. Uni-testing is a form of automated testing used by most software developers these days, they check that program works, given/ specific inputs, some crossing happens and you get expected output or expected functionality. If you don’t the test fails, if it does the test was success. So, moving forward when you change something and you run your tests and they pass, it means that you didn’t break something and or that your code is well enough to be written in a testable code way that you can make changes to it. The larger of the code base the more important it becomes because stuff can break anywhere and you mentioned 20000 lines of code maybe up to one million lines of code, having tests, checking every time in an automated way that saves time unless you focus on building a product.

**Thanasis** [00.26.35]: Right! Let’s allow me to inject a small correction here, it’s not just unitest, there are all kind of tests, like integration testing, behavioral testing, we can use all sorts of things, but no testing is automated. Every test that you write, you need to run it on yourself. The automation part comes with your CI. The CI is initials for continuous integration, it is an external service that either you have build on your own, software like junkies, or there are ready made services out there, like Travis or Circle CI. These two are the most popular ones. I use Circle CI for my professional projects and Travis for my open source. So, the idea here is that CI is going to pull your code whenever you make a change on it, on your repository, lets say. So, let's say you push your code, you push something on Github, and that triggers a series of events that result in CI pulling your code and starting to run the tests on it. This is where the automation comes and it is basically essential. You wouldn’t want to start a project without having solid testing foundations in place because after a while things get so much complex and so much interdependent that a single fix in one part of the code might affect another part that you didn’t even expect and it’s only through automated testing that you are going to catch this problem before it rolls out to production and a customer gets to experience it and if and when they report it back to you.

**Dimitri** [00.28.54]: Right! So, we covered all these things. What can we tell to our listeners, what resources or advice can we give at least, you know, be able to exercise and become better to what we mentioned? So, I think the number one or the first thing could be picking up an open source project, you can find plenty, varying degrees of complexity, of levels a little widget that somebody wrote and so on. These things the more popular the more positive is, the more people can contribute to it so, you get a lot of these best practices and you can definitely learn from that. So, I really encourage you first to discover a project and then maybe you can start contributing to it, it can be anything. From the type of the documentation to adding an extra method to a class that you think would have helped you. So, that will help you practice and definitely become better writing your code, and I guarantee you will see results within weeks.

**Thanasis** [00.30.18]: Definitely! I mean even if not weeks, in months or maybe years after you really process what has happened and just the experience of mingling with somebody else’s code and a code that is publicly available and under the scrutiny of your peers is enough to open your mind to new ways of thinking and approaching problems and like I said already before, one the benefits of participating in an open source is that discipline you get in documentation, because documentation is not just opening a new file and start typing, right? You have convey a message and you have to convey it in a way that most of the people would relate to and that is an acquired skill, it doesn’t come for free.

**Dimitri** [00.31.14]: And last but not least, my favorite is, one of my own philosophies that I have and this gets most towards developers but could also help CTOs, managers that work with developers to help them improve. I think that refactoring is now in the sense that it’s not discouraging to go back and change it but get your major architectural philosophy on the get go. That takes a lot of experience but it’s definitely something that you can have as a goal, a move towards it. So, go back and change your code all as improve it, but get at some level at the beginning of your planning. It saves you time, money in the future.

**Thanasis** [00.32.10]: Dimitri, would you say that this has to do with the general advice that says don’t put out for tomorrow what you can do today or is something else?

**Dimitri** [00.32.19]: It’s more like that. When I first started out I actually enjoyed it, but this is completely personal what I am saying. I really enjoyed going back to old code and like doing huge changes, but over the years I like ..

**Thanasis** [00.32.40]: Your code or other people’s code?

**Dimitri** [00.32.42]: My specific code.

**Thanasis** [00.32.44]: Your old code, ok!

**Dimitri** [00.32.45]: On my current project, for example. But over the years I got really interested more in like always building new stuff because that’s why the world is going on, all these new toys pop up and you just get into this way of thinking, toys build the next big thing. This is completely personal, not saying this is right or wrong.

**Thanasis** [00.33.10]: I think we are all in the same bus!

**Dimitri** [00.33.14]: That kindly made me say ‘ok, let me get it right the first time because the stuff that I would like to do from now on that I would not have the time to go back for the big changes unless I have to. This is not advice, this is me. Just sharing stuff from my own personal story but you can just keep that refactoring is now!

**Thanasis** [00.33.46]: Let me say my own line. Be pragmatic, you know? I mean it’s a slippery slope to wanna do everything perfect and especially as developers with excessive amounts of OCD, it’s a known attribute. So, the answer to that is just be pragmatic and don’t burn yourself out, don’t waste time on things that do not provide value for your product.

**Dimitri** [00.34.19] Yeah, awesome! So, today we went through elements of good code:
Organization
Your module health
Logging
Testing
By no means an exhaustive list, but definitely a checklist can be better on my humble opinion.

**Thanasis** [00.34.41]: Something salty and sweet to remember!

**Dimitri** [00.34.42]: Exactly! And that’s it for today Thanasi. So, everyone you can send us your question by calling us on 8663705050 from anywhere, you can email us at [hello@listenshiprepeat.com](mailto:hello@listenshiprepeat.com) and you can drop a couple of reviews or stars on iTunes. You don’t have to go through the process of righting stuff, you can just give us stars and that makes us happy! A lot of shows say that it makes us go up in the rankings, more people discover us and listen to us and we’re definitely one of those, so feel free to share your opinion on iTunes about us and with that our episode comes to an end. We will speak to you very soon. Good bye!

**Thanasis** [00.35.42]: Bye bye!
