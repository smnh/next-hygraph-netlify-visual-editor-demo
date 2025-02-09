import React from 'react';
import Head from 'next/head';
import { toObjectId } from '@stackbit/annotations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SiteConfig } from '@/utils/hygraph-client';

export type LayoutProps = {
    currentPageUrl: string;
    pageId?: string;
    pageTitle?: string;
    siteConfig?: SiteConfig;
    children?: React.ReactNode;
};

export function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                {props.pageTitle ||
                    (props.siteConfig?.companyTitle && (
                        <title>
                            {(props.pageTitle ? props.pageTitle + ' | ' : '') +
                                (props.siteConfig?.companyTitle ? props.siteConfig.companyTitle : '')}
                        </title>
                    ))}
            </Head>
            <Header siteConfig={props.siteConfig} currentPageUrl={props.currentPageUrl} />
            <main {...toObjectId(props.pageId)}>{props.children}</main>
            <Footer siteConfig={props.siteConfig} />
        </>
    );
}
