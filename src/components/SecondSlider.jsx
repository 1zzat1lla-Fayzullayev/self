import React from 'react'
import secondslider from '../array/SecondSliderArr'
import Wrapper from '../layout/Wrapper'

function SecondSlider() {
	return (
		<>
			<Wrapper>
				<div className='flex flex-col items-center'>
					<h2 className='text-white font-semibold text-center text-[35px] mt-[50px]'>
						Partners
					</h2>
					<p className='text-[#A1A3A7] font-semibold'>including testnets</p>
				</div>
				<div className='relative overflow-hidden h-[200px] w-full grid place-items-center mt-[20px]'>
					<div className='image-slider-track flex animate-playRight'>
						{secondslider.concat(secondslider).map((slide, index) => (
							<div
								key={index}
								className='h-[150px] w-[200px] grid place-items-center p-[15px] perspective-[100px] text-white'
							>
								<img
									src={slide.img}
									alt={slide.title}
									className='h-[60px] md:h-[80px] object-cover transition-transform duration-1000 hover:translate-z-[20px]'
								/>
								<p className='text-white font-semibold text-center'>
									{slide.title}
								</p>
							</div>
						))}
					</div>
					<div className='absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-[#131413] to-transparent z-2'></div>
					<div className='absolute top-0 right-0 h-full w-[20%] bg-gradient-to-l from-[#131413] to-transparent z-2'></div>
				</div>
			</Wrapper>
		</>
	)
}

export default SecondSlider
