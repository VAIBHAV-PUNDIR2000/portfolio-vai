export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Development", "Design", "Database"], layout: "radio" },
    },

    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
  ],
};
