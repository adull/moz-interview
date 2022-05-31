## Adlai's commentary

First things first - to get this running do your start `npm install` - there is a depencdency (esm), and then to run the solution do an `npm start`.

Second things second - my solution aims to be as readable and as easy to follow along as possible while sacrificing performance. When I was briefed about the assignment by David Overcash he mentioned to write code that would be easy to maintain - so I aimed to do that. I left in a couple commented out `console.logs` that personally helped me while working through the assignment -  it allowed me to take a large json object that was hard to read and broke it up into chunks that not only allowed me to make more sense of the data that I was working with but also allowed me to visually look at the data and figure out if my code was doing what it was supposed to do. Futher, if the requirements for the assignment change and I needed to access different parts of the json object, following the same principles of breaking the object up into an object with counts of grouped objects would allow for easy debugging by humans. I could probably have done some crazy es6 one liner with 12 array functions linked together but I think that wouldn't be as easy to make changes to in the future, especially for someone unfamiliar with the codebase. However a person who is new to the codebase could probably uncomment the code and see how my code makes it easy to access the parts of the json object that *they* need, and using the same methodology could quickly visually tell if the code that they're writing is returning all of the data that they need. 

Thanks for considering me for the role!

## Question
This question should take about 1-2 hours to solve. When you're done, email your source code and solution to us at takehome@moz.com. Even if you don't complete the solution in 2 hours, please email in your progress.

You will be given a large set of data with the following JSON format in `data.json`
```
{
  "idina_response":{
    "sources":[
      {
        "url":"example.com",
        "spam_score": 1,
        "matching_target_indexes":[
          0
        ],
        "matching_source_urls":[
          {
            "url":"example.com/news/current/",
            "page_authority":44
          }
        ],
        "domain_authority":95
      },
      // ...
    ]
  }
}
```
From this data we would like you to write code that produces two lists. The first will be the list of all the URLs that have a duplicate `spam_score`, and the second will be a list of all the URLs with a duplicate `domain_authority`.

Example: The following simplified data would return the following JSON object:

###### Example Data
```
{
  "idina_response":{
    "sources":[
      {
        "url":"example.com",
        "spam_score": 1,
        "domain_authority":95
      },
      {
        "url":"foo.com",
        "spam_score": 2,
        "domain_authority":100
      },
      {
        "url":"bar.com",
        "spam_score": 1,
        "domain_authority":100
      },
      {
        "url":"baz.com",
        "spam_score": 2,
        "domain_authority":12
      },
    ]
  }
}
```
###### Example output
```
{
  "duplicate_spam_scores": [
    "example.com",
    "bar.com",
    "baz.com"
  ],
  "duplicate_domain_authorities": [
    "foo.com",
    "bar.com"
  ]
}
```
