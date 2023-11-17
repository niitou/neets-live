import axios from 'axios'
import React, { useState, useEffect } from 'react'
import StreamerCard from './StreamerCard'

const config = require('../config.json')

const kickParser = (param: any) => {
	const parseData: KickResponse = {
		slug: "https://kick.com/" + param.slug,
		username: param.user.username,
		profile_pic: param.user.profile_pic,
		is_live: param.livestream == null ? false : true,
		view_count: param.livestream?.viewer_count,
		session_title: param.livestream?.session_title
	}
	return parseData
}




function MainComponent() {
	const [kickData, setKickData] = useState<Array<KickResponse>>([])
	useEffect(() => {
		for (let index = 0; index < config["kick"].length; index++) {
			const api_link = "https://kick.com/api/v2/channels/" + config["kick"][index];
			axios.get(api_link)
				.then(res => setKickData(kickData => [...kickData, kickParser(res.data)]))
				.catch(err => console.error(err))
		}

		return () => {
			setKickData([])
		}
	}, [])

	return (
		<div className='main-page-wrapper'>
			<div className="online-wrapper">
				<h1 className='heading-text'>LIVE</h1>
				{
					kickData.map((val, idx) =>
						val.is_live ?
							<StreamerCard key={idx} stream_site='youtube' stream_live={val.is_live} stream_title={val.session_title}
								stream_url={val.slug} stream_view_count={val.view_count} streamer_profile={val.profile_pic}
								streamer_username={val.username} /> : <></>
					)
				}
			</div>

			<div className="offline-wrapper">
				<h1 className='heading-text'>OFFLINE</h1>
				{
					kickData.map((val, idx) =>
						val.is_live ?
							<></> : <StreamerCard key={idx} stream_site='kick' stream_live={val.is_live} stream_title={val.session_title}
								stream_url={val.slug} stream_view_count={val.view_count} streamer_profile={val.profile_pic}
								streamer_username={val.username} />
					)
				}
			</div>
		</div>
	)
}

export default MainComponent