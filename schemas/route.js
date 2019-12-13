export default {
  name: 'route',
  title: 'Route',
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
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: {type: 'page'}
    },
    {
      name: 'child',
      title: 'Children',
      type: 'array',
      of: [{type: 'reference', to: {type: 'route'}}]
    },
  ]
}