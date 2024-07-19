export default function Form() {
  
  return (
    <form
      className="w-[inherit] flex flex-col gap-5"
      onSubmit={event => event.preventDefault()}
    >
      <div className="form-group flex flex-col gap-5">
        <input
          className="p-3 rounded-lg"
          name="name"
          placeholder="Enter your Name"
        />
        <input
          className="p-3 rounded-lg"
          name="email"
          placeholder="Enter your Email"
        />
        <input
          className="p-3 rounded-lg"
          name="phone-number"
          placeholder="Enter your Phone Number"
        />
        <textarea
          className="p-3 rounded-lg"
          name="message"
          rows="3"
          placeholder="Message for us"
        >
        </textarea>
      </div>
      <button
        className="w-fit px-10 py-2 rounded-full bg-primaryBlue text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
