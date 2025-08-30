import { useState } from 'react';

export default function GiftCard() {
  const [giftCard, setGiftCard] = useState({
    firstName: 'Jennifer',
    lastName: 'Smith',
    text: 'Free dinner for 4 guests',
    valid: true,
    instructions: 'To use your coupon, click the button below.',
  });

  function spendGiftCard() {
    // setGiftCard({
    //   ...giftCard,
    //   valid: false,
    //   text: 'Your Coupon Has Been Used',
    //   instructions: 'Please visit our restaurant to renew your gift card',
    // });

    /*BEST PRACTICES:*/
    setGiftCard((prevState) => {
      return {
        ...prevState,
        valid: false,
        text: 'Your Coupon Has Been Used',
        instructions: 'Please visit our restaurant to renew your gift card',
      };
    });
  }

  return (
    <div className='section' style={{ padding: '40px' }}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
