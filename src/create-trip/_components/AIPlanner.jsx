import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const
    AIPlanner = ({
        // Header props
        title = "Tell us your travel preferences 🏝️🏙️",
        description = "Just provide some basic information, and our AI trip planner will generate a customized UAE itinerary based on your preferences.",

        // City search props
        citySearch = "",
        selectedCity = null,
        filteredCities = [],
        UAE_CITIES = [],
        onCitySearch = () => { },
        onCitySelect = () => { },

        // Form data props
        formData = {},
        onInputChange = () => { },

        // Button props
        loading = false,
        onGenerateTrip = () => { },

        // Optional props
        containerClassName = "",
        showPopularCities = true
    }) => {
        return (
            <div className='z-50'>
                <div className="flex flex-col">
                    {/* Header */}
                    <div className='w-[60vw] mx-auto text-center'>
                        <h2 className='font-bold text-5xl text-white drop-shadow-xl'>
                            Tell us your travel preferences 🏝️🏙️
                        </h2>
                        <p className='mt-3 text-neutral-200 text-xl drop-shadow'>
                            Just provide some basic information, and our AI trip planner will generate a customized UAE itinerary based on your preferences.
                        </p>
                    </div>
                    {/* Form Container */}
                    <div className={`mt-10 flex flex-col gap-10 mx-auto max-w-4xl p-8 rounded-xl shadow-2xl bg-white/95 dark:bg-neutral-900/90 backdrop-blur-sm text-neutral-900 dark:text-white transition-colors duration-500 ${containerClassName}`}>

                        {/* City Search Section */}
                        <div className="relative">
                            <h2 className='text-xl my-3 font-medium text-neutral-900 dark:text-neutral-100'>Where in the UAE would you like to visit?</h2>
                            <div className="relative">
                                <Input
                                    placeholder="Search UAE destination (e.g. Dubai, Abu Dhabi, Sharjah)"
                                    value={citySearch}
                                    onChange={(e) => onCitySearch(e.target.value)}
                                    className="text-lg py-6 bg-white/90 dark:bg-neutral-800/90 border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white backdrop-blur-sm"
                                />

                                {/* Selected City Display */}
                                {selectedCity && (
                                    <div className="mt-2 p-3 bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-900/20 dark:to-amber-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800 backdrop-blur-sm">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-bold text-lg text-neutral-900 dark:text-white">{selectedCity.english}</p>
                                                <p className="text-right text-lg text-neutral-600 dark:text-neutral-400 font-arabic" dir="rtl">{selectedCity.arabic}</p>
                                            </div>
                                            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-400 px-2 py-1 rounded-full">Selected</span>
                                        </div>
                                    </div>
                                )}

                                {/* City Suggestions Dropdown */}
                                {filteredCities.length > 0 && (
                                    <div className="absolute min-w-full z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-md w-full mt-1 shadow-lg max-h-60 overflow-y-auto">
                                        {filteredCities.map((city, index) => (
                                            <div
                                                key={index}
                                                onClick={() => onCitySelect(city)}
                                                className="px-4 py-3 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/80 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800 last:border-b-0"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="font-medium text-neutral-900 dark:text-white">{city.english}</p>
                                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-arabic" dir="rtl">{city.arabic}</p>
                                                    </div>
                                                    <span className="text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-400 px-2 py-1 rounded">UAE</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Popular Cities */}
                            {showPopularCities && UAE_CITIES.length > 0 && (
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                                    Popular:
                                    <span className="mx-2 cursor-pointer text-emerald-600 dark:text-emerald-400 hover:underline" onClick={() => onCitySelect(UAE_CITIES[0])}>Abu Dhabi</span> •
                                    <span className="mx-2 cursor-pointer text-emerald-600 dark:text-emerald-400 hover:underline" onClick={() => onCitySelect(UAE_CITIES[1])}>Dubai</span> •
                                    <span className="mx-2 cursor-pointer text-emerald-600 dark:text-emerald-400 hover:underline" onClick={() => onCitySelect(UAE_CITIES[2])}>Sharjah</span> •
                                    <span className="mx-2 cursor-pointer text-emerald-600 dark:text-emerald-400 hover:underline" onClick={() => onCitySelect(UAE_CITIES[6])}>Fujairah</span>
                                </p>
                            )}
                        </div>

                        {/* Days Input Section */}
                        <div>
                            <h2 className='text-xl my-3 font-medium text-neutral-900 dark:text-neutral-100'>How many days are you planning your trip?</h2>
                            <Input
                                placeholder="Ex. 3 (Max 15 days)"
                                type="number"
                                min="1"
                                max="15"
                                value={formData?.noOfDays || ''}
                                onChange={(e) => onInputChange('noOfDays', e.target.value)}
                                className="py-6 text-lg bg-white/90 dark:bg-neutral-800/90 border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white backdrop-blur-sm"
                            />
                        </div>

                        {/* Budget Options Section */}
                        <div>
                            <h2 className='text-xl my-3 font-medium text-neutral-900 dark:text-neutral-100'>What is Your Budget? (AED)</h2>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                                {SelectBudgetOptions.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => onInputChange('budget', item.title)}
                                        className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300 backdrop-blur-sm
                    ${formData?.budget === item.title ?
                                                'shadow-lg border-emerald-500 bg-emerald-50/90 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100' :
                                                'border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-800/90 text-neutral-900 dark:text-white'}
                  `}
                                    >
                                        <h2 className='text-4xl mb-3'>{item.icon}</h2>
                                        <h2 className='font-bold text-lg'>{item.title}</h2>
                                        <h2 className='text-sm text-neutral-500 dark:text-neutral-400'>{item.desc}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Traveler Options Section */}
                        <div>
                            <h2 className='text-xl my-3 font-medium text-neutral-900 dark:text-neutral-100'>Who do you plan on traveling with on your UAE adventure?</h2>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                                {SelectTravelesList.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => onInputChange('traveler', item.people)}
                                        className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300 backdrop-blur-sm
                    ${formData?.traveler === item.people ?
                                                'shadow-lg border-amber-500 bg-amber-50/90 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100' :
                                                'border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-800/90 text-neutral-900 dark:text-white'}
                  `}
                                    >
                                        <h2 className='text-4xl mb-3'>{item.icon}</h2>
                                        <h2 className='font-bold text-lg'>{item.title}</h2>
                                        <h2 className='text-sm text-neutral-500 dark:text-neutral-400'>{item.desc}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Generate Button Section */}
                        <div className='mt-10 justify-center flex'>
                            <Button
                                disabled={loading}
                                onClick={onGenerateTrip}
                                className="bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-semibold px-8 py-6 text-lg shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                            >
                                {loading ?
                                    <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> :
                                    <span className="flex items-center gap-2">
                                        ✨ Generate Trip Plan
                                    </span>
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default AIPlanner;