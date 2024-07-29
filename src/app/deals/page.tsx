"use client";

import SponsorCards from "@components//SponsorCards/SponsorCards";
import Image from "next/image";

export default function DealsPage() {
  const jazzLogo = `https://upload.wikimedia.org/wikipedia/en/5/52/Utah_Jazz_logo_2022.svg`;

  const JazzDeals = [
    {
      id: 1,
      title: "Jazz Fowl Shot Chick-fil-A Giveaway",
      description: `When an opposing team’s player misses two foul shots in a row during the 4th quarter everyone in the state of Utah can win free Chicken from Chick-fil-A.`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
      instructions: [
        "Download the Chick-fil-A App on your phone or tablet.",
        `Turn on location services (check the app in your phone’s settings and select while using” or “always” to turn on precise location).`,
        `Create an account within the app.`,
        `Open the app 15-30 minutes after missed foul shots. Your free item will show while supplies last to anyone in the state of Utah.`,
      ],
    },
    {
      id: 2,
      title: `Jazz McDonald’s Cheeseburger Tip-Off Giveaway`,
      description: `In one of the more common giveaways, Jazz fans can get a free double cheeseburger with any minimum purchase of $2 from the McDonald’s App.`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
      instructions: [
        `Download the McDonald’s App on your phone or tablet and opt into the rewards option.`,
        `Turn on location services (check the app in your phone’s settings and select while using” or “always” to turn on precise location).`,
        `Create an account within the app`,
        `Order any item worth $2 or more, and redeem your free double-cheeseburger the day after the Jazz win the opening tip.
         The offer is valid one time over the next 3 days.`,
      ],
    },
    {
      id: 3,
      title: `Jazz Win You Win With Swig`,
      description: `When the Jazz win a game, you win a free treat from Swig, the Official Soda Shop of the Utah Jazz.`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Swig_Logo.png/220px-Swig_Logo.png",
      instructions: [
        `Download the Swig App on your phone or tablet.`,
        `Create an account`,
        `After a Jazz win, open your app and redeem your free treat.`,
      ],
    },
    {
      id: 4,
      title: `Jazz Score B111g With Arby’s`,
      description: `Finally, fans can win a free small Arby’s curly cut or crinkle fry any time the Jazz score 111 points or more this season..`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Arby%27s_logo.svg/1200px-Arby%27s_logo.svg.png",
      instructions: [
        `Download the Utah Jazz App.`,
        `Redeem by showing the Utah Jazz App at any Greater Salt Lake City Arby’s location.`,
        `The giveaway starts at 10 A.M. the morning after each qualifying game, and lasts until midnight.`,
      ],
    },
  ];

  return (
    <div>
      <div>
        <h1> Utah Jazz Deals 2024-2025 Season</h1>
        <Image
          src={jazzLogo}
          alt="Utah Jazz Note Logo"
          height={50}
          width={50}
        />
        <div>
          {JazzDeals.map((deal) => (
            <>
              <SponsorCards key={deal.id} deal={deal} logo={jazzLogo} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
