interface AppointmentCardProps {
  doctorName: string;
  specialization: string;
  time: string;
}

const AppointmentCard = ({
  doctorName,
  specialization,
  time,
}: AppointmentCardProps) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{doctorName}</h5>
      <p className="card-text">Specialization: {specialization}</p>
      <p className="card-text">Available at: {time}</p>
      <button className="btn btn-primary">Book Appointment</button>
    </div>
  </div>
);

export default AppointmentCard;
