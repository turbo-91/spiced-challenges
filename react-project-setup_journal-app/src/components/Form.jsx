export function Form() {
  return (
    <form className="main__entry-form">
      <h2>New Entry</h2>
      <label htmlFor="motto">Motto</label>
      <input name="motto" id="motto" />
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="notes"></textarea>
      <button>Create</button>
    </form>
  );
}
