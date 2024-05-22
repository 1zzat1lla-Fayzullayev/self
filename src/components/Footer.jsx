import React from 'react'
import logo from '../assets/logo.png'
import Wrapper from '../layout/Wrapper'

function Footer() {
	return (
		<>
			<Wrapper>
				<div className='flex flex-col md:flex-row md:items-start items-center md:justify-between justify-center gap-[10px] pt-[100px] h-full pb-[40px] border-b border-[#2F302F]'>
					<img src={logo} alt='logo' className='cursor-pointer' />
					<ul className='flex flex-col items-center md:items-start gap-3 font-semibold'>
						<li>
							<a href='#' className='uppercase text-white font-semibold'>
								developers
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Safe (Core)
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Docs
							</a>
						</li>
					</ul>
					<ul className='flex flex-col items-center md:items-start gap-3 font-semibold'>
						<li>
							<a href='#' className='uppercase text-white font-semibold'>
								ecosystem
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Explore
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Grants
							</a>
						</li>
					</ul>
					<ul className='flex flex-col items-center md:items-start gap-3 font-semibold'>
						<li>
							<a href='#' className='uppercase text-white font-semibold'>
								community
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Governance
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Token
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Safe(Pass)
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Safe(Con)
							</a>
						</li>
					</ul>
					<ul className='flex flex-col items-center md:items-start gap-3 font-semibold'>
						<li>
							<a href='#' className='uppercase text-white font-semibold'>
								resources
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Help Center
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Press Room
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Careers
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Brand Kit
							</a>
						</li>
					</ul>
				</div>
				<div className='flex flex-col md:flex-row items-center justify-between'>
					<ul className='flex flex-col md:flex-row items-center gap-[25px] font-semibold text-[#848689] py-[30px]'>
						<li>
							<a href='#'>Terms</a>
						</li>
						<li>
							<a href='#'>Privacy</a>
						</li>
						<li>
							<a href='#'>Licenses</a>
						</li>
						<li>
							<a href='#'>Cookie Policy</a>
						</li>
						<li>
							<a href='#'>Preferences</a>
						</li>
						<li>
							<a href='#'>Imprint</a>
						</li>
						<li>
							<a href='#'>Trademark</a>
						</li>
						<li>
							<a href='#'>Disclaimer</a>
						</li>
					</ul>
					<p className='font-semibold text-[#848689]'>
						©2023–2024 Safe Ecosystem Foundation
					</p>
				</div>
			</Wrapper>
		</>
	)
}

export default Footer
