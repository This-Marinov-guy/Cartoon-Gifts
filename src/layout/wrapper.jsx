import React, { useEffect } from 'react';
import { animationCreate } from '@utils/utils';
import BackToTopCom from '@components/common/scroll-to-top';

const Wrapper = ({children}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 200);
  },[])
  return (
    <>
      {children}
      <BackToTopCom/>
    </>
  );
};

export default Wrapper;