import React from 'react'

function Hero() {
	return (
		<>
			<div className='flex justify-center items-center pt-[100px]'>
				<video
					src='https://safe.global/videos/Home/safe-2024-hero-vp9.webm'
					autoPlay
					playsInline
					loop
					muted
					className='w-full md:max-w-[850px]'
				>
					<source
						src='https://safe.global/videos/Home/safe-2024-hero-vp9.webm'
						type='video/webm'
					/>
					<source
						src='https://safe.global/videos/Home/safe-2024-hero.mp4'
						type='video/mp4'
					/>
				</video>
				<h1 className='absolute text-[50px] md:text-[70px] text-white w-full md:w-[50%] font-semibold text-center leading-[55px] md:leading-[70px]'>
					Smart Accounts to{' '}
					<span className='text-[#12FF80]'>Own the Internet</span>{' '}
				</h1>
			</div>
		</>
	)
}

export default Hero
