import React, { useEffect, useRef } from 'react'
import { Application } from '@splinetool/runtime'

function Hero() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const app = new Application(canvas)

		app
			.load('https://prod.spline.design/jxhDtTKD4P7dPUEj/scene.splinecode')
			.then(() => {
				console.log('Spline scene loaded successfully')
			})
			.catch(err => {
				console.error('Failed to load Spline scene', err)
			})
	}, [])

	return (
		<>
			<div className='relative flex justify-center items-center h-screen'>
				<div className='absolute top-0 left-0 w-full h-full'>
					<canvas ref={canvasRef} id='canvas3d' className='w-full h-full' />
				</div>
				<div className='relative flex justify-center items-center w-full h-full'>
					<h1 className='text-[35px] md:text-[60px] text-white w-full md:w-[50%] font-semibold text-center leading-[55px] md:leading-[70px]'>
						Децентрализованная идентификация для{' '}
						<span style={{ color: 'rgb(0 170 255)' }}>защиты ваших данных</span>{' '}
					</h1>
				</div>
			</div>
		</>
	)
}

export default Hero
