export default {
  name: "projects",
  //for commit
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "project_name",
      type: "string",
      title: "Project Name",
    },
    {
      name: "project_image",
      type: "image",
      title: "Project Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
