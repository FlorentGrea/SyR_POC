'use client'

import { BedIcon, BicycleIcon, BoatIcon, CarIcon, MeetIcon, PlaneIcon, VanIcon } from "../ui/icons";

export default function TypePage({ newPoint, setNewPoint, setTypePage, setMeetLocationPage, setTripLocationPage }: any) {
    
    function typeChooseButton(tripType: string) {
        const tmpNewPoint = {...newPoint}
        
        tmpNewPoint.type = tripType
        setNewPoint(tmpNewPoint)
        setTypePage(0)
        if (tripType == 'meeting' || tripType == 'co-sleeping') 
            setMeetLocationPage(1)
        else
            setTripLocationPage(1)
    }

    return (
        <section>
            <h1 className='w-full text-center my-3 text-2xl font-bold text-macaroni-and-cheese-950'>What do you want to organize?</h1>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4'>
                <button onClick={() => typeChooseButton('meeting')} className='relative aspect-square border rounded-lg shadow overflow-hidden z-0'>
                    <div className="absolute -translate-y-1/2 rounded-full w-96 h-96 blur-3xl mix-blend opacity top-96 -left-56 bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute -top-64 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute top-[50%] bottom-[50%] w-fit h-fit left-0 right-0 z-50 m-auto flex flex-col">
                        <MeetIcon className='h-12 w-12 sm:h-16 sm:w-16 m-auto mb-2 filter-black' />
                        <h2 className='text-xl font-bold'>Meeting</h2>
                    </div>
                </button>
                <button onClick={() => typeChooseButton('carTrip')} className='relative aspect-square border rounded-lg shadow overflow-hidden z-0'>
                    <div className="absolute -translate-y-1/2 rounded-full w-96 h-96 blur-3xl mix-blend opacity top-96 -left-56 bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute -top-64 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute top-[50%] bottom-[50%] w-fit h-fit left-0 right-0 z-50 m-auto flex flex-col">
                        <CarIcon className='h-12 w-12 sm:h-16 sm:w-16 m-auto mb-2 filter-black' />
                        <h2 className='text-xl font-bold'>Car trip</h2>
                    </div>
                </button>
                <button onClick={() => typeChooseButton('vanTrip')} className='relative aspect-square border rounded-lg shadow overflow-hidden z-0'>
                    <div className="absolute top-[50%] bottom-[50%] w-fit h-fit left-0 right-0 z-50 m-auto flex flex-col">
                        <VanIcon className='h-12 w-12 sm:h-16 sm:w-16 m-auto mb-2 filter-black' />
                        <h2 className='text-xl font-bold'>Van trip</h2>
                    </div>
                    <div className="absolute -translate-y-1/2 rounded-full w-96 h-96 blur-3xl mix-blend opacity top-96 -left-56 bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute -top-64 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend bg-macaroni-and-cheese-400 z-10"/>
                </button>
                <button onClick={() => typeChooseButton('bicycleTrip')} className='relative aspect-square border rounded-lg shadow overflow-hidden z-0'>
                    <div className="absolute top-[50%] bottom-[50%] w-fit h-fit left-0 right-0 z-50 m-auto flex flex-col">
                        <BicycleIcon className='h-12 w-12 sm:h-16 sm:w-16 m-auto mb-2 filter-black' />
                        <h2 className='text-xl font-bold'>Bicycle trip</h2>
                    </div>
                    <div className="absolute -translate-y-1/2 rounded-full w-96 h-96 blur-3xl mix-blend opacity top-96 -left-56 bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute -top-64 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend bg-macaroni-and-cheese-400 z-10"/>
                </button>
                <button onClick={() => typeChooseButton('boatTrip')} className='relative aspect-square border rounded-lg shadow overflow-hidden z-0'>
                    <div className="absolute top-[50%] bottom-[50%] w-fit h-fit left-0 right-0 z-50 m-auto flex flex-col">
                        <BoatIcon className='h-12 w-12 sm:h-16 sm:w-16 m-auto mb-2 filter-black' />
                        <h2 className='text-xl font-bold'>Boat trip</h2>
                    </div>
                    <div className="absolute -translate-y-1/2 rounded-full w-96 h-96 blur-3xl mix-blend opacity top-96 -left-56 bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute -top-64 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend bg-macaroni-and-cheese-400 z-10"/>
                </button>
                <button onClick={() => typeChooseButton('co-sleeping')} className='relative aspect-square border rounded-lg shadow overflow-hidden z-0'>
                    <div className="absolute top-[50%] bottom-[50%] w-fit h-fit left-0 right-0 z-50 m-auto flex flex-col">
                        <BedIcon className='h-12 w-12 sm:h-16 sm:w-16 m-auto mb-2 filter-black' />
                        <h2 className='text-xl font-bold'>Co-sleeping</h2>
                    </div>
                    <div className="absolute -translate-y-1/2 rounded-full w-96 h-96 blur-3xl mix-blend opacity top-96 -left-56 bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute -top-64 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend bg-macaroni-and-cheese-400 z-10"/>
                </button>
            </div>
        </section>
)}