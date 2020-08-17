const ghpages = require('gh-pages');

ghpages.publish(
    // '__sapper__/export/regna-client',
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/regnaio/regna-client',
        user: {
            name: 'regnaio',
            email: 'gbzregna@gmail.com'
        },
        remove: '!.nojekyll'
    },
    () => {
        console.log('Deploy Complete!')
    }
)