export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6000b388b626db4fd72a890c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gpoyjh72',
                  apiId: 'a643f368-e497-4288-bf07-1af5e31d39e1'
                },
                {
                  buildHookId: '6000b388f968984aa8183463',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1gtujoi8',
                  apiId: '7f4da147-b0fe-45e1-a4ff-5139f94eef9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cdlangen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1gtujoi8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
