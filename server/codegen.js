// Workaround on esmodule error as per: https://lightrun.com/answers/dotansimha-graphql-code-generator-using-codegents-in-an-esm-project-causes-cosmiconfig-typescript-loader-to-throw-an-es-modules-is-n
// basically, we're exporting the ts file out as a yaml config.
// import yml from 'yaml';
// import type {CodegenConfig} from '@graphql-codegen/cli';
// import {writeFileSync} from 'fs';
//
// export const config: CodegenConfig = {
//     schema: 'src/graphql/schemas/schema.graphql',
//     generates: {
//         './resolvers-types.ts': {
//             config: {
//                 useIndexSignature: true,
//                 commentDescriptions: true,
//                 noRequire: true,
//             },
//             plugins: ['typescript', 'typescript-resolvers'],
//         },
//     },
// };
//
// // save config as yml
// writeFileSync('codegen.yml', yml.stringify(config));
const config = {
    schema: 'schema.graphql',
    generates: {
        './resolvers-types.ts': {
            config: {
                useIndexSignature: true,
            },
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};
export default config;
