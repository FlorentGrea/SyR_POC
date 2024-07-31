import { LocateIcon, XIcon } from "@/components/ui/icons";
import React, { ReactElement } from 'react';
import Map from "@/components/home/map/map";
import PocketBase from 'pocketbase';
import Image from "next/image";
import Link from "next/link"
import { revalidateTag } from "next/cache";

export default async function Pocmainpage() {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_ADDR);
  revalidateTag('mapPoints')
  const mapPoints = await pb.collection('MapPoints').getFullList({ next: { tags: ['mapPoints'] } })

  return (
    <main className="relative flex flex-col">
      <section className="lg:fixed h-[40vh] sm:h-[50vh] lg:h-[92vh] w-full lg:w-[40%] lg:right-[5%] border rounded-lg overflow-hidden">
          <Map mapPoints={mapPoints} />
      </section>
      <section className="w-full py-2 lg:py-0 lg:w-[55%] mb-3">
        <div className="grid gap-4 xl:gap-8 grid-cols-2 sm:grid-cols-3 lg:pr-4 xl:pr-8 pt-2 lg:pt-0">
          { mapPoints.map((point) => {
            const imageSrc = point.images[0] ? process.env.NEXT_PUBLIC_DB_ADDR + 'api/files/' + point.collectionId + '/' + point.id + '/' + point.images[0] : ''

            return (
              <Link
                key={point.id}
                href={`/cards/${point.id}`}
                className="group flex flex-col"
                prefetch={false}
              >
                <div className='relative w-full aspect-square border rounded-lg overflow-hidden'>
                  { imageSrc ?
                      <Image
                          src={imageSrc}
                          width={1500}
                          height={1500}
                          alt={point.title}
                          className="object-cover w-full h-full"
                      />
                  :
                      <div className='bg-red-300' />
                  }
                </div>
                <div className='flex flex-col p-2 w-full'>
                  <h3 className='truncate font-bold text-lg leading-none text-macaroni-and-cheese-950'>{point.title}</h3>
                  <h4 className='truncate text-sm text-macaroni-and-cheese-600'>{point.location}</h4>
                  <h5 className='truncate text-xs text-macaroni-and-cheese-950'>{new Date(point.date).toDateString()}</h5>
                </div>
              </Link>
          )})}
        </div>
      </section>
    </main>
  );
}