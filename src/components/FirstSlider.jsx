import React from 'react'
import firstslider from '../array/FirstSliderArr'
import Wrapper from '../layout/Wrapper'

const FirstSlider = () => {
	return (
		<>
			<Wrapper>
				<h2 className='text-white font-semibold text-center text-[35px] mt-[100px]'>
					Trusted by the best
				</h2>
				<div className='relative overflow-hidden h-[200px] w-full grid place-items-center'>
					<div className='image-slider-track flex w-[calc(200px*12)] animate-playLeft'>
						{firstslider.concat(firstslider).map((slide, index) => (
							<div
								key={index}
								className='h-[150px] w-[200px] grid place-items-center p-[15px] perspective-[100px] text-white  text-center'
							>
								<img
									src={slide.img}
									alt={slide.title}
									className='h-[60px] md:h-[80px] object-cover transition-transform duration-1000 hover:translate-z-[20px]'
								/>
								<p>{slide.title}</p>
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

export default FirstSlider
