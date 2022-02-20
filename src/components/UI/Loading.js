import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <ReactLoading type={'spin'} color={'#00fa9a'} height={'15%'} width={'15%'} />
);
 
export default Loading;