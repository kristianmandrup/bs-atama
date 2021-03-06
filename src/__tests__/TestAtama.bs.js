// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Atama = require("atama");

describe("Atama", (function () {
        Jest.test("#stream", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (param) {
                                          Atama.listen((function (param) {
                                                  console.log("listened");
                                                  return /* () */0;
                                                }));
                                          return /* () */0;
                                        });
                                    }))));
              }));
        Jest.test("#connect", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return Atama.connect(/* record */[/* name */"John"]);
                                    }))));
              }));
        Jest.test("#merge", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      var onAdd = function (msg) {
                                        console.log(msg);
                                        return /* () */0;
                                      };
                                      return (function (param) {
                                          return Atama.merge(/* record */[/* name */"John"], onAdd);
                                        });
                                    }))));
              }));
        Jest.test("#merge", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      var callbackFn = function (msg) {
                                        console.log(msg);
                                        return /* () */0;
                                      };
                                      return Atama.freeze(/* record */[/* name */"John"], callbackFn);
                                    }))));
              }));
        return Jest.test("#history", (function (param) {
                      return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                            return Atama.history();
                                          }))));
                    }));
      }));

/*  Not a pure module */
