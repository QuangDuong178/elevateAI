import { useState } from 'react';

export const useModalLoginOrganism = () => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);
  return {
    emailValue,
    passwordValue,
    remember,
    setEmailValue,
    setPasswordValue,
    setRemember,
  };
};
