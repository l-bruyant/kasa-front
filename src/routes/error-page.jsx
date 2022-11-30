import { useRouteError, Link } from "react-router-dom";
import "../styles/error-page.css"
import ScrollToTop from "../components/scrolltotop";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error.statusText)
  console.log(error.message)

  return (

    <div id="error-page">
      <ScrollToTop />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={`home`}>Retourner sur la page d'accueil</Link>
    </div>
  );
}