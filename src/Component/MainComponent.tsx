import axios from 'axios'
import React, { useState, useEffect } from 'react'
import StreamerCard from './StreamerCard'


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
	const [data, setData] = useState<KickResponse>({
		slug: "",
		username: "",
		profile_pic: "",
		is_live: null,
		view_count: null,
		session_title: null
	})
	useEffect(() => {
		axios.get("https://kick.com/api/v2/channels/averagedad")
			.then((res) => setData(kickParser(res.data)))
			.catch(err => console.error(err))
	}, [])

	return (
		<div>
			MainComponent
			<StreamerCard slug={data.slug} username={data.username} profile_pic={data.profile_pic} is_live={data.is_live}
				session_title={data.session_title} view_count={data.view_count} />
		</div>
	)
}

export default MainComponent