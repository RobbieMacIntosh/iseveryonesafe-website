#!/bin/bash

# Colours for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Colour

echo -e "${BLUE}Starting deployment process...${NC}\n"

# Check if there are any changes to commit
if [[ -z $(git status -s) ]]; then
    echo -e "${RED}No changes to commit.${NC}"
    exit 0
fi

# Show status
echo -e "${BLUE}Current changes:${NC}"
git status -s
echo ""

# Get commit message
if [ -z "$1" ]; then
    echo -e "${BLUE}Enter commit message:${NC}"
    read commit_message
else
    commit_message="$1"
fi

# Add all changes
echo -e "${BLUE}Adding all changes...${NC}"
git add .

# Commit changes
echo -e "${BLUE}Committing changes...${NC}"
git commit -m "$commit_message"

# Push to remote
echo -e "${BLUE}Pushing to GitHub...${NC}"
git push origin main

echo -e "${GREEN}✓ Deployment complete!${NC}"
echo -e "${GREEN}Vercel will automatically deploy your changes.${NC}"
