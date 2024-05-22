import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../layout/Wrapper'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

function Subscribe() {
	const [inView, setInView] = useState(false)
	const [counterOn, setCounterOn] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setInView(entry.isIntersecting)
			},
			{ threshold: 0.5 }
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [])

	return (
		<div
			ref={ref}
			className='mt-[100px] subscribe-container flex justify-center items-center flex-col'
		>
			<Wrapper>
				<div className='flex flex-col items-center justify-center text-start'>
					<p className='text-[#A0A2A6] font-semibold text-[17px] pt-[50px]'>
						ENTRUSTED TO KEEP YOUR ASSETS SAFE
					</p>
					<h2 className='text-white font-semibold text-[35px] md:text-[50px] md:leading-[55px] w-[80%] mt-[15px]'>
						<span className='italic'>Safe</span> Smart Accounts are battle
						tested and used more than any other
					</h2>
				</div>
				<ScrollTrigger
					onEnter={() => setCounterOn(true)}
					onExit={() => setCounterOn(false)}
				>
					<div className='flex flex-col md:flex-row justify-center items-center mt-[80px]'>
						<div className={`left-video ${inView ? 'move-left' : ''}`}>
							<video
								src='https://safe.global/videos/Home/brackets-left-vp9.webm'
								autoPlay
								playsInline
								loop
								muted
								className='max-w-[100px] hidden md:block'
							>
								<source
									src='https://safe.global/videos/Home/brackets-left-vp9.webm'
									type='video/webm'
								/>
							</video>
						</div>
						<div className={`text-content ${inView ? 'show' : ''}`}>
							<ul className='flex flex-col md:flex-row items-center gap-[70px]'>
								<div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
									<li className='text-[#19FC8B] text-[50px] md:text-[70px] font-semibold text-center'>
										{counterOn && (
											<CountUp start={0} end={56} duration={2} delay={0} />
										)}
										M
									</li>
									<li className='text-[#A0A2A6] font-semibold'>
										TOTAL TRANSACTIONS
									</li>
								</div>
								<div>
									<li className='text-[#19FC8B] text-[50px] md:text-[70px] font-semibold text-center'>
										$
										{counterOn && (
											<CountUp start={0} end={100} duration={2} delay={0} />
										)}
										B+
									</li>
									<li className='text-[#A0A2A6] font-semibold text-center'>
										TOTAL ASSETS STORED
									</li>
								</div>
								<div>
									<li className='text-[#19FC8B] text-[50px] md:text-[70px] font-semibold text-center'>
										{counterOn && (
											<CountUp
												start={0}
												end={8.7}
												duration={2}
												delay={0}
												decimals={1}
											/>
										)}
										M
									</li>
									<li className='text-[#A0A2A6] font-semibold text-end'>
										TOTAL ACCOUNTS DEPLOYED
									</li>
								</div>
							</ul>
						</div>
						<div className={`right-video ${inView ? 'move-right' : ''}`}>
							<video
								src='https://safe.global/videos/Home/brackets-right-vp9.webm'
								autoPlay
								playsInline
								loop
								muted
								className='max-w-[100px] hidden md:block'
							>
								<source
									src='https://safe.global/videos/Home/brackets-right-vp9.webm'
									type='video/webm'
								/>
							</video>
						</div>
					</div>
				</ScrollTrigger>
			</Wrapper>
		</div>
	)
}

export default Subscribe
