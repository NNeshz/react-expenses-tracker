import { useGlobalState } from "../../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <div className="items-center justify-center">
      <h3 className="bg-zinc-700 w-full font-bold p-2 text-2xl text-white rounded-lg text-center">
        History:
      </h3>
      <div className="">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex p-1 my-1 items-center gap-2">
            <button
              onClick={() => {
                deleteTransaction(transaction.id);
              }}
              className="bg-red-500 h-10 w-10 rounded-lg text-white"
            >
              X
            </button>
            <div className="">
              <p className="text-lg font-bold text-white">
                {transaction.description}
              </p>
              <span className="tex-lg text-white">$ {transaction.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
