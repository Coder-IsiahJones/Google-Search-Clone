/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head"
import Avatar from "../components/Avatar"
import Footer from "../components/Footer"
import { ViewGridIcon, SearchIcon } from "@heroicons/react/outline"
import { MicrophoneIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRef } from "react"
import { useRouter } from "next/router"

export default function Home() {
  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <div className='flex flex-col  justify-center h-screen'>
      <Head>
        <title>Google 2.0</title>
        <link rel='icon' href='/google.ico' />
      </Head>

      {/* Header */}
      <header className='flex w-ful p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar url='https://pokecharms.com/data/attachment-files/2015/10/236933_Charmander_Picture.png' />
        </div>
      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          width='300'
          height='100'
        />

        <div className='flex w-full mt-5 hover:shadow-lg form:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input
            ref={searchInputRef}
            type='text'
            className='focus:outline-none flex-grow'
          />
          <MicrophoneIcon className='h-5' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 '>
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button onClick={search} className='btn'>
            {"I'm Feeling Lucky"}
          </button>
        </div>
      </form>

      {/* Footer */}

      <Footer />
    </div>
  )
}
