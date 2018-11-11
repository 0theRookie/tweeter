# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

You can post with a random ID, and your post will be saved to the database, allowing it to be reloaded even through server restart. Hovering over each message highlights it, and shows you a nice little kappa to keep your spirits high. 

*Posts cannot exceed the maximum of 140 characters.*
*Posts must have content to them to be posted.*

If these 2 requirements are not met, you will be met with an error and your post will not be saved. But the compose box will tell you that itself!

## Screenshots
!["See previous posts, loaded from database"]()


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- MongoDB
- Chance

