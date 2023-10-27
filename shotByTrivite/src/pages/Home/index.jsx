import React from 'react'

function Home() {
    return (
        <main>
            {/**first section. Hero section............................................................ */}
            <section className='h-full w-full bg-indigo-400'>
                <div className='w-[80%] mx-auto p-10'>
                    <div className='flex pt-[5%]'>
                        <div className='self-center'>
                            <h1 className='text-4xl font-semibold'>Product<br /> Designer</h1>
                            <p className=' pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sapiente!</p>
                            <p className=' pt-2'>Lorem ipsum dolor sit amet.</p>
                            <ul className='flex pt-2'>
                                <li>link1</li>
                                <li>link2</li>
                            </ul>
                        </div>
                        <div className='max-w-md ml-10'>
                            <img src="./src/assets/boyssss.png" alt="" />
                            <div className=''>
                                <ul className='flex justify-between pt-1 underline'>
                                    <li>TW</li>
                                    <li>LN</li>
                                    <li>YT</li>
                                    <li>IG</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    bottom
                </div>
            </section>

            {/**second section. About me section............................................................. */}
            <section className='h-full bg-orange-300'>
                <div className=' w-[80%] bg-indigo-300 mx-auto'>
                    <div className='bg-red-500'>
                        <p className='text-6xl font-semibold pt-5 pb-5'>
                            <span className='text-stroke'>01.</span> 
                            About me
                        </p>
                        <div className='border-t-2 border-black'>
                            <p className='pt-16 pb-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis est commodi velit inventore 
                                animi error id nemo autem veritatis consequatur, debitis vero, ut tempore optio officiis, 
                                saepe magnam maxime. Neque tenetur perspiciatis non corporis sint ipsam odio officiis obcaecati 
                                sunt dolores, quos alias laboriosam saepe beatae numquam explicabo? Provident, error earum, 
                                magnam ipsum dolorem odio ea tempore sapiente facilis atque eos pariatur, autem non mollitia 
                                debitis quaerat neque aspernatur rerum sit exercitationem modi quod perferendis! Quaerat iure, 
                                reprehenderit magni et sunt, nulla error amet, quibusdam explicabo ducimus iste. Quod nulla veritatis 
                                nesciunt inventore harum ut alias, atque quam, quia commodi assumenda optio quidem debitis error, eveniet 
                                possimus ullam deleniti vel labore! 
                                Necessitatibus, dolore incidunt. Assumenda, a perspiciatis! Dolorem, atque officia.
                            </p>
                        </div>
                    </div>
                    <div className='bg-red-500'>
                        <p className='text-6xl font-semibold pt-5 pb-5 text-end'>
                            <span className='text-stroke'>02.</span> 
                            Experience
                        </p>
                        <div className='border-t-2 border-black'>
                            <div className=' bg-indigo-300 text-lg flex justify-between p-7'>
                                <p className=' self-center'>text</p>
                                <div>
                                    Product Designer 
                                    <br />
                                    Aug 2023 - present 
                                </div>
                            </div>
                            <div className=' bg-indigo-300 text-lg flex justify-between p-7 border-t-2 border-black'>
                                <p className=' self-center'>text</p>
                                <div>
                                    Product Designer 
                                    <br />
                                    Aug 2023 - present 
                                </div>
                            </div>
                            <div className=' bg-indigo-300 text-lg flex justify-between p-7 border-t-2 border-black'>
                                <p className=' self-center'>text</p>
                                <div>
                                    Product Designer 
                                    <br />
                                    Aug 2023 - present 
                                </div>
                            </div>
                            <div className=' bg-indigo-300 text-lg flex justify-between p-7 border-b-2 border-t-2 border-black'>
                                <p className=' self-center'>text</p>
                                <div>
                                    Product Designer 
                                    <br />
                                    Aug 2023 - present 
                                </div>
                            </div>
                        </div>
                        <div className='bg-indigo-500 flex justify-center p-[5%]'>
                            <button className='bg-green-300 px-36 py-6 text-lg'>
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/**third section my work section. Experience............................................................. */}
            <section className='h-full bg-yellow-200'>
                <div className='w-[80%] mx-auto'>
                    <p className='text-6xl font-semibold pt-5 pb-5 text-end'>
                            <span className='text-stroke'>04.</span> 
                            My work
                    </p>
                    <div className='border-t-2 border-black'>
                        <div className='max-h-min flex pb-5 pt-5'>
                            <img src="./src/assets/rohan.png" className='h-[290px] w-[550px] object-cover' alt="" />
                            <div className='max-w-xl bg-white p-12'>
                                <h2 className='text-2xl pb-3'>MasterKey Finance</h2>
                                <p className=' pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo eligendi porro quis, 
                                    quaerat corporis ut voluptate odit deleniti 
                                    rem praesentium reprehenderit architecto, facilis commodi, soluta id. Fugit, dignissimos perspiciatis?
                                </p>
                                <p>View Live</p>
                            </div>
                        </div>
                        <div className='max-h-min bg-slate-800 flex pb-5'>
                            <img src="./src/assets/rohan.png" className='h-[290px] w-[550px] object-cover' alt="" />
                            <div className='max-w-xl bg-white p-12'>
                                <h2 className='text-2xl pb-3'>MasterKey Finance</h2>
                                <p className=' pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo eligendi porro quis, 
                                    quaerat corporis ut voluptate odit deleniti 
                                    rem praesentium reprehenderit architecto, facilis commodi, soluta id. Fugit, dignissimos perspiciatis?
                                </p>
                                <p>View Live</p>
                            </div>
                        </div>
                        <div className='max-h-min bg-slate-800 flex pb-5'>
                            <img src="./src/assets/rohan.png" className='h-[290px] w-[550px] object-cover' alt="" />
                            <div className='max-w-xl bg-white p-12'>
                                <h2 className='text-2xl pb-3'>MasterKey Finance</h2>
                                <p className=' pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo eligendi porro quis, 
                                    quaerat corporis ut voluptate odit deleniti 
                                    rem praesentium reprehenderit architecto, facilis commodi, soluta id. Fugit, dignissimos perspiciatis?
                                </p>
                                <p>View Live</p>
                            </div>
                        </div>
                        <div className='max-h-min bg-slate-800 flex pb-5'>
                            <img src="./src/assets/rohan.png" className='h-[290px] w-[550px] object-cover' alt="" />
                            <div className='max-w-xl bg-white p-12'>
                                <h2 className='text-2xl pb-3'>MasterKey Finance</h2>
                                <p className=' pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo eligendi porro quis, 
                                    quaerat corporis ut voluptate odit deleniti 
                                    rem praesentium reprehenderit architecto, facilis commodi, soluta id. Fugit, dignissimos perspiciatis?
                                </p>
                                <p>View Live</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**fourth section contact us section. Experience............................................................. */}
            <section className='h-full bg-indigo-200'>
                <div className='w-[80%] bg-red-200 mx-auto'>
                    <p className='text-6xl font-semibold pt-5 pb-5 text-start'>
                            <span className='text-stroke'>05.</span> 
                            Endorsements
                    </p>
                    <div className='border-t-2 border-black flex justify-between pt-[10%] pb-[10%]'>
                        <div className='bg-emerald-300 max-w-sm p-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium id facere minima assumenda, 
                                quaerat sit, pariatur ad praesentium 
                                illum ex nostrum totam dicta facilis nulla incidunt quam rem quas officiis quidem quisquam?
                            </p>
                            <div className=' bg-yellow-200 flex justify-between pt-4'>
                                <p>Tony Stark <br />Ironman</p>
                                <img src="./src/assets/facebook.png" className=' h-8 w-9 object-contain' alt="" />
                            </div>
                        </div>
                        <div className='bg-emerald-300 max-w-sm p-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium id facere minima assumenda, 
                                quaerat sit, pariatur ad praesentium 
                                illum ex nostrum totam dicta facilis nulla incidunt quam rem quas officiis quidem quisquam?
                            </p>
                            <div className=' bg-yellow-200 flex justify-between pt-4'>
                                <p>Tony Stark <br />Ironman</p>
                                <img src="./src/assets/facebook.png" className=' h-8 w-9 object-contain' alt="" />
                            </div>
                        </div>
                        <div className='bg-emerald-300 max-w-sm p-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium id facere minima assumenda, 
                                quaerat sit, pariatur ad praesentium 
                                illum ex nostrum totam dicta facilis nulla incidunt quam rem quas officiis quidem quisquam?
                            </p>
                            <div className=' bg-yellow-200 flex justify-between pt-4'>
                                <p>Tony Stark <br />Ironman</p>
                                <img src="./src/assets/facebook.png" className=' h-8 w-9 object-contain' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=' text-center'>
                        <p>Lets create experiences that inspore and empower.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, architecto.</p>
                    </div>
                    <div className='bg-orange-300 w-full pt-14'>
                        <form action="">
                            <div className='flex'>
                                <div className='w-[50%]'>
                                    <div className='p-8'>
                                        <label htmlFor="">
                                            Full Name
                                        </label>
                                        <br />
                                        <input type="text" 
                                        placeholder='Enter your full name' className='w-[100%] h-[40px] pt-5 outline-none border-b-2 border-black bg-transparent' />
                                    </div>
                                    <div className=' pt-4 p-8'>
                                        <label htmlFor="">
                                            Full Name
                                        </label>
                                        <br />
                                        <input type="text" placeholder='Enter your full name' className='w-[100%] h-[40px] pt-5 outline-none border-b-2 border-black bg-transparent' />
                                    </div>
                                </div>
                                <div className='w-[50%] p-8'>
                                    <label htmlFor="">
                                        Message
                                    </label>
                                    <br />
                                    <textarea name="" id="" placeholder='enter message' className='w-full h-[154px] outline-none border-b-2 border-black bg-transparent' ></textarea>
                                </div>
                            </div>
                            <div className='p-8'>
                                <button className='py-5 w-[170px] bg-green-300'>
                                    Send a message
                                </button>
                            </div>
                        </form>
                        <p className='text-center pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem quia iusto vitae. Tempore?</p>
                    </div>
                </div>
            </section>
            {/**end section........................................................................ */}
        </main>        
    )
}

export default Home
