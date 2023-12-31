import styles from './SignUpBox.module.scss';
import logo from '@assets/img/icons/Logo.svg';
import { SignUpFormBox } from './SignUpFormBox';

export function SignUpBox() {
  return (
    <>
      <div className={styles.createAccountBox}>
        <div className={styles.logoBox}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.wrapper}>
          <SignUpFormBox />
        </div>
      </div>
    </>
  );
}
