import { Title } from '@/components/atoms/Title/Title.tsx';
import { TextInputWithTitle } from '@/components/molecules/TextInputWithTitle/TextInputWithTitle.tsx';
import { useModalLoginOrganism } from '@/composables/useModalLoginOrganism';
import './style.scss';
import { CheckBox } from '@/components/atoms/CheckBox/CheckBox.tsx';

export const ModalLoginOrganism = () => {
  const { emailValue, passwordValue, remember, setEmailValue, setPasswordValue, setRemember } =
    useModalLoginOrganism();
  return (
    <div className={'bg-white p-10 modal-login-organism '}>
      <Title text={'ログイン'} className='mb-10' />
      <TextInputWithTitle
        name='email'
        title='メールアドレス'
        placeHolder=''
        value={emailValue}
        setInputValue={setEmailValue}
        error=''
        className='mb-8'
      />
      <TextInputWithTitle
        name='password'
        title='パスワード'
        placeHolder=''
        value={passwordValue}
        setInputValue={setPasswordValue}
        error=''
      />
      <div className={'flex place-content-center justify-center'}>
        <CheckBox className={'mt-10'} label={'ログイン状態を保存する'} value={remember}
                  handleClick={() => setRemember(!remember)} />
      </div>

    </div>
  );
};
