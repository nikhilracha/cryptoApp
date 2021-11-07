# cryptoApp

This is a React application.

### Make sure you have node and npm installed on your machine before starting the project.

Start the project:

1) First install all the dependencies by running command within this directory.
 ```bash
 npm install
 ```

2) To start the application, run the following command: 
```bash
npm start
```

* This app is powered by the node-express server which returns all the real-time prices of the Crypto prices.

* Link of the server: https://github.com/nikhilracha/cryptoserver

Questionnaire:

1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
* Ans: For the third-party APIs like coinbase, binance and kucoin, usually we need to use API keys but instead of creating multiple keys, I did hit their endpoints directly. 

2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
* Ans: I don't think I over-designed much. I just added 'Last updated' feature so that the user can be clear about the prices.

3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
* Ans: My idea would be dividing the API's of my node server and making them into Lambda functions and deploy them to the any cloud so that they can scale higher.

4. What are some other enhancements you would have made, if you had more time to do this implementation
* Ans: I would first start to focus and improve the UI/UX part. I really wanted to implement the recommendation feature for the user. 
