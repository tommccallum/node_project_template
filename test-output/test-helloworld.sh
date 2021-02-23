#!/bin/bash

# Testing hello world output
FILENAME=$(basename $0)
FILENAME_NOEXT=${FILENAME%.*}
ACTUAL="$FILENAME_NOEXT.actual"
EXPECTED="$FILENAME_NOEXT.expected"

npm run console > $ACTUAL
if [ $? -eq 0 ]; then
  diff $ACTUAL $EXPECTED > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    echo -e "${FILENAME}...\e[32mPassed\e[0m"
    rm -f $ACTUAL
  else
    echo -e "${FILENAME}...\e[31mFailed\e[0m (See ${EXPECTED} for more details.)"
  fi
fi

