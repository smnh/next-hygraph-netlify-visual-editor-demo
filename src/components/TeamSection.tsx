import Link from 'next/link';
import Image from '@/components/Image';
import classNames from 'classnames';
import React from 'react';
import { TeamSectionFragmentFragment } from '@/utils/graphql-types';

export type TeamSectionProps = TeamSectionFragmentFragment & {
    sectionIndex: number;
};

export function TeamSection(props: TeamSectionProps) {
    if (props.variant === 'grid') {
        return <TeamSectionVariantGrid {...props} />;
    } else {
        return <TeamSectionVariantCards {...props} />;
    }
}

function TeamSectionVariantCards(props: TeamSectionProps) {
    return (
        <section data-sb-field-path={`.${props.sectionIndex}`} className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
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
                            className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
                        >
                            {props.subtitle}
                        </p>
                    )}
                </div>
                <div data-sb-field-path=".team" className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {props.team?.map((person, index) => {
                        return (
                            <div
                                key={index}
                                data-sb-field-path={`.${index}`}
                                className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                            >
                                {person.photo && (
                                    <Link href="#" data-sb-field-path=".photo">
                                        <Image
                                            image={person.photo}
                                            alt={person.name}
                                            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg max-w-none object-cover w-40 h-40 lg:w-60 lg:h-60"
                                        />
                                    </Link>
                                )}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <Link href="#" data-sb-field-path=".name">
                                            {person.name}
                                        </Link>
                                    </h3>
                                    <span data-sb-field-path=".title" className="text-gray-500 dark:text-gray-400">
                                        {person.title}
                                    </span>
                                    <p
                                        data-sb-field-path=".jobDescription"
                                        className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"
                                    >
                                        {person.jobDescription}
                                    </p>
                                    <ul data-sb-field-path=".socialIconLinks" className="flex space-x-4 sm:mt-0">
                                        {person.socialIconLinks?.map((iconLink, index) => {
                                            return (
                                                <li key={index} data-sb-field-path={`.${index}`}>
                                                    <Link
                                                        href={iconLink.url ?? '#'}
                                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                                    >
                                                        <i className={classNames('w-5 h-5', iconLink.iconName)} />
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function TeamSectionVariantGrid(props: TeamSectionProps) {
    return (
        <section data-sb-field-path={`.${props.sectionIndex}`} className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
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
                            className="font-light text-gray-500 sm:text-xl dark:text-gray-400"
                        >
                            {props.subtitle}
                        </p>
                    )}
                </div>
                <div
                    data-sb-field-path=".team"
                    className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    {props.team?.map((person, index) => {
                        return (
                            <div
                                key={index}
                                data-sb-field-path={`.${index}`}
                                className="text-center text-gray-500 dark:text-gray-400"
                            >
                                {person.photo && (
                                    <Image
                                        image={person.photo}
                                        fieldPath=".photo"
                                        alt={person.name}
                                        className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                                    />
                                )}
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <Link href="#" data-sb-field-path=".name">
                                        {person.name}
                                    </Link>
                                </h3>
                                <p data-sb-field-path=".title">{person.title}</p>
                                <ul
                                    data-sb-field-path=".socialIconLinks"
                                    className="flex justify-center mt-4 space-x-4"
                                >
                                    {person.socialIconLinks?.map((iconLink, index) => {
                                        return (
                                            <li key={index} data-sb-field-path={`.${index}`}>
                                                <Link
                                                    href={iconLink.url ?? '#'}
                                                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                                                >
                                                    <i className={classNames('w-6 h-6', iconLink.iconName)} />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
