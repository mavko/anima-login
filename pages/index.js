import Login from '../components/Login'
import React from 'react'
import LoginBg from '../components/LoginBackground'
export default function Home() {
	return (
		<div className='h-screen antialiased bg-slate-900 text-slate-300'>
			<LoginBg />
			<Login />
		</div>
	)
}
