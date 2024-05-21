import React from 'react'
import close from '../assets/close.png'
import logo from '../assets/logo.png'
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	AccordionActions,
	Button,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function MobNavbar({ showMobile }) {
	return (
		<>
			<div className='absolute inset-0 top-0 bottom-0 left-0 right-0 w-screen h-screen text-white bg-[#131413] z-[100]'>
				<div className='flex items-center justify-between'>
					<img
						src={close}
						alt='close'
						className='absolute w-[50px] right-0 top-2'
						onClick={showMobile}
					/>
					<img src={logo} alt='logo' className='absolute top-3 left-2' />
				</div>
				<div className='absolute top-[10%] w-[95%] mx-[10px]'>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
							aria-controls='panel1-content'
							id='panel1-header'
							style={{ backgroundColor: '#121312', color: 'white' }}
						>
							Developers
						</AccordionSummary>
						<AccordionDetails
							style={{ backgroundColor: '#121312', color: 'white' }}
						>
							<div className='flex flex-col'>
								<a href='#'>Safe Core</a>
								<a href='#'>Documentation</a>
							</div>
						</AccordionDetails>
					</Accordion>
					<a href='#'>Wallet</a>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
							aria-controls='panel2-content'
							id='panel2-header'
							style={{ backgroundColor: '#121312', color: 'white' }}
						>
							Ecosystem
						</AccordionSummary>
						<AccordionDetails
							style={{ backgroundColor: '#121312', color: 'white' }}
						>
							<div className='flex flex-col'>
								<a href='#'>Projects</a>
								<a href='#'>Grants</a>
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
							aria-controls='panel2-content'
							id='panel2-header'
							style={{ backgroundColor: '#121312', color: 'white' }}
						>
							Community
						</AccordionSummary>
						<AccordionDetails
							style={{ backgroundColor: '#121312', color: 'white' }}
						>
							<div className='flex flex-col'>
								<a href='#'>Governance</a>
								<a href='#'>Safe Token</a>
								<a href='#'>Safe Pass</a>
								<a href='#'>Safe Con</a>
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
							aria-controls='panel2-content'
							id='panel2-header'
							style={{ backgroundColor: '#121312', color: 'white' }}
						>
							Resources
						</AccordionSummary>
						<AccordionDetails
							style={{ backgroundColor: '#121312', color: 'white' }}
						>
							<div className='flex flex-col'>
								<a href='#'>Blog</a>
								<a href='#'>Careers</a>
								<a href='#'>Press room</a>
								<a href='#'>Help center</a>
							</div>
						</AccordionDetails>
					</Accordion>
					<div className='flex flex-col'>
						<a href='#'>Safe PASS</a>
						<button className='bg-[#12FF80] text-black font-semibold py-3 m-4 rounded-[5px]'>
							Lauch Wallet
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default MobNavbar
