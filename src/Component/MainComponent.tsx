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
	const [data, setData] = useState<Array<KickResponse>>([])
	useEffect(() => {
		for (let index = 0; index < config["kick"].length; index++) {
			const api_link = "https://kick.com/api/v2/channels/" + config["kick"][index];
			axios.get(api_link)
				.then(res => setData(data => [...data, kickParser(res.data)]))
				.catch(err => console.error(err))
		}

		return () => {
			setData([])
		}
	}, [])

	return (
		<div>
			MainComponent
			<div className="online-wrapper">
			{
				data.map((val, idx) =>
					val.is_live ? 
					<StreamerCard key={idx} {...val} /> : <></>
				)
			}
			</div>

			<div className="offline-wrapper">
			{
				data.map((val, idx) =>
					val.is_live ? 
					<></> : <StreamerCard key={idx} {...val} />
				)
			}
			</div>
		</div>
	)
}

export default MainComponent