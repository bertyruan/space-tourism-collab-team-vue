# space-tourism-collab-team-vue

## git branch strategy

When working in a team, first push your changes in your own branch.

1. `git checkout main && git pull`
2. `git checkout -b {your-name}/{your-feature}`
   i.e. `git checkout -b albert/home-page`
3. add some code. after that,
4. `git add . && git commit -m {your-commit-message}`
5. `git push --set-upstream origin {your-name}/{your-feature}`

Once your changes are finished, merge your branch into `main`. If there are any merge conflicts, please reach out to the slack channel for help

1. `git checkout main && git pull`
2. `git merge {your-name}/{your-feature}`
3. `git push`
