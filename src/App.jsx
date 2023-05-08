import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-800 h-screen flex justify-center items-center">
        <div className="flex bg-zinc-900 rounded-lg p-4 w-3/6 gap-2 items-center">
          <div className="w-2/6">
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="w-4/6">
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
