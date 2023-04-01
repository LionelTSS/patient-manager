import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarP }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center font-black">
            Manage your {""}
            <span className="text-indigo-800 font-bold animate-pulse">
              Patients and Shifts
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarP={eliminarP}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center animate-bounce text-red-500">
            No patients
          </h2>
          <p className="text-xl mt-5 mb-10 text-center font-black">
            Start adding patients {""}
            <span className="text-indigo-800 font-bold animate-pulse">
              and they will appear in this place
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
