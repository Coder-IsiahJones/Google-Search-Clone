import React from "react"

const Avatar = ({ url, className }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading='lazy'
      src={url}
      alt='Profile picture'
    />
  )
}

export default Avatar
