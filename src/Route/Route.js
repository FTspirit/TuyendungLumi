import { Routes, Route } from "react-router-dom";
import Recruit from "../Pages/MainPage/recruit";
import Home from "../Pages/MainPage/home";
import Intern from "../Pages/MainPage/intern";
import ErrorPage from "../Pages/errorPage";
import LumiLife from "../Pages/MainPage/lumilife";
import Blog from "../Pages/MainPage/blog";
import data from "../Asset/data/JD.json";

import TricksDetails from "../App/Detail/TricksDetails/TrickDetail1";
import TricksDetails2 from "../App/Detail/TricksDetails/TrickDetail2";
import TricksDetails3 from "../App/Detail/TricksDetails/TrickDetail3";
import TricksDetails4 from "../App/Detail/TricksDetails/TrickDetail4";

import Blog1 from "../LumiBlogPage/Blog1";
import Blog2 from "../LumiBlogPage/Blog2";
import Blog3 from "../LumiBlogPage/Blog3";

// Import detail component
import LearningLumiPage from "../Pages/DetailPage/LearningLumiPage";
import RecruitDetailPage from "../Pages/DetailPage/RecruitDetailPage";
import TrickCardsDetail from "../App/Detail/TrickCardsDetail";
export default function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/TuyendungLumi" element={<Home />} />
      </Route>
      <Route path="/thuctapsinh" element={<Intern />} />
      <Route path="/thuctapsinh/xemthem" element={<TrickCardsDetail />} />
      <Route path="/thuctapsinh/detail1" element={<TricksDetails />} />
      <Route path="/thuctapsinh/detail2" element={<TricksDetails2 />} />
      <Route path="/thuctapsinh/detail3" element={<TricksDetails3 />} />
      <Route path="/thuctapsinh/detail4" element={<TricksDetails4 />} />
      <Route path="/tuyendung" element={<Recruit />} />
      <Route path="/tuyendung/detail" element={<RecruitDetailPage />} />
      {data.jobs.map((item) => (
        <Route
          path={`/tuyendung/${item.id}`}
          element={<RecruitDetailPage data={item} />}
        />
      ))}
      <Route path="/doisong" element={<LumiLife />} />
      <Route path="/doisong/blog1" element={<Blog1 />} />
      <Route path="/doisong/blog2" element={<Blog2 />} />
      <Route path="/doisong/blog3" element={<Blog3 />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/blog/learning-with-lumi" element={<LearningLumiPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
