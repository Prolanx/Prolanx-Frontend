import { Route, Routes, Navigate } from "react-router";
import About from "../modules/about/About";
import Bootcamp from "../modules/bootcamp/Bootcamp";
import Home from "../modules/home/Home";
import Resources from "../modules/resources/Resources";
import Services from "../modules/services/Services";
import Collection from "../modules/bootcamp-collection/Collection";
import Email from "../modules/Email/Email";
import Auth from "../modules/auth/Auth";
import AuthGuard from "./guard/AuthGuard";
import Privacy from "../modules/privacy/Privacy";
import CookiePage from "../modules/cookie/Cookie-Page";
import BootcampInfo from "../modules/bootcamp-info/Bootcamp-Info";
import { routes } from "../constants";
import Page from "../Page";
import PageWrapper from "../components/other/PageWrapper";
import NotFound from "../modules/notFound/NotFound";
import Survey from '../modules/survey/Survey';

function AppRoutes() {
  return (
    <Routes>
       <Route
        path={routes.survey}
        element={
          <Page>
            <PageWrapper>
             <Survey/>
            </PageWrapper>
          </Page>
        }
      />
      <Route
        index
        element={
          <Page>
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Page>
        }
      />
      <Route
        path={routes.home}
        element={
          <Page>
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Page>
        }
      />
      <Route
        path={routes.about}
        element={
          <Page>
            <PageWrapper>
              <About />
            </PageWrapper>
          </Page>
        }
      />
      <Route
        path={routes.services}
        element={
          <Page>
            <PageWrapper>
              <Services />
            </PageWrapper>
          </Page>
        }
      />
      <Route
        path={routes.bootcamp}
        element={
          <Page>
            <PageWrapper>
              <Bootcamp />
            </PageWrapper>
          </Page>
        }
      />
      <Route
        path={routes.bootcampList}
        element={
          <Page>
            <PageWrapper>
              <Collection />
            </PageWrapper>
          </Page>
        }
      />
      <Route
        path={routes.bootcampInfo}
        element={
          <Page>
            <PageWrapper>
              <BootcampInfo />
            </PageWrapper>
          </Page>
        }
      />
      <Route
        path={routes.privacy}
        element={
          <Page>
            <PageWrapper>
              <Privacy />
            </PageWrapper>
          </Page>
        }
      />
      <Route
        path={routes.cookie}
        element={
          <Page>
            <PageWrapper>
              <CookiePage />
            </PageWrapper>
          </Page>
        }
      />

      <Route
        path="/not-found"
        element={
          <Page>
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          </Page>
        }
      ></Route>

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

      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}

export default AppRoutes;
