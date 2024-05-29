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
			<div className='relative flex justify-center items-center pt-[250px] md:pt-[300px] pb-[200px] md:pb-[100px]'>
				<div className='absolute top-0 left-0 w-full h-full'>
					<canvas ref={canvasRef} id='canvas3d' className='w-full h-full' />
				</div>
				<h1 className='relative text-[35px] md:text-[60px] text-white w-full md:w-[50%] font-semibold text-center leading-[55px] md:leading-[70px] '>
					Децентрализованная идентификация для{' '}
					<span
						className='text-[rgb(0 170 255)]'
						style={{ color: 'rgb(0 170 255)' }}
					>
						защиты ваших данных
					</span>{' '}
				</h1>
			</div>
		</>
	)
}

export default Hero
