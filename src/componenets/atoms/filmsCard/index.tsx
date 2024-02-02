import React from 'react'
import clsx from 'clsx'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface FilmsCardProps {
    className?: string;
    heading?: string;
    content?: string;
    director?: string;
    image: StaticImport;
}

const FilmsCard = ({ className, heading, content, image }: FilmsCardProps) => {
    return (
        <div className={clsx("bg-gray-800 p-4 flex flex-col", className)}>
            <Image src={image} alt="film" width={300} height={300} />
            <div className={clsx("flex justify-between items-center")}>
                <h1 className={clsx("text-xl font-semibold text-white pb-2")}>{heading}</h1>
                <p className={clsx("text-white text-sm")}>Director: {heading}</p>
            </div>
            <p className={clsx("text-white text-base")}>{content}</p>
        </div>
    )
}

export default FilmsCard
