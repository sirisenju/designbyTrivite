import React from 'react'

function Navlinks() {
    return (
        <div className='bg-blue-200 h-16'>
            <div className='w-[80%] mx-auto'>
                <div className='w-full flex justify-between p-2'>
                    <p className=' self-center'>TextLogo</p>
                    <li className='flex w-[30%] justify-between'>
                        <ul className=''><span className='float-right'>01</span><br /> Home</ul>
                        <ul className=''><span className='float-right'>01</span><br /> About me</ul>
                        <ul className=''><span className='float-right'>01</span><br /> My works</ul>
                        <ul className=''><span className='float-right'>01</span><br /> Contact me</ul>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Navlinks
