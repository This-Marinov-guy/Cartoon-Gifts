import React, { Suspense, useEffect } from 'react';
import { animationCreate } from '@utils/utils';
import BackToTopCom from '@components/common/scroll-to-top';
import Loading from 'src/pages/loading';

const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 200);
  }, [])
  return (
    <Suspense fallback={<Loading />}>
      {children}
      <BackToTopCom />
    </Suspense>
  );
};

export default Wrapper;