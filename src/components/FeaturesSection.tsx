import classNames from 'classnames';
import React from 'react';
import { FeaturesSectionFragmentFragment } from '@/utils/graphql-types';

export type FeaturesSectionProps = FeaturesSectionFragmentFragment & {
    sectionIndex: number;
};

export function FeaturesSection(props: FeaturesSectionProps) {
    return (
        <section data-sb-field-path={`.${props.sectionIndex}`} className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    {props.title && (
                        <h2
                            data-sb-field-path=".title"
                            className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
                        >
                            {props.title}
                        </h2>
                    )}
                    {props.subtitle && (
                        <p data-sb-field-path=".subtitle" className="text-gray-500 sm:text-xl dark:text-gray-400">
                            {props.subtitle}
                        </p>
                    )}
                </div>
                <div
                    data-sb-field-path=".features"
                    className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
                >
                    {props.features?.map((feature, index) => {
                        const iconClass = 'text-lg inline-flex text-primary-600 dark:text-primary-300';
                        return (
                            <div key={index} data-sb-field-path={`.${index}`}>
                                {feature.icon && (
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                        <i className={classNames(iconClass, 'fi', feature.icon)} />
                                    </div>
                                )}
                                <h3 data-sb-field-path=".title" className="mb-2 text-xl font-bold dark:text-white">
                                    {feature.title}
                                </h3>
                                <p data-sb-field-path=".content" className="text-gray-500 dark:text-gray-400">
                                    {feature.content}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
