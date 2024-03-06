import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main>
      <h1>Whoops!</h1>
      <h2>There is nothing here!</h2>
      <Link to='/'>Go back home!</Link>
    </main>
  );
}

export default ErrorPage;
