import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState() // Se le pasa el contexto/estado que queremos usar

  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.reduce((acc, item) => (acc += item), 0)
  
  return (
    <div className="p-4 rounded-lg flex justify-between">
      <h4 className="text-2xl font-bold text-white">Your Balance:</h4>
      <h1 className="text-2xl text-white">${total}</h1>
    </div>
  );
}

export default Balance;
