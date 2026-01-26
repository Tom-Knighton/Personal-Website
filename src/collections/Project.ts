import { CollectionConfig } from "payload";

export const Project: CollectionConfig = {
  slug: "Project",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "pills",
      type: "array",
      fields: [
        {
          name: "text",
          type: "text",
        },
      ],
    },
    {
      name: "gitHubLink",
      type: "text",
    },
    {
      name: "sortOrder",
      type: "number",
    }
  ],
};
