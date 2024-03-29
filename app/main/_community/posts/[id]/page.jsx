
"use client"
import Image from 'next/image'
import React, { useMemo } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { usePathname } from 'next/navigation'
import { decryptaes } from '@/app/utils/security'
import { useGetPostsQuery, usePromotePostMutation } from '@/app/redux/slice/apiSlice'
import { getData } from '@/app/utils/useful'

const page = () => {
	const { userid } = getData()
	const path = usePathname().split("/").pop()
	const comid = useMemo(() => decryptaes(path), []);
	const { data, refetch } = useGetPostsQuery({ comid: comid, id: userid }, { skip: !userid || !comid })
	const [promoteposts] = usePromotePostMutation()


	const promotePosts = async (postid) => {
		try {
			const data = {
				postid
			}
			const res = await promoteposts({ id: userid, comid, data })
			if (res.data.success) {
				await refetch()
			}
			console.log(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<div className='grid grid-cols-1 w-full'>
				<div className='p-3 bg-maincolor'>
					<div className='text-2xl p-2 font-semibold'>Posts</div>
				</div>
				<div className='flex flex-col gap-12 justify-center items-center my-10'>
					<div className="w-[90%] flex flex-col gap-4">
						<div className='text-2xl font-semibold'>Promoted Posts</div>
						<div className='flex bg-maincolor justify-center items-center border-2'>

							{/* here */}
							{data?.promotedposts?.length > 0 ?

								<Table className="min-w-[900px]">

									<TableHeader>
										<TableRow>
											<TableHead>Posts</TableHead>
											<TableHead className="text-center">Applauses</TableHead>
											<TableHead className="text-center">Comments</TableHead>
											<TableHead className="text-center">Shares</TableHead>
											<TableHead className="text-center">Engagement Rate</TableHead>
											{/* <TableHead></TableHead> */}
										</TableRow>
									</TableHeader>
									<TableBody>
										{
											data?.promotedposts.map((d, i) => (
												<TableRow key={i}>
													<TableCell className="font-medium text-left  text-sm py-2 leading-5 text-gray-900">
														<div className="flex gap-2 items-center">
															<div>
																<Image
																	src={d?.image}
																	width={60}
																	height={60}
																	className="min-w-[30px] min-h-[30px] max-w-[35px] rounded-lg max-h-[35px]"
																	alt="image"
																/>
															</div>
															<div className="flex flex-col text-xs font-medium gap-1">
																{d?.title}

															</div>
														</div>
													</TableCell>

													<TableCell className="text-center">{d?.likes}</TableCell>
													<TableCell className="text-center">{d?.comments?.length}</TableCell>
													<TableCell className="text-center">{d?.sharescount}</TableCell>
													<TableCell className="text-center">{d?.engrate}</TableCell>
													{/* <TableCell>
														<button onClick={() => { promotePosts(d._id) }} className='p-1 px-3 rounded-2xl dark:bg-border bg-black text-white'>Promote</button>
													</TableCell> */}
												</TableRow>
											))
										}
									</TableBody>
								</Table> :
								<div className='text-2xl rounded-2xl flex justify-center items-center h-[100px] font-semibold'>No Promoted Posts Yet</div>
							}


						</div>
					</div>
					<div className="w-[90%] flex flex-col gap-4">
						<div className='text-2xl font-semibold'>Available Posts</div>
						<div className='flex bg-maincolor justify-center items-center border-2'>
							<Table className="min-w-[900px]">

								<TableHeader>
									<TableRow>
										<TableHead>Posts</TableHead>
										<TableHead className="text-center">Applauses</TableHead>
										<TableHead className="text-center">Comments</TableHead>
										<TableHead className="text-center">Shares</TableHead>
										<TableHead className="text-center">Engagement Rate</TableHead>
										<TableHead className="text-center"></TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{
										data?.posts.map((d, i) => (
											<TableRow key={i}>
												<TableCell className="font-medium text-left  text-sm py-2 leading-5 text-gray-900">
													<div className="flex gap-2 items-center">
														<div>
															<Image
																src={d?.image}
																width={60}
																height={60}
																className="min-w-[30px] min-h-[30px] max-w-[35px] rounded-lg max-h-[35px]"
																alt="image"
															/>
															{/* <video src={d?.image} controls></video> */}
														</div>
														<div className="flex flex-col text-xs font-medium gap-1">
															{d?.title}

														</div>
													</div>
												</TableCell>

												<TableCell className="text-center">{d?.likes}</TableCell>
												<TableCell className="text-center">{d?.comments?.length}</TableCell>
												<TableCell className="text-center">{d?.sharescount}</TableCell>
												<TableCell className="text-center">{d?.engrate}</TableCell>
												<TableCell>
													<button onClick={() => { promotePosts(d._id) }} className='p-1 px-3 rounded-2xl dark:bg-border bg-black text-white'>Promote</button>
												</TableCell>
											</TableRow>
										))
									}
								</TableBody>
							</Table>

							{/* <table className="w-full rounded-xl border-collapse">
								<thead>
									<tr className="bg-gray-50 dark:bg-border">
										<th
											colSpan={3}
											className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider"
										>
											Posts
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Applauses
										</th>
										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Comments
										</th>

										<th className="text-left text-xs leading-4 py-2 px-3 font-medium uppercase tracking-wider">
											Engagement Rate
										</th>
										<th ></th>
									</tr>
								</thead>
								<tbody className="gap-10">
									{
										merged?.map((d, i) => (
											<tr key={i}>
												<td
													colSpan={3}
													className="text-left  text-sm py-2 leading-5 font-medium text-gray-900 col-span-3"
												>
													<div className="flex gap-2 items-center">
														<div>
															<Image
																src={d?.postdp}
																width={60}
																height={60}
																className="min-w-[30px] min-h-[30px] max-w-[35px] rounded-lg max-h-[35px]"
																alt="image"
															/>
														</div>
														<div className="flex flex-col text-xs font-medium gap-1">
															{d?.title}
															{console.log(d?.postdp)}
														</div>
													</div>
												</td>

												<td className="text-sm leading-5 py-2 px-3 text-left">
													{data?.liked?.length}
												</td>
												<td className="text-sm leading-5 py-2 px-3 text-left">
													{data?.comments?.length}
												</td>

												<td className="text-sm leading-5 py-2 px-3 text-left">
													+5
												</td>
												<td>
													<button className='p-1 px-3 rounded-2xl bg-black text-white'>Promote</button>
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