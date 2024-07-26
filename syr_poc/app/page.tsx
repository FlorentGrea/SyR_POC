import { LocateIcon, XIcon } from "@/components/ui/icons";
import React, { ReactElement } from 'react';
import Map from "@/components/home/map/map";
import PocketBase from 'pocketbase';
import Image from "next/image";
import Link from "next/link"

export default async function Home() {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_ADDR);
  const mapPoints = await pb.collection('MapPoints').getFullList({ revalidate: 60 })

  return (
    <main className="relative flex flex-col">
      <section className="lg:fixed h-[40vh] sm:h-[50vh] lg:h-[87vh] w-full lg:w-[40%] lg:right-[5%] border rounded-lg overflow-hidden">
          <Map mapPoints={mapPoints} />
      </section>
      <section className="w-full py-2 lg:py-0 lg:w-[55%]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          { mapPoints.map((point) => {
            const imageSrc = point.images[0] ? process.env.NEXT_PUBLIC_DB_ADDR + 'api/files/' + point.collectionId + '/' + point.id + '/' + point.images[0] : ''

            return (
              <Link
                key={point.id}
                href={`/cards/${point.id}`}
                className="group flex flex-col h-64 border rounded-lg overflow-hidden"
                prefetch={false}
              >
                <div className='relative h-[60%] w-full'>
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
                  <h3 className='truncate font-bold text-md'>{point.title}</h3>
                  <h4 className='truncate test-sm'>{point.location}</h4>
                  <h5 className='truncate text-xs'>{new Date(point.date).toDateString()}</h5>
                </div>
              </Link>
          )})}
        </div>
      </section>
    </main>
  );
}