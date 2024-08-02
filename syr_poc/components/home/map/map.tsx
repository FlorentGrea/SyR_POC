'use client'

import { BedIcon, BicycleIcon, BoatIcon, CarIcon, MeetIcon, PlaneIcon, VanIcon, XIcon } from '@/components/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';

export default function Map({ mapPoints }: any) {
    const [selectedLocation, setSelectedLocation] = useState(0)
    const [viewState, setViewState] = useState({
        latitude: 46.2276,
        longitude: 2.2137,
        zoom: 4
    })

    return (
        <ReactMapGl
            mapStyle={'mapbox://styles/canardwc/clyyn8d2q00cl01r23wk58eqb'}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            style={{width: '100%', height: '100%'}}
            {...viewState}
            onMove={event => setViewState(event.viewState)}
        >
            { mapPoints.map((point: any) => {
                const imageSrc = point.images[0] ? process.env.NEXT_PUBLIC_DB_ADDR + 'api/files/' + point.collectionId + '/' + point.id + '/' + point.images[0] : ''

                return(
                    <div key={point.id}>
                        <Marker
                            longitude={point.longitude}
                            latitude={point.latitude}
                        >
                            <button onClick={() => setSelectedLocation(point.id)} className={'w-fit py-1 px-2 border rounded-full' + ((selectedLocation === point.id) ? ' bg-macaroni-and-cheese-600 z-20' : ' bg-white z-10')}>
                                { point.type == 'meeting' ?
                                    <MeetIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) ? 'filter-mc-50' : 'filter-mc-950')} />
                                : point.type == 'carTrip' ?
                                    <CarIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) ? 'filter-mc-50' : 'filter-mc-950')} />
                                : point.type == 'vanTrip' ?
                                    <VanIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) ? 'filter-mc-50' : 'filter-mc-950')} />
                                : point.type == 'bicycleTrip' ?
                                    <BicycleIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) ? 'filter-mc-50' : 'filter-mc-950')} />
                                : point.type == 'boatTrip' ?
                                    <BoatIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) ? 'filter-mc-50' : 'filter-mc-950')} />
                                : point.type == 'co-sleeping' ?
                                    <BedIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) ? 'filter-mc-50' : 'filter-mc-950')} />
                                : false }
                            </button>
                        </Marker>
                        { (selectedLocation === point.id) && (
                            <Popup
                                closeButton={false}
                                closeOnClick={false}
                                closeOnMove={true}
                                offset={20}
                                onClose={() => setSelectedLocation(0)}
                                longitude={point.longitude}
                                latitude={point.latitude}
                            >
                                <Link href={`/cards/${point.id}`} className='flex flex-col h-52 w-64 bg-white'>
                                    <div className='h-[60%] w-full'>
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
                                    <div className='flex flex-col p-2 pt-1 w-full'>
                                        <h3 className='truncate font-bold text-lg text-macaroni-and-cheese-950'>{point.title}</h3>
                                        <h4 className='truncate test-sm text-macaroni-and-cheese-600'>{point.location}</h4>
                                        <h5 className='truncate text-xs text-macaroni-and-cheese-950'>{new Date(point.date).toDateString()}</h5>
                                    </div>
                                </Link>
                                <button className='absolute top-2 right-2 bg-black/40 rounded-full focus:border-none' onClick={() => setSelectedLocation(0)}>
                                    <XIcon className='filter-mc-50' />
                                </button>
                            </Popup>
                        )}
                        { (selectedLocation === point.id) ? (
                            <article className='absolute md:hidden bottom-2 left-0 right-0 mx-auto h-24 w-64'>
                                <Link href={`/cards/${point.id}`} className='flex flex-row w-64 h-24 bg-white border rounded-lg overflow-hidden'>
                                    <div className='h-full w-[40%]'>
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
                                    <div className='flex flex-col p-2 w-60%'>
                                        <h3 className='w-36 truncate font-bold text-lg text-macaroni-and-cheese-950'>{point.title}</h3>
                                        <h4 className='w-36 truncate test-sm text-macaroni-and-cheese-600'>{point.location}</h4>
                                        <h5 className='w-36 truncate text-xs text-macaroni-and-cheese-950'>{new Date(point.date).toDateString()}</h5>
                                    </div>
                                </Link>
                                <button className='absolute bottom-[68%] left-2 bg-black/40 rounded-full focus:border-none' onClick={() => setSelectedLocation(0)}>
                                    <XIcon className='filter-mc-50' />
                                </button>
                            </article>
                        ) : false}
                    </div>
            )})}
        </ReactMapGl>
)}