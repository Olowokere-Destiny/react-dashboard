function Info() {
  return (
    <div>
        {/* First row on md above */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-6 my-3 md:items-center">
        <div>
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">First name</h2>
          <input placeholder="Enter your first name" className="outline w-full rounded-md p-1 outline-slate-300" />
        </div>
        <div>
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">Last name</h2>
          <input placeholder="Enter your last name" className="outline w-full rounded-md p-1 outline-slate-300" />
        </div>
      </div>
      {/* Second row on md above */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-6 my-3 md:items-center">
        <div>
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">Birthday</h2>
          <input type="date" className="outline w-full rounded-md p-2 outline-slate-300" />
        </div>
        <div>
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">Gender</h2>
          <select className="outline w-full rounded-md p-2 outline-slate-300">
            <option selected>Choose gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
      {/* Third row md above....email and phone */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-6 my-3 md:items-center">
        <div>
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">E-mail</h2>
          <input type="email" placeholder="placeholder@example.com" className="outline w-full rounded-md p-2 outline-slate-300" />
        </div>
        <div>
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">Phone</h2>
          <input type="tel" placeholder="+ 123 456 789" className="outline w-full rounded-md p-2 outline-slate-300" />
        </div>
      </div>

      {/* Address */}
      <h1 className="font-semibold text-[1.1rem] md:text-[1.3rem] my-3 underline">Address</h1>
      {/* First row of form */}
      <div className="flex flex-col md:grid md:grid-cols-6 md:gap-x-6 my-3 md:items-center">
        <div className="md:col-span-4">
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">Address</h2>
          <input placeholder="Enter address" className="outline w-full rounded-md p-2 outline-slate-300" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">Number</h2>
          <input type="number" placeholder="No." className="outline w-full rounded-md p-2 outline-slate-300" />
        </div>
      </div>
      {/* Second row of form */}
      <div className="flex flex-col md:grid md:grid-cols-6 md:gap-x-6 my-3 md:items-center">
        <div className="md:col-span-2">
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">City</h2>
          <input placeholder="City" className="outline w-full rounded-md p-1 md:p-3 outline-slate-300" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">State</h2>
          <select className="outline w-full rounded-md p-1 md:p-3 outline-slate-300">
            <option selected>Pick state</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[1.1rem] my-1 font-semibold text-slate-600">ZIP</h2>
          <input placeholder="ZIP" className="outline w-full rounded-md p-1 md:p-3 outline-slate-300" />
        </div>
      </div>
      <button className="py-1 px-2 rounded-md font-[700] bg-[#202536] text-white text-[1.2rem] my-4">
          Save All
        </button>
    </div>
  );
}

export default Info;
