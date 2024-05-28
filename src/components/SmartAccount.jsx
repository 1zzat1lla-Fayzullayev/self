import React from 'react'
import Wrapper from '../layout/Wrapper'
import rightArrow from '../assets/right-arrow.png'
import manifestobg from '../assets/manifesto-bg.png'

function SmartAccount() {
	return (
		<div className='mt-[50px] md:mt-[200px]'>
			<Wrapper>
				<div className='flex flex-col md:flex-row items-center justify-center'>
					<div className='flex flex-col'>
						<p className='text-[#97999D] font-semibold text-center md:text-start'>
							ETHEREUM'S TRANSITION TO SMART ACCOUNTS
						</p>
						<h2 className='text-white text-[35px] text-start md:text-start md:text-[50px] font-semibold leading-[48px] md:leading-[60px] mx-[20px] md:mx-0 md:w-[90%] mt-[35px]'>
							<span className='italic'>Наша миссия </span>- стать ведущей
							платформой децентрализованной идентификации <br />
							<span className='text-[#12FF80]'></span>
						</h2>
						<div className='flex md:items-center mx-[20px] md:mx-0 md:justify-start mt-[10px] md:mt-[70px]'>
							<a
								href='#'
								className={`text-white text-[20px] text-center md:text-start hover:text-[#12FF80] hover:border-b-[2px] border-[#12FF80] pb-[2px]`}
							>
								Ознакомьтесь с нашим видением и дорожной картой
							</a>
							<div className='arrow-container hover:brightness-125'>
								<img
									src={rightArrow}
									alt='arrow'
									className='w-[30px] mt-[4px]'
								/>
							</div>
						</div>
					</div>
					<div className='relative flex flex-col'>
						<img
							src={manifestobg}
							alt='404'
							className='absolute w-full md:w-[500px]'
						/>
						<div className='mt-[60px]'>
							<video
								src='https://safe.global/videos/Home/ownership-vp9.webm'
								autoPlay
								playsInline
								loop
								muted
								className='max-w-[300px] md:max-w-[450px]'
							>
								<source
									src='https://safe.global/videos/Home/ownership-vp9.webm'
									type='video/webm'
								/>
								<source
									src='https://safe.global/videos/Home/safe-2024-hero.mp4'
									type='video/mp4'
								/>
							</video>
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default SmartAccount
