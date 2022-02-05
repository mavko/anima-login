import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'

import Logo from '../public/assets/logo-full-top.svg'
import React from 'react'
import Announcement from './Announcement'
export default function Login() {
	return (
		<>
			{/*
        Get yo log-on baby
      */}
			<div className='relative z-30 flex justify-center w-full min-h-full px-4 py-12 mx-auto place-items-center sm:px-6 lg:px-8 justify-items-center'>
				<div className='w-full max-w-4xl space-y-8'>
					<div className='mx-auto text-center '>
						<div className='items-center space-y-6'>
							<Image src={Logo} alt='Anima' width={320} height={120} />
							<p className='text-2xl font-light'>
								Online patient triage for primary care
							</p>
						</div>
					</div>
					<div className='max-w-xl pt-2 mx-auto mt-5 mb-8 overflow-hidden shadow-lg first:mt-0 last:mb-0 bg-slate-800 rounded-xl dark:ring-1 dark:ring-white/10 dark:ring-inset'>
						<div className='flex text-xs leading-6 text-slate-400'>
							<div className='flex items-center flex-none px-4 py-1 font-medium border-t border-b text-emerald-300 border-t-transparent border-b-emerald-300'>
								Anima : Login
							</div>
							<div className='flex items-center flex-auto border rounded-tl bg-slate-700/50 border-slate-500/30'></div>
						</div>
						<form
							className='flex flex-col mx-5 mb-10 space-y-6 justify-evenly'
							action='#'
							method='POST'>
							<div className='space-y-3'>
								<h2 className='mt-6 text-3xl font-medium text-left text-slate-200'>
									Welcome to Anima
								</h2>
								<p className='mb-5 text-left text-slate-400 text-baseline'>
									Let&apos;s get you signed in
								</p>
							</div>
							<input type='hidden' name='remember' defaultValue='true' />
							<div className='self-center w-full -space-y-px rounded-md shadow-sm'>
								<div>
									<label htmlFor='email-address' className='sr-only'>
										Email address
									</label>
									<input
										id='email-address'
										name='email'
										type='email'
										autoComplete='email'
										required
										className='relative block w-full px-3 py-3 rounded-none appearance-none bg-slate-700 dark:ring-1 dark:ring-white/10 dark:ring-inset rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm'
										placeholder='Email address'
									/>
								</div>
								<div>
									<label htmlFor='password' className='sr-only'>
										Password
									</label>
									<input
										id='password'
										name='password'
										type='password'
										autoComplete='current-password'
										required
										className='relative block w-full px-3 py-3 rounded-none appearance-none bg-slate-700 dark:ring-1 dark:ring-white/10 dark:ring-inset rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm'
										placeholder='Password'
									/>
								</div>
							</div>

							<div className='space-y-6'>
								<div className='flex items-center justify-end'>
									<div className='text-sm'>
										<a
											href='#'
											className='font-medium text-emerald-400 hover:text-emerald-500'>
											Forgot your password?
										</a>
									</div>
								</div>
								<button
									type='submit'
									className='relative flex justify-center w-full px-4 py-3 font-medium border border-transparent rounded-md text-md text-emerald-800 bg-emerald-400 group hover:bg-emerald-700 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700'>
									Sign in
									<span className='absolute inset-y-0 right-0 flex items-center pr-3'>
										<ChevronDoubleRightIcon
											className='w-5 h-5 text-emerald-800 group-hover:text-emerald-300'
											aria-hidden='true'
										/>
									</span>
								</button>
							</div>
						</form>
						<div className='flex items-center justify-between p-4 bg-slate-800 dark:ring-1 dark:ring-white/10 dark:ring-inset'>
							Don&apos;t have an account yet?{' '}
							<button className='px-4 py-2 text-sm font-medium border rounded-lg text-emerald-400 border-emerald-400/50'>
								Register one here
							</button>
						</div>
					</div>
					<Announcement />
				</div>
			</div>
		</>
	)
}
