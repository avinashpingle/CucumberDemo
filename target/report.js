$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/First.feature");
formatter.feature({
  "line": 1,
  "name": "This is my first feature",
  "description": "",
  "id": "this-is-my-first-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 383623,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "This scenario will add two numbers and display result",
  "description": "",
  "id": "this-is-my-first-feature;this-scenario-will-add-two-numbers-and-display-result",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I have a number 5",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I have a number 7",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Add two numbers",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Display Result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "Calculator.i_have_first_number(int)"
});
formatter.result({
  "duration": 200950668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "Calculator.i_have_first_number(int)"
});
formatter.result({
  "duration": 140880,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.add_two_numbers1()"
});
formatter.result({
  "duration": 34201,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.display_Result()"
});
formatter.result({
  "duration": 135249,
  "status": "passed"
});
formatter.before({
  "duration": 86683,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "add multiple numbers",
  "description": "",
  "id": "this-is-my-first-feature;add-multiple-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the following numbers:",
  "rows": [
    {
      "cells": [
        "5"
      ],
      "line": 13
    },
    {
      "cells": [
        "6"
      ],
      "line": 14
    },
    {
      "cells": [
        "7"
      ],
      "line": 15
    },
    {
      "cells": [
        "8"
      ],
      "line": 16
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "add all numbers",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Check if result is less than 20",
  "keyword": "And "
});
formatter.match({
  "location": "Calculator.the_following_numbers(Integer\u003e)"
});
formatter.result({
  "duration": 1803322,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.add_all_numbers()"
});
formatter.result({
  "duration": 71658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 29
    }
  ],
  "location": "Calculator.verifyResult(int)"
});
formatter.result({
  "duration": 2133206,
  "error_message": "java.lang.AssertionError: Result is not less than 20: Current result is: 26\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat stepDefinition.Calculator.verifyResult(Calculator.java:28)\n\tat ✽.And Check if result is less than 20(Features/First.feature:18)\n",
  "status": "failed"
});
});