  Insta Share App 
  https://vivekpinstashar.ccbp.tech/                                                


This Project is a Application which show up the Users Posts Where one can like the post or dislike the post which is like instagram clone like application

Here in this project It have routing pages which are at the paths and are with the functionalities and features described as follows:

1. **Login Route**

    At the **path** in url : "/login"

  - When an invalid username and password are provided and the Login button is clicked, then the respective error message received from the response will be displayed
  - When a valid username and password are provided and the Login button is clicked, then the page will be navigated to the Home Route
  - When an _unauthenticated_ user tries to access the Home Route, Profile Route, and User Profile Route, then the page will be navigated to the Login Route
  - When an _authenticated_ user tries to access the Home Route, Profile Route, and User Profile Route, then the page will be navigated to the respective route
  - When an _authenticated_ user tries to access the Login Route, then the page will be navigated to the Home Route

  Here in this Web Page the login Action is a API POST Method, So Access to Login is based on the response from the API POST method
  which is using the api url and path :  https://apis.ccbp.in/login 
        
     When an _authenticated_user gets the Access to the application then Rendered page at each Route have Header which performs some key functions at some Actions with the objects in Header which is described Under **Header** Section
     
 2. **Home Route**

  - When an _authenticated_ user opens the Home Route
         At the **path** in url : "/"
         
    This Web page rendered will have two sections Stories section and list of Users Posts section 

            - An HTTP GET request performed to **User Stories API URL** :   https://apis.ccbp.in/insta-share/stories  
                                               **Posts API URL**        :   https://apis.ccbp.in/insta-share/posts 
                                                ( with `jwt_token` in the Cookies)
            - Loader will be displayed while fetching the data
            - After the data is fetched successfully, the response received from Stories API will be displayed as the sliding elements at the upper section of the page
                                                      the response received from Posts API are being displayed as the list of Posts from all users at that section of page
                                                      
                       **Users Posts Functionalities and Features**

                     - When the **username** in the particular post is clicked, then the page is navigated to the **User Details Route**( see **User Details Route** section in this page )
                     - When the **Like** icon is clicked, it is registered using the API POST request to https://apis.ccbp.in/insta-share/posts/{postId}/like with `like_status` as `true`
                     - Now, the **Like** icon will change to **Unlike** Icon and Likes count of that particular post will be incremented by one
                    
                    - When the **Unlike** icon is clicked, it is registered using the API POST request to https://apis.ccbp.in/insta-share/posts/{postId}/like with `like_status` as `false`
                    - Now, the **Unlike** icon will change to **Like** Icon and Likes count of that particular post will be decremented by one            
                    
            - If the HTTP GET request made is unsuccessful, then a failure view displayed
            - When the **Retry** button at failure view is clicked, an HTTP GET request will be made to get the stories data at stories section and posts data at the lists of posts section one each seperately

 3. **User Profile Route**

  - When an _authenticated_ user opens the User Profile Route
          At the **path** in url : "/users/:id"
          
  The rendered Page at this route will show all the details of the user with the stories , posts, followings , followers and much other activities with the application 

    - An HTTP GET request should be made to the **User Profile API URL** : https://apis.ccbp.in/insta-share/users/{userId}  

      - **_Loader_** will be displayed while fetching the data
      - After the data is fetched successfully, the response received is displayed 
      - If the HTTP GET request made is unsuccessful, then the failure view  displayed
        - When the **Retry** button is clicked, an HTTP GET request made to the **User Profile API URL**
        - If the list of posts are empty, then the No Posts messaged View is displayed
        
4.**My Profile Route**

  - When an _authenticated_ user opens the My Profile Route
         At the **path** in url : "/my-profile"
  
  - An HTTP GET request is made to the **My Profile API URL** : https://apis.ccbp.in/insta-share/my-profile 
     
     - **_Loader_** will be displayed while fetching the data
      - After the data is fetched successfully, the response received is displayed 
      - - If the HTTP GET request made is unsuccessful, then the failure view  displayed
        - When the **Retry** button is clicked, an HTTP GET request made to the **My Profile API URL** 
        - If the list of posts are empty, then the No Posts messaged View is displayed
 
 5. **Not Found Route**

  - When a random path is provided in the URL, then the page is navigated to the Not Found Route



**Header**

    - When the Website logo is clicked, then the page navigates to the Home Route
    - When the **Home** link in the Header is clicked, then the page navigates to the Home Route
    - When the **Profile** link in the Header is clicked, then the page navigates to the My Profile Route
    
    **Search Functionality**
          - When user enters a text in the Search Field and clicks on the search button then all the posts with the caption contaning the entered text are rendered as the Search Results
                Here, An HTTP GET request will be made to the **Search Posts API URL** : https://apis.ccbp.in/insta-share/posts?search={searchInput}
                      A Loader view   will be displayed while fetching the data
                      After the data is fetched successfully, the response received is displayed 
                      If the HTTP GET request made is unsuccessful, then the failure view  displayed
                          When the **Retry** button is clicked, an HTTP GET request should be made to the **Search Posts API URL**
                      If there are no matched search results then a Search Not Found View displayed
                  
                  Here, All the Users Posts rendered will have all the features and functionalities which are described as **Users Posts Functionalities and Features** at Home route from line 36 to 42
    
    - When the **Logout** button is clicked, then the page should be navigated to the Login Route
    


Finally, Users are able to view this website responsively in mobile view, tablet view as well



### User Credentials 

<details>
<summary>Click to view user credentials</summary>

<br/>

**You can use any one of the following credentials**

```text
  username: aakash
  password: sky@007
```

```text
  username: agastya
  password: myth#789
```

```text
  username: advika
  password: world@5
```

```text
  username: binita
  password: modest*6
```

```text
  username: chetan
  password: vigor$life
```

```text
  username: deepak
  password: lightstar@1
```

```text
  username: harshad
  password: joy@85
```

```text
  username: kapil
  password: moon$008
```

```text
 username: rahul
 password: rahul@2021
```

```text
  username: shravya
  password: musical#stone
```

```text
  username: saira
  password: princess@9
```
  
  

  
  
  
  ** Third Party Package **
      - third party package used in designing this application is **React Slick**
  
  **React Icons Used **
   **BsHeart**, **FaRegComment**, **BiShareAlt**  at Users Posts as like, comment and share clickable objects  
  **BsGrid3X3** at posts head in my profile and user profile
  **BiCamera** for no posts view at my profile and user profile
  
