import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Obtener los parámetros de consulta (query parameters)
    const { searchParams } = new URL(request.url);

    // Construir la URL de la API RESTful con los parámetros de consulta
    const apiUrl = new URL("http://localhost:8080/productos/");
    searchParams.forEach((value, key) => {
      apiUrl.searchParams.append(key, value);
    });

    // Llamar a la API RESTful
    const response = await fetch(apiUrl.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Obtener los datos de la respuesta
    const data = await response.json();

    // Devolver los productos filtrados
    return NextResponse.json({ productos: data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching productos:", error);
    return NextResponse.json(
      { error: "Could not fetch productos" },
      { status: 500 }
    );
  }
}