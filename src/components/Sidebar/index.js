import React from "react";
import "./index.css";

const Sidebar = () => (
  <nav className="sidebar">
    <div ><img className="logo"  src="https://s3-alpha-sig.figma.com/img/2256/f75b/28fdeb1cca31293321203f289a781c25?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JcHHj9Xx-7qoA9QPQFRIbI67AjYdCBuA6t9hwSePizTdQRTC-Tuz-6V58rUCEHtza-cS7Tmf2RA2l~lEiWmrBkhEfd7IGqPb1S30ZvUOqtBcV1IeXxahNykviJGuVs4EOhxPUgSXml15Eu8QZwtvzPIr7QQriq0ZnsYLtgL3a60XFZE8ojxLBLPvaivwBSKVwlsbs59Ka-oJ032~aa49TeLuNrzqTDObKaMdoU5DxnzQTZifbCncsDFbDV-TWH~DzVB6lSmOHALk9UBvrLFCUntc-uCP~zpf~uIPdlplhOoJ0O498OYf-NTUo4pti2B98uFTmNZZnby9do6qbKqwTg__"/></div>
    <ul>
      <li className="items-box"><i class="fa-solid fa-folder-open"></i><span className="item-name">Internal Audit</span><i class="fa-solid fa-chevron-right"></i></li>
      <li className="items-box"><i class="fa-regular fa-folder"></i><span className="item-name">UAT testing</span><i class="fa-solid fa-chevron-right"></i></li>
      <li className="items-box  active"><i className="active" class="fa-solid fa-user-group"></i><span className="item-name">Queue</span></li>
      <li className="items-box"><i class="fa-solid fa-link"></i><span className="item-name">Intract</span><i className="end" class="fa-solid fa-chevron-right"></i></li>
      <li className="items-box"><i class="fa-solid fa-network-wired"></i><span className="item-name">Workflow</span></li>
      <li className="items-box"><i class="fa-regular fa-user"></i><span className="item-name">Admin</span></li>
      <li className="items-box"><i class="fa-solid fa-box"></i><span className="item-name">Asset</span></li>
      <li className="items-box"><i class="fa-solid fa-1"></i><span className="item-name">Option One</span></li>
      <li className="items-box"><i class="fa-solid fa-2"></i><span className="item-name">Option Two</span></li>
      <li className="items-box"><i class="fa-solid fa-wrench"></i><span className="item-name">All Accessories</span></li>
      <li className="items-box"><i class="fa-solid fa-folder-open"></i><span className="item-name">Internal audit</span><i class="fa-solid fa-chevron-right"></i></li>
      <li className="items-box"><i class="fa-solid fa-wand-magic-sparkles"></i><span className="item-name">Decorating</span><i class="fa-solid fa-chevron-right"></i></li>
      <li className="items-box"><i class="fa-solid fa-gift"></i><span className="item-name">Presenting</span></li>
      
      
    </ul>
  </nav>
);

export default Sidebar;