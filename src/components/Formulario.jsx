import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [dueño, setDueño] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setDueño(paciente.dueño);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(35).substr(2);
    const fecha = Date.now().toString(35);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el Formulario
    if ([nombre, dueño, email, fecha, sintomas].includes("")) {
      console.log("Hay un campo vacio");

      setError(true);
      return;
    }

    setError(false);

    //Objeto Paciente
    const objPaciente = {
      nombre,
      dueño,
      email,
      fecha,
      sintomas,
      id: generarId(),
    };

    if (paciente.id) {
      //Editando el registro
      objPaciente.id = paciente.id;

      const pacientesAct = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objPaciente : pacienteState
      );

      setPacientes(pacientesAct);
      setPaciente({});
    } else {
      // Nuevo registro
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente]);
    }

    // reiniciar el form
    setNombre("");
    setDueño("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>

      <p className="text-lg mt-5 text-center mb-10 font-black">
        Add patients and {}
        <span className="text-indigo-600 font-bold ">Manage them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="The pet's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dueño"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner Name
          </label>

          <input
            id="dueño"
            type="text"
            placeholder="Owner's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={dueño}
            onChange={(e) => setDueño(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="Contact email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Discharge date
          </label>

          <input
            id="alta"
            type="date"
            placeholder="Contact email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "Edit Patient" : "Add Patient"}
        />
      </form>
    </div>
  );
};

export default Formulario;
