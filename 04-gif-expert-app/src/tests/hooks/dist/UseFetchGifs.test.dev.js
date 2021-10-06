"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _useFetchGifs = require("../../hooks/useFetchGifs");

// import React from 'react'
describe("Pruebas en el hook UseFetchGif", function () {
  test("Debe retornar el estado correctamente (vacio)", function _callee() {
    var _renderHook, result, waitForNextUpdate, _result$current, data, loading;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Usualmente se suele usar con desestructuracion
            _renderHook = (0, _reactHooks.renderHook)(function () {
              return (0, _useFetchGifs.useFetchGifs)("Palomo");
            }), result = _renderHook.result, waitForNextUpdate = _renderHook.waitForNextUpdate;
            _result$current = result.current, data = _result$current.data, loading = _result$current.loading; //Se limpia la respuesta del hook y su estado interno

            _context.next = 4;
            return regeneratorRuntime.awrap(waitForNextUpdate());

          case 4:
            expect(data).toEqual([]);
            expect(loading).toBeTruthy();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  test("Debe retornar un array de imagenes y el loading false", function _callee2() {
    var _renderHook2, result, waitForNextUpdate, _result$current2, data, loading;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //Usualmente se suele usar con desestructuracion
            _renderHook2 = (0, _reactHooks.renderHook)(function () {
              return (0, _useFetchGifs.useFetchGifs)("Palomo");
            }), result = _renderHook2.result, waitForNextUpdate = _renderHook2.waitForNextUpdate; //Prepara el estado del hook para recibir una actualizacion

            _context2.next = 3;
            return regeneratorRuntime.awrap(waitForNextUpdate());

          case 3:
            _result$current2 = result.current, data = _result$current2.data, loading = _result$current2.loading;
            expect(data.length).toEqual(15);
            expect(loading).toBeFalsy();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});