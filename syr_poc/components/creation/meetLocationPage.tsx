'use client'

import ReactGoogleAutocomplete from "react-google-autocomplete"
import { LeftArrowIcon, RightArrowIcon } from "../ui/icons"
import { Button } from "../ui/button"

export default function MeetLocationPage({ newPoint, setNewPoint, setMeetLocationPage, setTypePage, setDatePage }: any) {

    function changeLocation(place: any) {
        setNewPoint((prevState: Object) => ({ ...prevState,
            location: place.formatted_address,
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
        }))
    }

    function returnFunction() {
        setMeetLocationPage(0)
        setTypePage(1)
    }

    function changeToDatePage() {
        setMeetLocationPage(0)
        setDatePage(1)
        console.log(newPoint)
    }

    return (
        <section className='flex flex-col justify-center'>
            <h1 className='w-full text-center mb-3 text-xl font-bold'>where? (country, city, adress)</h1>
            <ReactGoogleAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                options={{types: []}}
                defaultValue={newPoint.location}
                onPlaceSelected={(place: any) => changeLocation(place)}
                className='w-[90%] h-10 lg:w-[60%] m-auto text-center border rounded-lg'
            />
            <div className='flex flex-row justify-between w-[90%] lg:w-[60%] m-auto'>
                <Button className='w-fit m-3' onClick={() => returnFunction()}>
                    <LeftArrowIcon className='w-5 h-5 filter-white' />
                </Button>
                { newPoint.location == '' ?
                    <Button className='w-fit m-3' variant={'secondary'}>
                        <RightArrowIcon className={'w-5 h-5'} />
                    </Button>
                :
                    <Button className='w-fit m-3' variant={'default'} onClick={() => changeToDatePage()}>
                        <RightArrowIcon className={'w-5 h-5 filter-white'} />
                    </Button>
                }
            </div>
        </section>
)}