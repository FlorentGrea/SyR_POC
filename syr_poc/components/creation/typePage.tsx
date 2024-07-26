'use client'

import { BicycleIcon, BoatIcon, CarIcon, MeetIcon, PlaneIcon, VanIcon } from "../ui/icons";

export default function TypePage({ newPoint, setNewPoint, setTypePage, setMeetLocationPage, setTripLocationPage }: any) {
    
    function typeChooseButton(tripType: string) {
        const tmpNewPoint = {...newPoint}
        
        tmpNewPoint.type = tripType
        setNewPoint(tmpNewPoint)
        setTypePage(0)
        if (tripType == 'meeting') 
            setMeetLocationPage(1)
        else
            setTripLocationPage(1)
    }

    return (
        <section>
            <h1 className='w-full text-center mb-3 text-xl font-bold'>What do you want to organize?</h1>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4'>
                <button onClick={() => typeChooseButton('meeting')} className='aspect-square border rounded-lg bg-red-400'>
                    <MeetIcon className='h-16 w-16 m-auto mb-2' />
                    <h2 className='text-xl font-bold'>Meeting</h2>
                </button>
                <button onClick={() => typeChooseButton('carTrip')} className='aspect-square border rounded-lg bg-red-400'>
                    <CarIcon className='h-16 w-16 m-auto mb-2' />
                    <h2 className='text-xl font-bold'>Car trip</h2>
                </button>
                <button onClick={() => typeChooseButton('vanTrip')} className='aspect-square border rounded-lg bg-red-400'>
                    <VanIcon className='h-16 w-16 m-auto mb-2' />
                    <h2 className='text-xl font-bold'>Van trip</h2>
                </button>
                <button onClick={() => typeChooseButton('bicycleTrip')} className='aspect-square border rounded-lg bg-red-400'>
                    <BicycleIcon className='h-16 w-16 m-auto mb-2' />
                    <h2 className='text-xl font-bold'>Bicycle trip</h2>
                </button>
                <button onClick={() => typeChooseButton('boatTrip')} className='aspect-square border rounded-lg bg-red-400'>
                    <BoatIcon className='h-16 w-16 m-auto mb-2' />
                    <h2 className='text-xl font-bold'>Boat trip</h2>
                </button>
                <button onClick={() => typeChooseButton('planeTrip')} className='aspect-square border rounded-lg bg-red-400'>
                    <PlaneIcon className='h-16 w-16 m-auto mb-2' />
                    <h2 className='text-xl font-bold'>Plane trip</h2>
                </button>
            </div>
        </section>
)}