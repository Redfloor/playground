// Workaround on esmodule error as per: https://lightrun.com/answers/dotansimha-graphql-code-generator-using-codegents-in-an-esm-project-causes-cosmiconfig-typescript-loader-to-throw-an-es-modules-is-n
// basically, we're exporting the ts file out as a yaml config.
import yml from 'yaml';
import { writeFileSync } from 'fs';
export const config = {
    schema: 'src/graphql/schemas/schema.graphql',
    generates: {
        './resolvers-types.ts': {
            config: {
                useIndexSignature: true,
                commentDescriptions: true,
                noRequire: true,
            },
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};
// save config as yml
writeFileSync('codegen.yml', yml.stringify(config));
// import type { CodegenConfig } from '@graphql-codegen/cli';
//
// const config: CodegenConfig = {
//     schema: 'schema.graphql',
//     generates: {
//         './resolvers-types.ts': {
//             config: {
//                 useIndexSignature: true,
//             },
//             plugins: ['typescript', 'typescript-resolvers'],
//         },
//     },
// };
// export default config;
