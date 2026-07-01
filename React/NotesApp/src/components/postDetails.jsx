import React from 'react'

export default function postDetails({post}) {
  return (
    <div>
      
      {/* <div>
        <div className='flex items-center gap-2 '><img src={post.authorAvartar} alt="" className='h-5 rounded-full' /><span>{post.author}</span><span>{post.createdAt.slice(5,10)}</span>
        </div>
      </div> */}

      <div className='border p-2 w-73 h-66 ml-1'>
            <div className='flex items-center gap-2 border-b border-gray-300 pb-1' ><img src={post.authorAvatar} alt="" className='h-6 rounded-full' />
              <span className='text-sm font-semibold '>{post.author}</span><span>{post.createdAt.slice(5,10)}</span>
            </div>

            <div className='text-center pt-1'>
              <div className='text-sm text-blue-500'>{post.title}</div>
              <div className='text-gray-500'>{post.content}</div>
            </div>

            <div>
              <div className='text-sm pt-3'>
                👍🏻{post.likes} || 💬{post.comments}  || ⏩{post.shares} || 🏷️{post.category}
              </div>
              <div className='p-2'>
                {post.tags.map((e)=>(<span className='text-sm text-red-600'>#{e} </span>))}
              </div>
            </div>
            
        </div>
    </div>
  )
}
