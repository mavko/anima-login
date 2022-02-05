import { SpeakerphoneIcon } from '@heroicons/react/outline'

export default function Announcement() {
	return (
		<div className='w-full max-w-xl mx-auto bg-slate-800 rounded-xl dark:ring-1 dark:ring-white/10 dark:ring-inset'>
			<div className='px-3 py-3 mx-auto '>
				<div className='flex flex-wrap items-center justify-between'>
					<div className='flex items-center flex-1 w-0'>
						<span className='flex p-2 rounded-lg bg-emerald-400'>
							<SpeakerphoneIcon
								className='w-6 h-6 text-emerald-900'
								aria-hidden='true'
							/>
						</span>
						<p className='mx-3 font-medium text-white '>
							<span className=''>
								Latest study on cardivascular health 2021
							</span>
						</p>
					</div>
					<div className='flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto'>
						<a
							href='#'
							className='flex items-center justify-center px-4 py-2 text-sm font-medium bg-white border border-transparent rounded-md shadow-sm text-emerald-600 hover:bg-emerald-50'>
							Read more
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
