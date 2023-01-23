import { AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import CompactCard from './CompactCard/CompactCard';
import ExpandedCard from './ExpandedCard/ExpandedCard';

const SingleCard = ({data}) => {
  const [expend, setExpend] = useState(false);


  const { color,barValue,value,png,series} = data
  return (
    
     <AnimateSharedLayout>
      {
        expend? 
          <ExpandedCard data={data} setExpend={()=>setExpend(false)}></ExpandedCard>
        :
        <CompactCard data={data} setExpend={()=>setExpend(true)}></CompactCard>
      }
     </AnimateSharedLayout>
  );
};

export default SingleCard;