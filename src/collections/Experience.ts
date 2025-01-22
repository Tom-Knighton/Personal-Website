import { GlobalConfig } from "payload";

export const Experience: GlobalConfig = {
  slug: "experience",
  fields: [
    {
      name: "experience",
      type: "array",
      fields: [
        {
          name: "company",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "years",
          type: "text",
          required: true,
        },
        { name: "side", type: "select", options: ["left", "right"] },
      ],
    },
  ],
};
