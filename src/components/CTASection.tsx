import React from 'react';
import { Action } from '@/components/Action';
import { CtaSectionFragmentFragment } from '@/utils/graphql-types';

export type CTASectionProps = CtaSectionFragmentFragment & {
    sectionIndex: number;
};

export function CTASection(props: CTASectionProps) {
    return (
        <section data-sb-field-path={`.${props.sectionIndex}`} className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto text-center">
                    {props.title && (
                        <h2
                            data-sb-field-path=".title"
                            className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
                        >
                            {props.title}
                        </h2>
                    )}
                    {props.subtitle && (
                        <p
                            data-sb-field-path=".subtitle"
                            className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400"
                        >
                            {props.subtitle}
                        </p>
                    )}
                    {props.actions && (
                        <div
                            data-sb-field-path=".actions"
                            className="justify-center flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                        >
                            {props.actions.map((action, index) => (
                                <Action key={index} {...action} fieldPath={`.${index}`} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
