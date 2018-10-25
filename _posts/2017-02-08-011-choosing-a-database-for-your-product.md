---
layout: post
title: "011. Choosing a database for your product"
description: "In this episode Thanasis and Dimitri talk about how to choose a database for your product."
date: 2017-02-08 11:00:00 +0300
tags : [startups, databases, transactional, document, graph, cloud]
episodeFile: "https://s3.amazonaws.com/listenshiprepeat/011-choosing-a-database-for-your-product.mp3"
podcastLength: "39:04"
podcastSizeBytes: "75940618"
---

## Episode Description

In this episode Thanasis and Dimitri talk about how to choose a database for your product.

## Episode notes

### Databases

* [MySQL](https://www.mysql.com/)
* [Postgres](https://www.postgresql.org/)
* [Redis](https://redis.io/)
* [Mongo](https://www.mongodb.com/)
* [Firebase](https://firebase.google.com)
* [Realm](https://realm.io)

### General Notes

* [Gitlab](https://about.gitlab.com/)
* [Gitlab Incident Blog post](https://about.gitlab.com/2017/02/01/gitlab-dot-com-database-incident/)

## Transcript

**Thanasis** [00:00:02]: Are you an entrepreneur, a designer, but wait, what episode are we?

**Dimitri** [00:00:09]: Episode 11

**Thanasis** [00:00:11]: 11, sure?

**Dimitri** [00:00:11]: Yeah, Episode 11 for sure!

**Thanasis** [00:00:16] Alright! Are you an entrepreneur, a designer, a developer. Never before has it been easier to get your new venture off the ground whether you're just getting started or you have already begun your journey, you've come to the right place. In each episode we will dive into a new challenge breaking it down into simple digestible terms. I'm Thanasis

**Dimitri** [00:00:36]: And I’m Dimitri.

**Thanasis** [00:00:37]: And you are listening to Listen Ship Repeat. In this episode, we'll talk about choosing a database for your product. This is episode number 11.

**Dimitri** [00:00:49] You really know the intro though Thanasis. I'm just checking. We will cut it in post-production. What's up? How are things?

**Thanasis** [00:00:57]: Everything's good. Major news comes out from Breaking news from get live. We suffered the catastrophic data loss yesterday Their service was offline for a day, have you heard about it?

**Dimitri** [00:01:12]: That's terrible and we feel them and we're with them and we really hope they recover. They have a live stream going on from their efforts.

**Thanasis** [00:01:21]: They're live now. They recovered just a few hours ago, I checked.

**Dimitri** [00:01:25]: There you go. Good on them that they managed to be very nice to read the post-mortem when it comes out. Yeah?

**Thanasis** [00:01:34]: Yes, the preliminary is that onwards some maintenance that was happening under pressure and stress on the production database a devops administrator deleted all database files. This basically resulted in a six hour data loss, some 900 new users lost and much of their customers work, of course because it's Github. It's not completely lost, it can be restored easily again. They had five different ways of performing backups and all five failed. They weren't tested before. I'm.

**Dimitri** [00:02:17]: I'm curious to see what the follow is going to be.

**Thanasis** [00:02:19]: Definitely, I'm also making a note to make a podcast about disaster recovery and prevention of such catastrophic events.

**Dimitri** [00:02:28]: Okay, before we start. Have you ever been part of a disaster like this.

**Thanasis** [00:02:33]: No, not of that scale. That was…

**Dimitri** [00:02:35]: It doesn't happen often.

**Thanasis** [00:02:38]:  That doesn't happen often that you know of and I know of.

**Dimitri** [00:02:45]: Yeah yeah maybe it happens a lot behind the scenes. I was just thinking.

**Thanasis** [00.02.45]: Because yeah only if you’re a company in the spotlight you get to learn those kinds of stuff.

**Dimitri** [00:02:56]: Yeah. Best of luck to them but I think they're on it. Do you know somebody that used this?

**Thanasis** [00:03:03]: No, but we are discussing it in our circles. For people that don't know Gitlab is the direct competitor of Github. It's rather new.

**Dimitri** [00.03.15]: Competitor of Github, so let’s get on with that. I'm kind of itching to talk about this for four hours and go completely off topic. So what you say bring it back to choosing a database for your product

**Thanasis** [00:03:33] Choosing a database for your products and yeah again let's try and focus on the early stages, because later stages as your company grows your database needs grow and you might find yourself having multiple databases in your stock.

**Dimitri** [00.03.50]: Yeah and can I just say something? Let's let's consider the default state of the early stage as that middle ground we discussed. So not the one developer not the 50 people. I get the impression that the running theme we're talking about is always that five to 20-25 people at the stage.

**Thanasis** [00:04:07]: Well yeah and again here it depends and I'm going to be very specific on the one to five people stage and in contrast it with a five to 10 people, because after five to 10 people and five and when I'm talking people I mean engineers okay? It's not like five people are the CEO the marketing guy the accountant and the single developer. It's five developers. So after that point where you have at least five developers, you've grown enough to consider restructuring your code and your databases, you know. So that's the point where you start to specialize and optimize for your products. And we’ll see how this relates. We will discuss what to use on the different use cases. But before we get there let's just skim through all the major different database categories.

**Dimitri** [00:05:06]: Alright. So, the first one is a transactional RDBMS type stuff. MySQL postscripts and Oracle. I think my skill is the most popular solution out there. And it's been around for the longest, too. I've certainly been using it on and off and it’s definitely part that I’ll be using quite a lot. And where I am now, we actually use MySQL as one of our databases as our main data storage. We do a lot of stuff. The API we have that rights to MySQL. It's like we're saying we're doing a lot of high frequency relocations stuff at the moment and it's quite interesting that we have actually a chance to discuss this because we're looking at a couple of extra solutions. We want to be able to split it up into the data collection component, where we're writing to MySQL, because that works fine for us and it can handle records, but then we'd be running operations on the database like, you know calculating frequency, determining routes comparing routes. That's very process intensive stuff. So we've been discussing internally that it might be the ideal for us

**Thanasis** [00:06:41]: Do you know if you use transactions?

**Dimitri** [00:06:43]: Do I know if we use transactions. We certainly do use transactions.

**Thanasis** [00:06:48]: So, just to get back to the transactional parts, having transactions is one of the strongest parts of the transactional database. Having a transaction means that I'm going to perform multiple reads and writes onto the database, either for new records or updates existing records. And then if something goes wrong along the whole chain I am able to revert all the changes I've made, reject them and then I can can roll back basically quite easily. Now I'm going to say that postscripts is an equally good candidate for selecting a free sql database and in some cases it's also more particularly suited.

**Dimitri** [00:07:40]: I've seen some benchmarks. It's supposed to be superior to MySQL in that respect. In raw performance.

**Thanasis** [00.07.49]: Well you know there isn't any true answer to that. You're going to find out better administrators that support around or the other, right? So, it's good to know that those are the two most prominent ones as in regards to sql transactional databases. The next set of databases are the key value stores. A very classic example of that is Redis. Redis has been used a lot throughout all the services today. Redis is a very fast start key value store and what it means is you store a key, a unique string, that it stores some value and that value can be anything. It can be a single stream, it can be anything, an object, can be other types of data stock.

**Dimitri** [00:08:40]: In computer science terms, think about hashmarks dictionaries that kind of stuff it's very very seemless.

**Thanasis** [00:08:47]: One of the best advantages of key value stores is their speed. So they're incredibly fast and return results in less than 50 milliseconds 30, 20 milliseconds is the normal. And the way to do that especially in Redis, as I know, is that they have a first layer of store that is on memory, very fast accessible and then in the background they store in memory down to disk so because of that very specific way they work it's not 100 percent reliable data storage system. So you wouldn’t want to store their mission critical data, I mean a bank wouldn't use Redis for transactions monitor.

**Dimitri** [00.09.40]: In the finance sector in particular this is a no no because I want the result to be available in zero time when the transaction quote is being performed. I don't want to wait like, two seconds.

**Thanasis** [00.09.56]: Exactly. Exactly.

**Dimitri** [00.09.48]: It's a great caching solution that you can have together with your main database

**Thanasis** [00.10.04]: And that's what it's used for, primarily caching sessions. So the session is a unique string that gets stored in the browser's cookies and it's transported throughout every request and you get that string from the browser and you query Redis back the response, you know, do I know this user? Which user is that? That that's being performed incredibly fast and that's where Redis is best suited for standard web applications.

**Dimitri** [00.10.35]: So moving on, please Thanasi, what else have we got?

**Thanasis** [00.10.39]: Moving on, we've got the document based databases. So this would be Mongo. And the idea here is that we store a whole document, a document basically is an object which on itself contains key value pairs. The difference between key value stores and the document is exactly that. In document based you can have collections which is similar to what we call tables in transactional databases and it's best suited for storing big objects like say a whole user's profile. So big data stores that I can easily store without the restriction of schema. One thing we forgot to mention is that, in transaction databases you have very strong schema enforcement. So when you store on the table users it is expected that you will store a name an email. You cannot not store an e-mail right. You're going to get an error. In key value in document based databases you're free to do whatever you want. They have no schema their schemaless

**Dimitri** [00.11.54]: You mentioned it's good for storing user profiles but honestly I'm not quite convinced because…

**Thanasis** [00.12.09]: I didn't say it was good. I was trying to find examples.

**Dimitri** [00.12.09]: Well it's a good example that's what I want to ask you, because this is actually quite interesting for me.

**Thanasis** [00:12:08]: A good example would be analytics. I mean that's that was a core use case. I want to store an object which contains data. Nevertheless we do Mongo in production today as the main data store and I'm going to explain why later. Now the next category of databases are the graph databases, graph databases like Neo4j. Databases that describe relations between entities. Yeah, I know you. You know John, you know Catherine.

**Dimitri** [00:12:49]: So objects and the relationship between them.

**Thanasis** [00:12:56]: Exactly. I mean if you're doing social networks it's a must. And that's that's where those databases came out from the first place.

**Dimitri** [00:13:06]: Okay, so you're saying that several of the social networks out there employ this kind of technology.

**Thanasis** [00:13:14]: Exactly, Yeah. So they can figure out you know graphing network. When the say your graph they mean your immediate network your secondary third, you know. When you get into LinkedIn and it says, you know this guy with three connections away, that's where this comes from.

**Dimitri** [00.13.35]: We've seen that movie “Six Degrees of Separation”. I think it’s just bit off topic but it is a concept that everybody on the planet is maximum six hops away from..

**Thanasis** [00:13:45]: Oh, Right! Yes.

**Dimitri** [00:13:47]: So they actually run an experiment on this at Facebook at some point. and the processing is immense. It's crazy to build this kind of a graph and like special algorithms developed just, you know obviously you can brute force it. We're talking like, 10 to the power of I don't want to say but you know, crazy numbers.

**Thanasis** [00:14:15]: Okay, an awesome and final category is client cloud based.

**Dimitri** [00:14:16]: So there's a few stuff we can talk about and there are lot of legacy stuff that I'd like to give honorable mentions to. So I'll begin by saying firebase which it's back in to build for you. You can make a specific use of subsets of that, but it has a real time database that you can store and sync in real time and I'll get to that in a second. The storage, obviously hosting push notifications, that kind of stuff.

**Thanasis** [00.14.56]: Firebase is a networked database that is on the cloud?

**Dimitri** [00.14.57]: It's on the cloud and it's real time in the sense that, you can use it in any sort of app or any sort of OS and it's pretty incredible.

**Thanasis** [00:15:08]: So I get onto the Website I sign up and I have a database.

**Dimitri** [00:15:12]: Yeah and it's easy as that. You're doing a better job at selling this, than me. But in specific use cases that not a lot of extensive knowledge required so you can get up and running very quickly if you want to focus on a Front-End app. Some pretty crazy stuff. Something very particular technology wise can be on the screen within your app, you can change an entity or a field on the Website and you see it change right there was no refresh, nothing, just there and in real time. Very good at pushing data to you and it’s very comprehensive scale for you to build these bindings. Another one which is my preferred Realm. So, Realm is a local database. That's how it started, as Realm.io Y Combinator company etc.. That's how it began. And it's really going back to basics where it's not a distributed mega database solution out there in the cloud. It is taking the approach that it's going to run on a low resource environment and it's really going back to basics in terms of performance like every bit counts every bit matters and you can use that across platforms, it works everywhere.

**Thanasis** [00:16:34]:Everywhere, as if I guess iOS, android, right?

**Dimitri** [00:16:41]: Well, you Mac, Android actually asterisk on mac but it's a fully native solution. I'm not sure but Windows Phone, but with iOS and android you’re pretty much covered.

**Thanasis** [00:16:57]: All right. Do you know details like, is it more like an sql type..?

**Dimitri** [00.17.07]: It’s more like an object store or objects and that's all I know. So it's actually open source, a lot of C++ and cross-platform and I get the impression that it's stuff like an object store. Even if you read the literature on the website they use terminology like, live objects and objects and that kind of stuff. Honorable mention that we also build this firebase type thing at the moment. So everything I described about that firebase before, they’ve been doing too, like a back end solution with live syncing of data and bring these two things together, like a broader concept or trend that you basically be seeing within the next year or so. Definitely 2017, the offline first implementation, like you open your app and there’s no internet but you can still do stuff. I've been going that direction recently in my own projects and people around firebase will be definitely enforcing that.

**Thanasis** [00:18:12]: Firebase allows you to go offline?

**Dimitri** [00:18:14]: Yeah, I mean Realm does because it's a local database and by definition Realm doesn't have online and you can build your own layer on top and you can give the impression to the user that when they open their app, it's not like they’ve got a mobile Safari with no Internet. The page doesn't load. It's like going to your mail app on iOS or Gmail on Android and there's no email, but you know you open it up and you can browse the stuff you've already downloaded. So there's still some user experience to be had in the offline world too and these products help. Sql light, I'm just going to pass really quickly because, great technology but it's kind of dated. If you want to use that, It's a layer built on top of the Sql light. But it's becoming more and more cross-platform so I vote for Realm and Firebase. For your web front end app, I did some research recently into browse a local store and I can't really say that's getting a lot of traction. So, web stories, the way that works is for a browser that supports local storage you’ll be able to sign key value attributes and be able to return later and just load them up from the data. And I'm sure that, I'm sure there are solutions built around that at this stage that give a nicer interface and give it more power rather than just saying sit item and get item because really that's what it is. But I'm not sure that I've really seen a lot of implementations out there even from just looking at a website. And looking to the UX, like I get a Gmail, which is a high level web app, but you know, it's still loads now and again. So I'm not really sure how much traction that is going to people, using it.

**Thanasis** [00:20:36]: Yeah, you know, I wouldn't see local storage as primary data store rather more like a caching, strong caching mechanism and maybe offline usage for browsers, but there are cases where it might be a viable solution ,for instance if you're developing using Electron, which allows you to build native applications for OSX and Windows, by using browsers the web kits for that specific use cases it's a viable solution, because you have a stable environment

**Dimitri** [00:21:16]: Well, I think the Slack app. That's definitely not a native wrapper around the current technology you mentioned. And you know you turn it on and open it up and there's definitely some sort of local stores that because it just like pops up, it’s cool, so you think that's what they're using. I mean what else could it be.

**Thanasis** [00:21:35]: You know, they could be using all of the above that you mentioned as well. Everything is in play. Now, we've gone through all the database categories, transactional key value, document based, graph based, client cloud based. Now let's see when to use which. Let's start by the classic web application and again this is on the very early stages, you still don't really know what you want to do. You have a rough idea, you don't know where it will take you. So your primary concern at this point is to produce a prototype. And you need to do that fast. And that's why prototyping is a more rough product than an MVP or even the finished product, right. Let's try to break out the web applications into several categories so we can better suggest a solution. Let's start right off the bat by some very distinct examples, like if you're doing something that is transactional and that means that you are having a lot of reads and writes, for instance you are creating you know a virtual phone book, a catalog of all the hotels in the world, something that requires cataloging, extensive storage that needs to be queried fast, that's hundred percent transaction database. You're going to MySQL or Postscripts, any transactions you need queries when you join queries and you're going to have a lot of structured data and you need immediate results. So if you're in that kind of Realm, you know it's a one way street to go to your main data start to be a transactional one, but if that's not the case you should consider all the other options. First again, let's put out the easy ones. If you are a social network you are going to need to graph database to describe the relationship between your entities, your users. But if you're anything else but that, then I would suggest that you start with document based database for the single and only reason that it is faster to develop on and the reason why it's faster is because, like we mentioned before it doesn't have a scheme. And when you're starting out you are not fully aware of your schema you're not fully aware of where it will take you. So you start to use our model, you put down 10 fields email address, whatever comes into your mind that is going to change over time. The more changes are going to be experienced by your main models. So if you are a chat application, you have a data store that stores all the chat messages and those chat messages have the properties which is the schema and those properties are going to evolve change as the product grows with you. Now if you have a transactional database, it's change you make to the schema, adding a field changing a field removing a field adding a new data or a new table. All of those actions require you to write migration scripts and migration scripts cost a lot of time. You need to set up the migration when it starts so you need to say create those two columns on this table and you need to also define the behavior when the migration goes down and you need to undo what you did. That's the way this works. This process adds a lot of time on development and early on, when you will just simply start with a database with a single table and you need to end up with a database that has 50 tables, it's going to be a tremendous amount of work. That's the only reason I’m generally suggesting that you go with Mongo regardless of its handicaps. People say you know, you're going to lose a record every 10 million records or something like that. Well, okay, it's acceptable for me. I mean, if I'm starting out and I'm having my first hundred users, I'm going to know them by name. If I have a data loss on one hundred and I have 99, I'm going to notice, it's not something that will slip.

**Dimitri** [00:26:43]: Interesting. So that's a that's an actual issue then, data loss.

**Thanasis** [00:26:47]: It's possible, it's virtually possible.

**Dimitri** [00:26:51]: It's one of those things like mathematical puzzle, but never happens. If you have a high traffic up would you be seeing that everyday.

**Thanasis** [00:26:59]: Well yeah I guess if you're storing millions of records per hour you are going to have some loss.

**Dimitri** [00:27:05]: It depends though, I mean I'll be very disappointed if I lost user information, but if I'm tracking location for example.

**Thanasis** [00:27:12]: Exactly, that's exactly what I'm going to say. I mean at that point if you're starting millions of records per hour then you are very, you know deliberate. The records that you are storing you know very well that you don't care if you lose one or two. They're like analytics records. It's exactly what you said. I mean, I'm not going to store a million transactions happening an hour on users on the Mongo database. That's never gonna happen. But when I'm starting out and I don't even have ten users and I need speed, that's where it helps.

**Dimitri** [00:27:50]: What else would you like to talk about, apps, application development?

**Thanasis** [00:27:56]: So yeah, that was web apps, which means your standard back end, front. Now let's talk about you know, other type of applications.

**Dimitri** [00:28:02]: I'll be talking some front end too here, but location based? You covered that?

**Thanasis** [00:28:07]: Well I didn't quite cover that, location based.

**Dimitri** [00:28:10]: I just mentioned earlier for the data collection component.

**Thanasis** [00:28:12]: What do you have in mind for location.

**Dimitri** [00:28:15]: We're looking to Mongo, for that exact reason that came up that it's a specific type of data, that you don't care if you lose a few. You literally do not care if you lose a couple of points, if you are tracking people's location.

**Thanasis** [00:28.35]: Here's the thing now Dimitri. You are storing location as a raw data, as like analytics. Will you be performing queries on that data?

**Dimitri** [00:28:48]: So at the moment we are storing on MySQLI and this feels that has latitudes and longitudes, for example.

**Thanasis** [00:29:00]: Do you perform queries? Like, who's close to that?

**Dimitri** [00:29:05]: At the moment, we are just collecting the data and we're quoting the product scoping definition requirements stage of what to do with that. But the vision is to be able to say something like, being able to calculate routes people take, for example, but there's a lot of complicated math in that so, we're still at that stage. But if you're going to be doing queries on top of data, maybe some way to send this over to Mongo. We'll see.

**Thanasis** [00:29:38]: Here's the thing now Dimitri. If you want to query and you want to query by location, which means basically proximity. You know, give me all the records that are within the radius of a specific location. The only database that I know that supports this kind of queries natively is postscripts. Because, those kind of queries...

**Dimitri** [00:29:58]: Well, all right. Maybe we can talk about this and we'll get back to our users, but postscripts, tell me more about this.

**Thanasis** [00:30:02]: Performing geospatial queries is a very complicated thing. It's a very complicated thing. Imagine you have latitude and longitude, right. You have a full table of latitude and longitude. There is no way to describe a query that says get me all the records that are within a thousand meters around this location. This comes out of an algorithm, it's a type that calculates radiance and stuff like that. I mean, on a database that doesn't natively support this type of queries you're going to do a lot of extra work to make it work.

**Dimitri** [00:30:32] Absolutely.

**Thanasis** [00:30:36] Just a note to keep in mind.

**Dimitri** [00:30:38] There's a lot of third party services they can use. So you're actually moving away from, you before queries in the database and just transferring data over to third party service and they get back to you with the information you want. Yeah and I think for the prototyping stage, firebase might also be an optimal solution even for standard web applications. If you look at the completely bare bones prototype impress some people. I would say firebase, because in effect it's a back end replacement. It can get you up to a high percentage, at some point you might want to consider investing money and bring that stuff in-house and on the front end, you can have your web app, a native app you can use one of those services like Titanium or whatever, I'm not very familiar, that build once run anywhere. However, just for the prototyping you will have to move on to something native later on. So it's the same logic. Firebase isn't really a back end replacement, it can never do all the stuff that you'll be able to do in house with experienced good professionals. Same thing applies for your apps too. But it's a very nice solution to get up and running completely. I have a link here. I'll put in the show notes. It has, how to build the chat app with firebase and so literally just one post.

**Thanasis** [00:31:19] So that's a question I wanted to ask you Dimitri, about chat, which is a very special type of requirement.

**Dimitri** [00:31:29] I've built a few of those. I mean, you need some sort of like socket solution, first of all. Firebase will provide that under the hood. I'm sure that immediate feedback that I mentioned earlier has some sort of socket implementation underneath but you never get to see it as the layer that you're developing on.

**Thanasis** [00:31:50] Is firebase well-suited for chat messaging applications.

**Dimitri** [00:31:56] Yeah it's like the poster child. For some reason it's a great selling point too. So, that live object thing that I mentioned, the presentations that comes along with the marketing materials, like "build the chat up in 10 minutes" and there's a guy on stage doing live coding and he does it. It's not really smoke and mirrors, it's actually something that it works, like chatting with people. But, then you get into other stuff, like we have to authorization, user accounts. The UX is very, it's like just bubbles, but maybe I want to enrich my user interface at some point, like you know 10 minutes is 10 minutes. Let's not get carried away here, but just the fact that this technology is out there these days in 2017 that allows you to have a chat up in 10 minutes, it's pretty amazing.

**Thanasis** [00:32:49] The tolling today is incredible.

**Dimitri** [00:32:52] So, you know location based and chat and messaging is very popular implementations these days. A lot of activity in the startup sector. That's why we spend some time talking about this. Any other specific areas you'd like to mention?

**Thanasis** [00:33:12] Well no. Pretty much, that's the whole deal and the thing to understand here is that, prototyping is something that you are most probably going to discard. That's why you are allowed to spoil yourself.

**Dimitri** [00:34:29] Yeah go nuts, go nuts. Prototyping is something that, is free of many constraints that you might have later on and you have to clean it up and get more serious later in your life cycle. So what I'm saying is, it's great to build something in 10 minutes, but real stuff that makes money, that has users and you know, it needs a team to support, my take a bit more than 10 mins.

Thanasis[00:35:02] Most definitely I know people working for years on projects like that.

**Dimitri** [00:35:09] You know people have been working on a product team?

**Thanasis** [00:35:12] Team, not just people.

**Dimitri** [00:35:14] All right, I think we have the same people in mind. You can tell me later.

**Thanasis** [00:35:19] I'll just say it's a common story it's not, you know one or two.

**Dimitri** [00:35:22] Yeah, it was a terrible joke.

**Thanasis** [00:35:25] Awesome! So yeah, that was it short and sweet. Today we talked about what database to choose for your product. We went through the database categories, the transactional, the key value, the document based, the graph databases and the solutions that are available in the cloud and locally on the client. We went through when to use which. For traditional web applications transactional ones that want to retain catalogs and stuff, it's a transactional solution. For location based, first have a look at Postrgre and then based on your specific use case move on to the other stuff.

**Dimitri** [00:36:11] And consider location based to be a scene of something that you might be doing that is high frequency high availability. So well, we didn't cover it, but I think location based would be synonymous to that.

**Thanasis** [00:36:24] Kind of, because I wouldn't want to confuse location based with log storing, because you know, a location can be like an application like Foursquare, where users check in. So you don't have millions of check ins going on per minute right?

**Dimitri** [00:36:44] I mean you are starting out, you are not Foursquare, right?

**Thanasis** [00:36:48] But it might be one of those ride sharing apps that if you're the driver, you're sending data constantly for your position, crazy stuff millions of them.

**Dimitri** [00:36:59] Right, yeah that's more in the analytics field.

**Thanasis** [00:37:02] Because you mentioned Foursquare, have you seen that thing where you're walking around and it says, "oh! you're outside Public, do you want to check it out?".

**Dimitri** [00:37:13] Right, proximity queries. Yeah and that was it. I think we're done now. So thank you for listening.

**Thanasis** [00:37:28] If you find it helpful. It would be great if you get to choose one of these technologies. I think we've covered more than 95 percent of them.

**Dimitri** [00:37:42] So if you have any questions please e-mail us at [hello@listenshiprepeat.com](mailto:hello@listenshiprepeat.com). Thank you for listening.

**Thanasis** [00:38:03] And we'll see you next time.

**Dimitri** [00:38:04] Before that though, if you go on iTunes, please do rate us.

**Thanasis** [00:38:13] Yeah you don't have to write a review just pressing the star is nice. Any service that you got our podcast from has that. It makes us more eager than we already are to continue doing this and we thank you for that.

**Dimitri** [00:38:30] Thank you. Thank you very much. Goodbye.
