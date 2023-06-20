# Saucedemo dummy app End-to-End tests

End to end tests for the Swag Labs purchase flow. 

Test cases cover the "happy path" of the purchase flow. Manual test cases can be found in the TESTCASES.md file. 
Suite contains page object models of each page under test, they can be found in cypress/pages. 
A couple of helpful utility functions for sorting/filtering tests can be found in cypress/utils. 

**One of the automation tests fails, and this is expected, since the application has a bug, which is described in the BUGREPORT.md file**

How to run:

1. Install docker https://docs.docker.com/get-docker/
2. Clone the repository
3. Navigate to project file and run


```
docker build -t saucedemo-tests . 

docker run saucedemo-tests
```

The test runner outputs a reports.html file which can be viewed afterwards. Enjoy! 
