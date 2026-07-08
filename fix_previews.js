const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\\\Users\\\\hp\\\\AndroidStudioProjects\\\\Event Blogging\\\\src\\\\app';

const previews = {
  "india": {
    p1: "Pool D brings massive expectations for India. Facing rivals like Pakistan and England, every match is a pressure cooker. India's strength is their world-class drag-flicking and solid defensive structure.",
    p2: "The blockbuster clash is undoubtedly India vs Pakistan. This iconic Asian rivalry guarantees fireworks. India has held the upper hand recently, but World Cup pressure changes everything.",
    p3: "Prediction: India is highly favored to advance to the knockouts. A podium finish is well within reach if their penalty corner conversion remains high."
  },
  "pakistan": {
    p1: "Pakistan enters Pool D looking to reclaim their historic glory. Facing India and England will test their young, agile squad. Their game relies on traditional attacking flair and quick counter-attacks.",
    p2: "The key fixture is Pakistan vs India. Winning this high-stakes rivalry could set the momentum for their entire tournament. They must overcome inconsistency to succeed.",
    p3: "Prediction: Reaching the crossover stage is the immediate goal. A quarter-final appearance would be a massive success for this rebuilding phase."
  },
  "belgium": {
    p1: "As recent World Cup and Olympic champions, Belgium is the team to beat in Pool B. Their deeply experienced squad plays a highly structured, patient, and clinical style of hockey.",
    p2: "The key match is Belgium vs Germany. This clash of European titans will likely decide the pool winner. Belgium's golden generation is still delivering at the highest level.",
    p3: "Prediction: Anything less than the Semi-Finals is a failure for Belgium. They are prime contenders to lift the trophy once again."
  },
  "germany": {
    p1: "Germany, the reigning 2023 World Champions, enters Pool B with immense confidence. Their tactical discipline, late-game heroics, and set-piece efficiency make them incredibly dangerous.",
    p2: "The pivotal match is Germany vs Belgium. This is a rematch of the 2023 World Cup Final. Germany thrives under pressure and rarely makes unforced errors.",
    p3: "Prediction: Germany is a lock for the knockouts. They are heavy favorites to reach the Grand Final and potentially defend their title."
  },
  "netherlands": {
    p1: "Playing at home in Wagener Stadium, the Netherlands are desperate for World Cup glory. The Men's and Women's teams are both ranked #1 and boast lethal attacking talent.",
    p2: "The Netherlands vs New Zealand match in Pool A will test their offensive fluidity. The Dutch crowd will provide a massive advantage, acting as the 12th player.",
    p3: "Prediction: The Dutch Women are heavy favorites to win it all. The Men are expected to reach the Semi-Finals, with a strong chance of winning gold."
  },
  "australia": {
    p1: "Australia's 'Kookaburras' bring their trademark high-intensity, physical style to Pool C. Their relentless pressing and incredible fitness levels overwhelm opponents.",
    p2: "Australia vs Spain is the marquee matchup in their pool. The Aussies will look to assert dominance early and rack up a high goal difference.",
    p3: "Prediction: Australia is a perennial medal threat. Expect them to top Pool C comfortably and reach the Semi-Finals."
  },
  "england": {
    p1: "England faces a tough challenge in Pool D alongside India and Pakistan. Their organized defense and set-piece variations are their strongest assets.",
    p2: "England vs India will be crucial for determining the pool standings. England has consistently performed well in Europe but needs to turn draws into wins.",
    p3: "Prediction: Advancing from the 'Group of Death' (Pool D) is the first hurdle. They are capable of reaching the Quarter-Finals."
  },
  "argentina": {
    p1: "Argentina brings Latin flair and immense passion to Pool A. The 'Los Leones' (Men) and 'Las Leonas' (Women) are both highly competitive and incredibly physical.",
    p2: "Argentina vs Netherlands will be a fantastic spectacle. Argentina's robust defense must withstand the Dutch attacking waves.",
    p3: "Prediction: The Women's team is a strong title contender. The Men's team should comfortably reach the knockouts but will face tough European resistance."
  },
  "spain": {
    p1: "Spain is a dark horse in Pool C. They play an expressive, possession-based game with excellent technical skills in the midfield.",
    p2: "Spain vs Australia will be a massive test of their defensive resilience. Spain can cause major upsets on their day.",
    p3: "Prediction: Spain is expected to advance past the group stage. A Quarter-Final run is realistic if they capitalize on scoring chances."
  },
  "malaysia": {
    p1: "Malaysia ('Speedy Tigers') aims to make an impact in Pool B. Their speed on the wings and penalty corner routines are critical to their strategy.",
    p2: "Facing Germany and Belgium is a daunting task. Malaysia's key focus will be securing points against France to ensure progression.",
    p3: "Prediction: Surpassing the pool stage will be extremely challenging. They will likely fight for crossover qualification."
  },
  "france": {
    p1: "France is a rapidly improving nation in world hockey. Playing close to home in Belgium will boost their confidence in Pool B.",
    p2: "France vs Malaysia is the crucial fixture for their survival. They have shown they can compete with top teams for significant periods.",
    p3: "Prediction: Reaching the crossover stage is a realistic target. Upsetting Belgium or Germany would be historic."
  },
  "ireland": {
    p1: "Ireland relies on incredible team spirit and defensive grit. In Pool C, they will look to frustrate opponents and strike on counter-attacks.",
    p2: "Ireland vs South Africa is a must-win match for both teams. Ireland's goalkeeper will be pivotal against the higher-ranked teams.",
    p3: "Prediction: Progression to the knockouts is an uphill battle, but Ireland has a history of punching above their weight."
  },
  "south-africa": {
    p1: "South Africa brings unpredictable flair and individual brilliance to Pool C. They are capable of scoring spectacular goals but often struggle with defensive consistency.",
    p2: "The clash against Ireland is their best chance for 3 points. They must tighten their defense to compete with Spain and Australia.",
    p3: "Prediction: Qualifying for the crossover stage would be a successful campaign. They are dangerous giant-killers."
  },
  "new-zealand": {
    p1: "The 'Black Sticks' are known for their physical and direct style of play. Drawn in Pool A, they face a tough task against the host nation, the Netherlands.",
    p2: "New Zealand vs Argentina will be a deeply physical battle. Converting penalty corners is essential for their success.",
    p3: "Prediction: They have the quality to reach the Quarter-Finals, but consistency against top-tier opponents remains their biggest hurdle."
  },
  "chile": {
    p1: "Chile's presence in the World Cup is a testament to their growing hockey program. They face a monumental challenge against elite nations.",
    p2: "Every match is a learning experience. Their focus will be on defensive shape and executing effective counter-attacks.",
    p3: "Prediction: Advancing is highly unlikely, but scoring goals and competing fiercely will be a victory for Chilean hockey."
  },
  "wales": {
    p1: "Wales is ready to showcase their fighting spirit in a brutal Pool D. Competing against India, England, and Pakistan requires immense resilience.",
    p2: "The Home Nations clash against England will be fiercely contested. Wales will rely on strict defensive discipline.",
    p3: "Prediction: Surviving Pool D is a massive challenge. Earning points in this group would be considered a major achievement."
  }
};

Object.keys(previews).forEach(slug => {
  const pagePath = path.join(srcDir, `hockey-world-cup-2026-schedule-${slug}`, 'page.js');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  const d = previews[slug];
  
  // Replace the entire Analyst Prediction section
  const regex = /\{\/\* Analyst Prediction \*\/\}[\s\S]*?<\/section>/;
  
  // Format the team name from the slug
  let teamName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const newSection = `{/* Analyst Prediction */}
        <section style={{ background: "linear-gradient(135deg, rgba(192,0,48,0.04) 0%, #f8fafc 100%)", border: "1px solid rgba(192,0,48,0.12)", padding: "2.5rem", borderRadius: "24px", marginBottom: "4rem", boxShadow: "0 8px 30px rgba(15,23,42,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🏑</span>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", fontStyle: "italic", color: "var(--text-main)", margin: 0 }}>Analyst's ${teamName} Preview</h2>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.9", color: "var(--text-muted)" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              <strong style={{ color: "var(--text-main)" }}>${d.p1}</strong>
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              ${d.p2}
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-main)" }}>Prediction:</strong> ${d.p3}
            </p>
          </div>
        </section>`;
        
  content = content.replace(regex, newSection);
  
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`Updated Analyst Preview for ${slug}`);
});
