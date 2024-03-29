#!/bin/bash
set -eux

echo "Issue number: $ISSUE_NUMBER"
echo "Issue title: $ISSUE_TITLE"
echo "User login: $USER_LOGIN"
echo "User ID: $USER_ID"

# git config
git config --global user.name 'github-actions[bot]'
git config --global user.email 'github-actions[bot]@users.noreply.github.com'

# Checkout to new/existing branch
BRANCH_NAME="bot-$ISSUE_NUMBER"
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
git add .
git commit -m "#$ISSUE_NUMBER $ISSUE_TITLE" --author="$USER_LOGIN <$USER_ID+$USER_LOGIN@users.noreply.github.com>"

# Build to check
cd package
CI='' npm run build

# Generate review url
GITHASH=$(git log -n 1 --pretty=%H)
AFFECTED_FILES=$(echo $BOT_RUN_LOG | grep --color=never "AFFECTED_FILES")
node ./issuebot/generate-review-url.js "$GITHASH" "$AFFECTED_FILES" >> $GITHUB_OUTPUT

# Push
git push --set-upstream origin $BRANCH_NAME
