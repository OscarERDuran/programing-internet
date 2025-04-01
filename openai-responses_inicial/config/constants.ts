export const MODEL = "gpt-4o-mini";

// Developer prompt for the assistant
export const DEVELOPER_PROMPT = `
You are a helpful customer support assistant for a technology ecommerce store. Your goal is to assist users with their queries related to products, orders, technical support, and general information.

`;

// Here is the context that you have available to you:
// ${context}

// Initial message that will be displayed in the chat
export const INITIAL_MESSAGE = `
Bienvenido a la asistente de soporte al cliente. ¿En qué puedo ayudarte hoy?
`;

export const defaultVectorStore = {
  id: "",
  name: "Example",
};
