export default function Appointments() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Appointments</h1>
      <p className="text-center">You don’t have any upcoming appointments.</p>
      <div className="text-center">
        <a href="/doctor-listings" className="btn btn-primary">
          Find a Doctor
        </a>
      </div>
    </div>
  );
}
