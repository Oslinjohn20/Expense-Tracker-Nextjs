"use client";

import {useRef} from 'react'
import {toast} from 'react-toastify'
import addTransaction from "@/app/actions/addTransaction";

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);


  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Transaction added');
      formRef.current?.reset()
    }
  };

  return (
    <>
      <h3>Add transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="text" placeholder="Enter text.." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, postive- income){" "}
          </label>

          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount.."
            step="0.01"
          />
        </div>

        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
