import SingleCard from "./HomeCardComponent/SingleCard/SingleCard";


const HomeCard = () => {
    const cardsData = [
        { imgurl: '/assets/card-img/learn_card_1.png', cardtext: 'How to spot phishing scams, impersonation fraud and other common cyber threats' },
        { imgurl: '/assets/card-img/learn_card_2.png', cardtext: 'How to secure your devices, accounts and passwords' },
        { imgurl: '/assets/card-img/learn_card_3.png', cardtext: 'How to use encryption, VPNs and other tools to protect your online activities' },
        { imgurl: '/assets/card-img/learn_card_4.png', cardtext: 'How to report and recover from a cyber incident' },
        { imgurl: '/assets/card-img/learn_card_5.png', cardtext: 'And much more!' },
        
      ];
      
  return (
    <>
    <section>
        <div >
            <h1 className="text-2xl font-medium max-w-2xl mx-auto text-center">These cyber-attacks can have serious consequences for your privacy, identity, finances and safety.</h1>
            <p className="text-lg max-w-2xl mx-auto text-center mt-7 mb-7">That's why we created Kick Ass Seniors, a comprehensive and affordable online training program that teaches you how to identify and mitigate cyber-attacks.</p>
            <h1 className="text-3xl font-medium text-blue-600 mb-5 max-w-2xl mx-auto text-center">
            With Kick Ass Seniors, you will learn
            </h1>
            <div className="grid grid-cols-3 gap-y-5 justify-center items-center">

            {cardsData.map((card, index) => (
              <SingleCard key={index} imgurl={card.imgurl} cardtext={card.cardtext} />
            ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeCard