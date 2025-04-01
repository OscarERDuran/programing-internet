// Functions mapping to tool calls
// Define one function per tool call - each tool call should have a matching function
// Parameters for a tool call are passed as an object to the corresponding function

export const get_weather = async ({
  location,
  unit,
}: {
  location: string;
  unit: string;
}) => {
  console.log("location", location);
  console.log("unit", unit);
  const res = await fetch(
    `/api/functions/get_weather?location=${location}&unit=${unit}`
  ).then((res) => res.json());

  console.log("executed get_weather function", res);

  return res;
};

export const get_joke = async () => {
  const res = await fetch(`/api/functions/get_joke`).then((res) => res.json());
  return res;
};

export const getProducts = async (filters?: { categoria?: string; color?: string }) => {
  try {
    // Construir la URL con los filtros (si existen)
    const url = new URL("/api/functions/search", window.location.origin);

    if (filters?.categoria) {
      url.searchParams.append("categoria", filters.categoria);
    }

    if (filters?.color) {
      url.searchParams.append("color", filters.color);
    }

    // Llamar al endpoint de Next.js
    const res = await fetch(url.toString());

    // Verificar si la respuesta es exitosa
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    // Convertir la respuesta a JSON
    const data = await res.json();
    return data; // Retorna los productos en formato JSON
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const functionsMap = {
  get_weather: get_weather,
  get_joke: get_joke,
  getProducts: getProducts,
};
