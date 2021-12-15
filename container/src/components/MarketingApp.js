import React, { useEffect, useRef } from 'react';
import { mount as mountMarketing} from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mountMarketing(ref.current);
    }, [])

    return (
        <div ref={ref}></div>
    )
}
