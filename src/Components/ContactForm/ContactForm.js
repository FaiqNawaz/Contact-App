import React from 'react'
import styles from './Form.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md';
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";


const ContactForm = () => {
    // const {isOutline} = props;
  return (
    <section className={styles.container}> 

       <div className={styles.contact_form}>

        <div className={styles.top_btn}>
        
        <Button text = "VIA SUPPORT CHAT"  fontSize="24px" icon = {<MdMessage/>}/>

        <Button text = "VIA CALL"  fontSize="24px" icon = {<IoMdCall />}/>

        
        </div>
            
        <Button isOutline = {true} text = "VIA EMAIL "  fontSize="24px" icon = {<IoMdMail />}/>

    
        <form>

        <div className={styles.form_control}>

            <label htmlFor="name">Name</label>
            
            <input type="text" name='name' />


        </div>


        <div className={styles.form_control}>

            <label htmlFor="email">Email</label>
            
            <input type="email" name='email' />


        </div>

        <div className={styles.form_control}>

            <label htmlFor="name">Message</label>
            
            <textarea  name='Message' rows={8} />


        </div>
        
        <div style={{display:'flex',justifyContent:'end'}}>
          
          <Button text = "SUBMIT"/>

        </div>


        </form>

        
        </div> 
       
        <div className={styles.contact_image}>

        <img src="/Images/Contact.svg" alt="Contact" />

        </div> 

    </section>
  )
}

export default ContactForm
