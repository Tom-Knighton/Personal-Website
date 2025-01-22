import { GlobalConfig } from "payload";

export const Skills: GlobalConfig = {
  slug: "skills",
  fields: [
    {
      name: "professional",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "hobby",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
