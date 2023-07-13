import { useRef, useState } from "react";
import Auth from "./components/Auth";
import Chat from "./components/Chat";

function App() {
  // inputa yazılanı izlemek için
  const inputRef = useRef();
  /*
   * local storage'ı kontrol ediyoruz
   * eğerki daha önce kaydolduğuna dair token
   * varsa > isAuth true oluyor ve sohbet ekranına yönleniyor
   * yoksa > isAuth undefined oluyor ve giriş yapma ekranına yönleniyor
   */
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);
  console.log(room);
  // çıkış yapa tıklanılınca çalışır:
  const handleLogout = () => {
    // kullanıcının giriş yaptığına dair bilgiyi
    // local storage'dan kaldırdık
    localStorage.removeItem("token");
    // giriş sayfasına yönlemesi için isAuth'u false a çektik
    setIsAuth(false);
  };
  // eğer ki yetkisi yoksa giriş sayfasına yönlendir
  if (!isAuth) {
    return <Auth setIsAuth={setIsAuth} />;
  }
  // eğer ki kullanıcının yetkisi varsa ekran basılır:
  return (
    <>
      {room ? (
        // oda varsa shohbet ekranına yönlendir
        <Chat room={room} />
      ) : (
        // oda yoksa oda seçmey yönlendir
        <div className="room-container">
          <h1>Chat Odası</h1>
          <p>Hangi Odaya Gireceksin?</p>
          <input type="text" ref={inputRef} />
          <button
            className="comingRoom"
            onClick={() => setRoom(inputRef.current.value)}>
            OdayaGir
          </button>
          <button className="logout" onClick={handleLogout}>
            Çıkış Yap
          </button>
        </div>
      )}
    </>
  );
}

export default App;
