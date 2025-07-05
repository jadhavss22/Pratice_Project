

# Netflix GPT
  > Create React App
  > Configured TailwindCSS
  > Header
  > Routing
  > Login Form
  > Sign Up Form
  > Form Validation
  > useRef Hook
  > Firebase Setup
  > Deploying(Using Google Firebase) App to production follow below steps. 
    - npm i firebase
    - npm i -g firebase-tools
    - firebase login
    - firebase init
  After this command you have options choose **Hosting github option deploy** enter space bar and ENTER key then select **Use an existing project** after selecting your project 
     1. What do you want to use as your public directory? ---->  build
     2.Configure as single-page app ( rewrite all urls to /index.html)? -----> NO  
     3. Set up automatic build and deploy with Github ---> NO
     4.Before Deploy my project you need to Build your project ===> "npm run build"
     5.To deploy use command ==> "firebase deploy "
     6.In the terminal gives error as 
**Error:** It looks like you haven't created a Realtime Database instance in this project before. Please run "firebase init database" to create your default Realtime Database instance.

 `Solution:` To add file for firebase database configuration
    
    7.firebase init database command after this there are some questions
    i.You are initializing within an existing Firebase project directory? Are you ready to proceed --> Yes
    ? It seems like you haven’t initialized Realtime Database in your project yet. Do you want to set it up? 
  `-->`  Yes
    ? Please choose the location for your default Realtime Database instance:
     `asia-southeast1/Us`
    ? File No already exists. Do you want to overwrite it with the Realtime Database Security Rules for netflix-chatgpt-c29ad-default-rtdb from the Firebase console?
  `-->`  Yes



  > Create SignUp User Account
  > Implement Sign In User Api.
  > Created Redux Store with userSlice.
  > Implemented Sign Out.
  > Update Profile (added display Name and photo).
  > BugFix : Sign Up user displayName and profile picture update.
  > BugFix : If user not logged In redirect /browse to Login Page and vice-versa.
  > Unsubscribe to the onAuthStateChanged callback.
  > Add hardcoded values to the constant file.
  > Register TMDB API and create an app , get access token 
  > Get data from TMDB now playing movies list api.
  > Custom hooks for Now Playing Movie.
  > Create Movie slice Update store with movie data.
  > Planning for MainContainer and SecondaryContainer.
  > Fetch data and Update store with trailer video.
  > Embeded video make it autoplay and mute and tailwind classes for main container.
  > Build Secondary Component.
  > Build Movie List and Movie Card.
  > TMDB Image CDN URL.
  > Created Popular Movie Custom Hook.
  > GPT Search Page and Search bar with multi-language feature.(BONUS)
  > Get Open AI api key and GPT Search API call.
  > Fetched gptMovieSuggestion from TMDB.
  > Created gptSlice added data.
  > Reused MovieList component to make movie suggestion container.
  > Memoization
  > Added .env file and added to gitignore.
  > Make application Responsive


# Featurand 
  > Login / Sign Up 
    - Sign In / Sign Up form
    - Redeirects to Browse page

  > Browse ( after authentication )
    - Header
    - Main movie 
      * Movie Trailer in Background
      * Tiltle and Description 
      * Movie Suggestion 
          ~ Movie List * N

  > NetflixGPT 
    - Search Bar
    - Movie Suggestions

1.Paste three commands in vscode :
    git remote add origin git@github.com:jadhavss22/Netflix-GPT.git
    git branch -M main/Netflix-gpt
    git commit -m "code_desc"
    git push -u origin main/Netflix-gpt
Once you pushed all the code is comes in your repopsitory.
    To add userName ==> git config --global user.name "jadhavss22"
    To add email ==>    git config --global user.email "sarthaksjadhav3@gmail.com"



