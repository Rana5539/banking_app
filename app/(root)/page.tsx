import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

function Home() {
  const loggedIn={firstName:'Waqar'};
  return (
    <div>
     <section className='home'>home
      <div className='home-content'>
        <header className='home-header'>
         <HeaderBox 
         type='greeting'
         title='Welcome'
         user={loggedIn?.firstName || 'Guest'}
         subtext='Access and manage your account and transactions effieciently'
         />

         <TotalBalanceBox
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={12500.35}
         />
        </header>
      </div>
      </section> 
    </div>
  );
}

export default Home;
