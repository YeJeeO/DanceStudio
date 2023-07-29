import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };


// export default function ModalDialog() {
// 	const [step, setStep] = useState();
// 	const [name, setName] = useState('');
// 	const [phone, setPhone] = useState('');
// 	const [message, setMessage] = useState('');
	
// 	function OpenModal({ action, step, close }) {
// 		if(step == 1) {
// 			return <div>
// 				<button onClick={close}>Закрыть</button>
// 				<button onClick={action}>Отправить</button>
// 			</div>
// 		} else if(step == 2) {
// 			return <div>
// 				<button onClick={close}>Закрыть</button>
// 				<p>Идет отправка!</p>
// 			</div>
// 		} else if(step == 3) {
// 			return <div>
// 				<button onClick={close}>Закрыть</button>
// 				<p>Письмо отправлено!</p>
// 			</div>
// 		} else if(step == 4) {
// 			return <div>
// 				<button onClick={close}>Закрыть</button>
// 				<p>Произошла ошибка</p>
// 			</div>
// 		} else {
// 			return null;
// 		}
// 	}

// 	function closeModal() {
// 	setStep(0);
// 	}
	
// 	async function sendForm() {
	
// 		try {
			
// 			setStep(2);
			
// 			await axios.post('http://localhost:3000/api/send-request', {
// 				name, phone, message
// 			});
			
// 			setStep(3);
			
// 			setName('');
// 			setPhone('');
// 					setMessage('');
			
// 		} catch (error) {
			
// 			setStep(4);
			
// 			console.log('Sending error', error);
// 		}
	
// 	}
	
//   return   <form method="POST" action="http://localhost:3001/registration/">
//    <div>
// 	<p>Имя</p>
// 	<input type='text' value={name} onChange={event => setName(event.target.value)}/>
// 	<p>Телефон</p>
// 	<input type='text' value={phone} onChange={event => setPhone(event.target.value)}/>
// 	<p>Сообщение</p>
// 	<input type='text' value={message} onChange={event => setMessage(event.target.value)}/>
	
// 	{step == 0 && <button onClick={() => setStep(1)}>Отправить</button>}
//       <Modal
//         isOpen={step != 0}
//         onRequestClose={closeModal}
//         style={customStyles}
//       >
// 		<OpenModal action={sendForm}
// 			step={step}
// 			close={() => setStep(0)}
// 		/>	
//       </Modal>
	
//   </div>
//   </form>
// }

export default function ModalDialog () {

	return  <form method="POST" action="http://localhost:3001/registration/">
	<div class="form-group">
	  <label for="exampleInputEmail1">Email address</label>
	  <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
	  
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>
}