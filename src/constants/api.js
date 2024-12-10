export const API = "https://vercelbackend-3.onrender.com";
export const APICategories = "https://vercelbackend-3.onrender.com/categories";
export const APIProducts = "https://vercelbackend-3.onrender.com/products";
export const APIPost = "https://vercelbackend-3.onrender.com/sale/send";
export const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      validation: {
        required: "Name is required",
        validate: (value) =>
          value.length > 3 || "The name min 4 characters",
      },
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Phone number",
      validation: {
        required: "Phone number is required",
        pattern: {
          value: /^[+]?[0-9]{9,14}$/,
          message: "Phone number (9-14 digits)",
        },
      },
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
          message: "Enter a valid email",
        },
      },
    },
  ];