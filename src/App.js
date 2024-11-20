import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import PostAdd from "./pages/PostAddPage";
import PostEdit from "./pages/PostEditPage";
import PostManage from "./pages/PostManagePage";
import Signup from "./pages/SignupPage";
import PostSingle from "./pages/SinglePostPage";
import UserAdd from "./pages/UserAddPage";
import UserChangePwd from "./pages/UserChangePasswordPage";
import UserEdit from "./pages/UserEditPage";
import UserManage from "./pages/UserManagePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-add" element={<PostAdd />} />
          <Route path="/post-edit" element={<PostEdit />} />
          <Route path="/post-manage" element={<PostManage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post" element={<PostSingle />} />
          <Route path="/user-add" element={<UserAdd />} />
          <Route path="/change-pwd" element={<UserChangePwd />} />
          <Route path="/user-edit" element={<UserEdit />} />
          <Route path="/user-manage" element={<UserManage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
