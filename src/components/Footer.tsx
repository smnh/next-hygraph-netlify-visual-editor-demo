import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { toObjectId } from '@stackbit/annotations';
import { SiteConfig } from '@/utils/hygraph-client';

export type FooterProps = {
    siteConfig?: SiteConfig;
};

export function Footer({ siteConfig }: FooterProps) {
    return (
        <footer {...toObjectId(siteConfig?.id)} className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div data-sb-field-path=".footer" className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo-acme.svg"
                                className="mr-3 h-6 sm:h-9"
                                alt="Company Logo"
                                width={300}
                                height={77}
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3" data-sb-field-path=".linkColumns">
                        {siteConfig?.footer?.linkColumns?.map((linkColumn, index) => {
                            return (
                                <div key={index} data-sb-field-path={`.${index}`}>
                                    <h2
                                        className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                                        data-sb-field-path=".label"
                                    >
                                        {linkColumn.label}
                                    </h2>
                                    <ul className="text-gray-600 dark:text-gray-400" data-sb-field-path=".links">
                                        {linkColumn.links?.map((link, index) => {
                                            return (
                                                <li
                                                    className={classNames({
                                                        'mb-4': index !== linkColumn.links!.length - 1
                                                    })}
                                                    key={index}
                                                    data-sb-field-path={`.${index}`}
                                                >
                                                    <Link
                                                        href={link.url ?? '#'}
                                                        className="hover:underline"
                                                        data-sb-field-path=".label"
                                                    >
                                                        {link.label}
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
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span
                        className="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                        data-sb-field-path=".copyright"
                    >
                        {siteConfig?.footer?.copyright}
                    </span>
                    {siteConfig?.footer?.socialIconLinks?.length && (
                        <div
                            className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"
                            data-sb-field-path=".socialIconLinks"
                        >
                            {siteConfig.footer?.socialIconLinks?.map((iconLink, index) => (
                                <Link
                                    data-sb-field-path={`.${index}`}
                                    href={iconLink.url ?? '#'}
                                    title={iconLink.label}
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                    key={index}
                                >
                                    <i className={classNames('fi', iconLink.iconName)} />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}
