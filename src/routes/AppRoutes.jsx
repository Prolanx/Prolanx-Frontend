import { Route, Routes } from "react-router";
import About from "../modules/about/About";
import Bootcamp from "../modules/bootcamp/Bootcamp";
import Home from "../modules/home/Home";
import Resources from "../modules/resources/Resources";
import Services from "../modules/services/Services";
import Courses from "../modules/courses/Courses";
import Email from "../modules/Email/Email";
import Auth from "../modules/auth/Auth";
import AuthGuard from "./guard/AuthGuard";
import Privacy from "../modules/privacy/Privacy";
import CookiePage from "../modules/cookie/Cookie-Page";
import BootcampInfo from "../modules/courses-content/Bootcamp-Info";
import { routes } from "../constants";
import Page from "../Page";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route
        path={routes.about}
        element={
          <Page>
            <About />
          </Page>
        }
      />
      <Route path={routes.services} element={<Services />} />
      <Route
        path={routes.bootcamp}
        element={
          <Page>
            <Bootcamp />
          </Page>
        }
      />
      <Route
        path={routes.bootcampList}
        element={
          <Page>
            <Courses />
          </Page>
        }
      />
      <Route
        path={routes.bootcampInfo}
        element={
          <Page>
            <BootcampInfo />
          </Page>
        }
      />
      <Route
        path={routes.privacy}
        element={
          <Page>
            <Privacy />
          </Page>
        }
      />
      <Route
        path={routes.cookie}
        element={
          <Page>
            <CookiePage />
          </Page>
        }
      />
      <Route
        path={routes.resources}
        element={
          <Page>
            <Resources />
          </Page>
        }
      />
      <Route path="/auth" element={<Auth />} />

      <Route element={<AuthGuard />}>
        <Route path="/send-mail/" element={<Email />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
