import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://us-west-2.cdn.hygraph.com/content/cm6xqnyhe01gx07weziogjv05/master',
    documents: 'src/utils/graphql-queries.ts',
    generates: {
        './src/utils/schema.graphql': {
            plugins: ['schema-ast'],
            config: {
                includeDirectives: true,
                includeIntrospectionTypes: true,
                commentDescriptions: true,
                sort: true
            }
        },
        './src/utils/graphql-types.ts': {
            plugins: ['typescript', 'typescript-operations']
        }
    }
};

export default config;
