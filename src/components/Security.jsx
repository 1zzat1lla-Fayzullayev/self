import React from 'react'
import Wrapper from '../layout/Wrapper'
import security1 from '../assets/security1.png'
import security2 from '../assets/security2.png'
import security3 from '../assets/security3.png'
import security4 from '../assets/security4.png'
import check from '../assets/check.png'
import checkbg from '../assets/check-bg.png'
import rightA from '../assets/right-arrow.png'
import code from '../assets/code.png'

function Security() {
	return (
		<>
			<Wrapper>
				<div className='relative flex justify-center flex-col md:flex-row items-start gap-[60px] mt-[150px]'>
					<div className='flex flex-col mx-[20px] md:mx-0'>
						<img src={checkbg} alt='404' className='' />
						<img
							src={check}
							alt='404'
							className='w-[230px] md:w-[390px] absolute left-[20%] md:left-[8%] top-[2%] md:top-0'
						/>
						<ul>
							<li className='flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								Multiple audits
							</li>
							<li className='flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								1M$ per year spent on security
							</li>
							<li className='flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								Formally verified
							</li>
						</ul>
					</div>
					<div className='mx-[20px] md:mx-0 md:w-[44%]'>
						<p className='text-[#A1A3A7] font-semibold'>SECURITY</p>
						<h2 className='text-[40px] md:text-[60px] text-white leading-[55px] mt-[30px]'>
							Safe Smart Accounts are the {''}
							<span className='text-[#12FF80]'>most audited</span> and {''}
							<span className='text-[#12FF80]'>battle-tested</span> {''}
						</h2>
						<p className='text-white font-semibold text-[20px] mt-[30px]'>
							Since 2018, our smart contracts have passed the highest possible
							security standards in the industry including formal verification.
						</p>
						<div className='flex items-center flex-wrap gap-[30px] mt-[40px]'>
							<img src={security2} alt='' className='w-[100px]' />
							<img src={security1} alt='' className='w-[100px]' />
							<img src={security3} alt='' className='w-[100px]' />
							<img src={security4} alt='' className='w-[100px]' />
						</div>
						<div className='security flex items-center mt-[30px] gap-[30px]'>
							<button className='bg-[#12FF80] py-3 px-5 rounded-[5px] font-semibold text-[18px]'>
								View audits
							</button>
							<div className='bug flex items-center text-white font-semibold text-[18px]'>
								<a href='#'>Start bug hunting</a>
								<img src={rightA} alt='404' className='w-[40px]' />
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default Security
