import Link from 'next/link';
import _ from 'lodash';
import Image from '@/components/Image';
import React from 'react';
import { toFieldPath } from '@stackbit/annotations';
import { PostPage } from '@/utils/hygraph-client';

export type RelatedPostsSectionProps = {
    relatedPosts: PostPage['relatedPosts'];
};

export function RelatedPostsSection(props: RelatedPostsSectionProps) {
    return (
        <div aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-screen-xl">
                <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4" {...toFieldPath('.relatedPosts')}>
                    {props.relatedPosts.map((post, index) => {
                        const postUrl = `/blog/${_.trim(post.slug, '/')}`;
                        return (
                            <article key={index} className="max-w-xs" {...toFieldPath(`.${index}`)}>
                                {post.image ? (
                                    <Link href={postUrl}>
                                        <Image
                                            image={post.image}
                                            fieldPath=".image"
                                            alt={post.title}
                                            className="mb-5 rounded-lg"
                                        />
                                    </Link>
                                ) : null}
                                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <Link href={postUrl} {...toFieldPath('.title')}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="mb-4 text-gray-500 dark:text-gray-400" {...toFieldPath('.excerpt')}>
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={postUrl}
                                    className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                                >
                                    Read more
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
