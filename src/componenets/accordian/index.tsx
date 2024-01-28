import React from "react";
import AccordianSec from "../atoms/accordionsec";

const Accordion = () => {
  return (
    <div className="bg-black w-full flex flex-col p-20">
      <div>
        <h1 className="text-4xl font-bold text-white text-center">Frequently Asked Questions</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-6">
        <AccordianSec heading="What is FilmyDuniya?" content="FilmyDuniya is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." />
        <AccordianSec heading="How much does FilmyDuniya cost?" content="Watch FimlyDuniya on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." />
        <AccordianSec heading="Where can I watch?" content="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." />
        <AccordianSec heading="How do I cancel?" content="FilmyDuniya is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime." />
        <AccordianSec heading="What can I watch on FilmyDuniya?" content="FilmyDuniya has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />
        <AccordianSec heading="Is FilmyDuniya good for kids?" content="The FilmyDuniya Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." />
      </div>
    </div>
  );
};

export default Accordion;
