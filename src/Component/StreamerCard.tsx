import React from 'react'

function StreamerCard(props : KickResponse) {
    return (
        <a href={props.slug} target='_blank' rel='noreferrer'>
            <img src={props.profile_pic} alt={`${props.slug} + profile`} />
            <h1>{props.username}</h1>
            {
            props.is_live ? 
                <div>
                    {props.session_title}
                    {props.view_count}
                </div> : <></>
            }
        </a>
    )
}

export default StreamerCard