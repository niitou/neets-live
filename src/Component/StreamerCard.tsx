import React from 'react'

function StreamerCard(props: StreamInfo) {
    return (
        <a href={props.stream_url} target='_blank' rel='noreferrer' className={`card ${props.stream_site}-card`}>
            <img src={props.streamer_profile} alt={`${props.stream_url} + profile`} className='card-profile' />

            {
                props.stream_live ?
                    <div className="online-card-wrapper">
                        <div className='streamer-info'>
                            <span className='streamer-name'>{props.streamer_username}</span>
                            <span className='stream-title'>{props.stream_title}</span>
                        </div>
                        <div className='live-count'>
                            <span className='viewers'>{props.stream_view_count}</span>
                        </div>
                    </div> :

                    <div className='offline-card-wrapper'>
                        <span className='streamer-name'>{props.streamer_username}</span>
                    </div>
            }
        </a>
    )
}

export default StreamerCard