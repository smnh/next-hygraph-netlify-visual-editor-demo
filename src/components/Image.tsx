import NextImage from 'next/image';

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

export default function Image({ image, fieldPath, alt, width, height, style, className }: ImageProps) {
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
