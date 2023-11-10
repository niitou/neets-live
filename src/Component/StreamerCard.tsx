import React from 'react'

function StreamerCard(props: KickResponse) {
    return (
        <a href={props.slug} target='_blank' rel='noreferrer' className='card'>
            <img src={props.profile_pic} alt={`${props.slug} + profile`} className='card-profile' />

            {
                props.is_live ?
                    <div className='live-wrapper'>
                        <div className='streamer-info'>
                            <span className='streamer-name'>{props.username}</span>
                            <span className='stream-title'>{props.session_title}</span>
                        </div>
                        <div className='live-count'>
                            <span className='viewers'>{props.view_count}</span>
                        </div>
                    </div> :

                    <div className='offline-wrapper'>
                        <span className='streamer-name'>{props.username}</span>
                    </div>
            }
        </a>
    )
}

export default StreamerCard