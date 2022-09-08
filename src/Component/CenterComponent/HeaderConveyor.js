import React from 'react'
import { Helmet } from 'react-helmet-async'

const HeaderConveyor = (props) => {

  return (
    <div className="header-conveyor" style={{width: "100%", height: "5%"}}>
         <Helmet>
            <script type="text/javascript" src="https://quantifycrypto.com/widgets/marquee/js/qc-price-ticker-widget.js"></script>
         </Helmet>
         <qc-price-ticker-widget
            mode="custom"
            top-coins="true"
            gainers-and-losers="true"
            bg="#1e1e1e" theme="dark"
            currency="USD">
      </qc-price-ticker-widget>
    </div>
  )
}

export default HeaderConveyor