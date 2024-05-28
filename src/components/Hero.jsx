import React from 'react'

function Hero() {
	return (
		<>
			<div className='flex justify-center items-center pt-[250px] md:pt-[300px] pb-[200px] md:pb-[100px]'>
				{/* <video
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
				</video> */}
				<h1 className='absolute text-[35px] md:text-[60px] text-white w-full md:w-[50%] font-semibold text-center leading-[55px] md:leading-[70px] '>
					Децентрализованная идентификация для{' '}
					<span
						className='text-[rgb(0 170 255)]'
						style={{ color: 'rgb(0 170 255)' }}
					>
						защиты ваших данных
					</span>{' '}
				</h1>
			</div>
		</>
	)
}

export default Hero
