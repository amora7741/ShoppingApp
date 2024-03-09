import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className='home'>
      <div className='home-titles'>
        <h1 className='outline'>Breeze</h1>
        <h1>Breeze</h1>
        <h1 className='outline'>Breeze</h1>
      </div>
      <div className='buttons'>
        <button id='startshopping' className='homebutton'>
          <Link to='shop'>Start Shopping</Link>
        </button>
        <button id='about' className='homebutton underline'>
          <Link to='about'>About Us</Link>
        </button>
      </div>
    </main>
  );
}

export default HomePage;
