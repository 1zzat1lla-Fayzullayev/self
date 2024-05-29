import React from 'react'
import Wrapper from '../layout/Wrapper'
import ai from '../assets/ai-big-icon.svg'
import msg from '../assets/msg.png'
import blog from '../array/BlogArr'

function Blog() {
	return (
		<>
			<div className='blog-container w-full h-full mt-[180px]'>
				<Wrapper>
					<p className='uppercase text-[#A1A3A7] font-semibold m-[20px] md:m-0'>
						blog
					</p>
					<div className='flex flex-col md:flex-row justify-between items-center mx-[20px] md:mx-0 gap-[40px]'>
						<div className=''>
							<h2 className='text-white font-semibold text-[30px] md:text-[50px] leading-[65px]'>
								Преимущества интеграции наших{' '}
								<span className='text-[#12FF80]'>технологий:</span>
							</h2>
							{/* <button className='bg-[#12FF80] font-semibold text-[18px] px-[20px] py-[10px] rounded-[5px] mt-[80px] text-black'>
								Read the latest
							</button> */}
						</div>
						<div>
							<div className='relative card1 flex flex-col border-[2px] rounded-[20px] border-[#303033] hover:border-[#12FF80] w-[350px] md:w-[580px] cursor-pointer bg-[#121312] shadow-lg p-4'>
								{/* Inline SVG */}
								<div className='w-[30px] arrow absolute right-5 top-4 transform transition-all ease-in rotate-[320deg]'>
									{/* <svg
										width='35'
										height='35'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='text-white arrow'
									>
										<path
											d='M5 12h14M12 5l7 7-7 7'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg> */}
								</div>

								<div>
									<img src={ai} alt='404' className='w-[200px]' />
								</div>
								{/* <div className='flex items-center mt-[40px]'>
									<img src={msg} alt='msg' />
									<p className='uppercase text-white font-semibold'>use case</p>
								</div> */}
								<h2 className='uppercase text-[50px] text-white font-semibold'>
									did
								</h2>
								<p className='text-white font-semibold ml-[3px] text-[17px]'>
									DID: децентрализованная, криптографически защищенная цифровая
									идентификация.
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-[10px] mt-[100px]'>
						{blog.map(card => (
							<div className='relative card1 flex flex-col border-[2px] rounded-[20px] border-[#303033] hover:border-[#12FF80] w-[300px] h-[270px] cursor-pointer bg-[#121312] shadow-lg p-4'>
								{/* Inline SVG */}
								{/* <div className='w-[30px] arrow absolute right-5 top-4 transform transition-all ease-in rotate-[320deg]'>
									<svg
										width='35'
										height='35'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='text-white arrow'
									>
										<path
											d='M5 12h14M12 5l7 7-7 7'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div> */}

								<div>
									<img src={card.img} alt='404' className='w-[70px]' />
								</div>
								{/* <div className='flex items-center mt-[40px]'>
									<img src={msg} alt='msg' />
									<p className='uppercase text-white font-semibold'>use case</p>
								</div> */}
								<h2 className='text-[18px] text-white font-semibold m-[4px]'>
									{card.title}
								</h2>
							</div>
						))}
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Blog
