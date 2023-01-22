#!/bin/bash
set -eux

echo "Issue number: $1"
echo "Issue title: $2"
echo "User login: $3"
echo "User ID: $4"

# git config
git config --global user.name 'github-actions[bot]'
git config --global user.email 'github-actions[bot]@users.noreply.github.com'

# Checkout to new/existing branch
BRANCH_NAME="bot-$1"
{
  git fetch origin $BRANCH_NAME;
  git checkout $BRANCH_NAME;
} || {
  git checkout -b $BRANCH_NAME;
}

# Update templates
cd package
BOT_RUN_LOG=$(npm run issuebot)
cd ..

# Commit
rm ./package/issuebot/issue.json
git add .
git commit -m "#$1 $2

Co-authored-by: $3 <$4+$3@users.noreply.github.com>"

# Build to check
cd package
CI='' npm run build

# Generate review url
GITHASH=$(git log -n 1 --pretty=%H)
AFFECTED_FILES=$(echo $BOT_RUN_LOG | grep --color=never "AFFECTED_FILES")
node ./issuebot/generate-review-url.js "$GITHASH" "$AFFECTED_FILES" >> $GITHUB_OUTPUT

# Push
git push --set-upstream origin $BRANCH_NAME
