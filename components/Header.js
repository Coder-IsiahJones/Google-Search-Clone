import React, { useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"
import Avatar from "../components/Avatar"
import HeaderOptions from "../components/HeaderOptions"

const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()

    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          width={120}
          height={40}
          className='cursor-pointer'
          onClick={() => router.push("/")}
          alt='Google logo'
        />

        <form className='flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          <input
            type='text'
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />

          {/* Button */}
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>

        {/* Avatar */}
        <Avatar
          className='ml-auto'
          url='https://pokecharms.com/data/attachment-files/2015/10/236933_Charmander_Picture.png'
        />
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  )
}

export default Header
