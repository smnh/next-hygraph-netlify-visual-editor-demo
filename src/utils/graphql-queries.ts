import { gql } from 'graphql-request';

const heroSectionFragment = gql`
    fragment HeroSectionFragment on HeroSection {
        id
        title
        subtitle
        image {
            ...AssetFragment
        }
        actions {
            ...ActionFragment
        }
    }
`;

const ctaSectionFragment = gql`
    fragment CTASectionFragment on CtaSection {
        id
        title
        subtitle
        actions {
            ...ActionFragment
        }
    }
`;

const contactUsSectionFragment = gql`
    fragment ContactUsSectionFragment on ContactUsSection {
        id
        title
        subtitle
    }
`;

const featuresSectionFragment = gql`
    fragment FeaturesSectionFragment on FeaturesSection {
        id
        title
        subtitle
        features {
            id
            title
            icon
            content
        }
    }
`;

const logosSectionFragment = gql`
    fragment LogosSectionFragment on LogosSection {
        id
        title
        subtitle
        logos {
            id
            title
            url
            image {
                ...AssetFragment
            }
        }
    }
`;

const pricingSectionFragment = gql`
    fragment PricingSectionFragment on PricingSection {
        id
        title
        subtitle
        pricingPlans {
            id
            title
            subtitle
            price
            action {
                ...ActionFragment
            }
            planFeatures
        }
    }
`;

const teamSectionFragment = gql`
    fragment TeamSectionFragment on TeamSection {
        id
        title
        subtitle
        variant
        team {
            ...PersonFragment
        }
    }
`;

const actionFragment = gql`
    fragment ActionFragment on Action {
        id
        label
        url
        primary
        icon
        iconPosition
    }
`;

const linkFragment = gql`
    fragment LinkFragment on Link {
        id
        label
        url
    }
`;

const assetFragment = gql`
    fragment AssetFragment on Asset {
        id
        url
        height
        width
        mimeType
        handle
    }
`;

const personFragment = gql`
    fragment PersonFragment on Person {
        id
        name
        title
        jobDescription
        photo {
            ...AssetFragment
        }
        socialIconLinks {
            id
            label
            url
            iconName
        }
    }
`;

const landingPageFragment = gql`
    fragment LandingPageFragment on LandingPage {
        __typename
        id
        title
        slug
        sections {
            __typename
            ... on HeroSection {
                ...HeroSectionFragment
            }
            ... on CtaSection {
                ...CTASectionFragment
            }
            ... on ContactUsSection {
                ...ContactUsSectionFragment
            }
            ... on FeaturesSection {
                ...FeaturesSectionFragment
            }
            ... on LogosSection {
                ...LogosSectionFragment
            }
            ... on PricingSection {
                ...PricingSectionFragment
            }
            ... on TeamSection {
                ...TeamSectionFragment
            }
        }
    }

    ${heroSectionFragment}
    ${ctaSectionFragment}
    ${contactUsSectionFragment}
    ${featuresSectionFragment}
    ${logosSectionFragment}
    ${pricingSectionFragment}
    ${teamSectionFragment}
    ${actionFragment}
    ${personFragment}
    ${assetFragment}
`;

const postPageFragment = gql`
    fragment PostPageFragment on PostPage {
        id
        title
        slug
        date
        author {
            ...PersonFragment
        }
        category
        categoryIcon
        excerpt
        image {
            ...AssetFragment
        }
        content
        relatedPosts {
            id
            slug
            title
            image {
                ...AssetFragment
            }
            excerpt
        }
    }

    ${personFragment}
    ${assetFragment}
`;

export const getSiteConfig = gql`
    query GetSiteConfig($stage: Stage!) {
        siteConfigs(stage: $stage) {
            id
            companyTitle
            companyLogo {
                ...AssetFragment
            }
            navbar {
                id
                links {
                    ...LinkFragment
                }
                actions {
                    ...ActionFragment
                }
            }
            footer {
                id
                copyright
                socialIconLinks {
                    id
                    label
                    url
                    iconName
                }
                linkColumns {
                    id
                    label
                    links {
                        ...LinkFragment
                    }
                }
            }
        }
    }

    ${actionFragment}
    ${linkFragment}
    ${assetFragment}
`;

export const getLandingPages = gql`
    query GetLandingPages($stage: Stage!) {
        landingPages(stage: $stage) {
            ...LandingPageFragment
        }
    }

    ${landingPageFragment}
`;

export const getLandingPageForSlug = gql`
    query GetLandingPageForSlug($stage: Stage!, $slug: String!) {
        landingPage(stage: $stage, where: { slug: $slug }) {
            ...LandingPageFragment
        }
    }

    ${landingPageFragment}
`;

export const getPostPages = gql`
    query GetPostPages($stage: Stage!) {
        postPages(stage: $stage) {
            ...PostPageFragment
        }
    }

    ${postPageFragment}
`;

export const getPostPageForSlug = gql`
    query GetPostPageForSlug($stage: Stage!, $slug: String!) {
        postPage(stage: $stage, where: { slug: $slug }) {
            ...PostPageFragment
        }
    }

    ${postPageFragment}
`;
