'use client'

import ReactGoogleAutocomplete from "react-google-autocomplete"
import { LeftArrowIcon, RightArrowIcon } from "../ui/icons"
import { Button } from "../ui/button"

export default function TripLocationPage({ newPoint, setNewPoint, setTripLocationPage, setTypePage, setDatePage }: any) {

    function changeLocation(place: any) {
        setNewPoint((prevState: Object) => ({ ...prevState,
            location: place.formatted_address,
            longitude: place.geometry.location.lng(),
            latitude: place.geometry.location.lat()
        }))
    }

    function changeArrivalLocation(place: any) {
        setNewPoint((prevState: Object) => ({ ...prevState,
            arrivalLocation: place.formatted_address,
            endLongitude: place.geometry.location.lng(),
            endLatitude: place.geometry.location.lat(),
        }))
    }

    function returnFunction() {
        setTripLocationPage(0)
        setTypePage(1)
    }

    function changeToDatePage() {
        setTripLocationPage(2)
        setDatePage(1)
    }

    return (
        <section className='flex flex-col justify-center'>
            <h1 className='w-full text-center my-3 text-2xl font-bold text-macaroni-and-cheese-950'>from where?</h1>
            <ReactGoogleAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                options={{types: []}}
                defaultValue={newPoint.location}
                onPlaceSelected={(place: any) => changeLocation(place)}
                className='w-[90%] h-10 lg:w-[60%] m-auto text-center border rounded-lg border-macaroni-and-cheese-800'
            />
            <h1 className='w-full text-center my-3 text-2xl font-bold text-macaroni-and-cheese-950'>to where?</h1>
            <ReactGoogleAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                options={{types: []}}
                defaultValue={newPoint.arrivalLocation}
                onPlaceSelected={(place: any) => changeArrivalLocation(place)}
                className='w-[90%] h-10 lg:w-[60%] m-auto text-center border rounded-lg border-macaroni-and-cheese-800'
            />
            <div className='flex flex-row justify-between w-[90%] lg:w-[60%] m-auto'>
                <Button className='w-fit m-3 bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50' onClick={() => returnFunction()}>
                    <LeftArrowIcon className='w-5 h-5 filter-white' />
                </Button>
                {(newPoint.location == '' || newPoint.arrivalLocation == '') ?
                    <Button className='w-fit m-3 bg-macaroni-and-cheese-100 text-macaroni-and-cheese-400' variant={'secondary'}>
                        <RightArrowIcon className={'w-5 h-5 filter-mc-400'} />
                    </Button>
                :
                    <Button className='w-fit m-3 bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50' variant={'default'} onClick={() => changeToDatePage()}>
                        <RightArrowIcon className={'w-5 h-5 filter-white'} />
                    </Button>
                }
            </div>
        </section>
)}