// MarketWire24 - Complete News Data & Engine
const newsData = {
    crypto: [
        { id: "c1", title: "Bitcoin’s Q1 2026 Price Targets: Analyst Consensus", excerpt: "Major global banks suggest a price floor of $95,000 as institutional accumulation accelerates.", content: "MarketWire24 Analysis: Bitcoin (BTC) is entering a phase of unprecedented institutional support. Analysts from top-tier investment firms suggest that the supply shock from previous halving cycles, combined with consistent Spot ETF inflows, has created a solid price floor at $95,000. For Q1 2026, the primary resistance level sits at $120,000. If institutional buy-side pressure continues at this rate, we expect a breakout by the end of March, driven largely by sovereign wealth fund allocations in the Middle East.", date: "Feb 10, 2026" },
        { id: "c2", title: "Ethereum 3.0 Roadmap: Scalability Achieved?", excerpt: "The goal for 2026 is 100,000 transactions per second via advanced danksharding.", content: "The Ethereum Foundation has released the final technical specifications for 'The Surge.' In 2026, the focus is squarely on danksharding, which aims to optimize data availability for Layer 2 networks. This transition is expected to push Ethereum's throughput to 100,000 transactions per second. Developers confirm that gas fees on L2 solutions like Arbitrum and Optimism will remain consistently below $0.01, finally making decentralized finance (DeFi) viable for high-frequency retail transactions.", date: "Feb 09, 2026" },
        { id: "c3", title: "The Rise of AI-Driven Crypto Trading Bots", excerpt: "Over 65% of mid-cap altcoin volume is now driven by automated AI agents.", content: "A new report on market microstructure reveals that AI agents are now responsible for the majority of liquidity in the altcoin market. These bots use Large Language Models (LLMs) to scan social media sentiment and regulatory news in real-time, executing trades in milliseconds. While this provides deep liquidity, it has also led to increased volatility in low-cap assets. Regulators are currently discussing whether AI-driven 'sentiment manipulation' should be classified as a new form of market abuse.", date: "Feb 08, 2026" },
        { id: "c4", title: "Why Regulators are Targeting Privacy Coins", excerpt: "FATF guidelines for 2026 create new hurdles for untraceable assets.", content: "The Financial Action Task Force (FATF) has issued a stern warning regarding 'Anonymity Enhanced Currencies.' Major exchanges in the US and Europe have begun delisting privacy coins like Monero to remain compliant with the 2026 AML (Anti-Money Laundering) framework. However, the crypto community is pivoting toward Zero-Knowledge Proof (ZKP) technology on transparent blockchains, which allows for individual transaction privacy while remaining audit-friendly for tax authorities.", date: "Feb 07, 2026" },
        { id: "c5", title: "Layer 2 Scaling: The New Battleground", excerpt: "ZK-Rollups and Optimistic Rollups compete for RWA tokenization.", content: "Real-World Asset (RWA) tokenization has become the billion-dollar prize for Layer 2 networks. In 2026, we are seeing major real estate and commodity markets moving their ledgers onto ZK-Rollups due to their superior security proofs. Optimistic Rollups are fighting back with 'Instant-Withdrawal' bridges. The competition is fierce, but the real winners are the users, who now enjoy a seamless multi-chain ecosystem where assets move freely with minimal friction.", date: "Feb 06, 2026" },
        { id: "c6", title: "5 Global Banks Opening Crypto Desks", excerpt: "Top-tier investment banks transition from custody to active market-making.", content: "In a landmark move for the industry, five of the world's largest investment banks have announced the launch of active digital asset trading desks. Unlike the previous years where banks only offered 'custody' (holding) services, they are now acting as market makers for Bitcoin and Ethereum. This provides the deep liquidity necessary for pension funds and insurance companies to enter the space, effectively 'de-risking' the asset class for conservative institutional investors.", date: "Feb 05, 2026" }
    ],
    markets: [
        { id: "m1", title: "Tech Stock Recovery: Are We in a New Bull Cycle?", excerpt: "NASDAQ shows resilience as enterprise AI spending hits record highs.", content: "The NASDAQ 100 has surged 12% in the first weeks of 2026. The recovery is driven by a massive surge in enterprise AI spending. Companies across all sectors are now integrating generative AI into their core operations, leading to significant margin expansions. Semiconductor yields have also stabilized, ending the supply chain anxiety that plagued the market in previous years. Analysts suggest we are in the early stages of a decade-long productivity boom driven by silicon-based intelligence.", date: "Feb 10, 2026" },
        { id: "m2", title: "Gold vs. Digital Assets: The Safe Haven Fight", excerpt: "Central banks increase gold reserves while retail shifts to 'Digital Gold'.", content: "A fascinating split is occurring in the 'Safe Haven' market. While global central banks have increased their physical gold reserves by 15% to hedge against geopolitical instability, younger retail investors are moving toward Bitcoin as their primary store of value. This 'Digital Gold' narrative is gaining traction as Bitcoin's volatility decreases. We expect both assets to perform well in 2026, though for different reasons: Gold for institutional stability and BTC for portable wealth protection.", date: "Feb 09, 2026" },
        { id: "m3", title: "Oil Prices Stabilize Amid Trade Agreements", excerpt: "New energy corridors reduce volatility in crude futures.", content: "Global energy markets are seeing a rare period of calm. New trade agreements between major exporters and emerging manufacturing hubs in Asia have stabilized the price of Brent Crude around $75 per barrel. Additionally, the rapid expansion of renewable energy infrastructure in Europe has permanently lowered the 'peak demand' forecast for fossil fuels. This supply-demand balance is expected to keep inflation under control throughout the mid-2026 period.", date: "Feb 08, 2026" },
        { id: "m4", title: "Emerging Markets: Vietnam and Brazil", excerpt: "Manufacturing shifts and commodity exports drive massive FDI.", content: "Foreign Direct Investment (FDI) is flowing into Vietnam and Brazil at record levels. Vietnam has successfully positioned itself as the 'Global Factory' for high-tech electronics, while Brazil's agricultural and mineral exports are feeding the global recovery. For investors looking for growth outside of the US and China, these two markets offer the most attractive risk-to-reward ratios in 2026, supported by stable currencies and pro-growth domestic policies.", date: "Feb 07, 2026" },
        { id: "m5", title: "Impact of High-Frequency Trading on Retail", excerpt: "How algorithmic liquidity providers are changing the landscape.", content: "High-frequency trading (HFT) now accounts for 80% of daily equity volume. For the retail trader, this means tighter spreads and instant execution. However, it also means that 'flash crashes' are a constant risk. The 2026 market structure requires a different strategy: retail investors are moving away from day-trading and toward 'position trading,' using HFT-driven liquidity to enter and exit large positions without moving the market price.", date: "Feb 06, 2026" },
        { id: "m6", title: "Semiconductor Shortages: Which Industries are at Risk?", excerpt: "Automotive and aerospace sectors face 12-month lead times.", content: "While consumer electronics are well-supplied, the industrial semiconductor market remains tight. Specialized chips used in automotive safety systems and aerospace navigation have a 12-month backlog. Manufacturers like TSMC are prioritizing high-margin AI chips, leaving traditional industries to fight for remaining capacity. This 'tiered' chip market is creating a divergence in stock performance between tech-native companies and traditional industrial giants.", date: "Feb 05, 2026" }
    ],
    economy: [
        { id: "e1", title: "Global Inflation Report: Is the Hard Landing Avoided?", excerpt: "CPI data suggests a cooling trend, allowing central banks to pivot.", content: "The latest Global CPI report confirms that inflation has returned to the 2% target in most developed economies. This 'Soft Landing' scenario—lowering inflation without causing a recession—is a major victory for central banks. We expect the Federal Reserve and the ECB to begin a series of interest rate cuts starting in late Q1 2026. This pivot is expected to unlock billions in 'sideline' capital, fueling a massive wave of investment in infrastructure and housing.", date: "Feb 10, 2026" },
        { id: "e2", title: "Central Bank Digital Currencies (CBDC) Launch", excerpt: "Twelve nations announce 2026 pilot programs for digital cash.", content: "The era of physical cash is rapidly fading. Twelve nations, including several in the G20, have announced the official launch of their Retail CBDCs for 2026. These digital currencies are designed to coexist with commercial bank deposits while providing a programmable, instant payment rail for government services. Privacy advocates remain concerned about 'programmable spending,' but central banks insist that the efficiency gains for the economy will outweigh the risks.", date: "Feb 09, 2026" },
        { id: "e3", title: "The 4-Day Work Week: Impact on Global GDP", excerpt: "European trials show productivity gains that redefine labor economics.", content: "The results from the largest-ever 4-day work week trial are in. Across 500 companies in Europe, productivity increased by an average of 15% despite fewer hours worked. The economic implications are profound: lower healthcare costs, higher employee retention, and a surge in local 'leisure economy' spending. Economists are now debating whether a global shift in labor hours could be the key to solving the stagnant GDP growth seen in aging Western populations.", date: "Feb 08, 2026" },
        { id: "e4", title: "Housing Market Trends: Why Prices Remain High", excerpt: "Supply shortages keep property valuations elevated.", content: "Despite interest rates remaining higher than the previous decade, housing prices show no signs of a significant correction. The reason is a simple, global supply-demand imbalance. Construction of new homes has failed to keep pace with population growth and urbanization for twenty years. In 2026, real estate has become a 'supply-constrained' asset class, similar to gold, making it a powerful hedge against inflation but a difficult hurdle for first-time buyers.", date: "Feb 07, 2026" },
        { id: "e5", title: "The Great Wealth Transfer: How Gen Z is Investing", excerpt: "Over $2 trillion is shifting hands, with a heavy preference for ESG.", content: "The largest transfer of wealth in human history is underway. As 'Baby Boomer' assets pass down to younger generations, the investment landscape is shifting. Gen Z investors show a 70% higher preference for ESG (Environmental, Social, and Governance) and digital assets compared to their parents. This is forcing traditional wealth management firms to rapidly innovate, offering more transparent, app-based, and 'impact-focused' investment products to capture this new capital.", date: "Feb 06, 2026" },
        { id: "e6", title: "Universal Basic Income Experiments: Results", excerpt: "Detailed analysis of fiscal outcomes from Scandinavia and Germany.", content: "The 2025-2026 Universal Basic Income (UBI) pilots have yielded surprising results. Contrary to fears that people would stop working, the data shows that UBI recipients often used the funds to transition into higher-skilled jobs or start small businesses. While the fiscal cost of a nationwide rollout remains a major political hurdle, the success of these trials has made UBI a central topic in the upcoming global election cycles, framed as a safety net for the AI-driven labor disruption.", date: "Feb 05, 2026" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById("posts");
    const articleContainer = document.getElementById("full-article");

    // Robust Folder Detection
    const pathParts = window.location.pathname.toLowerCase().split('/').filter(Boolean);
    // On GitHub: ["Marketwire", "economy"] -> length is 2
    // Local: ["economy"] -> length is 1
    // We are in a subfolder if 'economy', 'crypto', or 'markets' is in the path
    const isSubfolder = pathParts.some(part => ["crypto", "markets", "economy"].includes(part));
    const linkPrefix = isSubfolder ? "../" : "";

    // 1. LIST PAGES LOGIC
    if (postContainer) {
        const fullPath = window.location.pathname.toLowerCase();
        let category = "home";

        // Category Check
        if (fullPath.includes("/crypto")) category = "crypto";
        else if (fullPath.includes("/markets")) category = "markets";
        else if (fullPath.includes("/economy")) category = "economy";

        let articles = [];
        if (category === "home") {
            articles = [
                newsData.crypto[0], newsData.crypto[1],
                newsData.markets[0], newsData.markets[1],
                newsData.economy[0], newsData.economy[1]
            ];
        } else {
            articles = newsData[category];
        }

        if (articles && articles.length > 0) {
            postContainer.innerHTML = articles.map(art => `
                <article style="margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
                    <span style="color: #00c853; font-size: 11px; font-weight: bold; letter-spacing: 1px;">[ MARKET WIRE ]</span>
                    <h3 style="margin: 10px 0;">
                        <a href="${linkPrefix}article.html?id=${art.id}" style="text-decoration: none; color: #111; font-size: 1.5rem; line-height: 1.2;">${art.title}</a>
                    </h3>
                    <p style="color: #555; font-size: 15px; margin-bottom: 15px;">${art.excerpt}</p>
                    <div style="font-size: 12px; color: #999;">WIRE UPDATED: ${art.date}</div>
                </article>
            `).join("");
        } else {
            postContainer.innerHTML = "<p>No headlines found for this terminal.</p>";
        }
    }

    // 2. SINGLE ARTICLE PAGE LOGIC
    if (articleContainer) {
        const params = new URLSearchParams(window.location.search);
        const artId = params.get("id");
        const allArticles = [...newsData.crypto, ...newsData.markets, ...newsData.economy];
        const article = allArticles.find(a => a.id === artId);

        if (article) {
            document.title = `${article.title} | MarketWire24`;
            document.getElementById("art-title").innerText = article.title;
            document.getElementById("art-meta").innerHTML = `<strong>PUBLISHED:</strong> ${article.date} | <strong>SOURCE:</strong> MarketWire24 Editorial`;
            document.getElementById("art-content").innerHTML = `
                <p style="font-size: 1.2rem; line-height: 1.8; color: #333;">${article.content}</p>
                <div style="margin-top: 50px; background: #f9f9f9; padding: 20px; border-left: 4px solid #00c853;">
                    <p style="margin: 0; font-style: italic; font-size: 14px;">Disclaimer: MarketWire24 is a news outlet. This article does not constitute financial advice.</p>
                </div>
            `;
        } else {
            document.getElementById("art-title").innerText = "404: Terminal Data Not Found";
            document.getElementById("art-content").innerText = "The requested wire ID does not exist in our current database.";
        }
    }
});