import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { toFieldPath } from '@stackbit/annotations';
import { ActionFragmentFragment } from '@/utils/graphql-types';

export type ActionProps = ActionFragmentFragment & {
    fieldPath?: string;
};

export function Action(action: ActionProps) {
    const classname = action.primary
        ? 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900'
        : 'text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800';
    const iconPosition = action.iconPosition ?? 'left';
    return (
        <Link
            {...toFieldPath(action.fieldPath)}
            href={action.url ?? '#'}
            className={classNames(
                'inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg focus:ring-4',
                classname
            )}
        >
            {action.icon && iconPosition === 'left' && <i className={classNames('w-5 h-5 mr-2 fi', action.icon)} />}
            {action.label}
            {action.icon && iconPosition === 'right' && <i className={classNames('w-5 h-5 ml-2 fi', action.icon)} />}
        </Link>
    );
}
