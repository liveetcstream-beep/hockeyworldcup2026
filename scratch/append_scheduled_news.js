const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/news.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find the closing bracket of the newsArticles array
const lastBracketIndex = content.lastIndexOf('];');

if (lastBracketIndex === -1) {
  console.error('Error: Could not find the end of the newsArticles array.');
  process.exit(1);
}

// Defining the 6 scheduled articles to append
const newArticles = `  {
    title: "Netherlands Men's Squad Mapped: Brinkman to Lead Oranje at Wagener Stadium",
    slug: "netherlands-world-cup-squad-2026",
    category: "Squad News",
    author: "Bram van de Meer",
    authorTitle: "Senior Field Hockey Analyst",
    authorDesc: "Former Dutch transition coach with 15+ years of tactical analysis experience in European hockey leagues.",
    date: "July 19, 2026",
    readTime: "5 min read",
    image: "/news/netherlands-squad-news.webp",
    excerpt: "Head coach Jeroen Delmee has named a high-tempo 18-player Netherlands squad for the Hockey World Cup 2026, captained by Thierry Brinkman.",
    content: \`
      <p>The Royal Dutch Hockey Association (KNHB) has officially confirmed the 18-member men's roster representing the <strong>Netherlands (Oranje)</strong> at the co-hosted <strong>FIH Hockey World Cup 2026</strong>. Playing their Pool A matches on home turf at the historic <strong>Wagener Hockey Stadium in Amstelveen</strong>, the Dutch side aims to leverage home-crowd energy to reclaim the global title.</p>

      <h2>Who has been named in the Netherlands HWC 2026 squad?</h2>
      <p>Head coach Jeroen Delmee has prioritized youth velocity alongside veteran transition playmakers. Here is the official roster:</p>
      <ul>
        <li><strong>Goalkeepers:</strong> Pirmin Blaak, Maurits Visser</li>
        <li><strong>Defenders:</strong> Joep de Mol, Lars Balk, Jip Janssen, Teun Beins, Derck de Vilder</li>
        <li><strong>Midfielders:</strong> Seve van Ass, Thierry Brinkman (C), Jonas de Geus, Steijn van Heijningen</li>
        <li><strong>Forwards:</strong> Koen Bijen, Tjep Hoedemakers, Terrance Pieters, Duco Telgenkamp, Thijs van Dam</li>
      </ul>

      <h2>Thierry Brinkman Anchors High-Transition Midfield</h2>
      <p>Star playmaker <strong>Thierry Brinkman</strong> captains the squad, providing link play with goal-scorer <strong>Duco Telgenkamp</strong>. Penalty corner drag-flick specialist <strong>Jip Janssen</strong> will lead the set-piece execution, which remains critical for Oranje's chances in Pool A against Argentina, Japan, and New Zealand.</p>

      <h2>Spectator Guide & Amsterdam Transit Info</h2>
      <p>Fans traveling to Wagener Stadium in Amstelveen should note that local vehicle parking is strictly restricted to residents. Please use the Metro 51 line to Amsterdam Amstelveenseweg and walk to the forest entrance to avoid ticketing penalties.</p>
    \`,
    faqs: [
      {
        question: "Who is the captain of the Dutch Hockey team for HWC 2026?",
        answer: "Thierry Brinkman captains the Netherlands squad, with Pirmin Blaak starting as the primary goalkeeper."
      },
      {
        question: "Where do the Netherlands play their group stage matches?",
        answer: "All Netherlands Pool A group matches will be played at the Wagener Hockey Stadium in Amstelveen, Amsterdam."
      }
    ],
    tags: ["Netherlands Hockey", "Thierry Brinkman", "Amstelveen", "Squad News", "Pool A"]
  },
  {
    title: "Germany Name HWC 2026 Squad: André Henning Selects Defending Champions Roster",
    slug: "germany-world-cup-squad-2026",
    category: "Squad News",
    author: "Marc Devos",
    authorTitle: "Senior Belgian Hockey Journalist",
    authorDesc: "Sports correspondent covering European field hockey championships and FIH Pro League events since 2011.",
    date: "July 19, 2026",
    readTime: "5 min read",
    image: "/news/germany-squad-news.webp",
    excerpt: "André Henning has announced Germany's squad for the Hockey World Cup 2026. Mats Grambusch captains the Honamas in their title defense in Wavre.",
    content: \`
      <p>The German Hockey Federation (DHB) has confirmed the final 18-player Honamas squad selected to defend their crown at the <strong>FIH Hockey World Cup 2026</strong> in Wavre, Belgium. Head coach André Henning has kept the core of the 2023 champions intact despite the recent injury loss of defender Mathias Müller.</p>

      <h2>Who is in Germany's World Cup 2026 squad?</h2>
      <p>Mats Grambusch captains a battle-hardened squad packed with European championship experience:</p>
      <ul>
        <li><strong>Goalkeepers:</strong> Jean-Paul Danneberg, Alexander Stadler</li>
        <li><strong>Defenders:</strong> Mats Grambusch (C), Tom Grambusch, Lukas Windfeder, Gonzalo Peillat</li>
        <li><strong>Midfielders:</strong> Martin Zwicker, Hannes Müller, Timur Oruz, Niklas Wellen</li>
        <li><strong>Forwards:</strong> Christopher Rühr, Justus Weigand, Marco Miltkau, Thies Prinz</li>
      </ul>

      <h2>Gonzalo Peillat Leads Defending penalty corner Defense</h2>
      <p>With <strong>Jean-Paul Danneberg</strong> between the posts and drag-flick powerhouse <strong>Gonzalo Peillat</strong> on penalty corners, Germany boasts one of the most physical squads in Pool B. They face co-hosts Belgium on August 17 in a blockbuster clash at Belfius Hockey Arena.</p>
    \`,
    faqs: [
      {
        question: "Who is the captain of Germany for the 2026 Hockey World Cup?",
        answer: "Mats Grambusch captains the German team, with André Henning serving as head coach."
      },
      {
        question: "When is Germany vs Belgium HWC 2026?",
        answer: "Germany plays co-hosts Belgium on August 17, 2026, at the Belfius Hockey Arena in Wavre."
      }
    ],
    tags: ["Germany Hockey", "Mats Grambusch", "Wavre", "Squad News", "Pool B"]
  },
  {
    title: "Australia Kookaburras Confirm Roster for Hockey World Cup 2026 Title Bid",
    slug: "australia-world-cup-squad-2026",
    category: "Squad News",
    author: "Bram van de Meer",
    authorTitle: "Senior Field Hockey Analyst",
    authorDesc: "Former Dutch transition coach with 15+ years of tactical analysis experience in European hockey leagues.",
    date: "July 20, 2026",
    readTime: "5 min read",
    image: "/news/australia-squad-news.webp",
    excerpt: "Head coach Colin Batch has announced Australia's 18-player Kookaburras squad for the Hockey World Cup 2026. Blake Govers leads the strike line.",
    content: \`
      <p>Hockey Australia has officially named the 18-player men's squad representing the <strong>Australia Kookaburras</strong> at the <strong>FIH Hockey World Cup 2026</strong>. Entering Pool C as top contenders, the Kookaburras aim to leverage their high-press forward strategies to secure gold in Wavre.</p>

      <h2>Who is in the Australia Kookaburras squad?</h2>
      <p>Coach Colin Batch has selected a fast-breaking squad featuring seasoned drag-flickers:</p>
      <ul>
        <li><strong>Goalkeepers:</strong> Andrew Charter, Johan Durst</li>
        <li><strong>Defenders:</strong> Jeremy Hayward, Jake Harvie, Matt Dawson, Joshua Beltz</li>
        <li><strong>Midfielders:</strong> Aran Zalewski (C), Flynn Ogilvie, Tom Craig, Eddie Ockenden</li>
        <li><strong>Forwards:</strong> Blake Govers, Tim Brand, Nathan Ephraums, Jacob Anderson</li>
      </ul>

      <h2>Blake Govers to Lead circle Penetrations</h2>
      <p>Commanding forward <strong>Blake Govers</strong> is set to lead Australia's penalty corner battery. Veteran midfielder <strong>Eddie Ockenden</strong> adds experience, securing transition control in their Pool C opener against Spain on August 18.</p>
    \`,
    faqs: [
      {
        question: "Who captains the Australia Kookaburras for HWC 2026?",
        answer: "Aran Zalewski captains the Australia Kookaburras squad for the tournament."
      },
      {
        question: "Where do Australia play their group matches?",
        answer: "Australia plays in Pool C, with matches hosted at the Belfius Hockey Arena in Wavre, Belgium."
      }
    ],
    tags: ["Australia Kookaburras", "Blake Govers", "Wavre", "Squad News", "Pool C"]
  },
  {
    title: "Argentina Los Leones Announce 18-Player Squad for Pool A Clash in Amstelveen",
    slug: "argentina-world-cup-squad-2026",
    category: "Squad News",
    author: "Marc Devos",
    authorTitle: "Senior Belgian Hockey Journalist",
    authorDesc: "Sports correspondent covering European field hockey championships and FIH Pro League events since 2011.",
    date: "July 20, 2026",
    readTime: "4 min read",
    image: "/news/argentina-squad-news.webp",
    excerpt: "Argentina Hockey has confirmed the 18-player Los Leones squad for the Hockey World Cup 2026. Maico Casella leads the attack.",
    content: \`
      <p>The Argentine Hockey Confederation (CAH) has officially announced the 18-member men's squad, **Los Leones**, representing Argentina at the **FIH Hockey World Cup 2026** in Amstelveen, Netherlands.</p>

      <h2>Who has been named in the Argentina squad?</h2>
      <p>Head coach Mariano Ronconi has selected a balanced roster targeting Pool A qualifiers:</p>
      <ul>
        <li><strong>Goalkeepers:</strong> Tomás Santiago, Emiliano Bosso</li>
        <li><strong>Defenders:</strong> Nicolas Cicileo, Federico Monja, Agustin Bugallo</li>
        <li><strong>Midfielders:</strong> Thomas Habif, Matías Rey (C), Agustin Mazzilli</li>
        <li><strong>Forwards:</strong> Maico Casella, Lucas Toscani, Nicolas Keenan, Martin Ferreiro</li>
      </ul>

      <h2>Matías Rey to Captain Los Leones</h2>
      <p>Veteran midfielder **Matías Rey** will captain the squad, with goal-scorer **Maico Casella** heading up circle penetrations. Placed in Pool A, Argentina opens against Japan on August 16 before playing the Netherlands on August 18 in Amstelveen.</p>
    \`,
    faqs: [
      {
        question: "Who is the captain of Argentina's hockey squad?",
        answer: "Matías Rey captains Los Leones for the 2026 World Cup campaign."
      },
      {
        question: "When is Netherlands vs Argentina HWC 2026?",
        answer: "Argentina faces the Netherlands on August 18, 2026, at the Wagener Stadium in Amstelveen."
      }
    ],
    tags: ["Argentina Los Leones", "Maico Casella", "Amstelveen", "Squad News", "Pool A"]
  },
  {
    title: "Hockey World Cup 2026 TV Channels & Streaming Rights: Global Broadcasters Guide",
    slug: "hockey-world-cup-2026-tv-channels",
    category: "Broadcasting Guides",
    author: "Marc Devos",
    authorTitle: "Senior Belgian Hockey Journalist",
    authorDesc: "Sports correspondent covering European field hockey championships and FIH Pro League events since 2011.",
    date: "July 21, 2026",
    readTime: "5 min read",
    image: "/news/tv-channels.webp",
    excerpt: "Looking for where to watch the Hockey World Cup 2026? Here is the complete list of TV channels and live streaming rights holders worldwide.",
    content: \`
      <p>The International Hockey Federation (FIH) has finalized the global broadcasting and live streaming rights for the upcoming co-hosted **FIH Hockey World Cup 2026** in Amstelveen and Wavre.</p>

      <h2>Where to watch the Hockey World Cup 2026 live?</h2>
      <p>Here is the official country-wise TV channels and streaming platforms list:</p>
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>TV Broadcaster</th>
            <th>Live Stream Platform</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>India & Subcontinent</strong></td>
            <td>Star Sports Network, Sports18</td>
            <td>Disney+ Hotstar, JioCinema</td>
          </tr>
          <tr>
            <td><strong>Pakistan</strong></td>
            <td>PTV Sports, A Sports</td>
            <td>Tapmad TV</td>
          </tr>
          <tr>
            <td><strong>Belgium</strong></td>
            <td>RTBF, VRT</td>
            <td>Auvio, Sporza</td>
          </tr>
          <tr>
            <td><strong>Netherlands</strong></td>
            <td>NOS</td>
            <td>NOS.nl / NPO Start</td>
          </tr>
          <tr>
            <td><strong>Germany</strong></td>
            <td>DAZN, ZDF</td>
            <td>DAZN / ZDF Mediathek</td>
          </tr>
          <tr>
            <td><strong>United Kingdom</strong></td>
            <td>TNT Sports</td>
            <td>discovery+</td>
          </tr>
          <tr>
            <td><strong>Australia</strong></td>
            <td>Fox Sports</td>
            <td>Kayo Sports</td>
          </tr>
        </tbody>
      </table>

      <h2>FIH+ Streaming for Geoblocked Areas</h2>
      <p>For regions without dedicated television broadcast rights holders, all 100 matches will be streamed live on the official **Watch.Hockey (FIH+)** platform under a premium tournament pass.</p>
    \`,
    faqs: [
      {
        question: "How can I watch the Hockey World Cup 2026 in India?",
        answer: "Indian fans can watch the matches live on Star Sports and live stream them via Disney+ Hotstar."
      },
      {
        question: "Is there a free streaming option for the Hockey World Cup?",
        answer: "In Belgium and the Netherlands, public broadcasters (NOS, RTBF, VRT) will provide free streaming for matches of their national teams."
      }
    ],
    tags: ["Broadcasting", "Live Streaming", "TV Channels", "FIH Plus", "Event Guide"]
  },
  {
    title: "FIH Hockey World Cup 2026 Prize Money Distribution: Full Purse & Allocation Mapped",
    slug: "fih-hockey-world-cup-2026-prize-money",
    category: "Tournament News",
    author: "Bram van de Meer",
    authorTitle: "Senior Field Hockey Analyst",
    authorDesc: "Former Dutch transition coach with 15+ years of tactical analysis experience in European hockey leagues.",
    date: "July 21, 2026",
    readTime: "4 min read",
    image: "/news/prize-money.webp",
    excerpt: "The International Hockey Federation (FIH) has announced the official prize pool allocation for the co-hosted Hockey World Cup 2026.",
    content: \`
      <p>The International Hockey Federation (FIH) has confirmed the prize money structure and purse distribution allocation for the co-hosted **FIH Hockey World Cup 2026**.</p>

      <h2>How is the HWC 2026 prize money distributed?</h2>
      <p>The total prize pool is allocated based on final team standings at the conclusion of the tournament on August 30:</p>
      <ul>
        <li><strong>World Cup Champions (Gold Medalists):</strong> $150,000 + Championship Trophy</li>
        <li><strong>Runners-Up (Silver Medalists):</strong> $90,000</li>
        <li><strong>Third Place (Bronze Medalists):</strong> $60,000</li>
        <li><strong>Fourth Place:</strong> $40,000</li>
        <li><strong>Quarter-Finalist Teams (5th to 8th):</strong> $20,000 each</li>
      </ul>

      <h2>Individual Player Awards & Bonuses</h2>
      <p>In addition to team prizes, cash bonuses are awarded to individual standout performers, audited by the FIH panel:</p>
      <ul>
        <li><strong>FIH Best Player of the Tournament:</strong> $10,000</li>
        <li><strong>Top Goal Scorer Award (Highest goals):</strong> $7,500</li>
        <li><strong>Best Goalkeeper of the Tournament:</strong> $7,500</li>
        <li><strong>Best Young Player Award (Under 21):</strong> $5,000</li>
      </ul>
    \`,
    faqs: [
      {
        question: "What is the cash prize for winning the Hockey World Cup 2026?",
        answer: "The winning team receives a cash prize of $150,000 alongside the official gold medals and FIH World Cup Trophy."
      },
      {
        question: "Are there cash prizes for individual awards?",
        answer: "Yes, individual awards such as Best Player, Top Scorer, and Best Goalkeeper carry cash prizes ranging from $5,000 to $10,000."
      }
    ],
    tags: ["Prize Money", "FIH", "Awards", "Tournament News", "Event Guide"]
  }
];`;

// Append the new articles right inside the exported array before the closing bracket '];'
const beforeBracket = content.slice(0, lastBracketIndex);
const afterBracket = content.slice(lastBracketIndex);

const updatedContent = beforeBracket + ',\n' + newArticles + afterBracket;

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully appended 6 scheduled articles to news.js!');
