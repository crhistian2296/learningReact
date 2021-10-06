import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// import React from 'react'

describe("Pruebas en el hook UseFetchGif", () => {
  test("Debe retornar el estado correctamente (vacio)", async () => {
    //Usualmente se suele usar con desestructuracion
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Palomo"));
    const { data, loading } = result.current;
    //Se limpia la respuesta del hook y su estado interno
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Debe retornar un array de imagenes y el loading false", async () => {
    //Usualmente se suele usar con desestructuracion
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Palomo"));
    //Prepara el estado del hook para recibir una actualizacion
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toEqual(15);
    expect(loading).toBeFalsy();
  });
});
