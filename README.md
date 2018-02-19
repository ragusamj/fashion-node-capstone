# fashion-node-capstone
# My Fashion Journal: Track your sales!

Track my sales! is an interactive full-stack web app that helps users track sales in beauty and fashion world. The app will help them save the promo codes, as well as locate the nearest store, or save the URL for online sales. This gives a user the opportunity to track sales of items they are inetrested in all in one place, instead of going to each store's website and putting items in shopping carts, and miss the sale because life gets in the way. The app has the option for the users to add the sale dates to their google calander for alerting.

<!--
## Screenshots
![Landing page screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl01.png)
![Account setup screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl02.png)
![User homepage screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl03.png)
![Achievement timeline screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl04.png)
![Skills word cloud screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl05.png)
-->

## Use Case
Track my sales is an app that helps user track various items as they go on sale.
This is a platform that helps you organize all the items that you wish to purchase in combination with the upcoming sale.

## Initial UX
User Stories
AS A VISITOR, NOT LOGGED IN

* As an initial visitor to the page, I want to land on the web page and see what the page is about so I can understand what the app is and does and decide whether or not to create an account to be able to use the app.
* As a visitor, I want to create a new account so that I can use the app, or to be able to log in if I am already registered.
(LANDING PAGE--wireframe will have title, logo, a few details about logging in and what the app is about)
![UI Flow handwritten draft](https://github.com/ragusamj/fashion-node-capstone/blob/master/github-images/fashion-node-landing.JPG)

* As a visitor, I want to be able to view a demo or read about/see how the app works so that I can decide if I want to sign up for an account. (LANDING PAGE plus DEMO?)

* As a visitor who has already created an account, I want to log in so that I can access my account.
![UI Flow handwritten draft](https://github.com/ragusamj/fashion-node-capstone/blob/master/github-images/fashion-node-login.JPG)
* If I do not have the account, I want to be able to register.
![UI Flow handwritten draft](https://github.com/ragusamj/fashion-node-capstone/blob/master/github-images/fashion-node-signup.JPG)
AS A LOGGED-IN USER

* As a user, I would lie to see a table that shows the items I have in line to purchase. I would like to see the categories such as: item, brand, store, sale starts, sale ends, link, etc.
![UI Flow handwritten draft](https://github.com/ragusamj/fashion-node-capstone/blob/master/github-images/fashion-node-tracksales.JPG)

* As a user, I want to set up my new account by organizing the items that I would like to purchase and to indicate the when the sale for that particular item starts and ends. I would like to add the expiration date to my google calendar to alert me. I would like to have an option to search my favorite stores near me.

![UI Flow handwritten draft](https://github.com/ragusamj/fashion-node-capstone/blob/master/github-images/fashion-node-additem.JPG)



## Working Prototype
Find a working prototype with Node at https://fashion-node-capstone.herokuapp.com/ .


## Functionality


## Technical


<h3>Front End</h3>
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>jQuery</li>
<!--<li>React</li>-->
</ul>
<h3>Back End</h3>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<li>Mongoose</li>
<li>mLab database</li>
<li>Heroku</li>
<li><a href="https://mochajs.org/">Mocha</a> and <a href="http://chaijs.com/">Chai</a> for testing</li>
</ul>
<h3>Responsive</h3>
<ul>
<li>The app is responsive and optimized for both desktop and mobile viewing and use.</li>
</ul>
<h3>Security</h3>
<ul>
<li>User passwords are encrypted using <a href="https://github.com/dcodeIO/bcrypt.js">bcrypt.js</a>.</li>
</ul>

## API Documentation
API endpoints for the back end include:
* POST to '/users/create' for creating a new user
* POST to '/signin' to sign in an existing user
* POST to '/new/create' to add an achievement to a user's list of accomplishments
* PUT to '/achievement/:id' to update an existing achievement
* GET to '/achievements/:user' to access all of a user's existing achievements
* GET to '/achievement/:id' to access a single achievement by ID
* DELETE to '/achievement/:id' to delete a single achievement by ID

## Development Roadmap
Planned additional features and improvements will allow users to:
* Be presented with motivational quotations that appear at random on their homepage.
* Enter and store compliments they receive from friends, co-workers, bosses, etc. in a "Bank"; and
* Refer back to these compliments (that help them to see that they are qualified and skilled) by viewing the "Bank."
* Change password
* Update email address
