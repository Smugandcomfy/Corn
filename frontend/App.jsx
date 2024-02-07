import React from "react"

import "@fontsource/libre-caslon-display/index.css";

import MyButton from "./components/MyButton.jsx"
import oc from "./assets/oc-svg.svg"
import twitter from "./assets/twitter-svg.svg"
import telegram from "./assets/telegram-logo.svg"
import icpswap from "./assets/icpswap.svg"
import ichouse from "./assets/ichouse.svg"
import github from "./assets/github.svg"
import corn from "./assets/corn-logo.jpg"

import banner from "./assets/banner.png"

function App() {

  return (
    <div className="App">

      <div className="hero">
          <img className="hero-background" src={banner} />
          <div className="hero-overlay"></div>
          <div className="hero-text">
              <p className="hero-quote">"It ain't much, but it's honest work."</p>
              <MyButton
              href="https://suemn-5aaaa-aaaap-qb62q-cai.icp0.io"
              text= "Corn Explorer"
              fontWeight={"700"}
              fontSize={"36px"}
              font={"Libre Caslon Display"}
              className ="corn_but"
              />
          </div>
      </div>


      <header className="link-section">
        
        <nav>
        <a href="https://github.com/Bitcorn-labs" target="_blank" rel="noopener noreferrer" className="nav-icon-link">
          <img src={corn} alt="Bitcorn Labs" style={{ width: '36px', height: '36px', paddingRight: '0px', verticalAlign: 'middle' }} />
        </a>

          <MyButton
          href="https://dodkw-jyaaa-aaaag-qbryq-cai.raw.icp0.io/229"
          text= "Whitepaper"
          fontWeight={"700"}
          fontSize={"24px"}
          font={"Libre Caslon Display"}
          />

          
        </nav>
      </header>

      {/* Social Media Bar */}
      <div className="social-media-bar">
        <a href="https://twitter.com/icBITCORN" target="_blank" rel="noopener noreferrer" className="social-media-icon">
          <img src={twitter} alt="Twitter" />
        </a>

        <a href="https://oc.app/community/btpel-lyaaa-aaaar-a4crq-cai" target="_blank" rel="noopener noreferrer" className="social-media-icon">
          <img src={oc} alt="OpenChat" />
        </a>

        <a href="t.me/BItcornChads" target="_blank" rel="noopener noreferrer" className="social-media-icon">
          <img src={telegram} alt="Telegram" />
        </a>

        <a href="https://github.com/Smugandcomfy/Bitcorn-explorer" target="_blank" rel="noopener noreferrer" className="social-media-icon">
          <img src={github} alt="Github" />
        </a>
      </div>

      {/* Text Sections */}
      <div className="text-section">
        <h2>Bitcorn Labs</h2>
        <p>Developers and Project Managers on the Internet Computer</p>
        <p>Bitcorn is a peer-2-peer internet based group of Corn Farmers Offering innovative tools for the Interent Computer & ICRC standards</p>
      </div>

      <div className="text-section">
        <h2>The Corn Explorer: ICPI Explorer</h2>
        <p>ICPI tokens are genrated from icpi.xyz. These tokens are easy to construct and deploy and have become extremely popular on the internet computer. Bitcorn Labs noticed that while these tokens are icrc1 standard and fairly advanced they lacked a block explorer and other 
          infrastructure to effectively move about the ecosystem. So this <a href="https://suemn-5aaaa-aaaap-qb62q-cai.icp0.io/" target="_blank" rel="noopener noreferrer">dapp</a> was introduced 
          to produce tx URLs so tokens could be enabled on Openchat and other platforms that require a tx URL. 
          This will allow users to query holders, and transactions because services like <a href="http://icscan.io/" target="_blank" rel="noopener noreferrer">icscan.io </a> 
          and <a href="https://ic.house/ICP" target="_blank" rel="noopener noreferrer">ic.house</a> do not pick up ICPI tokens effectively. 
          Currently, there is the production <a href="https://suemn-5aaaa-aaaap-qb62q-cai.icp0.io/" target="_blank" rel="noopener noreferrer">explorer </a> 
          The page can query balances of ALL icpi tokens via principle id and can call txs and track balances and tx’s of a select number of ICPI tokens.</p>
      </div>

      <div className="text-section">
        <h2>Projects & Canisters</h2>
        <p> </p>
        <ul>
          <li>🚽 (DRC-20)</li>
          <li>🐓 (ICRC-1) (prev. DIP-20)</li>
          <li>🌽 (ICPI)</li>
          <li>🪡 (Needful DO: SAaS)</li>
        </ul>
      </div>

      <div className="disclaimer">
        <p>
          Disclaimer: This site does not contain investment advice. All information found on this site can be inaccurate, and is presented for entertainment purposes only. No responsibility is accepted by this site for inaccurate information presented here. Engage with this website at your own risk and discretion. Always conduct your own research and consult with financial professionals before participating in any cryptocurrency activities.
        </p>
      </div>


    </div>
  )
}


export default () => (
    <App />
)
