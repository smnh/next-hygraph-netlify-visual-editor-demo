import React from 'react';
import Image from './Image';
import { Action } from '@/components/Action';
import { HeroSectionFragmentFragment } from '@/utils/graphql-types';

export type HeroSectionProps = HeroSectionFragmentFragment & {
    sectionIndex: number;
};

export function HeroSection(props: HeroSectionProps) {
    return (
        <section data-sb-field-path={`.${props.sectionIndex}`} className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    {props.title && (
                        <h1
                            data-sb-field-path=".title"
                            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
                        >
                            {props.title}
                        </h1>
                    )}
                    {props.subtitle && (
                        <p
                            data-sb-field-path=".subtitle"
                            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                        >
                            {props.subtitle}
                        </p>
                    )}
                    {props.actions && (
                        <div data-sb-field-path=".actions">
                            {props.actions?.map((action, index) => (
                                <Action key={index} fieldPath={`.${index}`} {...action} />
                            ))}
                        </div>
                    )}
                </div>
                {props.image && (
                    <div data-sb-field-path=".image" className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image image={props.image} alt="mockup" />
                    </div>
                )}
            </div>
        </section>
    );
}
