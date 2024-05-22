import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Wrapper from '../layout/Wrapper'
import MobNavbar from '../shared/MobNavbar'

function Navbar() {
	const [mobNavbar, setMobNavbar] = useState(false)

	const handleShowMobileNavbar = () => {
		setMobNavbar(!mobNavbar)
	}
	return (
		<>
			<div
				className='p-[10px] fixed w-full z-[999]'
				style={{
					backdropFilter: 'blur(10px)',
				}}
			>
				<Wrapper>
					<div className='flex items-center justify-between'>
						<div>
							<img src={logo} alt='logo' />
						</div>
						<ul className='md:flex items-center text-[#9DA0A2] font-semibold gap-[25px] hidden'>
							<li>
								<div className='dropdown'>
									<a href='#' className='hover:text-white'>
										Developers
									</a>
									<ul className='dropdown-content z-[1] menu p-2 shadow-lg bg-black rounded-[5px] w-52 mt-[10px] border-[1px] border-gray-600 text-white shad'>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Safe (CORE)</a>
										</li>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Documentation</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									Wallet
								</a>
							</li>
							<li>
								<div className='dropdown'>
									<a href='#' className='hover:text-white'>
										Ecosystem
									</a>
									<ul className='dropdown-content z-[1] menu p-2 shadow-lg bg-black rounded-[5px] w-52 mt-[10px] border-[1px] border-gray-600 text-white shad'>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Projects</a>
										</li>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Grants</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div className='dropdown'>
									<a href='#' className='hover:text-white'>
										Community
									</a>
									<ul className='dropdown-content z-[1] menu p-2 shadow-lg bg-black rounded-[5px] w-52 mt-[10px] border-[1px] border-gray-600 text-white shad'>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Governance</a>
										</li>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Safe TOKEN</a>
										</li>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Safe (Pass)</a>
										</li>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Safe (Con)</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div className='dropdown'>
									<a href='#' className='hover:text-white'>
										Resources
									</a>
									<ul className='dropdown-content z-[1] menu p-2 shadow-lg bg-black rounded-[5px] w-52 mt-[10px] border-[1px] border-gray-600 text-white shad'>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Blog</a>
										</li>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Careers</a>
										</li>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Press room</a>
										</li>
										<li className='hover:bg-gray-800 rounded-[5px]'>
											<a>Help center</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									Safe (PASS)
								</a>
							</li>
						</ul>
						<button className='bg-[#12FF80] py-[4px] px-[12px] font-semibold rounded-[5px] hidden md:block'>
							Lauch Wallet
						</button>
						<div
							className='flex flex-col gap-[6px] cursor-pointer md:hidden'
							onClick={handleShowMobileNavbar}
						>
							<div className='bg-white w-[25px] h-[2px]'></div>
							<div className='bg-white w-[25px] h-[2px]'></div>
							<div className='bg-white w-[25px] h-[2px]'></div>
						</div>
					</div>
				</Wrapper>
			</div>
			{mobNavbar && <MobNavbar showMobile={handleShowMobileNavbar} />}
		</>
	)
}

export default Navbar
