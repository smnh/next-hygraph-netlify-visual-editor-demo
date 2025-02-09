import { JSX } from 'react';
import { Action } from '@/components/Action';
import { PricingSectionFragmentFragment } from '@/utils/graphql-types';

export type PricingSectionProps = PricingSectionFragmentFragment & {
    sectionIndex: number;
};

export function PricingSection(props: PricingSectionProps) {
    return (
        <section data-sb-field-path={`.${props.sectionIndex}`} className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
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
                            className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
                        >
                            {props.subtitle}
                        </p>
                    )}
                </div>
                <div
                    data-sb-field-path=".pricingPlans"
                    className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
                >
                    {props.pricingPlans?.map((plan, index) => {
                        return (
                            <div
                                key={index}
                                data-sb-field-path={`.${index}`}
                                className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
                            >
                                <h3 data-sb-field-path=".title" className="mb-4 text-2xl font-semibold">
                                    {plan.title}
                                </h3>
                                <p
                                    data-sb-field-path=".subtitle"
                                    className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
                                >
                                    {plan.subtitle}
                                </p>
                                <div className="flex justify-center items-baseline my-8">
                                    <span data-sb-field-path=".price" className="mr-2 text-5xl font-extrabold">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                <ul role="list" data-sb-field-path=".planFeatures" className="mb-8 space-y-4 text-left">
                                    {plan.planFeatures?.map((planFeature, index) => {
                                        const parts = planFeature.split('**');
                                        const result: (string | JSX.Element)[] = [];
                                        for (let i = 0; i < parts.length; i++) {
                                            if (i % 2 === 1 && i < parts[i].length - 1) {
                                                result.push(
                                                    <span key={i} className="font-semibold">
                                                        {parts[i]}
                                                    </span>
                                                );
                                            } else {
                                                result.push(parts[i]);
                                            }
                                        }
                                        return (
                                            <li key={index} className="flex items-center space-x-3">
                                                <i className="fi fi-br-check flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                                                <span data-sb-field-path={`.${index}`}>{result}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {plan.action && <Action fieldPath=".action" {...plan.action} />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
