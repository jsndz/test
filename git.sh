#!/bin/bash

# usage: ./git-push.sh "Your commit message here"

# Check if a commit message was passed
if [ -z "$1" ]; then
  echo "❌ Error: No commit message provided."
  echo "Usage: ./git-push.sh \"Your commit message here\""
  exit 1
fi

echo "📁 Staging all changes..."
git add .

echo "✏️ Committing with message: \"$1\""
git commit -m "$1"

echo "🚀 Pushing to origin master..."
git push origin test

echo "✅ Done!"
