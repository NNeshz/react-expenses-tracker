import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setDescription("");
    setAmount(0);
  };

  return (
    <div className="flex">
      <form onSubmit={onSubmit}>
        <input
          value={description}
          type="text"
          placeholder="Enter a description..."
          onChange={(e) => setDescription(e.target.value)}
          className="w-full text-white my-1 bg-zinc-700 rounded-md p-2"
        />
        <input
          value={amount}
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className="w-full text-white my-1 bg-zinc-700 rounded-md p-2"
        />
        <button className="w-full text-white my-1 bg-indigo-700 rounded-md p-2">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
