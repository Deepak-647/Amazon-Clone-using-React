import React from 'react'

const ChatMessage = ({name,message,profile}) => {
  return (
    <div className='flex items-center my-2'>
        <img
        alt="user"
        className="h-8 rounded-full "
        src={profile}
      />
      <span className='font-semibold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage