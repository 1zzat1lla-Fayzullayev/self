import React, { useState } from 'react'
import logo from '../assets/logo1.jpg'
import Wrapper from '../layout/Wrapper'
import MobNavbar from '../shared/MobNavbar'

function Navbar() {
	const [mobNavbar, setMobNavbar] = useState(false)

	const handleShowMobileNavbar = () => {
		setMobNavbar(!mobNavbar)
		document.body.classList.toggle('overflow-hidden')
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
							<img src={logo} alt='logo' className='w-[70px]' />
						</div>
						<ul className='md:flex items-center text-[#9DA0A2] font-semibold gap-[25px] hidden'>
							<li>
								<a href='#' className='hover:text-white'>
									Indao
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									Reclaim
								</a>
							</li>

							<li>
								<a href='#' className='hover:text-white'>
									About us
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
