"use strict";

var _getGifs = require("../../helpers/getGifs");

describe("Pruebas en getGifs", function () {
  test("Deberia retornar un array de 15 elementos", function _callee() {
    var gifs;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _getGifs.getGifs)("genos"));

          case 2:
            gifs = _context.sent;
            expect(gifs.length).toBe(15);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});