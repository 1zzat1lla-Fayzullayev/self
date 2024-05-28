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
import Tooltip from '../shared/Tooltip'

function Security() {
	return (
		<Wrapper>
			<div className='relative flex justify-center flex-col md:flex-row items-start mt-[150px]'>
				<div className='flex flex-col mx-[20px] md:mx-0'>
					<img src={checkbg} alt='Background' className='z-10 w-full md:max-w-[700px]' />
					<img
						src={check}
						alt='Check'
						className='w-[230px] md:w-[390px] absolute left-[20%] md:left-[14%] top-[2%] md:top-[10%] z-20'
					/>
					<ul className='relative z-30 flex flex-col md:flex-row mt-[100px] mb-[50px]'>
						<div className='flex flex-col gap-[10px] w-full'>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Верификация личности клиентов для борьбы с мошенничеством и отмыванием денег. Безопасная аутентификация для онлайн-банкинга и финансовых сервисов. Управление цифровыми активами и инвестициями с помощью DID.`}
								>
									<p className='w-full md:w-[350px]'>Финансы и банкинг</p>
								</Tooltip>
							</li>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Выдача верифицируемых дипломов, сертификатов и других учетных данных. Подтверждение квалификации и опыта соискателей при найме на работу. Создание децентрализованных систем репутации и портфолио.`}
								>
									<p className='w-full md:w-[350px]'>Образование и HR</p>
								</Tooltip>
							</li>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Безопасная аутентификация граждан для доступа к госуслугам. Проведение выборов и голосований с верификацией личности избирателей. Борьба с коррупцией через прозрачные реестры на блокчейне.`}
								>
									<p className='w-full md:w-[350px]'>Электронное правительство</p>
								</Tooltip>
							</li>
						</div>
						<div className='flex flex-col gap-[10px] w-full'>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Отслеживание происхождения и подлинности товаров. Верификация личности участников цепочки поставок. Автоматизация таможенного оформления и сертификации грузов.`}
								>
									<p className='w-full md:w-[350px]'>Цепочки поставок и логистика</p>
								</Tooltip>
							</li>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Создание надежных реестров прав собственности на базе блокчейна. Упрощение процедур купли-продажи и регистрации недвижимости. Токенизация недвижимости для инвестиций и коллективного владения.`}
								>
									<p className='w-full md:w-[350px]'>Недвижимость и земельные кадастры</p>
								</Tooltip>
							</li>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Верификация личности страхователей для борьбы с мошенничеством. Безопасный обмен данными с андеррайтерами и медучреждениями. Автоматизированная оценка рисков и персонализация страховых продуктов.`}
								>
									<p className='w-full md:w-[350px]'>Страхование</p>
								</Tooltip>
							</li>
						</div>
					</ul>
				</div>
				<div className='mx-[20px] md:mx-0 md:w-[50%]'>
					<p className='text-[#A1A3A7] font-semibold'>SECURITY</p>
					<h2 className='text-[40px] md:text-[60px] text-white leading-[55px] mt-[30px]'>
						Indao Smart Accounts are the{' '}
						<span className='text-[#12FF80]'>most audited</span> and{' '}
						<span className='text-[#12FF80]'>battle-tested</span>{' '}
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
							<img src={rightA} alt='Arrow' className='w-[40px]' />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default Security
