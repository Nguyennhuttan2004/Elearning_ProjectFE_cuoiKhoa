import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../templates/UserTemplate/UserTemplate";
import { pathDefault } from "../common/path";
import RegisterPage from "../pages/Register/RegisterPage";
import LoginPage from "../pages/Login/LoginPage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
// import ManagerUser from "../pages/ManagerUser/ManagerUser";
import CreateUser from "../pages/CreateUser/CreateUser";
import { Skeleton } from "antd";
import CourseDetailTemplate from "../templates/CourseDetailTemplates/CourseDetailTemplate";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
const ManagerUser = React.lazy(() => import("../pages/ManagerUser/ManagerUser"))

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <UserTemplate />,
      children: [
        {
          path: pathDefault.listJob,
          element: <ListJobPage />
        }
      ]
    },
    {
      path: pathDefault.register,
      element: <RegisterPage />,
    },
    {
      path: pathDefault.login,
      element: <LoginPage />,
    },
    {
      path: pathDefault.admin,
      element: <AdminTemplate />,
      children: [
        // {
        //   // path: "manager-user",
        //   index: true,
        //   element: <ManagerUser />
        // },
        {
          path: "manager-user",
          // index: true,
          element: <Suspense fallback={<Skeleton/>}> <ManagerUser /></Suspense>
        },
        {
          path: "create-user",
          element: <CreateUser/>
        }
      ]
    }, {
      path: '/admin-login',
      element: <AdminLogin />
    },
    {
      path: '/course/:id',
      element: <CourseDetailTemplate />,
      children: [
        {
          index: true, 
          element: <CourseDetail />
        }
      ]
    }
  ]);
  // Ben nay da goi chay 1 lan roi
  return routes;
};

export default useRoutesCustom;
