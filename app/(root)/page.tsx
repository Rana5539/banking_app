import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

function Home() {
  const loggedIn={firstName:'Waqar', lastName:"Akram", email:'wa852094@gmail.com'};
  return (
    <div>
     <section className='home'>
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
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50}, {currentBalance: 500.78}]}
      />
      </section> 
    </div>
  );
}

export default Home;
