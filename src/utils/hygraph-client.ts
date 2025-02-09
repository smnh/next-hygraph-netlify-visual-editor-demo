import { request } from 'graphql-request';
import * as queries from './graphql-queries';
import * as queryTypes from './graphql-types';

export type SiteConfig = queryTypes.GetSiteConfigQuery['siteConfigs'][number];

function getStageForEnvironment() {
    return process.env.NODE_ENV === 'production' ? queryTypes.Stage.Published : queryTypes.Stage.Draft;
}

export async function getSiteConfig(): Promise<SiteConfig> {
    const data = await request<queryTypes.GetSiteConfigQuery, queryTypes.GetSiteConfigQueryVariables>(
        process.env.HYGRAPH_ENDPOINT as string,
        queries.getSiteConfig,
        { stage: getStageForEnvironment() }
    );
    return data.siteConfigs[0];
}

export async function getLandingPages(): Promise<LandingPage[]> {
    const data = await request<queryTypes.GetLandingPagesQuery, queryTypes.GetLandingPagesQueryVariables>(
        process.env.HYGRAPH_ENDPOINT as string,
        queries.getLandingPages,
        { stage: getStageForEnvironment() }
    );
    return data.landingPages;
}

export type LandingPage = NonNullable<queryTypes.GetLandingPageForSlugQuery['landingPage']>;

export async function getLandingPageForSlug(slug: string): Promise<LandingPage | undefined> {
    const data = await request<queryTypes.GetLandingPageForSlugQuery, queryTypes.GetLandingPageForSlugQueryVariables>(
        process.env.HYGRAPH_ENDPOINT as string,
        queries.getLandingPageForSlug,
        { stage: getStageForEnvironment(), slug: slug }
    );
    return data.landingPage ?? undefined;
}

export async function getPostPages(): Promise<PostPage[]> {
    const data = await request<queryTypes.GetPostPagesQuery, queryTypes.GetPostPagesQueryVariables>(
        process.env.HYGRAPH_ENDPOINT as string,
        queries.getPostPages,
        { stage: getStageForEnvironment() }
    );
    return data.postPages;
}

export type PostPage = NonNullable<queryTypes.GetPostPageForSlugQuery['postPage']>;

export async function getPostPageForSlug(slug: string): Promise<PostPage | undefined> {
    const data = await request<queryTypes.GetPostPageForSlugQuery, queryTypes.GetPostPageForSlugQueryVariables>(
        process.env.HYGRAPH_ENDPOINT as string,
        queries.getPostPageForSlug,
        { stage: getStageForEnvironment(), slug: slug }
    );
    return data.postPage ?? undefined;
}
