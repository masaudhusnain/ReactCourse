import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../State';




const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawmoney,depositmoney} = bindActionCreators(ActionCreators,dispatch)
  return (
    <div>
        <h1>Deposit/Withdraw Money</h1>
      <button type="button" class="btn btn-primary mx-2" onClick={()=>{dispatch(withdrawmoney(100))}}>-</button>
      Update Balance
      <button type="button" class="btn btn-primary mx-2" onClick={()=>{dispatch(depositmoney(100))}}>+</button>
    </div>
  )
}

export default Shop
