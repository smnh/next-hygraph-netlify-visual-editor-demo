import NextImage from 'next/image';

import { ImageLoaderProps } from 'next/dist/shared/lib/image-config';
import { toFieldPath } from '@stackbit/annotations';
import { AssetFragmentFragment } from '@/utils/graphql-types';

export type ImageProps = {
    image?: AssetFragmentFragment;
    fieldPath?: string;
    alt?: string | null;
    height?: number;
    width?: number;
    style?: React.CSSProperties;
    className?: string;
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'min' | 'scale';
};

export default function Image({ image, fieldPath, alt, width, height, style, className, fit }: ImageProps) {
    if (!image) {
        return null;
    }
    return (
        <NextImage
            src={image.url}
            alt={alt ?? 'image'}
            width={width ?? image.width ?? 200}
            height={height ?? image.height ?? 200}
            style={style}
            className={className}
            {...toFieldPath(fieldPath)}
        />
    );
}

type HygraphImageProps = {
    width?: number;
    height?: number;
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'min' | 'scale';
    asset: AssetFragmentFragment;
};

function createHygraphImageLoader(options: HygraphImageProps) {
    return function ({ src, width, quality }: ImageLoaderProps) {
        const url = new URL(src);
        url.searchParams.set('auto', 'format');
        url.searchParams.set('fit', options.fit ?? 'max');
        url.searchParams.set('w', width.toString());
        if (options.height && options.asset?.height && options.asset?.width) {
            const height = Math.round((width * options.asset.height) / options.asset.width);
            url.searchParams.set('h', height.toString());
        }
        if (quality) {
            url.searchParams.set('q', quality.toString());
        }
        return url.href;
    };
}
