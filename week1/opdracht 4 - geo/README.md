### Course: Minor Web App From Scratch
Creating a web app from scratch in HTML, CSS &amp; JS for the minor Web Development.

# Pros and cons for using JS frameworks & libraries.
Using frameworks & libraries is faster, cheaper and, some of the time, easier. Why should or shouldn't we use a framework like jQuery or Angular?


## Pros
* They offer a more responsive user experience. JS frameworks load in portions when the user interacts with them. This speeds up the responsiveness of the user interface *(Hannah, 2015)*.
* Stable code base & a good set of features to begin with = less work *(Uzayr, 2016)*.
* You don't have to bother with cross-browser compatibility, security flaws in code, namespaces and core functions, etc. All of that is taken care of by the framework itself *(Uzayr, 2016)*.
* Quality of code is good *(Uzayr, 2016)*.
* Security issues, bug fixes, version updates etc. are handled better because there's a bigger team of contributers *(Uzayr, 2016)*.
* Efficiency, security, cost, support. *(1stwebdesigner,2015)*.
* JS frameworks help you out by abstracting hard & complex code *(Darveau, 2016)*.
* JS frameworks help you ship code faster and increase development velocity *(Darveau, 2016)*.
* JS frameworks force you to focus on your app's value rather than its implementation *(Darveau, 2016)*.

## Cons
* Frameworks are heavier, when doing a smaller project you don't need it *(Uzayr, 2016)*.
* You learn the framework, not the language *(1stwebdesigner,2015)*.
* Frameworks core behavior cannot be changed *(1stwebdesigner,2015)*.
* The framework is public, which could lead to security problems *(1stwebdesigner,2015)*.
* When something goes really wrong with your framework only a deep knowledge of vanilla JavaScript can save you *(Darveau, 2016)*.
* What happens if you have multiple projects with different frameworks? *(Darveau, 2016)*.
* Setteling on a framework affects __every single upcoming enginering decision__ *(Darveau, 2016)*.
* Frameworks are subject to time, when you've just finished learning one, a new one arrives *(Darveau, 2016)*.

We should learn vanilla JavaScript to make ourselves not only understand the inner workings of our frameworks better but also to help with every new framework we want to learn. More than 10 JS frameworks have made the news in the past 5 years *(Darveau, 2016)*, how many will follow? It will be hard to keep up with the technology with no solid base knowledge of JS.
  
  
# Pros & cons of a single-page web app 
In this minor course we're going to create a single-page web app. What are the pros & cons about applying this way of developing applications?
In the early days of the Internet, most web sites consisted of largely static pages filled with content but expecting minimal interactions from the end user. As the Internet grew over the past few decades, however, many web sites began seeking ways to interact with their users; creating a more streamlined and fluid user experience for these interactions. To this effect IFrames were created to allow small modules of content to be dynamically loaded without requiring a reload of the entire web page. Shortly after this, the Ajax specification was adopted as an enhanced method of implementing web applications that could maintain their current state while still communicating with a server in the background. This ability to dynamically load content and modify the state of the page without actually requiring a new page to be loaded led into the design of Single-Page Applications, or SPAs *(Ingram-Westover, 2015)*.

## Pros
* More fluid user experience *(Ingram-Westover, 2015)*.
* No page reloads, no extra waiting time *(Skólski, 2016)*.
* Easier for the user *(Skólski, 2016)*.
* When loaded it's fast *(Skólski, 2016)*.
* Easy to debug with Chrome, through network operations monitoring *(Skólski, 2016)*.
* Easier to turn into a native app, backend can be reused *(Skólski, 2016)*.

## Cons
* Tend to be slower on initial page load because they require loading the framework and the application code prior to rendering the required view in the browser. *(Ingram-Westover, 2015)*.
* Old browsers might get lost and won't be able to go back or forward anymore *(Ingram-Westover, 2015)*.
* More work and harder to maintain when working in a team *(Ingram-Westover, 2015)*.
* SEO optimization is very hard *(Skólski, 2016)*.
* JavaScript has to be enabled, no progressive enhancement *(Skólski, 2016)*.
* Less secure than 'traditional applications'* (Skólski, 2016)*.

SPA's are really not progressively enhanceable to work in older browsers, they do however give a very nice user experience. It's hard to maintain in a team, because of it's very intricate structure. Initial loading time is pretty long but when it's loaded the app has no loading time at all anymore.

## Sources
* 1stwebdesigner. (2015, 28 mei). __Web Frameworks: Pros And Cons Of Using Frameworks.__ Geraadpleegd van http://1stwebdesigner.com/web-frameworks/
* Darveau, F. X. (2016, 18 augustus). __Yes, You Should Learn Vanilla JavaScript Before Fancy JS Frameworks.__ Geraadpleegd van https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks
* Hannah, J. (2015, 09 april). __Choosing the Right JavaScript Framework for the Job.__ Geraadpleegd van https://www.lullabot.com/articles/choosing-the-right-javascript-framework-for-the-job
* Ingram-Westover, A. (2015, 10 juni). __Technically Speaking: The Pros and Cons of Single Page Applications (SPAs).__ Geraadpleegd van https://www.dialogtech.com/blog/technically-speaking/technically-speaking-the-pros-and-cons-of-single-page-applications-spas
* Skólski, P. (2016, 1 december). __Single-page application vs. multiple-page application.__ Geraadpleegd van https://neoteric.eu/single-page-application-vs-multiple-page-application
* Uzayr, S. (2016, 26 januari). __JavaScript Frameworks: To Use or Not To Use?__ Geraadpleegd van http://www.noupe.com/development/javascript-frameworks-94897.html
