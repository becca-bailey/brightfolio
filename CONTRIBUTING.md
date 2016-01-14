CONTRIBUTING.md
##Pull Request Workflow:
####By Jamie Runyan
*Check out a branch for your individual task.*​
git checkout -b task-name

*Work, work, work!
Then add your changes and commit.*
git add
git commit -m “Add a good commit message that explains what you are doing to other people who might look at it.

​*Pause. *​
​*Make sure you have the most updated files on your computer, so check out the team branch and pull down the team branch.*​
git checkout master
git pull origin master

​*Go back to your branch.*​
git checkout task-name

​*Merge what you just pulled down with your local branch. *​
git merge master

*If you have any conflicts, try to find the person/people whose work is overlapping with yours and go over the merge conflicts together.
    resolve merge conflicts*

​*Finally, from your task branch, add and commit and push the whole thing up to github.*​
git add & commit
git push origin task-name

​*Then, go to github and make the pull request. Ask a team member to make the request and look it over.*​
​*Make the base branch your team branch and compare it to the task-specific branch and merge*​
pull request
base branch  —> MASTER

​*On local machine*​
git checkout master
git pull origin master

​*From team-branch, delete local branch*​
git branch -d task-name

##Code Review:
Code will be reviewed by the first available team member.

##Code Style
- Styleguides
  - [AirBnB Ruby Styleguide](https://github.com/airbnb/ruby)
  - [AirBnB JavaScript Styleguide](https://github.com/airbnb/javascript)
