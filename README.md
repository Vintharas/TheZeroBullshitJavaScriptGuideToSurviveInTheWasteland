# The Zero Bullshit JavaScript Guide to Survive in the Wasteland

## Introduction

... *intro here muhahahaha* ...

## Get Started!

1. [Install node and npm](https://nodejs.org/en/)
2. Run `npm install`
3. Run `npm run simulation` to execute the codes
4. Demos 1 and 2 have source code in the repository, run `git tag` to see which demos are available
5. Checkout and specific samples. Ex: `git checkout 001-intro-to-classes`
    6. Run example `npm run simulation` (or `npm run run` with some of the first examples)

### Demo 1: Time to Gear Up! *or Object Oriented Programming (and more)*

You'll need to build some weapons if you want to survive in the radioactive wasteland:

1. Intro to Classes
    1. Constructors and Methods
    1. Modules
1. Template Strings
    1. Tags
1. Class Inheritance
    1. Super. Method extension and overriding
1. Class privacy by convention
1. Class Privacy with Symbols
1. Class Privacy with Closures
1. This
    1. Problems with this with async callbacks
    1. How does This work? 
    1. Fixing This issue with bind
    1. Fixing This issue with arrow functions (*beware)
1. Problems with this and with new

#### Learn More

* [What is ECMAScript](https://www.youtube.com/watch?v=UBmQpD2RrPU)
* [JavaScript Basics, A walkthrough of all JavaScript features more or less](http://www.barbarianmeetscoding.com/blog/2015/09/06/the-basic-ingredients-of-javascript-mancy-an-introduction-to-javascript-and-ecmascript-6-for-c-sharp-developers/)
* [OOP Introduction in JavaScript](http://www.barbarianmeetscoding.com/blog/2015/11/23/an-introduction-to-object-oriented-programming-in-javascript-for-c-sharp-developers/)
* [ES6 Classes](http://www.barbarianmeetscoding.com/blog/2015/12/20/white-tower-summoning-enhanced-the-marvels-of-es6-classes/)
* [Mimicking Classes in ES5](http://www.barbarianmeetscoding.com/blog/2015/12/14/white-tower-summoning-mimicking-c-sharp-classical-inheritance-in-javascript/)
* [Encapsulation and data privacy in JavaScript](http://www.barbarianmeetscoding.com/blog/2015/11/30/summoning-fundamentals-a-three-part-introduction-to-oop-in-javascript-encapsulation/)
* [Template strings](http://www.barbarianmeetscoding.com/blog/2015/10/19/mastering-the-arcane-art-of-javascript-mancy-for-csharp-developers-a-guide-to-strings-finding-the-right-words-and-proper-spell-intonation/)

### Demo 2: Find a Companion! *or Object Oriented Programming in a More JavaScript-y Way (and more)*

1. Introduction to Factories
1. When you use factories without *this*, you have no longer problems with callbacks
1. Composition with Factories using Mixins
1. You can also use Mixins with classes
1. Mixins, classes and prototypes
1. What's a prototype?

#### Learn More

* Other cool OOP paradigms with third party libraries
    * Stamps 
        * [Ultra Flexible JavaScript Object Oriented Programming With Stamps](http://www.barbarianmeetscoding.com/blog/2016/01/18/javascript-ultra-flexible-object-oriented-programming-with-stamps/) - [code sample](http://jsbin.com/duyelal/edit?js,console)
    * Traits 
        * [Safer JavaScript Object Composition With Traits and Traits.js](http://www.barbarianmeetscoding.com/blog/2016/01/04/safer-javascript-object-composition-with-traits-and-traits-dot-js/) - [code sample](http://jsbin.com/zareyu/edit?js,console)I
* Some Interesting Articles as reference
    * [Prototypical Inheritance](http://www.barbarianmeetscoding.com/blog/2015/12/07/summoning-fundamentals-a-three-part-introduction-to-oop-in-javascript-ii-inheritance/)
    * [Duck Typing or Polymorphism in JavaScript](http://www.barbarianmeetscoding.com/blog/2015/12/09/summoning-fundamentals-a-three-part-introduction-to-oop-in-javascript-for-csharp-developers-iii-polymorphism/)
    * [Object Composition with Mixins](http://www.barbarianmeetscoding.com/blog/2015/12/28/black-tower-summoning-object-composition-with-mixins/)
    * [The Basics of Objects in ES5 and ES6](http://www.barbarianmeetscoding.com/blog/2015/10/08/mastering-the-arcane-art-of-javascript-mancy-on-summoning-servants-and-critters-or-the-basics-of-objects/)

### Demo 3: Gather Provisions! *or Data Structures in JavaScript, iterators and Generators*

1. [Arrays all-in-one data structure](http://bit.ly/javascriptmancy-arrays)
1. [Maps](http://bit.ly/javascriptmancy-data-structures-maps)
1. [Sets](http://bit.ly/javascriptmancy-data-structures-sets)
1. [Enumerability](http://jsfiddle.net/vintharas/1j7m9eLh/) and [Iterability](http://jsfiddle.net/vintharas/tq93y7eg/) 
1. [Creating custom iterators](http://jsfiddle.net/vintharas/jd9vs611/)
1. [Creating custom iterators more easily with generators](http://jsfiddle.net/vintharas/o1bgt628/)
1. [Use generators to create infinite sequences](http://jsfiddle.net/vintharas/wkb96j00/)

### Demo 4: Boost your Intelligence! *or Functional Programming in JavaScript*

1. [JavaScript has LINQ!](http://jsfiddle.net/vintharas/rpgu6dqj/)
1. [You can implement LINQ with deferred execution if you use generators](http://jsfiddle.net/vintharas/716k6tx2/)
1. With Segway into First-class functions and High-order functions (explain)
1. [Functional programming and Decorator functions and ES8? ES9? decorators](http://bit.ly/javascriptmancy-fp-create-abstractions)

#### Learn More

* Alternatives to `Array.prototype` with extended functionality and tons of useful functions:
    * [lodash](https://lodash.com/)
    * [underscore](http://underscorejs.org/)
    * [linq.js](https://linqjs.codeplex.com/)

### Demo 5: Async

1. Callbacks
    1. [Callbacks don't compose](https://github.com/mattdesl/promise-cookbook#the-problem)
1. [Promises](http://bit.ly/javascriptmancy-async-promises-kittens)
    1. <a href="http://bevacqua.github.io/promisees/#">PROMIsees visualization tool</a>
    1. <a href="http://bevacqua.github.io/promisees/?utm_content=buffer61cc7&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer#code=%2F*%0A%0AAsync+with+Promises%0A%0ALike+Tasks+in+.NET%0A%0A*%2F%0A%0Aconst+catImage1+%3D+'http%3A%2F%2Fwww.vetprofessionals.com%2Fcatprofessional%2Fimages%2Fhome-cat.jpg'%3B%0Aconst+catImage2+%3D+'https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTKb20tUARmw8yTaDOlrHmVBLNcN3v7vxZWI1kIBUlI-tnujZKY'%3B%0Aconst+catImage3+%3D+'https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQH5PcQiiy8fBHAlyw5eY_GA448Qq94XG2oxsiX1fflI233I01b'%3B%0Aconst+catImage4+%3D+'http%3A%2F%2Fwww.holidaycat.cz%2Fwp-content%2Fuploads%2F2015%2F05%2FLeo.jpg'%3B%0A%0Afunction+loadImage(url%2C+delay%3D1000)+%7B%0A++return+new+Promise((resolve%2C+reject)+%3D%3E+%7B%0A++++let+image+%3D+new+Image()%3B%0A%0A++++image.onload+%3D+function()+%7B%0A++++++%2F%2F+setting+a+timeout+so%0A++++++%2F%2F+we+can+see+how+they+load%0A++++++setTimeout(_+%3D%3E+resolve(image)%2C+delay)%3B%0A++++%7D%0A%0A++++image.onerror+%3D+function()+%7B%0A++++++let+message+%3D%0A++++++++'Could+not+load+image+at+'+%2B+url%3B%0A++++++reject(new+Error(message))%3B%0A++++%7D%0A%0A++++image.src+%3D+url%3B%0A++%7D)%0A%7D%0A%0Alet+addImg+%3D+(src)+%3D%3E+%7B%0A++let+imgElement+%3D%0A++++document.createElement(%22img%22)%0A++imgElement.src+%3D+src%0A++imgElement.width+%3D+100%3B%0A++%0A++let+parentElem+%3D+document.querySelector(%22body%22)%3B%0A++parentElem.appendChild(imgElement)%0A%7D%0A%0A%2F*+Concatenating+promises+*%2F%0A%0Aconst+whenFirstImageIsLoaded+%3D+loadImage(catImage1)%3B%0A%0AwhenFirstImageIsLoaded%0A++.then((img)+%3D%3E+%7B%0A+++++addImg(img.src)%3B%0A++%0A+++++%2F%2F+return+promise%0A+++++return+loadImage(catImage2)%3B%0A%7D%2C+(err)+%3D%3E+console.log(err.message))%0A++.then(img+%3D%3E+%7B%0A+++++%2F%2F+it's+unwrapped!!!%0A+++++addImg(img.src)%3B%0A%7D)%3B%0A%0A%2F*+Composing+promises+with+Promise.all+*%2F%0A%2F*%0Aconst+whenAllImagesAreLoaded+%3D+Promise.all(%5B%0A++loadImage(catImage1%2C+1000)%2C%0A++loadImage(catImage2%2C+2000)%2C%0A++loadImage(catImage3%2C+2500)%2C%0A++loadImage(catImage4%2C+1000)%2C%0A++%2F%2FloadImage('hahaha.jpg')%0A%5D)%3B%0A%0AwhenAllImagesAreLoaded.then((images)+%3D%3E+%7B%0A++images.forEach(img+%3D%3E+addImg(img.src))%3B%0A++return+images%3B%0A%7D).catch((error)+%3D%3E+%7B%0A++%2F%2F+handle+error+later%0A++console.log(error.message)%3B%0A%7D).then((images)+%3D%3E+console.log(images.map(i+%3D%3E+i.src).join('%2C')))%3B%0A*%2F">PROMIsees visualization with example kittens</a>
    1. [Promises diagram](https://mdn.mozillademos.org/files/8633/promises.png)
1. Async/Await
    1. [Check demo](http://bit.ly/javascriptmancy-async-await) but run on babel REPL (it requires experimental flag on)
1. Observables and rx.js
    1. [Marble diagrams with RxMarbles](http://rxmarbles.com/)
    1. [Rxjs demo](http://jsfiddle.net/vintharas/7nrn8smy/)
    1. [Rxjs another demo](http://jsfiddle.net/1001monkeys/tbb0k5es/)

#### Learn more

* [A great introdution to promises in JavaScript](https://github.com/mattdesl/promise-cookbook#the-problem)
* [A great introduction to Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
* [Writing marble tests](https://github.com/ReactiveX/RxJS/blob/master/doc/writing-marble-tests.md)

### Demo 6: Modules

1. A Brief History of Modules in JavaScript
    1. From script files, IIFEs, module patterns, AMD, commonJS to ES6 modules
    1. The current landscape

### Demo 7: Tooling and Community

1. Languages and transpilers: ES6/Babel, TypeScript, CoffeeScript, SASS, LESS, post-CSS, Stylus, HAML, etc, etc
1. Package managers: npm, bower, jspm
1. Scaffolding: yo
1. Task managers: Gulp
1. Bundlers and module loaders: gulp plugins, browserify, webpack, SystemJS
1. Linters: ESLint
1. Automated Testing
1. Chrome Dev Tools
1. Tools around frameworks!!
    1. think about cool examples: Redux, cycle.js, ionic, ember, etc
    1. [Cycle.js visualization tool](https://glebbahmutov.com/draw-cycle/)
1. Text editors and IDEs
1. Community
    1. GitHub
    1. CodePen, JsFiddle, JsBin, Plunker, etc

### Demo 8: Lessons Learned

* **Be disciplined**. Just because you can do virtually anything you want with JavaScript doesn't mean that you should. Follow the same good programming practices you are accustomed from writing C#: small classes, factories, modules that do one thing, hide the implementation details, provide small, intentional, self-explanatory APIs, etc. Everything you've learned about how to write good C# programs applies to JavaScript.
* **Be consistent**. JavaScript gives you a lot of freedom and doesn't impose a lot of design decisions upon you. That means that it is up to you to decide how you're gonna architect your application, how you are going to represent your domain objects, etc. Decide early on whether you want to use classes, object literals, factories, stamps, traits and be consistent. This will result in a more readable and maintainable code base
* **Empoyer yourself with good tooling** to cover for JavaScript weaknesses. Tools like a good linter will avoid a lot of grief in runtime exceptions.
* **Automate away stuff**. Have a bias for automation, there's a lot of thing in JavaScript and front-end development that you can automate. Code styling tools like `jscs` and linters like `eslint` will take off the burden of remembering the styling rules of your project from your shoulders so you can focus in adding value. Using `gulp` and the hst of plugins availale in its ecosystem will also save you a ton of time from adding CSS vendor prefixes, manually optimizing the size of your images, etc, etc. Whenever you see yourself doing the same thing over and over, automate it.
* **Take advantange of the community**. JavaScript has a thriving ecosystem and a bias for sharing code and doing open source. Take advantage of the work of others using [GitHub](http://www.github.com), [Npm](https://www.npmjs.com/), [Bower](http://www.bower.io), [Yo](http://yeoman.io/). Not only in the sense of using libraries in your project but also learning from the work of others by reading their source code.
* **Beware of closures**. *Closures* are super useful when implementing data privacy or high-order functions but they can get out of hand very easily. Remember that defining a closure makes the function depend of a free-variable, which in turns makes your closure function non-deterministic and subject to changing based on the value of this enclosed variable, it's basically something akin to using a global variable. It also makes your code harder to reuse because extracting a closure that depends of an enclosed variable outside of the context in which the variable is defined will break your function automatically. Because of that, you need to be very mindful when using closures, limit their usage an scope to very small regions of code. That will make your code easier to reuse and dealing with closure-related bugs much easier (you have a smaller region to debug).
* **Learn to deal with "Null Reference Exceptions"**. Null reference exceptions are by far the most common problem you'll encounter in JavaScript programs: `undefined is not a function` and `Cannot set property 'cucumber' of undefined`. Don't freak out, if you use a modular application and good dev tools you'll be able to fix the issue within seconds. Use good linting tools to catch misspellings before they crash your program.
* Get a lot of **feed-forward** to help you diagnose bugs and ensure the quality of your code using automated testing and logging
* Get a lot of **feed-back** for the same reason, also with automated tests, logging and using the amazing dev debugging tools available to us today (like for instance Chrome Dev Tools debugger).
* **Don't be drown by the hype**. The JavaScript ecosystem is in constant evoluation and there's new frameworks and patterns appearing every day. Know a little about everything and a lot about one thing. (f.i. know what React is, why it's good, what rx.js is, what's good for but know angular really well - or vice versa)
* **Start using ES6 today!**. ES6 is going to make your code much more consistent because it provides a lot of native support for things that we use to make up ourselves. Take advantage of either ES6 or TypeScript now!

## Want to learn more JavaScript and ES6?

* Check Barbarian Meets Coding exhaustive [JavaScript](http://www.barbarianmeetscoding.com/blog/categories/javascript/) and [ES6](http://www.barbarianmeetscoding.com/blog/categories/es6/) articles
* [JavaScript docs about everything (even web apis) at Mozilla Developer Network MDN]()
* And [ES6 Overview in 350 Bullet Points](https://ponyfoo.com/articles/es6)
* And do some [ES6 Katas](http://es6katas.org/) to get some practice

