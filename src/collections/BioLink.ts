import { revalidateTag } from "next/cache";
import { CollectionConfig } from "payload";

export const BioLink: CollectionConfig = {
  slug: "BioLink",
  hooks: {
    afterChange: [
      () => {
        revalidateTag('payload');
      }
    ]
  },
  fields: [
    {
      name: "Link Url",
      type: "text",
      required: true,
    },
    {
      name: "Logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "Background Color Hex",
      type: "text",
      defaultValue: "#ffffff"
    },
    {
      name: "Text Color Hex",
      type: "text",
      defaultValue: "#000"
    },
    {
      name: "Display Text",
      type: "text",
      required: false,
    },
    {
      name: "Link Type",
      type: "select",
      options: ["primary", "secondary"],
    }
  ],
};
