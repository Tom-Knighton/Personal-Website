import { revalidateTag } from "next/cache";
import { CollectionConfig } from "payload";

export const Education: CollectionConfig = {
  slug: "Education",
  hooks: {
    afterChange: [
      () => {
        revalidateTag('payload');
      }
    ]
  },
  fields: [
    {
      name: "DegreeTitle",
      type: "text",
      required: true,
    },
    {
      name: "SchoolName",
      type: "text",
      required: true
    },
    {
      name: "Years",
      type: "text",
      required: true
    },
    {
      name: "Grade",
      type: "text",
      required: true
    },
    {
      name: "Details",
      type: "array",
      fields: [
        {
          name: "Text",
          type: "text"
        }
      ]
    },
    {
      name: "Image",
      type: "upload",
      relationTo: 'media'
    },
  ],
};
