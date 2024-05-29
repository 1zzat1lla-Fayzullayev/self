import React from 'react'
import Wrapper from '../layout/Wrapper'
import governance from '../array/GovernanceArr'

function Governance() {
	return (
		<>
			<div className='governance-container mt-[100px]'>
				<Wrapper>
					<p className='uppercase font-semibold text-[#A1A3A7] m-[20px] md:m-0'>
						governance
					</p>
					<div className='flex flex-col md:flex-row gap-[80px] mt-[50px] mx-[20px] md:mx-0'>
						<h2 className='text-white font-semibold text-[50px] leading-[55px]'>
							{' '}
							<span className='' style={{ color: 'rgb(0 170 255)' }}>Indao (DAO)</span> governs the
							future of Indao
						</h2>
						<p className='font-semibold text-[#A1A3A7] text-[17px]'>
							Indao is governed by IndaoDAO, a decentralized collective of core
							contributors, backers, GnosisDAO, users, and ecosystem
							contributors i.e Indao(Guardians).
						</p>
					</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-[15px] mt-[70px] mx-[20px] md:mx-0'>
						{governance.map(card => (
							<div
								key={card.title}
								className='relative card1 flex flex-col border-[1px] rounded-[20px] border-[#303033] hover:border-[#12FF80] max-w-[400px] h-[220px] cursor-pointer w-full shadow-lg bg-[#121312]'
							>
								<p className='text-[#A1A3A7] font-semibold mt-[30px] ml-[15px] uppercase'>
									{card.title}
								</p>
								{/* Inline SVG */}
								<div className='w-[30px] arrow absolute right-5 top-4 transform transition-all ease-in rotate-[320deg]'>
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
								</div>
								<div className='mt-[80px]'>
									<h2 className='font-semibold text-[30px] ml-[15px] text-white'>
										{card.desc}
									</h2>
								</div>
							</div>
						))}
					</div>
					<div className='flex justify-center items-center flex-col mt-[70px] gap-[40px]'>
						<h2 className='text-white text-[25px] font-semibold text-center'>
							Want to reach the Core Contributors?
						</h2>
						<button className='py-3 px-6 mb-[40px] font-semibold text-black rounded-[5px]' style={{ background: 'rgb(0 170 255)' }}>
							Contact us
						</button>
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Governance
