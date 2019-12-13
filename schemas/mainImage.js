export default {
  name: 'mainImage',
  title: 'Main Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'imageFile',
      title: 'Image file',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text'
    }
  ]
}
