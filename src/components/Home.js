import { useAuth } from "../context/AuthContext";

export function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-20 pb-8 mb-8">
        <p className="text-xl mb-20">Bienvenido a nuestro Menu {user.displayName || user.email}</p>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-4 px-12 text-black"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
    </div>
  );
}
