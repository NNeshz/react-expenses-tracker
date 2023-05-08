import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState(); // Se le pasa el contexto/estado que queremos usar
  const amount = transactions.map((transaction) => transaction.amount);

  console.log(amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="flex justify-around">
      <div className="">
        <h4 className="text-2xl text-white font-bold">Incomes</h4>
        <p className="text-2xl text-green-600 font-semibold">$ {income}</p>
      </div>
      <div className="">
        <h4 className="text-2xl text-white font-bold">Expenses</h4>
        <p className="text-2xl text-red-600 font-semibold">$ {expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
