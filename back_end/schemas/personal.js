export default {
  name: "personal_info",
  title: "Personal_info",
  type: "document",
  fields: [
    {
      name: "Name",
      title: "Name",
      type: "string",
    },
    {
      name: "company_name",
      title: "companyName",
      type: "string",
    },
    {
      name: "image",
      title: "Image_url",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
