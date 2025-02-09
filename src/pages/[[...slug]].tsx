import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ContactUsSection } from '@/components/ContactUsSection';
import { PricingSection } from '@/components/PricingSection';
import { TeamSection } from '@/components/TeamSection';
import { LogosSection } from '@/components/LogosSection';
import { getLandingPages, getLandingPageForSlug, getSiteConfig } from '@/utils/hygraph-client';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const sections = props.page.sections;
    return (
        <Layout
            pageTitle={props.page.title}
            pageId={props.page.id}
            siteConfig={props.siteConfig}
            currentPageUrl={props.currentPageUrl}
        >
            <div data-sb-field-path=".sections">
                {sections?.map((section, sectionIndex) => {
                    switch (section.__typename) {
                        case 'HeroSection':
                            return <HeroSection {...section} sectionIndex={sectionIndex} key={sectionIndex} />;
                        case 'CtaSection':
                            return <CTASection {...section} sectionIndex={sectionIndex} key={sectionIndex} />;
                        case 'FeaturesSection':
                            return <FeaturesSection {...section} sectionIndex={sectionIndex} key={sectionIndex} />;
                        case 'ContactUsSection':
                            return <ContactUsSection {...section} sectionIndex={sectionIndex} key={sectionIndex} />;
                        case 'LogosSection':
                            return <LogosSection {...section} sectionIndex={sectionIndex} key={sectionIndex} />;
                        case 'PricingSection':
                            return <PricingSection {...section} sectionIndex={sectionIndex} key={sectionIndex} />;
                        case 'TeamSection':
                            return <TeamSection {...section} sectionIndex={sectionIndex} key={sectionIndex} />;
                    }
                })}
            </div>
        </Layout>
    );
}

export const getStaticPaths = (async () => {
    const pages = await getLandingPages();
    const paths = pages
        .filter((page) => !!page.slug)
        .map((page) => {
            const slug = page.slug.replace(/\/{2,}/, '/').replace(/^\/|\/$/g, '');
            if (slug === '') {
                // special case for root page
                return { params: { slug: [] } };
            }
            const parts = slug?.split('/');
            return { params: { slug: parts } };
        });
    return {
        paths: paths,
        fallback: false // false or "blocking"
    };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
    const siteConfig = await getSiteConfig();
    const slug = Array.isArray(context.params?.slug) ? context.params.slug.join('/') : '';
    const page = await getLandingPageForSlug(slug || '/');
    if (!page) {
        throw new Error(`page for slug "${slug}" not found`);
    }
    return {
        props: {
            currentPageUrl: slug,
            page: page,
            siteConfig
        }
    };
}) satisfies GetStaticProps<{}>;
