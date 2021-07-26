import React from 'react';

function Loading(props: any) {
    const {isLoading} = props;
    return (
        <div className='loading'>
            {isLoading ? <div className="site-loader"/> : ''}
        </div>
    );
}

export default Loading;
