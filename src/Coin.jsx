import React from 'react'
import './coin.css'

function Coin( {image, name, symbol, price, volume, pricechange, marketcap }  ) {
    return (
        <>

        <div class="container c">
            <div class="row">
                <div class="col-sm">
                <img src={image} alt="crypto" />
                </div>
                <div class="col-sm">
                <h1 className='name'>{name}</h1>
                </div>
                <div class="col-sm">
                <p className="coin-symbol">{symbol}</p> 
                </div>
                <div class="col-sm">
                <p className="coin-price">${price}</p>
                </div>
                <div class="col-sm">
                <p className="coin-volume">${volume.toLocaleString()}</p>
                </div>
                <div class="col-sm">
                {pricechange < 0 ? (
                    <p className="coin-percent red">
                        {pricechange.toFixed(2)} %
                    </p>
                ): <p className="coin-percent green">
                        {pricechange.toFixed(2)} %
                    </p>
                }
                </div>
                <div class="col-sm">
                <p className="coin-marketcap">
                    ${marketcap.toLocaleString()}
                </p>
                </div>
            </div>
        </div>

        <div class="container c2">
            <div class="row">
                <div class="col-sm">
                <img src={image} alt="crypto" />
                </div>
                <div class="col-sm">
                <h1 className='name'>Name : {name}</h1>
                </div>
                <div class="col-sm">
                <p className="coin-symbol">Symbol : {symbol}</p> 
                </div>
                <div class="col-sm">
                <p className="coin-price">Price : ${price}</p>
                </div>
                <div class="col-sm">
                <p className="coin-volume">Volume : ${volume.toLocaleString()}</p>
                </div>
                <div class="col-sm">Coin-Percent : 
                {pricechange < 0 ? (
                    <p className="coin-percent red">
                        {pricechange.toFixed(2)} %
                    </p>
                ): <p className="coin-percent green">
                        {pricechange.toFixed(2)} %
                    </p>
                }
                </div>
                <div class="col-sm"> Market Cap : 
                <p className="coin-marketcap">
                    ${marketcap.toLocaleString()}
                </p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Coin