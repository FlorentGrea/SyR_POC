import PocketBase from 'pocketbase';
import Image from 'next/image';
import { BedIcon, BicycleIcon, BoatIcon, CarIcon, MeetIcon, PlaneIcon, VanIcon } from '@/components/ui/icons';

export default async function PointCard({ params }: any) {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_ADDR);
    const point = await pb.collection('MapPoints').getOne(params.id)
    const imageSrc = point.images[0] ? process.env.NEXT_PUBLIC_DB_ADDR + 'api/files/' + point.collectionId + '/' + point.id + '/' + point.images[0] : ''

    return (
        <section className='flex flex-col w-fit m-auto my-3'>
            <div className='flex flex-col sm:flex-row w-full'>
                <div className='relative w-[90%] sm:w-96 m-auto aspect-square border rounded-lg overflow-hidden sm:mr-4'>
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
                <div className='flex flex-col w-[90%] py-2 m-auto sm:m-0'>
                    <div className='flex flex-row'>
                        { point.type == 'meeting' ?
                            <MeetIcon className={'h-6 w-6 filter-mc-600'} />
                        : point.type == 'carTrip' ?
                            <CarIcon className={'h-6 w-6 filter-mc-600'} />
                        : point.type == 'vanTrip' ?
                            <VanIcon className={'h-6 w-6 filter-mc-600'} />
                        : point.type == 'bicycleTrip' ?
                            <BicycleIcon className={'h-6 w-6 filter-mc-600'} />
                        : point.type == 'boatTrip' ?
                            <BoatIcon className={'h-6 w-6 filter-mc-600'} />
                        : point.type == 'co-sleeping' ?
                            <BedIcon className={'h-6 w-6 filter-mc-600'} />
                        : false }
                        <h3 className='text-base sm:text-md leading-none text-macaroni-and-cheese-600 m-auto ml-2'>{point.type}</h3>
                    </div>
                    <h3 className='font-bold text-2xl sm:text-4xl sm:py-3 leading-none text-macaroni-and-cheese-950'>{point.title}</h3>
                    <h4 className='text-md text-macaroni-and-cheese-600'>{point.location}</h4>
                    <h5 className='text-sm text-macaroni-and-cheese-950'>{new Date(point.date).toDateString()}</h5>
                </div>
            </div>
            <p className='sm:p-3 text-md w-[90%] m-auto sm:w-full'>{point.description}</p>
        </section>
)}