import Image from 'next/image'
import React from 'react'

interface articleType {
  image: string;
  title: string;
  desc: string;
}

const ArticleCard:React.FC<articleType> = ({image, title, desc}) => {
  return (
    <div className='border rounded-3xl w-[20rem] max-w-xs mx-auto overflow-hidden  flex flex-col items-center p-5'>
            <Image
                src={image}
                width={1000}
                height={1000}
                alt='foood'
                className='rounded-2xl border object-cover w-full h-[12rem]'
            />
          <div className='flex flex-col items-start w-full '>

          <h3 className='mt-5 text-primary text-[1rem] font-bold'>{title}</h3>
          <p className='text-xs mt-5 text-para_text'>{desc}</p>
          <button className='px-6 py-2 border text-xs border-black rounded-full mt-5'>
            Read More
          </button>
          </div>
    </div>
  )
}

export default ArticleCard