import _ from 'lodash';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { toObjectId } from '@stackbit/annotations';
import { SiteConfig } from '@/utils/hygraph-client';

export type HeaderProps = {
    currentPageUrl: string;
    siteConfig?: SiteConfig;
};

export function Header({ siteConfig, currentPageUrl }: HeaderProps) {
    return (
        <header {...toObjectId(siteConfig?.id)}>
            <nav data-sb-field-path=".navbar" className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-acme.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Company Logo"
                            width={300}
                            height={77}
                        />
                    </Link>
                    <div className="flex items-center lg:order-2" data-sb-field-path=".actions">
                        {siteConfig?.navbar?.actions?.map((action, index) => {
                            const classname = action.primary
                                ? 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                                : 'text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800';
                            return (
                                <Link
                                    data-sb-field-path={`.${index}`}
                                    href={action.url ?? '#'}
                                    key={index}
                                    className={classNames(
                                        'font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none focus:ring-4',
                                        classname
                                    )}
                                >
                                    {action.label}
                                </Link>
                            );
                        })}
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0" data-sb-field-path=".links">
                            {siteConfig?.navbar?.links?.map((link, index) => {
                                const isCurrent = _.trim(link.url, '/') === _.trim(currentPageUrl, '/');
                                const classname = isCurrent
                                    ? 'block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
                                    : 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700';
                                return (
                                    <li key={index} data-sb-field-path={`.${index}`} className="px-4">
                                        <Link
                                            data-sb-field-path=".label"
                                            href={link.url ?? '#'}
                                            className={classname}
                                            {...(isCurrent ? { 'aria-current': 'page' } : undefined)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
