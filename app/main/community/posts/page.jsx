
"use client"
import Image from 'next/image'
import React, { useMemo } from 'react'
import feed from "../../../assests/feed.svg"
import { useGetCommunityQuery } from '@/app/redux/slice/apiSlice'
import Cookies from 'js-cookie'
import { decryptaes } from '@/app/utils/security'
import axios from 'axios'
import { appData } from '@/app/utils/useful'
const page = () => {
	const cookiedata = appData()
	const id = useMemo(() => cookiedata.userid, [cookiedata.userid])
	const { data } = useGetCommunityQuery({ id: id }, { skip: !id })
	console.log(data)
	return (
		<>
			<div className='grid grid-cols-1 w-full'>
				<div className='p-3 bg-white'>
					<div className='text-2xl p-2 font-semibold'>Posts</div>
				</div>
				<div className='flex flex-col gap-12 justify-center items-center my-10'>
					<div className="w-[90%] flex flex-col gap-4">
						<div className='text-2xl font-semibold'>Promoted Posts</div>
						<div className='flex bg-white justify-center items-center border-2'>
							{/* <table className="w-full rounded-xl border-collapse">
								<thead>
									<tr className="bg-gray-50">
										<th
											colSpan={3}
											className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider"
										>
											Posts
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Date Uploaded
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Applauses
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Comments
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Shares
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Engagement Rate
										</th>
									</tr>
								</thead>
								<tbody className="gap-10">
									<tr>
										<td
											colSpan={3}
											className="text-left  text-sm py-2 leading-5 font-medium text-gray-900 col-span-3"
										>
											<div className="flex gap-2 items-center">
												<div>
													<Image
														src={feed}
														className="min-w-[30px] min-h-[30px] max-w-[35px] rounded-lg max-h-[35px]"
														alt="image"
													/>
												</div>
												<div className="flex flex-col text-xs font-medium gap-1">
													hello
												</div>
											</div>
										</td>
										<td className="text-xs leading-5 py-2 px-3 text-left">
											heelo
										</td>
										<td className="text-sm leading-5 py-2 px-3 text-left">
											heelo
										</td>
										<td className="text-sm leading-5 py-2 px-3 text-left">
											heelo
										</td>
										<td className="text-sm leading-5 py-2 px-3 text-left">
											heelo
										</td>
										<td className="text-sm leading-5 py-2 px-3 text-left">
											+5
										</td>
									</tr>


								</tbody>
							</table> */}
							<h1>No Promoted Posts Yet</h1>
						</div>
					</div>
					<div className="w-[90%] flex flex-col gap-4">
						<div className='text-2xl font-semibold'>Available Posts</div>
						<div className='flex bg-white justify-center items-center border-2'>
							<table className="w-full rounded-xl border-collapse">
								<thead>
									<tr className="bg-gray-50">
										<th
											colSpan={3}
											className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider"
										>
											Posts
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Date Uploaded
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Applauses
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Comments
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Shares
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Engagement Rate
										</th>
									</tr>
								</thead>
								<tbody className="gap-10">
									<tr>
										<td
											colSpan={3}
											className="text-left  text-sm py-2 leading-5 font-medium text-gray-900 col-span-3"
										>
											<div className="flex gap-2 items-center">
												<div>
													<Image
														src={feed}
														className="min-w-[30px] min-h-[30px] max-w-[35px] rounded-lg max-h-[35px]"
														alt="image"
													/>
												</div>
												<div className="flex flex-col text-xs font-medium gap-1">
													hello
												</div>
											</div>
										</td>
										<td className="text-xs leading-5 py-2 px-3 text-left">
											{/* {formatISOStringToDMY()} */}  heelo
										</td>
										<td className="text-sm leading-5 py-2 px-3 text-left">
											{/* {likes} */}  heelo
										</td>
										<td className="text-sm leading-5 py-2 px-3 text-left">
											{/* {comments?.length} */}heelo
										</td>
										<td className="text-sm leading-5 py-2 px-3 text-left">
											{/* {sharescount} */}heelo
										</td>
										<td className="text-sm leading-5 py-2 px-3 text-left">
											+5
										</td>
									</tr>


								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default page