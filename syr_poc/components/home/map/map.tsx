'use client'

import { BicycleIcon, BoatIcon, CarIcon, MeetIcon, PlaneIcon, VanIcon, XIcon } from '@/components/ui/icons';
import Image from 'next/image';
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
                            <button onClick={() => setSelectedLocation(point.id)} className={'w-fit py-1 px-2 border rounded-full' + ((selectedLocation === point.id) ? ' bg-black z-20' : ' bg-white z-10')}>
                                { point.type == 'meeting' ?
                                    <MeetIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) && 'filter-white')} />
                                : point.type == 'carTrip' ?
                                    <CarIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) && 'filter-white')} />
                                : point.type == 'vanTrip' ?
                                    <VanIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) && 'filter-white')} />
                                : point.type == 'bicycleTrip' ?
                                    <BicycleIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) && 'filter-white')} />
                                : point.type == 'boatTrip' ?
                                    <BoatIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) && 'filter-white')} />
                                : point.type == 'planeTrip' ?
                                    <PlaneIcon className={'h-5 w-5 ' + ((selectedLocation === point.id) && 'filter-white')} />
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
                                <article className='flex flex-col h-52 w-64'>
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
                                        <button className='absolute top-2 right-2 bg-black/40 rounded-full focus:border-none' onClick={() => setSelectedLocation(0)}>
                                            <XIcon className='filter-white' />
                                        </button>
                                    </div>
                                    <div className='flex flex-col p-2 w-full'>
                                        <h3 className='truncate font-bold text-md'>{point.title}</h3>
                                        <h4 className='truncate test-sm'>{point.location}</h4>
                                        <h5 className='truncate text-xs'>{new Date(point.date).toDateString()}</h5>
                                    </div>
                                </article>
                            </Popup>
                        )}
                        { (selectedLocation === point.id) ? (
                            <article className='absolute bottom-2 mx-auto left-0 right-0 flex flex-row sm:hidden h-24 w-64 bg-white border rounded-lg overflow-hidden'>
                                <div className='relative h-full w-[40%]'>
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
                                    <button className='absolute top-2 left-2 h-2 w-2 bg-black/40 rounded-full focus:border-none' onClick={() => setSelectedLocation(0)}>
                                        <XIcon className='filter-white' />
                                    </button>
                                </div>
                                <div className='flex flex-col p-2 w-60%'>
                                    <h3 className='truncate font-bold text-md'>{point.title}</h3>
                                    <h4 className='truncate test-sm'>{point.location}</h4>
                                    <h5 className='truncate text-xs'>{new Date(point.date).toDateString()}</h5>
                                </div>
                            </article>
                        ) : false}
                    </div>
            )})}
        </ReactMapGl>
)}