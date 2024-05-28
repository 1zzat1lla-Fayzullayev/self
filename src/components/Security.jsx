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

function Tooltip({ text }) {
	return (
		<div
			className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[350px] bg-black text-white text-sm rounded-lg shadow-lg p-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'
			dangerouslySetInnerHTML={{ __html: text }}
		/>
	)
}

function Security() {
	return (
		<Wrapper>
			<div className='relative flex justify-center flex-col md:flex-row items-start gap-[60px] mt-[150px]'>
				<div className='flex flex-col mx-[20px] md:mx-0 relative'>
					<img src={checkbg} alt='Background' className='' />
					<img
						src={check}
						alt='Check'
						className='w-[230px] md:w-[390px] absolute left-[20%] md:left-[8%] top-[2%] md:top-0'
					/>
					<ul className='relative z-20 flex'>
						<div>
							<li className='relative group flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								Финансы и банкинг
								<Tooltip
									text={`Верификация личности клиентов для борьбы с мошенничеством и отмыванием денег.<br /><br />Безопасная аутентификация для онлайн-банкинга и финансовых сервисов.<br /><br />Управление цифровыми активами и инвестициями с помощью DID.`}
								/>
							</li>
							<li className='relative group flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								Образование и HR
								<Tooltip
									text={`Выдача верифицируемых дипломов, сертификатов и других учетных данных.<br /><br />Подтверждение квалификации и опыта соискателей при найме на работу.<br /><br />Создание децентрализованных систем репутации и портфолио.`}
								/>
							</li>
							<li className='relative group flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								Электронное правительство
								<Tooltip
									text={`Безопасная аутентификация граждан для доступа к госуслугам.<br /><br />Проведение выборов и голосований с верификацией личности избирателей.<br /><br />Борьба с коррупцией через прозрачные реестры на блокчейне.`}
								/>
							</li>
						</div>

						<div>
							<li className='relative group flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								Цепочки поставок и логистика
								<Tooltip
									text={`Отслеживание происхождения и подлинности товаров.<br /><br />Верификация личности участников цепочки поставок.<br /><br />Автоматизация таможенного оформления и сертификации грузов.`}
								/>
							</li>
							<li className='relative group flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								Недвижимость и земельные кадастры
								<Tooltip
									text={`Создание надежных реестров прав собственности на базе блокчейна <br /><br />Упрощение процедур купли-продажи и регистрации недвижимости <br /><br />Токенизация недвижимости для инвестиций и коллективного владения`}
								/>
							</li>
							<li className='relative group flex items-center text-white font-semibold text-[18px] gap-3'>
								<img src={code} alt='code' />
								Страхование
								<Tooltip
									text={`Верификация личности страхователей для борьбы с мошенничеством <br /><br />Безопасный обмен данными с андеррайтерами и медучреждениями <br /><br />Автоматизированная оценка рисков и персонализация страховых продуктов`}
								/>
							</li>
						</div>
					</ul>
				</div>
				<div className='mx-[20px] md:mx-0 md:w-[44%]'>
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
