import axios from 'axios'
import React, { useState, useEffect } from 'react'

interface KickResponse {
	slug : String
	username : String,
	profile_pic : String,
	session_title : String | null,
	view_count : number | null
	is_live : boolean

}

const kickParser  = (param:any) => {
	const parseData : KickResponse = {
		slug : "https://kick.com/" + param.slug,
		username : param.user.username,
		profile_pic : param.user.profile_pic,
		is_live : param.livestream == null ? false : true,
		view_count : param.livestream?.viewer_count,
		session_title : param.livestream?.session_title
	}
	return parseData
}


function MainComponent() {
	const [data, setData] = useState<KickResponse|null>(null)
	useEffect(() => {
		axios.get("https://kick.com/api/v2/channels/bossmanjack")
			.then((res) => setData(kickParser(res.data)))
			.catch(err => console.error(err))
	}, [])

	return (
		<div>
			MainComponent
			{JSON.stringify(data)}
		</div>
	)
}

export default MainComponent