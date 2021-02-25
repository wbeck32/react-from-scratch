# CODE CHALLENGE
### Matter Supply Co.
### Technologist (Web Technologies)


## Intro

The idea is that you display the skills required to build scalable frontend applications. In this code challenge, you will be asked to build a single page application in the framework React JS, consuming web services and building a presentable UI.

You will be required to make a trade-off between visual aesthetics, scalability, test coverage, and feature completeness. When we grade your code challenge, we will take that into account — none of your work gets discarded regardless if it was completed or not. We are aware that the time we propose for this code challenge is short to deliver a complete solution.

The first aspect that we pay attention to is the user experience: load times, clarity of interactions, thoughtful and well executed animations, as well as an eye for detail. We place a strong focus on quality and one major indicator of quality is the quality of the user interface.

The second aspect is the structure of your application. While this application doesn't necessarily warrant one of the big frameworks, we'd still like to see how you would implement this as part of a larger scale initiative if time permits. At Matter Supply, we're often tasked with architecting larger frontend initiatives.

The third aspect is testing. We're not looking for 100% coverage or much coverage at all. But we'd like to see how you fare in setting up basic testing structures.

We would love to get to know you in-depth, so feel free to provide us code samples of your work in addition to this challenge. Github repos or code snippets work just fine. Don’t hesitate to add your thoughts, as all is accountable for evaluation.

Overall, we expect you to document your work. A well documented approach in this instance is better than a complete solution as we want to understand your thinking process and your ability to work with others within a distributed team overseas.

## Challenge

We're transporting you back to the early 2000's – we're building a quick blog. We're asking you to build an application with two pages:

- Blog posts, to display a list blog posts and a short excerpt, and
- Post detail, to display a full blog post.

The backend for this blog are Github Gists. The idea is that you can enter  a username to look up on Github and the index page (blog posts) will display excerpts of all the user saved Gists. The post detail page will then display the full content of the gist.

Blog posts page must be searchable, and Post details page must be able to show its formatted Markdown as HTML in the case Gists content was saved with `.md` extension.

## Requirements

### Markup/UI implementation

Paying attention to details is important, so is using good UI patterns at the moment of implementing a design. In this repository you'll find some files to support your work on:

- Design: `/support-files/designs/`
- Fonts: `/support-files/fonts/`

You'll be challenged to implement a clean UX using those files to base your experience on.

### As a reader (non logged user)

- As a reader, I want to be able to see a list of blog posts that a writer has posted on Github in the form of Gists.
- As a reader, I want to be able to select a post on the index page and see the post details, it must be presented in HTML if Gist was a Markdown file.
- As a reader, I want to be able to navigate from post to post, easily reading the next post.
- As a reader, I want to be able to navigate back to the index page from a post so that I can select a different post to read.

### As awritter (logged in user)

- As a writer, I want to be able to post a Gist to Github and have that post show up on my blog so that a reader can read the new post.
- As a writer, I want to be able to make updates to a post by updating the Gist, so that I can correct typos and make content updates.

## Questions

- What are your thoughts around continuous integration, where & how you would deploy this application?
- What do you think you would do differently if you had 2 weeks to complete this assignment and no requirement to use Github. What would your backend solution look like?
- How and where do you feel like this application should be deployed to?
- Are you happy with your own solutions? If yes, which parts do you think are really well done, if not, what would you want to change?

## Delivery

Feel free to deliver this as your standard NPM/Yarn type of installation. Docker is fine as well. We expect delivery as a Zip file or from a public Git repository. (You can fork this repository as a starting point)

## Thanks

We really want to thank you for taking the time to run through this code challenge. We value your time immensely. If you have any suggestions as to how we could improve this exercise, please let us know.

Again, thanks! And happy coding :)
