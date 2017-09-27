var swolemates = [
  {
  "name":"Haley",
  "photo":"https://skirtday.files.wordpress.com/2012/11/1210606452243-gym-chick.jpg?w=320",
  "scores":[
     5,
     1,
     4,
     3,
     5,
     1,
     2,
     5,
     2,
     1
      ]
  },
  {
  "name":"Cewek",
  "photo":"https://pbs.twimg.com/profile_images/658555818879528960/cvf9rezJ_400x400.jpg",
  "scores":[
     4,
     2,
     3,
     4,
     2,
     1,
     2,
     1,
     4,
     4
      ]
},
{
  "name":"Lukas",
  "photo":"https://i.imgur.com/vBJMI9s.jpg",
  "scores":[
     4,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Mandy",
  "photo":"https://i.pinimg.com/736x/fa/11/ab/fa11ab4a3a900ba4eafeb093d928ff86--dolphins-cheerleaders-dallas-cowboy-cheerleaders.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     2,
     3,
     2,
     1,
     4
      ]
},
{
  "name":"Jon",
  "photo":"http://www.hdtvsolutions.com/images/articles/MadMen_JH2.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     5,
     3,
     4,
     5,
     5
      ]
},
{
  "name":"Todd",
  "photo":"http://www.suave.com/Images/2072/2072-665335-Category%20Hero%20Images_Mens.png",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     3,
     3,
     2,
     4,
     2
      ]
},
{
  "name":"Magdelena",
  "photo":"http://www.rippedmass.org/forums/attachments/members-pictures/1304d1414763129-hot-chick-gym-beautiful-girl-working-out.jpeg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     3,
     4,
     1,
     2
      ]
},
{
  "name":"Collin",
  "photo":"https://image.afcdn.com/story/20140611/hot-guy-at-the-gym-258092_origin.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     3,
     4,
     1,
     4
      ]
},
{
  "name":"Will",
  "photo":"https://www.360nobs.com/wp-content/uploads/2016/01/man.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     3,
     4,
     3,
     1
      ]
},
{
  "name":"Pasquale",
  "photo":"https://www.unilad.co.uk/wp-content/uploads/2017/03/961-10978677_10203735284326357_2632385941701358901_n.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     3,
     2,
     4,
     1
      ]
}
]

module.exports = swolemates;





// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, 
//      question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! 
//      Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.


// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match. 
