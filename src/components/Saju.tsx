import React from 'react';
import { observer } from 'mobx-react-lite';
import { uiStore } from '@/stores/uiStore';
import left from "@/assets/images/leftH.svg"
import right from "@/assets/images/rightH.svg"
import Image from 'next/image';

type SajuTileVariant = 'black' | 'teal' | 'red' | 'gray' | 'white';

type SajuCell = {
    main: string;
    sub?: string;
    variant?: SajuTileVariant;
};

type SajuRow = {
    label: string;
    cells: [SajuCell, SajuCell, SajuCell, SajuCell];
};

type SajuProps = {
    name?: string;
    birthText?: string;
    columns?: [string, string, string, string];
    rows?: SajuRow[];
    className?: string;
};

const tileVariantClass: Record<SajuTileVariant, string> = {
    black:
        'bg-[#1E1E1E] text-white rounded-md shadow-sm',
    teal:
        'bg-[#1FA2A1] text-white rounded-md shadow-sm',
    red:
        'bg-[#D5544F] text-white rounded-md shadow-sm',
    gray:
        'bg-[#3B3E44] text-white rounded-md shadow-sm',
    white:
        'bg-white text-[#1E1E1E] rounded-md shadow-sm border border-[#D9D9D9]',
};

function Tile({ main, sub, variant = 'white', isNarrow }: SajuCell & { isNarrow: boolean }) {
    const tileHeight = isNarrow ? '3rem' : '3.5rem';
    const tileWidth = isNarrow ? '3.5rem' : '4rem';
    const mainFontSize = isNarrow ? '1.125rem' : '1.25rem';
    const subFontSize = isNarrow ? '9px' : '10px';
    return (
        <div
            className={`mx-auto flex flex-col items-center justify-center ${tileVariantClass[variant]}`}
            style={{ height: tileHeight, width: tileWidth }}
        >
            <span className="leading-none" style={{ fontSize: mainFontSize }}>{main}</span>
            {sub ? <span className="mt-1 opacity-80" style={{ fontSize: subFontSize }}>{sub}</span> : null}
        </div>
    );
}

function SajuBase({
    name = '김로켓',
    birthText = '1980년 8월27일 08:10',
    columns = ['時', '日', '月', '年'],
    rows,
    className,
}: SajuProps) {
    const isNarrow = uiStore.isNarrow;
    const outerPaddingX = isNarrow ? 'px-3' : 'px-4';
    const cardPadding = isNarrow ? 'p-3' : 'p-4';
    const headerPadX = isNarrow ? 'px-2' : 'px-4';
    const headerPadTop = isNarrow ? 'pt-4' : 'pt-6';
    const headerPadBottom = isNarrow ? 'pb-3' : 'pb-4';
    const headerSmallText = isNarrow ? 'text-[11px]' : 'text-[13px]';
    const headerBigText = isNarrow ? 'text-base' : 'text-lg';
    const iconHeightClass = isNarrow ? 'h-6' : 'h-7';
    const cellPadX = isNarrow ? 'px-1.5' : 'px-2';
    const cellPadY = isNarrow ? 'py-2' : 'py-3';
    const headerCellText = isNarrow ? 'text-xs' : 'text-sm';
    const bodySmallText = isNarrow ? 'text-[11px]' : 'text-[12px]';
    const defaultRows: SajuRow[] = [
        {
            label: '十星(십성)',
            cells: [
                { main: '傷官', sub: '(상관)' },
                { main: '比肩', sub: '(비견)' },
                { main: '傷官', sub: '(상관)' },
                { main: '傷官', sub: '(상관)' },
            ],
        },
        {
            label: '天干(천간)',
            cells: [
                { main: '壬', sub: '임수', variant: 'black' },
                { main: '丁', sub: '정화', variant: 'red' },
                { main: '癸', sub: '계수', variant: 'black' },
                { main: '癸', sub: '계수', variant: 'black' },
            ],
        },
        {
            label: '地支(지지)',
            cells: [
                { main: '寅', sub: '임인', variant: 'teal' },
                { main: '巳', sub: '정사', variant: 'red' },
                { main: '亥', sub: '임해', variant: 'gray' },
                { main: '酉', sub: '신유', variant: 'white' },
            ],
        },
        {
            label: '十星(십성)',
            cells: [
                { main: '比肩', sub: '(비견)' },
                { main: '劫財', sub: '(겁재)' },
                { main: '食神', sub: '(식신)' },
                { main: '偏財', sub: '(편재)' },
            ],
        },
        {
            label: '十二運星(12운성)',
            cells: [
                { main: '死', sub: '(사)' },
                { main: '帝旺', sub: '(제왕)' },
                { main: '胎', sub: '(태)' },
                { main: '長生', sub: '(장생)' },
            ],
        },
        {
            label: '神煞(신살)',
            cells: [
                { main: '劫殺', sub: '(겁살)' },
                { main: '地殺', sub: '(지살)' },
                { main: '驛馬殺', sub: '(역마살)' },
                { main: '將星殺', sub: '(장성살)' },
            ],
        },
        {
            label: '貴人(귀인)',
            cells: [
                { main: '空', sub: '(없음)' },
                { main: '空', sub: '(없음)' },
                { main: '天乙', sub: '(천을귀인)' },
                { main: '太極', sub: '(태극귀인)' },
            ],
        },
    ];

    const data = rows ?? defaultRows;

    return (
        <div className={`relative w-full bg-[#F5F3EC] ${outerPaddingX} -mt-10 z-20 ${className}`}>
            <div className='border-4 border-[#1B2F49] relative font-bold shadow-lg'>
                <div className='pointer-events-none absolute left-0 right-0 top-1 border-t border-[#2B557E]' />
                <div className='pointer-events-none absolute left-0 right-0 bottom-1 border-b border-[#2B557E]' />
                <div className='pointer-events-none absolute top-0 bottom-0 left-1 border-l border-[#2B557E]' />
                <div className='pointer-events-none absolute top-0 bottom-0 right-1 border-r border-[#2B557E]' />
                <div className={`relative ${cardPadding}`}>
                    {/* Header */}
                    <div className={`${headerPadX} ${headerPadTop} ${headerPadBottom} text-center flex justify-between`}>
                        <Image src={left} alt="" className={`${iconHeightClass} w-auto`} />
                        <div className='flex flex-col'>
                            <p className={`${headerSmallText} text-[#6B6B6B]`}>{name}님의 사주</p>
                            <p className={`mt-1 ${headerBigText} font-semibold tracking-tight text-[#333]`}>{birthText}</p>
                        </div>
                        <Image className={`flex mb-auto ${iconHeightClass} w-auto`} src={right} alt="" />
                    </div>

                    <div className={`grid grid-cols-5 ${bodySmallText}`}>
                        {/* Column headers */}
                        <div className={`flex items-center justify-center border-b border-b-black border-r border-r-black bg-[#F5F3EC] ${cellPadX} ${cellPadY} ${headerCellText} font-semibold text-[#333]`}>&nbsp;</div>
                        {columns.map((c) => (
                            <div key={c} className={`flex items-center justify-center border-b border-b-black border-r border-r-black bg-[#F5F3EC] ${cellPadX} ${cellPadY} ${isNarrow ? 'text-sm' : 'text-base'} font-semibold text-[#333]`}>
                                {c}
                            </div>
                        ))}

                        {/* Rows */}
                        {data.map((row) => (
                            <React.Fragment key={row.label}>
                                <div className={`flex items-center justify-center border-b border-b-black border-r border-r-black bg-[#F5F3EC] ${cellPadX} ${cellPadY} ${bodySmallText} text-[#666]`}>
                                    {row.label}
                                </div>
                                {row.cells.map((cell, idx) => (
                                    <div key={`${row.label}-${idx}`} className={`flex items-center justify-center border-b border-b-black border-r border-r-[#8A8A8A] bg-white ${cellPadX} ${cellPadY}`}>
                                        {cell.variant ? (
                                            <Tile {...cell} isNarrow={isNarrow} />
                                        ) : (
                                            <div className={`text-center ${bodySmallText} text-[#333]`}>
                                                <div className="leading-none">{cell.main}</div>
                                                {cell.sub ? <div className={`mt-1 ${isNarrow ? 'text-[10px]' : 'text-[11px]'} text-[#8A8A8A]`}>{cell.sub}</div> : null}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Footer spacing */}
                    <div className="h-4" />
                </div>
            </div>
        </div>
    );
}

export default observer(SajuBase);


