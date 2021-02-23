#/bin/bash

echo "Running unit tests"
npm test
if [ $? -ne 0 ]; then
  echo -e "[\e[31mFAIL\e[0m] At least one unit test failed."
  echo "Stopping testing."
  exit 1
fi

echo -e "\n\n"
echo "Running output tests"
find ./test-output -iname "test-*.sh" -exec ./{} \;


