import Image, { type StaticImageData } from 'next/image';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { uiStore } from '@/stores/uiStore';

type SpeechBubbleProps = {
    src: StaticImageData | string;
    width: number;
    height: number;
    text: string;
    className?: string;
    textClassName?: string;
    alt?: string;
};

function SpeechBubbleBase({
    src,
    width,
    height,
    text,
    className,
    textClassName,
    alt = '말풍선',
}: SpeechBubbleProps) {
    const vwWidth = `${(width / 440) * 100}vw`;
    const vwHeight = `${(height / 440) * 100}vw`;
    const sizesAttr = `(max-width: 440px) ${((width / 440) * 100).toFixed(2)}vw, ${width}px`;
    return (
        <div
            className={["absolute z-10", className].filter(Boolean).join(' ')}
            style={{
                width: `min(${width}px, ${vwWidth})`,
                height: `min(${height}px, ${vwHeight})`,
                position: 'absolute',
            }}
        >
            <Image src={src} alt={alt} fill sizes={sizesAttr} className="object-contain" />
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center ${textClassName}`}>
                <p
                    className="m-0 font-medium leading-[1.3] text-[#333] whitespace-pre-line"
                    style={{ fontSize: 'clamp(10px, 3.18vw, 14px)' }}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}

export default observer(SpeechBubbleBase);


