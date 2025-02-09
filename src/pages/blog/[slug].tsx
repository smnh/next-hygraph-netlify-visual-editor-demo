import React from 'react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from '@/components/Image';
import { Layout } from '@/components/Layout';
import { RelatedPostsSection } from '@/components/RelatedPostsSection';
import { getPostPageForSlug, getPostPages, getSiteConfig } from '@/utils/hygraph-client';

export const getStaticPaths = (async () => {
    const pages = await getPostPages();
    const paths = pages
        .filter((page) => !!page.slug)
        .map((page) => {
            const slug = page.slug.replace(/\/{2,}/, '/').replace(/^\/|\/$/g, '');
            return { params: { slug: slug } };
        });
    return {
        paths: paths,
        fallback: false // false or "blocking"
    };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
    const siteConfig = await getSiteConfig();
    const slug = context.params?.slug as string;
    const post = await getPostPageForSlug(slug);
    if (!post) {
        throw new Error(`post for slug "${slug}" not found`);
    }
    return {
        props: {
            currentPageUrl: slug,
            post: post,
            siteConfig
        }
    };
}) satisfies GetStaticProps<{}>;

export default function BlogPost(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const post = props.post;
    return (
        <Layout
            pageTitle={post.title}
            pageId={post.id}
            siteConfig={props.siteConfig}
            currentPageUrl={props.currentPageUrl}
        >
            <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="px-4 mx-auto w-full max-w-2xl">
                    {post.author && (
                        <div data-sb-field-path=".author" className="mb-4 lg:mb-6">
                            <div className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    {post.author.photo && (
                                        <Image
                                            image={post.author.photo}
                                            fieldPath=".photo"
                                            alt={post.author.name}
                                            className="mr-4 w-16 h-16 rounded-full object-cover"
                                        />
                                    )}
                                    <div>
                                        <Link
                                            href="#"
                                            rel="author"
                                            data-sb-field-path=".name"
                                            className="text-xl font-bold text-gray-900 dark:text-white"
                                        >
                                            {post.author.name}
                                        </Link>
                                        <p
                                            data-sb-field-path=".title"
                                            className="text-base text-gray-500 dark:text-gray-400"
                                        >
                                            {post.author.title}
                                        </p>
                                        {post.date && (
                                            <p className="text-base text-gray-500 dark:text-gray-400">
                                                <time data-sb-field-path="date" dateTime={post.date}>
                                                    {new Date(post.date).toDateString()}
                                                </time>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <article
                        data-sb-field-path=".content"
                        className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
                    >
                        <Markdown>{post.content}</Markdown>
                    </article>
                </div>
            </div>
            {post.relatedPosts && post.relatedPosts.length > 0 && (
                <RelatedPostsSection relatedPosts={post.relatedPosts} />
            )}
        </Layout>
    );
}
