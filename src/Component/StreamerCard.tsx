import React from 'react'

function StreamerCard(props: KickResponse) {
    return (
        <a href={props.slug} target='_blank' rel='noreferrer' className='card'>
            <img src={props.profile_pic} alt={`${props.slug} + profile`} className='card-profile' />
            <h1 className='card-name'>{props.username}
                {
                    props.is_live ?
                        <span className='card-live'>
                            {props.session_title}
                            {props.view_count}
                        </span> : <></>
                }
            </h1>

        </a>
    )
}

export default StreamerCard