import React from 'react'

const Blog = ({params}) => {
    console.log(params.slug);
    if (params.slug?.length === 2) {
        return (
            <div className='mt-[350px]'>
            cat {params.slug[0]} dog {params.slug[1]}
            </div>
        )
    }else if (params.slug?.length === 1){
      return (
        <div className='mt-[350px]'>
        cat {params.slug[0]}
        </div>
      )
    }
  return (
    <div className='mt-[350px]'>
        Blog home page
        </div>
  )
}

export default Blog