import "./Contact.css"
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'

const Form = () => {

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_xna7tms", "template_cw71fig", e.target, "TtolZpIkJMBcmSEU3").then(res => {
			e.target.reset();
			Swal.fire({
				title: "Gracias!",
				text: "Su mensaje se ha enviado correctamente",
				icon: "success",
				button: "ACEPTAR",
				timer: "3000"
			});
		})
	}

	return (
		<section id="contact" className="container mx-auto mb-8 flex justify-center">
			<form method="POST" onSubmit={sendEmail} className="container flex w-full flex-wrap justify-center p-12 font-medium">
				<div className="row flex justify-center">
					<div className="col-5 mx-2 my-5 min-w-72 flex-col flex-wrap justify-center">
						<label className="h-6 text-xl" htmlFor="line">
							<h3 className="text-xl font-bold">CONTACTANOS</h3>
						</label>
						<input
							className="w-full min-w-52 border-0 border-b-4 border-solid border-teal-300 bg-white p-2 text-base"
							id="line"
							name="line"
							type="text"
							disabled
						/>
					</div>
					<div
						className="col-5 mx-2 my-5 flex min-w-72 flex-col flex-wrap justify-center">
						<label className="h-6 text-xl" htmlFor="name">Nombre</label>
						<input
							className="w-full min-w-52 border-0 border-b border-solid border-black bg-white p-2 text-base"
							id="name"
							name="name"
							type="text"
							required
						/>
					</div>
					<div
						className="col-5 mx-2 my-5 flex min-w-72 flex-col flex-wrap justify-center">
						<label className="h-6 text-xl" htmlFor="email">E-mail</label>
						<input
							className="w-full min-w-52 border-0 border-b border-solid border-black bg-white p-2 text-base"
							id="email"
							name="email"
							type="email"
							required
						/>
					</div>
					<div
						className="col-5 mx-2 my-5 flex min-w-72 flex-col flex-wrap justify-center">
						<label className="h-6 text-xl" htmlFor="tel">Teléfono</label>
						<input
							className="w-full min-w-52 border-0 border-b border-solid border-black bg-white p-2 text-base"
							id="tel"
							name="tel"
							type="tel"
						/>
					</div>
					<div
						className="col-5 mx-2 my-5 flex min-w-72 flex-col flex-wrap justify-center">
						<label className="h-6 text-xl" htmlFor="abstract">Consulta</label>
						<textarea
							className="h-9 min-h-9 w-full min-w-52 resize-y overflow-hidden border-0 border-b border-black p-2 text-base"
							id="abstract"
							name="textarea"
							required></textarea>
					</div>
					<div className="col-5 mx-2 my-5 flex min-w-72 flex-col flex-wrap justify-center">
						<button className="w-32 cursor-pointer rounded-xl border-none bg-teal-300 px-1 py-3 text-base font-bold text-black transition-all hover:bg-teal-600 active:bg-teal-900">
							ENVIAR
						</button>
					</div>
				</div>
			</form>
		</section>
	)

}

export default Form;