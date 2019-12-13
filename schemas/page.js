export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'article',
      title: 'Article',
      type: 'array',
      of: [{type: 'reference', to: {type: 'article'}}]
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'array',
      of: [{type: 'reference', to: {type: 'mainImage'}}]
    },
    {
      name: 'codesample',
      title: 'Code Sample',
      type: 'array',
      of: [{type: 'reference', to: {type: 'component'}}]
    }
  ]
}