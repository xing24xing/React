import { useState } from 'react'
import { InputBox } from './Mynewcomponents'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState("USD");
  const [to,setTo] =  useState("INR");
  const [convert,setConvert] = useState(0);
  const info  = useCurrencyInfo(from);
  const op = Object.keys(info);
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvert(amount)
    setAmount(convert)
  }
  const con = () =>{
    setConvert(amount * info[to])
  }
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/15662559/pexels-photo-15662559/free-photo-of-japanese-woman-standing-in-front-of-a-house-with-a-cherry-branch-in-blossom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        con()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={op}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                    <InputBox
                 label="To"
                  amount={convert } // Corrected from `con` to `convert`
                  currencyOptions={op}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to} // Also change this to `to`, not `from`
                  amountDisable
                    />

                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
