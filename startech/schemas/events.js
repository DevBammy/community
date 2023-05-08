// Community
export default {
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 90,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'string',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
  ],
}
