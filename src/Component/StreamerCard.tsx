import React from 'react'

function StreamerCard(props: KickResponse) {
    return (
        <a href={props.slug} target='_blank' rel='noreferrer' className='card'>
            <img src={props.profile_pic} alt={`${props.slug} + profile`} className='card-profile' />
            <h1 className='card-title'>{props.username}
                {
                    props.is_live ?
                        <div className='card-live'>
                            <h2 className='card-subtitle'>{props.session_title}</h2>
                            <span className='live-count'>{props.view_count}</span>
                        </div> : <></>
                }
            </h1>

        </a>
    )
}

export default StreamerCard