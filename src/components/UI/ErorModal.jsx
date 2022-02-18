import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import classes from './Modal.module.css'



const Modal =(props)=>{
    return(
        <div className ={classes.modal}>
            
            <header className={classes.header}><h2>{props.message.name}</h2></header>
            <div className={classes.content}><p>{props.message.title}</p></div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm} className ={classes.btn}>Okay</Button>
                {props.children}
            </footer>

        </div>
    )
}

const Backdrop = (props)=>{
  return  <div className={classes.backdrop}/>

}

const ErorModal = (props) => {
  return(
      <>
        
     {ReactDOM.createPortal(
         <Modal  message={props.message}   onConfirm ={props.onConfirm}> {props.children}</Modal>,
         document.getElementById('modal-root')
     )},
      {ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm}/>,
          document.getElementById("backdrop-root")
     )}
      
     

     </>
  ) 
};

export default ErorModal;
