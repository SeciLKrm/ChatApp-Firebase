import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";

const Auth = ({ setIsAuth }) => {
  const handleClick = () => {
    /*
     * kullanıcın google hesabını seçmesine yarayan
     * bir penecere açar
     * kullanıcı hesabını seçtiğinde
     * veritabanında yoksa onu ekler varsa giriş tarihini günceller
     * sonuç olarak bize kullanıcı hakkında bilgileri içeren cevap döndürürr
     */
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
      // kullanıcı giriş yaptığına dair kanıtı içeren
      // token' ı localstorage'a kaydettik
      localStorage.setItem("token", res.user.refreshToken);
      setIsAuth(true);
    });
  };

  return (
    <div className="auth">
      <h1>Chat Odası</h1>

      <p>Giriş Yapmak İçin Devam Et</p>
      <button onClick={handleClick}>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" />
        <span>Giriş Yap</span>
      </button>
    </div>
  );
};

export default Auth;
