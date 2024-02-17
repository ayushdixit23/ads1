
"use client"
import Image from 'next/image'
import React from 'react'
import { useGetCommunityQuery } from '@/app/redux/slice/apiSlice'
import { encryptaes } from '@/app/utils/security'
import { useRouter } from 'next/navigation'
import { getData } from '@/app/utils/useful'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

const page = () => {
	const { userid } = getData()
	const { data } = useGetCommunityQuery({ id: userid }, { skip: !userid })
	const merged = data?.data?.community?.map((d, i) => {
		return ({ ...d, dptomerged: data?.data?.dps[i] })
	})
	const router = useRouter()
	return (
		<>
			<div className='grid grid-cols-1 w-full'>
				<div className='p-3 sticky top-0 left-0 bg-maincolor'>
					<div className='text-2xl p-2 font-semibold'>Community</div>
				</div>
				<div className='flex flex-col gap-12 justify-center items-center my-10'>
					<div className="w-[90%] flex flex-col gap-4">
						<div className='text-2xl font-semibold'>Community</div>
						<div className='flex bg-maincolor justify-center items-center border-2'>
							<Table className="min-w-[900px]">
								
								<TableHeader>
									<TableRow>
										<TableHead>Communities</TableHead>
										<TableHead>Total Posts</TableHead>
										<TableHead>Total Topics</TableHead>
										<TableHead>Total Members</TableHead>
										<TableHead>Engagement Rate</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{
										merged?.map((d, i) => (
											<TableRow onClick={() => router.push(`/main/community/posts/${encryptaes(d?._id)}`)} key={i} >
												<TableCell className="font-medium text-left  text-sm py-2 leading-5 text-gray-900">
													<div className="flex gap-2 items-center">
														<div>
															<Image
																src={d?.dptomerged}
																width={50}
																height={50}
																className="min-w-[30px] min-h-[30px] max-w-[35px] rounded-lg max-h-[35px]"
																alt="image"
															/>
														</div>
														<div className="flex flex-col text-xs font-medium gap-1">
															{d?.title}
														</div>
													</div>
												</TableCell>
												<TableCell>{d?.posts?.length}</TableCell>
												<TableCell>{d?.topics?.length}</TableCell>
												<TableCell>{d?.members?.length}</TableCell>
												<TableCell>+5</TableCell>
											</TableRow>
										))
									}

								</TableBody>
							</Table>
							{/* <table className="w-full rounded-xl border-collapse">
								<thead>
									<tr className="bg-gray-50 dark:bg-maincolor">
										<th
											colSpan={3}
											className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider"
										>
											Communities
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Total Posts
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Total Topics
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Total Members
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Engagement Rate
										</th>
									</tr>
								</thead>
								<tbody className="gap-10">
									{
										merged?.map((d, i) => (
											<tr onClick={() => router.push(`/main/community/posts/${encryptaes(d?._id)}`)} key={i} className='hover:bg-slate-100'>
												<td
													colSpan={3}
													className="text-left  text-sm py-2 leading-5 font-medium text-gray-900 col-span-3"
												>
													<div className="flex gap-2 items-center">
														<div>
															<Image
																src={d?.dptomerged}
																width={50}
																height={50}
																className="min-w-[30px] min-h-[30px] max-w-[35px] rounded-lg max-h-[35px]"
																alt="image"
															/>
														</div>
														<div className="flex flex-col text-xs font-medium gap-1">
															{d?.title}
														</div>
													</div>
												</td>
												<td className="text-xs leading-5 py-2 px-3 text-left">
													{d?.posts?.length}
												</td>
												<td className="text-sm leading-5 py-2 px-3 text-left">
													{d?.topics?.length}
												</td>
												<td className="text-sm leading-5 py-2 px-3 text-left">
													{d?.members?.length}
												</td>

												<td className="text-sm leading-5 py-2 px-3 text-left">
													+5
												</td>
											</tr>
										))
									}
								</tbody>
							</table> */}
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default page