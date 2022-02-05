import React from 'react'
import Image from 'next/image'

import LoginBackground from '../public/assets/gradient-bg.png'
function LoginBg() {
	return (
		<div className='absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden pointer-events-none'>
			<div className='w-[108rem] flex-none flex justify-end'>
				<Image src={LoginBackground} alt='gradient-bg' className='' />
			</div>
		</div>
	)
}

export default LoginBg
