import { useRouter } from 'next/navigation';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
const ButtonBack = () => {
  const navigate = useRouter();
  return (
    
      <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', height: '50px', fontWeight: 'bold', padding: '10px' }} onClick={() => navigate.back()}>
        <IoMdArrowBack size={30} />
        Back
      </button>
    
  );
};

export default ButtonBack;
