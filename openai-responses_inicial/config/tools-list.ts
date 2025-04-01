// List of tools available to the assistant
// No need to include the top-level wrapper object as it is added in lib/tools/tools.ts
// More information on function calling: https://platform.openai.com/docs/guides/function-calling

export const toolsList = [
  {
    name: "get_weather",
    description: "Get the weather for a given location",
    parameters: {
      location: {
        type: "string",
        description: "Location to get weather for",
      },
      unit: {
        type: "string",
        description: "Unit to get weather in",
        enum: ["celsius", "fahrenheit"],
      },
    },
  },
  {
    name: "get_joke",
    description: "Get a programming joke",
    parameters: {},
  },
  {
    "name": "getProducts",
    "description": "Fetches products based on optional filters for category and color",
    "strict": true,
    "parameters": {
        "categoria": {
              "type": "string",
              "description": "Category filter for products"
            },
            "color": {
              "type": "string",
              "description": "Color filter for products"
            },
          },
         
      },
];
