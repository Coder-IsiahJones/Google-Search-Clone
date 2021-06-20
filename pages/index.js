import Head from "next/head"
import Avatar from "../components/Avatar"

export default function Home() {
  return (
    <div>
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

          {/* Avatar */}
          <Avatar url='https://pokecharms.com/data/attachment-files/2015/10/236933_Charmander_Picture.png' />
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </div>
  )
}
