import React from 'react';
import Link from 'next/link';
import Image from '@/components/Image';
import { LogosSectionFragmentFragment } from '@/utils/graphql-types';

export type LogosSectionProps = LogosSectionFragmentFragment & {
    sectionIndex: number;
};

export function LogosSection(props: LogosSectionProps) {
    return (
        <section data-sb-field-path={`.${props.sectionIndex}`} className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                {props.title && (
                    <h2
                        data-sb-field-path=".title"
                        className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
                    >
                        {props.title}
                    </h2>
                )}
                <div
                    data-sb-field-path=".logos"
                    className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
                >
                    {props.logos?.map((logo, index) => {
                        if (!logo.image) {
                            return null;
                        }
                        return (
                            <Link
                                href={logo.url ?? '#'}
                                key={index}
                                data-sb-field-path={`.${index}`}
                                className="flex justify-center items-center"
                            >
                                <Image image={logo.image} alt={logo.title} style={{ maxHeight: 40, width: 'auto' }} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
