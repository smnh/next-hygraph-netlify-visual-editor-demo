import _ from 'lodash';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from '@/components/Image';
import { Layout } from '@/components/Layout';
import { getPostPages, getSiteConfig, PostPage } from '@/utils/hygraph-client';

export const getStaticProps = (async (context) => {
    const siteConfig = await getSiteConfig();
    const posts = await getPostPages();
    return {
        props: {
            posts,
            siteConfig
        }
    };
}) satisfies GetStaticProps<{}>;

export default function Blog(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout pageTitle="Blog" siteConfig={props.siteConfig} currentPageUrl="blog">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Our Blog
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            We use an agile approach to test assumptions and connect with the needs of your audience
                            early and often.
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {props.posts.map((post, index) => {
                            const postUrl = `/blog/${_.trim(post.slug, '/')}`;
                            return (
                                <article
                                    key={index}
                                    data-sb-object-id={post.id}
                                    className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                            {post.category && [
                                                post.categoryIcon && (
                                                    <i
                                                        key={0}
                                                        data-sb-field-path=".categoryIcon"
                                                        className={classNames('mr-1 w-3 h-3', 'fi', post.categoryIcon)}
                                                    />
                                                ),
                                                <span data-sb-field-path=".category" key={1}>
                                                    post.category
                                                </span>
                                            ]}
                                        </span>
                                        <span data-sb-field-path=".date" className="text-sm">
                                            {post.date}
                                        </span>
                                    </div>
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <Link href={postUrl} data-sb-field-path=".title">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p
                                        data-sb-field-path=".excerpt"
                                        className="mb-5 font-light text-gray-500 dark:text-gray-400"
                                    >
                                        {post.excerpt}
                                    </p>
                                    {post.author && (
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-4" data-sb-field-path=".author">
                                                {post.author.photo && (
                                                    <Image
                                                        image={post.author.photo}
                                                        fieldPath=".photo"
                                                        alt={post.author.name}
                                                        className="w-7 h-7 rounded-full object-cover"
                                                        width={30}
                                                        height={30}
                                                    />
                                                )}
                                                <span
                                                    data-sb-field-path=".name"
                                                    className="font-medium dark:text-white"
                                                >
                                                    {post.author.name}
                                                </span>
                                            </div>
                                            <Link
                                                href={postUrl}
                                                className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                            >
                                                Read more
                                                <svg
                                                    className="ml-2 w-4 h-4"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
