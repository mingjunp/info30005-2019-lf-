# info30005-2019-lf-
# Try [Click Here](https://polar-peak-30495.herokuapp.com/)


---
## Functions:
1. Sign up: This is a function for user to register an account for our website. User needs to create a username and a password, and then confirm the password. When user types the username, there is a function that will check whether this user has already existed, and will tell him/her “username exist, please try again.” When it is OK, there will be a green tick. And when the password and the confirm password is not the same, there will also be an reminder to tell users to consist their passwords. When user successfully login, he/she will be automatically logged in.

Login: This is a function for user to login to our website. User needs to input username and password. When username or password is wrong, he/she will be told “username or password error!”. When user successfully login, the login button will change to “hi, <username>”. And we also set cookie, the system will remember the login status for one day. When user close the website and open again within one day, he/she will always remain login status. User doesn’t need to login when they search a toilet or check details of it. Login request only in add comment, rating and add comments.

Models: user

Controllers: controller_users

Routers: 

//post user
 
router.post('/api/users/createUser', controller_users.createUser);

//user login

router.post('/api/users/login', controller_users.login);

//user logout

router.get('/api/users/logout', controller_users.logout);

//check login

router.get('/api/users/checkLogin', controller_users.checkLogin);

//check username

router.get('/api/users/checkUserName', controller_users.checkUserName);

2. Searching, checking details and adding comments about toilets :

The functionality enables users to search public toilets in Melbourne. On the homepage, users can view all the toilets on the Google map. They can type a location in the search box and then they can see the toilets near it. Besides, users can also select different filters: female, male, wheelchair, baby Facility. To see more information of one particular toilet, users can click the icon on the map, there will be a pop-up window to show some basic information about the toilet: name(the description of the address) and other facilities. They can then click the “open google map to go” , and it will jump up to the google map, and the destination will be the toilet address. If users want to check more details, they can just click it and then it will jump to a new page. Apart from the basic information, it will show pictures, the operator, facilities and comments. Users can also see the rating of the toilet at the top left of the page. Users can also add the toilet to their collection. The comments will display in a drag down window, user can click the Triangle to see all the comments or close them.

Model: toilet,like,review

Controllers: controller_toilets, controller_reviews, controller_likes

Routers: 

//load reviews of certain toilet

router.get('/api/reviews/getReviewsByToilet', controller_reviews.getReviewsByToilet);

//create toilet

router.post('/api/toilets/creatToilet', controller_toilets.creatToilet);

//find all toilet
router.get('/api/toilets/getAllToilets', controller_toilets.getAllToilets);

//find toilet by id

router.get('/api/toilets/getById', controller_toilets.getById);

// searching and sorting based on current location


router.get('/autoSearch', controller_toilets.autoSearch);

// based on searching box content & "Check Detail" linked

router.get('/contentSearch', controller_toilets.contentSearch);

// searching and sorting by key words

router.get('/keywordSearch', controller_toilets.keywordSearch);

##  Run
###  node app.js

## "dependencies":

###  "bcrypt": "^3.0.6",
###  "body-parser": "^1.18.3",
###  "connect-redis": "^3.4.1",
###  "cookie-parser": "^1.4.4",
###  "express": "^4.16.4",
###  "express-session": "^1.16.1",
###  "fuzzy-search": "^3.0.1",
###  "mongoose": "^5.5.0",
###  "mongoose-fuzzy-searching": "^1.0.4",
###  "multer": "^1.4.1",
###  "nodemon": "^1.18.11",
###  "path": "^0.12.7",
###  "pug": "^2.0.3"


## Team info
 
 | Team member  | Role      |
 | ------------ | --------- |
 | Mingjun Pan  | back-end  |
 | Siyuan Duan  | back-end  |
 | Yang Zhao    | front-end |
 | Jingwen Fu   | front-end | 
