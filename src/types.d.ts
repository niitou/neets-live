type KickResponse = {
	slug : string
	username : string,
	profile_pic : string,
	session_title : string | null,
	view_count : number | null,
	is_live : boolean?

}

type StreamInfo = {
	stream_url : string,
	streamer_username : string,
	streamer_profile : string,
	stream_title : string | null,
	stream_view_count : number | null,
	stream_live : boolean?,
	stream_site : string?
}

