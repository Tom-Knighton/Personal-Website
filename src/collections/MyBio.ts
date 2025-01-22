import { GlobalConfig } from "payload";

export const MyBio: GlobalConfig = {
    slug: 'bio',
    fields: [
        {
            name: 'shortBioText',
            type: 'richText',
            required: true,
        },
        {
            name: 'profileImg',
            type: 'upload',
            required: true,
            relationTo: 'media',
        },
        {
            name: 'longBioText',
            type: 'richText',
            required: false
        },
        {
            name: 'contactEmail',
            type: 'text',
            required: true
        }
    ]
}