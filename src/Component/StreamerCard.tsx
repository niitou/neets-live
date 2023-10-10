import React from 'react'

function StreamerCard(param: KickResponse) {
    return (
        <a href={param.slug} target='_blank'>
            <img src={param.profile_pic} alt={`${param.slug} + profile`} />
            <h1>{param.username}</h1>
            {
            param.is_live ? 
                <div>
                    {param.session_title}
                    {param.view_count}
                </div> : <></>
            }
        </a>
    )
}

export default StreamerCard