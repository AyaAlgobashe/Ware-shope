import React from 'react'

const Newsitem = (props) => {
    let { item } = props
    return (
        <div key={item.id} className="bg-info p-4 my-3 rounded-2 mx-5" >
            <h3 className='text-dark'>{item.productName}</h3>
            <p className='text-muted'>{item.desc}</p>
        </div>
    )
}

export default Newsitem