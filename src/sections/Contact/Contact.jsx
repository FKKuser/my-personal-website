import style from './ContatctStyle.module.css'


function Contact() {
  return (
    <section id='contact' className={style.container}>
      <h1>Contact</h1>
      <form action="">
        <div className='formGroup'>
          <label htmlFor='name' hidden>Name</label>
          <input id='name' type='text' name='name' placeholder='Name' required></input>
        </div>

        <div className='formGroup'>
          <label htmlFor='email' hidden>Email</label>
          <input id='email' type='text' name='email' placeholder='Email' required></input>
        </div>

        <div className='formGroup'>
          <label htmlFor='message' hidden></label>
          <textarea id='message' name='message' placeholder='Message' required></textarea>
        </div>

        <input className='hover btn' type='submit' value="Submit" />

      </form>
    </section>
  )
}

export default Contact