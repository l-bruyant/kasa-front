import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Aille!</h1>
      <p>Une erreur est survenue.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`home`}>Retour à la page d'accueil</Link>
    </div>
  );
}