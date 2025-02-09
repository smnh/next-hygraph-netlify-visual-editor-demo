import _ from 'lodash';
import { HygraphContentSource } from '@stackbit/cms-hygraph';
import { defineStackbitConfig, DocumentStringLikeFieldNonLocalized, SiteMapEntry } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '20',
    useESM: true,

    contentSources: [
        new HygraphContentSource({
            projectId: process.env.HYGRAPH_PROJECT_ID!,
            region: process.env.HYGRAPH_REGION!,
            environment: process.env.HYGRAPH_ENVIRONMENT!,
            contentApi: process.env.HYGRAPH_ENDPOINT!,
            managementApi: process.env.HYGRAPH_MANAGEMENT_API!,
            managementToken: process.env.HYGRAPH_MANAGEMENT_TOKEN!
        })
    ],

    modelExtensions: [
        {
            name: 'LandingPage',
            type: 'page'
        },
        {
            name: 'PostPage',
            type: 'page'
        }
    ],

    sitemap: ({ documents }) => {
        return documents.reduce(
            (sitemap: SiteMapEntry[], document): SiteMapEntry[] => {
                if (!['LandingPage', 'PostPage'].includes(document.modelName)) {
                    return sitemap;
                }
                const slugField = document.fields.slug as DocumentStringLikeFieldNonLocalized;
                if (!slugField) {
                    return sitemap;
                }
                const slugValue = _.trim(slugField.value, '/');
                const urlPath = document.modelName === 'PostPage' ? `/blog/${slugValue}` : `/${slugValue}`;
                sitemap.push({
                    urlPath: urlPath,
                    document: document
                });
                return sitemap;
            },
            [
                {
                    urlPath: '/blog',
                    label: 'Blog',
                    stableId: 'blog'
                }
            ]
        );
    }
});
