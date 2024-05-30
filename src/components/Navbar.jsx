import React, { useState } from 'react'
import logo from '../assets/logo1.jpg'
import Wrapper from '../layout/Wrapper'
import MobNavbar from '../shared/MobNavbar'
import { useTranslation } from 'react-i18next'

function Navbar({ changeLang }) {
	const [mobNavbar, setMobNavbar] = useState(false)

	const handleShowMobileNavbar = () => {
		setMobNavbar(!mobNavbar)
		document.body.classList.toggle('overflow-hidden')
	}

	const changeLangHandler = e => {
		changeLang(e.target.value)
	}

	const { t } = useTranslation()

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
							<img src={logo} alt='logo' className='w-[50px] md:w-[70px]' />
						</div>
						<ul className='md:flex items-center text-[#9DA0A2] font-semibold gap-[25px] hidden'>
							<li>
								<a href='#' className='hover:text-white'>
									{t('navbar.indao')}
								</a>
							</li>
							<li>
								<a
									href='https://drive.google.com/file/d/1wmfdtIGPaN9uJBI1DHqN903tP9c_aTG2/view'
									target='_blank'
									className='hover:text-white'
									rel='noopener noreferrer'
								>
									{t('navbar.reclaim')}
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									{t('navbar.about')}
								</a>
							</li>
						</ul>
						<select onChange={changeLangHandler}>
							<option value='eng'>English</option>
							<option value='ru'>Russian</option>
						</select>
						<button
							className='py-[4px] px-[12px] font-semibold rounded-[5px] hidden md:block'
							style={{ background: 'rgb(0 170 255)' }}
						>
							{t('navbar.button')}
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
